import React from 'react'
import { Link } from 'react-router-dom'

const TopPage: React.FC = () => (
  <>
    <div>
      <Link to="/functional">functional</Link>
    </div>
    <div>
      <Link to="/heavy">heavy</Link>
    </div>
    <div>
      <Link to="/manyPropsRequired">manyPropsRequired</Link>
    </div>
    <div>
      <Link to="/manyChildren">manyChildren</Link>
    </div>
    <div>
      <Link to="/memoed">memoed</Link>
    </div>
    <div>
      <Link to="/memoedHeavy">memoedHeavy</Link>
    </div>
    <div>
      <Link to="/memoedManyPropsRequired">memoedManyPropsRequired</Link>
    </div>
    <div>
      <Link to="/memoedManyChildren">memoedManyChildren</Link>
    </div>
  </>
)

export default TopPage
