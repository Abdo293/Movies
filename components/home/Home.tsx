"use client";
import { Header } from "./header/Header";
import dynamic from "next/dynamic";
import { Sercives } from "./sevices/Sercives";
import { TopRated } from "./top-rated/TopRated";
import { SecondService } from "./second-service/SecondService";
import { BestSeries } from "./best-series/BestSeries";

const Upcoming = dynamic(() => import("./upcoming/Upcoming"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div>
      <Header />
      <Upcoming />
      <Sercives />
      <TopRated />
      <SecondService />
      <BestSeries />
    </div>
  );
};

export default HomePage;
