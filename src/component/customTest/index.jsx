import {
  DiagramEngine,
  DiagramModel,
  DiagramWidget,
} from "storm-react-diagrams";
import customNodeFac from "./customNodeFac";

export default function SimpleDiagramWidget() {
  let engine = new DiagramEngine();
  engine.installDefaultFactories();

  let model = new DiagramModel();

  // start
  const { node: startNode, outPort: startOut } = customNodeFac(
    "开始",
    "blue",
    "",
    " "
  );
  startNode.setPosition(300, 100);

  // child 1
  const { node: nodeOne, inPort: inOne, outPort: outOne } = customNodeFac(
    "规则集",
    "blue",
    "输入",
    "输出"
  );
  nodeOne.setPosition(400, 150);

  // child 2 - 1
  const {
    node: nodeTwoOne,
    inPort: inTwoOne,
    outPort: outTwoOne,
  } = customNodeFac("条件", "orange", "输入", "输出");
  nodeTwoOne.setPosition(600, 100);

  // child 2 - 2
  const {
    node: nodeTwoTwo,
    inPort: inTwoTwo,
    outPort: outTwoTwo,
  } = customNodeFac("条件", "orange", "输入", "输出");
  nodeTwoTwo.setPosition(600, 200);

  // child 3 - 1 - 1
  const {
    node: nodeThreeOneOne,
    inPort: inThreeOneOne,
    outPort: outThreeOneOne,
  } = customNodeFac("规则集", "blue", "输入", "输出");
  nodeThreeOneOne.setPosition(800, 150);

  // child 3 - 2 - 1
  const { node: nodeThreeTwoOne, inPort: inThreeTwoOne } = customNodeFac(
    "结束",
    "green",
    " ",
    ""
  );
  nodeThreeTwoOne.setPosition(750, 350);

  // 5) link the ports
  let startLinkOne = startOut.link(inOne);
  let oneLinkTwoOne = outOne.link(inTwoOne);
  let oneLinkTwoTwo = outOne.link(inTwoTwo);
  let TwoOneLinkThreeOne = outTwoOne.link(inThreeOneOne);
  let TwoTwoLinkThreeOne = outTwoTwo.link(inThreeTwoOne);

  startLinkOne.addLabel("13402");
  oneLinkTwoOne.addLabel("13402");
  oneLinkTwoTwo.addLabel("13402");
  TwoOneLinkThreeOne.addLabel("10000");
  TwoTwoLinkThreeOne.addLabel("3402");

  // 6) add the models to the root graph
  model.addAll(
    startNode,
    nodeOne,
    nodeTwoOne,
    nodeTwoTwo,
    nodeThreeOneOne,
    nodeThreeTwoOne,
    startLinkOne,
    oneLinkTwoOne,
    oneLinkTwoTwo,
    TwoOneLinkThreeOne,
    TwoTwoLinkThreeOne
  );

  // 7) load model into engine
  engine.setDiagramModel(model);
  return <DiagramWidget className="srd-demo-canvas" smartRouting={true} diagramEngine={engine} />;
}
