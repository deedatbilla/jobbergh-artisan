import React from 'react'
import barber from '../../../images/CAPENTER copy.png';

const WhyLayout = () => {
  return (
    <section class="bg-white wide-tb-100 bg-wave">
      <div class="container pos-rel">
        <div class="row">
          <div class="img-business-man">
            <img src={barber}  width={375} height={590} alt=""/>
          </div>
          {/* <!-- Heading Main --> */}
          <div class="col-sm-12">
            <h1 class="heading-main wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <span>Our Goodness</span>
              What Makes Us Special
            </h1>
          </div>
          {/* <!-- Heading Main --> */}
          <div class="col-md-8 ml-auto why-choose wow fadeInRight" data-wow-duration="0" data-wow-delay="0.6s">
              <div class="row">
                {/* <!-- Icon Box 2 --> */}
                <div class="col-12 col-lg-6">              
                  <div class="icon-box-2">
                    <div class="media">
                        <div class="service-icon">
                            <i class="icofont-id"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4 class="h4-md">Trusted Franchise</h4>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                        </div>
                    </div>
                  </div>              
                </div>
                {/* <!-- Icon Box --> */}

                {/* <!-- Icon Box 2 --> */}
                <div class="col-12 col-lg-6">              
                  <div class="icon-box-2">
                    <div class="media">
                        <div class="service-icon">
                            <i class="icofont-live-support"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4 class="h4-md">Customer Support</h4>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                        </div>
                    </div>
                  </div>              
                </div>
                {/* <!-- Icon Box --> */}

                {/* <!-- Spacer For Medium --> */}
                <div class="w-100 spacer-60 d-none d-md-none d-lg-block d-sm-none"></div>
                {/* <!-- Spacer For Medium --> */}

                {/* <!-- Icon Box 2 --> */}
                <div class="col-12 col-lg-6">              
                  <div class="icon-box-2">
                    <div class="media">
                        <div class="service-icon">
                            <i class="icofont-history"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4 class="h4-md">Reliability & Punctuality</h4>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                        </div>
                    </div>
                  </div>              
                </div>
                {/* <!-- Icon Box --> */}

                {/* <!-- Icon Box 2 --> */}
                <div class="col-12 col-lg-6">              
                  <div class="icon-box-2">
                    <div class="media">
                        <div class="service-icon">
                            <i class="icofont-briefcase-1"></i>
                        </div>
                        <div class="service-inner-content media-body">
                            <h4 class="h4-md">Consulting Services</h4>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.</p>
                        </div>
                    </div>
                  </div>              
                </div>
                {/* <!-- Icon Box --> */}
              </div>

              {/* <div class="col-sm-12 text-center">
                <div class="spacer-50">
                </div>
                <a href="#" class="btn-theme bg-navy-blue">Request Quote <i class="icofont-rounded-right"></i></a>
                <div class="spacer-30">
                </div>
              </div> */}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default WhyLayout
