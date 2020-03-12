const double = n => n * 2
const doubleMap = numbers => numbers.map(double)

console.log(doubleMap([2, 3, 1]))

//===============================
const double2 = n => n.points * 2
const doubleMap2 = numbers2 => numbers2.map(double2)

console.log(doubleMap2([
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4 }
]))