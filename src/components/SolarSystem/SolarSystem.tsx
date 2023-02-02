import Planets from "../../data/planets";
import PlanetCard from "../PlanetCard/PlanetCard";
import Title from "../Title/Title";

export default function SolarSystem(): JSX.Element {
  return (
    <div>
      <Title headline="Planetas" />
      {Planets.map((obj) => {
        return(
          <PlanetCard
            key={obj.name}
            planets={obj}
          />
        )
      })}
    </div>
  )
}