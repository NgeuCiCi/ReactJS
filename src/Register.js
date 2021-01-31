import React from 'react';
import './App.css';
import tao from './Image/tao.jpg';
import { useHistory } from 'react-router-dom';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoGoogleplus } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";

function Register() {
    const history = useHistory();


    return (

        <div style={{ height: "100vh", display: "flex" }} >
            <div style={{ flex: 1.6 }}>
                <img style={{ height: "100%", width: "100%" }} src={tao} alt="" ></img>
            </div>
            <div style={{ display: "flex", flex: 1.5, justifyContent: "center" }}>
                <div style={{ position: 'relative', width: "450px" }} >
                    <div style={{ height: "130px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <FaRegistered size={100} color="#316df7" />
                    </div>
                    <div style={{ height: "40px" }} >
                        <b style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}> REGISTER</b>
                    </div>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <TextField size={'small'} style={{ width: "200px" }}
                                variant="outlined"
                                margin="normal"
                                label="Họ"
                                autoFocus
                            />
                            <TextField size={'small'} style={{ width: "200px" }}
                                variant="outlined"
                                margin="normal"
                                label="Tên"
                                autoFocus
                            />
                        </div>
                        <TextField size={'small'}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Tài khoản"
                        />
                        <TextField size={'small'}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                        />
                        <TextField size={'small'}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nhập lại Password"
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: "45px" }} >
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Nam"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Nữ"
                        />


                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "60px" }} >

                        <button style={{ height: "35px", width: "120px", backgroundColor: "#316df7", color: "white", borderWidth: 0, borderRadius: 2 }} >
                            REGISTER
                        </button>

                        <button onClick={() => { history.push('/login') }}
                            style={{ height: "35px", width: "120px", backgroundColor: "#316df7", color: "white", borderWidth: 0, borderRadius: 2 }} >
                            SIGN IN
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

export default Register;