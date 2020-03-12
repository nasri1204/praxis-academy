const string = 'aku akan menjadi url slug'

const slugify = string =>
    string
    .toUpperCase()
    .trim()
    .split(' ')
    .join('-')

console.log(slugify(string))