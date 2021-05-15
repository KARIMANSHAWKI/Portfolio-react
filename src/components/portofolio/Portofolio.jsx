import "./portofolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import {
  fullStackPortfolio,
  backEndPortfolio,
  frontEndPortfolio,
  All
} from "../../data";

export default function Portofolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "all" :
          setData(All)
          break;
          
      case "fullStack":
        setData(fullStackPortfolio);
        break;

      case "frontend":
        setData(frontEndPortfolio);
        break;

      case "backend":
        setData(backEndPortfolio);
    }
  }, [selected]);
  const items = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "fullStack",
      title: "Full Satck",
    },
    {
      id: "frontend",
      title: "Front End",
    },
    {
      id: "backend",
      title: "Back End",
    },
  ];
  return (
    <div className="portofolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {items.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
