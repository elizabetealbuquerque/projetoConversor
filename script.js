const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9

const convertValues = () => {
       const inputReal = document.getElementById('input-real').value
       const realValueText = document.getElementById('real-value-text')
       const currencyValueText = document.getElementById('currency-value-text')

       
       realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency:"BRL",
       }).format(inputReal);

       if(select.value ===  "US$ Dólar americano"){
              currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
                     style: "currency",
                     currency:"USD",
              }).format(inputReal / dolar);
       } 
       
       if(select.value === "€ Euro"){
              currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                     style: "currency",
                     currency:"EUR",
              }).format(inputReal / euro);  
       }



};

changeCurrency = () => {
      const currencyName = document.getElementById('currency-name')
      const currencyImage = document.getElementById('currency-img')

      if(select.value === '€ Euro'){
       currencyName.innerHTML = "Euro"
       currencyImage.src = "./img/euro.svg"
      } else {
       currencyName.innerHTML = "Dólar americano"
       currencyImage.src = "./img/estados-unidos (1) 1.svg"
      }

      convertValues()
      
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)