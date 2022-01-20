import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import Issue from './issue.js';
import 'babel-polyfill';
import SourceMapSupport from 'source-map-support';
import {config} from "dotenv";

import cors from "cors";

config();
SourceMapSupport.install();

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(cors())

let db;

app.get('/api/issues', (req, res) => {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    db.collection('issues').find().toArray()
      .then(issues => {
        const metadata = { total_count: issues.length };
        res.json({ _metadata: metadata, records: issues });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
      });
});

app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  newIssue.created = new Date();
  if (!newIssue.status) {
    newIssue.status = 'New';
  }

  const err = Issue.validateIssue(newIssue);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  db.collection('issues').insertOne(Issue.cleanupIssue(newIssue)).then(result =>
      db.collection('issues').find({ _id: result.insertedId }).limit(1)
          .next()
  )
      .then(savedIssue => {
        res.json(savedIssue);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
      });
});

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  db = client.db('MyDB');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
});