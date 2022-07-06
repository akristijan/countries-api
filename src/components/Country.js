const Country = ({country}) => {
        
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <ul>
                {Object.values(country.languages).map((lang)=> <li key={lang}>{lang}</li>)}
            </ul>
            <div>
                <img src={country.flags.png} alt="country flag" />
            </div>
            
        </div>
    )
}

export {Country}