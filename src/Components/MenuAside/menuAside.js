import react, {Component} from 'react'
import Menu from './menu/menu'
import Carousel from './carousel/carousel'
import BannerRight from './bannerRight/bannerRight'
import './menuAside.css'
export default class MenuAside extends Component {
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <div className="container-menu_aside">
        <Menu/>
        <Carousel/>
        <BannerRight/>
      </div>
    )
  }
}