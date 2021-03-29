import React from 'react'

interface Props {
  [k: string]: number
}

const wrapComponent: React.FC<Props> = (props) => (
  <div>{Object.keys(props)}</div>
)

export default wrapComponent
