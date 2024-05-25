// Simbol
const symbols = ["🍒", "🍊", "🍋", "🍇", "🍉", "🍎"];

// Persentase kemenangan
const winPercentage = 70;
const winSymbolsCount = Math.ceil((winPercentage / 100) * symbols.length);

const winSymbols = [];
for (let i = 0; i < winSymbolsCount; i++) {
    winSymbols.push(symbols[i]);
}

// Fungsi utama
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

// Pop up jika menang
function cekKemenangan(slot1, slot2, slot3) {
    let simbolMenang = symbols[Math.floor(symbols.length / 2)];
    
    if (symbols[slot1] === simbolMenang && symbols[slot2] === simbolMenang && symbols[slot3] === simbolMenang) {
        alert("Selamat! Anda menang!");
    } 
}
