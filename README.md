# Belajar Fundamental Front-End Developer
Silakan lihat branch untuk melihat berkas atau source code yang diinginkan.

## Bootstrap in Webpack
Berikut adalah contoh penerapan bootstrap dengan menggunakan Webpack.

### Notes
Jangan gunakan versi JQuery 5 ketika menggunakan bootstrap versi 4, beberapa fitur tidak akan berfungsi seperti toggle-navigation pada tampilan mobile. 

Gunakan kombinasi dependencies berikut:

`
"dependencies": {
    "bootstrap": "^4.4.1",
    "jquery": "3.4.1",
    "popper.js": "^1.16.1"
  }
`

### How to Run
1. _Clone_ atau _download_ proyek ini
2. Buka Terminal/CMD/Powershell dan arahkan ke folder `webpack-bootstrap-sample`
3. Jalankan perintah `npm install` dan tunggu hingga proses unduh dan pemasangan package selesai
4. Gunakan perintah `npm run start-dev` untuk menjalankan proyek atau gunakan `npm run build` untuk mem-build proyek.
