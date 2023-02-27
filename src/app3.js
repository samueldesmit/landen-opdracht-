import axios from 'axios';
// //////////////////////////////////////////////////////////////////////////////////////
// in app.2 heb ik het via een omweg werkend gekregen maar dit (app3) is de juiste versie.
// //////////////////////////////////////////////////////////////////////////////////////

let whichCountry = "Netherlands"

async function fetchAllCountries(test) {
    const search = `https://restcountries.com/v2/name/${whichCountry}`;
    try {
        const result = await axios.get(search);
        const dataCountry = result.data
        console.log(result)
        gotName(dataCountry[0]);

    } catch (e) {
        const country = document.getElementById("countryDiv");
        country.innerHTML =
            ` <li id="error">No countries found :(</li>`;
        console.error(e);
    }
}

fetchAllCountries()

const inputField = document.getElementById('land-search');
inputField.addEventListener('keyup', typen);

function typen(e) {
    whichCountry = (e.target.value);
}

const clickButton = document.getElementById('knopje');
clickButton.addEventListener('click', handleSubmit);

const submitButton = document.getElementById('formie');

function handleSubmit(e) {
    e.preventDefault();
    fetchAllCountries()
    document.getElementById("land-search").value = "";
}

function gotName(dataCountry) {
    const country = document.getElementById("countryDiv");

    if (dataCountry.currencies.length < 2) {
        country.innerHTML =

            ` <img src="${dataCountry.flag}" alt="picture of flaq"/>
 <p id="countryName">${dataCountry.name}</p>
<p>${dataCountry.name} is situated in ${dataCountry.subregion}. </p>
<p>It has a population of ${dataCountry.population} people. </p>
<p>The capital is ${dataCountry.capital} and you can pay with ${dataCountry.currencies[0].name}'s</p>
`;
    } else {
        country.innerHTML =
            ` <img src="${dataCountry.flag}" alt="picture of flaq"/>
 <p id="countryName">${dataCountry.name}</p>
<p>${dataCountry.name} is situated in ${dataCountry.subregion}. </p>
<p>It has a population of ${dataCountry.population} people. </p>
<p>The capital is ${dataCountry.capital} and you can pay with ${dataCountry.currencies[0].name}'s and ${dataCountry.currencies[1].name}'s</p>
`;
    }
}



