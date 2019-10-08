import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header.cmp'
import HomePage from './pages/HomePage/HomePage.cmp'
import ContactPage from './pages/ContactPage/ContactPage.cmp'
import StatisticPage from './pages/StatisticPage/StatisticPage.cmp'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage.cmp'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage.cmp'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/ContactPage' component={ContactPage} />
        <Route path='/StatisticPage' component={StatisticPage} />
        <Route path="/contact/:id" component={ContactDetailsPage}/>
        <Route path="/edit/:id?" component={ContactEditPage}/>
      </Router>
    </div >
  )
}

export default App;
