/*
It would be great to use Intl.NumberFormat but the Latin America
convention uses a thousand separator for a number greater
than or equal to 10.000
*/
export const formatCurrency = (value, thousandsSeparator = '.', decimals = 0) => {
  const number = value.toString().replace(/\D/g, '')
  const integer = Math.floor(value);
  const decimal = ((value - integer).toFixed(2)).split('.').pop();
  const decimalSeparator = thousandsSeparator === '.'
    ? ','
    : '.'
  const integerPart = `${integer.toString().replace(
    /(\d)(?=(?:[0-9]{3})+\b)/g,
    `$1${thousandsSeparator}`
  )}`
  const decimalPart = decimals > 0
    ? `${decimalSeparator}${decimal}`
    : ''

  return number
    ? `$ ${integerPart}${decimalPart}` 
    : ''
}