import MercurioImg from '../../image/Mercurio.png';
import VenusImg from '../../image/Venus.png';
import TerraImg from '../../image/Terra.png';
import MarteImg from '../../image/Marte.png';
import JupiterImg from '../../image/Jupiter.png';
import SaturnoImg from '../../image/Saturno.png';
import Uranoimg from '../../image/Urano.png';
import Netunoimg from '../../image/Netuno.png';
import PlanetsIterface from '../../interfaces/PlanetsIterface';

const Planets: PlanetsIterface[] = [
  { name: 'Mercúrio', image: MercurioImg, width: 41, height: 31 },
  { name: 'Vênus', image: VenusImg, width: 102, height: 76 },
  { name: 'Terra', image: TerraImg, width: 106, height: 79 },
  { name: 'Marte', image: MarteImg, width: 66, height: 50 },
  { name: 'Júpiter', image: JupiterImg, width: 272, height: 204 },
  { name: 'Saturno', image: SaturnoImg, width: 283, height: 210 },
  { name: 'Urano', image: Uranoimg, width: 144, height: 109 },
  { name: 'Netuno', image: Netunoimg, width: 144, height: 107 },
];

export default Planets;
