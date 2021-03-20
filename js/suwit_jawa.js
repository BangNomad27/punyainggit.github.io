// Pilihan Computer:
function getPilihanCom() {
	const com = Math.round(Math.random() * 9 + 1);

	// if(com < 3) {
	// 	com = 'gajah'; // return 'gajah';
	// }
	// else if(com >= 3 && com < 7) {
	// 	com = 'orang'; // return 'orang';
	// }
	// else {
	// 	com = 'semut'; // return 'semut';
	// }

	// atau dijadiin rekursif:

	if(com < 3) return 'gajah';
	if(com >= 3 && com < 7) return 'orang';
	return 'semut';
}

// Rules permainan:
function getScore(com, player) {
	if(player == com) return 'DRAW!';
	if(player == 'gajah') return (com == 'orang') ? 'MENANG!' : 'KALAH!';
	if(player == 'semut') return (com == 'gajah') ? 'MENANG!' : 'KALAH!';
	if(player == 'orang') return (com == 'semut') ? 'MENANG!' : 'KALAH!';
}

// Timing event computer:
function roll() {
	const imgComputer = document.querySelector('.img-com');
	const image = ['gajah', 'orang', 'semut'];
	const timeUp = new Date().getTime();
	let i = 0;
	setInterval(function() {
		if(new Date().getTime() - timeUp > 1000) {
			clearInterval;
			return;
		}

		imgComputer.setAttribute('src', '../img/'+ image[i++] +'.png');

		if(i == image.length) i = 0;
	}, 100);
}

// Score computer dan player:
let scoreComputer = 0;
let scorePlayer = 0;
function infoScore(score) {
	if(score == 'MENANG!') return scorePlayer += 1;
	if(score == 'KALAH!') return scoreComputer += 1;
	if(score == 'DRAW!') return scorePlayer, scoreComputer;
}

// Event Pengulangan:
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(i) {
	i.addEventListener('click', function() {
		const pilihanCom = getPilihanCom();
		const pilihanPlayer = i.className;
		const score = getScore(pilihanCom, pilihanPlayer);
		
		// Panggil timing/putar pilihan Com:
		roll();
		infoScore(score);

		// Function setTimeout:
		setTimeout(function() {
			// Pilihan random computer:
			const imgCom = document.querySelector('.img-com');
			imgCom.setAttribute('src', '../img/'+ pilihanCom +'.png');

			// Hasil permainan:
			const info = document.querySelector('.info');
			info.innerHTML = score;

			// Hasil Computer:
			const valueCom = document.querySelector('.score-com');
			valueCom.innerHTML = 'Score : '+ scoreComputer;

			// Hasil Player:
			const valuePlayer = document.querySelector('.score-player');
			valuePlayer.innerHTML = 'Score : '+ scorePlayer;

			// // ALERT!!!
			// if(scoreComputer == 10) {
			// 	alert('Yah kamu sudah kalah *hiks');
			// }
			// if(scorePlayer == 10) {
			// 	alert('Yeayyy kamu menang *yippy');
			// }
		}, 1000);
	});
});

// atau

// Event Manual:
// // Event Gajah:
// const pGajah =document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
// 	const pilihanCom = getPilihanCom();
// 	const pilihanPlayer = pGajah.className;
// 	const score = getScore(pilihanCom, pilihanPlayer);

// 	// Pilihan random computer:
// 	const imgCom = document.querySelector('.img-com');
// 	imgCom.setAttribute('src', 'img/'+ pilihanCom +'.png');

// 	// Hasil permainan
// 	const info = document.querySelector('.info');
// 	info.innerHTML = score;

// 	// test cek lewat log:
// 	// console.log('com = '+ pilihanCom);
// 	// console.log('player = '+ pilihanPlayer);
// 	// console.log('hasil : '+ score);
// });


// // Event Orang:
// const pOrang =document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanCom = getPilihanCom();
// 	const pilihanPlayer = pOrang.className;
// 	const score = getScore(pilihanCom, pilihanPlayer);

// 	// Pilihan random computer:
// 	const imgCom = document.querySelector('.img-com');
// 	imgCom.setAttribute('src', 'img/'+ pilihanCom +'.png');

// 	// Hasil permainan
// 	const info = document.querySelector('.info');
// 	info.innerHTML = score;
// });


// // Event Semut:
// const pSemut =document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanCom = getPilihanCom();
// 	const pilihanPlayer = pSemut.className;
// 	const score = getScore(pilihanCom, pilihanPlayer);

// 	// Pilihan random computer:
// 	const imgCom = document.querySelector('.img-com');
// 	imgCom.setAttribute('src', 'img/'+ pilihanCom +'.png');

// 	// Hasil permainan
// 	const info = document.querySelector('.info');
// 	info.innerHTML = score;
// });


// Reset permainan:
// let reset = document.getElementById('reset');
// reset.addEventListener('click', function() {
// 	win = 0;
// 	lose = 0;
// 	document.querySelector('.score-player').innerHTML = 'Score : '+ win;
// 	document.querySelector('.score-com').innerHTML = 'Score : '+ lose;
// });