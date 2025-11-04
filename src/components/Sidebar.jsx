import React, { useState } from 'react'
import hero from '../assets/backgroundCoverPhoto.png'
import avatar from '../assets/ProfilePhoto.png'
import figmaLogo from '../assets/FigmaImage.png';
import arrow from '../assets/Vector.png';

export default function Sidebar() {
      const [open, setOpen] = useState(true)

  const interviews = [
    { role: 'UI UX Designer', company: 'Figma', date: '16th Feb | 13:45 | Remote', status: 'Accepted' },
    { role: 'UI UX Designer', company: 'Figma', date: '16th Feb | 13:45 | Remote', status: 'Accepted' },
    { role: 'UI UX Designer', company: 'Figma', date: '16th Feb | 13:45 | Remote', status: 'Accepted' },
  ]
  return (
    <aside className="sb">
      <div className="card sb__profile">
        <div className="sb__cover" style={{ backgroundImage:`url(${hero})` }}/>
        <div className="sb__profileBody">
          <img className="sb__avatar" src={avatar} alt="Albert Flores" />
          <div className="sb__name">Albert Flores</div>
          <div className="sb__title">Senior Product Designer | UI/UX Designer | Graphic Designer | Web...</div>
          <div className="sb__location">Clinton, Maryland</div>
        </div>
      </div>

      <div className="card sb__stats">
        <div className="sb__row"><span>Profile Visitors</span><b>140</b></div>
        <div className="sb__row"><span>Resume Viewers</span><b>20</b></div>
        <div className="sb__row"><span>My Jobs</span><b>88</b></div>
      </div>

       {/* Calendar */}
      <div className="card sb__calendar">
        <div className="sb__calendarHeader" onClick={() => setOpen(!open)}>
        <div className='cln' >
          <p className='child-cln' >My calendar</p>
          <p className='second-cln' >Upcoming Interviews</p>
          </div>
          <div className={`arrow ${open ? 'open' : ''}`}><img src={arrow} alt="arrow" /></div>
        </div>

        {open && (
          <div className="sb__calendarList">
            {interviews.map((item, i) => (
              <div key={i} className="sb__calendarItem">
                <div className="sb__calendarLogo">
                  <img src={figmaLogo} alt="Figma" />
                </div>
                <div className="sb__calendarText">
                  <div className="title">{item.role}</div>
                  <div className="sub">{item.company}</div>
                  <div className="meta">{item.date}</div>
                </div>
                <div className="sb__calendarActions">
                  <button className="accepted">{item.status}</button>
                  <button className="deny">Deny</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
