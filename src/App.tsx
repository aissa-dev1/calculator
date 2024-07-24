import Container from "./components/container";
import Header from "./components/header";
import HistoryBar from "./components/historyBar";
import KeysBox from "./components/keysBox";
import SideBar from "./components/sideBar";
import View from "./components/view";
import useAccessKeys from "./hooks/use-access-keys";
import { useCalculatorKeys } from "./hooks/use-calculator-keys";

function App() {
  useCalculatorKeys();
  useAccessKeys();

  return (
    <Container>
      <div class="space-y-12">
        <Header />
        <View />
        <KeysBox />
      </div>
      <SideBar />
      <HistoryBar />
    </Container>
  );
}

export default App;
