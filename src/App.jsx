import { StrictMode, useState } from "react";
import InputGroup from "./components/InputGroup/InputGroup";
import Table from "./components/Table/Table";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [result, setResult] = useState();

  const [initialInvestmentTemporary, setInitialInvestmentTemporary] = useState(0);
  const [annualInvestmentTemporary, setAnnualInvestmentTemporary] = useState(0);
  const [expectedReturnTemporary, setExpectedReturnTemporary] = useState(0);
  const [durationTemporary, setDurationTemporary] = useState(0);

  function deriveResult({
    initialInvestmentTemporary,
    annualInvestmentTemporary,
    expectedReturnTemporary,
    durationTemporary
  }) {
    setResult(() => {
      let getFuncResult = calculateInvestmentResults(
        {
          initialInvestment: parseInt(initialInvestmentTemporary),
          annualInvestment: parseInt(annualInvestmentTemporary),
          expectedReturn: parseInt(expectedReturnTemporary),
          duration: parseInt(durationTemporary)
        }
      )
      let currentInvestment;
      for (let i = 0; i < getFuncResult.length; i++) {
        if (i != 0) {
          getFuncResult[i].annualInvestment = currentInvestment + getFuncResult[i].interest;
          currentInvestment += getFuncResult[i].interest;
        } else {
          getFuncResult[i].annualInvestment = getFuncResult[i].interest;
          currentInvestment = getFuncResult[i].interest;
        }
      }
      console.log(getFuncResult);
      return getFuncResult;
    }
    );
    console.log(initialInvestmentTemporary)

  }
  function getInitialInvestment(event) {
    const newInitialInvestment = event.target.value;
    setInitialInvestmentTemporary(newInitialInvestment);

    deriveResult({
      initialInvestmentTemporary: newInitialInvestment,
      annualInvestmentTemporary,
      expectedReturnTemporary,
      durationTemporary,
    });
  }

  function getAnnualInvestment(event) {
    const newAnnualInvestment = event.target.value;
    setAnnualInvestmentTemporary(newAnnualInvestment);

    deriveResult({
      initialInvestmentTemporary,
      annualInvestmentTemporary: newAnnualInvestment,
      expectedReturnTemporary,
      durationTemporary,
    });
  }

  function getExpectedReturn(event) {
    const newExpectedReturn = event.target.value;
    setExpectedReturnTemporary(newExpectedReturn);

    deriveResult({
      initialInvestmentTemporary,
      annualInvestmentTemporary,
      expectedReturnTemporary: newExpectedReturn,
      durationTemporary,
    });
  }

  function getDuration(event) {
    const newDuration = event.target.value;
    setDurationTemporary(newDuration);

    deriveResult({
      initialInvestmentTemporary,
      annualInvestmentTemporary,
      expectedReturnTemporary,
      durationTemporary: newDuration,
    });
  }

  const getAllInfoInvest = {
    initialInvestmentFunc: getInitialInvestment,
    annualInvestmentFunc: getAnnualInvestment,
    expectedReturnFunc: getExpectedReturn,
    durationFunc: getDuration
  };

  const inputIsValid = durationTemporary >= 1;
  return (
    <StrictMode>
      <InputGroup functions={getAllInfoInvest} />
      {inputIsValid ? <Table results={result ? result : null} /> : 'Type something'}
    </StrictMode>
  )
}

export default App
