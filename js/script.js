{
    const welcome = () => {
        console.log("Witam developerów!");
    };

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.5811;
        const rateUSD = 3.7939;
        const rateGBP = 5.2662;
        const rateSEK = 0.4529;
        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "SEK":
                return amount / rateSEK;

            default: resultElement.innerText = `Wystąpił błąd.`;
        };

    };

    const resultElement = document.querySelector(".js-result");

    const resetResultText = () => {
        resultElement.innerText = `...`;
    };

    const updateResultText = (amount, result, currency) => {
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const plnElement = document.querySelector(".js-pln");

        const amount = +plnElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amount, currency);
        updateResultText(amount, result, currency);
    };

    const init = () => {
        welcome();
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", resetResultText);
    };

    init();

};