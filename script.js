const currencyEl_one = document.getElementById("currency-one"),
	  currencyEl_two = document.getElementById("currency-two"),
	  amountEl_one = document.getElementById("amount-one"),
	  amountEl_two = document.getElementById("amount-two"),
	  rateEl = document.getElementById("rate"),
	  swap = document.getElementById("swap");

	
function calculate() {
	const currency_one = currencyEl_one.value;
	const currency_two = currencyEl_two.value;

	fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
	.then(res => res.json())
	.then(data => {
	
		const rate = data.rates[currency_two];

		rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

		const result = (amountEl_one.value * rate).toFixed(2);

		amountEl_two.setAttribute("value", result);
	});
}


function swapCurrencies() {
	const initial_currency_one = currencyEl_one.value;
	const currency_two = currencyEl_two.value;

	currencyEl_one.value = currency_two;
	currencyEl_two.value = initial_currency_one;

	calculate();
}


//Event Listeners
currencyEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", swapCurrencies);









