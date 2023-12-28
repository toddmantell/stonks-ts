import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Visibility from "@mui/icons-material/Visibility";
import Check from "@mui/icons-material/Check";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlineOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import UserContext from "../data/context/UserContext";
import { StonkType } from "../types/StonkType";
import { Tooltip } from "@mui/material";

export const MainListItems = () => (
  <React.Fragment>
    <Link to="/dashboard">
      <Tooltip title="Watchlist">
        <ListItemButton>
          <ListItemIcon>
            <Visibility />
          </ListItemIcon>
          {/* <ListItemText primary="Watch List" /> */}
        </ListItemButton>
      </Tooltip>
    </Link>
    <Link to="/undervalued">
      <Tooltip title="Undervalued">
        <ListItemButton>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          {/* <ListItemText primary="Undervalued" /> */}
        </ListItemButton>
      </Tooltip>
    </Link>
    <Link to="/addstonk">
      <Tooltip title="Add">
        <ListItemButton>
          <ListItemIcon>
            <AddCircleOutlined />
          </ListItemIcon>
          {/* <ListItemText primary="Add Company" /> */}
        </ListItemButton>
      </Tooltip>
    </Link>
    <Link to="/irr">
      <Tooltip title="IRR">
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          {/* <ListItemText primary="IRR" /> */}
        </ListItemButton>
      </Tooltip>
    </Link>
  </React.Fragment>
);

export const desktopListItems = (
  <React.Fragment>
    <Link to="/dashboard">
      <Tooltip title="Watchlist">
        <ListItemButton>
          <ListItemIcon>
            <Visibility />
          </ListItemIcon>
          <ListItemText primary="Watch List" />
        </ListItemButton>
      </Tooltip>
    </Link>
    <Link to="/undervalued">
      <Tooltip title="Undervalued">
        <ListItemButton>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          <ListItemText primary="Undervalued" />
        </ListItemButton>
      </Tooltip>
    </Link>
    <Link to="/addstonk">
      <Tooltip title="Add">
        <ListItemButton>
          <ListItemIcon>
            <AddCircleOutlined />
          </ListItemIcon>
          <ListItemText primary="Add Company" />
        </ListItemButton>
      </Tooltip>
    </Link>
    <Link to="/irr">
      <Tooltip title="IRR">
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="IRR" />
        </ListItemButton>
      </Tooltip>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (stonks: Array<StonkType>) => {
  return (
    <div style={{ overflow: "visible" }}>
      <ListSubheader component="div">Your Watchlist</ListSubheader>
      {/* 
    This is just sketching out an idea: what if below the sidebar are all of the stocks in the watch list?
    <Link to={`/stonkdetail/${stonks[0]}`} 
    */}
      {/* {stonks.length &&
        stonks.map((stonk: StonkType, index: number) => (
          <Link key={index} to={"/detail/" + stonk.symbol}>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={stonk.symbol} />
            </ListItemButton>
          </Link>
        ))} */}
    </div>
  );
};
