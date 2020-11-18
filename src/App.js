import react, { Component } from 'react'
import Menu from './Components/MenuAside/menu/menu'
import MenuAside from './Components/MenuAside/menuAside'
import NganhHangBanChay from './Components/NganhHangBanChay/nganhHangBanChay'
import SanPhamDaXem from './Components/QuanLyTaiKhoan/ItemsDaXem/items_da_xem'
import DanhMucSanPham from './Components/DanhMucSanPham/danhMucSanPham'
import Footer from './Components/Footer/footer'
import ChiTietSanPham from './Components/ChiTietSanPham/chiTietSanPham'
import GioHang from './Components/GioHang/gioHang'
import TaoTaiKhoan from './Components/TaoTaiKhoan/taoTaiKhoan'
import QuanLyTaiKhoan from './Components/QuanLyTaiKhoan/index'
import './App.css'
// import Carousel from './Components/carousel/carousel'

export default class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="app">
        {/* <MenuAside />
        <NganhHangBanChay />
        <SanPhamDaXem/>
        <Footer/> */}
        {/* <DanhMucSanPham/> */}
        {/* <ChiTietSanPham/> */}
        {/* <GioHang/>
        <Footer/> */}
        <TaoTaiKhoan/>
      </div>
    )
  }
}


