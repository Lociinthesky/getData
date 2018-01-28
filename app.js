// $('#button').click(()=>{

// 	const xhr = new XMLHttpRequest();

// 	xhr.open('GET', 'data.txt', true);


// 	xhr.onload = function (){
// 		if ( this.status === 200 ) {
// 			$('#output').html(`<h1>${this.responseText}</h1>`)
// 		}
// 	}

// 	xhr.onerror = function(){
// 		console.log('request error..')
// 	}

// 	xhr.send();
// });

$('#button2').click(loadCustomer);

function loadCustomer(e) {

	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customer.json', true);

	xhr.onload = function() {

		if ( this.status === 200 ) {

			const customer = JSON.parse(this.responseText);

			const output = `
			<ul>
			<li>ID: ${customer.id}</li>
			<li>Name: ${customer.name}</li>
			<li>Company: ${customer.company}</li>
			<li>Phone: ${customerphone}</li>
			</ul>`;

			document.getElementById('customer').innerHTML = output;
		}
	}
	xhr.send();
}