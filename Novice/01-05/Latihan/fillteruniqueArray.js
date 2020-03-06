function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Nasri", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Nasri", "Hare", "Nasri", "Hare", ":-O"
];

console.log(unique(values));