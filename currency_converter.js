// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
  };
  
  // Conversión de euros a dólares
  function fromEuroToDollar(euros, oneEuroIs) {
    let rate = oneEuroIs.USD
    return euros * rate
  }
  
  // Conversión de dólares a euros
  function fromDollarToEuro(dollars, oneEuroIs) {
    let rate = 1 / oneEuroIs.USD
    return dollars * rate
  }
  
  // Conversión de dólares a yenes
  function fromDollarToYen(dollars, oneEuroIs) {
    const euros = fromDollarToEuro(dollars, oneEuroIs)
    const yenes = euros * oneEuroIs.JPY
    return yenes
  }
  
  // Conversión de yenes a euros
  function fromYenToEuro(yen, oneEuroIs) {
    let rate = 1 / oneEuroIs.JPY
    return yen * rate
  }
  
  // Conversión de yenes a libras
  function fromYenToPound(yen, oneEuroIs) {
    const euros = fromYenToEuro(yen, oneEuroIs)
    const pounds = euros * oneEuroIs.GBP
    return pounds
  }
  
  module.exports = {
    fromEuroToDollar,
    fromDollarToEuro,
    fromDollarToYen,
    fromYenToEuro,
    fromYenToPound,
    oneEuroIs,
  }