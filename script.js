/*  Dengan menggunakan “getElementById()” kita memilih elemen dengan ID "container1" dan "container2",
kemudian mengubah warna latar belakangnya menjadi Teal (hijau biru) dan LightCoral (merah muda terang).*/
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
container1.style.backgroundColor = "Teal";
container2.style.backgroundColor = "LightCoral";

/*Dengan menggunakan “querySelector” kita memilih tag <a> yang berada di dalam elemen dengan ID "container1", 
kemudian mengubah atribut href menjadi "https://www.google.com".*/
const link = document.querySelector('#container1 a');
link.href = 'https://www.google.com';

/*Menggunakan “querySelector All” untuk memilih semua elemen <h1>, <p>, <a>, dan <li> di halaman. 
Kemudian membuat dua array, fonts dan sizes, yang berisi berbagai jenis font dan ukuran font. 
Setelah itu, melakukan perulangan pada elemen-elemen yang dipilih, 
lalu menerapkan gaya font dan ukuran font yang diambil secara dinamis dari array fonts dan sizes. 
Indeks elemen saat ini digunakan untuk menentukan font dan ukuran yang akan diterapkan,
dengan mengulang kembali ke awal array jika diperlukan.*/

const elements = document.querySelectorAll("h1, p, a, li");

const fonts = ["Algerian", "Aptos", "Arial", "Century", "Times New Roman"];
const sizes = ["26px", "16px", "18px", "22px", "20px"];

elements.forEach((element, index) => {
    const font = fonts[index % fonts.length];
    const size = sizes[index % sizes.length];

    element.style.fontFamily = font;
    element.style.fontSize = size;
});