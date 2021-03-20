// Prompt
while(nama != 'nurgit') {
	var nama = prompt('Masukkan Nama Anda:');
	if(nama == 'nurgit') {
		Swal.fire({
			title: 'Oh Nurgit, yaudah masuk',
			icon: 'success'
		});
	}
}

// Lazy Down
$(window).on('load', function() {
	$('.downIn').addClass('downOut');
});

// Theme Toggle
let themeColor = document.querySelectorAll('.theme span');
themeColor.forEach(color => color.addEventListener('click', () => {
	let background = color.style.background;
	document.querySelector('body').style.background = background;
}));