import axios from 'axios';
// //////////////////////////////////////////////////////////////////////////////////////
// in app.2 heb ik het via een omweg werkend gekregen maar dit (app3) is de juiste versie.
// //////////////////////////////////////////////////////////////////////////////////////

let whichCountry = "Netherlands"

async function fetchAllCountries() {
    const search = `https://restcountries.com/v2/name/${whichCountry}`;
    try {
        const result = await axios.get(search);
        const dataCountry = result.data
        console.log(result)
        gotName(dataCountry[0]);
    } catch (e) {
        const country = document.getElementById("countryDiv");
        const currency = document.getElementById("countryP")
        country.innerHTML = ` <p id="error">No countries found</p>`;
        currency.innerHTML = ` :( `;
        console.error(e);
    }
}

fetchAllCountries()

const inputField = document.getElementById('landSearch');
inputField.addEventListener('keyup', typen);

function typen(e) {
    whichCountry = (e.target.value);
}

const clickButton = document.getElementById('fromButton');
clickButton.addEventListener('click', handleSubmit);

const submitButton = document.getElementById('formField');

function handleSubmit(e) {
    e.preventDefault();
    fetchAllCountries()
    document.getElementById("landSearch").value = "";
}

function gotName(dataCountry) {
    const country = document.getElementById("countryDiv");
    const currency = document.getElementById("countryP")

    country.innerHTML =
        ` <img src="${dataCountry.flag}" alt="picture of flaq"/>
            <p id="countryName">${dataCountry.name}</p>
            <p>${dataCountry.name} is situated in ${dataCountry.subregion}. 
            It has a population of ${dataCountry.population} people.</p>    `

    if (dataCountry.currencies.length < 2) {
        currency.innerHTML = `The capital is ${dataCountry.capital} 
        and you can pay with ${dataCountry.currencies[0].name}'s`;
    } else {
        currency.innerHTML = `The capital is ${dataCountry.capital} 
        and you can pay with ${dataCountry.currencies[0].name}'s and ${dataCountry.currencies[1].name}'s`;
    }
}



