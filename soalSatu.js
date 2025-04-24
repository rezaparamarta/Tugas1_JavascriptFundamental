const ageUser = [10, 15, 35, 71, 40, 50]; // contoh data

const categoryUserAge = (age) => {
  switch (true) {
    case (age <= 12):
      return 'Anak-anak';
    case (age <= 17):
      return 'Remaja';
    case (age <= 59):
      return 'Dewasa';
    default:
      return 'Lansia';
  }
};

// Variable tally untuk menampung nilainya saja.
const tally = {};
ageUser.forEach(age => {
  const cat = categoryUserAge(age);
  // variable cat adalah kategori yang dikembalikan dari fungsi categoryUserAge
  if (!tally[cat]) tally[cat] = 0;
  tally[cat]++;
});

// Cetak hasil sesuai format
console.log(`Anak-anak : ${tally['Anak-anak'] || 0} Orang`);
console.log(`Remaja    : ${tally['Remaja']    || 0} Orang`);
console.log(`Dewasa    : ${tally['Dewasa']    || 0} Orang`);
console.log(`Lansia    : ${tally['Lansia']    || 0} Orang`);
