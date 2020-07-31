import React from 'react';
import { Link } from 'react-router-dom';



const ContinentList = (props) => {
    
    return(
        <div>
           
            <ul className='continent-list'>
            
             {props.list.map((val, key) =>
                <div key={key}><li >Continent: {val.continent}</li>
                <li>Country: {val.country}</li>
                <li>Population: {val.population}</li>
                
                
                </div>
                
                
                )}
            </ul>
            

            </div>
    )
}

export default ContinentList