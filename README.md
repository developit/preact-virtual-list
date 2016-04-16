# `<VirtualList />` for [Preact]

[![NPM](https://img.shields.io/npm/v/preact-virtual-list.svg)](https://www.npmjs.com/package/preact-virtual-list)
[![travis-ci](https://travis-ci.org/developit/preact-virtual-list.svg?branch=master)](https://travis-ci.org/developit/preact-virtual-list)

> A "virtual" list component that renders only visible rows of a given data set.


---


### Simple Example

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


### Functional Example

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
