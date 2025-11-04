import React from 'react'
import Section from '../components/Section';
import search from '../assets/buttomWhiteSearchSecond.png'


export default function Home(){
  return (
    <main className="home">
      <div>
        <div className="hero__title">
          <h2>Find your Dream Job, <span className="accent">Albert!</span></h2>
        <p className="muted ex-pl">Explore the latest job openings and apply for the best opportunities available today!</p>
        </div>

        <div className="searchbar">
          <div className="searchbar__input">
            <input placeholder="Job Title, Company, or Keywords" />
          </div>
          <div className="searchbar__divider" />
          <div className="searchbar__select">
            <select defaultValue="">
              <option value="" disabled>Select Location</option>
              <option>Seattle, USA</option>
              <option>Remote</option>
            </select>
          </div>
          <div className="searchbar__divider" />
          <div className="searchbar__select">
            <select defaultValue="">
              <option value="" disabled>Job Type</option>
              <option>Full time</option>
              <option>Contract</option>
            </select>
          </div>
          <button className="btn btn--primary searchbar__btn ">
            <span  className='margin_auto' style={{fontWeight:700}}> <div className='btn--sea'> <div><img src={search} alt="" width="15" height="15" /></div> <div>Search </div></div></span>
            
          </button>
        </div>

        <div className="chips">
          <span className="muted">Similar:</span>
          <span className="chip">Frontend</span>
          <span className="chip">Backend</span>
          <span className="chip">Graphic Designer</span>
        </div>
      </div>

      <Section title="Featured Jobs" linkText="See Featured Jobs" promoted />
      <Section title="Recommended Jobs" linkText="See Recommended Jobs" />
      <Section title="Latest Jobs" linkText="See Latest Jobs" />
    </main>
  )
}
