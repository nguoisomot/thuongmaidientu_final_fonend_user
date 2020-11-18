import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import './chiTietSanPham.css'
export class BootstrapCarouselDemo extends Component {
  constructor(props) {
    super(props)
    this.onHandleLove = this.onHandleLove.bind(this)
    this.state = {
      love: false
    }
  }
  onHandleLove = () => {
    let loveBoolean = !this.state.love;
    this.setState({ love: loveBoolean });
  }

  render() {
    return (
      <>
        <div className="header-item_detail">
          < div className="details_item_left" style={{ width: '444px', padding: '16px 16px 16px ', backgroundColor: 'white' }} >


            < div className='container-fluid' >

              < Carousel interval={1500} keyboard={false} pauseOnHover={true} >

                < Carousel.Item style={{ height: '444px', width: '444px' }}  >

                  < img style={{ height: '444px', width: '444px' }}

                    className="d-block w-100"

                    src='https://salt.tikicdn.com/cache/w1200/ts/product/69/15/24/597dfd93b3186994990d2625eaba5b49.jpg' />



                </Carousel.Item >

                < Carousel.Item style={{ height: '444px', width: '444px' }}>

                  < img style={{ height: '444px', width: '444px' }}

                    className="d-block w-100"

                    src='https://salt.tikicdn.com/cache/w1200/ts/product/e3/96/24/c003c8ff4c0b7ed4f04bb3e2476672dd.jpg' />



                </Carousel.Item >

                < Carousel.Item style={{ height: '444px', width: '444px' }}>

                  < img style={{ height: '444px', width: '444px' }}

                    className="d-block w-100"

                    src='https://salt.tikicdn.com/cache/w1200/ts/product/39/3e/93/d10ec3ef26209ec5b83d9733579075e8.jpg' />


                </Carousel.Item >

              </Carousel >

            </div >

          </div >

          <div className="details_item_right">
            <h4 style={{ fontSize: '26px', fontWeight: '200' }}>Điện Thoại Samsung Galaxy M31 (128GB/6GB) - Hàng Chính Hãng</h4>
            <div className="summary-details_item">
              <div className="summary-left">
                <p style={{ fontSize: '28px', fontWeight: 'bold' }}>5.190.000 ₫</p>
                <div className="love_item" onClick={this.onHandleLove}>
                  <img src={this.state.love ? "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-liked.svg" : "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg"} />
                </div>
                <div className="details_item-add_to_cart">
                  <p style={{ fontWeight: '500', marginTop: '24px', marginBottom: '10px' }}>Số Lượng</p>
                  <input type="number" id="quantity" name="quantity" min="1" max="5" value='1' />
                  <button className="details_item-btn_buy">
                    Chọn Mua
            </button>
                </div>

              </div>
              <div className="summary-right">
                <div className="seller-info">
                  <div style={{ fontSize: '14px' }}>Cam kết chính hiệu bởi</div>
                  <div className="icon-route-shop">
                    <img src="https://salt.tikicdn.com/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png" style={{ width: '44px', height: "44px" }} />
                    <div>
                      <a className="seller-route">
                        <span style={{ display: 'block', fontWeight: 'bold', fontSize: '16px' }}>Tiki Trading</span>
                        <span style={{ color: 'rgb(13, 92, 182)', fontWeight: 'bold', fontSize: '14px' }}>Xem Shop</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cam_ket">
                  <div>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/compensation.svg" />
                    <span>
                      Hoàn tiền
                    <br />
                    111%
                    <br />
                     nếu giả
                  </span>
                  </div>
                  <div>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/guarantee.svg" />
                    <span>
                      Mở hộp
                    <br />
                    kiểm tra
                    <br />
                    nhận hàng
                  </span>
                  </div>
                  <div>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/refund.svg" />
                    <span>
                      Đổi trả trong
                    <br />
                     30 ngày
                     <br />
                     nếu sp lỗi
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-details_item">
          <h3>THÔNG TIN CHI TIẾT</h3>
          <div className="content_detail_info_item">
            <div >
              <div className="td-title">Thương hiệu</div>
              <div className="td_mo_ta">Samsung</div>
            </div>
            <div>
              <div className="td-title">Xuất xứ thương hiệu	</div>
              <div className="td_mo_ta">Hàn Quốc</div>
            </div>
            <div>
              <div className="td-title">Xuất xứ	</div>
              <div className="td_mo_ta">Việt Nam / Hàn Quốc / Ấn Độ / Trung Quốc,...</div>
            </div>
            <div>
              <div className="td-title">Model</div>
              <div className="td_mo_ta">M31</div>
            </div>
            <div>
              <div className="td-title">Phụ kiện đi kèm	</div>
              <div className="td_mo_ta">Máy, Sạc, Sách Hướng Dẫn, Hộp</div>
            </div>
          </div>
        </div>

      </>
    )

  }

}

export default BootstrapCarouselDemo 