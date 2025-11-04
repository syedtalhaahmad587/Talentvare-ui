import React from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/ProfilePhoto.png'
import search from '../assets/SearchIcon.png'

export default function Navbar() {
  return (
    <header className="nv">
      <div className="container nv__inner">
        <a className="nv__brand" href="/" onClick={e => e.preventDefault()}>
          <img src={logo} alt="TalentVare" />
          {/* <span>TalentVare</span> */}
        </a>

        <nav className="nv__links">
          <a className="ft-jb" href="/" onClick={e=>e.preventDefault()}>Find Jobs</a>
          <a href="/" onClick={e=>e.preventDefault()}>Top Companies</a>
          <a href="/" onClick={e=>e.preventDefault()}>Job Tracker</a>
          <a href="/" onClick={e=>e.preventDefault()}>My Calendar</a>
          <a href="/" onClick={e=>e.preventDefault()}>Documents</a>
          <a href="/" onClick={e=>e.preventDefault()}>Messages</a>
          <a href="/" onClick={e=>e.preventDefault()}>Notifications</a>
        </nav>

        <div className="nv__right">
          <div className="nv__search">
            <img src={search} alt="" width="18" height="18" />
            <input placeholder="Search" />
          </div>
          <button className="btn btn--primary">Resume Builder</button>
          <img className="nv__avatar" src={avatar} alt="user" />
        </div>
      </div>
    </header>
  )
}
