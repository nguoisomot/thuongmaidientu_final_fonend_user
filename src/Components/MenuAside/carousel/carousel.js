import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'  
 
import 'bootstrap/dist/css/bootstrap.min.css';   
import './carousel.css' 
export class BootstrapCarouselDemo extends Component {
  render() {
    return (

      < div style={{width:'584px'}} >


        < div className='container-fluid' >

          < Carousel interval={600} keyboard={false} pauseOnHover={true} >

            < Carousel.Item style={{ 'height': "362px" }}  >

              < img style={{ 'height': "362px" }}

                className="d-block w-100"

                src='https://salt.tikicdn.com/cache/w876/ts/banner/15/fd/6b/b24b94b82f9502ee3b5e428c6533d995.jpg' />

            

            </Carousel.Item >

            < Carousel.Item style={{ 'height': "362px" }}>

              < img style={{ 'height': "362px" }}

                className="d-block w-100"

                src='https://salt.tikicdn.com/cache/w876/ts/banner/15/fd/6b/b24b94b82f9502ee3b5e428c6533d995.jpg' />

           

            </Carousel.Item >

            < Carousel.Item style={{ 'height': "362px" }}>

              < img style={{ 'height': "362px" }}

                className="d-block w-100"

                src='https://salt.tikicdn.com/cache/w876/ts/banner/15/fd/6b/b24b94b82f9502ee3b5e428c6533d995.jpg' />


            </Carousel.Item >

          </Carousel >

        </div >
      <div className="branner_carousel">
        <div style={{width:'50%',height:"181px"}}>
          <a>
              <img src='https://salt.tikicdn.com/cache/w292/ts/banner/3b/69/65/6b80ee4499ec8a6e2cff20c2ee1c476c.png'/>
          </a>
        </div>
        <div style={{width:'50%',height:"181px"}}>
          <a>
              <img src='https://salt.tikicdn.com/cache/w292/ts/banner/e0/5e/67/cc285ffb198b3e8fc6b0655e14ac0282.png'/>
          </a>
        </div>

      </div>
     
      </div >

    )

  }

}

export default BootstrapCarouselDemo 