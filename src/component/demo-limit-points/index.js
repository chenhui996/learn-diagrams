import * as React from "react";
import {
	DiagramEngine,
	DiagramModel,
	DefaultNodeModel,
	DiagramWidget,
} from "storm-react-diagrams";

/**
 * Shows that a limit of points can be set for links
 */
const LimitPoints =  () => {
	// setup the diagram engine
	var engine = new DiagramEngine();
	engine.installDefaultFactories();

	var model = new DiagramModel();

	//3-A) create a default node
	var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
	let port = node1.addOutPort("Out");
	node1.setPosition(100, 100);

	//3-B) create another default node
	var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
	let port2 = node2.addInPort("In");
	node2.setPosition(400, 100);

	// link the ports
	let link1 = port.link(port2);

	model.addAll(node1, node2, link1);

	engine.setDiagramModel(model);

	var props = {
		diagramEngine: engine,
		maxNumberPointsPerLink: 5
	};

	return (
		<div>
			<p>A maximum of 5 points can be created per link.</p>
			<DiagramWidget className="srd-demo-canvas" {...props} />
		</div>
	);
};

export default LimitPoints;
