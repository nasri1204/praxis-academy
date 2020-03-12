let list = [1, 2, 3, 4, 5]
let acumulate = 0

function sum(list, acumulate) {
    if (list.length == 0) {
        return acumulate
    }
    return sum(list.slice(1), acumulate + list[0])
}

console.log(sum(list, acumulate))
console.log(list)
console.log(acumulate)