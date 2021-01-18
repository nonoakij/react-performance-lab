import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { VolumeContext } from '../../providers/Volume';

const Header: React.FC = () => {
  const { volume, setVolume } = useContext(VolumeContext);
  const [value, setValue] = useState(volume);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVolume?.(value);
  };

  return (
    <>
      <Link to="/">back to top</Link>
      <div>volume: {volume}</div>
      <form name="form" onSubmit={handleOnSubmit}>
        <label htmlFor="input">
          set volume
          <input id="input" type="text" value={value} onChange={handleInputChange} />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Header;
