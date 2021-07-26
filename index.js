// Code your solution in this file!

const someDrivers = ['Tyler', 'Karen', 'Megan', 'Ryan', 'Tara', 'Paul'];

//Return First 2 Drivers
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
}

const tylerKaren = returnFirstTwoDrivers(someDrivers);
tylerKaren;

//Return Last 2 Drivers
const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(-2);
}


const taraPaul = returnLastTwoDrivers(someDrivers);
taraPaul;


//Select Drivers
const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

const arrayOfFunctions = selectingDrivers[0](someDrivers);
arrayOfFunctions;


//Create Fare Multiplier
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

const fare = createFareMultiplier(4)(5.50);
fare;

//Fare Doubler
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

console.log(fareDoubler(10));

//Fare Tripler
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};

console.log(fareTripler(10));


// Select Different Drivers
const selectDifferentDrivers = function(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
}

const drivers = selectDifferentDrivers(someDrivers, returnLastTwoDrivers);
drivers;