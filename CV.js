document.querySelector('.right').addEventListener('click', function(){rightSlider()});
document.querySelector('.left').addEventListener('click', function(){leftSlider()});

function rightSlider(){ 
	document.querySelector('.welcome-part').classList.add('forward');
	document.querySelector('.welcome-part').classList.remove('back');
	document.querySelector('.about').classList.remove('not-visible');
	document.querySelector('.about').classList.add('back');
	document.querySelector('.about').classList.remove('forward');
	document.querySelector('.right').classList.add('colored');
	document.querySelector('.left').classList.remove('colored');
}

function leftSlider(){
	document.querySelector('.welcome-part').classList.toggle('forward');
	document.querySelector('.welcome-part').classList.toggle('back');
	document.querySelector('.about').classList.toggle('forward');
	document.querySelector('.about').classList.toggle('back');
	document.querySelector('.right').classList.toggle('colored');
	document.querySelector('.left').classList.toggle('colored');
}

document.querySelector('.nav-icon').addEventListener('click', function()  {
	document.querySelector('.menu').classList.add('opened');
	document.querySelector('.menu').classList.remove('closed');
	document.querySelector('.close').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');
	document.querySelector('.close').style.display = 'none';
});