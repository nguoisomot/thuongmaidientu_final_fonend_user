import react, { Component } from 'react'
import './quanLyDonHang.css'
export default class QuanLyDonHang extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="thong_tin_tai_khoan">
        <h3 style={{ fontSize: '20px', fontWeight: '350', marginTop: '20px', marginBottom: '15px', height: '20px' }}>Đơn hàng của tôi</h3>
        <div className="container-info_tai_khoan order-tai_khoan">
          <div className="order-header">
            <div className="item">
              <div className="title">Mã đơn hàng</div>
              <div className="value">
                <a>760822239</a>
              </div>
            </div>
            <div className="item">
              <div className="title">Ngày mua</div>
              <div className="value">12/11/2020</div>
            </div>
            <div className="item">
              <div className="title">Tổng tiền</div>
              <div className="value">198.550 ₫</div>
            </div>
          </div>
          <div className="order-info">
            <h3 style={{ fontWeight: '350', fontSize: '24px', paddingBottom: '10px', color:'rgb(0, 127, 240)', borderBottom: '1px solid rgb(244, 244, 244)' }}>Giao hàng dự kiến vào Thứ hai, 16/11</h3>
            <div className="product">
              <img src="https://salt.tikicdn.com/cache/200x200/ts/product/86/df/a4/d5e9b5aad9f70d1830334e67de2d0fb0.png" />
              <div>
                <a className="name_item" style={{ fontWeight: 'lighter'}}>Áo khoác nam 2 lớp GOKING, vải dù ấm áp, cản gió hiệu quả, thích hợp đông và thu đông (Màu xanh đen) - Xanh đen - M</a>
                <p><span style={{fontSize:'13px'}}>Shop: </span><span style={{fontSize:'15px',fontWeight:'500'}}>GOKING</span></p>
                <div  style={{ marginTop: '10px',fontSize:'14px',fontWeight:'450', }}>169.000 ₫
</div>
                <div className="qty" style={{ fontSize: '14px', marginTop: '10px', fontWeight: 'lighter'}}>Số lượng: 1</div>
              </div>
            </div>
          </div>
          <div className="order-control">
            <button>Xem chi tiết đơn hàng</button>
          </div>
        </div>
        <div className="hoa_don">
          <table>
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Ngày mua</th>
                <th style={{width:'449px',}}>Sản Phảm</th>
                <th>Tổng tiền</th>
                <th>Trạng thái đơn hàng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a>760822239</a>
                </td>
                <td >
                  <a>12/11/2020</a>
                </td>
                <td style={{width:'449px',padding:'20px 15px'}}>Áo khoác nam 2 lớp GOKING, vải dù ấm áp, cản gió hiệu quả, thích hợp đông và thu đông (Màu xanh đen) - Xanh đen - M</td>
                <td>198.550 ₫</td>
                <td>Đang vận chuyển</td>
              </tr>
              <tr>
                <td>
                  <a>760822239</a>
                </td>
                <td >
                  <a>12/11/2020</a>
                </td>
                <td style={{width:'449px',padding:'20px 15px'}}>Áo khoác nam 2 lớp GOKING, vải dù ấm áp, cản gió hiệu quả, thích hợp đông và thu đông (Màu xanh đen) - Xanh đen - M</td>
                <td>198.550 ₫</td>
                <td>Đang vận chuyển</td>
              </tr>
              <tr>
                <td>
                  <a>760822239</a>
                </td>
                <td >
                  <a>12/11/2020</a>
                </td>
                <td style={{width:'449px',padding:'20px 15px'}}>Áo khoác nam 2 lớp GOKING, vải dù ấm áp, cản gió hiệu quả, thích hợp đông và thu đông (Màu xanh đen) - Xanh đen - M</td>
                <td>198.550 ₫</td>
                <td>Đang vận chuyển</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}