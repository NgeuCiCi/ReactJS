import React from 'react';
import './App.css';
import tao from './Image/tao.jpg';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoGoogleplus } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgLogIn } from "react-icons/cg";

function Login() {
    const history = useHistory();


    return (

        <div style={{ height: "100vh", display: "flex", background: "linear-gradient(#e66465, #9198e5);" }} >
            <div style={{ flex: 1.6 }}>
                <img style={{ height: "100%", width: "100%" }} src={tao} alt="" ></img>
            </div>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                <div style={{ position: 'relative' }} >
                    <div style={{ height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CgLogIn size={100} color="#316df7" />
                    </div>
                    <div style={{ height: "40px" }} >
                        <b style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}> SIGN IN</b>
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px" }} >
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <a style={{ height: "42px", fontSize: 17, marginTop: 14 }} > Forget password?</a>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "60px" }} >
                        <button onClick={() => history.push('/')} style={{ height: "35px", width: "120px", backgroundColor: "#316df7", color: "white", borderWidth: 0, borderRadius: 2 }} >
                            SIGN IN
                        </button>
                        <button onClick={() => history.push('/rigister')} style={{ height: "35px", width: "120px", backgroundColor: "#316df7", color: "white", borderWidth: 0, borderRadius: 2 }} >
                            REGISTER
                    </button>
                    </div>
                    <div style={{ height: "60px", display: "flex", position: "relative" }} >
                        <div style={{ display: "flex", position: "absolute", left: 30, top: 16 }} > Or Login with </div>
                        <div style={{ width: "200px", display: "flex", justifyContent: "space-evenly", alignItems: "center", position: "absolute", right: 50, top: 13 }}>
                            <AiOutlineFacebook size={30} />
                            <AiOutlineInstagram size={31} />
                            <IoLogoGoogleplus size={31} />
                        </div>
                    </div>

                    <div style={{ width: "100%", position: "absolute", bottom: 10, display: "flex", justifyContent: "center" }}> © CoppyRight Version 0.0.1</div>

                </div>

            </div>

        </div>

    );
}

export default Login;