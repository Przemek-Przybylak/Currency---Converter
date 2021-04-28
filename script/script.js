let form = document.querySelector(".js-form");
let pln = document.querySelector(".js-pln");
let currency = document.querySelector(".js-currency");
let result = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let calculatepln = pln.value;
    let calculateCurrency = currency.value;
    let calculateResult;

    let EUR = 4.55;
    let USD = 3.79;
    let CHF = 4.13;

    switch (calculateCurrency) {
        case "eur":
            calculateResult = (calculatepln / EUR).toFixed(2);
            result.innerText = `${calculateResult} Euro`;
            break;

        case "usd":
            calculateResult = (calculatepln / USD).toFixed(2);
            result.innerText = `${calculateResult} USD`;
            break;

        case "chf":
            calculateResult = (calculatepln / CHF).toFixed(2);
            result.innerText = `${calculateResult} CHF`;
            break;

        default:
            result.innerText = "ERROR - spróbuj ponownie";
    }

    form.addEventListener("reset", () => {
        result.innerText = ``;
    });
});