import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";

const Slider: React.FC<{
  bannerList: {
    index: number;
    imageUrl: string;
  }[];
}> = (props) => {
  const { bannerList } = props;
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1_000,
      }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {bannerList.map((banner) => (
        <SwiperSlide key={banner.index}>
          <img src={banner.imageUrl} width="100%" height="100%" alt="推荐" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
