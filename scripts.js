const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-selecty")

function convertValues(){
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const inputCurrencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
  const inputCurrencyValueConverted = document.querySelector(".currency-valuey") // outras moedas

  console.log(currencySelect.value)

  const dolarToday = 5.2
  const eurotoday = 6.2
  const libratoday = 7.5

 

  if(currencySelect.value == "dolar"){
    inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US" , {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

  }

  if(currencySelect.value == "euro"){
    inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",  {
       style:"currency", 
       currency:"EUR"
    }).format(inputCurrencyValue / eurotoday)
  }

  if(currencySelect.value == "libra"){
    inputCurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB" , {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libratoday)

  }

  inputCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR" , {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

  
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

 if (currencySelect.value == "dolar") {
  currencyName.innerHTML = "Dolar americano"
  currencyImage.src = "./assets/usa.png"
 }


 if (currencySelect.value == "euro") {
  currencyName.innerHTML = "Euro"
   currencyImage.src = "./assets/euro.png"
 }

 if (currencySelect.value == "libra") {
  currencyName.innerHTML = "Libra"
   currencyImage.src = "./assets/libra.png"
 }

 convertValues()
} 


currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)

function newFunction() {
  return "Libra"
}
