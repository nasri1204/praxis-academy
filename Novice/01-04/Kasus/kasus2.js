var rgname = /([^@]*)/;
var rgtid = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;

function validateEmail(userEmail) {
    var userName = rgname.exec(userEmail.value);
    var domainName = rgtid.exec(userEmail.value);
    if (!domainName) {
        alert(userEmail.value + ' Format Email anda salah!');
    } else {
        alert('Halo, username anda adalah ' + userName[0] + ', ' + ' domain anda adalah ' + domainName[0]);
    }
}