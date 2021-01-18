import React, {
  createContext, useState,
} from 'react';

type VolumeContextType = {
  volume: number
  setVolume?: React.Dispatch<React.SetStateAction<number>>
}

export const VolumeContext = createContext<VolumeContextType>({ volume: 0, setVolume: () => { console.log('unset'); } });

export const VolumeProvider: React.FC = ({ children }) => {
  const [volume, setVolume] = useState(1);
  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};
