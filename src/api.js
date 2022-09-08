const api ={
    url: 'http://api.openweathermap.org/data/2.5/weather',
    key: 'f660a2fb1e4bad108d6160b7f58c555f'
}

const makeIconUrl = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const getForecast = async(city) => {
    const apiUrl = `${api.url}?q=${city}&appid=${api.key}&units=metric`;

    const data = await fetch(apiUrl)
        .then(res => res.json())
        .then(data => data);

    const {
        weather,
        main: { temp, feels_like },
        sys: { sunrise, sunset, country },
        name,
    } = data;

    const {description, icon, main} = weather[0]

    return {
        description,
        iconUrl: makeIconUrl(icon),
        temp,
        feels_like,
        sunrise,
        sunset,
        country,
        main,
        name
    }
}

export { getForecast };