const R = require('ramda');

const list1 = [
    { tail: 'A', head: 'B', distance: '5' },
    { tail: 'B', head: 'C', distance: '4' },
    { tail: 'C', head: 'D', distance: '8' },
    { tail: 'D', head: 'C', distance: '8' },
    { tail: 'D', head: 'E', distance: '6' },
    { tail: 'A', head: 'D', distance: '5' },
    { tail: 'C', head: 'E', distance: '2' },
    { tail: 'E', head: 'B', distance: '3' },
    { tail: 'A', head: 'E', distance: '7' }
];

const list2 = [{ tail: 'A', head: 'B' }, { tail: 'B', head: 'C' }];

const result = R.innerJoin(
    (item1, item2) => item1.tail === item2.tail && item1.head === item2.head,
    list1,
    list2
);

console.log(result);