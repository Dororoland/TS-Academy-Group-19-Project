import './imagesection.css'
import { useEffect, useState } from "react";

function Imagesection() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data))
      .catch((err) => console.log(err));
  }, [])

return (
    <section>
<h2 className="topic">Visualizing the Differences Between Planets</h2>
    <p className="text">Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight
        how vastly different terrestrial planets are from gas giants and ice giants.</p>
       <div className="container">
    

      <div className="grid">
        {planets.map((planet, index) => (
          
          <div className="card" key={index}>
            <figure>
            <img src={planet.image} alt={planet.planet}/>
            <figcaption>{planet.planet}<br/>
            {planet.distanceFromSun} million km</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>

   </section>
)
}




export default Imagesection




 
 
    
