# AppGit

ABOUT

This app is intended to allow searching users within GitHub accounts using GitHub API. Searching starts using the search box at the header of the app. Once the form is send, the found user is displayed along with links to:

 repos
 followers
 followings
Following any of those links displays its contents right below the current view of the user.

Getting started

Install dependencies

Execute:  npm install

Development environment

Start the app

Execute: npm start - to run the development server on http://localhost:3000.
Note that the development build is not optimized.
To create a production build, use npm run build.


TECH STACK

React

React DOM

React Router - Navigation component

Redux - State container for JavaScript apps

Redux Thunk - Asynchronous actions



WHATS MISSING
 It will be improved for sure

METHODOLOGY

This app makes heavy use of react router to inject views on different childrens positions. This all starts on the header, the form presented there uses React router browserHistory to programmatically change the url. The app starts at an emptly state and after the search the Profile component in loaded. All subsequent components are children of this one so they all will be layeded right below.

The use of a react lifecycle method componentDidUpdate() was needed precisely because selecting users in the followers or following listings had to change the already loaded user. Meaning the loaded user had to give way to the new user if a selection on any list was made. Another lifecycle method used was componentDidMount(), used to fetch data from the Github API once the component finished its loaded phase.

TESTS

 However, a basic testing it can be covered by react-scripts 0.9.0. . See https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests


 Test cam be done with mocha as test framework, chai as assertion library and jsdom to provide a pure JavaScript DOM implementation which runs in node.  Enzyme can be used as a helper with react components.
