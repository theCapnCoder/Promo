import Bonus from "./blocks/Bonus";
import Free from "./blocks/Free";
import Main from "./blocks/Main";
import Offer from "./blocks/Offer";

function App() {
  return (
    <div className="container">
      <Main />
      <Free />
      <Offer />
      <Bonus />
    </div>
  );
}

export default App;
