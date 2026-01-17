let angkaAcak = Math.floor(Math.random() * 10) + 1;
let skor = 0;

function cekAngka() {
    let tebakan = document.getElementById("inputAngka").value;
    let hasil = document.getElementById("hasil");

    if (tebakan == "") {
        hasil.innerText = "Masukkan angka terlebih dahulu!";
        return;
    }

    if (tebakan == angkaAcak) {
        hasil.innerText = "🎉 Benar! Kamu menang!";
        skor += 10;
        angkaAcak = Math.floor(Math.random() * 10) + 1;
    } else {
        hasil.innerText = "❌ Salah! Coba lagi.";
        skor -= 2;
    }

    document.getElementById("skor").innerText = "Skor: " + skor;
    document.getElementById("inputAngka").value = "";
}
