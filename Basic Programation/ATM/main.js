// Build Bill class
class Bill
{
	constructor(value, quantity)
	{
		this.value = value
		this.quantity = quantity
	}
}

// Declare variables
var result = document.getElementById("result");
var cash;
var withdrew_quantity;

// Declare total amount of money in bills
var stock = [];
stock.push(new Bill(50, 2));
stock.push(new Bill(20, 1));
stock.push(new Bill(10, 2));

function withdraw()
{
	// Clear and get new values
	result.innerHTML = "";
	cash = parseInt(document.getElementById("cash").value);

	// Calculate
	for(var bill of stock)
	{
		// Check if there is money left
		if(cash > 0)
		{
			// Calculate the amount of bills to withdraw
			withdrew_quantity = Math.floor(cash / bill.value)

			if(withdrew_quantity > bill.quantity)
			{
				withdrew_quantity = bill.quantity;
			}
			else
			{
				bill.quantity -= withdrew_quantity;
			}

			// Declare new values
			cash -= (bill.value * withdrew_quantity);

			// Show the result
			while(withdrew_quantity != 0)
			{
				result.innerHTML += `<img src="images/${bill.value}.jpg" alt="${bill.value}" width="250px">`
				withdrew_quantity -= 1
			}
		}
	}

	// ATM doesn't have more money
	if(cash > 0)
	{
		result.innerHTML = "We don't have more of that money";
	}
}

// Declare button
var button = document.getElementById("withdraw");
button.addEventListener("click", withdraw);
