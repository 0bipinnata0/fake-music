import { Box } from "@mui/material";
import React from "react";
import RecommendList from "../../components/RecommendList";
import Slider from "../../components/Slider";

const Recommend = () => {
  const bannerList = [1, 2, 3, 4].map((item) => {
    return {
      index: item,
      imageUrl:
        "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
    };
  });

  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((item) => {
      return {
        id: item,
        picUrl:
          "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
        playCount: 17171122,
        name: "朴树、许巍、李健、郑钧、老狼、赵雷",
      };
    })
    .concat([
      {
        id: 11,
        picUrl: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        name: "Breakfast@bkristastucchio",
        playCount: 123,
      },
      {
        id: 12,
        picUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        name: "Burger@rollelflex_graphy726",
        playCount: 123,
      },
      {
        id: 13,
        picUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        name: "Camera@helloimnik",
        playCount: 123,
      },
    ])
    .reverse();
  return (
    <Box overflow="hidden">
      <Slider bannerList={bannerList}></Slider>
      <RecommendList recommendList={recommendList}></RecommendList>
    </Box>
  );
};

export default React.memo(Recommend);
