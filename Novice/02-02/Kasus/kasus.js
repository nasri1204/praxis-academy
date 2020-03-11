const methodCat = {
    makan: function(porsi) {
        this.lapar += porsi
        console.log(`${this.nama} selesai makan.`)
    },

    tidur: function(jam) {
        this.kelelahan += jam
        console.log(`${this.nama} selesai tidur.`)
    },
    rawat: function(happy) {
        this.kesepian += happy
        console.log(`${this.nama} tidak kesepian lagi.`)
    },
    main: function(main) {
        this.kelelahan -= main
        console.log(`${this.nama} mulai kelelahan.`)
    }

}

function Cat(nama, kelelahan, lapar, kesepian) {
    let kucing = {}
    kucing.nama = nama
    kucing.kelelahan = kelelahan
    kucing.lapar = lapar
    kucing.kesepian = kesepian
    kucing.makan = methodCat.makan
    kucing.tidur = methodCat.tidur
    kucing.rawat = methodCat.rawat
    kucing.main = methodCat.main


    return kucing
}

let muezza = Cat('Muezza', 10, 20, 30)
let ciko = Cat('Ciko', 20, 10, 40)