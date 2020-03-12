const a = Object.freeze({
    foo: {
        greeting: 'Hello'
    },
    bar: 'yang',
    baz: 'disana!'
})

a.foo.greeting = 'Sayonara'

console.log(`${a.foo.greeting}, ${a.bar} ${a.baz}`)