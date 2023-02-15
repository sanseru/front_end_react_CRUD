import React from 'react'
import { Link } from 'react-router-dom'

const MenuList = () => {
  return (
    <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><Link to={`/`}>Dashboard</Link></li>
    <li><Link to={`add`}>Add</Link></li>
  </ul>
</aside>
  )
}

export default MenuList