// If you don't want to use TypeScript you can delete this file!
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Dinero from 'dinero.js';

import styled from 'styled-components';

import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import Accordion from '../components/Accordion';
import Seo from '../components/seo';
import {
  getDecimalByFloor,
  getDecimalByRound,
  getPMT,
  getPV,
} from '../components/utils';

const HeadingStyles = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1em;
  margin-bottom: 2em;
  padding: 0.6em 0;
  color: var(--plum700);
  border-bottom: 2px solid var(--plum200);
  border-top: 2px solid var(--plum200);
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    letter-spacing: 0.8em;
  }
  @media screen and (max-width: 768px) {
    letter-spacing: 0.5em;
  }
  @media screen and (max-width: 550px) {
    letter-spacing: 0.25em;
  }
`;
const WrapperStyle = styled.div`
  display: flex;
  padding: 0 0rem 3rem;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  form.baseForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-basis: 34%;
    align-items: flex-start;
    align-content: flex-start;
    background: #fff;
    padding: 0 1.3rem 1.3rem;
    border-radius: 1.2rem;
    box-shadow: var(--base-shadow);
    h3 {
      color: var(--plum800);
      padding: 0.6rem 0 0.4rem;
      margin: 0;
      font-size: 1rem;
    }
    .inputLabel {
      font-size: 0.85rem;
      line-height: 1.5;
      padding: 0.5rem 0.3rem 0.3rem 0;
    }
    .inputFields {
      display: flex;
      align-items: center;
      .spacer {
        padding: 0 1rem;
      }
      span {
        position: absolute;
        top: 0;
        right: 0.5rem;
        bottom: 0;
        font-size: 1rem;
        opacity: 0.5;
        display: flex;
        align-items: center;
      }
      .result,
      input {
        padding-right: 1rem;
      }
      position: relative;
    }
    select,
    .result,
    input {
      width: 100%;
      position: relative;
      padding: 0.5rem;
      text-align: right;
      font-size: 1.2rem;
      border: 1px solid var(--plum200);
    }
    .result {
      border: 1px solid var(--grass);
      user-select: none;
      cursor: not-allowed;
      background: #e9fbf4;
      &.minus {
        border-color: var(--lemon);
        background: #fff7e5;
      }
      &.sumBig {
        border-width: 2px;
      }
      .note {
        position: relative;
        display: inline-flex;
      }
    }
    @media screen and (max-width: 1024px) {
      flex-basis: auto;
      max-width: 750px;
    }
    @media screen and (max-width: 768px) {
      max-width: 500px;
    }
  }
  .chartContainer {
    position: sticky;
    top: 15px;
    background: #fff;
    display: flex;
    flex-direction: column;
    flex-basis: 64%;
    padding: 2rem;
    border-radius: 1.2rem;
    box-shadow: var(--base-shadow);
    align-items: center;
    @media screen and (max-width: 1024px) {
      margin-left: 0;
      margin-top: 1.6rem;
      width: 100%;
      max-width: 750px;
    }
    @media screen and (max-width: 768px) {
      max-width: 500px;
    }
  }
  .resultArea {
    width: 100%;
    position: sticky;
    top: 10rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .chartElem {
      flex-basis: 48%;
      width: 48%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width: 768px) {
        flex-basis: 100%;
        width: 100%;
        padding-bottom: 5rem;
      }
    }
    .chart {
      margin-top: 1.2rem;
    }
    .resultLabel {
      font-size: 0.9rem;
      padding: 0.5rem 0.5rem 0.5rem 0;
    }
    .result {
      font-size: 2.2rem;
      margin-bottom: 0.5rem;
    }
    .breakdown {
      max-width: 290px;
      margin: 1.2rem auto 0;
      .row {
        display: flex;
        align-items: center;
        line-height: 1.2;
        &.summary {
          font-weight: 500;
          font-size: 0.9rem;
          justify-content: flex-end;
          width: 100%;
          border-top: 1px solid var(--plum200);
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          span {
            font-weight: 600;
            font-size: 1.4rem;
            padding: 0 0 0 0.75rem;
          }
        }
      }
      .inputLabel {
        font-size: 0.75rem;
        padding: 0.75rem 0.3rem 0.3rem 0;
        flex: 1;
        display: flex;
        margin-right: 1rem;
        align-items: center;
        text-align: left;
        &::before {
          display: block;
          content: ' ';
          width: 0.7rem;
          height: 0.7rem;
          flex-shrink: 0;
          margin-right: 0.5rem;
        }
        &.principalInterest::before {
          background: var(--sky);
        }
        &.insurance::before {
          background: var(--orange);
        }
        &.tax::before {
          background: var(--plum);
        }
        &.pmi::before {
          background: var(--lemon);
        }
        &.hoa::before {
          background: var(--mud);
        }
        &.other::before {
          background: var(--sky600);
        }
        &.loan::before {
          background: var(--medium-gray);
        }
        &.downpayment::before {
          background: var(--grass);
        }
      }
      .inputField {
        position: relative;

        span.prefix {
          position: absolute;
          top: 0;
          left: 1rem;
          bottom: 0;
          display: flex;
          align-items: center;
          font-size: 1rem;
        }
      }
      input,
      .principal {
        width: 120px;
        flex-basis: 120px;
        text-align: right;
        padding: 0.5rem;
        font-weight: 500;
        font-size: 1rem;
        border: 1px solid var(--plum200);
      }
      .principal {
        border: none;
        padding-right: 0.5rem;
      }
    }
  }
