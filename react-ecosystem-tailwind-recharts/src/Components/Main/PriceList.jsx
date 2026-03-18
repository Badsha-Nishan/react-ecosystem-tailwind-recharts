import { CircleCheckBig } from "lucide-react";
import React from "react";

const PriceList = ({ priceData }) => {
  const { name, price, features } = priceData;
  return (
    <div className="border flex flex-col bg-purple-900 p-5 rounded-2xl space-y-3 border-amber-400">
      <h1 className="text-4xl">Name: {name}</h1>
      <p className="text-2xl">Price: {price}</p>
      <ul className="flex-1">
        {features.map((item, index) => (
          <li className="flex gap-2" key={index}>
            <CircleCheckBig color="#2cfc03" /> {item}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary w-full">Get Started</button>
    </div>
  );
};

export default PriceList;
