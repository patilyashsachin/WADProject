import React from 'react'
import Web from './Web';
import Navbar from './Navbar'

function Blog() {
  return (
    <div>
        <Navbar/>
        {/* <h1 className='blog' style={{textAlign:'center'}}>Blog</h1> */}
        <Web/>
    </div>
  )
}

export default Blog;