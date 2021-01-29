import React, { Fragment } from 'react'

interface props {
  arr: number[]
}

const HeavyComponent: React.FC<props> = ({ arr }) => {
  let n = 0

  while (n < arr.length) {
    n += 1
  }

  return (
    <div>
      <div style={{ wordBreak: 'break-word' }}>
        {arr.map((num) => (
          <Fragment key={num}>{num},</Fragment>
        ))}
      </div>
    </div>
  )
}

export default HeavyComponent
