import "./style.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import logo from "./DOSTHI.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import useClickOutside from "../../helpers/clickOutside";
import UserMenu from "./userMenu";
import ForumIcon from '@mui/icons-material/Forum';

export default function Header() {
  const { user } = useSelector((user) => ({ ...user }));
  const color = "#65676b";
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const usermenu = useRef(null);

  useClickOutside(usermenu, () => {
    setShowUserMenu(false);
  });
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
          <div className="waviy">
          <span style={{ "--i": 1 }}>D</span>
          <span style={{ "--i": 2 }}>O</span>
          <span style={{ "--i": 3 }}>S</span>
          <span style={{ "--i": 4 }}>T</span>
          <span style={{ "--i": 5 }}>H</span>
          <span style={{ "--i": 6 }}>I</span>
        </div>
          </div>
        </Link>
        <div
          className="search search1"
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <SearchIcon sx={{ color: '#ff7043 ' }} />
          <input
            type="text"
            placeholder="Search Dosthi"
            className="hide_input"
          />
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu
          color={color}
          setShowSearchMenu={setShowSearchMenu}
          token={user.token}
        />
      )}
      <div className="header_middle">
        <Link to="/" className="middle_icon hover1">
          <Tooltip title="Home">
            <IconButton sx={{ color: '#ff7043 ' }} >
              <HomeIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/friends" className="middle_icon hover1">
          <Tooltip title="Friends">
            <IconButton sx={{ color: '#ff7043 ' }} >
              <PeopleAltIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Link>

        <Link to="/games" className="middle_icon hover1 ">
          <Tooltip title="Games">
            <IconButton  sx={{ color: '#ff7043 ' }} >
              <SportsEsportsIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/" className="middle_icon hover1 ">
          <Tooltip title="Videos">
            <IconButton sx={{ color: '#ff7043 ' }} >
              <VideoCameraBackIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to={"/messenger"} className="middle_icon hover1 " >
          <Tooltip title="Message">
            <IconButton sx={{ color: '#ff7043 ' }} >
              <ForumIcon sx={{ fontSize: 35 }} />
            </IconButton>
          </Tooltip>

        </Link>
      </div>
      <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>

        <div
          className={`circle_icon hover1 ${showUserMenu && "active_header"}`}
          ref={usermenu}
        >
          <div
            onClick={() => {
              setShowUserMenu((prev) => !prev);
            }}
          >
            <div style={{ transform: "translateY(2px)" }}>
              <ArrowDropDownIcon />
            </div>
          </div>

          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
}
