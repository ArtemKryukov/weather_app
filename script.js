const icon = document.querySelector('.icon')
const city = document.querySelector('.city')
const temerature = document.querySelector('.temerature')
const weatherDescription = document.querySelector('.weather-description')
const windSpeed = document.querySelector('.wind_speed')
const precip = document.querySelector('.precip')
const pressure = document.querySelector('.pressure')
const humidity = document.querySelector('.humidity')
const time = document.querySelector('.time')


const showTime = () => {
    const date = new Date()
    time.textContent = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    
    setTimeout(showTime, 1000)
}
showTime()
// 9c9f8f988a91214b3c811e5c88d080a9
async function getWeather() {  
    const url = `http://api.weatherstack.com/forecast?access_key=9c9f8f988a91214b3c811e5c88d080a9&query=${city.value}`
    const res = await fetch(url)
    const data = await res.json()

    temerature.innerHTML = data.current.temperature
    weatherDescription.innerHTML = data.current.weather_descriptions
    windSpeed.innerHTML = `${Math.floor(data.current.wind_speed)} m/s`
    precip.innerHTML = data.current.precip
    pressure.innerHTML = `${data.current.pressure} mbar`
    humidity.innerHTML = `${data.current.humidity}%`
}

city.addEventListener('change', getWeather)

