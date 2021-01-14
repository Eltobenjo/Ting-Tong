import React from 'react'
import chefs from'./data.json'




const ChefGrid = () => {
    return (
        <div>
            {chefs.map(chef=>{
                return (
                  <div className="card">
                    <div className="card-inner">
                      <div className="card-front">
                        <h1>Name:{chef.name}</h1>
                        <h3>Nationality:{chef.nationality}</h3>
                        <h3>Location:{chef.location}</h3>
                        
                          <h4>
                            About me:<p>{chef.bio}</p>
                          </h4>
                      
                      </div>
                    </div>
                  </div>
                );
            })}
        </div>
    )
}

export default ChefGrid
