import react,{Component} from 'react'
import './soDiaChi.css'
export default class SoDiaChi extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="thong_tin_tai_khoan">
        <h3 style={{ fontSize: '20px', fontWeight: '350', marginTop: '20px', marginBottom: '15px', height: '20px' }}>Số địa chỉ</h3>
        <div className="container-info_tai_khoan retore">
        <div className="so_dia_chi">
          <div className="so_dia_chi-content">
            <div className="dia_chi-info">
              <div className="name" style={{marginBottom:'10px'}}>Thiên Sơn</div>
              <div className="address">
                  <span style={{fontSize:'13px',fontWeight:'350'}}>Địa chỉ: </span>Đội 5-Long Hưng, Xã Hải Phú, Huyện Hải Lăng, Quảng Trị
              </div>
                <div className="phone"><span style={{fontSize:'13px',fontWeight:'350'}}>Điện thoại: </span>0886150236</div>
            </div>
           
            
            <a className="address-edit">Chỉnh sửa</a>
              
          </div>
        </div>         
        </div>
      </div>
    )
  }
}