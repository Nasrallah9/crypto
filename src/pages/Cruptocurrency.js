import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SINGLE_CRYPTO } from "../Apis";
import Loader from "../components/Loader";
import Currency from "../components/Currency";
import { useGlobalContext } from "../context";
import GlobalState from "../components/GlobalState";
import Chart from "../components/Chart";
import Description from "../components/Description";

const fetchSingleCoin = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(SINGLE_CRYPTO(id));
};

const Cruptocurrency = () => {
  const { currency } = useGlobalContext();
  const params = useParams();
  const id = params.crypid;
  const { data, isLoading } = useQuery(["singleCoin", id], fetchSingleCoin, {
    select: (data) => {
      const dat = data.data;
      return {
        id: dat.id,
        name: dat.name,
        description: dat.description.en,
        image: dat.image.small,
        lastUpdata: dat.last_updated,
        list: [
          {
            text: "current price",
            value: dat.market_data.current_price[currency.value],
          },
          {
            text: "total volume",
            value: dat.market_data.total_volume[currency.value],
          },
          {
            text: "price change in 24h ",
            value: dat.market_data.price_change_percentage_24h,
          },
          {
            text: "price change in 7 day",
            value: dat.market_data.price_change_percentage_7d,
          },
          {
            text: "market cap change in 24h",
            value: dat.market_data.market_cap_change_percentage_24h,
          },
        ],
      };
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="single-cryp">
      <div className="header">
        <div className="coin-logo">
          <img src={data.image} alt="" />
          <h3>{data.name}</h3>
        </div>
        <Currency />
      </div>
      <h4 className="date">{new Date(data?.lastUpdata).toUTCString()}</h4>
      <GlobalState list={data.list} precentage={true} />
      <Chart coin={data.id} />
      <div className="desc">
        <h4>About {data.name}</h4>
        {data?.description ? (
          <Description data={data.description} />
        ) : (
          <p>No Available data</p>
        )}
      </div>
    </div>
  );
};

export default Cruptocurrency;
