import React from 'react';
import ReactDOM from 'react-dom';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';



const contentNode = document.getElementById('contents');
const NoMatch = () =><p>Page Not Found</p>;

const RoutedApp = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/issues" />} />
            <Route path="/issues" element={<IssueList/>} />
            <Route path="/issues/:id" element={<IssueEdit params={'issue'}/>}/>
            <Route path="*" element={NoMatch} />
        </Routes>
    </HashRouter>
);

ReactDOM.render(<RoutedApp />, contentNode);
if (module.hot) {
  module.hot.accept();
}
