db = new Mongo().getDB('MyMongoDB');
db.issues.remove({});
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/MyDB', function(err, db) {
    db.collection('issues').find().toArray(function(err, docs) {
        console.log('Result of find:', docs);
        db.close();
    });
});
db.issues.insert([
    {
        status: 'Open', owner: 'Ravan',
        created: new Date('2020-08-15'), effort: 5,completionDate: undefined,
    title: 'Error in console when clicking Add',
},
{
    status: 'Assigned', owner: 'Eddie',
    created: new Date('2020-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel',
},
]);
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });