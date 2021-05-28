import "./App.css";
import CarList from "./components/CarList/CarList";
import SearchAppBar from "./components/Navbar/Navbar";
import ModalBox from "./components/ModalBox/ModalBox";
import { CarProvider } from "./components/contex";

const App = (props) => {
  return (
    <CarProvider>
      <div className={"containerFluid"}>
        <SearchAppBar />
        <ModalBox />
        <CarList />
      </div>
    </CarProvider>
  );
};

export default App;
