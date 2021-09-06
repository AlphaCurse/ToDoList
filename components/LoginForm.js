import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [details, setDetails] =useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Rapptr Labs</h2>
                {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                  <label htmlFor="email">Email</label> 
                    <div class="inputContainer">
                    </div>
                  <input placeholder="user@rapptrlabs.com" type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label> 
                  <input placeholder="Must be at least 4 characters" type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm