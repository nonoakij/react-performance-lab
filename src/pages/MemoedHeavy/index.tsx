import React, { useContext, useMemo, useState } from 'react';
import MemoedHeavyComponent from '../../components/MemoedHeavyComponent';
import { VolumeContext } from '../../providers/Volume';

const memoedHeavyPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleUpdateButton = () => {
    setCount(count + 1);
  };

  const { volume } = useContext(VolumeContext);
  const arr = useMemo(() => [...Array(volume)].map((_, i) => i), [volume]);
  return (
    <div>
      <div>page component: called {count} times<button type="button" onClick={handleUpdateButton}>update</button></div>
      <MemoedHeavyComponent arr={arr} />
    </div>
  );
};

export default memoedHeavyPage;
