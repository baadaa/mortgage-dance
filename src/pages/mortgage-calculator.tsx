// If you don't want to use TypeScript you can delete this file!
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Dinero from 'dinero.js';
import { PageProps } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Seo from '../components/seo';

import { getDecimalByFloor, getMonthlyPrincipal } from '../components/utils';

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
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  form.baseForm {
    display: block;
    flex-basis: 300px;
    .inputLabel {
      font-size: 0.85rem;
      padding: 0.75rem 0.3rem 0.3rem 0;
    }
    .inputFields {
      display: flex;
      span {
        position: absolute;
        top: 0;
        left: 1rem;
        bottom: 0;
        font-size: 1.2rem;
        opacity: 0.6;
        display: flex;
        align-items: center;
      }
      .dollar {
        position: relative;
        width: 66%;
        input {
          padding-left: 2.5rem;
        }
        span {
        }
      }
      .percent {
        position: relative;
        width: 34%;
        span {
          left: auto;
          right: 1rem;
        }
      }
    }
    select,
    input {
      width: 100%;
      position: relative;
      padding: 0.75rem;
      font-size: 1.2rem;
      border: 1px solid var(--plum200);
    }
  }
  .details {
    margin-left: 2rem;
    background: #fff;
    flex: 1;
    padding: 2rem;
    border-radius: 1.2rem;
    box-shadow: var(--base-shadow);
    @media screen and (max-width: 1024px) {
      margin-left: 0;
      margin-top: 2rem;
      width: 100%;
      max-width: 750px;
    }
    @media screen and (max-width: 768px) {
      max-width: 500px;
    }
  }
  .monthly {
    width: 100%;
    text-align: center;
    .resultLabel {
      font-size: 0.9rem;
      padding: 0.5rem 0.5rem 0.5rem 0;
    }
    .result {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
  }
  .breakdownItems {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .chart {
    margin-right: 2rem;
    @media screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
  .breakdown {
    .row {
      display: flex;
      align-items: center;
      padding: 0.25rem 0;
      line-height: 1.4;
      &.summary {
        font-weight: 400;
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
        background: var(--plum);
      }
      &.tax::before {
        background: var(--orange);
      }
      &.hoa::before {
        background: var(--lemon);
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
`;

const MortgageCalcPage: React.FC<PageProps> = ({ location }) => {
  const currentPath = location.pathname;
  const [homePrice, setHomePrice] = useState(
    Dinero({ amount: 52800000, currency: 'USD' })
  );
  const [downpaymentDollar, setDownpaymentDollar] = useState(
    Dinero({ amount: 10560000, currency: 'USD' })
  );
  const [downpaymentPercent, setDownpaymentPercent] = useState(20);
  const [preferPercentage, setPreferPercentage] = useState(true);
  const [loanLength, setLoanLength] = useState(30);
  const [interestRate, setInterestRate] = useState(2.84);
  const [homeInsurance, setHomeInsurance] = useState(
    Dinero({ amount: 7800, currency: 'USD' })
  );
  const [propertyTax, setPropertyTax] = useState(
    Dinero({ amount: 72600, currency: 'USD' })
  );
  const [hoaFees, setHoaFees] = useState(
    Dinero({ amount: 0, currency: 'USD' })
  );

  const monthlyPrincipal = Dinero({
    amount: getMonthlyPrincipal(
      homePrice.getAmount() - downpaymentDollar.getAmount(),
      interestRate,
      loanLength
    ),
    currency: 'USD',
  });
  const handleDownpaymentInput = (e) => {
    const currentInput = e.target.name;
    const newVal =
      e.target.name === 'downpaymentDollar'
        ? parseInt(e.target.value.replace(/\$|,|\./g, '')) * 100 || 0
        : e.target.value || 0;
    const isInvalid =
      (currentInput === 'downpaymentDollar' && newVal > homePrice) ||
      (currentInput === 'downpaymentPercent' && newVal > 100) ||
      newVal < 0;

    if (isInvalid) return;
    if (currentInput === 'downpaymentPercent') {
      const percentage = getDecimalByFloor(newVal, 2);
      setPreferPercentage(true);
      setDownpaymentPercent(percentage);
      setDownpaymentDollar(homePrice.percentage(percentage));
    } else {
      setPreferPercentage(false);
      setDownpaymentDollar(Dinero({ amount: newVal }));
      setDownpaymentPercent(
        getDecimalByFloor((newVal / homePrice.getAmount()) * 100, 2)
      );
    }
  };
  const handleHomePriceInput = (e) => {
    const newVal = parseInt(e.target.value.replace(/\$|,|\./g, '')) * 100 || 0;

    if (preferPercentage) {
      setDownpaymentDollar(
        Dinero({ amount: newVal }).percentage(downpaymentPercent)
      );
    } else {
      setDownpaymentPercent(
        getDecimalByFloor(downpaymentDollar.getAmount() / newVal, 2)
      );
    }
    setHomePrice(Dinero({ amount: newVal }));
  };

  const handleRateInput = (e) => {
    const newVal = parseFloat(e.target.value) || 0;
    if (newVal < 0 || newVal > 100) return;

    setInterestRate(getDecimalByFloor(newVal, 2));
  };

  const handleFeesInput = (e) => {
    const newVal = parseInt(e.target.value.replace(/\$|,|\./g, '')) * 100 || 0;

    if (newVal < 0) return;
    switch (e.target.name) {
      case 'homeInsurance':
        setHomeInsurance(Dinero({ amount: newVal }));
        break;
      case 'propertyTax':
        setPropertyTax(Dinero({ amount: newVal }));
        break;
      case 'hoaFees':
        setHoaFees(Dinero({ amount: newVal }));
        break;
      default:
        break;
    }
  };

  const getMonthlyPayment = () => {
    const result = monthlyPrincipal
      .add(homeInsurance)
      .add(propertyTax)
      .add(hoaFees);
    return result.toFormat('0,0.00') || 0;
  };
  const chartData = {
    datasets: [
      {
        data: [
          monthlyPrincipal.getAmount() / 100,
          homeInsurance.getAmount() / 100,
          propertyTax.getAmount() / 100,
          hoaFees.getAmount() / 100,
        ],
        backgroundColor: ['#33a1ce', '#603597', '#e4711e', '#ffb000'],
      },
    ],
    labels: [
      'Principal & Interest',
      "Homeowner's Insurance",
      'Property Tax',
      'HOA Fees',
    ],
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
      <Seo title="Mortgage Calculator" />
      <HeadingStyles>Mortgage Calculator</HeadingStyles>
      <WrapperStyle>
        <form className="baseForm">
          <div className="row">
            <div className="inputLabel">Home price</div>
            <div className="inputFields">
              <input
                type="text"
                id="homePrice"
                name="homePrice"
                value={homePrice.toFormat('$0,0')}
                onChange={(e) => handleHomePriceInput(e)}
                required
                inputMode="numeric"
              />
            </div>
          </div>
          <div className="row">
            <div className="inputLabel">Downpayment</div>
            <div className="inputFields">
              <div className="dollar">
                <input
                  type="text"
                  id="downpaymentDollar"
                  name="downpaymentDollar"
                  value={downpaymentDollar.toFormat('0,0')}
                  onChange={(e) => handleDownpaymentInput(e)}
                  inputMode="numeric"
                />
                <span>$</span>
              </div>
              <div className="percent">
                <input
                  type="number"
                  id="downpaymentPercent"
                  name="downpaymentPercent"
                  value={downpaymentPercent}
                  onChange={(e) => handleDownpaymentInput(e)}
                  inputMode="decimal"
                />
                <span>%</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="inputLabel">Length of loan</div>
          </div>
          <div className="inputFields">
            <select onChange={(e) => setLoanLength(parseFloat(e.target.value))}>
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
            </select>
          </div>
          <div className="row">
            <div className="inputLabel">Interest rate</div>
            <div className="inputFields">
              <div className="percent" style={{ flex: 1 }}>
                <input
                  type="number"
                  id="interestRate"
                  name="interestRate"
                  value={interestRate}
                  onChange={(e) => handleRateInput(e)}
                  inputMode="decimal"
                />
                <span>%</span>
              </div>
            </div>
          </div>
        </form>
        <div className="details">
          <div className="monthly">
            <div className="resultLabel">Estimated monthly payment</div>
            <div className="result">${getMonthlyPayment()}</div>
          </div>
          <div className="breakdownItems">
            <div className="chart">
              <Doughnut
                data={chartData}
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
                    ${monthlyPrincipal.toFormat('0,0.00')}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="inputLabel insurance">
                  Homeowner's insurance
                </div>
                <div className="inputField">
                  <span className="prefix">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="homeInsurance"
                    name="homeInsurance"
                    value={homeInsurance.toFormat('0,0')}
                    onChange={(e) => handleFeesInput(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="inputLabel tax">Property Tax</div>
                <div className="inputField">
                  <span className="prefix">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="propertyTax"
                    name="propertyTax"
                    value={propertyTax.toFormat('0,0')}
                    onChange={(e) => handleFeesInput(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="inputLabel hoa">HOA Fees</div>
                <div className="inputField">
                  <span className="prefix">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="hoaFees"
                    name="hoaFees"
                    value={hoaFees.toFormat('0,0')}
                    onChange={(e) => handleFeesInput(e)}
                  />
                </div>
              </div>
              <div className="row summary">
                Total monthly payment: <span>${getMonthlyPayment()}</span>
              </div>
            </div>
          </div>
        </div>
      </WrapperStyle>
    </Layout>
  );
};

export default MortgageCalcPage;
