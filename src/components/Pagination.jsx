import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useGlobalContext } from "../context";
const Pagination = () => {
  const { page, setPage } = useGlobalContext();

  const handlePagination = (pagee) => {
    if (pagee === page) {
    } else {
      if (pagee > 5) {
        setPage(5);
      } else if (pagee < 1) {
        setPage(1);
      } else {
        setPage(pagee);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="pagination">
      <button
        onClick={() => handlePagination(page - 1)}
        className={`${page === 1 ? "active" : " "}`}
      >
        <AiOutlineLeft />
      </button>
      {pages.map((num) => {
        return (
          <button
            key={num}
            onClick={() => handlePagination(num)}
            className={`${page === num ? "active" : " "}`}
          >
            {num}
          </button>
        );
      })}
      <button
        onClick={() => handlePagination(page + 1)}
        className={`${page === 5 ? "active" : " "}`}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
