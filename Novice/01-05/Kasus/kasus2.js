// cari kata
var kamus = new Map(
    [
        ['buku', 'book'],
        ['tas', 'bag'],
        ['kipas', 'fan'],
        ['tikus', 'mouse'],
        ['kursi', 'chair'],
        ['lampu', 'lamp']
    ]);

function cariKata() {
    let a = document.getElementById("cari").value;
    alert(kamus.get(a));
    // console.log(kamus.get(a));
}
cariKata();

// tambah kata
function tambahKata() {
    let a = document.getElementById("tambah").value;
    let b = document.getElementById("tambahArti").value;

    let keys = Array.from(kamus.set(a, b));

    keys.push(a, b);
    console.log(keys);
}
tambahKata();


// hapus kata
function hapusKata() {
    let a = document.getElementById("hapus").value;

    console.log(kamus.delete(a));
}
hapusKata();