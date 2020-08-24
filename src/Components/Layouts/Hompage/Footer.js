import React from "react";

const Footer = () => {
  return (
  

    <footer class="wide-tb-70 bg-sky-blue pb-0">
      <div class="container">
        <div class="row">
          {/* <!-- Column First --> */}
          <div class="col-lg-3 col-md-6">
            <div class="logo-footer">
              <img src="images/logo_footer.png" alt="" />
            </div>
           <h1>Jobbergh</h1>

            <h3 class="footer-heading">We're Social</h3>
            <div class="social-icons">
              <a href="https://www.facebook.com/LSWGhana/?ref=py_c">
                <i class="icofont-facebook"></i>
              </a>
              <a href="https://twitter.com/lswghana?lang=en">
                <i class="icofont-twitter"></i>
              </a>
              <a href="https://www.instagram.com/lswghana/?hl=en">
                <i class="icofont-instagram"></i>
              </a>
            </div>
          </div>
          {/* <!-- Column First --> */}

          {/* <!-- Column Second --> */}
          <div class="col-lg-3 col-md-6">
            <h3 class="footer-heading">Company</h3>
            <div class="footer-widget-menu">
              <ul class="list-unstyled">
                <li>
                  <a href="#">
                    <i class="icofont-simple-right"></i> <span>Privacy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-simple-right"></i> <span>About us</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-simple-right"></i> <span>News</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-simple-right"></i> <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-simple-right"></i> <span>Contacts</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-simple-right"></i> <span>Support</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
          {/* <!-- Column Second --> */}

          {/* <!-- Column Third --> */}
          <div class="col-lg-3 col-md-6">
            <h3 class="footer-heading">Get In Touch</h3>
            <div class="footer-widget-contact">
              <div class="media mb-3">
                <i class="icofont-google-map mr-3"></i>
                <div class="media-body">Olympics Street 101, Caprice, Accra-Ghana
</div>
              </div>
              <div class="media mb-3">
                <i class="icofont-smart-phone mr-3"></i>
                <div class="media-body">
                  <div>+233 55 1844848</div>
                  {/* <div>+1 (408) 786 - 5227 </div> */}
                </div>
              </div>
              <div class="media mb-3">
                <i class="icofont-ui-email mr-3"></i>
                <div class="media-body">
                  <div>
                    <a href="#">info@jobbergh.com</a>
                  </div>
                  {/* <div>
                    <a href="#">support@logzee-team.com</a>
                  </div> */}
                </div>
              </div>
              {/* <div class="media mb-3">
                <i class="icofont-clock-time mr-3"></i>
                <div class="media-body">
                  <div>
                    <strong>Mon - Fri</strong>
                  </div>
                  <div>10:00 Am - 6:00 PM EST</div>
                </div>
              </div> */}
            </div>
          </div>
         
          {/* <!-- Column Third --> */}

          {/* <!-- Column Fourth --> */}
          <div class="col-lg-3 col-md-6">
            <h3 class="footer-heading">Recent Tweets</h3>
            <div class="footer-widget-tweet">
              <div class="d-flex align-items-start">
                <i class="icofont-twitter txt-ligt-gray icofont-2x"></i>
                <div class="tweet-stream"></div>
              </div>

              <div>
                <a href="https://twitter.com/lswghana?lang=en" class="btn-theme icon-left">
                  <i class="icofont-twitter"></i> Follow @twitter
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Column Fourth --> */}
        </div>
      </div>

      <div class="copyright-wrap bg-navy-blue wide-tb-30">
        <div class="container">
          <div class="row text-md-left text-center">
            <div class="col-sm-12 col-md-6 copyright-links">
              <a href="#">Privacy Policy</a> <span>|</span> <a href="#">CONTACT</a> <span>|</span> <a href="#">FAQS</a>
            </div>
            {/* <div class="col-sm-12 col-md-6 text-md-right text-center">
                Designed by <a href="#" rel="nofollow">De</a> © 2019 All Rights Reserved
          </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
