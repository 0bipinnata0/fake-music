import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
const getCount = (count: number) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

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
              position="top"
              actionPosition="right"
              actionIcon={
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.54)",
                    fontSize: "12px",
                  }}
                  aria-label={`info about ${item.name}`}
                >
                  <HeadphonesIcon fontSize="inherit" />
                  {getCount(item.playCount)}
                </IconButton>
              }
            />
            <ImageListItemBar
              title={item.name}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default RecommendList;
