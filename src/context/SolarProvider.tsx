import { useMemo, useState, useEffect } from "react";

import missions from "../data/missions";
import SolarContext from './SolarContext';

interface Props {
  children: React.ReactNode;
}

export default function SolarProvider({ children }: Props){
  const [mission , setMisson] = useState({});

  const fetchData = () => {
    missions.map((obj) => {
      setMisson(obj);
    })
  } 

  useEffect(() => {
    fetchData()
  }, [])


  const solarvalue = useMemo( () => ({
    mission,
  }), [
    mission,
  ]);

  return (
    <div>
      <SolarContext.Provider value={ solarvalue }>
        {children}
      </SolarContext.Provider>
    </div>
  );
}