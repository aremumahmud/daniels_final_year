import "../styles/header.css";
import Logo from "./logo";
import Nav from "./nav";
import ReceptionNav from "./ReceptionNav";
import UserBar from "./user_bar";

function ReceptionHeader() {
  return (
    <div className="header">
      <Logo size={"7rem"} />
      <ReceptionNav />
      <UserBar />
    </div>
  );
}

export default ReceptionHeader;
