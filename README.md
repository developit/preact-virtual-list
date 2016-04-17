# `<VirtualList />` <sub>_for [Preact]_</sub>

[![NPM](https://img.shields.io/npm/v/preact-virtual-list.svg)](https://www.npmjs.com/package/preact-virtual-list)
[![Travis](https://travis-ci.org/developit/preact-virtual-list.svg?branch=master)](https://travis-ci.org/developit/preact-virtual-list)

A "virtual" list component that renders only visible rows of a given data set.

Useful for those super important business applications where one must show all million rows.

<img alt="preview" src="https://i.gyazo.com/866e97be9075dd63260dbc5df30075ec.gif" width="420">


---


## Props

| Prop | Type | Description |
|------|------|-------------|
| **`data`** | _Array_ | List of data items |
| **`renderRow`** | _Function_ | Renders a single row |
| **`rowHeight`** | _Number_ | Static height of a row |
| **`overscanCount`** | _Number_ | Amount of rows to render above and below visible area of the list `default: 10` |
| **`sync`** | _Boolean_ | If `true`, forces synchronous rendering \* |

> _**A note on synchronous rendering:** It's best to try without `sync` enabled first. If the normal async rendering behavior is fine, it's best to leave sync turned off. If you're seeing flickering, enabling sync will ensure every update gets out to the screen without dropping renders, but does so at the expense of actual framerate._


## Usage Example

```js
<VirtualList
    data={['a', 'b', 'c']}
    renderRow={ row => <div>{row}</div> }
    rowHeight={22},
    overscanCount={10}
    sync
/>
```


---


## Simple Example

[**View this example on JSFiddle**](https://jsfiddle.net/developit/qqan9pdo/)

```js
import VirtualList from 'preact-virtual-list';

// Generate 100,000 rows of data
const DATA = [];
for (let x=1e5; x--; ) DATA[x] = `Item #${x+1}`;

class Demo extends Component {
    // 30px tall rows
    rowHeight = 30;

    // Renders a single row
    renderRow(row) {
        return <div class="row">{row}</div>;
    }

    render() {
        return (
            <VirtualList sync class="list"
                data={DATA}
                rowHeight={this.rowHeight}
                renderRow={this.renderRow}
            />
        );
    }
}

render(Demo, document.body);
```


---


## Functional Example

[**View this example on JSFiddle**](https://jsfiddle.net/developit/qqan9pdo/)

```js
import VirtualList from 'preact-virtual-list';

// Generate 100,000 rows of data
const DATA = [];
for (let x=1e5; x--; ) DATA[x] = `Item #${x+1}`;

// renders a single row
const Row = row => (
    <div class="row">{row}</div>
);

render((
    <VirtualList data={DATA} rowHeight={30} renderRow={Row} />
), document.body);
```


---


### License

[MIT]


[Preact]: https://github.com/developit/preact
[MIT]: http://choosealicense.com/licenses/mit/
