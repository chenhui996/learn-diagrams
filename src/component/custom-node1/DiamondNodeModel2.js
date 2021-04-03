import { NodeModel } from "storm-react-diagrams";
import { DiamondPortModel2 } from "./DiamondPortModel2";

export class DiamondNodeModel2 extends NodeModel {
	constructor() {
		super("diamond2");
		this.addPort(new DiamondPortModel2("top"));
		this.addPort(new DiamondPortModel2("left"));
		this.addPort(new DiamondPortModel2("bottom"));
		// this.addPort(new DiamondPortModel("right"));
	}
}
