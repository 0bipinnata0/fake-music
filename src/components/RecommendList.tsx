import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

const RecommendList: React.FC<{
  recommendList: {
    id: number;
    picUrl: string;
    playCount: number;
    name: string;
  }[];
}> = (props) => {
  const { recommendList } = props;
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        推荐歌单
      </Typography>
      <ImageList sx={{ width: "100vw", height: "60vh" }} cols={3}>
        {recommendList.map((item) => (
          <ImageListItem
            key={item.picUrl}
            sx={{
              width: "32vw",
              alignSelf: "flex-start",
              justifySelf: "center",
            }}
          >
            <img
              src={`${item.picUrl}?param=300x300`}
              srcSet={`${item.picUrl}?param=300x300`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={<span>by: {item.name + "___"}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default RecommendList;
