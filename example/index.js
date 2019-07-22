import { Component } from 'preact';

import VirtualList from '../src';
import './style';

const DATA = [];
for (let x=1e5; x--; ) DATA[x] = `Item #${x+1}`;

const Row = row => <div class="row">{row}</div>;

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>preact-virtual-list-example</h1>
				<VirtualList data={DATA} rowHeight={30} renderRow={Row} class="list" id="vl" />
			</div>
		);
	}
}
