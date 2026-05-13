import ContactBar from "../ContactBar/ContactBar";
import Navbar from "../Navbar/Navbar";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <ContactBar />
      <Navbar />
    </header>
  );
};
export default Header;
