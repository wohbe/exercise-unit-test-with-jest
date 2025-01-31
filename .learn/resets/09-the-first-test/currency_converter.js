// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Conversión de euros a dolares

function fromEuroToDollar(euros, oneEuroIs) {
    let rate = oneEuroIs.USD
    return euros * rate;
  }

// Conversión de dólares a euros
  
  function fromDollarToEuro(dollars, oneEuroIs) {
    let rate = 1 / oneEuroIs.USD
    return dollars * rate;
  }

// Conversión de dolares a yenes

function fromDollarToYen(dollars, oneEuroIs) {
    let rate = fromDollartoEuro(1) / oneEuroIs.JPY
    return dollars * rate;
  }

// Conversión de yenes a euros

function fromYenToEuro(yen, oneEuroIs) {
    let rate = 1 / oneEuroIs.JPY
    return yen * rate;
  }

// Conversión de yenes a libras

function fromYenToPound(yen, oneEuroIs) {
    let rate = fromYenToEuro(1) / oneEuroIs.GBP
    return yen * rate;
  }