import logo from './logo.svg';
import './App.css';
import Counter1 from './features/counter/Counter1';
import Counter from './features/counter/Counter';
import Coin from "./features/coin/Coin"
import Theme from "./features/theme/Theme"
function App() {
  return (
  <>
{/* <Counter1></Counter1> */}
<Counter></Counter>
<Coin></Coin>
<Theme></Theme>
  </>
  );
}

export default App;
