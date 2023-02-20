import axios from 'axios';


async function fetchAllCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag,population');
        const countries = result.data;
        // console.log(countries)
        test(countries);

    } catch (e) {
        const country = document.getElementById("countriesUl");
        country.innerHTML =
            ` <li id="error">No countries found :(</li>
`;
        console.error(e);
    }
}

fetchAllCountries()

function test(countries) {
    const countryElement = document.getElementById("countriesUl")
    countries.sort((a, b) => a.population - b.population);
    countryElement.innerHTML = countries.map((countries) => {
        function region(regionName) {
            let colour = " ";
            if (regionName === "Asia") {
                colour = ("red")
            }
            if (regionName === "Europe") {
                colour = ("yellow")
            }
            if (regionName === "Oceania") {
                colour = ("purple")
            }
            if (regionName === "Africa") {
                colour = ("blue")
            }
            if (regionName === "Americas") {
                colour = ("green")
            }
            if (regionName === "Polar") {
                colour = ("white")
            }
            if (regionName === "Antarctic Ocean") {
                colour = ("white")
            }
            if (regionName === "Antarctic") {
                colour = ("white")
            }
            return colour
        }

        const colourOutcome = region(countries.region);

        return ` <li id="${colourOutcome}">
                                <img src="${countries.flag}" alt="flag of country">
                               <h2> ${countries.name} </h2>
                               <p> Has a population of ${countries.population} people </p>
                                </li>`;
    })
}


