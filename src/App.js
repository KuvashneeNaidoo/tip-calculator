import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

// Variables to manage input values and state
function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [totalPeople, setPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);

  // Update the bill amount
  const handleBillAmount = (event) => {
    setBillAmount(event.target.value);
  };

  // Update the number of people with validation
  const handlePeople = (event) => {
    const peopleValue = event.target.value;
    if (peopleValue <= 0) {
      setShowAlert(true);
      setPeople("");
    } else {
      setShowAlert(false);
      setPeople(peopleValue);
    }
  };

  // Update the tip percentage
  const handleTipPercentage = (percentage) => {
    setTipPercentage(percentage);
    setCustomTip("");
    setSelectedTip(percentage);
  };

  // Update the custom tip amount
  const handleCustomTip = (event) => {
    const customValue = event.target.value;
    setCustomTip(customValue);
    setTipPercentage("");
  };

  // Calculate the tip amount per person
  const calculateTipAmount = () => {
    const effectiveTip = customTip ? customTip : tipPercentage;
    if (totalPeople > 0 && effectiveTip !== "") {
      return (billAmount * effectiveTip) / 100 / totalPeople;
    } else {
      return 0;
    }
  };

  // Calculate the total amount per person
  const calculateTotalPerPerson = () => {
    if (totalPeople > 0 && (customTip || tipPercentage)) {
      const tipAmount = calculateTipAmount();
      return tipAmount + billAmount / totalPeople;
    } else {
      return 0;
    }
  };

  // Reset input values and state
  const handleReset = () => {
    setBillAmount("");
    setPeople("");
    setTipPercentage("");
    setCustomTip("");
    setSelectedTip(null);
    setShowAlert(false);
  };

  return (
    <>
      {/* Title */}
      <h5>
        <span>spli</span>
        <span>tter</span>
      </h5>
      <Container>
        <Row>
          {/* Left column - input fields and tip percentage buttons */}
          <Col className="input">
            <div className="input-container">
              <h6>Bill</h6>
              <input
                type="text"
                onChange={handleBillAmount}
                value={billAmount}
                placeholder="0"
                className="dollar"
              />

              <h6>Select Tip %</h6>
              <div className="tip-buttons-container">
                {/* "active" class for styling */}
                <button
                  className={selectedTip === 5 ? "active" : ""}
                  onClick={() => handleTipPercentage(5)}
                >
                  5%
                </button>
                <button
                  className={selectedTip === 10 ? "active" : ""}
                  onClick={() => handleTipPercentage(10)}
                >
                  10%
                </button>
                <button
                  className={selectedTip === 15 ? "active" : ""}
                  onClick={() => handleTipPercentage(15)}
                >
                  15%
                </button>
                <button
                  className={selectedTip === 25 ? "active" : ""}
                  onClick={() => handleTipPercentage(25)}
                >
                  25%
                </button>
                <button
                  className={selectedTip === 50 ? "active" : ""}
                  onClick={() => handleTipPercentage(50)}
                >
                  50%
                </button>
                {/* Custom tip percentage */}
                <input
                  className="custom-tip-input"
                  placeholder="custom"
                  type="text"
                  onChange={handleCustomTip}
                  value={customTip}
                />
              </div>

              {/* Display alert if number of people is zero */}
              <h6>
                Number of people{" "}
                {showAlert && (
                  <span className="alert-message">Can't be zero</span>
                )}
              </h6>

              <input
                type="text"
                onChange={handlePeople}
                value={totalPeople}
                placeholder="0"
                className={`input-with-icon ${showAlert ? "alert" : ""}`}
              />
            </div>
          </Col>

          <Col className="output">
            {/* Right column - output tip amount and total (per person) */}
            <div className="tip-total-container">
              <h6>
                Tip Amount <span className="output-text">/ person</span>
              </h6>
              <span className="tip-total-value">
                {calculateTipAmount().toFixed(2)}
              </span>
            </div>

            <div className="tip-total-container">
              <h6>
                Total <span className="output-text">/ person</span>
              </h6>
              <span className="tip-total-value">
                {calculateTotalPerPerson().toFixed(2)}
              </span>
            </div>

            {/* Reset button */}
            {/* Check if values are populated or not */}
            <button
              className={`reset-btn ${
                billAmount && totalPeople && (tipPercentage || customTip)
                  ? "complete"
                  : "incomplete"
              }`}
              onClick={handleReset}
            >
              Reset
            </button>
          </Col>
        </Row>
      </Container>

      {/* Attributions */}
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/KuvashneeNaidoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kuvashnee Naidoo
        </a>
        .
      </div>
    </>
  );
}

export default TipCalculator;
