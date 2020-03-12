// versi fungsi declarasi

// const methodCat = {
//     makan: function(porsi) {
//         this.lapar += porsi
//         console.log(`${this.nama} selesai makan.`)
//     },

//     tidur: function(jam) {
//         this.kelelahan -= jam
//         this.lapar -= jam
//         console.log(`${this.nama} selesai tidur.`)

//     },

//     rawat: function(happy) {
//         this.kesepian -= happy
//         if (this.kelelahan > 30) {
//             console.log(`${this.nama} tidak ingin di ganggu.`)
//         } else {
//             console.log(`${this.nama} tidak kesepian lagi.`)
//         }
//     },

//     main: function(main) {
//         this.kelelahan += main
//         this.bahagia += main
//         console.log(`${this.nama} mulai kelelahan, tapi ${this.nama} merasa senang.`)
//     }

// }

// function Cat(nama, kelelahan, lapar, kesepian, bahagia) {
//     let kucing = Object.create(methodCat)
//     kucing.nama = nama
//     kucing.kelelahan = kelelahan
//     kucing.lapar = lapar
//     kucing.kesepian = kesepian
//     kucing.bahagia = bahagia

//     return kucing
// }

// let muezza = Cat('Muezza', 30, 20, 30, 10)








// versi prototype

// function Cat(nama, kelelahan, lapar, kesepian, bahagia) {
//     this.nama = nama
//     this.kelelahan = kelelahan
//     this.lapar = lapar
//     this.kesepian = kesepian
//     this.bahagia = bahagia
// }

// Cat.prototype.makan = function(porsi) {
//     this.lapar += porsi
//     retun `${this.nama} selesai makan.`
// }

// Cat.prototype.tidur = function(jam) {
//     this.kelelahan -= jam
//     this.lapar -= jam
//     return `${this.nama} selesai tidur.`

// }

// Cat.prototype.rawat = function(happy) {
//     this.kesepian -= happy
//     if (this.kelelahan > 30) {
//         return `${this.nama} tidak ingin di ganggu.`
//     } else {
//         return `${this.nama} tidak kesepian lagi.`
//     }
// }

// Cat.prototype.main = function(main) {
//     this.kelelahan += main
//     this.bahagia += main
//     return `${this.nama} mulai kelelahan, tapi ${this.nama} merasa senang.`
// }

// let muezza = new Cat('Muezza', 30, 20, 30, 10)









// versi classes

class Cat {
    constructor(nama, kelelahan, lapar, kesepian, bahagia) {
        this.nama = nama
        this.kelelahan = kelelahan
        this.lapar = lapar
        this.kesepian = kesepian
        this.bahagia = bahagia
    }

    makan(porsi) {
        this.lapar += porsi
        return `${this.nama} selesai makan.`
    }

    tidur(jam) {
        this.kelelahan -= jam
        this.lapar -= jam
        return `${this.nama} selesai tidur.`

    }

    rawat(happy) {
        this.kesepian -= happy
        if (this.kelelahan > 30) {
            return `${this.nama} tidak ingin di ganggu.`
        } else {
            return `${this.nama} tidak kesepian lagi.`
        }
    }

    main(main) {
        this.kelelahan += main
        this.bahagia += main
        return `${this.nama} mulai kelelahan, tapi ${this.nama} merasa senang.`
    }
}

let muezza = new Cat('Muezza', 30, 20, 30, 10)