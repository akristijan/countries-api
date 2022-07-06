import {useState, useEffect} from 'react'
import axios from 'axios'
import {Filter} from './components/Filter'
import {Countries} from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  


  //Get data from API https://restcountries.com
  useEffect(() => {

    axios.get('https://restcountries.com/v3.1/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
          })
  },[])
  
  //Filter countries by searched term
  const countriesToShow = countries.filter((country) => country.name.common.toLowerCase().startsWith(searchTerm) )

   //Handler for filtering by country name 
   const handleSearchTerm = (e) => {
    
    setSearchTerm(e.target.value.toLowerCase())    
    
  }


  return (
    <div >  
      <Filter handleSearchTerm={handleSearchTerm} />
      <Countries countries={countriesToShow}/>
    </div>
  );
}

export default App;
