const title = $('#title');
const price =  $('#price');
const description = $('#describtion');


$('.create-post').on('click', function(event) {


	let validTitle = validate(title);
	let validPrice = validate(price);
	let validDescription = validate(description);


	event.preventDefault();

	if (validTitle&&validPrice&&validDescription) {

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