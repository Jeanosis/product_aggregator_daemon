const Flow = require('./lib/flow');

(async () => {
	let flow = new Flow();

	await flow.run('https://www.moyo.ua');

	process.exit(0);
})();
