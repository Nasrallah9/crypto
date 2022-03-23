import React from "react";
import { useQuery } from "react-query";
import { GLOBAL_STATE, TRENDING_COINS } from "../Apis";
import axios from "axios";
import GlobalState from "../components/GlobalState";

import Loader from "../components/Loader";
import Card from "../components/Card";

const fetchGlobalState = () => {
  return axios.get(GLOBAL_STATE);
};
const fetchTrendingCoins = () => {
  return axios.get(TRENDING_COINS);
};
const Home = () => {
  const { data: trending, isLoading } = useQuery(
    "Trending",
    fetchTrendingCoins,
    {
      select: (trending) => {
        return trending.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            image: item.image,
            list: [
              {
                title: "Price",
                number: item.current_price,
              },
              {
                title: "Market cap",
                number: item.market_cap,
              },
              {
                title: "Daily Change",
                number: item.price_change_percentage_24h,
              },
              {
                title: "1h Change",
                number: item.price_change_percentage_1h_in_currency,
              },
            ],
          };
        });
      },
    }
  );

  const { data: global } = useQuery("GlobalState", fetchGlobalState, {
    select: (data) => {
      const global = data.data.data;
      const globalList = [
        {
          id: 1,
          text: "Active Cryptocurrencies",
          value: global.active_cryptocurrencies,
        },
        {
          id: 2,
          text: "Total market cap",
          value: global.total_market_cap.usd,
        },
        {
          id: 3,
          text: "Markets",
          value: global.markets,
        },
        {
          id: 4,
          text: "Total volume",
          value: global.total_volume.usd,
        },
      ];
      console.log(globalList);
      return globalList;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="home">
      <div className="container">
        <h3>Global State</h3>
        <GlobalState list={global} />
        <h3>Top 10 Cryptocurrencies in The world</h3>
        {/* <Trending list={trending} /> */}
        <div className="trending">
          {trending?.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
