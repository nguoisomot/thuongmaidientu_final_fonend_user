import react,{Component} from 'react';

export default class ThongTinTaiKhoan extends Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <div className="thong_tin_tai_khoan">
        <h3 style={{ fontSize: '20px', fontWeight: '350', marginTop: '20px', marginBottom: '15px', height: '20px' }}>Thông tin tài khoản</h3>
        <div className="container-info_tai_khoan">
          <form className="form-info_tai_khoan">
            <div className="info_tai_khoan-input">
              <label>Họ tên</label>
              <div>
                <input defaultValue="Người Số Một" />
              </div>
            </div>
            <div className="info_tai_khoan-input">
              <label>Số điện thoại</label>
              <div>
                <input defaultValue="088173556" />
              </div>
            </div>
            <div className="info_tai_khoan-input">
              <label>Email</label>
              <div>
                <input defaultValue="oneonenice@gmail.com" />
              </div>
            </div>
            <div className="info_tai_khoan-sex">
              <label>Giới tính</label>
              <div style={{ display: 'inline-block' }}>
                <input type="radio" name="gender" value="male" />
                <span>Nam</span>
                <input type="radio" name="gender" value="female" />
                <span>Nữ</span>
              </div>
            </div>
            <div className="info_tai_khoan-input">
              <label>Ngày Sinh</label>
              <div>
                <input type="date" />
              </div>
            </div>
            <div>
              <label></label>
              <button className="btn-update_tai_khoan" type="submit">Cập nhật</button>
            </div>
          </form>

          <form className="form-info_tai_khoan doi_mat_khau">
            <div className="info_tai_khoan-input">
              <label>Mật khẩu cũ</label>
              <div>
                <input placeholder="Nhập mật khẩu cũ" />
              </div>
            </div>
            <div className="info_tai_khoan-input ">
              <label>Mật khẩu mới</label>
              <div>
                <input placeholder="Mật khẩu từ 6 đến 32 ký tự" />
              </div>
            </div>
            <div className="info_tai_khoan-input">
              <label>Nhập lại</label>
              <div>
                <input placeholder="Nhập lại mật khẩu mới" />
              </div>
            </div>

            <div>
              <label></label>
              <button className="btn-update_tai_khoan" type="submit">Đổi mật khẩu</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}