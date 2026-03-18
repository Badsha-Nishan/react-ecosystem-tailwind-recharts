import React, { use } from 'react';
import PriceList from './PriceList';

const PricingOptions = ({PricingData}) => {
    const pricing = use(PricingData)
       const priceUnit = pricing.pricingPlans;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mt-8'>
            {
                priceUnit.map(priceData=><PriceList key={priceData.id} priceData={priceData}></PriceList>)
            }
        </div>
    );
};

export default PricingOptions;