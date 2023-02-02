import { useContext } from "react";
import missions from '../../data/missions';
import MissionCard from "../MissionCard/MissionCard";
import Title from "../Title/Title";
import { ContainerMissions } from "./MissionsStyle";

export default function Mission(): JSX.Element {
  return (
    <div>
      <Title headline='Missões' />
      <ContainerMissions>
        {missions.map((obj) => {
          return (
            <MissionCard
              key={obj.name}
              mission={obj}
            />
          );
        })}
      </ContainerMissions>
    </div>
  )
}