import React, { useState } from 'react';

//thousand separator orrr comma
const thousandSeparator = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const LoanCalculator = () => {
  //initialization of hooks i used for loan amount, interest rate, etc pati yung results nila
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [monthlyInterest, setMonthlyInterest] = useState(null);

  const calculateLoan = () => {
    //extracts values from the state and converts them to float type
    const principal = parseFloat(loanAmount.replace(/,/g, ''));
    const rate = parseFloat(interestRate) / 100 / 12; 
    const term = parseInt(loanTerm, 10);
    
    //calculates monthly payment, total payment, interest, etc, results
    const monthlyPayment =
      (principal * rate) / (1 - Math.pow(1 + rate, -term));
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - principal;

    // simple calculation of monthly interest that i separated
    const monthlyInterest = totalInterest / term;

    //updates state with the formatted resylt 
    setMonthlyRepayment(`₱${thousandSeparator(monthlyPayment.toFixed(2))}`);
    setTotalRepayment(`₱${thousandSeparator(totalPayment.toFixed(2))}`);
    setMonthlyInterest(`₱${thousandSeparator(monthlyInterest.toFixed(2))}`);
  };

  return (
    <div>
      <h2 className='loantitle'>Loan Calculator</h2>
      <div>
        <label>
          Loan Amount (₱):
          <input
            type="text"
            value={thousandSeparator(loanAmount)}
            onChange={(e) => setLoanAmount(e.target.value.replace(/,/g, ''))}
          />
        </label>
      </div>
      <div>
        <label>
          Interest Rate (%):
          <input
            type="text"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Loan Term (months):
          <input
            type="text"
            value={thousandSeparator(loanTerm)}
            onChange={(e) => setLoanTerm(e.target.value.replace(/,/g, ''))}
          />
        </label>
      </div>
      <button onClick={calculateLoan} className='calculate'>Calculate</button>
      {monthlyRepayment !== null && totalRepayment !== null && monthlyInterest !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>Here's your estimated amortization:</h3>
          <p>Monthly Interest: {monthlyInterest}</p>
          <p>Total Monthly Repayment: {monthlyRepayment}</p>
          <p>TOTAL REPAYMENT: {totalRepayment}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
