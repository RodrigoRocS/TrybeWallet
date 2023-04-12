export default async function getCurrencies() {
  const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await fetchCurrencies.json();
  return currencies;
}
