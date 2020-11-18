import react, {Component} from 'react'
import DienThoai from './DienThoai/dienThoai'
import './nganhHangBanChay.css'
export default class NganhHangBanChay extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="nganh_hang_ban_chay">
        <h3>Ngành Hàng Bán Chạy</h3>
        <div className="divider"></div>
        <DienThoai/>
        <div className="divider"></div>
        <DienThoai/>
      </div>
      
    )
  }
}