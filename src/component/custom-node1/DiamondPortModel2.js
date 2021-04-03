import * as _ from "lodash";
import { PortModel, DefaultLinkModel } from "storm-react-diagrams";

export class DiamondPortModel2 extends PortModel {
	position
	constructor(pos = "top") {
		super(pos, "diamond2");
		this.position = pos;
	}

	serialize() {
		return _.merge(super.serialize(), {
			position: this.position
		});
	}

	deSerialize(data, engine) {
		super.deSerialize(data, engine);
		this.position = data.position;
	}

	createLinkModel() {
		return new DefaultLinkModel();
	}
}
