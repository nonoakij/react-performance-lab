import React from 'react';

interface props {
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  text7: string
  array: number[]
  obj: {name: string}
  children: React.ReactNode
}

const manyPropsRequiredComponent: React.FC<props> = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  array,
  obj,
  children,
}) => (
  <div style={{ border: 'solid 1px black', padding: '8px' }}>
    {text1},
    {text2},
    {text3},
    {text4},
    {text5},
    {text6},
    {text7},
    <div style={{ wordBreak: 'break-word' }}>
      {array.map((item) => (item))}
    </div>
    {obj.name}
    {children}
  </div>
);

export default manyPropsRequiredComponent;
