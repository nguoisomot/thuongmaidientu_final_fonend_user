import react, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className="news_letter_email">
          <div className="news_letter_email-content">
            <div className="news_letter_icon">
              <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png' style={{ width: '163px' ,marginTop:'-30px'}} />
            </div>
            <div className="news_letter_email-description" style={{ marginRight: '30px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>Đăng ký nhận bản tin Tiki</h3>
              <h5 style={{ fontSize: '18px' }}>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
</h5>
            </div>
            <div className="news_letter_email-form">
              <div className="input_email">
                <input type='email' placeholder='Địa chỉ email của bạn' />
              </div>
              <button className="btn_action_email">Đăng Ký</button>
            </div>
          </div>
        </div>
        <div className="footer_infor">
          <div className="content-footer_infor">
            <div>
              <p>HỖ TRỢ KHÁCH HÀNG</p>
              <p>Các câu hỏi thường gặp</p>
              <p>Gửi yêu cầu hổ trợ</p>
              <p>Hướng dẫn đặt hàng</p>
              <p>Phương thức vận chuyển</p>
              <p>Chính sách đổi trả</p>
              <p>Chính sách hàng nhập khẩu</p>
              <p>Hỗ trợ khách hàng: hotro@tiki.vn</p>
              <p>Hỗ trợ bảo mật security@tiki.vn</p>
            </div>
            <div>
              <p>VỀ TIKI</p>
              <p>Giới thiệu về tiki</p>
              <p>Tiki tuyển dụng</p>
              <p>Hướng dẫn đặt hàng</p>
              <p>Chính sách bảo mật và thanh toán</p>
              <p>Chính sách giải quyết và khiếu nại</p>
              <p>Điều khoản sử dụng</p>
              <p>Giới thiệu tiki xu</p>
              <p>Bán hàng doanh nghiệp</p>
            </div>
            <div>
              <p>HỢP TÁC VÀ LIÊN KẾT</p>
              <p>Quy chế hoạt động Sàn GDTMĐTp</p>
              <p>Bán hàng cùng Tiki</p>
              
            </div>
            <div>
              <p>PHƯƠNG THỨC THANH TOÁN</p>
              <div className="content_thanh_toan">
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg'/>
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg'/>
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg'/>
              </div>
              <div className="content_thanh_toan">
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg'/>
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg'/>
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg'/>
              </div>
            </div>
            <div>
              <p>KẾT NỐI VỚI CHÚNG TÔI</p>
            <div className="contact_social">
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg' style={{marginRight:'0px'}}/>
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/youtube.svg'/>
                <img src='https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png' style={{width:'32px',height:'25px'}}/>
            </div>
              <p style={{fontWeight:'bold',fontSize:'12px',marginTop:'40px'}}>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</p>
              <div><img src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png' style={{width:'134px',height:'40px',marginBottom:'10px'}}/></div>
              <div><img src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png' style={{ width: '134px', height: '40px' }}/></div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}