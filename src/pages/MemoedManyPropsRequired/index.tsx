import React, { useContext, useMemo, useState } from 'react';
import MemoedManyPropsRequiredComponent from '../../components/MemoedManyPropsRequiredComponent';
import MemoedComponent from '../../components/MemoedComponent';
import { VolumeContext } from '../../providers/Volume';

const memoedManyPropsRequiredPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleUpdateButton = () => {
    setCount(count + 1);
  };
  const { volume } = useContext(VolumeContext);

  const arr = useMemo(() => [...Array(2)].map((_, i) => i), [volume]);
  const obj = useMemo(() => ({ name: 'tarou' }), []);
  return (
    <>
      <div>page component: called {count} times<button type="button" onClick={handleUpdateButton}>update</button></div>
      <MemoedManyPropsRequiredComponent
        text1="test"
        text2="test"
        text3="test"
        text4="test"
        text5="test"
        text6="test"
        text7="test"
        array={arr}
        obj={obj}
      >
        <MemoedComponent text="text" />
        <MemoedComponent text="text" />
        <MemoedComponent text="text" />
        <MemoedComponent text="text" />
        <MemoedComponent text="text" />
      </MemoedManyPropsRequiredComponent>
    </>
  );
};

export default memoedManyPropsRequiredPage;
