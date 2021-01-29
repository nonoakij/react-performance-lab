import React from 'react'

interface props {
  text: string
}

const functionComponent: React.FC<props> = ({ text }) => (
  <div style={{ border: 'solid 1px black', padding: '8px' }}>{text}</div>
)

export default functionComponent
