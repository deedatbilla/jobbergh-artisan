import React from "react";
import doc from '../../../images/PHONE.png';

const Section2 = () => {
  return (
    <section class="bg-white wide-tb-100 mb-spacer-md">
    <div class="container">          
      {/* <!-- Heading Main --> */}
      <div class="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
        <h1 class="heading-main">
          <span>Who we are</span>
          About Us
        </h1>
      </div>
      {/* <!-- Heading Main --> */}

      <div class="row wow fadeInUp" data-wow-duration="0" data-wow-delay="0.2s">
          <div class="col-lg-8">
            {/* <!-- Blockquote Start --> */}
            <div class="about-bg bg-sky-blue">
              <div class="row d-flex align-items-end">                    
                <div class="col-12 pt-5 order-sm-12 col-sm-6">
                  <blockquote class="blockquote style-one">
                    <p class="mb-0">I'm a greater believer in luck and I find the harder I work the more I have of it</p>
                    <footer class="blockquote-footer"><cite title="Source Title">Thomas Jefferson</cite></footer>
                  </blockquote>
                </div>
                <div class="col-12 mb-0 order-sm-1 col-sm-6">
                  <img src={doc} alt=""/>
                </div>
              </div>
            </div>
            {/* <!-- Blockquote Start --> */}
          </div>

          {/* <!-- Spacer For Medium --> */}
          <div class="w-100 d-none d-sm-block d-lg-none spacer-60"></div>
          {/* <!-- Spacer For Medium --> */}

          {/* <!-- Right Text Start --> */}
          <div class="col-lg-4">
            <div class="align-self-stretch h-100 align-items-center d-flex bg-with-text">
            Jobbergh is an initiative of Onpoint Ghana. As a company, we are committed to the betterment of
              various human classes through the advancement of peculiar initiatives that on the whole make human existence better
            </div>
          </div>
          {/* <!-- Right Text Start --> */}
      </div>

      {/* <div class="row text-center mobile-100">
        <div class="col-sm-12">
          <div class="spacer-50"></div>
          <a href="#" class="btn-theme bg-navy-blue">Request Quote <i class="icofont-rounded-right"></i></a>
          <a href="#" class="ml-5 link-oragne icon-left play-video"><i class="icofont-play"></i> Watch Our Short Video</a>
        </div>
        <div class="video-box">
         
            <div class="close-video">
                <i class="fa fa-times"></i>
            </div>
          
        </div>
       
      </div> */}
    </div>
  </section>
  );
};

export default Section2;
