// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// funcion de conversor de euros
const oneEuroIs = {
    "JPY": 156.5,  // Yen japonés
    "USD": 1.07,   // Dólar estadounidense
    "GBP": 0.87    // Libra esterlina
};

// De Euro a Dólar
const fromEuroToDollar = (euros) => euros * oneEuroIs["USD"];

// De Dólar a Yen (vía Euro)
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs["USD"];
    const yenes = euros * oneEuroIs["JPY"];
    return yenes;
};

// De Yen a Libra (vía Euro)
const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs["JPY"];
    const pounds = euros * oneEuroIs["GBP"];
    return pounds;
};


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };