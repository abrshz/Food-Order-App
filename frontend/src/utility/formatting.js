// export const currencyFormatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// })
// src/hooks/useCurrencyFormatter.js
import { useMemo } from 'react';

export function useCurrencyFormatter() {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }, []);

  return formatter;
}

// Alternative: If you want a simpler version without hook
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});