/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Styles from "./navbar.module.css"
const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li><a href="">Dashboard</a></li>
        <li><a href="">Classroom</a></li>
        <li><a href="">Assessments</a></li>
        <li><a href="">Store</a></li>
        <li><a href="">Calender</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </div>
  )
}

export default Menu