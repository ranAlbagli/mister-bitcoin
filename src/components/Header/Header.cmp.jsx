import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './Header.style.scss'


const Header = () => (
    <div className='dynamic-header'>
        <div className='logo'>
            mister
            <Logo></Logo>
            bitcoin
        </div>
        <div className='appsus-nav'>
            <ul className="nav-bar clean-list  x flex">
                <li> <Link className='option' to='/'>HOME</Link>  </li>
                <li> <Link className='option' to='/ContactPage'>CONTACTS</Link> </li>
                <li>  <Link className='option' to='/StatisticPage'>STATISTIC</Link> </li>
            </ul>
        </div>
    </div>
)

export default Header


