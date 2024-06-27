import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
  <div class="container">
            <div class="row top pb-3">
                <div class="col-xm-12 col-sm-6 col-md-4">
                  <div class="logo text-center">
                    <div class="row">
                        <div class="col-12">
                          <img className='footer_img' src={"/assets/images/images__3_-removebg-preview.png"} width={"400px"} alt="" />
                        </div>
                    </div>
                  </div>
               </div>
                <div class="col-xm-12 col-sm-6 col-md-4 col-lg-2 footer_div">
                    <div class="links text-center mt-3">
                        <div class="footer_linkes row">
                            <div class="col-12 mb-3">
                              <p className='footer_link'>Home</p>
                              </div>
                            <div class="col-12 mb-3">
                              <p className='footer_link'>About</p>
                              </div>
                            <div class="col-12 mb-3"><p className='footer_link'>Cases</p></div>
                            <div class="col-12 mb-3"><p className='footer_link'>Features</p></div>
                            <div class="col-12 mb-3"><p className='footer_link'>Core value</p></div>
                            <div class="col-12 mb-3"><p className='footer_link'>Vision</p></div>
                            <div class="col-12 mb-3"><p className='footer_link'>Labs</p></div>
                            
                        </div>
                    </div>
               </div>
                <div class="col-xm-12 col-sm-6 col-md-4 col-lg-3">
                   <div class="mail mt-5 text-center mb-5">
                        <div class="row text-center pt-5">
                        <i class="bi bi-envelope-arrow-up-fill"></i>
                            <div class="col-12">
                                <h4>MAIL</h4>
                            </div>
                            <div class="col-12">
                                <a className='footer_link'>doublehelix@gmail.com</a>
                            </div>
                        </div>
                   </div>
               </div>
                <div class="col-xm-12 col-sm-6 col-md-4 col-lg-3">
                   <div class="location mt-5 text-center mb-5">
                        <div class="row text-center pt-5">
                        <i class="bi bi-geo-alt-fill"></i>
                          
                            <div class="col-12">
                                <h4>FIND US</h4>
                            </div>
                            <div class="col-12">
                              <p  className='footer_link'>15 street Alfouad , new cairo.</p>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
            <div class="last">
                <div class="row mt-4 pb-3">
                    <div class="col-12 text-center">
                        <span>copyright © , All Right Reserved.</span>
                    </div>
                </div>
            </div>
       </div>
</footer>
    </div>
  );
}

export default Footer;
