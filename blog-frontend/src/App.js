import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  LoginPage,
  RegisterPage,
  WritePage,
  PostPage,
  PostListPage
} from './pages';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={['/@:username', '/']} component={PostListPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/write' component={WritePage} />
        <Route path='/@:username/:postId' component={PostPage} />
      </Switch>
    </>
  );
}

export default App;
