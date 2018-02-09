var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
var allEven = evenNumbers.every(evenNumberCheck, this);
if (allEven) {
    console.log('true');
} else {
    console.log('false');
}
function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}

/**/

var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
sportsArray.forEach(offerSport);
function offerSport(value, index, array) {
    var sportsList = document.getElementById("sportsList");
    var bullet = document.createElement("li");
    bullet.innerText = value;
    sportsList.appendChild(bullet);
}

var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);

function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}

var money = [12.8, 15.9, 21.7, 35.2];
var roundedMoney = money.map(roundOff, money);

function roundOff(value, position, array) {
    return Math.round(value);
}
