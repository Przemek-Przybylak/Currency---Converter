{
    const result = document.querySelector(".js-result");
    let finalResult;

    const calculateResult = (PLNAmount, currencyValue) => {

        const eur = 4.55;
        const usd = 3.79;
        const chf = 4.13;

        switch (currencyValue) {
            case "EUR":
                return finalResult = (PLNAmount / eur).toFixed(2);

            case "USD":
                return finalResult = (PLNAmount / usd).toFixed(2);

            case "CHF":
                return finalResult = (PLNAmount / chf).toFixed(2);

            default:
                return result.innerText = "ERROR - spróbuj ponownie";
        }
    }

    const onResultPrint = (finalResult, currencyValue) => {
        result.innerText = `${finalResult} ${currencyValue}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const pln = document.querySelector(".js-pln");
        const currency = document.querySelector(".js-currency");
        const PLNAmount = pln.value;
        const currencyValue = currency.value;

        calculateResult(PLNAmount, currencyValue);
        onResultPrint(finalResult, currencyValue);
        
    };

    const onReset = () => {
        result.innerText = ``;
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
        form.addEventListener("reset", onReset);


    };

    init();
};