import { Box } from "@mui/material";
import React from "react";
import Slider from "../../components/Slider";

const Recommend = () => {
  const bannerList = [1, 2, 3, 4].map((item) => {
    return {
      index: item,
      imageUrl:
        "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
    };
  });

  return (
    <Box>
      <Slider bannerList={bannerList}></Slider>
    </Box>
  );
};

export default React.memo(Recommend);
