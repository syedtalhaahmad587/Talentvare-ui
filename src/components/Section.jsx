import React from 'react'
import JobCard from './JobCard'

export default function Section({ title, linkText, promoted = false }) {
  // Featured → 5 jobs only
  // Recommended & Latest → 10 jobs
  const totalJobs = promoted ? 5 : 10

  return (
    <section className="sec">
      <div className="sec__head">
        <h3>{title}</h3>
        <a href="/" onClick={(e) => e.preventDefault()}>
          {linkText}
        </a>
      </div>

      <div className="sec__grid">
        {Array.from({ length: totalJobs }).map((_, i) => (
          <JobCard key={i} promoted={promoted && i < 5} />
        ))}
      </div>
    </section>
  )
}
