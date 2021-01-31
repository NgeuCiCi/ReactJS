import React from 'react';
import './Home.css';

import { useHistory } from 'react-router-dom';
import logo from './Image/logo.jpg';
import { CgAppleWatch } from "react-icons/cg";
import { RiComputerLine } from "react-icons/ri";
import { FiWatch } from "react-icons/fi";
import { AiOutlineTablet } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { FiHeadphones } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';
import { red } from 'color-name';
import { wrap } from 'module';
function PhuKien() {
    const history = useHistory();

    return (
        <div style={{ background: "#c9c8c5", height: "100%", width: "100%", position: "relative" }}>

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
                <div onClick={() => { history.push('/Details') }} className="hovermenu" style={{ flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> <AiOutlineDesktop /> Laptop</div>
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
                                    src="https://cdn.tgdd.vn/2020/10/banner/big-pk-800-170-800x170-1.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>1</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: 170 }}
                                    className="d-block w-100"
                                    src="https://cdn.tgdd.vn/2020/10/banner/oplung-800-170-800x170.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>2</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: 170 }}
                                    className="d-block w-100"
                                    src="https://cdn.tgdd.vn/2020/11/banner/800-170-800x170-1.png"
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
                            <img style={{ width: "100%", height: "100%" }} src="https://cdn.tgdd.vn/2020/09/banner/Bao-hanh-390x80.png" />

                        </div>
                        <div style={{ height: 80 }}>
                            <img style={{ width: "100%", height: "100%" }} src="https://cdn.tgdd.vn/2020/09/banner/Mien-dang-390x80.png" />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", height: 50, paddingTop: 10 }}>
                    <div style={{ flex: 1 }}>
                        <b>DANH MỤC PHỤ KIỆN</b>
                    </div>
                    <div style={{ flex: 3.2, display: "flex", marginRight: 50 }}>

                        <div>  <span style={{ flex: 0.9, fontSize: 14.5, display: "flex", justifyContent: "center" }}>Phụ kiện cho:</span>     </div>
                        <div className="danhmuc" style={{ flex: 1.1, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>  <span >iPhone 11 Pro Max </span>     </div>
                        <div className="danhmuc" style={{ flex: 0.9, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>  <span >iPhone 11 Pro</span>     </div>
                        <div className="danhmuc" style={{ flex: 1.1, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>  <span >Galaxy Note 10 Plus</span>     </div>
                        <div className="danhmuc" style={{ flex: 0.7, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>  <span >Galaxy A80</span>     </div>
                        <div className="danhmuc" style={{ flex: 0.7, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>  <span >Galaxy A70</span>     </div>
                        <div className="danhmuc" style={{ flex: 0.7, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>  <span > OPPO Reno</span>     </div>
                        <div className="danhmuc" style={{ flex: 0.6, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>   <span >Vivo S1</span>     </div>
                        <div className="danhmuc" style={{ flex: 0.6, fontSize: 14.5, display: "flex", justifyContent: "center", color: "#4599ed" }}>  <span > Realme 3</span>     </div>
                    </div>
                </div>
                <div className="porder" style={{ flexDirection: "column" }}>

                    <div style={{ flex: 1 }}>
                        a
                        </div>
                    <div style={{ flex: 1 }}>
                        v
                        </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>

                    <div style={{ flex: 1 }}>
                        a
                    </div>
                    <div style={{ flex: 1 }}>
                        v
                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                    <div style={{ flex: 1 }}>

                    </div>

                </div>
                <hr />
                <div xs={12} >
                    <Row className="porder" style={{ width: "100%", margin: 0 }}  >
                        <Col xs={1} style={{ backgroundColor: "lightgreen" }}>1 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "red" }}>2 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightpink" }}>3 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightgreen" }}>1 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "red" }}>2 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightpink" }}>3 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightgreen" }}>1 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "red" }}>2 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightpink" }}>3 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightgreen" }}>1 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightgreen" }}>1 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "red" }}>2 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightpink" }}>3 of 3</Col>
                        <Col xs={1} style={{ backgroundColor: "lightgreen" }}>1 of 3</Col>
                    </Row>
                </div>
                <hr />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                    <div className="outlinetest">

                    </div>
                </div>
                <hr />
                <div>
                    <Table striped bordered >
                        <tr style={{ display: "flex" }}>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://www.thegioididong.com/Content/desktop/images/V4/newiconaccessories/00_noibat.png?v=2" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Nổi Bật</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/57/Pin-sac-du-phong-l-21-10-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Pin sạc dự phòng</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/58/Sac,-cap-l-21-10-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Sạc, cáp</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/54/Tai-nghe-l-21-10-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Tai nghe</span>
                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/2162/Loa-l-21-04-2020.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}> Loa</span>
                                </div>
                            </td>
                            <td style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/55/The-nho-l-21-10-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Thẻ Nhớ</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/75/USB-l-20-11-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>USB</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/1902/O-cung-di-dong-l-26-11-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Ổ cứng di động</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://www.thegioididong.com/Content/desktop/images/V4/newiconaccessories/31_phukienchinhhang_2.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Phụ kiện chính hãng</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/86/Chuot-may-tinh-l-09-12-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Chuột máy tính</span>

                                </div>
                            </td>

                        </tr>
                        <tr style={{ display: "flex" }}>

                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/9262/Mieng-dan,-op-lung-l-29-10-2020.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}> Ốp lưng, miếng dán</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/7923/Balo,-tui-chong-soc-l-19-05-2020.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Balo, túi chống sốc </span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/4728/Camera-giam-sat-l-21-10-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Camera giám sát, hành trình</span>
                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/4727/Thiet-bi-mang-l-26-11-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Thiết bị mạng</span>
                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/9041/Phu-kien-o-to-l-06-09-2020.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Phụ kiện ô tô</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/9118/Android-TV-Box-l-29-09-2020.jpg" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Android TV box</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/9119/But-trinh-chieu-l-29-09-2020.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Bút trình chiếu</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/7922/Quat-mini-l-21-10-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Quạt mini</span>

                                </div>
                            </td>
                            <td style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://cdn.tgdd.vn/Category/3885/Gay-tu-suong-l-13-11-2019.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Gậy tự sướng</span>

                                </div>
                            </td>
                            <td className="tdhover" style={{ flex: 1, padding: 8 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
                                    <img style={{ height: 60, width: 60 }} src="https://www.thegioididong.com/Content/desktop/images/V4/newiconaccessories/30_xemthem_desk.png" />
                                    <span style={{ fontSize: 14, textAlign: "center" }}>Xem thêm </span>

                                </div>
                            </td>

                        </tr>
                    </Table>
                </div>

            </div>



        </div>
    );
}


export default PhuKien;