const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "47414976fbmshcbf3fb0851b1aa6p1d2e01jsnd9176dd6149b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  ) //added this +city insted of directly fetching weather for hardcodded city ie. city=pune etc
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp; //You can use response.temp as many time as you want
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity; //SAme for this also, instead of response.humidity2 use response.humidity
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed; // here too !!
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// getWeather("Delhi"); ---->"Hardcodded this value here so whatever was coming from up was being overwritten here by delhi so it always shows Delhi"
