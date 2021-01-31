import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import './Home.css';
import logo from './Image/logo.jpg';
import ip from './Image/ip.jpg';
import oppo from './Image/oppo.png';
import vivo from './Image/vivo.jpg';
import samsung from './Image/samsung.jpg';
import xiaomi from './Image/xiaomi.jpg';
import hinhdtjs2 from './Image/hinhdtjs2.png';
import hinhdtjs3 from './Image/hinhdtjs3.png';
import redme from './Image/redme.png'
import one from './Image/one.jpg';
import { ImCart } from "react-icons/im";
import { AiOutlineDesktop } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { AiOutlineTablet } from "react-icons/ai";
import { CgAppleWatch } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { FiHeadphones } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaPiggyBank } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { RiRepeatOneFill } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'

function DienTHoai() {
    const history = useHistory();
    // const CheckboxExampleCheckbox = () => (
    //     <Checkbox />
    // )
    return (

        <div style={{ background: "#c9c8c5", height: "100%", width: "100%", position: "relative" }} >
            {/*   div  hình */}
            <div style={{ height: 45, width: 90, position: "fixed", right: 5, bottom: 100 }}>
                <Button style={{ height: 45, width: 90, fontSize: 12, fontStyle: "solid", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#faac46", color: "black" }} variant="outline-warning">
                    <MdChatBubbleOutline size={50} fontSize="solid" color="black" />
                Hỗ trợ online
            </Button>{' '}
            </div>
            <div style={{ paddingRight: "5%", paddingLeft: "5%", height: "40px", backgroundColor: "black", display: "flex" }}>
                <div>
                    <img onClick={() => history.push('/')} style={{ height: "100%", width: 150 }} src={logo} alt="Logo" />

                </div>
                <div style={{ paddingTop: 3, paddingBottom: 3, position: 'relative', color: "white", flex: 1.5, display: "flex", }}>
                    <input placeholder="Bạn cần tìm gì?  " style={{ display: "flex", flex: 1, borderRadius: 4, borderWidth: 1, borderStyle: "solid" }} >

                    </input>
                    <div style={{ display: 'flex', position: "absolute", right: 10, top: 10 }}>  <GiMagnifyingGlass color="black" size={20} />
                    </div>
                </div>
                <div style={{ color: "white", flex: 0.9, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button style={{ fontSize: 15, color: "white", height: "80%", width: "110px", borderRadius: 5, borderColor: "white", backgroundColor: "black", borderStyle: "solid", borderWidth: 1 }}>
                        < ImCart />  Giỏ Hàng
                    </button>
                </div>
                <div style={{ color: "white", flex: 1.2, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Lịch Sử Mua Hàng
                </div>
                <div style={{ fontSize: 14, color: "white", flex: 1.5, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Viettel Tặng 20% giá trị thẻ nạp-10/10
                </div>
                <div className="hoveritemmenu"
                    style={{ color: "white", flex: 1.1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span> 24H Công Nghệ</span>
                </div>
                <div className="hoveritemmenu"
                    style={{ color: "white", flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span>  Hỏi Đáp</span>
                </div>
                <div onClick={() => history.push('/login')} className="hoveritemmenu" style={{ color: "white", flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span>  Login </span>
                </div>
            </div>
            <div style={{ paddingRight: "5%", paddingLeft: "5%", height: "40px", backgroundColor: "yellow", display: "flex" }}>
                <div onClick={() => { history.push('/DienThoai') }} className="hovermenu" style={{ flex: 1, width: "auto", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> < AiOutlineLaptop /> Điện thoại</div>
                <div onClick={() => { history.push('/details') }} className="hovermenu" style={{ flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> <AiOutlineDesktop /> Laptop</div>
                <div className="hovermenu" style={{ flex: 0.7, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>< AiOutlineTablet />Tablet</div>
                <div onClick={() => { history.push('/PhuKien') }} className="hovermenu" style={{ flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>< FiHeadphones />Phụ kiện</div>
                <div className="hovermenu" style={{ flex: 1.5, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} ><FiWatch />Đồng hồ thời trang</div>
                <div className="hovermenu" style={{ flex: 1.5, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >< CgAppleWatch />Đồng hồ thông minh </div>
                <div className="hovermenu" style={{ flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >< RiComputerLine />PC, máy in</div>
                <div className="hovermenu" style={{ flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >Máy cũ giá rẻ</div>
                <div className="hovermenu" style={{ flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> Sim, thẻ cào</div>
                <div className="hovermenu" style={{ flex: 1.2, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> Trả góp điện nước</div>
            </div>
            <div style={{ marginLeft: "5%", marginRight: "5%", backgroundColor: "white" }} >
                <div style={{ height: "180px", display: "flex", marginTop: 10 }}>
                    <div style={{ flex: 2, paddingRight: 10 }}>
                        <Carousel>
                            <Carousel.Item>
                                <img style={{ height: 170 }}
                                    className="d-block w-100"
                                    src="https://3.bp.blogspot.com/-of-byHWPPOo/WnUoJM2djfI/AAAAAAAAAEk/VV2HSjCJe0gmyI04JchnweZsCyJE3HREgCLcBGAs/s1600/sdsd.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>1</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: 170 }}
                                    className="d-block w-100"
                                    src="https://i.pinimg.com/originals/14/c2/a2/14c2a286821185548f5dc3b5a5a34772.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>2</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: 170 }}
                                    className="d-block w-100"
                                    src="https://cloud.addictivetips.com/wp-content/uploads/2018/10/rad-owl.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>3</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: 10, height: 80 }}>
                            <img style={{ width: "100%", height: "100%" }} src={hinhdtjs2} />

                        </div>
                        <div style={{ height: 80 }}>
                            <img style={{ width: "100%", height: "100%" }} src={hinhdtjs3} />

                        </div>
                    </div>
                </div>

                <div style={{ height: "120px" }}>
                    <div style={{ display: "flex", height: "42px", alignItems: "center", paddingTop: 10, paddingBottom: 15 }}>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center" }}>
                            <img style={{ height: 30, width: "100%" }} src={ip} alt="" />
                        </div>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center" }}>
                            <img style={{ height: 30, width: "100%" }} src={samsung} alt="" />
                        </div>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center" }}>
                            <img style={{ height: 30, width: "100%" }} src={oppo} alt="" />
                        </div>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center" }}>
                            <img style={{ height: 30, width: "100%" }} src={xiaomi} alt="" />
                        </div>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center" }}>
                            <img style={{ height: 30, width: "100%" }} src={vivo} alt="" />
                        </div>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center" }}>
                            <img style={{ height: 30, width: "100%" }} src={redme} alt="" />
                        </div>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center" }}>
                            <img style={{ height: 30, width: "100%" }} src={one} alt="" />
                        </div>
                        <div style={{ display: "flex", flex: 1, height: "42px", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", alignItems: "center", justifyContent: "center" }}>
                            Xem thêm
                    </div>

                    </div>

                    <div style={{ display: "flex", position: "relative", paddingTop: 10 }}>

                        <div style={{ width: "1000px", display: "flex" }}>
                            <a style={{ flex: 1.05, fontSize: 14.5, display: "flex", alignItems: "center" }}>
                                Chọn mức giá:
                        </a>
                            <a style={{ flex: 0.8, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                Dưới 2 triệu
                        </a>
                            <a style={{ flex: 0.9, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                Từ 2 - 4 triệu
                        </a>
                            <a style={{ flex: 0.9, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                Từ 5 - 7 triệu
                         </a>
                            <a style={{ flex: 1, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                Từ 7 - 13 triệu
                        </a>
                            <a style={{ flex: 0.9, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                Trên 13 triệu
                        </a>
                            <a style={{ flex: 0.7, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14.5 }} >
                                {/* Bộ lọc < TiArrowSortedDown size={20} /> */}
                                <Dropdown >
                                    <Dropdown.Toggle style={{ color: "#4599ed", backgroundColor: "white", borderColor: "white", fontSize: 14.5 }}  >
                                        Bộ lộc
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ backgroundColor: '#73a47', width: 500 }}>
                                        <div >

                                            <div style={{ position: "fixed", top: -2, right: 5 }}>
                                                <AiOutlineCloseCircle size="20" color="#c9c8c5" />
                                            </div>
                                            <div style={{ display: "flex", width: 650 }}>
                                                <div style={{ flex: 1, justifyContent: "space-around" }}>
                                                    <Dropdown.Item href="#" style={{ fontWeight: "bold" }}> Loại điện thoại</Dropdown.Item>
                                                    <div style={{ paddingLeft: 10 }}  ><input type="checkbox" /> Android </div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> iPhone</div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Điện thoại phổ thông</div>

                                                </div>
                                                <div style={{ flex: 1.2 }}>
                                                    <Dropdown.Item href="#" style={{ fontWeight: "bold" }} >Dung lượng pin</Dropdown.Item>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Từ 3000 đến 5000 mAh</div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Pin khủng trên 5000 mAh</div>
                                                </div>
                                                <div style={{ flex: 1.1 }}>
                                                    <Dropdown.Item href="#" style={{ fontWeight: "bold" }} >Dung lượng RAM</Dropdown.Item>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Dưới 4GB </div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" />Từ 4 - 6 GB</div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> 8 GB trở lên</div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div style={{ display: "flex", width: 650 }}>
                                                <div style={{ flex: 1, justifyContent: "space-around" }}>
                                                    <Dropdown.Item href="#" style={{ fontWeight: "bold" }}> Loại điện thoại</Dropdown.Item>
                                                    <div style={{ paddingLeft: 10 }}  ><input type="checkbox" /> Android </div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> iPhone</div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Điện thoại phổ thông</div>

                                                </div>
                                                <div style={{ flex: 1.2 }}>
                                                    <Dropdown.Item href="#" style={{ fontWeight: "bold" }} >Dung lượng pin</Dropdown.Item>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Từ 3000 đến 5000 mAh</div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Pin khủng trên 5000 mAh</div>
                                                </div>
                                                <div style={{ flex: 1.1 }}>
                                                    <Dropdown.Item href="#" style={{ fontWeight: "bold" }} >Dung lượng RAM</Dropdown.Item>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> Dưới 4GB </div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" />Từ 4 - 6 GB</div>
                                                    <div style={{ paddingLeft: 10 }}><input type="checkbox" /> 8 GB trở lên</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </a>
                            <a style={{ flex: 0.7, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                <Checkbox size={'small'} color="primary" /> Mới
                        </a>
                            <a style={{ flex: 1.1, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                <Checkbox size={'small'} color="primary" /> Trả góp 0%
                        </a>
                            <a style={{ flex: 1.1, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                                <Checkbox size={'small'} color="primary" /> Độc quyền
                        </a>
                        </div>
                        <a style={{ position: "absolute", right: 0, color: "#4599ed", height: "40px", display: "flex", alignItems: "center", fontSize: 14.5 }} >
                            <a >
                                <Dropdown >
                                    <Dropdown.Toggle style={{ color: "#4599ed", backgroundColor: "white", borderColor: "white", fontSize: 14.5 }}  >
                                        Sắp xếp
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>

                                        {/* <div style={{ position: "fixed", top: -2, right: 5 }}>
                                            <AiOutlineCloseCircle size="20" color="#c9c8c5" />
                                        </div> */}
                                        <Dropdown.Item href="#" >Nổi bật nhất</Dropdown.Item>
                                        <Dropdown.Item href="#">Bán chạy nhất</Dropdown.Item>
                                        <Dropdown.Item href="#">Giá từ thấp đến cao</Dropdown.Item>
                                        <Dropdown.Item href="#">Giá từ cao đến thấp</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </a>

                        </a>

                    </div>
                    <hr />

                </div>

            </div>

            <div style={{ height: 700, width: 500, display: "flex" }}>
                <div className="ss1" style={{ flex: 1, color: "steelblue", borderColor: "black", borderWidth: 1, borderStyle: "solid" }}>

                    <b> vcl</b>
                </div>
                <div className="ss1" style={{ flex: 1 }}>
                </div>
                <div className="ss1" style={{ flex: 1 }}>

                </div>
                <div className="ss1" style={{ flex: 1 }}>

                </div>
                <div className="ss1" style={{ flex: 1 }}>

                </div>
            </div>
            <div style={{ width: "100%", height: 60, backgroundColor: "#f1faf3", borderTopStyle: "solid", borderBottomStyle: "solid", borderTopWidth: "thin", borderBottomWidth: "thin", borderTopColor: "#737a75", borderColor: "#737a75" }}>
                <div style={{ marginRight: "5%", marginLeft: "5%", display: "flex", height: "100%" }} >
                    <li className="noneli" style={{ flex: 0.8, height: "100%", display: "flex", alignItems: "center" }}>
                        <FaCarSide style={{ height: 40, width: 40, color: "#1fd175", paddingRight: 15 }} />  Giao hàng nhanh chóng
                    </li>
                    <li className="noneli" style={{ flex: 1, height: "100%", display: "flex", alignItems: "center" }}>
                        <FaPiggyBank style={{ height: 40, width: 50, color: "#1fd175", paddingRight: 10, paddingLeft: 10 }} />  Thanh toán: tiền mặt, visa / master, trả góp
                    </li>
                    <li className="noneli" style={{ flex: 1, height: "100%", display: "flex", alignItems: "center" }}>
                        <FcSmartphoneTablet style={{ height: 40, width: 40, color: "#1fd175", paddingRight: 10, paddingLeft: 10 }} /> Trải nghiệm sản phẩm tại nhà
                    </li>
                    <li className="noneli" style={{ flex: 1, height: "100%", display: "flex", alignItems: "center" }}>
                        <RiRepeatOneFill style={{ height: 40, width: 40, color: "#1fd175", paddingRight: 10, paddingLeft: 10 }} /> Lỗi đổi tại nhà nhanh chóng
                    </li>
                    <li className="noneli" style={{ flex: 1.1, height: "100%", display: "flex", alignItems: "center" }}>
                        <AiOutlineComment style={{ height: 40, width: 50, color: "#1fd175", paddingRight: 10, paddingLeft: 10 }} />  <span>Hỗ trợ suốt thời gian sử dụng. Hotline: <span style={{ color: "#288ad6" }} >1800.1763</span></span>
                    </li>
                </div>
            </div>

            <div style={{ width: "100%", backgroundColor: "white" }}>
                <div style={{ height: "200px", marginRight: "5%", marginLeft: "5%" }}>

                    <div style={{ display: "flex", paddingTop: 20 }}>
                        <div style={{ flex: 1, marginLeft: 0 }}>
                            <li style={{ height: 30 }} className="nonelihover">Tìm hiểu về mua trả  góp</li>
                            <li style={{ height: 30 }} className="nonelihover">Lịch sử mua hàng</li>
                            <li style={{ height: 30 }} className="nonelihover">Chính sách bảo hành</li>
                            <li style={{ height: 30 }} className="nonelihover">Chính sách đổi trả</li>
                            <li style={{ height: 30, display: "flex", alignItems: "center" }} className="nonelihover">Xem thêm< TiArrowSortedDown size={16} /> </li>
                        </div>
                        <div style={{ flex: 1 }}>
                            <li style={{ height: 30 }} className="nonelihover">Giới thiệu công ty</li>
                            <li style={{ height: 30 }} className="nonelihover">Tuyển dụng</li>
                            <li style={{ height: 30 }} className="nonelihover">Gửi góp ý, khiếu nại</li>
                            <li style={{ height: 30 }} className="nonelihover">Tìm siêu thị</li>
                            <li style={{ height: 30 }} className="nonelihover">Xem bản mobile</li>
                        </div>
                        <div style={{ flex: 1 }}>

                            <li style={{ height: 30 }} className="noneli">Gọi mua hàng <b>1800.1060</b> (7:30 - 22:00)</li>
                            <li style={{ height: 30 }} className="noneli">Gọi khiếu nại  <b> 1800.1062 </b>(8:00 - 21:30)</li>
                            <li style={{ height: 30 }} className="noneli">Gọi bảo hành  <b> 1800.1064</b> (8:00 - 21:00)</li>
                            <li style={{ height: 30 }} className="noneli">Kỹ thuật    <b> 1800.1763</b> (7:30 - 22:00)</li>
                        </div>
                        <div style={{ flex: 0.6 }}>
                            <div style={{ width: "130px", marginRight: 10 }}>
                                <li className="noneli" style={{ display: "flex", fontSize: 12 }}>
                                    <a style={{ display: "flex", alignContent: "center" }}> <AiFillFacebook color="blue" size={18} />3.5tr </a>
                                    <hr />
                                    <a style={{ display: "flex", alignContent: "center" }}> < AiFillYoutube color="red" size={18} />750k </a>
                                </li>
                                <li className="noneli" style={{ fontSize: 12 }}>
                                    website cùng tập đoàn
                            </li>
                                <li className="noneli" >
                                    <img style={{ height: 19, width: 110 }} src="https://miro.medium.com/max/1260/0*KnirBXUsKfZZFtSr.jpg" />
                                </li>
                            </div>
                        </div>


                    </div>

                </div>
                <div style={{ backgroundColor: "#f8f8f8", height: "40px", width: "100%", fontSize: 20, display: "flex", justifyContent: "center", alignItems: "center", color: "#737a75" }}>
                    © CoppyRight 2020 Bùi Thanh Sang
                </div>

            </div>
        </div >
    );
}

export default DienTHoai;