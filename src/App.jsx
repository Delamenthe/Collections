import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';

const contentNode = document.getElementById('contents');
const NoMatch = () =><p>Page Not Found</p>;

const RoutedApp = () => (
    <HashRouter>
        <Routes>
            <Route path="/" Navigate to="/issues"/>
            <Route path="/issues" component={IssueList} />
            <Route path="/issues/:id" component={IssueEdit} />
            <Route path="*" component={NoMatch} />
        </Routes>
    </HashRouter>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
