async function getWeather() {
    let city=document.getElementById("cityinput").value;
    let apiKey="YOUR_API_KEY";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response=await fetch(url);
    let data=await response.json();
    let temp=data.main.temp;
    let weather=data.weather[0].main;

    document.getElementById("weatherResult").innerHTML=
    `Temperature: ${temp}°C <br> Weather: ${weather}`;

}