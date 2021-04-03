import * as SRD from "storm-react-diagrams";
import { DiamonNodeWidget2 } from "./DiamondNodeWidget2";
import { DiamondNodeModel2 } from "./DiamondNodeModel2";
import * as React from "react";

export class DiamondNodeFactory2 extends SRD.AbstractNodeFactory {
	constructor() {
		super("diamond2");
	}

	generateReactWidget(diagramEngine, node) {
		return <DiamonNodeWidget2 node={node} />;
	}

	getNewInstance() {
		return new DiamondNodeModel2();
	}
}
