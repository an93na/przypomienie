import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../style/link.module.css'
export const Header = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Link to="/" className={classes.link}>STRONA GŁÓWNA</Link>
        <Link to="strona1" className={classes.link}>STRONA1</Link>
        <Link to="strona2" className={classes.link}>STRONA2</Link>
        <Link to="strona3" className={classes.link}>STRONA3</Link>
    </div>
  )
}
