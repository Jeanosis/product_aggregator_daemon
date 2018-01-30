const phantom = require('phantom');

class Flow {
	async run(url) {
		let browser = await this.initializeBrowser();
		let page = await this.initializePage(browser);

		await this.renderPage(page, url);
		await this.closeBrowser(browser);
	}

	async initializeBrowser() {
		let browser = await phantom.create(['--proxy-type=none', '--ignore-ssl-errors=yes']);
		return browser;
	}

	async closeBrowser(browser) {
		// browser.exit();
	}

	async initializePage(browser) {
		let page = await browser.createPage();
		return page;
	}

	async renderPage(page, url) {
		// page.open(url, function() {
		// 	page.render('github.png');
		// 	phantom.exit();
		// });
	}
}

module.exports = Flow;
