import Bonus from "./blocks/Bonus";
import Discount from "./blocks/Discount";
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
      <Discount />
    </div>
  );
}

export default App;
