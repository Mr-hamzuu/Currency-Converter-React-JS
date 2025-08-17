import { useState } from "react";
import usecurrencyinfo from "./hooks/usecurrencyinfo";
import "./App.css";
import Input from "./components/Input";
function App() {
  const [amount, setamount] = useState();
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("pkr");
  const [convert, setconvert] = useState(0);

  const currencyinfo = usecurrencyinfo(from);
  const option = Object.keys(currencyinfo);

  const Swap = () => {
    setto(from);
    setfrom(to);
    setamount(convert);
    setconvert(amount);
  };
  const conversion = () => {
    setconvert(Math.round((amount * currencyinfo[to])*100)/100);
  };
  return (
    <>
      <div className="w-full h-screen background flex justify-center  items-center">
        <div className="w-full sm:w-1/2    bg-transparent backdrop-blur-sm rounded-2xl card  shadow-md shadow-gray-500 p-6 ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              conversion();
            }}
          >
            <div className="mb-3 ">
              <Input
                label="From"
                amount={amount}
                currencyoption={option}
                onCurrencyChange={(currency) => setfrom(currency)}
                selectCurrency={from}
                onamountchange={(amount) => setamount(amount)}
              />
            </div>
            <div className="absolute left-1/2 -translate-x-4 -translate-y-6">
              <button
             
                className=" bg-blue-600 p-2 active:outline-1 active:outline-gray-600 cursor-pointer font-medium text-white rounded-md"
                onClick={Swap}
              >
                Swap
              </button>
            </div>
            <div>
              <Input
                label="To"
                amount={convert}
                currencyoption={option}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to}
                onamountchange={(amount) => setamount(amount)}
                amountdisalble
              />
            </div>

            <button
              className="p-3 text-2xl w-full bg-blue-600 text-center text-white rounded-md mt-3 cursor-pointer"
              onClick={conversion}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
