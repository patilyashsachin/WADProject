import React from 'react'

function Login() {
  return (
    <div>
        <div className="main" style={{height:'70vh'}}>
            <h1>Login</h1>
            <form action="">
                <label>
                    <input type="email" name="email" placeholder='Enter your email' style={{borderRadius:'5px', border:'none', width:'300px', height:'30px'}}/>
                </label><br></br>
                <label>
                    <input type="password" name="name" placeholder='Enter your Password' style={{borderRadius:'5px', border:'none', width:'300px', height:'30px'}}/>
                </label><br></br>
                <label>
                    <button type='submit' style={{height:'35px', width:'90px'}}>Submit</button>
                </label>
            </form>
        </div>
    </div>
  )
}

export default Login;