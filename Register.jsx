import React from 'react'

function Register() {
  return (
    <div>
        <div className="main" style={{height:'80vh'}}>
            <h1>Signup</h1>
            <form action="">
                <label>
                    <input type="text" name="name" placeholder='First name' style={{borderRadius:'5px', border:'none', width:'300px', height:'30px'}}/>
                </label><br></br>
                <label>
                    <input type="text" name="name" placeholder='Last name' style={{borderRadius:'5px', border:'none', width:'300px', height:'30px'}}/>
                </label><br></br>
                <label>
                    <input type="number" name="contact" placeholder='Enter your Contact' style={{borderRadius:'5px', border:'none', width:'300px', height:'30px'}}/>
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

export default Register;