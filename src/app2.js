import axios from 'axios';

// //////////////////////////////////////////////////////////////////////////////////////
// in app.2 heb ik het via een omweg werkend gekregen app3 is de juiste versie.
// //////////////////////////////////////////////////////////////////////////////////////

async function fetchAllCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;
        console.log(result.data)
        getName(countries);

    } catch (e) {
        const country = document.getElementById("countryDiv");
        country.innerHTML =
            ` <li id="error">No countries found :(</li>
`;
        console.error(e);
    }
}

fetchAllCountries()


const inputField = document.getElementById('land-search');
inputField.addEventListener('keyup', typen);


let whichCountry = "Germany"


function typen(e) {
    whichCountry = (e.target.value);
    console.log(e.target.value)
}

const clickButton = document.getElementById('knopje');
clickButton.addEventListener('click', handleSubmit);

const submitButton = document.getElementById('formie');

function handleSubmit(e) {
    e.preventDefault();
    // getName()
    fetchAllCountries()
    document.getElementById("land-search").value = "";
}


submitButton.addEventListener('submit', handleSubmit)


function getName(countries) {
    const search = countries.find((land) => {
        return land.name === whichCountry;
        // || land.altSpellings[0] === whichCountry || land.altSpellings[1] === whichCountry || land.altSpellings[2] === whichCountry || land.altSpellings[3] === whichCountry
    });

    const country = document.getElementById("countryDiv");

    if (search.currencies.length < 2) {

        country.innerHTML =

            ` <img src="${search.flag}" alt="picture of flaq"/>
 <p id="countryName">${search.name}</p>
<p>${search.name} is situated in ${search.subregion}. </p>
<p>It has a population of ${search.population} people. </p>
<p>The capital is ${search.capital} and you can pay with ${search.currencies[0].name}'s</p>
`;
    } else {
        country.innerHTML =

            ` <img src="${search.flag}" alt="picture of flaq"/>
 <p id="countryName">${search.name}</p>
<p>${search.name} is situated in ${search.subregion}. It has a population of ${search.population} people. </p>
<p>The capital is ${search.capital} and you can pay with ${search.currencies[0].name}'s and ${search.currencies[1].name}'s </p>
`;
    }
}