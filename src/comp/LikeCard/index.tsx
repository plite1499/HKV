import css from "./LikeCard.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";
import Box from "@mui/material/Box";

const LikeCard = (props) => {
  const { name, tag, onClick, icon, remove } = props;

  return (
    <>
      <Card
        sx={{
          width: 250,
          maxWidth: 345,
          background: "rgb(15, 18, 20)",
          // border: "1px solid #7f89b5",
          transition: "opacity 0.3s ease",
          "&:hover": {
            width: 248,
            opacity: 0.9,
            boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/profileicon/${icon}.png`}
            alt="/"
          />
          <CardContent>
            <Typography
              gutterBottom
              fontSize={23}
              component="div"
              sx={{ color: "#e0e0e0" }}
            >
              {name}
            </Typography>
            <Typography sx={{ color: "#a0a0a0", paddingBottom: "10px" }}>
              #{tag}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                onClick={onClick}
                sx={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "opacity 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.5,
                  },
                }}
              >
                <img src={remove} alt="heart" width="100%" height="100%" />
              </Box>
              <Link href={`/player/${name}/${tag}`}>
                <Typography
                  variant="body2"
                  color="#23ac5a"
                  fontSize={18}
                  sx={{
                    transition: "opacity 0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.5,
                    },
                  }}
                >
                  more
                </Typography>
              </Link>
            </Box>
            <Box />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default LikeCard;
