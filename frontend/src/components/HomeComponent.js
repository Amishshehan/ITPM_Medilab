import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGoogleMaps } from "react-hook-google-maps";
import { Pagination } from "swiper";

import "./assets/css/style.css";
import "./assets/js/main.js";

import 'swiper/swiper-bundle.min.css'


import Dept1 from './assets/img/s1.png'
import Dept2 from './assets/img/s2.png'
import Dept3 from './assets/img/s3.png'
import Dept4 from './assets/img/s4.png'
import Slide1 from './assets/img/slide/slide-1.jpg';
import Slide2 from './assets/img/slide/slide-2.jpg';
import Slide3 from './assets/img/slide/slide-3.jpg';
import Author from './assets/img/author-image.jpg';
import Testimonials1 from './assets/img/testimonials/testimonials-1.jpg';
import Testimonials2 from './assets/img/testimonials/testimonials-2.jpg';
import Testimonials3 from './assets/img/testimonials/testimonials-3.jpg';
import Testimonials4 from './assets/img/testimonials/testimonials-4.jpg';
import Testimonials5 from './assets/img/testimonials/testimonials-5.jpg';

function Home(props) {
  const { ref } = useGoogleMaps(
    "AIzaSyABunbh8m8riuy6plY0ijHPzMtKx_Y4pe4",

    {
      center: { lat: 6.915437, lng: 79.972468 },
      zoom: 13
    }
  ); 

  return (
    
    <div>
      <section id="hero">

        <div id="carouselExampleControls" class="carousel slide carousel-fade " data-ride="carousel" data-aos="fade-up">
          <div class="carousel-inner">
            <div class="carousel-item active" style={{ backgroundImage: "url(" + Slide1 + ")" }}>

            </div>
            <div class="carousel-item" style={{ backgroundImage: "url(" + Slide2 + ")" }}>

            </div>
            <div class="carousel-item" style={{ backgroundImage: "url(" + Slide3 + ")" }}>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>
      {/* =================================================================================================================================================== */}
      <section class="department_section layout_padding">
        <div class="department_container" data-aos="fade-up">
          <div class="container ">
            <div class="heading_container heading_center">
              <div class="section-title">
                <h2>
                  Our Departments
                </h2>
              </div>

            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="box ">
                  <div class="img-box">
                    <img src={Dept1} />
                  </div>
                  <div class="detail-box">
                    <h5>
                    Heart Centre
                    </h5>
                    <p>
                    Medilab Heart Center is renowned to be the most trusted place for matters of the heart. We provide comprehensive cardiac care from state-of-the art Heart Screening Packages to Bypass Surgery. Trust us with your heart and we will take good care of it.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box ">
                  <div class="img-box">
                    <img src={Dept2} />
                  </div>
                  <div class="detail-box">
                    <h5>
                    Dental Unit
                    </h5>
                    <p>
                    The Dental unit of Medilab center is committed to delivering a high level of care to all patients. International benchmarks and standards are adhered to, providing the highest quality of service. A full range of oral care services for patients of all age groups are thereby offered by a team of well experienced medical personnel.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box ">
                  <div class="img-box">
                    <img src={Dept3} />
                  </div>
                  <div class="detail-box">
                    <h5>
                    Mother and Baby Care Unit
                    </h5>
                    <p>
                    Throughout the pregnancy and after childbirth, individual care and attention is given to both mother and the baby by our specialized nursing staff. We offers leading edge pre and postnatal care, both via technology and in person.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box ">
                  <div class="img-box">
                    <img src={Dept4} />
                  </div>
                  <div class="detail-box">
                    <h5>
                    Skin Care Centre
                    </h5>
                    <p>
                    The skin – it’s the largest organ of your body. It’s your visible health detector, and it’s very much a part of your individuality. And yet, only a few of us take care of our skin as we should. This results in a variety of health and beauty related skin issues. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <div className="section-title">
            <h2>About Us</h2>
          </div>
      <section id="about" data-aos="fade-up">
      
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 ">
              <div class="about-info ">
                <h2 class="wow fadeInUp" data-wow-delay="0.6s">Welcome to Medilab</h2>
                <div class="wow fadeInUp" data-wow-delay="0.8s">
                  <p>Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.</p>
                  <p>Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
                </div>
                <figure class="profile wow fadeInUp" data-wow-delay="1s">
                  <img src={Author} class="img-responsive" alt="" />
                  <figcaption>
                    <h3>Dr. Neil Jackson</h3>
                    <p>General Principal</p>
                  </figcaption>
                </figure>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services services">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Services</h2>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">

            <SwiperSlide>
              <div className="row">
                <div className="col-lg-10 col-md-12 icon-box shadow-sm p-3 mb-5 bg-body rounded" >
                  <div className="icon"><i class="fas fa-heartbeat"></i></div>
                  <h4 className="title"><a href="">Angiography</a></h4>
                  <p className="description">X-ray examination of arteries and veins with a contrast medium to differentiate them from surrounding organs. The contrast medium is introduced through a catheter to show the blood vessels and the structures they supply inc. of organs. This application is used to detect the blocks of the coronary artery of the heart.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-10 col-md-12 icon-box shadow-sm p-3 mb-5 bg-body rounded" >
                  <div className="icon"><i class="fas fa-ambulance"></i></div>
                  <h4 className="title"><a href="">Ambulance</a></h4>
                  <p className="description">Efficiency, speed and professionalism is key with our ambulance service, all ambulances are state of the art mobile ICUs and with its medical squad offers services such as Patient transfers and pickups, event coverage and medical evacuation by air.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-10 col-md-12 icon-box shadow-sm p-3 mb-5 bg-body rounded" >
                  <div className="icon"><i class="fas fa-assistive-listening-systems"></i></div>
                  <h4 className="title"><a href="">Audiology Clinic</a></h4>
                  <p className="description">Hearing difficulty can affect the quality of your life, health, relationship & career, It is crucial to spot a hearing difficulty as soon as possible Since treatments are often more beneficial if started early. We assure the best audio-logical diagnostic, rehabilitation services From Audiology unit of Medilab center</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-10 col-md-12 icon-box shadow-sm p-3 mb-5 bg-body rounded" >
                  <div className="icon"><i class="fas fa-procedures"></i></div>
                  <h4 className="title"><a href="">Electromyography (EMG)</a></h4>
                  <p className="description">The use of an instrument, which records electric currents generated in an active muscle. A concentric needle electrode is inserted into voluntary muscle and the amplified recording is viewed on an oscilloscope and heard through a speaker.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-10 col-md-12 icon-box shadow-sm p-3 mb-5 bg-body rounded" >
                  <div className="icon"><i class="fas fa-heartbeat"></i></div>
                  <h4 className="title"><a href="">Exercise ECG</a></h4>
                  <p className="description">The patient undergoes a standardized (Bruce) protocol on increasing exercise with continuous 12 lead ECG and blood preasure monitoring and watches for depressions. This is used to diagnose IHD (Ischemic Heart Disease), assessment of exercise tolerance etc.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-10 col-md-12 icon-box shadow-sm p-3 mb-5 bg-body rounded" >
                  <div className="icon"><i class="fas fa-comment-dots"></i></div>
                  <h4 className="title"><a href="">Speech Therapy</a></h4>
                  <p className="description">Treatment for speech disorders in communication, swallowing and cognitive problems are taken care of. Additionally, speech treatments are given for patients who are recovering from surgery, oral cancer, stroke, traumatic brain injury etc.</p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>        
      </section>

      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Testimonials</h2>
          </div>

          <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="50">
            <div class="swiper-wrapper">

              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        It was a very comforting and homelike atmosphere here with all the Nurses. I know my baby was in safe hands and they made it easy for me to go through this tough time with the baby, I am thankful to my Dr. Reshma for helping me get this beautiful angel.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials2} class="testimonial-img" />
                      <h3>Lara Wilsson</h3>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Good services from 8th floor staff. Special thanks to sister Sissa, Sister Vanita and sister Priyanka. Great doctors and Mansubhani mam and Fazal sir.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials1} class="testimonial-img" />
                      <h3>Karlis Jonathan</h3>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        We really appreciate the help of Dr. G. N. Mansukhani during this period of pregnancy. All staff on 8th floor is very cooperative and understands requirement very well. Special thanks to Dr. Mansukhani. Dr. Mansukhani treats patients like her family members.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials3} class="testimonial-img" />
                      <h3>Jena Saul</h3>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        They were all great, treated me as if I was the only patient they had.  Dr. Post is the most caring doctor I have ever had and the only one to ever pray with me prior to surgery.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials4} class="testimonial-img" />
                      <h3>Matt Larson</h3>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        The team is very professional, friendly and helpful.  I felt I was benefiting from the most current work in the field that was specific to my injury and repair.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={Testimonials5} class="testimonial-img" />
                      <h3>Brandon Larson</h3>

                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>
      </section>   
       
      <section id="contact" class="contact">
      <div class="container" data-aos="fade-up" data-aos-delay="50">
        <div class="section-title">
          <h2>Contact</h2>
        </div>      
      </div>

      <div class="container " data-aos="fade-up" data-aos-delay="50">
        <div class="row mt-5">        

            <div class="row">
            <div class="col-md-12">
                <div class="info-box mt-0 p-2">
                <div ref={ref} style={{borderRadius:2,marginTop:0, width: 1255, height: 378 }} />
                </div>
              </div>
              <div class="col-md-4 mt-5">
                <div class="info-box mt-0">                
                <i class='bx bxs-location-plus' ></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, NY,<br/> Colombo, Sri Lanka</p>                  
                </div>
              </div>
              <div class="col-md-4 mt-5">
                <div class="info-box mt-0">
                <i class='bx bxs-envelope' ></i>
                  <h3>Email Us</h3>
                  <p>lifecare@gmail.com<br/>contact@lifecare.com</p>
                </div>
              </div>
              <div class="col-md-4 mt-5">
                <div class="info-box mt-0">
                  <i class='bx bxs-phone'></i>
                  <h3>Call Us</h3>
                  <p>+94 12 123 1234<br/>+94 12 123 4567</p>
                </div>
              </div>
            

          </div>
        </div>

      </div>
    </section>
    </div>


  );
}

export default Home;
