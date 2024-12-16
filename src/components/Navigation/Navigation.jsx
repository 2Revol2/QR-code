import React from 'react'
import { NavLink } from 'react-router-dom'
import style from  "./navigation.module.css"
export const Navigation = () => {
  return (
    <header className={style.header}>
        <nav className={style.navigation}>
            <ul className={style.list}>
                <NavLink className={style.link} to={'/generate'}>Generate QR</NavLink>
                <NavLink className={style.link} to={'/scanner'}>Scann QR</NavLink>
                <NavLink className={style.link} to={'/generate/history'}>Generate History</NavLink>
                <NavLink className={style.link} to={'/scann/history'}>Scann History</NavLink>
            </ul>
        </nav>
    </header>
  )
}
