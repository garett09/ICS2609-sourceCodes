# Cheat sheet: JavaScript Array methods

Deriving a new Array from an existing Array:

```js
['■','●','▲'].slice(1, 3)          ⟼ ['●','▲']
['■','●','■'].filter(x => x==='■') ⟼ ['■','■']
    ['▲','●'].map(x => x+x)        ⟼ ['▲▲','●●']
    ['▲','●'].flatMap(x => [x,x])  ⟼ ['▲','▲','●','●']
```

Computing a summary of an Array:

```js
['■','●','▲'].some(x => x==='●')  ⟼ true
['■','●','▲'].every(x => x==='●') ⟼ false

['■','●','▲'].join('-') ⟼ '■-●-▲'

['■','●'].reduce((result,x) => result+x, '▲')      ⟼ '▲■●'
['■','●'].reduceRight((result,x) => result+x, '▲') ⟼ '▲●■'
```

Changing all of an Array (the input Array is modified and returned):

```js
['■','●','▲'].fill('●') ⟼ ['●','●','●']
['■','●','▲'].reverse() ⟼ ['▲','●','■']
['■','●','■'].sort()    ⟼ ['■','■','●']
```

Finding Array elements:

```js
['■','●','■'].includes('■')           ⟼ true
['■','●','■'].indexOf('■')            ⟼ 0
['■','●','■'].lastIndexOf('■')        ⟼ 2
['■','●','■'].find(x => x==='■')      ⟼ '■'
['■','●','■'].findIndex(x => x==='■') ⟼ 0
```

Listing elements (spreading via `...` is needed because the methods return iterables):

```js
[...['■','●','▲'].keys()]    ⟼ [0,1,2]
[...['■','●','▲'].values()]  ⟼ ['■','●','▲']
[...['■','●','▲'].entries()] ⟼ [[0,'■'],[1,'●'],[2,'▲']]
```

Adding or removing an element at either end of an Array:

```js
arr=['■','●'];     arr.push('▲');    arr ⟼ ['■','●','▲']
arr=['■','●','▲']; arr.pop();        arr ⟼ ['■','●']

arr=['■','●'];     arr.unshift('▲'); arr ⟼ ['▲','■','●']
arr=['▲','■','●']; arr.shift();      arr ⟼ ['■','●']
```

## Check out this quick reference for Array methods

My book “JavaScript for impatient programmers” contains [a comprehensive quick reference](https://exploringjs.com/impatient-js/ch_arrays.html#quickref-arrays):

* Lists all Array methods (a few methods were omitted in the cheat sheet)
* Brief explanations
* Code examples
* Method type signatures