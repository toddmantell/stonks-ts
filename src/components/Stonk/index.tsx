import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  companyName,
  forwardConservativeGrahamFormulaNumber,
  forwardGrahamFormulaNumber,
  futureGrowthRate,
  pastConservativeGrahamFormulaNumber,
  pastGrahamFormulaNumber,
  previousGrowthRate,
  grahamNumber,
  latestPrice,
  changePercent,
  symbol,
  peRatio,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#f3f6f4" }} aria-label={symbol}>
            <img
              src={`https://storage.googleapis.com/iex/api/logos/${symbol}.png`}
              className="stonk-attribute__logo"
              alt="stonk-logo"
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={symbol}
        subheader={companyName}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div className="stonk-attribute">
            Latest Price: <span>${latestPrice}</span> (
            <span
              style={changePercent > 0 ? { color: "green" } : { color: "red" }}
            >
              {changePercent ? changePercent : 0}%
            </span>
            )
          </div>
          <hr />
          <div className="stonk-attribute">
            PE Ratio (TTM): <span>{peRatio}</span>
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <div className="stonk-attribute">({symbol})</div>
            <hr />
            <div className="stonk-attribute">
              High({previousGrowthRate}%):{" "}
              <span
                style={
                  pastGrahamFormulaNumber > latestPrice
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                ${pastGrahamFormulaNumber}
              </span>
            </div>
            <hr />
            <div className="stonk-attribute">
              High Cons.({previousGrowthRate}%):{" "}
              <span
                style={
                  pastConservativeGrahamFormulaNumber > latestPrice
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                ${pastConservativeGrahamFormulaNumber}
              </span>
            </div>
            <hr />

            <div className="stonk-attribute">
              Low({futureGrowthRate}%):{" "}
              <span
                style={
                  forwardGrahamFormulaNumber > latestPrice
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                ${forwardGrahamFormulaNumber}
              </span>
            </div>
            <hr />
            <div className="stonk-attribute stonk-attribute__bottom">
              Low Cons.({futureGrowthRate}%):{" "}
              <span
                style={
                  forwardConservativeGrahamFormulaNumber > latestPrice
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                ${forwardConservativeGrahamFormulaNumber}
              </span>
            </div>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
