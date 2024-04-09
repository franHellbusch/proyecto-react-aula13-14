import "./Header.css";
import LogoIcon from "../../assets/icons/Logo-icon.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='HeaderContainer'>
      <div className='HeaderTitle'>
        <img src={LogoIcon} alt='Logo icon' />
        <h1>Furniro</h1>
      </div>
      <nav className='HeaderNavigation'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
      </nav>
      <div className='HeaderIconLinks'>
        <Link to='/'>
          <PermIdentityIcon />
        </Link>
        <Link to='/'>
          <SearchIcon />
        </Link>
        <Link to='/'>
          <FavoriteBorderOutlinedIcon />
        </Link>
        <Link to='/cart'>
          <ShoppingCartOutlinedIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
