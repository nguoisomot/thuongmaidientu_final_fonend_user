import react, { Component } from 'react'
import './danhMucSanPham.css'
export default class DanhMucSanPham extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <div className="route-nganh_hang">
          <div className="content_router-nganh_hang">
            <ul className="route_link">
              <li>
                <a className="link-trang_chu">Trang Chủ</a>
              </li>
              <li>
                <a>Điện Thoại - Máy Tính Bảng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-nganh_hang">
          <div className="filter">
          <div>
            <span style={{fontSize:'18px'}}>Bộ lọc:</span>
            <div className="filter_detail"><a>CHỌN LỌC</a>
            <a>HÀNG MỚI</a>
            <a>BÁN CHẠY</a>
            <a>GIẢM GIÁ NHIỀU</a>
            <a>GIÁ THẤP</a>
            <a>GIÁ CAO</a></div>
            </div>
         <div className="find_item_nganh_hang">
           <form style={{}}>
                <input style={{ padding: '5px 7px', outline: '0px',border:'0px',fontSize:'12px'}} placeholder='Tìm kiếm trong'/>
             <button className="find_icon-nganh_hang"></button>
           </form>
         </div>
          </div>
          <div className="content_item-nganh_hang">
            <div>
              <a className="item">
                <div style={{ textAlign: 'center' }}> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/f8/be/3d/1bf91f7f46d1fff3f1b8f2e92c7e559d.jpg"
                  style={{ width: '200px', height: '200px' }}
                /> </div>
                <p style={{ fontSize: '13px', fontWeight: '400px', marginTop: '10px' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>3.290.000 đ</p>
              </a>
              <a className="item">
                <div style={{ textAlign: 'center' }}> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/f8/be/3d/1bf91f7f46d1fff3f1b8f2e92c7e559d.jpg"
                  style={{ width: '200px', height: '200px' }}
                /> </div>
                <p style={{ fontSize: '13px', fontWeight: '400px', marginTop: '10px' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>3.290.000 đ</p>
              </a>
              <a className="item">
                <div style={{ textAlign: 'center' }}> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/f8/be/3d/1bf91f7f46d1fff3f1b8f2e92c7e559d.jpg"
                  style={{ width: '200px', height: '200px' }}
                /> </div>
                <p style={{ fontSize: '13px', fontWeight: '400px', marginTop: '10px' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>3.290.000 đ</p>
              </a>
              <a className="item">
                <div style={{ textAlign: 'center' }}> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/f8/be/3d/1bf91f7f46d1fff3f1b8f2e92c7e559d.jpg"
                  style={{ width: '200px', height: '200px' }}
                /> </div>
                <p style={{ fontSize: '13px', fontWeight: '400px', marginTop: '10px' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>3.290.000 đ</p>
              </a>
              <a className="item">
                <div style={{ textAlign: 'center' }}> <img src="https://salt.tikicdn.com/cache/280x280/ts/product/f8/be/3d/1bf91f7f46d1fff3f1b8f2e92c7e559d.jpg"
                  style={{ width: '200px', height: '200px' }}
                /> </div>
                <p style={{ fontSize: '13px', fontWeight: '400px', marginTop: '10px' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>3.290.000 đ</p>
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}