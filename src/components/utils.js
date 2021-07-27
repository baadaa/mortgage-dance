import Dinero from 'dinero.js';

const getDecimalByFloor = (num, decimalPlaces) =>
  Number(`${Math.floor(`${num}e${decimalPlaces}`)}e-${decimalPlaces}`);

const getDecimalByRound = (num, decimalPlaces) =>
  Number(`${Math.round(`${num}e${decimalPlaces}`)}e-${decimalPlaces}`);

const getMonthlyPrincipal = (mortgageAmount, interestRate, lengthInYears) => {
  const rate = interestRate !== 0 ? interestRate : 0.0000001;

  const mortgage = Dinero({ amount: mortgageAmount, currency: 'USD' });
  const newPrincipal = mortgage
    .percentage(rate / 12)
    .multiply((1 + rate / 12 / 100) ** (12 * lengthInYears))
    .divide((1 + rate / 12 / 100) ** (12 * lengthInYears) - 1);
  return newPrincipal.getAmount();
};

const getTotalInterestPaid = (mortgageAmount, interestRate, lengthInMonths) => {
  const monthly = getMonthlyPrincipal(
    mortgageAmount,
    interestRate,
    lengthInMonths / 12
  );
  const totalPayments = monthly * lengthInMonths;
  const totalInterestPaid = totalPayments - mortgageAmount;
  return totalInterestPaid || 0;
};

const getAmortizationArray = (mortgageAmount, interestRate, termsInMonths) => {
  // NOTE: Largely based on https://codepen.io/baadaa/pen/YzGrNJY
  const rate = interestRate !== 0 ? interestRate : 0.0000001;
  const monthlyPayment = Dinero({
    amount: getMonthlyPrincipal(mortgageAmount, rate, termsInMonths / 12),
    currency: 'USD',
  });
  const arr = [];
  let balance = mortgageAmount;
  let totalInterestPaid = 0;
  let totalPrincipalPaid = 0;
  const monthlyRate = rate / 12;
  for (let i = 0; i < termsInMonths; i += 1) {
    const monthlyInterest = Dinero({
      amount: balance,
      currency: 'USD',
    }).percentage(monthlyRate);
    const monthlyPrincipal = monthlyPayment.subtract(monthlyInterest);
    balance -= monthlyPrincipal.getAmount();
    totalInterestPaid += monthlyInterest.getAmount();
    totalPrincipalPaid += monthlyPrincipal.getAmount();
    if (balance < 100) balance = 0;
    arr.push({
      index: i,
      monthlyPayment: monthlyPayment.getAmount(),
      monthlyPrincipal: monthlyPrincipal.getAmount(),
      monthlyInterest: monthlyInterest.getAmount(),
      totalInterestPaid,
      totalPrincipalPaid,
      balance,
    });
  }
  return arr;
};

const getPMT = (
  rate,
  numberOfPayments,
  presentValue,
  futureValue = Dinero({ amount: 0, currency: 'USD' }),
  type = 0
) => {
  // NOTE: based on https://gist.github.com/maarten00/23400873d51bf2ec4eeb
  // Refactored to use Dinero.js for money calculation
  /**
   * Copy of Excel's PMT function.
   * Credit: http://stackoverflow.com/questions/2094967/excel-pmt-function-in-js
   *
   * @param rate
   * The interest rate for the loan as number of percentage.
   * @param numberOfPayments
   * The total number of payments for the loan in months.
   * @param presentValue
   * The present value, or the total amount that a series of future payments is worth now; Also known as the principal.
   * @param futureValue
   * The future value, or a cash balance you want to attain after the last payment is made.
   * If omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
   * @param type
   * Optional, defaults to 0. The number 0 (zero) or 1 and indicates when payments are due.
   * 0 = At the end of period
   * 1 = At the beginning of the period
   * @returns Dinero object
   */
  if (rate !== 0.0) {
    // Interest rate exists
    const q = (1 + rate / 100) ** numberOfPayments;
    return presentValue
      .multiply(q)
      .add(futureValue)
      .percentage(rate)
      .divide((-1 + q) * (1 + (rate / 100) * type));
  }
  if (numberOfPayments !== 0.0) {
    // No interest rate, but number of payments exists
    return presentValue.add(futureValue).divide(numberOfPayments);
  }

  return 0;
};
const getPV = (
  rate,
  numberOfPayments,
  payment,
  futureValue = Dinero({ amount: 0, currency: 'USD' }),
  type = 0
) => {
  // NOTE: largely based on https://gist.github.com/ghalimi/4638848
  // Refactored to use Dinero.js for money calculations
  // Parameters are similar to getPMT function
  if (rate !== 0) {
    const rateInDecimal = rate / 100;
    const q = (1 + rateInDecimal) ** numberOfPayments;
    const pvAmount = payment
      .multiply(((1 - q) / rateInDecimal) * (1 + (rateInDecimal * type) / 100))
      .subtract(futureValue)
      .divide(q);

    return Dinero({ amount: Math.abs(pvAmount.getAmount()) });
  }
  return payment.multiply(numberOfPayments).subtract(futureValue);
};
export {
  getDecimalByFloor,
  getDecimalByRound,
  getMonthlyPrincipal,
  getTotalInterestPaid,
  getAmortizationArray,
  getPMT,
  getPV,
};
