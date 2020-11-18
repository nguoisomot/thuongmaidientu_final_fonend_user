import react, { Component } from 'react';
import './menu.css';
import {MdSmartphone} from "react-icons/md"
import {CgScreenWide} from "react-icons/cg"
import {BiHeadphone} from "react-icons/bi"
import { MdLaptopMac} from "react-icons/md"
import { AiOutlineCamera} from "react-icons/ai"
import { CgSmartHomeCooker} from "react-icons/cg"
import { BsHouseDoorFill} from "react-icons/bs"
import { FaHamburger} from "react-icons/fa"
import { MdToys} from "react-icons/md"
import { FaIntercom} from "react-icons/fa"
import { GiTShirt} from "react-icons/gi"
import { GiSoccerBall} from "react-icons/gi"
import { FaMotorcycle} from "react-icons/fa"
import { RiEarthFill} from "react-icons/ri"
import { GiOpenBook} from "react-icons/gi"

export default class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
  }
  render() {
    return (
      <div className="container_menu">
        <ul className="list_menu">
          <li>    
            <a href=""><MdSmartphone style={{}}/> <span>Điện Thoại - Máy Tính Bảng</span> </a>
          </li>
          <li>    
            <a href=""><CgScreenWide style={{}}/> <span>Điện Tử - Điện Lạnh</span> </a>
          </li>
          <li>    
            <a href=""><BiHeadphone style={{}} /> <span>Phụ Kiện - Thiết Bị Số</span> </a>
          </li>
          <li>    
            <a href=""><MdLaptopMac style={{}} /> <span>Laptop - Thiết bị IT</span> </a>
          </li>
          <li>    
            <a href=""><AiOutlineCamera style={{}} /> <span>Máy Ảnh - Quay Phim</span> </a>
          </li>
          <li>    
            <a href=""><CgSmartHomeCooker style={{}} /> <span>Điện Gia Dụng</span> </a>
          </li>
          <li>    
            <a href=""><BsHouseDoorFill style={{}} /> <span>Nhà Cửa Đời Sống</span> </a>
          </li>
          <li>    
            <a href=""><FaHamburger style={{}} /> <span>Hàng Tiêu Dùng - Thực Phẩm</span> </a>
          </li>
          <li>    
            <a href=""><MdToys style={{}} /> <span>Đồ chơi, Mẹ & Bé</span> </a>
          </li>
          <li>    
            <a href=""><FaIntercom style={{}} /> <span>Làm Đẹp - Sức Khỏe</span> </a>
          </li>
          <li>    
            <a href=""><GiTShirt style={{}} /> <span>Thời trang - Phụ kiện</span> </a>
          </li>
          <li>    
            <a href=""><GiSoccerBall style={{}} /> <span>Thể Thao - Dã Ngoại</span> </a>
          </li>
          <li>    
            <a href=""><FaMotorcycle style={{}} /> <span>Xe Máy, Ô tô, Xe Đạp</span> </a>
          </li>
          <li>    
            <a href=""><RiEarthFill style={{}} /> <span>Hàng quốc tế</span> </a>
          </li>
          <li>    
            <a href=""><GiOpenBook style={{}} /> <span>Sách, VPP & Quà Tặng</span> </a>
          </li>
        </ul>
      </div>
    )
  }
}