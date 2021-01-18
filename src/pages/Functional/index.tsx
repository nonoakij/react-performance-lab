import React, { useContext, useState } from 'react';
import FunctionalComponent from '../../components/FunctionalComponent';
import { VolumeContext } from '../../providers/Volume';

const functionalPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleUpdateButton = () => {
    setCount(count + 1);
  };

  const { volume } = useContext(VolumeContext);
  return (
    <div>
      <div>page component: called {count} times<button type="button" onClick={handleUpdateButton}>update</button></div>
      {[...Array(volume)].map((_, i) => <FunctionalComponent key={i} text="text" />)}
    </div>
  );
};

export default functionalPage;
