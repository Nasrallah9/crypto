import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { EXCHANGES } from "../Apis";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../context";
import millify from "millify";

const fetchExchange = ({ queryKey }) => {
  const [, page] = queryKey;
  return axios.get(EXCHANGES(page));
};

const Exchange = () => {
  const { page, setPage } = useGlobalContext();
  const { data, isLoading } = useQuery(["exchange", page], fetchExchange);
  useEffect(() => {
    setPage(1);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  const tableHeader = [
    "Cryptocurrency",
    "Trust Score Rank",
    "Trade Volume 24h",
    "Year Established",
  ];
  return (
    <div className="exchange">
      <table>
        <thead>
          <tr>
            {tableHeader.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item, index) => {
            return (
              <tr key={index}>
                <td className="name">
                  <h5>{index + 1}. </h5>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>{item.trust_score_rank}</td>
                <td>{millify(item.trade_volume_24h_btc)}</td>
                <td> {item.year_established}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default Exchange;
