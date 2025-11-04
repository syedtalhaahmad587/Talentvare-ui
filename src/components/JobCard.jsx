import React from 'react'
import clock from '../assets/ClockIcon.png'
import loc from '../assets/locationIcon.png'
import bookmark from '../assets/VectorIcon1.png'
import teamslogo from '../assets/temslogo.png'

export default function JobCard({ promoted }) {
  return (
    <div className="job card">
      {promoted && <span className="badge">Promoted</span>}

      <div className="job__head">
        <div className="job__logo">
          <img src={teamslogo} width="16" height="16" alt="Teams logo" />
        </div>
        <div>
          <div className="job__title">UI/UX Designer</div>
          <div className="job__company">Teams</div>
        </div>
      </div>

      <div className="job__meta">
        <span>
          <img src={loc} width="9" height="12" alt="" />
          <span className="trt-r"> Seattle, USA (Remote) </span>
        </span>
        <span>
          <img src={clock} width="9" height="12" alt="" />
          <span className="trt-r"> 1 day ago | 22 applicants </span>
        </span>
      </div>

      <div className="job__actions job__apply">
        <button className="btn btn--primary apply-now">Apply Now</button>
        <button className="btn btn--ghost">
          <img src={bookmark} width="16" height="16" alt="save" />
        </button>
      </div>
    </div>
  )
}
