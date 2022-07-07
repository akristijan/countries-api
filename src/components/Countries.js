import {Country} from './Country'
import { ShowCountry } from './ShowCountry'

const Countries = ({countries,handleSearch}) => {
    
    if(countries.length === 1) return <div><Country country={countries[0]}/></div>
    if(countries.length > 10) return <h4>Too many matches, specify another filter.</h4>
         
    else if(countries.length > 1 && countries.length <= 10) {
        return (      
            <div>
                 {countries.map(country=> 
                    <div key={country.name.common}> 
                        <li >
                        {country.name.common}
                        <button value={country.name.common} onClick={handleSearch}>show</button>
                        </li>
                        
                    </div>
                    
                    
                 )} 
            </div>
                    
        )
    }
    
}

export {Countries}