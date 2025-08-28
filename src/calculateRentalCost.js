/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_COST = 230;

  if (days === LONG_TERM_DAYS) {
    return LONG_TERM_COST;
  }

  const EXTENDED_DISCOUNT_DAYS = 6;
  const EXTENDED_DISCOUNT_COST = 220;

  if (days === EXTENDED_DISCOUNT_DAYS) {
    return EXTENDED_DISCOUNT_COST;
  }

  const BASIC_DISCOUNT_DAYS = 3;
  const BASIC_DISCOUNT_COST = 100;

  if (days === BASIC_DISCOUNT_DAYS) {
    return BASIC_DISCOUNT_COST;
  }

  const BASE_COST = 80;

  return BASE_COST;
}

module.exports = calculateRentalCost;
