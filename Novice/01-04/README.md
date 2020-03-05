## Minggu 01

## Hari Ke 4  : String dan Regular Expression

## Oleh       : Nasri

## Tanggal    : 05 Maret 2020

## Ringkasan Materi :
## Text formatting
### Strings
Jenis String JavaScript digunakan untuk merepresentasikan data tekstual. Ini adalah satu set "elemen" dari nilai integer 16-bit unsigned (unit kode UTF-16). Setiap elemen dalam String menempati posisi dalam String. Elemen pertama adalah pada indeks 0, selanjutnya pada indeks 1, dan seterusnya. Panjang suatu String adalah jumlah elemen di dalamnya. Anda dapat membuat string menggunakan string literal atau objek string

### String literals
Membuat string sederhana menggunakan kutipan tunggal atau ganda: 'foo' atau "bar"

### String objects
Objek String adalah pembungkus di sekitar tipe data primitif string. Anda dapat memanggil salah satu metode objek String pada nilai literal string — JavaScript secara otomatis mengubah string literal menjadi objek String sementara, memanggil metode tersebut, lalu membuang objek String sementara. Anda juga bisa menggunakan properti String.length dengan string literal.

### Multi-line template literals
Literal templat adalah literal string yang memungkinkan ekspresi tersemat. Anda dapat menggunakan fitur multi-line string dan interpolasi string.

Literal templat terlampir oleh tanda centang-kembali ('') (aksen kubur) alih-alih tanda kutip ganda atau tunggal. Literal templat dapat berisi tempat penampung. Ini ditunjukkan oleh tanda Dollar dan kurung kurawal ($ {ekspresi}).

### Internationalization
Namespace untuk ECMAScript Internationalisasi API, yang menyediakan perbandingan string sensitif bahasa, pemformatan angka, dan pemformatan tanggal dan waktu. Konstruktor untuk objek Collator, NumberFormat, dan DateTimeFormat adalah properti dari objek Intl.

### Date and time formatting Objek
Date Time Format berguna untuk memformat tanggal dan waktu. Berikut ini format tanggal untuk bahasa Inggris seperti yang digunakan di Amerika Serikat. (Hasilnya berbeda di zona waktu lain.)

### Number formatting 
Objek NumberFormat berguna untuk memformat angka, misalnya mata uang

### Collation
Objek Collator berguna untuk membandingkan dan menyortir string.

### Creating a regular expression 
Anda membangun ekspresi reguler dalam salah satu dari dua cara:

Menggunakan literal ekspresi reguler, yang terdiri dari pola terlampir di antara garis miring, sebagai berikut:
```
let re = /ab+c/;
```

Literal ekspresi reguler menyediakan kompilasi ekspresi reguler ketika skrip dimuat. Jika ekspresi reguler tetap konstan, menggunakan ini dapat meningkatkan kinerja.

Atau memanggil fungsi konstruktor objek RegExp, sebagai berikut:

```
let re = new RegExp('ab+c');
```

Menggunakan fungsi konstruktor menyediakan kompilasi runtime dari ekspresi reguler. Gunakan fungsi konstruktor ketika Anda tahu pola ekspresi reguler akan berubah, atau Anda tidak tahu pola dan mendapatkannya dari sumber lain, seperti input pengguna.

### Regular expressions
### Writing a regular expression pattern
Pola ekspresi reguler terdiri dari karakter sederhana, seperti / abc /, atau kombinasi karakter sederhana dan khusus, seperti / ab * c / atau / Bab (\ d +) \. \ D * /. Contoh terakhir termasuk tanda kurung, yang digunakan sebagai perangkat memori. Kecocokan yang dibuat dengan bagian dari pola ini diingat untuk digunakan nanti, seperti dijelaskan dalam Menggunakan grup.

### Using simple patterns
Pola-pola sederhana terdiri dari karakter-karakter yang ingin Anda temukan kecocokan langsung. Sebagai contoh, pola / abc / cocok dengan kombinasi karakter dalam string hanya ketika urutan yang tepat "abc" terjadi (semua karakter bersama dan dalam urutan itu) Pertandingan seperti itu akan berhasil dalam string "Hai, apakah Anda tahu abc Anda?" dan "Desain pesawat terbaru berevolusi dari slabcraft." Dalam kedua kasus, pertandingan dengan substring "abc". Tidak ada kecocokan dalam string "Grab kepiting" karena sementara itu berisi substring "ab c", itu tidak mengandung substring yang tepat "abc".

### Using special characters
Saat mencari kecocokan membutuhkan sesuatu yang lebih dari kecocokan langsung, seperti menemukan satu atau lebih huruf b, atau menemukan spasi putih, Anda dapat memasukkan karakter khusus dalam pola. Misalnya, untuk mencocokkan satu "a" diikuti dengan nol atau lebih "b" diikuti oleh "c", Anda akan menggunakan pola / ab * c /: the * setelah "b" berarti "0 atau lebih kejadian dari item sebelumnya. " Dalam string "cbbabbbbbcdebc", pola ini akan cocok dengan substring "abbbbc"

### Escaping
Jika Anda perlu menggunakan salah satu karakter khusus secara harfiah (sebenarnya mencari "*", misalnya), Anda harus menghindarinya dengan meletakkan backslash di depannya. Misalnya, untuk mencari "a" diikuti oleh "*" diikuti oleh "b", Anda akan menggunakan / a \ * b / - garis miring terbalik "lolos" the "*", menjadikannya literal alih-alih khusus

### Using parentheses
Tanda kurung di sekitar bagian mana pun dari pola ekspresi reguler menyebabkan bagian substring yang cocok itu diingat. Setelah diingat, substring dapat dipanggil kembali untuk penggunaan lain.

### Using regular expressions in JavaScript
Ekspresi reguler digunakan dengan pengujian metode RegExp () dan exec () dan dengan metode pencocokan String (), ganti (), search (), dan split (). Metode-metode ini dijelaskan secara rinci dalam referensi JavaScript.

### Advanced searching with flags
Ekspresi reguler memiliki enam flag opsional yang memungkinkan fungsi seperti pencarian global dan case-sensitive. Bendera ini dapat digunakan secara terpisah atau bersama dalam urutan apa pun, dan dimasukkan sebagai bagian dari ekspresi reguler.

## Penjelasaan tentang isi repo : 
* Obyek String di JavaScript
* Gambaran umum RegExp
* Pola dan RegExp
* Karakter-karakter RegExp dan penggunaannya
 



