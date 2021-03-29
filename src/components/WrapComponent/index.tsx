import React from 'react'

interface Props {
  [k: string]: number
}

const wrapComponent: React.FC<Props> = (props) => (
  <>
    {Object.keys(props).map((data) => (
      <div>{data}</div>
    ))}
  </>
)

export default wrapComponent
