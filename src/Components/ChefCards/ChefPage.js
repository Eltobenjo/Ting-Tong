import React from 'react'
import "./ChefPage.css"
import cadorna from "../assets/cadorna.jpg"
import fournhalfstar from "../assets/fournhalfstar.png"

function ChefPage() {
    return (
        <div>
        <div className="chefName"><h1>Welcome to your Home Page</h1>  </div>
        <div className="CPmainContainer">
             
            <div className="CPboxLeft">
                <div>
                    <img className="cadorna-img" src={cadorna} alt="Chef Cadorna" />  </div>
                <div>
                    <img className="star-img" src={fournhalfstar} alt="Chef Cadorna" />
                    </div>

            </div>
            <div className="CPboxRight">
            <h1>Luigi Cadorna</h1>
            <h4>Luigi Cadorna was originally hired as a line cook at Lola and, in the space of only a few years, advanced first to Sous Chef and then, in 2007, was promoted to become Chef of Lola.  In 2009, Luigi moved across the street from Lola to Dahlia Lounge, taking on the position of Chef of the Dahlia Lounge.
                    <br></br>
                    <br></br>
Luigi believes the first year of cooking food with a Mediterranean emphasis at Lola brought everything together for him: how to focus on one or two ingredients in a dish and make them shine, how to keep things simple and interesting, and most important of all, how to work with the seasons.
                <br></br>
                Luigi supports a family of 4 and has mastered the art of Italian cooking.
                </h4>
                <div className="chef-btn">

                    <button type="submit">Update Profile</button>

                    <button type="submit">Add Menu</button>
 
                 
</div>

            </div>


            
            </div></div>
          
    )
}

export default ChefPage

