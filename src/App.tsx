// import Background from "./background";
import PrimarySix from "./Structures/PrimarySix";

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
    </div>
  );
}

export default App;
