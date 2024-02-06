import FrameworkClient from "strike-discord-framework";
import Logger from "strike-discord-framework/dist/logger.js";

class Application {
	public log: Logger;
	constructor(private framework: FrameworkClient) {
		this.log = framework.log;
	}

	public async init() {}
}

export { Application };
