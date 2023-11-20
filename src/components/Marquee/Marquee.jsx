/* eslint-disable react/prop-types */
import useCurrencyInfo from '../../Hooks/useCurrencyInfo';
import './marquee.css';

const Marquee = ({
    currencyList = [],
    fromCurrency='usd'
}) => {
     const currencyData = useCurrencyInfo(fromCurrency)
  return (
    <div className="marquee-container">
      <div className="marquee-content flex">
        {/* Your marquee content goes here */}
        {currencyList.map((code)=>(
            <span className='bg-blue-400 text-white mr-8 px-2 rounded-xl' key={code}>{code.toUpperCase()}: {currencyData[code]}</span>
          ))}
      </div>
    </div>
  );
};

export default Marquee;