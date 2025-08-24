// import Background from "./background";
import PrimarySix from "./Structures/PrimarySix";
import ProfileIcon from "./Buttons&Icons/ProfileIcon";
import NotificationIcon from "./Buttons&Icons/NotificationIcon";
import MessageIcon from "./Buttons&Icons/MessegeIcon";

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
    </div>
  );
}

export default App;
