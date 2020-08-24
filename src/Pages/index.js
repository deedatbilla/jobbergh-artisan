import React from "react";
import Header from "../Components/Layouts/Hompage/HomeHeader";
import FullScreenSlider from "../Components/Layouts/Hompage/FullScreenSlider";
import Section1 from "../Components/Layouts/Hompage/Section1";
import Section2 from "../Components/Layouts/Hompage/AboutUs";
import WhyLayout from "../Components/Layouts/Hompage/WhyLayout";
import Footer from "../Components/Layouts/Hompage/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <FullScreenSlider />
      <main id="body-content" style={{ overflowY: "inherit" }}>
        <Section1 />
        <WhyLayout />
        <Section2 />

        <Footer />
      </main>
      <a id="mkdf-back-to-top" href="#" class="off">
        <i class="icofont-rounded-up"></i>
      </a>
      <div class="overlay overlay-hugeinc">
        <form class="form-inline mt-2 mt-md-0">
          <div class="form-inner">
            <div class="form-inner-div d-inline-flex align-items-center no-gutters">
              <div class="col-md-1">
                <i class="icofont-search"></i>
              </div>
              <div class="col-10">
                <input class="form-control w-100 p-0" type="text" placeholder="Search" aria-label="Search" />
              </div>
              <div class="col-md-1">
                <a href="#" class="overlay-close link-oragne">
                  <i class="icofont-close-line"></i>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
