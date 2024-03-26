const UNITS = {
   celcius: "C" ,
   fahrenheit: "F"
};

function convertTemperatureTo(temperature, unitTo){
    if(unitTo === UNITS.celsius){
        return (temperature - 32) / 1.8;
    }else if(unitTo == UNITS.fahrenheit){
        return temperature * 1.8 + 32;
    }else {
        throw new Error("Invalid unit");
    }
}

function getOppositeUnit( unit){
    return unit===UNITS.celcius ? UNITS.fahrenheit: UNITS.celcius;
}
export {UNITS, convertTemperatureTo, getOppositeUnit};