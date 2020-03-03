# Minggu 01

## Hari 2: Ekosistem dan Pemrograman Dasar JavaScript

### Oleh : Nasri

### Tanggal : 02-Maret-2020

## Ringkasan :
## Control flow and error handling

## Konstruksi Dasar JavaScript
  1. Pengandali alur:
      * if .. else
      * switch
      * try ... catch ... throw
  2. Iterasi dan looping
      * for
      * while
      * do ... while
      * break/continue
      * for ... in
      * for ... of
      
### Block statement
Pernyataan paling dasar adalah Block statement, yang digunakan untuk mengelompokkan pernyataan. Blok dibatasi oleh sepasang kurung kurawal.

### Conditional statements
Conditional statements adalah seperangkat perintah yang dijalankan jika kondisi yang ditentukan benar. JavaScript mendukung dua pernyataan bersyarat: jika ... lain dan beralih.

### Falsy values
Nilai-nilai berikut akan dinilai salah sebagi berikut.
* false
* undefined
* null
* 0
* NaN
* the empty string ("")

### Switch statement
Pernyataan peralihan memungkinkan suatu program untuk mengevaluasi ekspresi dan berupaya mencocokkan nilai ekspresi dengan label kasus. Jika kecocokan ditemukan, program mengeksekusi pernyataan terkait.

### Break statements
Pernyataan istirahat opsional yang terkait dengan setiap klausa kasus memastikan bahwa program keluar dari sakelar setelah pernyataan yang cocok dijalankan, dan kemudian melanjutkan eksekusi pada sakelar pernyataan berikut. Jika istirahat dihilangkan, program melanjutkan eksekusi di dalam pernyataan switch (dan akan mengevaluasi kasus selanjutnya, dan seterusnya).

### Exception types
Hampir semua benda bisa dilempar ke JavaScript. Meski demikian, tidak semua benda yang dilempar dibuat sama. Meskipun umum untuk melempar angka atau string sebagai kesalahan, sering kali lebih efektif untuk menggunakan salah satu jenis pengecualian yang khusus dibuat untuk tujuan ini:
* ECMAScript exceptions
* DOMException and DOMError

### The catch block
Anda dapat menggunakan blok tangkap untuk menangani semua pengecualian yang mungkin dihasilkan di blok coba.
Blok catch menentukan pengidentifikasi (catchID dalam sintaksis sebelumnya) yang menyimpan nilai yang ditentukan oleh pernyataan throw. Anda dapat menggunakan pengenal ini untuk mendapatkan informasi tentang pengecualian yang dilemparkan.

JavaScript membuat pengenal ini ketika blok tangkap dimasukkan. Pengidentifikasi hanya berlangsung selama durasi blok tangkap. Setelah blok tangkap selesai dieksekusi, pengenal tidak lagi ada.

Misalnya, kode berikut melempar pengecualian. Ketika pengecualian terjadi, kontrol transfer ke blok tangkap.

### The finally block
Blok terakhir berisi pernyataan yang akan dieksekusi setelah blok coba dan tangkap dieksekusi. Selain itu, blok akhirnya dieksekusi sebelum kode yang mengikuti pernyataan coba ... tangkap ... akhirnya.

Penting juga untuk dicatat bahwa blok akhirnya akan mengeksekusi apakah pengecualian dilemparkan atau tidak. Namun, jika pengecualian dilemparkan, pernyataan di blok akhirnya mengeksekusi bahkan jika tidak ada blok tangkap yang menangani pengecualian yang dilemparkan.

Anda dapat menggunakan blok akhirnya untuk membuat skrip Anda gagal dengan anggun ketika pengecualian terjadi. Misalnya, Anda mungkin perlu merilis sumber daya yang telah diikat skrip Anda.

Contoh berikut membuka file dan kemudian menjalankan pernyataan yang menggunakan file. (JavaScript sisi server memungkinkan Anda untuk mengakses file.) Jika pengecualian dilemparkan saat file dibuka, blok akhirnya menutup file sebelum script gagal. Menggunakan akhirnya di sini memastikan bahwa file tidak pernah dibiarkan terbuka, bahkan jika terjadi kesalahan.

### Utilizing Error objects
Bergantung pada jenis kesalahan, Anda mungkin dapat menggunakan properti nama dan pesan untuk mendapatkan pesan yang lebih halus.

Properti name menyediakan kelas umum Error (seperti DOMException atau Error), sementara pesan umumnya memberikan pesan yang lebih ringkas daripada yang didapat dengan mengonversi objek kesalahan ke string.

Jika Anda melempar pengecualian Anda sendiri, untuk mengambil keuntungan dari properti ini (seperti jika blok tangkapan Anda tidak membedakan antara pengecualian Anda sendiri dan yang sistem), Anda dapat menggunakan pembangun kesalahan.

## Loops and iteration
### for statement
A for loop berulang sampai kondisi yang ditentukan bernilai false. JavaScript untuk loop mirip dengan Java dan C untuk loop.

Ketika a for loop dijalankan, berikut ini terjadi:

1. Ekspresi inisialisasi initialExpression, jika ada, dieksekusi. Ekspresi ini biasanya menginisialisasi satu atau lebih penghitung loop, tetapi sintaks memungkinkan ekspresi tingkat kerumitan. Ekspresi ini juga dapat mendeklarasikan variabel.
2. Ekspresi kondisi dievaluasi. Jika nilai kondisi benar, pernyataan loop dijalankan. Jika nilai kondisi salah, loop for berakhir. (Jika ekspresi kondisi dihilangkan seluruhnya, kondisi tersebut dianggap benar.)
3. Pernyataan dieksekusi. Untuk menjalankan beberapa pernyataan, gunakan pernyataan blokir ({...}) untuk mengelompokkan pernyataan tersebut.
4. Jika ada, pembaruan ekspresi incrementExpression dieksekusi.
5. Kontrol kembali ke Langkah 2.

### do...while statement
Pernyataan do ... while berulang hingga kondisi yang ditentukan bernilai false.
pernyataan selalu dieksekusi sekali sebelum kondisinya diperiksa. (Untuk menjalankan beberapa pernyataan, gunakan pernyataan blokir ({...}) untuk mengelompokkan pernyataan-pernyataan itu.)

Jika kondisi benar, pernyataan dieksekusi lagi. Di akhir setiap eksekusi, kondisi diperiksa. Ketika kondisinya salah, eksekusi berhenti, dan kontrol beralih ke pernyataan berikut do ... while.

### while statement
Pernyataan sementara mengeksekusi pernyataannya selama kondisi tertentu bernilai true.
Jika kondisi menjadi salah, pernyataan dalam loop berhenti dijalankan dan kontrol beralih ke pernyataan setelah loop.

Tes kondisi terjadi sebelum pernyataan dalam loop dijalankan. Jika kondisi mengembalikan true, pernyataan dieksekusi dan kondisi diuji lagi. Jika kondisi mengembalikan false, eksekusi berhenti, dan kontrol dilewatkan ke pernyataan berikut sementara.

Untuk menjalankan beberapa pernyataan, gunakan pernyataan blokir ({...}) untuk mengelompokkan pernyataan tersebut.

### labeled statement
Label memberikan pernyataan dengan pengidentifikasi yang memungkinkan Anda merujuknya di tempat lain di program Anda. Misalnya, Anda dapat menggunakan label untuk mengidentifikasi loop, dan kemudian menggunakan pernyataan break atau melanjutkan untuk menunjukkan apakah suatu program harus mengganggu loop atau melanjutkan eksekusi.

### break statement
Gunakan pernyataan break untuk mengakhiri loop, switch, atau dalam hubungannya dengan pernyataan berlabel.

* Ketika Anda menggunakan jeda tanpa label, itu mengakhiri terdalam melampirkan sementara, lakukan-sementara, untuk, atau segera beralih dan mentransfer kontrol ke pernyataan berikut.
* Saat Anda menggunakan break dengan label, itu mengakhiri pernyataan berlabel yang ditentukan.

### continue statement
Pernyataan melanjutkan dapat digunakan untuk memulai kembali pernyataan while, do-while, for, atau label.

* Ketika Anda menggunakan melanjutkan tanpa label, iterasi ini mengakhiri iterasi terdalam yang terlampir saat, do-while, atau untuk pernyataan dan melanjutkan eksekusi loop dengan iterasi berikutnya. Berbeda dengan pernyataan break, lanjutkan tidak menghentikan eksekusi loop sepenuhnya. Dalam loop sementara, itu melompat kembali ke kondisi. Dalam for for, itu melompat ke ekspresi-kenaikan.
* Saat Anda menggunakan melanjutkan dengan label, itu berlaku untuk pernyataan perulangan yang diidentifikasi dengan label itu.

### for...in statement
The for ... dalam statement iterates variabel tertentu atas semua properti enumerable dari suatu objek. Untuk setiap properti yang berbeda, JavaScript mengeksekusi pernyataan yang ditentukan.

### for...of statement
The for ... of statement menciptakan loop Iterating pada objek yang dapat di-iterable (termasuk Array, Map, Set, objek argumen dan sebagainya), menggunakan pengait iterasi kustom dengan pernyataan yang akan dieksekusi untuk nilai setiap properti yang berbeda.
