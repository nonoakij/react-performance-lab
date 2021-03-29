import React from 'react'

interface props {
  text: string
}

const functionComponent: React.FC<props> = ({ text }) => {
  return <>{text}</>
}

export default functionComponent
