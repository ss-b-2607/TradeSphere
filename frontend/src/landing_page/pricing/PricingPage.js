import React from 'react';
import Hero from './Hero';

import AccountOpening from './AccountOpening';
import AMC from './AMC';
import ChargesExplained from './ChargesExplained';
import ChargesTable from './ChargesTable';
import OptionalServices from './OptionalServices';

function PricingPage() {
    return (
        <>
            <Hero />
            <ChargesTable />
            <AccountOpening />
            <AMC />
            <OptionalServices />
            <ChargesExplained />
        </>
    );
}

export default PricingPage;