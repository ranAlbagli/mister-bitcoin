
import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService'
import BitcoinService from '../../services/BitcoinService'
import './HomePage.style.scss'


const HomePage = () => {
  const [user, setUser] = useState({
    name: '',
    coins: 0
  })
  const [BCvalue, setBCvalue] = useState(null)

  useEffect(() => {
    (async () => {
      const user = await UserService.getUsers()
      setUser(user)
      const BCvalue = await BitcoinService.getRate(user.coins)
      setBCvalue(BCvalue)
    })();
  }, [])

  return (
    <div className="home-container">
      <div className="home">
        <h1>Hello {user.name}!</h1>
        <p>You Have {user.coins} coins</p>
        <p>Valued for {BCvalue} Bitcoin rate</p>
        <img src={`https://robohash.org/${user.name}.png`} alt=""></img>
      </div>
    </div>
  )
}

export default HomePage;

