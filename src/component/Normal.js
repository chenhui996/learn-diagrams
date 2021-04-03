import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
} from "storm-react-diagrams";

export default function SimpleDiagramWidget() {
  // 1) setup the diagram engine
  var engine = new DiagramEngine();
  engine.installDefaultFactories();

  // 2) setup the diagram model
  var model = new DiagramModel();

  // 3) create a default node
  var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
  let port1 = node1.addOutPort("Out");
  node1.setPosition(300, 100);

  // 4) create another default node
  var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
  let port2 = node2.addInPort("Out");
  node2.setPosition(400, 200);

  // 5) link the ports
  let link1 = port1.link(port2);

  // 6) add the models to the root graph
  model.addAll(node1, node2, link1);

  // 7) load model into engine
  engine.setDiagramModel(model);
  return (
      <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />
  );
}
