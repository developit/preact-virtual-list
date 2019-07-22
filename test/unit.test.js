import { h } from 'preact';
import render from 'preact-render-to-string';
import htmlLooksLike from 'html-looks-like';

import VirtualList from '../src';

// eslint-disable-next-line no-undef
describe('preact-virtual-list', () => {
	// eslint-disable-next-line no-unused-vars
	const instance = render(
		<VirtualList
			data={['a', 'b', 'c']}
			renderRow={ row => <div>{row}</div> }
			rowHeight={22}
			overscanCount={10}
			sync
		/>);

	// eslint-disable-next-line no-undef
	it('should export a class', () => {
		// eslint-disable-next-line no-undef
		expect(VirtualList).toBeInstanceOf(Function);
	});

	// eslint-disable-next-line no-undef
	it('should render a simple list', () => {
		htmlLooksLike(instance, `
			<div>
				<div style="position:relative; overflow:hidden; width:100%; min-height:100%; height:66px;">
					<div style="position:absolute; top:0; left:0; height:100%; width:100%; overflow:visible; top:0px;">
						<div>a</div>
						<div>b</div>
						<div>c</div>
					</div>
				</div>
			</div>
		`);
	});
});
