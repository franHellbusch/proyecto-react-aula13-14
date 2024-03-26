import "./Header.css";
import LogoIcon from "../../assets/icons/Logo-icon.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <header className='HeaderContainer'>
      <div className='HeaderTitle'>
        <img src={LogoIcon} alt='Logo icon' />
        <h1>Furniro</h1>
      </div>
      <nav>
        <a href=''>Home</a>
        <a href=''>Shop</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
      </nav>
      <div className='HeaderIconLinks'>
        <a href=''>
          <PermIdentityIcon />
        </a>
        <a href=''>
          <SearchIcon />
        </a>
        <a href=''>
          <FavoriteBorderOutlinedIcon />
        </a>
        <a href=''>
          <ShoppingCartOutlinedIcon />
        </a>
      </div>
    </header>
  );
}

export default Header;
