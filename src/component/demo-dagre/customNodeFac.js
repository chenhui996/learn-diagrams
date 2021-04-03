import {
  DefaultNodeModel,
} from "storm-react-diagrams";

const customNodeFac = (name, color, inLabel, outLabel) => {
  let node = new DefaultNodeModel(name, color);
  // node.setPosition(x, y);
  let inPort = inLabel ? node.addInPort(inLabel) : null;
  let outPort = outLabel ? node.addOutPort(outLabel) : null;

  return { node, inPort, outPort };
};

export default customNodeFac;
