const Filter = (props) => {
    return (
        <div>
            Find countries <input 
                onChange={props.handleSearchTerm}  
                placeholder='enter country name'
            />
            
        </div>
    )
}

export {Filter}