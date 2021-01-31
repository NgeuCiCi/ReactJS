import React, { useState } from 'react'
import './Hoidap.css';
import logo from './Image/logo_ma11.png';
import vn from './Image/vn.jpg';
import tao from './Image/tao.jpg';
import order from './Image/order.png';
import REVENUE from './Image/notes.png';
import AVE from './Image/pen.png';
import PROD from './Image/bag.png';
import avt1 from './Image/avt1.png';
import avt2 from './Image/avt2.png';
import avt3 from './Image/avt3.png';
import avt4 from './Image/avt4.png';
import avt5 from './Image/avt5.png';

import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiFullscreenLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { BiPackage } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowDown } from "react-icons/ti";

import Dropdown from 'react-bootstrap/Dropdown';
import { green } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const abc = () => {
    return <div>abc</div>
}
function createData(id, name, date, amount, status, edit, avt) {
    return { id, name, date, amount, status, edit, avt };
}

const rows = [
    createData('#14256', 'Tao', '7/1/2018', '$94', 'Delivered', 'Edit', avt1),
    createData('#14254', 'Neymar', '5/3/2012', '$9', 'Pending', 'Edit', avt2),
    createData('#14255', 'Ronaldo', '11/4/2024', '$10', 'Delivered', 'Edit', avt3),
    createData('#14257', 'Cavani', '25/7/2438', '$31', 'Cancel', 'Edit', avt4),
    createData('#14258', 'Pogba', '1/1/20128', '$1', 'Delivered', 'Edit', avt5),
];
function Hoidap() {
    const [page, setPage] = useState('Dashboard');
    const [drop1, setdrop1] = useState(true);
    const [UI1, setUI1] = useState(true);
    const [Chart1, setChart1] = useState(true);

    return (
        <div >
            {/* Header */}
            <div id="header_ma">
                <div className="header_ma_1">
                    <div style={{ backgroundColor: '#333547', height: "100%", width: 240, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={logo} alt="Logo" style={{ height: 50, width: 70 }} />
                        <p style={{ color: 'white', fontSize: 20 }}>Sang</p>
                    </div>

                    <div style={{ width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        < AiOutlineMenu size={28} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a >
                            <Dropdown >
                                <Dropdown.Toggle style={{ fontSize: 17, backgroundColor: '#e9ecef', borderColor: '#e9ecef', color: 'black' }}  >
                                    Create
                                    </Dropdown.Toggle>

                                <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>


                                    <Dropdown.Item href="#">1</Dropdown.Item>
                                    <Dropdown.Item href="#">2</Dropdown.Item>
                                    <Dropdown.Item href="#">3</Dropdown.Item>
                                    <hr style={{ margin: 0 }} />
                                    <Dropdown.Item href="#">4</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </a>
                    </div>
                </div>
                <div className="header_ma_2">
                    <div className="header_ma_2_1" >
                        <input type="text" placeholder="Search..." style={{ borderRadius: 30, paddingLeft: 14, height: 37, width: 210, backgroundColor: '#e0e0ea', borderColor: '#e0e0ea', borderStyle: 'none', textAlign: 'left', outlineStyle: 'none' }} />
                        <div style={{ display: 'flex', position: "absolute", right: 11, top: 23 }}>  <BsSearch color="black" size={20} />
                        </div>
                    </div>
                    <div className="header_ma_2_1" >
                        <img src={vn} style={{ height: 18, width: 27, marginLeft: 15 }} />
                        <a style={{ marginRight: 15, marginLeft: 8 }}>Viet Nam</a>
                    </div>
                    <div className="header_ma_2_1">
                        <a style={{ marginRight: 15, marginLeft: 15 }} >
                            <RiFullscreenLine color="#525f80" size={25} />
                        </a>
                    </div>
                    <div className="header_ma_2_1">
                        <a style={{ marginRight: 15, marginLeft: 15 }} >
                            <BiBell color="#525f80" size={25} />
                        </a>
                    </div>
                    <div className="header_ma_2_1">
                        <img src={tao} style={{ height: 40, width: 40, borderRadius: '50%', marginRight: 15, marginLeft: 15 }} />

                    </div>
                    <div className="header_ma_2_1">
                        <a style={{ marginRight: 15, marginLeft: 15 }} >
                            <AiOutlineSetting color="#525f80" size={25} />
                        </a>
                    </div>
                </div>
            </div>
            {/* body */}
            <div id="body_ma">
                <div className="body_ma_1" style={{ width: 240 }}>
                    <a style={{ fontSize: 12, paddingLeft: 25, paddingBottom: 10, paddingTop: 10 }}  >MAIN</a>

                    <li className="li_body_ma_1" onClick={() => {
                        setPage('Dashboard')
                    }} >
                        <div style={page === 'Dashboard' ? { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#f8f9fa' } : { height: 40, width: '100%', marginLeft: 25, display: 'flex', alignItems: 'center' }}  >
                            <AiOutlineHome size={20} className={page === 'Dashboard' ? 'hover_li_ma_1aa' : 'hover_li_ma_1a'} /> Dashboard
                        </div>
                    </li>
                    <li className="li_body_ma_1" onClick={() => {
                        setPage('Cal')
                    }} >
                        <div style={page === 'Cal' ? { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#f8f9fa' } : { height: 40, width: '100%', marginLeft: 25, display: 'flex', alignItems: 'center' }} >
                            <AiTwotoneCalendar size={20} className={page === 'Cal' ? 'hover_li_ma_1aa' : 'hover_li_ma_1a'} />Calendar
                        </div>
                    </li>
                    {drop1 === true ?
                        <li className="li_body_ma_1" onClick={() => { setdrop1(false); setPage('mail') }} >
                            <div style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <HiOutlineMail className="hover_li_ma_1a" size={20} /> Email

                                <HiChevronDown className="hover_li_ma_1b" size={20} />
                            </div>
                        </li>
                        :
                        <li className="li_body_ma_1_1"  >
                            <div onClick={() => { setdrop1(true) }} style={page === 'mail' ? { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#f8f9fa' } : { height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <HiOutlineMail color='rgb(180, 201, 222)' size={20} style={{ marginRight: 20 }} /> Email

                            <HiChevronUp size={20} style={{ color: 'rgb(180, 201, 222)', position: 'absolute', right: 5, top: 11 }} />
                            </div>
                            <div>
                                <li className="li_body_ma_1_1a"  >
                                    <div style={{ height: 30, paddingLeft: 65 }}>Inbox</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Email Read </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Email Compose </div>
                                </li>
                            </div>

                        </li>
                    }


                    <a style={{ fontSize: 12, paddingLeft: 25, paddingBottom: 10, paddingTop: 10 }}  >COMPONENTS</a>
                    {UI1 === true ?
                        <li className="li_body_ma_1" onClick={() => { setUI1(false) }} >

                            <div style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <BiPackage size={20} className="hover_li_ma_1a" />UI Elements
                            <HiChevronDown size={20} className="hover_li_ma_1b" />

                            </div>

                        </li>
                        :
                        <li className="li_body_ma_1_1" >

                            <div onClick={() => { setUI1(true) }} style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <BiPackage size={20} style={{ marginRight: 20 }} />UI Elements
                                <HiChevronUp size={20} style={{ color: 'rgb(180, 201, 222)', position: 'absolute', right: 5, top: 11 }} />

                            </div>
                            <div>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Alerts</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Buttons </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Cards </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Carousel</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Dropdowns</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Grid </div>
                                </li>
                            </div>

                        </li>
                    }
                    {Chart1 === true ?
                        <li className="li_body_ma_1" onClick={() => { setChart1(false) }} >

                            <div style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <AiFillPieChart size={20} className="hover_li_ma_1a" />Charts
                            <HiChevronDown size={20} className="hover_li_ma_1b" />

                            </div>

                        </li>
                        :
                        <li className="li_body_ma_1_1" >

                            <div onClick={() => { setChart1(true) }} style={{ height: 40, width: '100%', paddingLeft: 25, display: 'flex', alignItems: 'center', position: 'relative' }} >
                                <AiFillPieChart color='rgb(180, 201, 222)' size={20} style={{ marginRight: 20 }} />Charts
                                <HiChevronUp size={20} style={{ color: 'rgb(180, 201, 222)', position: 'absolute', right: 5, top: 11 }} />

                            </div>
                            <div>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Alerts</div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Buttons </div>
                                </li>
                                <li className="li_body_ma_1_1a">
                                    <div style={{ height: 30, paddingLeft: 65 }}>Cards </div>
                                </li>
                            </div>

                        </li>
                    }
                </div>
                {page === 'Dashboard' ?
                    <div className="body_ma_2">
                        <div className="body_ma_2_1" >
                            <div className="body_ma_2_1a">
                                <b style={{ fontSize: 18 }} > Dashboard</b>
                                <span style={{ fontSize: 14 }} > Welcome to Veltrix Dashboard</span>
                            </div>
                            <div className="body_ma_2_1b">
                                <button style={{ height: 35, width: 100, borderColor: '#626ed4', backgroundColor: '#626ed4', borderStyle: 'solid', borderRadius: 4, color: 'white' }}>
                                    <AiTwotoneSetting size={18} style={{ color: 'white', marginRight: 7, marginBottom: 3 }} />
                                    Settings
                                </button>
                            </div>
                        </div>
                        <div className="body_ma_2_2">
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#02a499' }} > + 12% </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={order} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >ORDERS</b>
                                        <span className="ma_2_2a1-2a_num" >1,685 <TiArrowUp size={38} style={{ color: '#02a499' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>

                                    </div>
                                </div>
                            </div>
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#ec4561' }} > - 28% </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={REVENUE} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >REVENUE</b>
                                        <span className="ma_2_2a1-2a_num" >52,368  <TiArrowDown size={38} style={{ color: 'red' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>

                                    </div>
                                </div>
                            </div>
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#38a4f8' }} >0% </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={AVE} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >AVERAGE PRICE</b>
                                        <span className="ma_2_2a1-2a_num" >15.8 <TiArrowUp size={38} style={{ color: '#02a499' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>

                                    </div>
                                </div>
                            </div>
                            <div className="body_ma_2_2a" >
                                <div className="body_ma_2_2a1" >
                                    <div className="ma_2_2a1-1" style={{ backgroundColor: '#f8b425' }} > + 84%  </div>
                                    <div className="ma_2_2a1-2" >
                                        <div className="ma_2_2a1-2a" >
                                            <img src={PROD} />
                                        </div>
                                        <b className="ma_2_2a1-2a_name" >PRODUCT SOLD</b>
                                        <span className="ma_2_2a1-2a_num" >2436 <TiArrowUp size={38} style={{ color: '#02a499' }} />  </span>
                                        <span className="ma_2_2a1-2a_since" >Since last month <TiArrowRight size={30} />  </span>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="table_chat" >
                            <div className="table_chat_a" >

                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left" colSpan={6}>Latest Trasaction</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    (#) Id
                                            </TableCell>
                                                <TableCell align="left">Name</TableCell>
                                                <TableCell align="left">Date</TableCell>
                                                <TableCell align="left">Amount</TableCell>
                                                <TableCell align="left">Status</TableCell>
                                                <TableCell align="left" > </TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell component="th" scope="row">
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell align="left"> <img src={row.avt} style={{ marginRight: 10 }} />{row.name}</TableCell>
                                                    <TableCell align="left">{row.date}</TableCell>
                                                    <TableCell align="left">{row.amount}</TableCell>
                                                    <TableCell align="left">
                                                        <span style={{ backgroundColor: '#02a499', borderRadius: 3, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2, color: 'white', fontSize: 11 }}>
                                                            {row.status}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div style={{ height: 30, width: 40, backgroundColor: '#626ed4', borderColor: '#626ed4', borderRadius: 3, color: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                                            {row.edit}
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <div className="table_chat_b"> s</div>
                        </div>
                        <div>

                        </div>
                    </div>

                    : page === 'Cal' ?

                        <div className="body_ma_2">Cal</div> :

                        <div className="body_ma_2">Nulll</div>}

            </div>
        </div >

    );
}



export default Hoidap;
