const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi operasi
function tambah(a, b) {
  return a + b;
}
function kurang(a, b) {
  return a - b;
}
function kali(a, b) {
  return a * b;
}
function bagi(a, b) {
  return b !== 0 ? a / b : 'Tidak bisa dibagi 0';
}

// Tampilkan menu
console.log('=== Kalkulator Sederhana ===');
console.log('1. Penjumlahan');
console.log('2. Pengurangan');
console.log('3. Perkalian');
console.log('4. Pembagian');
rl.question('Pilih operasi (1-4): ', (pilihan) => {
  // Cek apakah pilihan valid
  // Setiap angka mewakili jenis operasinya.
  if (!['1', '2', '3', '4'].includes(pilihan)) {
    console.log('Pilihan tidak valid.');
    rl.close();
    return;
  }

  // Inputan dua angka yang bersifat dinamis
  rl.question('Masukkan angka pertama: ', (input1) => {
    rl.question('Masukkan angka kedua: ', (input2) => {
      const angka1 = parseFloat(input1);
      const angka2 = parseFloat(input2);
      let hasil;

      switch (pilihan) {
        case '1':
          hasil = tambah(angka1, angka2);
          console.log(`Hasil Penjumlahan: ${hasil}`);
          break;
        case '2':
          hasil = kurang(angka1, angka2);
          console.log(`Hasil Pengurangan: ${hasil}`);
          break;
        case '3':
          hasil = kali(angka1, angka2);
          console.log(`Hasil Perkalian: ${hasil}`);
          break;
        case '4':
          hasil = bagi(angka1, angka2);
          console.log(`Hasil Pembagian: ${hasil}`);
          break;
      }

      rl.close();
    });
  });
});
