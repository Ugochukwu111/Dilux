import { MoveRight, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ListingCard({ listing }) {
  const [priceOfListing, setPriceOfListing] = useState(formatCurrency({ convertedAmount: listing?.newPrice || 0, currencyName: "NGN" }));
  const [currency, setCurrency] = useState("NGN");

  const rates = {
    niaraToUsd: 1500,
    niaraToEur: 1600,
  };

  function formatCurrency({ convertedAmount, currencyName }) {
  let symbol;

  switch (currencyName.toUpperCase()) {
    case "USD":
      symbol = "$";
      break;
    case "EUR":
      symbol = "€";
      break;
    case "NGN":
    default:
      symbol = "₦";
      break;
  }

  // Add thousand separators
  const amountWithCommas = Number(convertedAmount).toLocaleString();

  return `${symbol}${amountWithCommas}`;
}

  /* 
  function below takes two arguements currency pairs eg NGN,USD,EUR
  and the amount  , it coverts the ammount(number || price) from NGN to the selected currency pair
  and returns an obj of the  price||ammount and the currency par the user selects 

  ==== the reason its returning an obj is to use this in a util funtion that formarts money
    using the amount and the pairs
  */
  function convertToCurrency(currencyName, amount) {
    let result = amount; 
    let convertedAmount;
    if (currencyName.toUpperCase() === "EUR") {
      convertedAmount = (amount / rates.niaraToEur).toFixed(0);
      result = { convertedAmount, currencyName };
      return result;
    } else if (currencyName.toUpperCase() === "USD") {
      convertedAmount = (amount / rates.niaraToUsd).toFixed(0);
      result = {convertedAmount, currencyName}
      return result;
    } else {
       convertedAmount = result = (amount).toFixed(0);
      return {convertedAmount, currencyName : 'NGN',}
    }

  }


  /*
   the code below might be a little confusing but it isn't,
   you would say formart currency accepts an obj but in  "handleCurrencyChange"
   it takes a call back function, well the thing is that call back function when ran  returns an obj,
   which fits the parameters its supposed to take
  */ 
  const handleCurrencyChange = (e) => {
    const value = e.target.value;
    if (value.toUpperCase() === "NGN") {
      setCurrency("NGN");
      convertToCurrency("NGN", listing?.newPrice);
      setPriceOfListing(formatCurrency(convertToCurrency("NGN", listing?.newPrice)));
    } else if (value.toUpperCase() === "USD") {
      setCurrency("USD");
      setPriceOfListing( formatCurrency( convertToCurrency("USD", listing?.newPrice) ) ) ;
    } else if (value.toUpperCase() === "EUR") {

      setCurrency("EUR");
      setPriceOfListing(formatCurrency(convertToCurrency("EUR", listing?.newPrice)));
      convertToCurrency("EUR", listing?.newPrice);
    }
  };

  useEffect(() => {
  const converted = convertToCurrency(currency, listing?.newPrice || 0);
  setPriceOfListing(formatCurrency(converted));
}, [listing, currency])

function handleBookInspection() {
  const message = `
Hi Ire, I’m interested in this property.

. location ${listing.location}
• Size: ${listing?.size}
• Price: ${priceOfListing}
• Status: ${listing?.status?.join(", ")}

How can we move forward?
  `;

  const encodedMessage = encodeURIComponent(message.trim());

  const phoneNumber = "2349012345678"; // replace with WhatsApp number (no +)

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
}

  return (
    <div key={listing?.id} className="listing-card">
      <figure>
        <div className="listing-img-overlay">
          <h5>DILUX <span className="text-light-gold">PROPERTIES</span></h5>
        </div>
        <img src={listing?.imageURL} alt={listing?.title || 'dilux listing'} />
      </figure>

      <div className="listing-content">
        <h3>{listing?.size}</h3>

        <p className="land-documents">
          {listing?.status.map((statusItem, index) => (
            <span key={index}>{statusItem}</span>
          ))}
        </p>

        <div className="d-flex select-listing-price-container">
          <select
            name=""
            id=""
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>

          <p className="listing-price">{priceOfListing}</p>
        </div>

        <span> ✅ dilux verified</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam
          ipsa at, necessitatibus maiores reiciendis quod? Facere molestias,
          excepturi temporibus ullam iste cum, commodi, facilis labore
          voluptates vitae minima nostrum.
        </p>
        <br />

        <div className="d-flex flex-wrap align-center listing-cta-buttons-container">
          <button onClick={handleBookInspection} className="bg-light-gold text-white">
            Book for inspection &nbsp;
            <MoveRight />
            </button>

        </div>
      </div>
    </div>
  );
}
