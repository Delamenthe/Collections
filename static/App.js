'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IssueList = require('./IssueList.jsx');

var _IssueList2 = _interopRequireDefault(_IssueList);

var _IssueEdit = require('./IssueEdit.jsx');

var _IssueEdit2 = _interopRequireDefault(_IssueEdit);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById('contents');
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

// const RoutedApp = () => (
//     <HashRouter>
//         <Routes>
//             <Route path="/" Navigate to="/issues"/>
//             <Route path="/issues" component={IssueList} />
//             <Route path="/issues/:id" component={IssueEdit} />
//             <Route path="*" component={NoMatch} />
//         </Routes>
//     </HashRouter>
// );
//
// ReactDOM.render(<RoutedApp />, contentNode);
_reactDom2.default.render(_react2.default.createElement(_IssueList2.default, null), contentNode);
if (module.hot) {
  module.hot.accept();
}