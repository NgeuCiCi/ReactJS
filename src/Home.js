import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import hinh1 from './Image/image.png';
import ip11 from './Image/ip11.jpg';
import note from './Image/note20.jpg';
import logo from './Image/logo.jpg'
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
import { Box } from '@material-ui/core';
/* import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'
 */
function Home() {
    const history = useHistory();
    const [listData, setListData] = useState(null);
    const [flag, setFlag] = useState('ANDROID');
    const a = [
        {
            "_id": "5aec18723f45afa668523081",
            "Ten": "Freetel ICE 2 8GB",
            "Ma_so": "ANDROID_3",
            "Don_gia_Ban": 9240000,
            "Don_gia_Nhap": 8240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8240000,
                    "Tien": 82400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec18973f45afa668523085",
            "Ten": "Masstel N540 8GB",
            "Ma_so": "ANDROID_5",
            "Don_gia_Ban": 8000000,
            "Don_gia_Nhap": 7000000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 7000000,
                    "Tien": 70000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec18aa3f45afa668523089",
            "Ten": "Telego Spot 8GB",
            "Ma_so": "ANDROID_6",
            "Don_gia_Ban": 7920000,
            "Don_gia_Nhap": 6920000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 6920000,
                    "Tien": 69200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec18bf3f45afa66852308b",
            "Ten": "Asus Zenfone Go 4.5",
            "Ma_so": "ANDROID_7",
            "Don_gia_Ban": 13240000,
            "Don_gia_Nhap": 11240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 11240000,
                    "Tien": 112400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec18d33f45afa66852308d",
            "Ten": "TP-Link Neffos Y5L 16GB",
            "Ma_so": "ANDROID_8",
            "Don_gia_Ban": 12040000,
            "Don_gia_Nhap": 10040000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 10040000,
                    "Tien": 100400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec18f73f45afa668523093",
            "Ten": "LEAGOO Alfa 8 8GB",
            "Ma_so": "ANDROID_10",
            "Don_gia_Ban": 15800000,
            "Don_gia_Nhap": 13800000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [
                {
                    "Ngay": "2018-04-23T02:08:17.495Z",
                    "So_luong": "1",
                    "Don_gia_Ban": 15800000,
                    "Tien": 15800000,
                    "Nhan_vien": {
                        "Ho_ten": "Trần Anh",
                        "Ma_so": "NV_3"
                    },
                    "So_Phieu_Ban": 1
                }
            ],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 13800000,
                    "Tien": 138000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec191d3f45afa668523097",
            "Ten": "Samsung Galaxy J2",
            "Ma_so": "ANDROID_12",
            "Don_gia_Ban": 9400000,
            "Don_gia_Nhap": 8400000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8400000,
                    "Tien": 84000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec192f3f45afa66852309b",
            "Ten": "HTC Desire 630 16GB",
            "Ma_so": "ANDROID_13",
            "Don_gia_Ban": 13600000,
            "Don_gia_Nhap": 11600000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 11600000,
                    "Tien": 116000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19413f45afa66852309d",
            "Ten": "Samsung Galaxy J2 Prime",
            "Ma_so": "ANDROID_14",
            "Don_gia_Ban": 11280000,
            "Don_gia_Nhap": 9280000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 9280000,
                    "Tien": 92800000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19563f45afa66852309f",
            "Ten": "Samsung Galaxy On 7 16GB",
            "Ma_so": "ANDROID_15",
            "Don_gia_Ban": 13720000,
            "Don_gia_Nhap": 11720000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 11720000,
                    "Tien": 117200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec196b3f45afa6685230a3",
            "Ten": "Freetel Priori 3S",
            "Ma_so": "ANDROID_16",
            "Don_gia_Ban": 11000000,
            "Don_gia_Nhap": 9000000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 9000000,
                    "Tien": 90000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19863f45afa6685230a5",
            "Ten": "Leagoo M5 16GB ",
            "Ma_so": "ANDROID_17",
            "Don_gia_Ban": 1200000,
            "Don_gia_Nhap": 200000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 200000,
                    "Tien": 2000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19093f45afa668523095",
            "Ten": "Samsung Galaxy J1",
            "Ma_so": "ANDROID_11",
            "Don_gia_Ban": 2640000,
            "Don_gia_Nhap": 1640000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 1640000,
                    "Tien": 16400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                },
                {
                    "Ngay": "2018-04-23T02:31:46.709Z",
                    "So_luong": 50,
                    "Don_gia": 1640000,
                    "Tien": 82000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 2
                }
            ]
        },
        {
            "_id": "5aec19b43f45afa6685230b3",
            "Ten": "Qmobile Eddy",
            "Ma_so": "ANDROID_19",
            "Don_gia_Ban": 2240000,
            "Don_gia_Nhap": 1240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 1240000,
                    "Tien": 12400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19d33f45afa6685230b7",
            "Ten": "Xiaomi Redmi 4X",
            "Ma_so": "ANDROID_21",
            "Don_gia_Ban": 11120000,
            "Don_gia_Nhap": 9120000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 9120000,
                    "Tien": 91200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec18433f45afa66852307b",
            "Ten": "Philips S307",
            "Ma_so": "ANDROID_1",
            "Don_gia_Ban": "4800000",
            "Don_gia_Nhap": "3800000",
            "Nhom_Dien_thoai": {
                "Ten": "ANDROID",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [
                {
                    "Ngay_Dat_hang": "2018-04-20T03:05:51.377Z",
                    "Ngay_Giao_hang": "2018-04-20T03:05:51.377Z",
                    "So_luong": "1",
                    "Don_gia_Ban": "4800000",
                    "Tien": 4800000,
                    "Trang_thai": "DA_GIAO_HANG",
                    "Khach_hang": {
                        "Ho_ten": "Thu Trân",
                        "Dien_thoai": "0973123456",
                        "Email": "thutran@gmail.com",
                        "Dia_chi": "137E Nguyễn Chí Thanh Tp Hồ Chí Minh"
                    },
                    "So_Phieu_Dat": 1,
                    "Nhan_vien": {
                        "Ho_ten": "Trần Anh",
                        "Ma_so": "NV_1"
                    }
                },
                {
                    "Ngay_Dat_hang": "2018-04-20T03:56:45.863Z",
                    "Ngay_Giao_hang": "2018-04-20T03:56:45.863Z",
                    "So_luong": "1",
                    "Don_gia_Ban": "4800000",
                    "Tien": 4800000,
                    "Trang_thai": "CHUA_GIAO_HANG",
                    "Khach_hang": {
                        "Ho_ten": "Thúy Anh",
                        "Dien_thoai": "0918745555",
                        "Email": "anh@gmail.com",
                        "Dia_chi": "525 Bến phú lâm P9 Q6 Tp Hồ Chí Minh"
                    },
                    "So_Phieu_Dat": 2
                }
            ],
            "Danh_sach_Phieu_Ban": [
                {
                    "Ngay": "2018-04-20T02:59:45.809Z",
                    "So_luong": 1,
                    "Don_gia_Ban": "4800000",
                    "Tien": 4800000,
                    "Nhan_vien": {
                        "Ho_ten": "Trần Anh",
                        "Ma_so": "NV_3"
                    },
                    "So_Phieu_Ban": 1
                },
                {
                    "Ngay": "2018-04-20T04:00:28.098Z",
                    "So_luong": 2,
                    "Don_gia_Ban": "4800000",
                    "Tien": 9600000,
                    "Nhan_vien": {
                        "Ho_ten": "Trần Anh",
                        "Ma_so": "NV_3"
                    },
                    "So_Phieu_Ban": 2
                }
            ],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 3800000,
                    "Tien": 38000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                },
                {
                    "Ngay": "2018-04-20T03:59:36.403Z",
                    "So_luong": 5,
                    "Don_gia": 3800000,
                    "Tien": 19000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 2
                }
            ]
        },
        {
            "_id": "5aec18863f45afa668523083",
            "Ten": "Mobiistar Lai Z1",
            "Ma_so": "ANDROID_4",
            "Don_gia_Ban": 11120000,
            "Don_gia_Nhap": 9120000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 9120000,
                    "Tien": 91200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19e53f45afa6685230bb",
            "Ten": "HTC Desire 626G 8GB",
            "Ma_so": "ANDROID_22",
            "Don_gia_Ban": 8000000,
            "Don_gia_Nhap": 7000000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 7000000,
                    "Tien": 70000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19f63f45afa6685230bd",
            "Ten": "ZTE Blade D Lux 16GB",
            "Ma_so": "ANDROID_23",
            "Don_gia_Ban": 7920000,
            "Don_gia_Nhap": 6920000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 6920000,
                    "Tien": 69200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a0d3f45afa6685230bf",
            "Ten": "HTC Desire 630 16GB ",
            "Ma_so": "ANDROID_24",
            "Don_gia_Ban": 13240000,
            "Don_gia_Nhap": 11240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 11240000,
                    "Tien": 112400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a1e3f45afa6685230c3",
            "Ten": "Nokia 3 16GB",
            "Ma_so": "ANDROID_25",
            "Don_gia_Ban": 12040000,
            "Don_gia_Nhap": 10040000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 10040000,
                    "Tien": 100400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19c33f45afa6685230b5",
            "Ten": "Asus ZenFone Live ZB501KL",
            "Ma_so": "ANDROID_20",
            "Don_gia_Ban": 9240000,
            "Don_gia_Nhap": 8240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8240000,
                    "Tien": 82400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a2e3f45afa6685230c5",
            "Ten": "Samsung Galaxy J3 LTE 8G ",
            "Ma_so": "ANDROID_26",
            "Don_gia_Ban": 8600000,
            "Don_gia_Nhap": 7600000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 7600000,
                    "Tien": 76000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a5e3f45afa6685230cd",
            "Ten": "TP-Link Neffos C5 Max",
            "Ma_so": "ANDROID_29",
            "Don_gia_Ban": 2240000,
            "Don_gia_Nhap": 1240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 1240000,
                    "Tien": 12400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec18e53f45afa66852308f",
            "Ten": "FPT Life 4 Plus",
            "Ma_so": "ANDROID_9",
            "Don_gia_Ban": 8600000,
            "Don_gia_Nhap": 7600000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 7600000,
                    "Tien": 76000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a723f45afa6685230cf",
            "Ten": "Oppo Find 5 Mini R827",
            "Ma_so": "ANDROID_30",
            "Don_gia_Ban": 9240000,
            "Don_gia_Nhap": 8240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8240000,
                    "Tien": 82400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a863f45afa6685230d1",
            "Ten": "Asus Zenfone 3 Max ZC553KL",
            "Ma_so": "ANDROID_31",
            "Don_gia_Ban": 11120000,
            "Don_gia_Nhap": 9120000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 9120000,
                    "Tien": 91200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a953f45afa6685230d5",
            "Ten": "Samsung Galaxy Pro 2017",
            "Ma_so": "ANDROID_32",
            "Don_gia_Ban": 8000000,
            "Don_gia_Nhap": 7000000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 7000000,
                    "Tien": 70000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1aa63f45afa6685230d7",
            "Ten": "Sony Xperia XA F3116",
            "Ma_so": "ANDROID_33",
            "Don_gia_Ban": 7920000,
            "Don_gia_Nhap": 6920000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 6920000,
                    "Tien": 69200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1ab53f45afa6685230d9",
            "Ten": "Samsung Galaxy J5 Prime",
            "Ma_so": "ANDROID_34",
            "Don_gia_Ban": 13240000,
            "Don_gia_Nhap": 11240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 11240000,
                    "Tien": 112400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec19993f45afa6685230a7",
            "Ten": "Invens City X1 8GB",
            "Ma_so": "ANDROID_18",
            "Don_gia_Ban": 4880000,
            "Don_gia_Nhap": 3880000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 3880000,
                    "Tien": 38800000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1ae33f45afa6685230df",
            "Ten": "HTC Desire 628 32GB",
            "Ma_so": "ANDROID_36",
            "Don_gia_Ban": 8600000,
            "Don_gia_Nhap": 7600000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 7600000,
                    "Tien": 76000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b023f45afa6685230e5",
            "Ten": "Samsung Galaxy S8 64GB",
            "Ma_so": "ANDROID_38",
            "Don_gia_Ban": 4880000,
            "Don_gia_Nhap": 3880000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 3880000,
                    "Tien": 38800000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b263f45afa6685230e9",
            "Ten": "Samsung Galaxy Note Fan",
            "Ma_so": "ANDROID_40",
            "Don_gia_Ban": 9240000,
            "Don_gia_Nhap": 8240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8240000,
                    "Tien": 82400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b353f45afa6685230eb",
            "Ten": "HTC U11 Blue",
            "Ma_so": "ANDROID_41",
            "Don_gia_Ban": 11120000,
            "Don_gia_Nhap": 9120000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 9120000,
                    "Tien": 91200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b453f45afa6685230ef",
            "Ten": "Samsung Galaxy S7 Edge",
            "Ma_so": "ANDROID_42",
            "Don_gia_Ban": 8000000,
            "Don_gia_Nhap": 7000000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 7000000,
                    "Tien": 70000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b583f45afa6685230f1",
            "Ten": "NOKIA 7",
            "Ma_so": "ANDROID_43",
            "Don_gia_Ban": "5500000",
            "Don_gia_Nhap": "5000000",
            "Nhom_Dien_thoai": {
                "Ten": "ANDROID",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 5000000,
                    "Tien": 50000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1af33f45afa6685230e1",
            "Ten": "Oppo Neo 9 A37",
            "Ma_so": "ANDROID_37",
            "Don_gia_Ban": 15800000,
            "Don_gia_Nhap": 13800000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 13800000,
                    "Tien": 138000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1acd3f45afa6685230dd",
            "Ten": "Sony Xperia XA",
            "Ma_so": "ANDROID_35",
            "Don_gia_Ban": 12040000,
            "Don_gia_Nhap": 10040000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 10040000,
                    "Tien": 100400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b913f45afa6685230f9",
            "Ten": "Apple iPhone 7 32GB",
            "Ma_so": "IPHONE_2",
            "Don_gia_Ban": 11840000,
            "Don_gia_Nhap": 9840000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 9840000,
                    "Tien": 98400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a3e3f45afa6685230c7",
            "Ten": "Oppo Neo 9 (A37) 16GB",
            "Ma_so": "ANDROID_27",
            "Don_gia_Ban": 15800000,
            "Don_gia_Nhap": 13800000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 13800000,
                    "Tien": 138000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1a4d3f45afa6685230c9",
            "Ten": "LG Magna H502F 8GB",
            "Ma_so": "ANDROID_28",
            "Don_gia_Ban": 4880000,
            "Don_gia_Nhap": 3880000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 3880000,
                    "Tien": 38800000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b143f45afa6685230e7",
            "Ten": "HTC U Ultra Sapphire",
            "Ma_so": "ANDROID_39",
            "Don_gia_Ban": 2240000,
            "Don_gia_Nhap": 1240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 1240000,
                    "Tien": 12400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1ba13f45afa6685230fb",
            "Ten": "Apple iPhone 6s Plus 32GB",
            "Ma_so": "IPHONE_3",
            "Don_gia_Ban": 13080000,
            "Don_gia_Nhap": 11080000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 11080000,
                    "Tien": 110800000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1bb53f45afa6685230fd",
            "Ten": "Apple iPhone 6s Plus 64GB",
            "Ma_so": "IPHONE_4",
            "Don_gia_Ban": 4080000,
            "Don_gia_Nhap": 3080000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 3080000,
                    "Tien": 30800000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1bc33f45afa668523101",
            "Ten": "Apple iPhone 7 Plus 128GB",
            "Ma_so": "IPHONE_5",
            "Don_gia_Ban": 14560000,
            "Don_gia_Nhap": 12560000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 12560000,
                    "Tien": 125600000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b813f45afa6685230f7",
            "Ten": "Apple iPhone 7 Plus",
            "Ma_so": "IPHONE_1",
            "Don_gia_Ban": 14720000,
            "Don_gia_Nhap": 12720000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [
                {
                    "Ngay_Dat_hang": "2018-04-20T03:08:18.166Z",
                    "Ngay_Giao_hang": "2018-04-20T03:08:18.166Z",
                    "So_luong": "1",
                    "Don_gia_Ban": 14720000,
                    "Tien": 14720000,
                    "Trang_thai": "CHUA_GIAO_HANG",
                    "Khach_hang": {
                        "Ho_ten": "Tuấn Tú",
                        "Dien_thoai": "0123456789",
                        "Email": "tu@gmail.com",
                        "Dia_chi": "227 Nguyễn Văn Cừ Tp Hồ Chí Minh"
                    },
                    "So_Phieu_Dat": 1
                }
            ],
            "Danh_sach_Phieu_Ban": [
                {
                    "Ngay": "2018-04-20T09:41:04.883Z",
                    "So_luong": "1",
                    "Don_gia_Ban": 14720000,
                    "Tien": 14720000,
                    "Nhan_vien": {
                        "Ho_ten": "Trần Anh",
                        "Ma_so": "NV_3"
                    },
                    "So_Phieu_Ban": 1
                }
            ],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 12720000,
                    "Tien": 127200000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1c043f45afa668523109",
            "Ten": "Apple iPhone 7 128GB",
            "Ma_so": "IPHONE_8",
            "Don_gia_Ban": 10360000,
            "Don_gia_Nhap": 8360000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8360000,
                    "Tien": 83600000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1bd33f45afa668523103",
            "Ten": "Apple iPhone SE 16GB",
            "Ma_so": "IPHONE_6",
            "Don_gia_Ban": 9440000,
            "Don_gia_Nhap": 8440000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8440000,
                    "Tien": 84400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1c123f45afa66852310b",
            "Ten": "iphone 9X",
            "Ma_so": "IPHONE_9",
            "Don_gia_Ban": "25000000",
            "Don_gia_Nhap": "15000000",
            "Nhom_Dien_thoai": {
                "Ten": "IPHONE",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 15000000,
                    "Tien": 150000000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec294c3c9f09245089dc41",
            "Ten": "Iphone 10",
            "Ma_so": "IPHONE_10",
            "Don_gia_Ban": "30000000",
            "Don_gia_Nhap": "27000000",
            "Nhom_Dien_thoai": {
                "Ten": "IPHONE",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": []
        },
        {
            "_id": "5aec185c3f45afa66852307d",
            "Ten": "Philips S307 4GB",
            "Ma_so": "ANDROID_2",
            "Don_gia_Ban": 2240000,
            "Don_gia_Nhap": 1240000,
            "Nhom_Dien_thoai": {
                "Ten": "Android",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 1240000,
                    "Tien": 12400000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1bee3f45afa668523105",
            "Ten": "Apple iPhone 6S 16GB",
            "Ma_so": "IPHONE_7",
            "Don_gia_Ban": 9880000,
            "Don_gia_Nhap": 8880000,
            "Nhom_Dien_thoai": {
                "Ten": "iphone",
                "Ma_so": "IPHONE"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": [
                {
                    "Ngay": "2018-04-20T02:52:11.072Z",
                    "So_luong": 10,
                    "Don_gia": 8880000,
                    "Tien": 88800000,
                    "Nhan_vien": {
                        "Ho_Ten": "Trần Tiến Quang",
                        "Ma_so": "NV_2"
                    },
                    "So_Phieu_Nhap": 1
                }
            ]
        },
        {
            "_id": "5aec1b6d3f45afa6685230f3",
            "Ten": "LV 2018",
            "Ma_so": "ANDROID_44",
            "Don_gia_Ban": "13000000",
            "Don_gia_Nhap": "12000000",
            "Nhom_Dien_thoai": {
                "Ten": "ANDROID",
                "Ma_so": "ANDROID"
            },
            "Danh_sach_Phieu_Dat": [],
            "Danh_sach_Phieu_Ban": [],
            "Danh_sach_Phieu_Nhap": []
        }
    ];

    const b = [{
        "_id": "5aec18723f45afa668523081",
        "Ten": "Freetel ICE 2 8GB",
        "Ma_so": "ANDROID_3",
        "Don_gia_Ban": 9240000,
        "Don_gia_Nhap": 8240000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 8240000,
                "Tien": 82400000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec18973f45afa668523085",
        "Ten": "Masstel N540 8GB",
        "Ma_so": "ANDROID_5",
        "Don_gia_Ban": 8000000,
        "Don_gia_Nhap": 7000000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 7000000,
                "Tien": 70000000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec18aa3f45afa668523089",
        "Ten": "Telego Spot 8GB",
        "Ma_so": "ANDROID_6",
        "Don_gia_Ban": 7920000,
        "Don_gia_Nhap": 6920000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 6920000,
                "Tien": 69200000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec18bf3f45afa66852308b",
        "Ten": "Asus Zenfone Go 4.5",
        "Ma_so": "ANDROID_7",
        "Don_gia_Ban": 13240000,
        "Don_gia_Nhap": 11240000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 11240000,
                "Tien": 112400000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec18d33f45afa66852308d",
        "Ten": "TP-Link Neffos Y5L 16GB",
        "Ma_so": "ANDROID_8",
        "Don_gia_Ban": 12040000,
        "Don_gia_Nhap": 10040000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 10040000,
                "Tien": 100400000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec18f73f45afa668523093",
        "Ten": "LEAGOO Alfa 8 8GB",
        "Ma_so": "ANDROID_10",
        "Don_gia_Ban": 15800000,
        "Don_gia_Nhap": 13800000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [
            {
                "Ngay": "2018-04-23T02:08:17.495Z",
                "So_luong": "1",
                "Don_gia_Ban": 15800000,
                "Tien": 15800000,
                "Nhan_vien": {
                    "Ho_ten": "Trần Anh",
                    "Ma_so": "NV_3"
                },
                "So_Phieu_Ban": 1
            }
        ],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 13800000,
                "Tien": 138000000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec191d3f45afa668523097",
        "Ten": "Samsung Galaxy J2",
        "Ma_so": "ANDROID_12",
        "Don_gia_Ban": 9400000,
        "Don_gia_Nhap": 8400000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 8400000,
                "Tien": 84000000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec192f3f45afa66852309b",
        "Ten": "HTC Desire 630 16GB",
        "Ma_so": "ANDROID_13",
        "Don_gia_Ban": 13600000,
        "Don_gia_Nhap": 11600000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 11600000,
                "Tien": 116000000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec19413f45afa66852309d",
        "Ten": "Samsung Galaxy J2 Prime",
        "Ma_so": "ANDROID_14",
        "Don_gia_Ban": 11280000,
        "Don_gia_Nhap": 9280000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 9280000,
                "Tien": 92800000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec19563f45afa66852309f",
        "Ten": "Samsung Galaxy On 7 16GB",
        "Ma_so": "ANDROID_15",
        "Don_gia_Ban": 13720000,
        "Don_gia_Nhap": 11720000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 11720000,
                "Tien": 117200000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    },
    {
        "_id": "5aec196b3f45afa6685230a3",
        "Ten": "Freetel Priori 3S",
        "Ma_so": "ANDROID_16",
        "Don_gia_Ban": 11000000,
        "Don_gia_Nhap": 9000000,
        "Nhom_Dien_thoai": {
            "Ten": "Android",
            "Ma_so": "ANDROID"
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": [
            {
                "Ngay": "2018-04-20T02:52:11.072Z",
                "So_luong": 10,
                "Don_gia": 9000000,
                "Tien": 90000000,
                "Nhan_vien": {
                    "Ho_Ten": "Trần Tiến Quang",
                    "Ma_so": "NV_2"
                },
                "So_Phieu_Nhap": 1
            }
        ]
    }
    ];

    fetch("https://servicedatajs.herokuapp.com/Danh_sach_Dien_thoai")
        .then(response => response.json())
        .then(res => {
            setListData(res)
        })
        .catch(err => {

        })

    return (


        <div style={{ background: "#c9c8c5", height: "100%", width: "100%" }} >
            {/*   div  hình */}
            <div style={{ paddingRight: "5%", paddingLeft: "5%", height: "40px", backgroundColor: "black", display: "flex" }}>
                <div>
                    <img onClick={() => history.push('/')} style={{ height: "100%", width: 150 }} src={logo} alt="Logo" />

                </div>
                <div style={{ paddingTop: 3, paddingBottom: 3, position: 'relative', color: "white", flex: 1.5, display: "flex", }}>
                    <input placeholder="Bạn cần tìm gì?  " style={{ display: "flex", flex: 1, borderRadius: 4, borderWidth: 1, borderStyle: "solid" }} >

                    </input>
                    <div style={{ display: 'flex', position: "absolute", right: 10, top: 10 }}>
                        <GiMagnifyingGlass color="black" size={20} />
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
                <div className="hoveritemmenu" style={{ color: "white", flex: 1.1, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span> 24H Công Nghệ</span>
                </div>
                <div onClick={() => { history.push('/hoidap') }} className="hoveritemmenu" style={{ color: "white", flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span>  Hỏi Đáp</span>
                </div>
                <div onClick={() => { history.push('/login') }}
                    className="hoveritemmenu" style={{ color: "white", flex: 0.8, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span>  SIGN IN in</span>
                </div>
            </div>
            {/* onClick={() => { }} */}
            <div style={{ paddingRight: "5%", paddingLeft: "5%", height: "40px", backgroundColor: "yellow", display: "flex" }}>
                <div onClick={() => { history.push('/dienThoai') }} className="hovermenu" style={{ flex: 1, width: "auto", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> < AiOutlineLaptop /> Điện thoại</div>
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
            <div className="center" style={{ backgroundColor: "green", marginTop: 20 }}>
                <img style={{ width: "90%" }} src={hinh1} alt="" ></img>
            </div>

            <div style={{ marginRight: "5%", marginLeft: "5%", display: "flex", backgroundColor: "salmon" }}>
                {b.map(item => {
                    return <div style={{ height: "400px", width: "240px", borderStyle: "solid", borderWidth: 1, borderColor: "#c9cdd4", backgroundColor: "violet" }} >

                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }} >
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>{item.Ten}</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>

                            <div style={{ color: "red", fontWeight: "bold" }} >{item.Don_gia_Ban}đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  {item.Don_gia_Nhap}đ</div>
                        </div>
                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>


                    </div >

                })

                }
            </div>
            <div style={{ marginRight: "5%", marginLeft: "5%", display: "flex", flexWrap: "wrap", backgroundColor: "blue", justifyContent: "center" }} >
                {/* <div>
                    <h3 style={{ paddingLeft: "10px" ,height:"50px",width:"100%"}}> Khuyen Mai Hot Nhat   </h3>
                </div> */}

                {a.map(item => {
                    return <div style={{ height: "400px", width: "240px", borderStyle: "solid", borderWidth: 1, borderColor: "#c9cdd4", backgroundColor: "violet" }} >

                        <div style={{ fontSize: "40" }} >
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow", display: "flex", alignItems: "center" }}><a style={{ display: "flex", alignItems: "center" }}>Tra gop 0% </a> </button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>{item.Ten}</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>

                            <div style={{ color: "red", fontWeight: "bold" }} >{item.Don_gia_Ban}đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  {item.Don_gia_Nhap}đ</div>
                        </div>
                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>

                    </div >

                })}
            </div>

            {/* div khuyen mai */}
            {/* <div style={{ marginRight: "5%", marginLeft: "5%", height: "400px", background: "white" }}>

                <h3 style={{ paddingLeft: "10px" }}> Khuyen Mai Hot Nhat   </h3>
                <div style={{ marginTop: "5px", display: "inline-flex", width: "100%" }} >

                    {listData !== null ? listData.map(item => {
                        return <div style={{ height: "400px", width: "20%" }} >

                            <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }} >
                                <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                            </div>
                            <div className="center" style={{ paddingTop: "15px" }}>
                                <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                            </div>
                            <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>{item.Ten}</div>
                            <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>

                                <div style={{ color: "red", fontWeight: "bold" }} >{item.Nhom_Dien_thoai.Ten}đ  &emsp;  </div>
                                <div style={{ color: "red", fontWeight: "bold" }} >{item.Don_gia_Ban}đ  &emsp;  </div>
                                <div style={{ textDecorationLine: 'line-through' }}>  {item.Don_gia_Nhap}đ</div>
                            </div>
                            <div>
                                <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                            </div>

                        </div >
                    })
                        :
                        null
                    }

                </div>
            </div> */}

            {/*  div noi bat */}
            <div style={{ marginRight: "5%", marginLeft: "5%", marginTop: "10px", height: "900px", background: "white" }}>
                <div style={{ width: "100%", height: "50px", display: "flex", paddingBottom: "10px", borderBottomStyle: "solid", borderBottomWidth: 1, borderBottomColor: "#c9c8c5" }}>
                    <h3 style={{ width: "30%", paddingLeft: "10px" }}>Dien Thoai Noi Bat</h3>
                    <div style={{ height: "100%", width: "70%", paddingRight: "5px", }}>
                        <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}  >
                            <li style={{ color: "blue", listStyle: "none", height: "100%", display: "flex", alignItems: "center" }}> Samsung Galaxy note moi</li>
                            <li style={{ color: "blue", listStyle: "none", height: "100%", display: "flex", alignItems: "center" }}>  iPhone 11 Pro max</li>
                            <li style={{ color: "blue", listStyle: "none", height: "100%", display: "flex", alignItems: "center" }}>iPhone 12</li>
                            <li style={{ color: "blue", listStyle: "none", height: "100%", display: "flex", alignItems: "center" }}>Redmi note 9S</li>
                            <li style={{ color: "blue", listStyle: "none", height: "100%", display: "flex", alignItems: "center" }}>OPPO Reno4</li>

                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: "5px", display: "inline-flex", width: "100%" }}>
                    <div style={{ height: "400px", width: "40%" }}>
                        <div className="center" >
                            <img style={{ height: "250px", width: "80%" }} src={note} alt=""></img>
                        </div>
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>Samsung Galaxy 20 Ultra</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >29.990.000đ   </div>
                        </div>
                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div>

                    <div style={{ height: "400px", width: "20%" }} >
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>iPhone 11.Pro Max 64GB</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >33.990.000đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  30.000.000đ</div>
                        </div>

                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div >

                    <div style={{ height: "400px", width: "20%" }} >
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>iPhone 11.Pro Max 64GB</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >33.990.000đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  30.000.000đ</div>
                        </div>

                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div >

                    <div style={{ height: "400px", width: "20%" }} >
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>iPhone 11.Pro Max 64GB</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >33.990.000đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  30.000.000đ</div>
                        </div>

                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div >
                </div>


                <div style={{ marginTop: "5px", display: "inline-flex", width: "100%" }}>
                    <div style={{ height: "400px", width: "40%" }}>
                        <div className="center" >
                            <img style={{ height: "250px", width: "80%" }} src={note} alt=""></img>
                        </div>
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>Samsung Galaxy 20 Ultra</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >29.990.000đ   </div>
                        </div>
                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div>

                    <div style={{ height: "400px", width: "20%" }} >
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>iPhone 11.Pro Max 64GB</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >33.990.000đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  30.000.000đ</div>
                        </div>

                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div >

                    <div style={{ height: "400px", width: "20%" }} >
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>iPhone 11.Pro Max 64GB</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >33.990.000đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  30.000.000đ</div>
                        </div>

                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div >

                    <div style={{ height: "400px", width: "20%" }} >
                        <div style={{ fontSize: "40", marginTop: "10px", paddingLeft: "10px" }}>
                            <button style={{ height: "25px", borderRadius: 5, background: "yellow", borderColor: "yellow" }}> Tra gop 0%</button>
                        </div>
                        <div className="center" style={{ paddingTop: "15px" }}>
                            <img style={{ height: "200px", width: "180px" }} src={ip11} alt="" ></img>
                        </div>
                        <div style={{ paddingTop: "15px", paddingLeft: "15px" }}>iPhone 11.Pro Max 64GB</div>
                        <div style={{ display: "flex", paddingTop: "5px", paddingLeft: "15px" }}>
                            <div style={{ color: "red", fontWeight: "bold" }} >33.990.000đ  &emsp;  </div>
                            <div style={{ textDecorationLine: 'line-through' }}>  30.000.000đ</div>
                        </div>

                        <div>
                            <div style={{ color: "#b0adac", paddingLeft: "15px", paddingTop: "5px" }} >111 đánh giá</div>
                        </div>
                    </div >
                </div>

            </div>






            <Box background="red" display="flex" justifyContent="center">
                <Box style={{ height: "100px", width: "100px" }} border={1} borderColor="primary.main" />
            </Box>

            <div style={{ width: "100%", backgroundColor: "white" }}>
                <div style={{ height: "200px", marginRight: "5%", marginLeft: "5%" }}>

                    <div style={{ display: "flex", justifyContent: "space-around", paddingTop: 20 }}>
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

export default Home;