// Lazy Down
$(window).on('load', function() {
	$('.downIn').addClass('downOut');
});

// Typing Animation
let typed = new Typed(".typing", {
	strings: ["College Student", "Future Doctor", "Internship", "Author", "Reader"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

// About - Timing
const date = new Date('Apr 28 2021 00:00:00').getTime();

const delay = setInterval(function() {
	const now = new Date().getTime();
	const difference = date - now;

	const day = Math.floor(difference / (1000 * 60 * 60 * 24)); // (1000 = 1s, 60 = 1m, 60 = 1h, 24 = 1d)
	const hour =  Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	const minute = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
	const second = Math.floor(difference % (1000 * 60) / 1000);

	const text = document.getElementById('timing-ultah');
	text.innerHTML = "Ultah: "+ day +"d "+ hour +"h "+ minute +"m "+ second +"s";
	text.style.textAlign = "center";
	text.style.marginTop = "1rem";
	text.style.fontWeight = "normal";

	if(difference < 0 ) {
		clearInterval(delay);
		// alert('Selamat Ulang Tahun!');
		text.innerHTML = "Selamat Ulang Tahun!";
	} 
}, 1000);

// Theme Toggle
let themeColor = document.querySelectorAll('.theme span');
themeColor.forEach(color => color.addEventListener('click', () => {
	let background = color.style.background;
	document.querySelector('body').style.background = background;
}));