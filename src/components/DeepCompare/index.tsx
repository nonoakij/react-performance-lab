import React from 'react'

type Props = {
  myObj?: { [k: string]: any }
}

const DeepCompare: React.FC<Props> = ({ myObj }) => {
  return (
    <div style={{ border: '1px solid black', padding: '16px' }}>
      {myObj && JSON.stringify(myObj)}
    </div>
  )
}

export default DeepCompare
