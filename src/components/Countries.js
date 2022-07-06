import {Country} from './Country'

const Countries = ({countries}) => {
    
    if(countries.length > 10) {
        return (
            <h4>Too many matches, specify another filter.</h4>
        )
    }
    else if(countries.length > 1 && countries.length <= 10) {
        return (      
            <div>
                 {countries.map(country=> 
                    <li key={country.name.common}>
                        {country.name.common}
                    </li>
                    
                 )} 
            </div>
                    
        )
    }
    else if(countries.length === 1) {
        return (
            <div>
                <Country country={countries[0]}/>
            </div>
        )
    }
    
}

export {Countries}