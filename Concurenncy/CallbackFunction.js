// SALAH
{
	const orderCoffee = () => {
		let coffee = null;
		console.log("Sedang membuat kopi, silakan tunggu...");
		setTimeout(() => {
			coffee = "Kopi sudah jadi!";
		}, 3000);
		return coffee;
	}
	 
	const coffee = orderCoffee();
	console.log(coffee);
	console.log("");
}

// ----------------------------------------------------
// BENAR - dengan callback function
{
	const orderCoffee = callback => {
		let coffee = null;
		console.log("Sedang membuat kopi, silakan tunggu...");
		setTimeout(() => {
			coffee = "Kopi sudah jadi!";
			callback(coffee);
		}, 3000);
	}

	orderCoffee(coffee => {
		console.log(coffee);
	});
}

