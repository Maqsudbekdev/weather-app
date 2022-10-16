(
    function(){
        axios.get("https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Namangan&days=7&aqi=yes&alerts=yes")
          .then(response => loadDAta(response.data))
          .catch(err => console.log(err))
    }()
)

const searchInput = document.querySelector(".search_input");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${searchInput.value}&days=7&aqi=yes&alerts=yes`)
    .then(response => loadDAta(response.data))
    .catch(err => console.log(err))
})

function loadDAta(data) {
    cityname.innerHTML = "Which province:" + " " + data.location.name;
    country.innerHTML = "Which country:" + " " + data.location.country + "," + data.location.name;
    temperature.innerHTML = "How many degrees:" + " " + data.current.temp_c + "°C";
    data.forecast.forecastday.forEach(d =>{
        const p = document.createElement("p");
        p.innerHTML = d.date;
    })
    console.log(data)
}