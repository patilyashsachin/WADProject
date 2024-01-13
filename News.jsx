import React from 'react'
import Web from './Web';
import Navbar from './Navbar'

function News() {
  return (
    <div>
        <Navbar/>
        {/* <h1 style={{textAlign:'center'}}>News</h1> */}
        <Web/>
    </div>
  )
}

export default News;