import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  volume: number
  setVolume: React.Dispatch<React.SetStateAction<number>>
}

const Header: React.FC<Props> = ({ volume, setVolume }) => {
  const [value, setValue] = useState(volume)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value)) {
      setValue(Number(e.currentTarget.value))
    } else {
      alert('数字を入力してください')
    }
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setVolume?.(value)
  }

  return (
    <>
      <Link to="/">back to top</Link>
      <div>volume: {volume}</div>
      <form name="form" onSubmit={handleOnSubmit}>
        <label htmlFor="input">
          set volume
          <input
            id="input"
            type="text"
            value={value}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default Header
