import react,{Component} from 'react'
import QuanLyTaiKhoan from './quanLyTaiKhoan'
import ThongTinTaiKhoan from './ThongTinTaiKhoan/thongTinTaiKhoan'
import ThongBaoCuaToi from './ThongBaoCuaToi/thongbaocuatoi'
import QuanLyDonHang from './QuanLyDonHang/quanLyDonHang'
import SanPhamDaXem from './ItemsDaXem/items_da_xem'
import ListLove from './ListLove/listLove'
import SoDiaChi from './SoDiaChi/soDiaChi.js'
export default class IndexQuanLyTaiKhoan extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      
      <QuanLyTaiKhoan>
        <ListLove/>
      </QuanLyTaiKhoan>
      
    )
  }
}