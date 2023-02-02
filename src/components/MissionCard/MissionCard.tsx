import bandeira from '../../image/bandeira.png';
import data from '../../image/data.png';
import local from '../../image/local.png';
import { ContainerMission, DivMissionAside, DivMissionAside1 } from './MissionCardStyle';

export default function MissionCard({ mission }: any): JSX.Element {

  const { name, year, country, destination } = mission;

  return (
    <ContainerMission>
      <DivMissionAside1>
        <div data-testid="mission-name">
          {name}
        </div>
      </DivMissionAside1>
      <hr />
      <DivMissionAside>
        <div data-testid="mission-year">
          <img src={data} alt="data" />
          {year}
        </div>
        <div data-testid="mission-country">
          <img src={local} alt="local" />
          {` ${country}`}
        </div>
        <div data-testid="mission-destination">
          <img src={ bandeira } alt="bandeira" />
          {` ${destination}`}
        </div>
      </DivMissionAside>
    </ContainerMission>
  )
}
