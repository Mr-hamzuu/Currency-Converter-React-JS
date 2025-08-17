import React, { useEffect, useState } from "react";

import "./input.css";
const Input = ({
  label,
  amount=0,
  onamountchange,
  currencyoption = [],
  onCurrencyChange,
  selectCurrency = "usd",
  amountdisalble=false,
  currencydisable=false
}) => {
  return (
    <div>
      <div className="w-full h-1/2 bg-gray-50 flex justify-between p-6 rounded-2xl">
        <div className="flex flex-col gap-3 ">
          <label className="text-gray-500" htmlFor="From">
            {label}
          </label>
          <input
            placeholder="Amount"
            className="outline-0 font-medium"
            type="number"
            name=""
            id=""
            value={amount}
            disabled={amountdisalble}
            onChange={(e)=>(onamountchange && onamountchange(Number(e.target.value)))}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-gray-500" htmlFor="From">
            Currency Type
          </label>
          <select
            className="bg-gray-300 outline-0 rounded-md font-medium cursor-pointer p-1"
            name="usd"
            id=""
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyoption.map((currency) => {
              return  <option
                value={currency}
                key={currency}
                className="bg-white active:bg-white"
              >
                {currency}
              </option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
