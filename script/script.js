
{
    let result = document.querySelector(".js-result");

    const calculateResultFunction = (currency) => {

        const EUR = 4.55;
        const USD = 3.79;
        const CHF = 4.13;

        switch (calculateCurrency) {
            case "eur":
                calculateResult = (calculatepln / EUR).toFixed(2);
                return result.innerText = `${calculateResult} Euro`;


            case "usd":
                calculateResult = (calculatepln / USD).toFixed(2);
                return result.innerText = `${calculateResult} USD`;


            case "chf":
                calculateResult = (calculatepln / CHF).toFixed(2);
                return result.innerText = `${calculateResult} CHF`;


            default:
                return result.innerText = "ERROR - spróbuj ponownie";
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const calculatepln = pln.value;
        const calculateCurrency = currency.value;
        let calculateResult;
        const form = document.querySelector(".js-form");
        const pln = document.querySelector(".js-pln");
        const currency = document.querySelector(".js-currency");
    };

    const onReset = () => {
        result.innerText = ``;
    };

    const init = () => {
        form.addEventListener("submit", onFormSubmit);
        form.addEventListener("reset", onReset)
    };

    init()
};