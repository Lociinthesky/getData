$('#button').click(()=>{

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'data.txt', true);


	xhr.onload = function (){e
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

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'customer.json', true);

	xhr.onload = function() {

		if ( this.status === 200 ) {

			const customer = JSON.parse(this.responseText);

			const output = `
			<ul>
			<li>ID: ${customer.id}</li>
			<li>Name: ${customer.name}</li>
			<li>Company: ${customer.company}</li>
			<li>Phone: ${customer.phone}</li>
			</ul>`;

			document.getElementById('customer').innerHTML = output;
		}
	}
	xhr.send();
}



$('#button3').click(loadCustomers);

function loadCustomers(e) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'customers.json', true);

	xhr.onload = function() {
		if ( this.status === 200 ) {
			const customers = JSON.parse(this.responseText);

			let output = '';

			customers.forEach(function(customer){
				output += `
				<ul>
					<li>ID: ${customer.id}</li>
					<li>Name: ${customer.name}</li>
					<li>Company: ${customer.company}</li>
					<li>Phone: ${customer.phone}</li>
				</ul><br>`;
			})

			//document.getElementById('customers').innerHTML = output;
		}
	};

	xhr.onerror = function() {
		console.log( 'Request error...' );
	}
	xhr.send();
}



document.querySelector('.getJokes').addEventListener('click', getJokes);
	//let numJokes = $('#number').value; 

function getJokes(e) {

	let numJokes = document.querySelector('input[type="number"]').value;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', `http://api.icndb.com/jokes/random/${numJokes}`, true)

	xhr.onload = function() {
		if ( this.status === 200 ) {
			let response = JSON.parse(this.responseText);
			console.log(response);
			//look at the response that is log to understand the following

			let output = '';

			if ( response.type === 'success' ) {
				response.value.forEach(function(joke){
					output += `<li>${joke.joke}</li>`
				})
			} else {
				output += `<li>Something went wrong</li>`;
			}

			document.querySelector('.jokes').innerHTML = output;
		}
	}
	xhr.send();
	e.preventDefault();
}