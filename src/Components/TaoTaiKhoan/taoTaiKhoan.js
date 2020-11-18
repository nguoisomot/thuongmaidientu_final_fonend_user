import react, { Component } from 'react'
import './taoTaiKhoan.css'
export default class TaoTaiKhoan extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="tao_tai_khoan">
        <div className="tao_tai_khoan-inner"><h3 style={{ fontSize: '26px', fontWeight: '350', marginBottom: '30px', height: '20px',textAlign:'center' }}>Tạo tài khoản</h3>
          <div className="form_input">
            <form>
              <div className="tao_tai_khoan-form_item">
                <label className="input-label">Họ tên</label>
                <div className="full_name">
                  <input type="text" required placeholder="Nhập họ tên" />
                </div>
              </div>
              <div className="tao_tai_khoan-form_item">
                <label className="input-label">Số điện thoại</label>
                <div className="sdt">
                  <input type="number" required placeholder="Nhập SĐT" />
                </div>
              </div>
              <div className="tao_tai_khoan-form_item">
                <label className="input-label">Email</label>
                <div className="email">
                  <input type="email" placeholder="Nhập Email" required />
                </div>
              </div>
              <div className="tao_tai_khoan-form_item">
                <label className="input-label">Ngày Sinh</label>
                <div className="birthday">
                  <input type="date" required />
                </div>
              </div>
              <div className="tao_tai_khoan-form_item">
                <label className="input-label">Địa chỉ</label>
                <div className="address">
                  <input type="text" required placeholder="Nhập địa chỉ"/>
                </div>
              </div>
              <div className="container-btn_register"><button className="btn-tao_tai_khoan">Tạo tài khoản</button></div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}