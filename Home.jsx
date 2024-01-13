import React from 'react'
import './App.css';
import Cards from './Cards';  
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

function Home() {
    
  return (
    <>
        
        <Navbar/>
        <div className="home">
            <div className="home1" style={{marginTop:'160px'}}>
                <h1>Welcome to <b style={{color:'rgb(126,34,206)'}}>Website Services</b></h1>
                <h1 className='anime'>
                    <span>Find Your</span>
                    <div class="message">
                        <div class="word1">Goal</div>
                        <div class="word2">Intrest</div>
                        <div class="word3">Website</div>
                    </div>
                </h1>
                <p style={{fontSize:'20px'}}><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ducimus quas recusandae nam quis maxime rerum voluptatem, sed beatae explicabo aliquid dignissimos optio libero autem dolores architecto ipsum nemo soluta exercitationem corrupti modi sint iusto veritatis. Illum eius nihil nulla.</i></p>
            </div>
            <div className="home2" style={{marginTop:'160px'}}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" alt="Image"/>
            </div>
        </div>

        <div className="card">
            <h1>Top-Trending</h1>
            <div className='top-trending'>
                <div>
                    <Cards/>
                </div>
                <div>
                    <Cards/>
                </div>
                <div>
                    <Cards/>
                </div>
            </div>
        </div>
        <div className="testimonials">
            <h1>Testimonials</h1>
                <div className="testimonials1">
                    <div className="test1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non placeat necessitatibus molestiae saepe tempore a ad et excepturi consequatur aliquid iusto nostrum unde, reprehenderit laudantium nemo culpa voluptatibus expedita. Architecto numquam ratione maiores earum, sit itaque perspiciatis, nemo eligendi cupiditate non reiciendis consectetur odio esse molestiae ut voluptas! Tempora.</p>
                        <h3>Yash Patil</h3>
                    </div>
                    <div className="test2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At assumenda fugiat rem ipsa eum reiciendis esse, adipisci sed ab, officia pariatur molestiae qui nesciunt, perferendis itaque. Hic ipsa odio quibusdam iure neque temporibus praesentium similique commodi eos. Numquam non temporibus quas aliquam! Expedita maxime obcaecati saepe, dolor laboriosam voluptatem ullam?</p>
                        <h3>Jay Patil</h3>
                    </div>
                 </div>
        </div>
        <hr />
        <div className='footer'>
            <h2>Website Services</h2>
            <h3>Copyright©2024 patilyash.com</h3>
            <div className="footicon">
                <Link to="https://facebook.com" className='link'><i class="fa-brands fa-facebook fa-lg"></i></Link>
                <Link to="https://twitter.com" className='link'><i class="fa-brands fa-twitter fa-lg"></i></Link>
                <Link to="https://www.instagram.com/" className='link'><i class="fa-brands fa-instagram fa-lg"></i></Link>
                <Link to="https://www.github.com" className='link'><i class="fa-brands fa-github fa-lg"></i></Link>
            </div>
        </div>
    </>
  );
}

export default Home;