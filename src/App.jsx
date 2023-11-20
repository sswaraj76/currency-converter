import { useState } from "react";
import InputFields from "./components/InputFields";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import Marquee from "./components/Marquee/Marquee";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [message, setMessage] = useState('')

  const currencyData = useCurrencyInfo(from);

  const option = Object.keys(currencyData);

  const swapCurrency = () => {
    
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const onConvert = () => {
    if(amount >= 0){
      setMessage('')
      setConvertedAmount(amount * currencyData[to])
    } else{
      
      setConvertedAmount(0)
      setMessage('Please enter Positive value')
    }
    
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputFields
                label="From"
                amount={amount}
                onAmountChange={(am) => setAmount(am)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOption={option}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swapCurrency}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputFields
                label="To"
                amount={convertedAmount}
                onAmountChange={(cAmount) => setConvertedAmount(cAmount)}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOption={option}
                selectCurrency={to}
                amonutDisable
              />
            </div>
            <button
              onClick={onConvert}
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            <div className="mt-4 pl-2 bg-white rounded-md">
              <span className="text-red-700">{message}</span>
            </div>
          </form>
        </div>
      </div>
            
            <Marquee currencyList={option} fromCurrency={from}/>
          

    </div>
  );
}

export default App;
