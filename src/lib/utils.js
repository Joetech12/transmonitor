import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function formatPrice(price) {

  // Create a formatter using the user's locale (e.g., en-US for US English)
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Change this to the appropriate currency code
    minimumFractionDigits: 0, // Ensure two decimal places
  });

  // Format the price
  return formatter.format(Number(price));
}


export function calculateNumberOfPages(arrayLength, itemsPerPage) {
  return Math.ceil(arrayLength / itemsPerPage);
}