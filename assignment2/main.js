const COUNTRIES_API_URL = "https://restcountries.com/v3.1/";
let countries = []

$(async () =>{

    $("#allCountry").click(async () => {
        countries = await getcountriesFromApi("all");
        displaycountries(countries)
    })

    $("#searchByName").click(async () => {

        let countryName = $('#searchName').val();

        if (countryName.length === 0) {
            countryName = "all";
            
        } else {
            countryName = "name/"+ countryName     
        }

        countries = await getcountriesFromApi(countryName);

        displaycountries(countries)
    })

})

async function getcountriesFromApi(countriesToGet){

    let url = COUNTRIES_API_URL + countriesToGet

    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: countries => resolve(countries),
            error:err =>  reject(err)  
        })
    })
}



function displaycountries(countries) {

    let totalPopulation = 0 ;
    let regionStat = [];
    

    countries.forEach((country) => {
        totalPopulation +=  country.population;

        if (regionStat.indexOf(country.region) < 0) {
            regionStat.push(country.region)
        }
    })

    let statisticsContent = "";
    $('#statistics-container').html(statisticsContent);

    statisticsContent += `
            <p> Total countries result: ${countries.length}</p>
            <p> Total Countries Population: ${totalPopulation}</p>
            <p>Average Population: ${totalPopulation/countries.length}</p>
            <br>
            <table>
            <thead>
                <tr>
                    <th>Country Name</th>
                    <th>Number of citizens</th>
                </tr>
            </thead>
            <tbody>`

    countries.forEach((country) => {

        statisticsContent += `
            <tr>
                <td>${country.name.common}</td>
                <td>${country.population}</td>
            </tr>
        `
    })

    statisticsContent += `</tbody>
                        </table><br>
                        <table>
                        <thead>
                            <tr>
                                <th>Region</th>
                                <th>Number of countries</th>
                            </tr>
                        </thead>
                        <tbody>`

    regionStat.forEach((regionToCount) => {

        let counterRegion = countries.filter((country) => {
                return country.region === regionToCount;
            });

        statisticsContent += `
            <tr>
                <td>${regionToCount}</td>
                <td>${counterRegion.length}</td>
            </tr>`
                    
    })

    statisticsContent += `</tbody>
    </table><br>`

    $('#statistics-container').html(statisticsContent);

}