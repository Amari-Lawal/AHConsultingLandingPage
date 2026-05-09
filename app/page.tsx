'use client';

import React, { useState, useEffect } from 'react';
import PortfolioSME from '../components/PortfolioSME';
import PortfolioEnterprise from '../components/PortfolioEnterprise';

export default function Page() {
  // Feature flag state (Default is set by NEXT_PUBLIC_ACTIVE_PORTFOLIO in .env.local, fallback to Enterprise / Consulting Theme)
  const [isEnterprise, setIsEnterprise] = useState<boolean>(true);
  const [availabilityQuarter, setAvailabilityQuarter] = useState<string>('Q2 2026');

  useEffect(() => {
    // Read feature flag setting from public environment variable
    const activePortfolioEnv = process.env.NEXT_PUBLIC_ACTIVE_PORTFOLIO;
    if (activePortfolioEnv === 'sme') {
      setIsEnterprise(false);
    } else {
      setIsEnterprise(true);
    }

    // Dynamic quarter calculation
    const date = new Date();
    const month = date.getMonth(); // 0-11
    const year = date.getFullYear();
    const quarter = Math.floor(month / 3) + 1;
    setAvailabilityQuarter(`Q${quarter} ${year}`);
  }, []);

  const handleToggleLayout = (toEnterprise: boolean) => {
    setIsEnterprise(toEnterprise);
  };

  if (!isEnterprise) {
    return (
      <PortfolioSME
        availabilityQuarter={availabilityQuarter}
        onToggleLayout={handleToggleLayout}
        isEnterprise={isEnterprise}
      />
    );
  }

  return (
    <PortfolioEnterprise
      availabilityQuarter={availabilityQuarter}
      onToggleLayout={handleToggleLayout}
      isEnterprise={isEnterprise}
    />
  );
}
