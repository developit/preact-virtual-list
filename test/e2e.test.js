
// eslint-disable-next-line no-undef
jest.setTimeout(10000);

// eslint-disable-next-line no-undef
describe('preact-virtual-list', () => {

	// eslint-disable-next-line no-undef
	beforeAll(async () => {
		// eslint-disable-next-line no-undef
		await page.goto('http://localhost:8080');
	});

	// eslint-disable-next-line no-undef
	it('should be able to retrieve example page', async () => {
		// eslint-disable-next-line no-undef
		await expect(page.title()).resolves.toMatch('preact-virtual-list-example');
	});
});
