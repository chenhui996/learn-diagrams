import * as React from "react";

import { BodyWidget } from "./components/BodyWidget";
import { Application } from "./Application";

import "./sass/main.scss";

const DragDrop = () => {
  var app = new Application();

  return <BodyWidget app={app} />;
};

export default DragDrop;
