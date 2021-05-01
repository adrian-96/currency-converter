console.log("Witam developerów!");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let plnElement = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.5811;
    let rateUSD = 3.7939;
    let rateGBP = 5.2662;
    let rateSEK = 0.4529;

    let amount = plnElement.value;
    let currency = currencyElement.value;
    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "SEK":
            result = amount / rateSEK;
            break;
        default: resultElement.innerText = `Wystąpił błąd.`;
    };
    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});

formElement.addEventListener("reset", () => {
    resultElement.innerText = ``;
});