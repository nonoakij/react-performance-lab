import React from 'react';

interface Props {
  elements: React.ReactNode
}

const wrapComponent: React.FC<Props> = ({ elements }) => (
  <div style={{ border: 'solid 1px black', padding: '8px' }}>
    {elements}
  </div>
);

export default wrapComponent;
