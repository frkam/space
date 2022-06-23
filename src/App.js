import "./styles/base.scss";
import { Header } from "./widgets/header/header";
import { Slider } from "./components/slider/slider";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Slider />
      </main>
    </>
  );
};

export default App;
