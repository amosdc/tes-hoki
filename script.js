  let credit = 100;

function spin() {
    const bet = parseInt(document.getElementById('bet').value);
    if (bet > credit) {
        alert('Insufficient credit!');
        return;
    }

    const symbols = ['🍒', '🍋', '🔔'];
    const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

    document.getElementById('reels').children[0].textContent = reel1;
    document.getElementById('reels').children[1].textContent = reel2;
    document.getElementById('reels').children[2].textContent = reel3;

    let result;
    if (reel1 === reel2 && reel2 === reel3) {
        result = 'win';
        credit += bet * 2;
    } else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
        result = 'half-win';
        credit += bet;
    } else {
        result = 'lose';
        credit -= bet;
    }

    document.getElementById('credit').textContent = Credit: ${credit};
    document.getElementById('result').textContent = Result: ${result === 'win' ? 'You win!' : result === 'half-win' ? 'Half win!' : 'You lose!'};
}
