import React from 'react'

function Contact() {
  return (
    <div className='cont'>
        <h1>Get in Touch</h1>
        <div className="info">
          <div className="add">
            <i class="fa-solid fa-location-dot fa-2xl"></i>
            <h2>Address</h2>
            <h3>Welfield Group Contracting</h3>
            <h4>146, Yuma Street<br></br>Denver Co 80223</h4>
          </div>
          <div className="phone">
            <i class="fa-solid fa-phone fa-2xl"></i>
            <h2>Phone</h2>
            <h3>Welfield Group Contracting</h3>
            <h4>303.428.2001 phone<br></br>303.202.0466 facsimile</h4>
            <br />
            <h3>Welfield 24/7 Service<br></br>Department</h3>
            <h4>303.428.2011</h4>
            <br />
            <h3>Wyoming Office</h3>
            <h4>307.757.7967</h4>
          </div>
          <div className="email">
            <i class="fa-solid fa-envelope fa-2xl"></i>
            <h2>Email</h2>
            <h3>Request for Proposal</h3>
            <h4>info@weifieldgeoup.com</h4>
            <br />
            <h3>Electrical Service Calls</h3>
            <h4>service@weifieldgeoupcontracting.com</h4>
            <br />
            <h3>Employment Opportunities</h3>
            <h4>careers@weifieldgeoupcontracting.com</h4>
          </div>
        </div>
    </div>
  )
}

export default Contact;