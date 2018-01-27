class Flow {
	async run(url) {
		let browser = await this.initializeBrowser();
		let page = await this.initializePage(browser);

		await this.renderPage(page);
		await this.closeBrowser(browser);
	}

	async initializeBrowser() {
		// s
	}

	async closeBrowser(browser) {
		// s
	}

	async initializePage(browser) {
		// s
	}

	async renderPage(page) {
		// s
	}
}

module.exports = Flow;
