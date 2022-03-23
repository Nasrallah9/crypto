import React, { useEffect } from "react";
import Currency from "../components/Currency";
import { COIN_LIST } from "../Apis";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Cryptocur = () => {
  const { currency, page, setPage } = useGlobalContext();

  const fetchCoinList = ({ queryKey }) => {
    const [, currency, page] = queryKey;
    return axios.get(COIN_LIST(currency, page));
  };

  const { data, isLoading } = useQuery(
    ["List", currency.value, page],
    fetchCoinList,
    {
      keepPreviousData: true,
      select: (data) => {
        return data.data.map((item) => {
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

  useEffect(() => {
    setPage(1);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="crypto">
      <div className="cryp-header">
        <h3>Cryptocurrencies</h3>
        <Currency />
      </div>
      <div className="list">
        {data?.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Cryptocur;
