import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticlePage from '../containers/ArticlePage'
import ArticleListPage from "../containers/ArticleListPage";
import WriteFormPage from "../containers/WriteFormPage";
import LoginPage from '../containers/LoginPage'
import JoinPage from '../containers/JoinPage'
import Nav from '../components/Nav'
import UserInfoUpdatePage from "../containers/UserInfoUpdatePage";

export default function() {
  return (
    //   리액트 라우터를 이용해서 페이지를 나눈다
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/articles" component={ArticleListPage} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/write" component={WriteFormPage} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/join" component={JoinPage}/>
        <Route path="/userupdate" component={UserInfoUpdatePage}/>
        <Route component={ArticleListPage}/>
      </Switch>
    </Router>
  );
}
