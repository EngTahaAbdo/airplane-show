const title = $('#title');
const price =  $('#price');
const description = $('#describtion');
const input = document.querySelector('#image');


$('.create-post').on('click', function(event) {


	let validTitle = validate(title);
	let validPrice = validate(price);
	let validDescription = validate(description);
	let validImage = validateImage(input);

	console.log(validImage)
	console.log(input)
	event.preventDefault();

	if (validTitle&&validPrice&&validDescription&&validImage) {

			$('form').submit();

	}

	});



function validate(input) {
	if (input.val() === '' ){
		input.addClass('is-invalid').removeClass('is-valid')
		return false ;
	}

	else {
			input.removeClass('is-invalid').addClass('is-valid')
			return true ;
	}
}




console.log(input)
console.log(input.files)

function validateImage(input) {
	if (input.files.length === 0 ){
		input.classList.add('is-invalid');
		input.classList.remove('is-valid');
		return false ;
	}
	else {
			input.classList.remove('is-invalid');
			input.classList.add('is-valid');
			return true ;
	}
}



// input.addEventListener('change',function(){
// 	console.log('')
// })