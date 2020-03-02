# Minggu 01

## Hari 1: Ekosistem dan Pemrograman Dasar JavaScript

### Oleh : Nasri

### Tanggal : 02-Maret-2020

## Ringkasan :
### Compiler
Kompilator (Inggris: compiler) adalah sebuah program komputer yang berguna untuk menerjemahkan program komputer yang ditulis dalam bahasa pemrograman tertentu menjadi program yang ditulis dalam bahasa pemrograman lain.

Terlepas dari pengertiannya yang demikian relatif luas, istilah kompilator biasa digunakan untuk program komputer yang menerjemahkan program yang ditulis dalam bahasa pemrograman tingkat tinggi (semacam bahasa Pascal, C++, BASIC, FORTRAN, Visual Basic, Visual C#, Java, xBase, atau COBOL) menjadi bahasa mesin, biasanya dengan bahasa Assembly sebagai perantara.

### Interpreter
Dalam ilmu komputer, penerjemah atau lebih dikenal dengan interpreter merupakan perangkat lunak yang berfungsi melakukan eksekusi sejumlah instruksi yang ditulis dalam suatu bahasa pemrograman, sebuah penerjemah dapat berarti:

  1. Mengeksekusi kode sumber secara langsung, atau
  2. Menerjemahkannya ke dalam serangkaian p-code kemudian mengeksekusinya, atau
  3. Mengeksekusi kode yang telah dikompilasi sebelumnya oleh kompiler yang merupakan bagian dari sistem penerjemahan.
  
Perl, Python, Ruby, dan MATLAB adalah beberapa contoh perangkat lunak penerjemah bertipe 2, sementara Java termasuk dalam kategori tipe 3, tetapi dalam beberapa kasus Java dapat digolongkan pula ke dalam kategori tipe 2.

Meskipun penerjemahan dan kompilasi merupakan dua jenis mekanisme implementasi pada sebuah bahasa pemrograman, keduanya tidak berarti memiliki perbedaan secara signifikan. Hal ini disebabkan cara kerja sebuah penerjemah dalam banyak hal adalah sama seperti halnya yang dilakukan oleh kompiler. Penggunaan istilah "bahasa pemrograman terjemahan" dan "bahasa pemrograman kompilatif" umumnya digunakan sebatas untuk membedakan implementasi dari bahasa tersebut menggunakan model penerjemahan atau kompilatif.

### JavaScript
JavaScript ("JS" singkatnya) adalah bahasa pemrograman dinamis penuh yang, ketika diterapkan pada dokumen HTML, dapat memberikan interaktivitas dinamis di situs web. Itu diciptakan oleh Brendan Eich, salah satu pendiri proyek Mozilla, Mozilla Foundation, dan Mozilla Corporation.

JavaScript sangat fleksibel dan ramah pemula. Dengan lebih banyak pengalaman, Anda akan dapat membuat game, grafik 2D dan 3D beranimasi, aplikasi berbasis database yang komprehensif, dan banyak lagi!

JavaScript itu sendiri cukup kompak namun sangat fleksibel. Pengembang telah menulis berbagai macam alat di atas bahasa JavaScript inti, membuka kunci sejumlah besar fungsi tambahan dengan upaya minimum. Ini termasuk:

### Node.js
Node.js adalah platform perangkat lunak pada sisi peladen dan aplikasi jaringan. Ditulis dengan bahasa JavaScript dan dijalankan pada Windows, Mac OS X, dan Linux tanpa perubahan kode program. Node.js memiliki pustaka peladen HTTP sendiri sehingga memungkinkan untuk menjalankan peladen web tanpa menggunakan program peladen web seperti Apache atau Lighttpd.

### Values, Types, and Operators
#### Value
dari 30 miliar bit dalam penyimpanan data yang mudah menguap (memori kerja). Penyimpanan nonvolatile (hard disk atau yang setara) cenderung memiliki beberapa pesanan lebih besar.

Untuk dapat bekerja dengan jumlah bit seperti itu tanpa tersesat, kita harus memisahkannya menjadi potongan-potongan yang mewakili potongan-potongan informasi. Dalam lingkungan JavaScript, potongan-potongan itu disebut nilai. Meskipun semua nilai terbuat dari bit, mereka memainkan peran yang berbeda. Setiap nilai memiliki tipe yang menentukan perannya. Beberapa nilai adalah angka, beberapa nilai adalah potongan teks, beberapa nilai adalah fungsi, dan sebagainya.

#### Number
JavaScript menggunakan sejumlah bit, 64 di antaranya, untuk menyimpan nilai angka tunggal. Hanya ada begitu banyak pola yang dapat Anda buat dengan 64 bit, yang berarti bahwa jumlah angka yang berbeda yang dapat direpresentasikan terbatas. Dengan N angka desimal, Anda dapat mewakili angka 10N. Demikian pula, mengingat 64 digit biner, Anda dapat mewakili 264 angka yang berbeda, yaitu sekitar 18 triliun (18 angka dengan 18 angka nol setelahnya). Itu banyak.

#### Arithmetic
Hal utama yang harus dilakukan dengan angka adalah aritmatika. Operasi aritmatika seperti penambahan atau perkalian mengambil dua nilai angka dan menghasilkan angka baru dari mereka. Berikut ini tampilannya di JavaScript:

100 + 4 * 11
Simbol + dan * disebut operator. Yang pertama adalah singkatan dari penambahan, dan yang kedua adalah singkatan dari multiplikasi. Menempatkan operator di antara dua nilai akan menerapkannya ke nilai-nilai itu dan menghasilkan nilai baru.

#### Special numbers
Ada tiga nilai khusus dalam JavaScript yang dianggap angka tetapi tidak berperilaku seperti angka normal.

Dua yang pertama adalah Infinity dan -Infinity, yang mewakili infinitas positif dan negatif. Infinity - 1 masih Infinity, dan sebagainya. Namun, jangan terlalu percaya pada perhitungan berbasis infinity. Ini tidak secara matematis, dan dengan cepat akan mengarah ke nomor spesial berikutnya: NaN.

NaN adalah singkatan dari "not a number", meskipun itu adalah nilai dari tipe angka. Anda akan mendapatkan hasil ini ketika, misalnya, mencoba untuk menghitung 0/0 (nol dibagi dengan nol), Infinity - Infinity, atau sejumlah operasi numerik lainnya yang tidak menghasilkan hasil yang berarti.

#### Strings
Tipe data dasar berikutnya adalah string. String digunakan untuk merepresentasikan teks. Mereka ditulis dengan melampirkan konten mereka dalam tanda kutip.

`Down on the sea`
"Berbaringlah di laut"
'Mengapung di lautan'
Anda dapat menggunakan tanda kutip tunggal, tanda kutip ganda, atau backticks untuk menandai string, selama tanda kutip di awal dan akhir pertandingan string.

Hampir semua hal dapat ditempatkan di antara tanda kutip, dan JavaScript akan membuat nilai string darinya. Tetapi beberapa karakter lebih sulit. Anda dapat membayangkan bagaimana sulitnya menempatkan kutipan di antara kutipan. Baris baru (karakter yang Anda dapatkan ketika Anda menekan enter) dapat dimasukkan tanpa keluar hanya ketika string dikutip dengan backticks (`).

### Program Structure
#### Expressions and statements
Sebuah fragmen kode yang menghasilkan nilai disebut ekspresi. Setiap nilai yang ditulis secara harfiah (seperti 22 atau "psikoanalisis") adalah ekspresi. Ekspresi antara tanda kurung juga merupakan ekspresi, seperti halnya operator biner yang diterapkan pada dua ekspresi atau operator unary yang diterapkan pada satu.

mengandung ekspresi lain dengan cara yang mirip dengan bagaimana subsensi dalam bahasa manusia disarangkan — subsensi dapat mengandung subsensinya sendiri, dan seterusnya. Ini memungkinkan kami untuk membangun ekspresi yang menggambarkan perhitungan rumit yang arbitrari.

Jika ekspresi sesuai dengan fragmen kalimat, pernyataan JavaScript sesuai dengan kalimat lengkap. Program adalah daftar pernyataan.

## Penjelasan tentang isi repo
Hari melakukan instalasi Node.js, Visual Studio Code dan konfigurasi untuk JavaScripts.
Mengerjakan latihan no 11 dan 12 serta kasus tentang Program Structure.
