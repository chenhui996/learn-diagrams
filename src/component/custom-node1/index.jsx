import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
} from "storm-react-diagrams";
import * as React from "react";

// import the custom models
import { SimplePortFactory } from "./SimplePortFactory";

// 1
import { DiamondNodeModel } from "./DiamondNodeModel";
import { DiamondNodeFactory } from "./DiamondNodeFactory";
import { DiamondPortModel } from "./DiamondPortModel";

// 2
import { DiamondNodeModel2 } from "./DiamondNodeModel2";
import { DiamondNodeFactory2 } from "./DiamondNodeFactory2";
import { DiamondPortModel2 } from "./DiamondPortModel2";

const customNode = () => {
  return (
    <>
      <h1>12313213</h1>
      <p>dsadsadasdsadsa</p>
    </>
  );
};

/**
 * @Author Dylan Vorster
 */
export default function CustomNodeOne() {
  let engine = new DiagramEngine();
  engine.installDefaultFactories();

  engine.registerPortFactory(
    new SimplePortFactory("diamond", (config) => new DiamondPortModel())
  );
  engine.registerPortFactory(
    new SimplePortFactory("diamond2", (config) => new DiamondPortModel2())
  );
  engine.registerNodeFactory(new DiamondNodeFactory());
  engine.registerNodeFactory(new DiamondNodeFactory2());

  // start

  let model = new DiagramModel();

  // port node
  let nodePort = new DiamondNodeModel();
  nodePort.setPosition(350, 200);

  // port node2
  let nodePort2 = new DiamondNodeModel2();
  nodePort2.setPosition(950, 200);

  // // child node
  // let node0 = new DefaultNodeModel(<customNode />, "orange");
  // let portZeroOut = node0.addOutPort("Out");
  // node0.setPosition(200, 20);

  let node1 = new DefaultNodeModel("Node 1", "red");
  // let portOneIn = node1.addInPort("In");
  let portOneOut = node1.addOutPort("Out");
  node1.setPosition(400, 50);

  let node2 = new DefaultNodeModel("Node 2", "yellow");
  let port2 = node2.addInPort("Out");
  node2.setPosition(400, 500);

  let node3 = new DefaultNodeModel("Node 3", "blue");
  let port3 = node3.addInPort("In");
  node3.setPosition(150, 250);

  let node4 = new DefaultNodeModel("Node 4", "green");
  let port4 = node4.addInPort("Out");
  node4.setPosition(700, 250);

  // let link0 = portZeroOut.link(portOneIn);
  let link1 = portOneOut.link(nodePort.getPort("top"));
  let link2 = port2.link(nodePort.getPort("bottom"));
  let link3 = port3.link(nodePort.getPort("left"));
  let link4 = port4.link(nodePort.getPort("right"));

  model.addAll(
    nodePort,
    nodePort2,
    // node0,
    node1,
    node2,
    node3,
    node4,
    // link0,
    link1,
    link2,
    link3,
    link4
  );

  engine.setDiagramModel(model);

  return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
}
