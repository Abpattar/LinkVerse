// import Background from "./background";
import PrimarySix from "./Structures/PrimarySix";
import ProfileIcon from "./Buttons&Icons/ProfileIcon";
import NotificationIcon from "./Buttons&Icons/NotificationIcon";
import MessageIcon from "./Buttons&Icons/MessegeIcon";
import SearchBar from "./Structures/SearchBar";

function App() {
  const style = {
    display: "flex",
    justifyContent: "center",  // horizontal center
    alignItems: "center",      // vertical center
    height: "100vh",           // full viewport height
    width: "100vw"             // full viewport width
  };
  return (
    <div style={style}>
      {/* <Background /> */}
      <PrimarySix />
      <ProfileIcon />
      <NotificationIcon />
      <MessageIcon />
      <SearchBar />
    </div>
  );
}

export default App;
