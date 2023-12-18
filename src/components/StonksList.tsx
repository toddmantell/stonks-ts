import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import Stonk from "./NCAVStonk";
import ModalStonk from "./Stonk/ModalStonk";

type Stonk = {
  companyName: string;
  forwardConservativeGrahamFormulaNumber: number;
  // forwardGrahamFormulaNumber: Number,
  // futureGrowthRate: Number,
  pastConservativeGrahamFormulaNumber: number;
  // pastGrahamFormulaNumber: Number,
  // previousGrowthRate: Number,
  // grahamNumber: Number,
  latestPrice: number;
  changePercent: number;
  symbol: string;
  peRatio: number;
};

type Props = {
  stonks: Array<Stonk>;
};

export default function (props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <List
      dense
      sx={{ width: "500%", maxWidth: 800, bgcolor: "background.paper" }}
    >
      {props.stonks.map((stonk, index) => (
        <>
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleOpen()}>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${index + 1}`}
                  src={`https://storage.googleapis.com/iex/api/logos/${stonk.symbol}.png`}
                />
              </ListItemAvatar>
              <ListItemText
                id={stonk.companyName}
                primary={stonk.companyName}
                secondary={stonk.symbol}
                style={
                  stonk.forwardConservativeGrahamFormulaNumber >
                    stonk.latestPrice &&
                  stonk.pastConservativeGrahamFormulaNumber > stonk.latestPrice
                    ? {
                        color: "green",
                        fontWeight: "700",
                      }
                    : {}
                }
              />
              <ListItemText primary={stonk.latestPrice} />
            </ListItemButton>
          </ListItem>
          {index < props.stonks.length - 1 && <Divider />}
          <ModalStonk
            key={`stonk-${index}`}
            open={open}
            handleClose={handleClose}
            {...stonk}
          />
          ;
        </>
      ))}
    </List>
  );
}
