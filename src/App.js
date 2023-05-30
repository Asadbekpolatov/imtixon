import './App.css';
import Comp from './Components/Comp/Comp';

import Navbar from './Components/Navbar/Navbar';
import Rasm from './Components/Rasm/Rasm';
import Carts from "./Components/Carts/Carts"
import Mator from './Components/Mator/Mator';
import Prav from './Components/Prav/Prav';
import Mast from './Components/Mast/Mast';
import Vrap from './Components/Vrap/Vrap';
import Locatsiya from './Components/Locatsiya/Locatsiya';
import Collection from './Components/Collection/Collection';
import Program from './Components/Program/Program';
import Accordion from "./Components/Accordion/Accordion"
import Line from "./Components/Line/Line"
import Main from './Components/Main/Main';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Rasm />
      <Comp />
      <Carts />
      <Mator />
      <Prav />
      <Mast />
      <Vrap />
      <Locatsiya />
      <Collection />
      <Program />
      <Accordion />
      <Line />
      <Main />

    </div >
  );
}

export default App;
