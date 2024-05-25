// Array untuk simbol-simbol di mesin slot
const symbols = ["🍒", "🍊", "🍋", "🍇", "🍉", "🍎"];

// Persentase kemenangan yang diinginkan (misalnya, 50%)
const winPercentage = 70;

// Hitung jumlah simbol kemenangan berdasarkan persentase kemenangan yang diinginkan
const winSymbolsCount = Math.ceil((winPercentage / 100) * symbols.length);

// Tentukan simbol kemenangan
const winSymbols = [];
for (let i = 0; i < winSymbolsCount; i++) {
    winSymbols.push(symbols[i]);
}

// Fungsi untuk memutar mesin slot
function putar() {
    let slot1 = Math.floor(Math.random() * symbols.length);
    let slot2 = Math.floor(Math.random() * symbols.length);
    let slot3 = Math.floor(Math.random() * symbols.length);

    document.getElementById("slot1").innerHTML = `<span style="animation-duration: 1s">${symbols[slot1]}</span>`;
    document.getElementById("slot2").innerHTML = `<span style="animation-duration: 1.2s">${symbols[slot2]}</span>`;
    document.getElementById("slot3").innerHTML = `<span style="animation-duration: 1.4s">${symbols[slot3]}</span>`;

    setTimeout(() => {
        cekKemenangan(slot1, slot2, slot3);
    }, 1500);
}

// Fungsi untuk memeriksa kemenangan
function cekKemenangan(slot1, slot2, slot3) {
    let simbolMenang = symbols[Math.floor(symbols.length / 2)];
    
    if (symbols[slot1] === simbolMenang && symbols[slot2] === simbolMenang && symbols[slot3] === simbolMenang) {
        alert("Selamat! Anda menang!");
    } 
}
