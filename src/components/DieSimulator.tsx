import React, { useState } from "react";

// Function to calculate average rolls over a set number of simulations
const calculateAverageRolls = (iterations: number): number => {
  let totalRolls = 0;

  for (let i = 0; i < iterations; i++) {
    let count = 0;
    while (Math.floor(Math.random() * 6) + 1 !== 6) {
      count++;
    }
    totalRolls += count + 1; // Add one for the successful roll
  }

  return totalRolls / iterations;
};

const DieSimulator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null); // Stores the current roll result
  const [rolls, setRolls] = useState<number>(0); // Tracks the number of rolls since the last 6
  const [totalSixes, setTotalSixes] = useState<number>(0); // Counts the number of 6s rolled
  const [rollsForSix, setRollsForSix] = useState<number[]>([]); // Array to store rolls taken to get each 6
  const [totalRolls, setTotalRolls] = useState<number>(0); // Tracks the total number of rolls
  const [averageRolls, setAverageRolls] = useState<number | null>(null); // Average rolls for 10,000 simulations
  const [isRolling, setIsRolling] = useState<boolean>(false); // State to handle the button text during simulation

  // Function to handle individual die roll
  const rollDie = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setResult(roll);
    setRolls(rolls + 1);
    setTotalRolls(totalRolls + 1);

    if (roll === 6) {
      setTotalSixes(totalSixes + 1);
      setRollsForSix((prev) => [...prev, rolls + 1]);
      setRolls(0); // Reset the rolls counter after rolling a 6
    }
  };

  // Function to handle 10,000 roll simulations
  const handleRolls = () => {
    setIsRolling(true);
    setTimeout(() => {
      const result = calculateAverageRolls(10000);
      setAverageRolls(result);
      setIsRolling(false);
    }, 1000); // Adding a delay for better UX
  };

  // Calculate the average rolls needed to get a 6
  const averageRollsToGetSix = rollsForSix.length
    ? (rollsForSix.reduce((a, b) => a + b, 0) / rollsForSix.length).toFixed(2)
    : "N/A";

  return (
    <div className="simulation">
      <h2>Die Roll Simulator</h2>
      <p>
        Use this interactive simulator to experiment and observe how many rolls
        it takes to get a 6.
      </p>
      <div className="simulator">
        {/* Roll die button */}
        <button className="roll-die-button" onClick={rollDie}>
          Roll the Die
        </button>

        <div className="result-display">
          {/* Displaying the results */}
          <p>
            Result: <span className="result-number">{result || "-"}</span>
          </p>
          <p>
            Rolls Since Last 6: <span className="total-rolls">{rolls}</span>
          </p>
          <p>
            Total Rolls Made: <span className="total-die-rolls">{totalRolls}</span>
          </p>
          <p>
            Total 6s Rolled: <span className="total-sixes">{totalSixes}</span>
          </p>
          <p>
            Average Rolls to Get a 6:{" "}
            <span className="average-rolls">{averageRollsToGetSix}</span>
          </p>
        </div>
      </div>

      <div className="simulation-conclusion">
        <p>
          As the number of die rolls increases, the average rolls to get a 6
          will keep getting closer to 6.
        </p>
      </div>

      {/* Button to trigger the 10,000 rolls simulation */}
      <div className="simulation-buttons">
        <button
          onClick={handleRolls}
          disabled={isRolling}
          style={{
            backgroundColor: "#5f9ea0",
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            cursor: isRolling ? "not-allowed" : "pointer",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {isRolling ? "Rolling..." : "Roll 10,000 times"}
        </button>

        {/* Displaying the average rolls result from 10,000 simulations */}
        {averageRolls !== null && !isRolling && (
          <p>
            Average rolls over 10,000 simulations:{" "}
            {averageRolls.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default DieSimulator;
