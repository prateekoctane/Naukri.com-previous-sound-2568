import logo from './logo.svg';
import './App.css';
import { Navbar } from "./Components/1_navbar/Navbar";
// import { Home } from "./Components/home/Home";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
