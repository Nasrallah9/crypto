import axios from "axios";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { HISTORCAL_CHART } from "../Apis";
import { useGlobalContext } from "../context";
import Loader from "./Loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartDays } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fetchHistorical = ({ queryKey }) => {
  const [, days, coin, currency] = queryKey;

  return axios.get(HISTORCAL_CHART(coin, days, currency));
};

const Chart = ({ coin }) => {
  const [days, setDays] = useState(1);

  const { currency } = useGlobalContext();

  const { data, isLoading } = useQuery(
    ["HISTORICAL", days, coin, currency.value],
    fetchHistorical,
    {
      select: (data) => {
        return data.data.prices;
      },
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Line
        data={{
          labels: data.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours > 12
                ? `${date.getHours() - 12} :${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()}AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              data: data?.map((coin) => coin[1]),
              label: `Price (Past ${days} Days) in ${currency.label}`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
      <div className="days">
        {chartDays.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setDays(item.value)}
              className={`${item.value === days ? "active" : ""}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Chart;
