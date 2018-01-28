$('button').click(()=>{

	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'data.txt', true);


	xhr.onload = function (){
		if ( this.status === 200 ) {
			$('#output').html(`<h1>${this.responseText}</h1>`)
		}
	}

	xhr.onerror = function(){
		console.log('request error..')
	}

	xhr.send();
});

$('#button2').click(loadCustomer);

function loadCustomer(e) {

	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customer.json', true);

	xhr.onload = function() {

		if ( this.status === 200 ) {

			const customer = JSON.parse(this.responseText);

			
		}
	}
	xhr.send();
}