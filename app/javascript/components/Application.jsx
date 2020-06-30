import React from "react";
import { Route } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./board/BoardContainer";

const Application = () => {
  return (
    <div>
      <TopNav />
      <Route path="/" exact component={BoardsDashboardContainer} />
      {/*
      TODO: need to differentiate board and card id
      <Route path="/cards/:id" exact component={CardModalContainer} />
    */}
      <Route path="/(boards|cards)/:id" exact component={BoardContainer} />
    </div>
  );
};

export default Application;
