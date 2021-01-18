import React, { useContext, useMemo, useState } from 'react';
import HeavyComponent from '../../components/HeavyComponent';
import { VolumeContext } from '../../providers/Volume';

const heavyPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleUpdateButton = () => {
    setCount(count + 1);
  };

  const { volume } = useContext(VolumeContext);
  const arr = useMemo(() => [...Array(volume)].map((_, i) => i), [volume]);
  return (
    <div>
      <div>page component: called {count} times<button type="button" onClick={handleUpdateButton}>update</button></div>
      <HeavyComponent arr={arr} />
    </div>
  );
};

export default heavyPage;
