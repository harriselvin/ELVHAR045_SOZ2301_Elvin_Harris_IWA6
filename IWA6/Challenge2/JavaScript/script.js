const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line
if ((hourOfDay !==null) && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00')) {
	const taxAsDecimal = parseInt(tax) / '100'
    const startingAfterTax = salary * (1.04051 - taxAsDecimal)
	const balance = startingAfterTax - transport - food - rent
    const currency = 'R'

    console.log(currency + balance.toFixed(2))
}
	
