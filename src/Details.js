import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './App.css';
import logo from './Image/logo.jpg';
import ip11 from './Image/ip11.jpg';
import details1 from './Image/details1.png';

import Button from 'react-bootstrap/Button'
import { ImCart } from "react-icons/im";
import { AiOutlineDesktop } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { AiOutlineTablet } from "react-icons/ai";
import { CgAppleWatch } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { FiHeadphones } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillGift } from "react-icons/ai";
import { RiRepeatOneFill } from "react-icons/ri";
import { BsGeoAlt } from "react-icons/bs";
import { FiArchive } from "react-icons/fi";
import { FaGalacticRepublic } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FaCommentAlt } from "react-icons/fa";

import { BiHeadphone } from "react-icons/bi";

import Carousel from 'react-bootstrap/Carousel';

function Details() {
    const history = useHistory();

    return (

        <div style={{ background: "#c9c8c5", height: "100%", width: "100%", position: "relative" }} >
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
                    <span>  24H Công Nghệ</span>
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
                <div onClick={() => history.push('/DienThoai')} className="hovermenu" style={{ flex: 1, width: "auto", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> < AiOutlineLaptop /> Điện thoại</div>
                <div onClick={() => history.push('/Details')} className="hovermenu" style={{ flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> <AiOutlineDesktop /> Laptop</div>
                <div className="hovermenu" style={{ flex: 0.7, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>< AiOutlineTablet />Tablet</div>
                <div onClick={() => history.push('/PhuKien')} className="hovermenu" style={{ flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>< FiHeadphones />Phụ kiện</div>
                <div className="hovermenu" style={{ flex: 1.5, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} ><FiWatch />Đồng hồ thời trang</div>
                <div className="hovermenu" style={{ flex: 1.5, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >< CgAppleWatch />Đồng hồ thông minh </div>
                <div className="hovermenu" style={{ flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >< RiComputerLine />PC, máy in</div>
                <div className="hovermenu" style={{ flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >Máy cũ giá rẻ</div>
                <div className="hovermenu" style={{ flex: 1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> Sim, thẻ cào</div>
                <div className="hovermenu" style={{ flex: 1.2, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> Trả góp điện nước</div>
            </div>


            <div style={{ height: 90, backgroundColor: "azure", marginRight: "5%", marginLeft: "5%", }}>
                <div style={{ display: "flex", alignItems: "center", height: 35, color: "blue", fontSize: 14.5, paddingLeft: 5 }}>
                    <a style={{ paddingRight: 10 }}> Điện Thoại   </a>
                    <AiOutlineRight paddingLeft="10px" size={13} color="#c9c8c5" />
                    <a style={{ paddingLeft: 10 }}>Điện thoại iPhone(Apple)</a>

                </div>

                <div style={{ display: "flex" }}>
                    <a style={{ fontSize: 24, height: 40, alignItems: "center", paddingLeft: 5 }} > Điện thoại iPhone 11 Pro 256GB </a>

                    <div style={{ height: 30, display: "flex", justifyContent: "center", alignItems: "flex-end" }} >
                        <a style={{ paddingLeft: 10 }}>
                            <AiFillStar size={14} color="#bd850d" />
                            <AiFillStar size={14} color="#bd850d" />
                            <AiFillStar size={14} color="#bd850d" />
                            <AiFillStar size={14} color="#bd850d" />
                            <AiFillStar size={14} color="#c9c8c5" />
                        </a>
                        <a style={{ fontSize: 14.5, color: "blue", paddingLeft: 10 }} >
                            6 đánh giá
                        </a>
                    </div>
                </div>
                <hr />




                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ flex: "1.9" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img style={{ height: 460, width: 430, display: "flex", justifyContent: "center" }} src={ip11} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a style={{ textAlign: "center" }}>Xem hình thực tế sản phẩm</a>

                        </div>
                    </div>
                    <div style={{ flex: "1.4" }}>
                        <div >
                            <div>
                                Bạn đang xem phiên bản: <b>64GB</b>
                            </div>
                            <div style={{ display: "flex", height: 80 }} >
                                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button style={{ height: "90%", width: "90%", backgroundColor: "white", borderColor: "orange", color: "black", fontSize: 14.5 }}>
                                        <a>
                                            <input type="radio" /> 64 GB <br />
                                        </a>
                                        <a>
                                            27.990.000đ
                                        </a>
                                    </Button>{''}

                                </div>
                                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button style={{ height: "90%", width: "90%", backgroundColor: "white", borderColor: "orange", color: "black", fontSize: 14.5 }}>
                                        <a>
                                            <input type="radio" /> 256 GB <br />
                                        </a>
                                        <a>
                                            33.990.000đ
                                        </a>
                                    </Button>{''}
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <b style={{ fontSize: 20, color: "red", paddingLeft: 8, paddingRight: 15 }}> 33.990.000đ </b>

                                <button style={{ height: 20, backgroundColor: "orange", color: "white", borderColor: "orange", borderRadius: 5, borderWidth: 1, fontSize: 12 }}>
                                    Trả góp 0%
                                </button>{''}
                            </div>
                            <div style={{ height: 120, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img style={{ height: "83%" }} src={details1} />
                            </div>
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                <div style={{ width: "95%", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", borderRadius: 4 }}>
                                    <div style={{ width: "100%", height: 55, borderColor: "#b8babf", borderBottomStyle: "solid", borderWidth: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <div style={{ width: "95%" }}>
                                            <b style={{ fontSize: 16, width: "85%" }}> KHUYẾN MÃI TRỊ GIÁ 2.000.000₫</b> <br />
                                            <a style={{ fontSize: 12.5, width: "85%" }} > Giá và khuyến mãi dự kiến áp dụng đến 31/10 </a>
                                        </div>
                                    </div>
                                    <div style={{
                                        height: 100, borderColor: "#b8babf", borderWidth: 1, borderBottomStyle: "dashed", fontSize: 14.5, display: "flex", alignItems: "center"
                                    }}>
                                        <div>
                                            < a style={{ height: 25, display: "flex", alignItems: "center", paddingLeft: 10 }}> <AiFillCheckCircle color="green" size={18} /> {''}  Giảm giá 2,000,000đ * <br /> </a>
                                            <a style={{ height: 40, display: "flex", paddingLeft: 10 }}> <AiFillCheckCircle style={{ marginTop: 4 }} color="green" size={18} />  {''} Giảm giá 2,000,000đ khi tham gia thu cũ đổi mới <br /> Xem chi tiết  <br /></a>
                                            <a style={{ height: 25, display: "flex", alignItems: "center", paddingLeft: 10 }}> <AiFillCheckCircle color="green" size={18} />  {''} Pin sạc dự phòng giảm 30% khi mua kèm. </a>
                                        </div>
                                    </div>
                                    <div style={{ height: 95, borderColor: "#b8babf", borderWidth: 1, borderBottomStyle: "dashed", fontSize: 14.5, display: "flex", justifyContent: "center", alignItems: "center" }} >
                                        <div style={{ height: "85%", width: "95%", display: "flex" }} >
                                            <a style={{ height: "100%", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", paddingRight: 4 }} > <AiFillGift color="red" size={25} /></a>
                                            <a  >  <b style={{ color: "red" }}>  Tặng 100.000₫ </b> mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại
                                    Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác (click xem chi tiết)
                                    </a>
                                        </div>
                                    </div>

                                    <div style={{ height: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <a style={{ fontSize: 13.5 }}>
                                            (*) Giá hoặc khuyến mãi không áp dụng khi mua trả góp 0%
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div style={{ height: 130, display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                <div style={{ height: 130, width: "95%", borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", borderRadius: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ height: "85%", width: "90%", fontSize: 14.5 }}>
                                        <div style={{ height: "25%", display: "flex", justifyContent: "flex-start", alignItems: "center" }} ><a > <b> Chọn thêm các dịch vụ </b> <b style={{ color: "red" }}>miễn phí chỉ có ở TGDĐ</b> </a></div>
                                        <div style={{ height: "25%", display: "flex", justifyContent: "flex-start", alignItems: "center" }} ><a > <input type="checkbox" />  Giao ngay từ cửa hàng gần bạn nhất</a></div>
                                        <div style={{ height: "25%", display: "flex", justifyContent: "flex-start", alignItems: "center" }} ><a> <input type="checkbox" />  Chuyển danh bạ, dữ liệu qua máy mới</a></div>
                                        <div style={{ height: "25%", display: "flex", justifyContent: "flex-start", alignItems: "center" }} > <a > <input type="checkbox" />  Mang thêm điện thoại khác để bạn xem</a></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: 110, display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
                                    <div style={{}} >
                                        <div style={{ paddingBottom: 10 }}>
                                            <Button style={{ height: 55, width: 375, backgroundColor: "orangered" }}>
                                                <b style={{ fontSize: 15 }}>MUA NGAY</b> <br />
                                                <a style={{ fontSize: 13 }}>Giao tận nơi hoặc nhận ở siêu thị</a>
                                            </Button>{''}
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Button style={{ height: 50, width: 183 }}>
                                                <b style={{ fontSize: 14.5, width: "100%" }}>MUA TRẢ GÓP 0%</b> <br />
                                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}> <a style={{ fontSize: 13 }}>Thủ tục đơn giản</a></div>
                                            </Button>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button style={{ height: 50, width: 183 }}>

                                                    <div> <b style={{ fontSize: 14.5, width: 175 }}>TRẢ GÓP 0% QUA THẺ</b><br /></div>
                                                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}> <a style={{ fontSize: 13 }}>Visa, Master, JCB</a></div>

                                                </Button>{''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: 35, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 14 }}>
                                <a>Gọi đặt mua: <a style={{ color: "blue" }}>1800.1060 </a>(miễn phí - 7:30-22:00)</a>
                            </div>
                        </div>

                    </div>
                    <div style={{ flex: "1", height: 330, fontSize: 14.5 }}>
                        <div style={{ height: 30, color: "blue" }}>
                            <a> <BsGeoAlt />Kiểm tra có hàng tại nơi bạn ở không?</a>
                        </div>
                        <div style={{ display: "grid", height: 185, borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", borderRadius: 4, marginBottom: 10 }}>
                            <div style={{ display: "flex", grid: 1, marginRight: "5%", marginLeft: "5%" }}>
                                <a style={{ marginRight: 8 }}><FiArchive size={20} color="blue" /> </a>
                                <a  > Bộ sản phẩm gồm: Sạc, Tai nghe, Hộp, Cáp, Cây lấy sim, Sách hướng dẫn</a>
                            </div>
                            <hr style={{ marginTop: 0, marginBottom: 0, marginRight: "5%", marginLeft: "5%" }} />
                            <div style={{ display: "flex", grid: 1, marginRight: "5%", marginLeft: "5%" }}>
                                <a style={{ marginRight: 8 }}> <FaGalacticRepublic s size={20} color="blue" /> </a>
                                <a>Bảo hành chính hãng 12 tháng. </a>
                            </div>
                            <hr style={{ marginTop: 0, marginBottom: 0, marginRight: "5%", marginLeft: "5%" }} />

                            <div style={{ display: "flex", grid: 1, marginRight: "5%", marginLeft: "5%" }}>
                                <a style={{ marginRight: 8 }}> <RiRepeatOneFill size={20} color="blue" /> </a>
                                <a>Lỗi là đổi mới trong 1 tháng tại hơn 2133 siêu thị toàn quốc Xem chi tiết </a>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 85, borderColor: "#b8babf", borderWidth: 1, borderStyle: "solid", borderRadius: 4 }}>
                            <div style={{ display: "grid", height: "80%", width: "90%" }}>
                                <a style={{ color: "blue" }}>Xem iPhone 11 Pro 64GB cũ </a>
                                <a> Giá dưới:<a style={{ color: "red" }}> 22.350.000₫</a> </a>
                                <a>Bảo hành tới 11 tháng </a>
                            </div>

                        </div>
                    </div>

                </div>
                <hr />

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: 780, height: 500 }} >

                        <div style={{ fontSize: 21 }}>
                            <a>Đặc điểm nổi bật của iPhone 11 Pro 256GB</a>
                        </div>
                        <div style={{ marginBottom: 40 }}>
                            <Carousel>
                                <Carousel.Item>
                                    <img style={{ height: 440 }}
                                        className="d-block w-100"
                                        src="https://cdn.tgdd.vn/Products/Images/42/210655/Slider/-iphone-11-pro-256gb-1.jpg"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={{ height: 440 }}
                                        className="d-block w-100"
                                        src="https://cdn.tgdd.vn/Products/Images/42/210655/Slider/vi-vn-iphone-11-pro-256gb-tinhnang.jpg"
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img style={{ height: 440 }}
                                        className="d-block w-100"
                                        src="https://cdn.tgdd.vn/Products/Images/42/210655/Slider/-iphone-11-pro-256gb-thietke.jpg"
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <div>
                                <b style={{ fontSize: 20 }}>Nếu như bây giờ để lựa chọn một thiết bị có thể sử dụng ổn định và được cập nhật trong khoảng
                            3 năm nữa thì không có sự lựa chọn nào xuất sắc hơn chiếc <b style={{ color: "#68bae3" }}> iPhone 11 Pro 64GB </b>,
                            siêu phẩm mới được giới thiệu cách đây không lâu tới từ Apple.</b>
                            </div>
                            <div style={{ marginTop: 25, fontSize: 20 }}>
                                <b >Khi hiệu năng vượt qua mọi giới hạn</b>
                            </div>
                            <div style={{ marginTop: 10, marginBottom: 10 }} >
                                <span>
                                    iPhone vốn nổi tiếng với sự mượt mà và ổn định, điều đó lại một lần nữa được Apple khẳng định với chiếc iPhone 11 Pro.
                                </span>
                            </div>
                            <div >
                                {/* <View style={{ backgroundColor: 'yellow', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: 'blue', width: 200, height: 200, flex: 1 }}>
                                    </View>
                                    <View style={{ backgroundColor: 'red', minWidth: 50, maxWidth: 200, width: 150, height: 150, minHeight: 50, maxHeight: 200, flex: 1 }}>
                                    </View>
                                </View> */}

                                <img style={{ width: 750 }} src="https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-tgdd11-1.jpg" />
                            </div>
                            <div style={{ height: 90, display: "flex", paddingBottom: 15 }}>
                                <div style={{ display: "flex", flex: 0.35, height: 75 }}>
                                    <div style={{ marginRight: 10 }}>
                                        <img style={{ height: 70, width: 70 }} src="https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-black-400x400.jpg" />
                                    </div>
                                    <div style={{ display: "grid" }}>
                                        <b style={{ fontSize: 19 }}>Điện thoại iPhone 11 Pro 64GB </b>
                                        <b style={{ color: "red" }}> 27.990.000₫ </b>
                                    </div>
                                </div>
                                <div style={{ flex: 0.65, display: "flex" }}>
                                    <Button style={{ height: 45, width: 135, fontStyle: "solid", backgroundColor: "#ff9d4d", fontSize: 12, borderColor: "#ff9d4d", marginLeft: 10, marginRight: 10 }}>
                                        <b > MUA NGAY</b>
                                    </Button>{''}
                                    <Button style={{ height: 45, width: 160, fontStyle: "solid", marginRight: 10 }}>
                                        <b style={{ fontSize: 12 }}>  MUA TRẢ GÓP 0%</b>
                                    </Button>{''}
                                    <Button style={{ height: 45, width: 160, fontStyle: "solid" }}>
                                        <b style={{ fontSize: 12 }}>   TRẢ GÓP 0% QUA THẺ</b>
                                    </Button>{''}
                                </div>
                            </div>
                            <hr />
                            <div style={{ height: 500, paddingBottom: 20, paddingTop: 10 }}>
                                <div style={{ height: 58, display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                                    <a style={{ fontSize: 20 }}>So sánh với các sản phẩm tương tự</a>
                                    <div style={{ display: "flex" }}>
                                        <input style={{ height: 36, width: 320, borderRadius: 4, borderWidth: 1, borderStyle: "solid", outline: "none" }} placeholder="Nhập tên sản phẩm bạn muốn so sánh?">

                                        </input>
                                        {/* <FcSearch style={{position:"fixed"}} size={30} /> */}
                                    </div>
                                </div>
                                <div style={{ height: 412, display: "flex" }}>
                                    <div style={{ width: 195, paddingLeft: 5, paddingRight: 5, display: "grid" }}>
                                        <div>
                                            <button style={{ height: "20px", borderRadius: 5, borderWidth: 1, borderStyle: "solid", outline: "none", background: "yellow", borderColor: "yellow", display: "flex", alignItems: "center" }}><a style={{ fontSize: 11 }}>Tra gop 0% </a> </button>
                                        </div>
                                        <img style={{ height: 150, width: 150 }} src=" https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-black-600x600.jpg" />
                                        <a style={{ fontSize: 14 }}>Bạn đang xem:</a>
                                        <b style={{ fontSize: 14 }}>iPhone 11 Pro 64GB</b>
                                        <b style={{ fontSize: 14, color: "red" }}>27.990.000₫</b>
                                        <a style={{ fontSize: 12 }}>Giảm thêm <b>2.000.000₫ </b></a>

                                        <a style={{}}>
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#c9c8c5" />
                                        </a>
                                        <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0, borderStyle: "dashed" }} />
                                        <a style={{ fontSize: 12 }}>Màn hình 5.8" </a>
                                        <a style={{ fontSize: 12 }}> Camera sau 3 camera 12 MP</a>
                                        <a style={{ fontSize: 12 }}> Pin 3046 mAh</a>
                                    </div>
                                    <div style={{ width: 195, paddingLeft: 5, paddingRight: 5, display: "grid" }}>
                                        <div>
                                            <button style={{ height: "20px", borderRadius: 5, borderWidth: 1, borderStyle: "solid", outline: "none", background: "yellow", borderColor: "yellow", display: "flex", alignItems: "center" }}><a style={{ fontSize: 11 }}>Tra gop 0% </a> </button>
                                        </div>
                                        <img style={{ height: 150, width: 150, marginBottom: 27.54 }} src=" https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-600x600-2-600x600.jpg" />
                                        <b style={{ fontSize: 14 }}>iPhone 11 Xs 64GB</b>
                                        <b style={{ fontSize: 14, color: "red" }}>17.990.000₫</b>
                                        <a style={{ fontSize: 12 }}>Giảm thêm <b>1.000.000₫ </b></a>

                                        <a style={{}}>
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#c9c8c5" />
                                        </a>
                                        <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0, borderStyle: "dashed" }} />
                                        <a style={{ fontSize: 12 }}>Màn hình 5.8" </a>
                                        <a style={{ fontSize: 12 }}> Camera sau 2 camera 12 MP</a>
                                        <a style={{ fontSize: 12 }}> Pin 2658 mAh</a>

                                    </div>
                                    <div style={{ width: 195, paddingLeft: 5, paddingRight: 5, display: "grid" }}>
                                        <div>
                                            <button style={{ height: "20px", borderRadius: 5, borderWidth: 1, borderStyle: "solid", outline: "none", background: "yellow", borderColor: "yellow", display: "flex", alignItems: "center" }}><a style={{ fontSize: 11 }}>Tra gop 0% </a> </button>
                                        </div>
                                        <img style={{ height: 150, width: 150, marginBottom: 27.54 }} src=" https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-256gb-195920-105925-600x600.jpg" />
                                        <b style={{ fontSize: 14 }}>iPhone 12 256GB</b>
                                        <a style={{ fontSize: 12, color: "red" }}>Hàng sắp về</a>
                                        <b style={{ fontSize: 14, color: "red" }}>27.990.000₫</b>

                                        <a style={{}}>
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#bd850d" />
                                            <AiFillStar size={14} color="#c9c8c5" />
                                        </a>
                                        <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0, borderStyle: "dashed" }} />
                                        <a style={{ fontSize: 12 }}>Màn hình 6.1" </a>
                                        <a style={{ fontSize: 12 }}> Camera sau 3 camera 12 MP</a>
                                        <a style={{ fontSize: 12 }}> Pin đang cập nhật</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 360, height: 500 }} >
                        <div >
                            <div style={{ fontSize: 21, marginBottom: 10 }}>
                                <a>Thông số kỹ thuật</a>
                            </div>
                            <div style={{ height: 410 }}>
                                <div style={{ display: "grid", height: "100%" }} >
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}> Màn hình: </a>
                                        <a style={{ flex: 1.4 }}> OLED, 5.8", Super Retina XDR</a>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}>  Hệ điều hành:</a>
                                        <a style={{ flex: 1.4 }}> 	iOS 13</a>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}>Camera sau:  </a>
                                        <a style={{ flex: 1.4 }}>	3 camera 12 MP </a>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}> Camera trước: </a>
                                        <a style={{ flex: 1.4 }}>12 MP </a>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}> CPU: </a>
                                        <a style={{ flex: 1.4 }}>Apple A13 Bionic 6 nhân </a>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}> RAM: </a>
                                        <a style={{ flex: 1.4 }}> 	4 GB</a>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}> Bộ nhớ trong: </a>
                                        <a style={{ flex: 1.4 }}>	256 GB </a>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                    <div style={{ display: "flex", grid: 2, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}> Thẻ SIM: </a>
                                        <div style={{ flex: 1.4, display: "grid" }}>
                                            <a style={{ grid: 0.4 }}>
                                                1 Nano SIM & 1 eSIM, Hỗ trợ 4G
                                            </a>
                                            <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />
                                            <a style={{ grid: 0.6 }}>
                                                <button style={{ height: 18, width: 30, fontSize: 11, borderColor: "red", backgroundColor: "red", borderRadius: 5, color: "white" }}> <a style={{}}> Hot </a></button>
                                                SIM VNMB Siêu sim (5GB/ngày)
                                            </a>
                                        </div>
                                    </div>
                                    <hr style={{ marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 }} />

                                    <div style={{ display: "flex", grid: 1, fontSize: 14.5 }} >
                                        <a style={{ flex: 1 }}> Dung lượng pin: </a>
                                        <a style={{ flex: 1.4 }}>	3046 mAh, có sạc nhanh </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button style={{ width: "100%", marginTop: 10 }}>
                                    <span> Xem thêm cấu hình chi tiết</span>
                                </Button>{''}
                            </div>
                            {/* <div  >
                                <button className="hoverbtndetails" style={{ height: 35, width: "100%", backgroundColor: "#288ad6", color: "white", borderWidth: 0, outline: "none", borderRadius: 2, marginTop: 10 }} >
                                    <span> Xem thêm cấu hình chi tiết</span>
                                </button>
                            </div> */}
                            <div style={{ marginTop: 15 }}>
                                <a style={{ fontSize: 20 }}> Tin tức về iPhone 11 Pro 64GB</a>
                            </div>
                            <div style={{ paddingTop: 5 }}>
                                <div style={{ height: 76, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 60, marginRight: 10 }} src="https://cdn.tgdd.vn/Files/2020/10/21/1300968/iphone-13-990x5571_800x450-300x200.jpg" />
                                    <div  >
                                        <div style={{ height: 42, display: "flex", alignItems: "flex-start" }}>
                                            <span style={{ fontSize: 14 }}>Những điều mà iPhone 12 không có, khiến chúng ta sẽ phải chờ đợi trên.. </span>
                                        </div>
                                        <div style={{ height: 18, display: "flex", alignItems: "center" }} >
                                            <span style={{ fontSize: 12, color: "gray" }}> <FaCommentAlt style={{ marginRight: 5 }} />1 bình luận</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 76, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 60, marginRight: 10 }} src="https://cdn.tgdd.vn/Files/2020/10/25/1301996/iphone12-xanh-duong_800x450-300x200.jpg" />
                                    <div  >
                                        <div style={{ height: 42, display: "flex", alignItems: "flex-start" }}>
                                            <span style={{ fontSize: 14 }}> <BiHeadphone style={{ fontSize: 20 }} /> 24h công nghệ có gì HOT 25/10: Đọ thời lượng pin dòng iPhone 12 với cá.. </span>
                                        </div>
                                        <div style={{ height: 18, display: "flex", alignItems: "center" }} >
                                            <span style={{ fontSize: 12, color: "gray" }}> <FaCommentAlt style={{ marginRight: 5 }} />1 bình luận</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 76, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 60, marginRight: 10 }} src="https://cdn.tgdd.vn/Files/2020/10/24/1301512/d4b6fd8429b11dc9a300b954402b8066_1280x720-300x200.jpg" />
                                    <div  >
                                        <div style={{ height: 42, display: "flex", alignItems: "flex-start" }}>
                                            <span style={{ fontSize: 14 }}> Trên tay iPhone 12 tại Việt Nam: Màu sắc bóng bẩy, đem lại cảm giác.. </span>
                                        </div>
                                        <div style={{ height: 18, display: "flex", alignItems: "center" }} >
                                            <span style={{ fontSize: 12, color: "gray" }}> <FaCommentAlt style={{ marginRight: 5 }} />1 bình luận</span>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <a style={{ color: "blue" }}>Xem tất cả các tin liên quan</a>
                                </div>
                            </div>
                            <div style={{ marginTop: 30 }}>
                                <a style={{ fontSize: 20 }}> Hướng dẫn về iPhone 11 Pro 64GB</a>
                            </div>
                            <div style={{ paddingTop: 5 }}>
                                <div style={{ height: 76, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 60, marginRight: 10 }} src="https://cdn.tgdd.vn/hoi-dap/1249681/Thumbnail/so-sanh-iphone-se-2020-va-iphone-11-dieu-gi-lam-nen-su-thb.jpg" />
                                    <div  >
                                        <div style={{ height: 42, display: "flex", alignItems: "flex-start" }}>
                                            <span style={{ fontSize: 14 }}>iPhone SE 2020 và iPhone 11: Điều gì làm nên sự khác biệt?.. </span>
                                        </div>
                                        <div style={{ height: 18, display: "flex", alignItems: "center" }} >
                                            <span style={{ fontSize: 12, color: "gray" }}> <FaCommentAlt style={{ marginRight: 5 }} />1 bình luận</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 76, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 60, marginRight: 10 }} src="https://cdn.tgdd.vn/hoi-dap/1197511/Thumbnail/cach-tai-cai-dat-bo-hinh-nen-iphone-11-iphone-11-thumb.jpg" />
                                    <div  >
                                        <div style={{ height: 42, display: "flex", alignItems: "flex-start" }}>
                                            <span style={{ fontSize: 14 }}> Cách tải & cài đặt bộ hình nền iPhone 11, iPhone 11 Pro mới nhất.. </span>
                                        </div>
                                        <div style={{ height: 18, display: "flex", alignItems: "center" }} >
                                            <span style={{ fontSize: 12, color: "gray" }}> <FaCommentAlt style={{ marginRight: 5 }} />1 bình luận</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <a style={{ color: "blue" }}>Xem thêm hướng dẫn</a>
                                </div>
                            </div>
                            <div style={{ marginTop: 30 }}>
                                <a style={{ fontSize: 20 }}> Sản phẩm thường mua cùng </a>
                            </div>
                            <div style={{ paddingTop: 5 }}>
                                <div style={{ height: 116, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 100, marginRight: 10 }} src="https://cdn.tgdd.vn/Products/Images/54/76061/tai-nghe-earpods-apple-md827fea-1-600x600.jpg" />
                                    <div  >
                                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                                            <b style={{ fontSize: 14 }}>Tai nghe nhét tai Earpods Apple MNHF2 </b>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }} >
                                            <b style={{ fontSize: 14, color: "red" }}> 790.000đ</b>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 116, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 100, marginRight: 10 }} src="https://cdn.tgdd.vn/Products/Images/54/226702/tai-nghe-true-wireless-earphones-2-basic-xiaomi-600x600-1-600x600.jpg" />
                                    <div  >
                                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                                            <b style={{ fontSize: 14 }}> Tai nghe Bluetooth True Wireless Earphones 2 Basic Xiaomi BHR4089GL Trắng</b>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }} >
                                            <b style={{ fontSize: 14, color: "red" }}>
                                                1.590.000₫
                                                </b>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 116, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 100, marginRight: 10 }} src="https://cdn.tgdd.vn/Products/Images/58/76056/adapter-sac-5w-iphone-ipad-ipod-apple-md813zma-12-600x600.jpg" />
                                    <div  >
                                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                                            <b style={{ fontSize: 14 }}>Adapter sạc 5W Apple iPhone MD813ZM-A</b>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }} >
                                            <b style={{ fontSize: 14, color: "red" }}>
                                                490.000₫
                                            </b>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 116, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 100, marginRight: 10 }} src="https://cdn.tgdd.vn/Products/Images/58/203758/cap-lightning-05m-apple-me291-trang-5-600x600-1-600x600.jpg" />
                                    <div  >
                                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                                            <b style={{ fontSize: 14 }}> Cáp Lightning 0.5 m Apple ME291 Trắng</b>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }} >
                                            <b style={{ fontSize: 14, color: "red" }}>
                                                 465.000₫  <a style={{color:"gray",textDecorationLine: 'line-through'}}>490.000₫</a>
                                            </b>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: 116, display: "flex", paddingTop: 8, paddingBottom: 8 }}>
                                    <img style={{ width: 100, height: 100, marginRight: 10 }} src="https://cdn.tgdd.vn/Products/Images/58/88355/cap-lightning-20cm-evalu-ltl-02-avatar-1-600x600.jpg" />
                                    <div  >
                                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                                            <b style={{ fontSize: 14 }}> Dây cáp Lightning 20 cm e.VALU LTL-02</b>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }} >
                                            <b style={{ fontSize: 14, color: "red" }}>
                                                70.000₫
                                                </b>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a style={{ color: "blue" }}>Xem tất cả sản phẩm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >














    );
}

export default Details;