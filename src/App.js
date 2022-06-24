import "./styles/base.scss";
import { Header } from "./widgets/header/header";
import { Slider } from "./components/slider/slider";
import { Articles } from "./components/atricles/atricles";
import { Footer } from "./widgets/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default App;
