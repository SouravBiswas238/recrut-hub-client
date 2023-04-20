import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, EffectCoverflow } from 'swiper';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import './Ourteam.css'



const OurTeam = () => {

  //data
  const teamData = [
    {
      "id": 2,
      "image": "https://i.ibb.co/FzfT6C7/IMG-20220819-WA0030-01.jpg",

      "name": "Sumon Bala",
      "role": "Front End Developer"

    }, {
      "id": 3,
      "image": " https://i.ibb.co/Gcdr7Bx/IMG-20220324-WA0007.jpg?fbclid=IwAR0rtRclgfI3FP6pw0-LJA9hque85ifuEOxEetYSk-8K_D1FLZk2lqKQCIA",


      "name": "Sourav Biswas",
      "role": "Backend Engineer"

    },
    {
      "id": 4,
      "image": " https://i.ibb.co/0rw6KCf/Screenshot-2022-01-14-092731-1.png",


      "name": "Tanvir Ahmed",
      "role": "Team Lead"

    }, {
      "id": 5,
      "image": " https://swiperjs.com/demos/images/nature-4.jpg",

      "name": "Jahid Hasan",
      "role": "Full Stack Developer"

    }, {
      "id": 6,
      "image": " https://swiperjs.com/demos/images/nature-2.jpg",


      "name": "Hasib Alam",
      "role": "Node Js Developer"

    }
  ]
  return (
    <div className='slider-container py-16 bg-[#f3f3f3] dark:bg-[#0b1120]'>
      <div className="text-center mb-10">

        <h1 className="text-[#1C2880] dark:text-[#E2E8F0] text-[2rem] md:text-[3.5rem] leading-[3.2rem]  font-semibold mb-2">
          Meet Our Amazing Team
        </h1>
        <p className='mb-[20px] para-color text-[22px] font-semibold dark:text-[#38BDF8]'>united we stand divided we fall</p>

      </div>

      {/* //swiper js  */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        modules={[EffectCoverflow, Pagination, Navigation]}

        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >




        {
          teamData.map(team => <SwiperSlide key={team.id} className='p-4 bg-white dark:bg-[#182133]  shadow-lg'>
            <div className='bg-red h-full'>

              <img src={team?.image} alt='images' />



              <h1 className='text-[#1C2880] dark:text-[#38BDF8] font-semibold mt-2'>{team?.name}</h1>
              <h1 className='dark:text-[#E2E8F0]'>{team?.role}</h1>

            </div>

          </SwiperSlide>)
        }


      </Swiper>
    </div>
  );



};

export default OurTeam;