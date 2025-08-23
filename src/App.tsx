// import Background from "./background";
import MainProfileClick from "./Buttons&Icons/MainProfileClick";

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
      <MainProfileClick />
    </div>
  );
}

export default App;
