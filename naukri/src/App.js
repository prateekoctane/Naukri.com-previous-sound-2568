import logo from './logo.svg';
import './App.css';
import { Navbar } from "./Components/1_navbar/Navbar";
import { SearchBar } from "./Components/home/SearchBar";
import { TopCompaniesHiring } from "./Components/home/TopCompaniesHiring";
import { FeaturedCompanies } from "./Components/home/FeaturedCompanies";
import { DiscoverJobs } from "./Components/home/DiscoverJobs";
import { NextInterview } from "./Components/home/NextInterview";
import { Logo } from "./Components/logo/Logo";
import { NaukriApp } from "./Components/home/NaukriApp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <TopCompaniesHiring/>
      <FeaturedCompanies/>
      <DiscoverJobs/>
      <NextInterview/>
      <NaukriApp/>
      {/* <Logo/> */}
    </div>
  );
}

export default App;
