var year = 104;

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  console.log("Kabisa yil");
} else {
  console.log("Kabisa yil emas");
}
