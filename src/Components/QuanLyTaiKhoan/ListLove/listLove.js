import react,{Component} from 'react'
import './listLove.css'
export default class ListLove extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="thong_tin_tai_khoan">
        <h3 style={{ fontSize: '20px', fontWeight: '350', marginTop: '20px', marginBottom: '15px', height: '20px' }}>Danh sách yêu thích (3)</h3>
        <div className="list_love">
          <ul className="list_inner">
            <li className="item-list_love">
            <div className="item_inner">
            <a>
               <img src="https://salt.tikicdn.com/cache/280x280/ts/product/4d/3d/46/ac426bc5211bb58d02c010bfb04643fb.png"/>
            </a>
            <div className="item_info">
                  <a className="title" style={{fontSize:'14px'}}>Áo khoác nam cách nhiệt GOKING, ngoài vải dù ấm áp, cản gió hiệu quả, bên trong có lớp cách nhiệt chống lạnh chống nóng tốt</a>
                  <p style={{fontSize:'16px',fontWeight:'500',marginTop:'10px'}} >225.000 ₫</p>
            </div>
              </div>
              <div className="container-btn_delete"><button className="btn_delete">Xóa</button></div>
            </li>
            <li className="item-list_love">
            <div className="item_inner">
            <a>
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/69/15/24/597dfd93b3186994990d2625eaba5b49.jpg"/>
            </a>
            <div className="item_info">
                  <a className="title" style={{fontSize:'14px'}}>Áo khoác nam cách nhiệt GOKING, ngoài vải dù ấm áp, cản gió hiệu quả, bên trong có lớp cách nhiệt chống lạnh chống nóng tốt</a>
                  <p style={{fontSize:'16px',fontWeight:'500',marginTop:'10px'}} >225.000 ₫</p>
            </div>
              </div>
              <div className="container-btn_delete"><button className="btn_delete">Xóa</button></div>
            </li>
            <li className="item-list_love">
            <div className="item_inner">
            <a>
               <img src="https://salt.tikicdn.com/cache/280x280/ts/product/4d/3d/46/ac426bc5211bb58d02c010bfb04643fb.png"/>
            </a>
            <div className="item_info">
                  <a className="title" style={{fontSize:'14px'}}>Áo khoác nam cách nhiệt GOKING, ngoài vải dù ấm áp, cản gió hiệu quả, bên trong có lớp cách nhiệt chống lạnh chống nóng tốt</a>
                  <p style={{fontSize:'16px',fontWeight:'500',marginTop:'10px'}} >225.000 ₫</p>
            </div>
              </div>
              <div className="container-btn_delete"><button className="btn_delete">Xóa</button></div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}