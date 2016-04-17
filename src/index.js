import { h, Component } from 'preact';

const STYLE_INNER = 'position:relative; overflow:hidden; width:100%; min-height:100%;';

const STYLE_CONTENT = 'position:absolute; top:0; left:0; height:100%; width:100%; overflow:visible;';

/** Virtual list, renders only visible items.
 *	@param {Array<*>} data         List of data items
 *	@param {Function} renderRow    Renders a single row
 *	@param {Number} rowHeight      Static height of a row
 *	@param {Number} overscanCount  Amount of rows to render above and below visible area of the list
 *	@param {Boolean} [sync=false]  true forces synchronous rendering
 *	@example
 *		<VirtualList
 *			data={['a', 'b', 'c']}
 *			renderRow={ row => <div>{row}</div> }
 *			rowHeight={22}
 *			sync
 *		/>
 */
export default class VirtualList extends Component {
	resize = () => {
		if (this.state.height!==this.base.offsetHeight) {
			this.setState({ height: this.base.offsetHeight });
		}
	};

	handleScroll = () => {
		this.setState({ offset: this.base.scrollTop });
		if (this.props.sync) this.forceUpdate();
	};

	componentDidUpdate() {
		this.resize();
	}

	componentDidMount() {
		this.resize();
		addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
		removeEventListener('resize', this.resize);
	}

	render({ data, rowHeight, renderRow, overscanCount=10, sync, ...props }, { offset=0, height=0 }) {
		// first visible row index
		let start = (offset / rowHeight)|0;

		// last visible row index
		let end = start + 1 + (height / rowHeight)|0;

		if (!sync && overscanCount) {
			start = Math.max(0, start - overscanCount);
			end += overscanCount;
		}

		// data slice currently in viewport plus overscan items
		let selection = data.slice(start, end);

		return (
			<div onScroll={this.handleScroll} {...props}>
				<div style={`${STYLE_INNER} height:${data.length*rowHeight}px;`}>
					<div style={`${STYLE_CONTENT} top:${start*rowHeight}px;`}>
						{ selection.map(renderRow) }
					</div>
				</div>
			</div>
		);
	}
}
