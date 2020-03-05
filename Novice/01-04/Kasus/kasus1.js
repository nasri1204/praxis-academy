var re = /([A-Z0-9])([ \/\.])/;

function testInfo(platNomor) {
    var OK = re.exec(platNomor.value);
    if (!OK) {
        alert(platNomor.value + ' bukan nomor plat indonesia!');
    } else {
        alert('Ini plat nomor Indonesia ' + platNomor.value);
    }
}