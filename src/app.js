import axios from 'axios';




async function fetchAllCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag,population');
        // console.log(result)


       const test = result.data.map((land) => {
           const outcome = [ { name: land.name}, {people: land.population}, {flag: land.flag},]
           return outcome
       });

       console.log (test)

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
                return colour
            }

            const colourOutcome = region(result.data[0].region);
            // console.log(colourOutcome);


            const country = document.getElementById("countriesUl");
            country.innerHTML = ` <li id="${colourOutcome}">
                                ${result.data[0].name}
                               <p> Has a population of ${result.data[0].population} people </p>
                                <img src="${result.data[0].flag}" alt="flag of country">
                                </li>                           
`;



    } catch (e) {
        const country = document.getElementById("countriesUl");
        country.innerHTML =
            ` <li>Geen land gevonden</li>
`;
        console.error(e);
    }
}

fetchAllCountries();

