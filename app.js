

/* function call() {
    try {
        var a
        a.push();
    } catch (error) {
        console.log(new Error(`${error} Catch error`))
        throw "Boom"
    }
    finally{
        console.log('Finally');
    }
}

call() */

/* var blog = document.getElementById('blog');
for (let i = 0; i <br 30; i++) {
    blog.innerHTML += `<h1><i class="fa-solid fa-house"></i></br>${i+1}</h1>`;
} */


var city = document.getElementById('city');
var phone = document.getElementById('phone');
var table = document.getElementById('table');
var addCity = document.getElementById('addCity');
var card = document.getElementById('card');

var citiesSet = new Set(); // To store unique cities

function call(event) {
    event.preventDefault();

    // Check if the city already exists
    if (!citiesSet.has(city.value)) {
        table.innerHTML += 
        `
        <tr>
            <td></td>
            <td>${city.value}</td>
            <td>${phone.value}</td>
        </tr>
        `;
        opt();
        citiesSet.add(city.value); // Add city to the set
    }

    phoneNumberGenerated();
    city.value = '';
    phone.value = '';
}

function opt() {
    // Clear and re-add cities to avoid duplicates
    addCity.innerHTML = '';
    citiesSet.forEach(city => {
        addCity.innerHTML += `<option>${city}</option>`;
    });
}

function generatedNumbers() {
    var numbersSet = new Set();
    while (numbersSet.size < 50) {
        var startOfNumber = phone.value;
        for (var j = 0; j < 7; j++) {
            var phoneNumber = Math.floor(Math.random() * 10);
            startOfNumber += phoneNumber;
        }
        numbersSet.add(startOfNumber);
    }
    return numbersSet;
}

function phoneNumberGenerated() {
    var generatedSettedNumbers = generatedNumbers();
    card.innerHTML = ''; // Clear previous numbers
    generatedSettedNumbers.forEach(number => {
        card.innerHTML += `<h3>${number}</h3>`;
    });
}



