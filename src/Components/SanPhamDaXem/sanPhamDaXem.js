import react, { Component } from 'react'
import './sanPhamDaXem.css'
export default class SanPhamDaXem extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div className="san_pham_da_xem">
        <h3>SẢN PHẨM BẠN ĐÃ XEM</h3>
        <div className="content">
          <a className="link_item">
            <div><img style={{ width: '200px', height: '200px' }} src='https://salt.tikicdn.com/cache/280x280/ts/product/52/db/ed/250ed1f223e0711ac9f3ea93ade7074d.jpg' /></div>
            <p className="title_item">Điện Thoại iPhone 7 128GB - Hàng Chính Hãng VNA</p>
            <p className="price">2.990.000đ</p>
          </a>
          <a className="link_item">
            <div><img style={{ width: '200px', height: '200px' }} src='https://salt.tikicdn.com/cache/280x280/ts/product/52/db/ed/250ed1f223e0711ac9f3ea93ade7074d.jpg' /></div>
            <p className="title_item">Điện Thoại iPhone 7 128GB - Hàng Chính Hãng VNA</p>
            <p className="price">2.990.000đ</p>
          </a>
          <a className="link_item">
            <div><img style={{ width: '200px', height: '200px' }} src='https://salt.tikicdn.com/cache/280x280/ts/product/52/db/ed/250ed1f223e0711ac9f3ea93ade7074d.jpg' /></div>
            <p className="title_item">Điện Thoại iPhone 7 128GB - Hàng Chính Hãng VNA</p>
            <p className="price">2.990.000đ</p>
          </a>
          <a className="link_item">
            <div><img style={{ width: '200px', height: '200px' }} src='https://salt.tikicdn.com/cache/280x280/ts/product/52/db/ed/250ed1f223e0711ac9f3ea93ade7074d.jpg' /></div>
            <p className="title_item">Điện Thoại iPhone 7 128GB - Hàng Chính Hãng VNA</p>
            <p className="price">2.990.000đ</p>
          </a>
          <a className="link_item">
            <div><img style={{ width: '200px', height: '200px' }} src='https://salt.tikicdn.com/cache/280x280/ts/product/52/db/ed/250ed1f223e0711ac9f3ea93ade7074d.jpg' /></div>
            <p className="title_item">Điện Thoại iPhone 7 128GB - Hàng Chính Hãng VNA</p>
            <p className="price">2.990.000đ</p>
          </a>
        </div>
      </div>
    )
  }
}