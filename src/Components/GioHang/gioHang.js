import react, { Component } from 'react';
import './gioHang.css'
export default class GioHang extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="cart">
        <h3 style={{ fontWeight: '400', fontSize: '20px',marginBottom:'0' }}>GIỎ HÀNG <span style={{ fontSize: '16px', fontWeight: '300' }}>(1 sản phẩm)</span></h3>
        <div className="container-cart">
        <div className="cart_left">
          <div className="cart_left-inner" style={{marginTop:'10px'}}>
            
            <div className="cart-products-inner">
              {/* <a>
                <span>Shop: </span>
                <span>GOKING</span>
              </a> */}
              <div className="cart-products-details">
                <div className="cart-products-image">
                  <a>
                    <img src="https://salt.tikicdn.com/cache/200x200/ts/product/86/df/a4/d5e9b5aad9f70d1830334e67de2d0fb0.png" style={{width:'130px',height:'130px'}}/>
                  </a>
                </div>
                <div className="cart-product-detail-item">
                  <div className="cart-product-detail-title">
                    <a style={{ fontSize: '14px',  fontWeight: '500', display: 'inline-block', marginBottom: '20px'}}>Áo khoác nam 2 lớp GOKING, vải dù ấm áp, cản gió hiệu quả, thích hợp đông và thu đông (Màu xanh đen) - Xanh đen - M</a>
                    <p>
                      <span>Xóa</span>
                      <span>Để dành mua sau</span>
                    </p>
                  </div>
                  <div className="cart-product-price">
                    
                      <span style={{display:'inline-block',marginRight:'10px'}}>225.000đ</span>
                    <input type="number" id="quantity" name="quantity" min="1" max="" defaultValue="1"/>                               
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart_right">
            <div className="cart-info_user">
              <p className="dia_chi">
              <span style={{fontSize:'14px',fontWeight:'bold',fontFamily:'sans-serif'}}>Địa chỉ nhận hàng</span>
                <a style={{ fontSize: '14px', color:'#189EFF',fontWeight:'500',cursor:'pointer'}}>Thay đổi</a>
              </p>
              <p className="cart_sdt">
              <span>Thiên Sơn</span>
              <span>0533663636</span>
              </p>
              <p className="dia_chi_detail">K82/179 Nguyễn Lương Bằng (nhà ở cuối đường k82 Nguyễn Lương Bằng gần bên đường sắt, vui lòng giao hàng trước 12h trưa vì buổi chiều bận đi học), Phường Hòa Khánh Bắc, Quận Liên Chiểu, Đà Nẵng</p>
            </div>
            <div className="cart-cal_price">
              <p className="tam_tinh">
                <span>Tạm tính</span>
                <span>344.00đ</span>
              </p>
              <p className="thanh_tien">
                <span>Thành tiền</span>
                <span>344.000đ</span>
              </p>
              <p style={{ textAlign: 'end', fontSize: '13px', color:'rgb(174, 174, 174)',paddingRight:'17px',paddingBottom:'17px'}}>(Đã bao gồm VAT nếu có)</p>
            </div>
            <button className="cart-btn_thanh_toan">Tiến hành đặt hàng</button>
        </div>
        </div>
      </div>
    )
  }
}