`;

const AffordabilityCalcPage: React.FC<PageProps> = ({ location }) => {
  const currentPath = location.pathname;
  const [grossAnnualIncome, setGrossAnnualIncome] = useState(
    Dinero({ amount: 6500000, currency: 'USD' })
  );
  const [maximumHousingExpense, setMaximumHousingExpense] = useState(28);

  const [carPayment, setCarPayment] = useState(
    Dinero({ amount: 30000, currency: 'USD' })
  );
  const [creditCardMinimum, setCreditCardMinimum] = useState(
    Dinero({ amount: 10000, currency: 'USD' })
  );
  const [studentLoan, setStudentLoan] = useState(
    Dinero({ amount: 0, currency: 'USD' })
  );
  const [childSupport, setChildSupport] = useState(
    Dinero({ amount: 0, currency: 'USD' })
  );
  const [otherMortgages, setOtherMortgages] = useState(
    Dinero({ amount: 0, currency: 'USD' })
  );
  const [otherLoans, setOtherLoans] = useState(
    Dinero({ amount: 0, currency: 'USD' })
  );
  const [maximumDTI, setMaximumDTI] = useState(36);
  const [propertyTax, setPropertyTax] = useState(
    Dinero({ amount: 35000, currency: 'USD' })
  );
  const [homeInsurance, setHomeInsurance] = useState(
    Dinero({ amount: 7500, currency: 'USD' })
  );
  const [privateMortgageInsurance, setPrivateMortgageInsurance] = useState(
    Dinero({ amount: 0, currency: 'USD' })
  );
  const [hoa, setHoa] = useState(Dinero({ amount: 5000, currency: 'USD' }));
  const [otherExpenses, setOtherExpenses] = useState(
    Dinero({ amount: 0, currency: 'USD' })
  );
  const [availableFunds, setAvailableFunds] = useState(
    Dinero({ amount: 5000000, currency: 'USD' })
  );
  const [fixedClosingCosts, setFixedClosingCosts] = useState(
    Dinero({ amount: 15000, currency: 'USD' })
  );
  const [variableClosingCosts, setVariableClosingCosts] = useState(4);
  const [minimumDownpayment, setMinimumDownpayment] = useState(20);
  const [mortgageTermInYears, setMortgageTermInYears] = useState(30);
  const [annualInterestRate, setAnnualInterestRate] = useState(4);
  const [homePriceDepreciable, setHomePriceDepreciable] = useState(60);
  const [yearsToDepreciate, setYearsToDepreciate] = useState(27.5);
  const maxPricebyFunds = availableFunds
    .subtract(fixedClosingCosts)
    .divide((variableClosingCosts + minimumDownpayment) / 100);
  const maxPIbyFunds = getPMT(
    annualInterestRate / 12,
    (mortgageTermInYears || 1) * 12,
    maxPricebyFunds.percentage(100 - minimumDownpayment)
  );
  const maxMonthlyByIncome = grossAnnualIncome
    .percentage(maximumHousingExpense)
    .divide(12);
  const currentMonthlyDebts = carPayment
    .add(creditCardMinimum)
    .add(studentLoan)
    .add(childSupport)
    .add(otherMortgages)
    .add(otherLoans);
  const maxMonthlyByDTI = grossAnnualIncome
    .divide(12)
    .percentage(maximumDTI)
    .subtract(currentMonthlyDebts);
  const maxPIbyExpenses = Dinero.minimum([maxMonthlyByIncome, maxMonthlyByDTI])
    .subtract(propertyTax)
    .subtract(homeInsurance)
    .subtract(privateMortgageInsurance)
    .subtract(hoa)
    .subtract(otherExpenses);
  const loanAmountByMaxPIpayment = getPV(
    annualInterestRate / 12,
    (mortgageTermInYears || 1) * 12,
    Dinero.minimum([maxPIbyExpenses, maxPIbyFunds])
  );
  const downpaymentByAvailablefunds = availableFunds
    .subtract(fixedClosingCosts)
    .subtract(loanAmountByMaxPIpayment.percentage(variableClosingCosts))
    .divide((100 + variableClosingCosts) / 100);
  const estimatedClosingCosts = loanAmountByMaxPIpayment
    .add(downpaymentByAvailablefunds)
    .percentage(variableClosingCosts)
    .add(fixedClosingCosts);
  const totalMonthly = Dinero.minimum([maxPIbyExpenses, maxPIbyFunds])
    .add(propertyTax)
    .add(homeInsurance)
    .add(hoa)
    .add(otherExpenses);
  const maxHomePrice = loanAmountByMaxPIpayment.add(
    downpaymentByAvailablefunds
  );
  const handleMoneyInput = (e, cb) => {
    const newVal = parseInt(e.target.value.replace(/\$|,|\./g, '')) || 0;
    cb(Dinero({ amount: newVal }));
  };
  const handleRateInput = (e, cb) => {
    const newVal = parseFloat(e.target.value) || 0;
    if (newVal < 0 || newVal > 100) return;
    cb(Math.floor(newVal));
  };
  const handleNumberInput = (e, cb) => {
    const newVal = parseFloat(e.target.value) || 0;
    if (newVal < 0 || newVal > 150) return;
    cb(newVal);
  };
  const handleRateInputDecimal = (e, cb) => {
    const newVal = parseFloat(e.target.value) || 0;
    if (newVal < 0 || newVal > 100) return;
    cb(getDecimalByFloor(newVal, 2));
  };

  const monthlyChartData = {
    datasets: [
      {
        data: [
          Dinero.minimum([maxPIbyFunds, maxPIbyExpenses]).getAmount() / 100,
          propertyTax.getAmount() / 100,
          homeInsurance.getAmount() / 100,
          privateMortgageInsurance.getAmount() / 100,
          hoa.getAmount() / 100,
          otherExpenses.getAmount() / 100,
        ],
        backgroundColor: [
          '#33a1ce',
          '#603597',
          '#e4711e',
          '#ffb000',
          '#595959',
          '#2880a4',
        ],
      },
    ],
    labels: [
      'Principal & Interest',
      'Property Tax',
      "Homeowner's Insurance",
      'PMI',
      'HOA Fees',
      'Other expenses',
    ],
  };
  const priceChartData = {
    datasets: [
      {
        data: [
          loanAmountByMaxPIpayment.getAmount() / 100,
          downpaymentByAvailablefunds.getAmount() / 100,
        ],
        backgroundColor: ['#b8b8b8', '#40BF8B'],
      },
    ],
    labels: ['Loan amount', 'Down payment'],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Layout path={currentPath}>
      <Seo title="Mortgage Affordability Calculator" />
      <HeadingStyles>Mortgage Affordability Calculator</HeadingStyles>
      <WrapperStyle>
        <form className="baseForm">
          <Accordion title="Income & Debts">
            <h3>Income</h3>
            <div className="row">
              <div className="inputLabel">Gross annual income (before tax)</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="grossAnnualIncome"
                  name="grossAnnualIncome"
                  value={grossAnnualIncome.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setGrossAnnualIncome)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Maximum housing expense %</div>
              <div className="inputFields">
                <input
                  type="number"
                  id="maximumHousingExpense"
                  name="maximumHousingExpense"
                  value={maximumHousingExpense}
                  onChange={(e) => handleRateInput(e, setMaximumHousingExpense)}
                  inputMode="numeric"
                />
                <span>%</span>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 600 }}>
                (M1) Max monthly payment based on income
              </div>
              <div className="inputFields">
                <div className="result">
                  {maxMonthlyByIncome.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <hr style={{ marginTop: '1.8rem', background: 'var(--plum200)' }} />
            <h3>Monthly Debts</h3>
            <div className="row">
              <div className="inputLabel">Car Payment</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="carPayment"
                  name="carPayment"
                  value={carPayment.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setCarPayment)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Credit card minimum</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="creditCardMinimum"
                  name="creditCardMinimum"
                  value={creditCardMinimum.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setCreditCardMinimum)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Student loans</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="studentLoan"
                  name="studentLoan"
                  value={studentLoan.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setStudentLoan)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">
                Child support & other obligations
              </div>
              <div className="inputFields">
                <input
                  type="text"
                  id="childSupport"
                  name="childSupport"
                  value={childSupport.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setChildSupport)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Other mortgages</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="otherMortgages"
                  name="otherMortgages"
                  value={otherMortgages.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setOtherMortgages)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Other loans</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="otherLoans"
                  name="otherLoans"
                  value={otherLoans.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setOtherLoans)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 600 }}>
                Current monthly debts
              </div>
              <div className="inputFields">
                <div className="result minus">
                  {currentMonthlyDebts.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">
                Maximum Debt-to-Income ratio (DTI)
              </div>
              <div className="inputFields">
                <input
                  type="number"
                  id="maximumDTI"
                  name="maximumDTI"
                  value={maximumDTI}
                  onChange={(e) => handleRateInput(e, setMaximumDTI)}
                  inputMode="numeric"
                />
                <span>%</span>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 600 }}>
                (M2) Max monthly payment based on DTI
              </div>
              <div className="inputFields">
                <div className="result">
                  {maxMonthlyByDTI.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <hr style={{ marginTop: '1.8rem', background: 'var(--plum200)' }} />
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 700 }}>
                Maximum monthly payment (lower of M1 & M2)
              </div>
              <div className="inputFields">
                <div className="result sumBig" style={{ fontWeight: 600 }}>
                  {Dinero.minimum([
                    maxMonthlyByIncome,
                    maxMonthlyByDTI,
                  ]).toFormat('$0,0.00')}
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Expenses & Funds">
            <h3>Monthly Expenses</h3>
            <div className="row">
              <div className="inputLabel">Property tax</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="propertyTax"
                  name="propertyTax"
                  value={propertyTax.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setPropertyTax)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Homeowners insurance</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="homeInsurance"
                  name="homeInsurance"
                  value={homeInsurance.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setHomeInsurance)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">PMI (private Mortgage Insurance)</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="privateMortgageInsurance"
                  name="privateMortgageInsurance"
                  value={privateMortgageInsurance.toFormat('$0,0.00')}
                  onChange={(e) =>
                    handleMoneyInput(e, setPrivateMortgageInsurance)
                  }
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">HOA fees</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="hoa"
                  name="hoa"
                  value={hoa.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setHoa)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">
                Other expenses (utilities, repairs, etc)
              </div>
              <div className="inputFields">
                <input
                  type="text"
                  id="otherExpenses"
                  name="otherExpenses"
                  value={otherExpenses.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setOtherExpenses)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 600 }}>
                (M3) Max monthly PI payment based on expenses
              </div>
              <div className="inputFields">
                <div className="result">
                  {maxPIbyExpenses.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <hr style={{ marginTop: '1.8rem', background: 'var(--plum200)' }} />
            <h3>Available funds</h3>
            <div className="row">
              <div className="inputLabel">Available funds</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="availableFunds"
                  name="availableFunds"
                  value={availableFunds.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setAvailableFunds)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Fixed closing costs</div>
              <div className="inputFields">
                <input
                  type="text"
                  id="fixedClosingCosts"
                  name="fixedClosingCosts"
                  value={fixedClosingCosts.toFormat('$0,0.00')}
                  onChange={(e) => handleMoneyInput(e, setFixedClosingCosts)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">
                Variable closing costs (based on price)
              </div>
              <div className="inputFields">
                <input
                  type="number"
                  id="variableClosingCosts"
                  name="variableClosingCosts"
                  value={variableClosingCosts}
                  onChange={(e) =>
                    handleRateInputDecimal(e, setVariableClosingCosts)
                  }
                  inputMode="decimal"
                />
                <span>%</span>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Minimum down payment</div>
              <div className="inputFields">
                <input
                  type="number"
                  id="minimumDownpayment"
                  name="minimumDownpayment"
                  value={minimumDownpayment}
                  onChange={(e) =>
                    handleRateInputDecimal(e, setMinimumDownpayment)
                  }
                  inputMode="decimal"
                />
                <span>%</span>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 600 }}>
                Max home price based on funds
              </div>
              <div className="inputFields">
                <div className="result minus">
                  {maxPricebyFunds.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 600 }}>
                (M4) Max monthly PI payment based on funds
              </div>
              <div className="inputFields">
                <div className="result">{maxPIbyFunds.toFormat('$0,0.00')}</div>
              </div>
            </div>
            <hr style={{ marginTop: '1.8rem', background: 'var(--plum200)' }} />
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 700 }}>
                Maximum PI payment (lower of M3 & M4)
              </div>
              <div className="inputFields">
                <div className="result sumBig" style={{ fontWeight: 600 }}>
                  {Dinero.minimum([maxPIbyExpenses, maxPIbyFunds]).toFormat(
                    '$0,0.00'
                  )}
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Financing">
            <div className="row">
              <div className="inputLabel">Term of mortgage</div>
              <div className="inputFields">
                <input
                  type="number"
                  id="mortgageTermInYears"
                  name="mortgageTermInYears"
                  value={mortgageTermInYears}
                  onChange={(e) => handleNumberInput(e, setMortgageTermInYears)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Annual interest rate</div>
              <div className="inputFields">
                <input
                  type="number"
                  id="annualInterestRate"
                  name="annualInterestRate"
                  value={annualInterestRate}
                  onChange={(e) =>
                    handleRateInputDecimal(e, setAnnualInterestRate)
                  }
                  inputMode="numeric"
                />
                <span>%</span>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">
                Loan amount based on max PI payment
              </div>
              <div className="inputFields">
                <div className="result">
                  {loanAmountByMaxPIpayment.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">
                Down payment based on available funds
              </div>
              <div className="inputFields">
                <div className="result">
                  <span className="note">
                    (
                    {getDecimalByRound(
                      (downpaymentByAvailablefunds.getAmount() /
                        maxHomePrice.getAmount()) *
                        100,
                      1
                    )}
                    %)
                  </span>
                  {downpaymentByAvailablefunds.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Total estimated closing costs</div>
              <div className="inputFields">
                <div className="result minus">
                  <span className="note">
                    (
                    {getDecimalByRound(
                      (estimatedClosingCosts.getAmount() /
                        maxHomePrice.getAmount()) *
                        100,
                      1
                    )}
                    %)
                  </span>
                  {estimatedClosingCosts.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
            <hr style={{ marginTop: '1.8rem', background: 'var(--plum200)' }} />
            <div className="row">
              <div className="inputLabel" style={{ fontWeight: 700 }}>
                Maximum home price
              </div>
              <div className="inputFields">
                <div className="result sumBig" style={{ fontWeight: 600 }}>
                  {maxHomePrice.toFormat('$0,0.00')}
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Depreciation">
            <div className="row">
              <div
                className="inputLabel"
                style={{
                  color: 'var(--orange)',
                  fontWeight: 600,
                  marginBottom: '.7em',
                }}
              >
                Only relevant for investment properties that generate income.
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">% of home price depreciable</div>
              <div className="inputFields">
                <input
                  type="number"
                  id="homePriceDepreciable"
                  name="homePriceDepreciable"
                  value={homePriceDepreciable}
                  onChange={(e) =>
                    handleRateInputDecimal(e, setHomePriceDepreciable)
                  }
                  inputMode="numeric"
                />
                <span>%</span>
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Years to depreciate</div>
              <div className="inputFields">
                <input
                  type="number"
                  id="yearsToDepreciate"
                  name="yearsToDepreciate"
                  value={yearsToDepreciate}
                  onChange={(e) => handleNumberInput(e, setYearsToDepreciate)}
                  inputMode="numeric"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Annual depreciation</div>
              <div className="inputFields">
                <div className="result minus">
                  {maxHomePrice
                    .percentage(homePriceDepreciable)
                    .divide(yearsToDepreciate)
                    .toFormat('$0,0.00')}
                </div>
              </div>
            </div>
          </Accordion>
        </form>
        <div className="chartContainer">
          <div className="resultArea">
            <div className="chartElem">
              <div className="resultLabel">Estimated home price</div>
              <div className="result">{maxHomePrice.toFormat('$0,0.00')}</div>
              <div className="chart">
                <Doughnut
                  data={priceChartData}
                  width={280}
                  height={280}
                  options={chartOptions}
                />
              </div>
              <div className="breakdown">
                <div className="row">
                  <div className="inputLabel loan">Loan amount</div>
                  <div className="inputField">
                    <span className="principal">
                      {loanAmountByMaxPIpayment.toFormat('$0,0.00')}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="inputLabel downpayment">Down payment</div>
                  <div className="inputField">
                    <span className="principal">
                      {downpaymentByAvailablefunds.toFormat('$0,0.00')}
                    </span>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    background: 'var(--plum50)',
                    marginTop: '.5rem',
                    border: '1px solid var(--plum200)',
                    paddingBottom: '.3rem',
                  }}
                >
                  <div className="inputLabel">Estimated closing costs</div>
                  <div className="inputField">
                    <span className="principal">
                      {estimatedClosingCosts.toFormat('$0,0.00')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chartElem">
              <div className="resultLabel">Estimated monthly payment</div>
              <div className="result">{totalMonthly.toFormat('$0,0.00')}</div>
              <div className="chart">
                <Doughnut
                  data={monthlyChartData}
                  width={280}
                  height={280}
                  options={chartOptions}
                />
              </div>
              <div className="breakdown">
                <div className="row">
                  <div className="inputLabel principalInterest">
                    Principal & Interest
                  </div>
                  <div className="inputField">
                    <span className="principal">
                      $
                      {Dinero.minimum([maxPIbyExpenses, maxPIbyFunds]).toFormat(
                        '0,0.00'
                      )}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="inputLabel tax">Property Tax</div>
                  <div className="inputField">
                    <span className="principal">
                      {propertyTax.toFormat('$0,0.00')}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="inputLabel insurance">
                    Homeowner's insurance
                  </div>
                  <div className="inputField">
                    <span className="principal">
                      {homeInsurance.toFormat('$0,0.00')}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="inputLabel pmi">PMI</div>
                  <div className="inputField">
                    <span className="principal">
                      {privateMortgageInsurance.toFormat('$0,0.00')}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="inputLabel hoa">HOA Fees</div>
                  <div className="inputField">
                    <span className="principal">{hoa.toFormat('$0,0.00')}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="inputLabel other">Other expenses</div>
                  <div className="inputField">
                    <span className="principal">
                      {otherExpenses.toFormat('$0,0.00')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperStyle>
    </Layout>
  );
};

export default AffordabilityCalcPage;
