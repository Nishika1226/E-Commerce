import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="container mt-5 ">
      <div className="card newsletter">
        <div className="card-body">
          <h2 className="card-title">Subscribe to Our Newsletter</h2>
          <p className="card-text">
            Stay up-to-date with our latest news and updates. Subscribe now!
          </p>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email"/>
            </div>
            <button type="submit" className="btn btn-danger">Subscribe</button>
         
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
