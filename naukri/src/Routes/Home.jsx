import { SearchBar } from "../Components/home/SearchBar";
import { TopCompaniesHiring } from "../Components/home/TopCompaniesHiring";
import { FeaturedCompanies } from "../Components/home/FeaturedCompanies";
import { DiscoverJobs } from "../Components/home/DiscoverJobs";
import { NextInterview } from "../Components/home/NextInterview";
// import { Logo } from "./Logo";
import { NaukriApp } from "../Components/home/NaukriApp";
import { Footer } from "../Components/home/Footer"

export function Home() {
    return <div>
        <SearchBar />
        <TopCompaniesHiring />
        <FeaturedCompanies />
        <DiscoverJobs />
        <NextInterview />
        <NaukriApp />
        <Footer />
        {/* <Logo/> */}
    </div>
}