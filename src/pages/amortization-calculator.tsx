// If you don't want to use TypeScript you can delete this file!
import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, addMonths } from 'date-fns';

import Dinero from 'dinero.js';

import styled from 'styled-components';

import Layout from '../components/layout';
import Seo from '../components/seo';
import {
  getMonthlyPrincipal,
  getTotalInterestPaid,
  getAmortizationArray,
  getDecimalByFloor,
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
  align-items: center;
  flex-wrap: wrap;
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
      align-items: center;
      .spacer {
        padding: 0 0.75rem;
      }
      span {
        position: absolute;
        top: 0;
        right: 0.5rem;
        bottom: 0;
        font-size: 0.75rem;
        opacity: 0.6;
        display: flex;
        align-items: center;
      }
      .years,
      .months,
      .percent {
        position: relative;
        width: 50%;
        input {
          padding-left: 0.9rem;
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
    @media screen and (max-width: 1024px) {
      flex-basis: auto;
    }
  }
  .details {
    margin-left: 2rem;
    background: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1.2rem;
    box-shadow: var(--base-shadow);
    align-items: center;
    @media screen and (max-width: 1024px) {
      margin-left: 0;
      margin-top: 2rem;
      width: 100%;
      max-width: 750px;
    }
    @media screen and (max-width: 768px) {
      max-width: 500px;
    }
    button {
      border: none;
      outline: none;
      color: #fff;
      font-weight: 600;
      background: var(--plum);
      padding: 0.75rem 1.5rem;
      font-size: 0.8rem;
      border-radius: 4rem;
      margin-top: 2rem;
      transition: box-shadow 0.2s;
      cursor: pointer;
      &:hover {
        box-shadow: var(--hover-shadow);
      }
      &:focus {
        outline: none;
        box-shadow: var(--base-shadow);
      }
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
  .breakdown {
    max-width: 300px;
    margin: 1.5rem auto 0;
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
    }
    .inputField {
      position: relative;
      font-weight: 600;

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
  .schedule {
    margin-top: 2rem;
    background: #fff;
    padding: 2rem;
    border-radius: 1.3rem;
    box-shadow: var(--base-shadow);
    width: 100%;
    @media screen and (max-width: 1024px) {
      max-width: 750px;
    }
    @media screen and (max-width: 768px) {
      max-width: 500px;
      padding: 1.5rem;
    }
    .chart {
      max-width: 800px;
      margin: 0 auto 3rem;
      display: flex;
      justify-content: center;
    }
    .dateInfo {
      margin: 0 auto 2rem;
      max-width: 700px;
      display: flex;
      justify-content: space-between;
      & > div {
        font-size: 0.85rem;
        margin: 1rem 0;
      }
      .endDate,
      input {
        margin-top: 0.5rem;
        padding: 0.75rem;
        font-size: 1rem;
        display: block;
      }
      .endDate {
        padding: 0rem;
        font-size: 2rem;
      }
      .react-datepicker {
        transform: scale(1.2);
        transform-origin: bottom left;
      }
      @media screen and (max-width: 550px) {
        flex-direction: column;
      }
    }
    table {
      width: auto;
      /* max-width: 640px; */
      margin: 0 auto;
      font-size: 0.9rem;
      line-height: 1.1;
      box-shadow: var(--base-shadow);
      @media screen and (max-width: 768px) {
        font-size: 0.65rem;
        .hideOnMobile {
          display: none;
        }
      }
    }
    thead th {
      text-align: right;
      font-weight: 500;
      padding: 1rem 0.75rem;
      background: var(--plum200);
    }
    tr {
      background: #fff;
    }
    tr:nth-of-type(2n + 1) {
      background: var(--plum50);
    }
    tbody td {
      text-align: right;
      padding: 1rem 0.75rem;
      &.date {
        text-align: center;
      }
    }
  }
`;

const ScheduleTable = ({
  mortgageAmount,
  interestRate,
  termsInMonths,
  getMonths,
  startDate,
  getTable,
}) => {
  const chartDataStyles = {
    lineTension: 1,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 2,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    fill: true,
  };
  const chartData = {
    labels: [
      ...getAmortizationArray(
        mortgageAmount.getAmount(),
        interestRate,
        termsInMonths
      ).map((item, i) => getMonths(termsInMonths, startDate)[i]),
    ],
    datasets: [
      {
        label: 'Remaining Balance',
        data: [
          ...getAmortizationArray(
            mortgageAmount.getAmount(),
            interestRate,
            termsInMonths
          ).map((item) => item.balance / 100),
        ],
        backgroundColor: 'rgba(106,82,206,0.2)',
        borderColor: 'rgba(106,82,206,1)',
        pointBorderColor: 'rgba(106,82,206,1)',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: 'rgba(106,82,206,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        ...chartDataStyles,
      },
      {
        label: 'Total Interest',
        data: [
          ...getAmortizationArray(
            mortgageAmount.getAmount(),
            interestRate,
            termsInMonths
          ).map((item) => item.totalInterestPaid / 100),
        ],
        backgroundColor: 'rgba(255,119,65,0.2)',
        borderColor: 'rgba(255,119,65,1)',
        pointBorderColor: 'rgba(255,119,65,1)',
        pointHoverBackgroundColor: 'rgba(255,119,65,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        ...chartDataStyles,
      },
      {
        label: 'Total Principal',
        data: [
          ...getAmortizationArray(
            mortgageAmount.getAmount(),
            interestRate,
            termsInMonths
          ).map((item) => item.totalPrincipalPaid / 100),
        ],
        backgroundColor: 'rgba(13,155,213,0.2)',
        borderColor: 'rgba(13,155,213,1)',
        pointBorderColor: 'rgba(13,155,213,1)',
        pointHoverBackgroundColor: 'rgba(13,155,213,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        ...chartDataStyles,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          callback(value) {
            return `${Dinero({
              amount: value * 100,
              currency: 'USD',
            }).toFormat('$0,0')}`;
          },
          color: '#666',
        },
      },
      x: {
        ticks: {
          color: '#666',
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        fullSize: false,
        labels: {
          color: '#666',
        },
      },
    },
  };
  return (
    <>
      <div className="chart">
        <Line
          data={chartData}
          width={500}
          height={300}
          options={chartOptions}
        />
      </div>
      <table width="100%">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Payment date</th>
            <th className="hideOnMobile">Payment</th>
            <th>Principal</th>
            <th>Interest</th>
            <th className="hideOnMobile">Total interest</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{getTable()}</tbody>
      </table>
    </>
  );
};

const AmortizationCalcPage: React.FC<PageProps> = ({ location }) => {
  const currentPath = location.pathname;
  const [mortgageAmount, setMortgageAmount] = useState(
    Dinero({ amount: 16500000, currency: 'USD' })
  );
  const [termsInYears, setTermsInYears] = useState(30);
  const [termsInMonths, setTermsInMonths] = useState(360);
  const [interestRate, setInterestRate] = useState(4.5);
  const [startDate, setStartDate] = useState(new Date());
  const [showSchedule, setShowSchedule] = useState(false);
  const monthlyPayment = Dinero({
    amount: getMonthlyPrincipal(
      mortgageAmount.getAmount(),
      interestRate,
      termsInYears
    ),
    currency: 'USD',
  });
  const handleMortgageAmountInput = (e) => {
    setShowSchedule(false);

    const newVal = parseInt(e.target.value.replace(/\$|,|\./g, '')) * 100 || 0;

    setMortgageAmount(Dinero({ amount: newVal }));
  };
  const handleTermInput = (e) => {
    setShowSchedule(false);
    const newVal = parseInt(e.target.value) || 1;
    const valueType = e.target.name;
    switch (valueType) {
      case 'termsInYears':
        setTermsInYears(newVal);
        setTermsInMonths(newVal * 12);
        break;
      case 'termsInMonths':
        setTermsInMonths(newVal);
        setTermsInYears(newVal / 12);
        break;
      default:
        break;
    }
  };
  const handleRateInput = (e) => {
    setShowSchedule(false);
    const newVal = parseFloat(e.target.value) || 0;
    if (newVal < 0 || newVal > 100) return;
    console.log(getDecimalByFloor(newVal, 2));
    setInterestRate(getDecimalByFloor(newVal, 2));
  };
  const getMonths = (length, date) => {
    const monthsList = [];

    for (let i = 0; i < length; i += 1) {
      const month = addMonths(date, i + 1);
      monthsList.push(format(month, 'MMM yyyy'));
    }
    return monthsList;
  };
  function getAmortizationTable() {
    const mortgage = mortgageAmount.getAmount();
    const arr = getAmortizationArray(mortgage, interestRate, termsInMonths);

    return arr.map((month) => {
      const {
        index,
        monthlyPayment: monthly,
        monthlyPrincipal,
        monthlyInterest,
        totalInterestPaid: totalInterest,
        balance: runningBalance,
      } = month;
      return (
        <tr key={index}>
          <td className="date">{getMonths(termsInMonths, startDate)[index]}</td>
          <td className="hideOnMobile">
            {Dinero({ amount: monthly }).toFormat('$0,0.00')}
          </td>
          <td>{Dinero({ amount: monthlyPrincipal }).toFormat('$0,0.00')}</td>
          <td>{Dinero({ amount: monthlyInterest }).toFormat('$0,0.00')}</td>
          <td className="hideOnMobile">
            {Dinero({ amount: totalInterest, currency: 'USD' }).toFormat(
              '$0,0.00'
            )}
          </td>
          <td>
            {Dinero({ amount: runningBalance, currency: 'USD' }).toFormat(
              '$0,0.00'
            )}
          </td>
        </tr>
      );
    });
  }

  return (
    <Layout path={currentPath}>
      <Seo title="Amortization Schedule Calculator" />
      <HeadingStyles>Amortization Schedule Calculator</HeadingStyles>
      <WrapperStyle>
        <form className="baseForm">
          <div className="row">
            <div className="inputLabel">Mortgage amount</div>
            <div className="inputFields">
              <input
                type="text"
                id="mortgageAmount"
                name="mortgageAmount"
                value={mortgageAmount.toFormat('$0,0')}
                onChange={(e) => handleMortgageAmountInput(e)}
                required
                inputMode="numeric"
              />
            </div>
          </div>
          <div className="row">
            <div className="inputLabel">Mortgage term</div>
            <div className="inputFields">
              <div className="years">
                <input
                  type="number"
                  id="termsInYears"
                  name="termsInYears"
                  value={termsInYears}
                  onChange={(e) => handleTermInput(e)}
                  required
                  inputMode="numeric"
                />
                <span>years</span>
              </div>
              <div className="spacer">OR</div>
              <div className="months">
                <input
                  type="number"
                  id="termsInMonths"
                  name="termsInMonths"
                  value={termsInMonths}
                  onChange={(e) => handleTermInput(e)}
                  required
                  inputMode="numeric"
                />
                <span>months</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="inputLabel">Interest rate per year</div>
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
            <div className="result">${monthlyPayment.toFormat('0,0.00')}</div>
          </div>
          <div className="breakdown">
            <div className="row">
              <div className="inputLabel">Total Principal Paid:</div>
              <div className="inputField">
                {mortgageAmount.toFormat('$0,0')}
              </div>
            </div>
            <div className="row">
              <div className="inputLabel">Total Interest Paid:</div>
              <div className="inputField">
                {Dinero({
                  amount: getTotalInterestPaid(
                    mortgageAmount.getAmount(),
                    interestRate,
                    termsInMonths
                  ),
                }).toFormat('$0,0.00')}
              </div>
            </div>
          </div>
          <button type="button" onClick={() => setShowSchedule(true)}>
            Show schedule
          </button>
        </div>
        {showSchedule ? (
          <>
            <div className="schedule">
              <div className="dateInfo">
                <div className="startDate">
                  <div className="label">Start date:</div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="startDate">
                  <div className="label">Estimated payoff date:</div>
                  <span className="endDate">
                    {format(addMonths(startDate, termsInMonths), 'PP')}
                  </span>
                </div>
              </div>
              <ScheduleTable
                mortgageAmount={mortgageAmount}
                interestRate={interestRate}
                termsInMonths={termsInMonths}
                getMonths={getMonths}
                startDate={startDate}
                getTable={getAmortizationTable}
              />
            </div>
          </>
        ) : null}
      </WrapperStyle>
    </Layout>
  );
};

export default AmortizationCalcPage;
