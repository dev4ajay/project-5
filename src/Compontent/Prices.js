import React from 'react'

function Prices() {
  return (
    <div className='prices' >
        <div className='containers'>
            <div className='row'>
                <div className='col-4'>
                    <div className='prices_img'>
                    <img src={require("../image/pizza4.png")} style={{width:'400px',     position: 'relative'
    ,left: '75px'}}></img>
                    </div>
                    <div className='price_head'>
                  <h1 className='price_heading'>Pizza Margeritta</h1>
                  <p className='price_text'>
                  It Lorem Ipsum -less normal distribution <br/>of letters, as opposed to using 'Content'<br/> here,                    </p>
                  <p className='price_rs'>$50.00</p>
                  
                  <div className='banner_btn'>
              <a href=''className='btn btn-group'>ORDER NOW</a>
            </div>
                  </div>
                  
                </div>

                <div className='col-4'>
                    <div className='prices_img'>
                    <img src={require("../image/pizza5.png" )} style={{width:'400px',     position: 'relative'
    ,left: '75px'}}></img>
                    </div>
                    <div className='price_head'>
                  <h1 className='price_heading'>Pizza Margeritta</h1>
                  <p className='price_text'>
                  It Lorem Ipsum -less normal distribution <br/>of letters, as opposed to using 'Content'<br/> here,             </p>
                  <p className='price_rs'>$58.00</p>
                  <div className='banner_btn'>
              <a href=''className='btn btn-group'>ORDER NOW</a>
            </div>
                  </div>
                </div>
                <div className='col-4'>
                    <div className='prices_img'>
                    <img src={require("../image/pizza6.png")} style={{width:'400px',     position: 'relative'
    ,left: '75px'}}></img>
                    </div>
                    <div className='price_head'>
                  <h1 className='price_heading'>Pizza Margeritta</h1>
                  <p className='price_text'>
                  It Lorem Ipsum -less normal distribution <br/>of letters, as opposed to using Content '<br/>here,         
                  </p>
                  <p className='price_rs'>$180.00</p>
                  <div className='banner_btn'>
              <a href=''className='btn btn-group'>ORDER NOW</a>
            </div>
                  </div>
                </div>
                

            </div>

           <div className='hero_pizza'>
           <div className='col-4'>
                    <div className='prices_img'>
                    <img src={require("../image/pizza4.png")} style={{width:'400px',     position: 'relative'
    ,left: '75px'}}></img>
                    </div>
                    <div className='price_head'>
                  <h1 className='price_heading'>Pizza Margeritta</h1>
                  <p className='price_text'>
                  It Lorem Ipsum -less normal distribution <br/>of letters, as opposed to using Content '<br/>here,         
                  </p>
                  <p className='price_rs'>$120.00</p>
                  <div className='banner_btn'>
              <a href=''className='btn btn-group'>ORDER NOW</a>
            </div>
                  </div>
                </div>
                <div className='col-4'>
                    <div className='prices_img'>
                    <img src={require("../image/pizza6.png")} style={{width:'400px',     position: 'relative'
    ,left: '75px'}}></img>
                    </div>
                    <div className='price_head'>
                  <h1 className='price_heading'>Pizza Margeritta</h1>
                  <p className='price_text'>
                  It Lorem Ipsum -less normal distribution <br/>of letters, as opposed to using Content '<br/>here,         
                  </p>
                  <p className='price_rs'>$220.00</p>
                  <div className='banner_btn'>
              <a href=''className='btn btn-group'>ORDER NOW</a>
            </div>
                  </div>
                </div>
                <div className='col-4'>
                    <div className='prices_img'>
                    <img src={require("../image/pizza5.png")} style={{width:'400px',     position: 'relative'
    ,left: '75px'}}></img>
                    </div>
                    <div className='price_head'>
                  <h1 className='price_heading'>Pizza Margeritta</h1>
                  <p className='price_text'>
                  It Lorem Ipsum -less normal distribution <br/>of letters, as opposed to using Content '<br/>here,         
                  </p>
                  <p className='price_rs'>$380.00</p>
                  <div className='banner_btn'>
              <a href=''className='btn btn-group'>ORDER NOW</a>
            </div>
                  </div>
                </div>

            </div> 
        </div>
        
    </div>
  )
}

export default Prices