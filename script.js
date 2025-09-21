function hitung(operasi) {
    
  // Variabel 
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Validasi input
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('hasil').textContent = "Masukkan angka yang valid!";
    return;
  }

  let hasil;

  // Kondisi operasi
  if (operasi === 'tambah') {
    hasil = num1 + num2;
  } else if (operasi === 'kurang') {
    hasil = num1 - num2;
  } else if (operasi === 'kali') {
    hasil = num1 * num2;
  } else if (operasi === 'bagi') {
    hasil = num2 !== 0 ? num1 / num2 : "Error: Pembagi nol!";
  } else {
    hasil = "Operasi tidak dikenal";
  }

  // Menggabungkan semua elemen array menjadi satu output
  const teks = ["Hasil perhitungan:", hasil];
  let output = "";
  for (let i = 0; i < teks.length; i++) {
    output += teks[i] + " ";
  }

  // hasil atau output
  document.getElementById('hasil').textContent = output;
}
