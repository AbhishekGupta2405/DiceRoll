import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./DieProbabilityPage.css";
import DieSimulator from "./DieSimulator";
import ProbabilityDistribution from "../assets/probability_distribution.svg";
import ExpectedValueConvergence from "../assets/expected_value_convergence.svg";

const DieProbabilityPage: React.FC = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <h1>Expected Rolls to Get a 6</h1>
        <div className="question">
          <h2>Question:</h2>
          <p>
            On average, how many times must a 6-sided die be rolled until a 6
            turns up?
          </p>
        </div>
        <div className="solution">
          <h2>Solution:</h2>
          <p>
            Let <MathJax inline>{"\\( X \\)"}</MathJax> be the random variable
            representing the number of rolls until a 6 appears.
          </p>
          <p>
            The probability that a 6 appears on the first roll is{" "}
            <MathJax inline>{"\\( P(X = 1) = \\frac{1}{6} \\)"}</MathJax>.
          </p>
          <p>
            The probability that a 6 appears on the second roll is{" "}
            <MathJax inline>
              {
                "\\( P(X = 2) = \\frac{5}{6} \\times \\frac{1}{6} = \\frac{5}{36} \\)"
              }
            </MathJax>
            .
          </p>
          <p>
            In general, the probability that{" "}
            <MathJax inline>{"\\( X = k \\)"}</MathJax> is:
          </p>
          <p>
            <MathJax>
              {
                "\\[ P(X = k) = \\left( \\frac{5}{6} \\right)^{k-1} \\times \\frac{1}{6} \\]"
              }
            </MathJax>
          </p>
          <h3>Step 1: Finding the Expected Value</h3>
          <p>
            The expected value of <MathJax inline>{"\\( X \\)"}</MathJax>,
            denoted by <MathJax inline>{"\\( E[X] \\)"}</MathJax>, is calculated
            as:
          </p>
          <p>
            <MathJax>
              {"\\[ E[X] = \\sum_{n=1}^{\\infty} n \\cdot P(X = n) \\]"}
            </MathJax>
          </p>
          <p>
            Substituting the value of{" "}
            <MathJax inline>{"\\( P(X = n) \\)"}</MathJax>:
          </p>
          <p>
            <MathJax>
              {
                "\\[ E[X] = \\sum_{n=1}^{\\infty} n \\cdot \\left( \\frac{5}{6} \\right)^{n-1} \\cdot \\frac{1}{6} \\]"
              }
            </MathJax>
          </p>
          <h3>Step 2: Simplifying the Series</h3>
          <p>
            Factor out <MathJax inline>{"\\( \\frac{1}{6} \\)"}</MathJax>:
          </p>
          <p>
            <MathJax>
              {
                "\\[ E[X] = \\frac{1}{6} \\sum_{n=1}^{\\infty} n \\cdot \\left( \\frac{5}{6} \\right)^{n-1} \\]"
              }
            </MathJax>
          </p>
          <p>
            Using the formula for the sum of an infinite series (see Appendix B
            of the original problem), we get:
          </p>
          <p>
            <MathJax>
              {"\\[ E[X] = \\frac{1}{6} \\cdot \\frac{6}{1 - \\frac{5}{6}} \\]"}
            </MathJax>
          </p>
          <p>Simplify:</p>
          <p>
            <MathJax>{"\\[ E[X] = 6 \\]"}</MathJax>
          </p>
          <h3>Step 3: Intuition Behind the Formula</h3>
          <p>
            Each roll of the die has a{" "}
            <MathJax inline>{"\\( \\frac{1}{6} \\)"}</MathJax> chance of being a
            6 and a <MathJax inline>{"\\( \\frac{5}{6} \\)"}</MathJax> chance of
            not being a 6. After every non-6 roll, the problem resets, and we
            expect to roll again.
          </p>
          <p>
            This recursive nature of the problem is captured in the equation:
          </p>
          <p>
            <MathJax>
              {
                "\\[ E = \\frac{1}{6} \\cdot 1 + \\frac{5}{6} \\cdot (E + 1) \\]"
              }
            </MathJax>
          </p>
          <p>
            Solving for <MathJax inline>{"\\( E \\)"}</MathJax>, we find:
          </p>
          <p>
            <MathJax>{"\\[ E = 6 \\]"}</MathJax>
          </p>
          <h3>Additional Explanation</h3>
          <p>
            Here's another, quite different way to solve this problem. When
            rolling a die, there is a{" "}
            <MathJax inline>{"\\( \\frac{1}{6} \\)"}</MathJax> chance that a 6
            will appear. If a 6 doesn't appear, then we're essentially starting
            over. That is to say, the number of times we expect to throw the die
            before a 6 shows up is the same as the number of additional times we
            expect to throw the die after throwing a non-6.
          </p>
          <p>
            So we have a <MathJax inline>{"\\( \\frac{1}{6} \\)"}</MathJax>{" "}
            chance of rolling a 6 (and stopping) and a{" "}
            <MathJax inline>{"\\( \\frac{5}{6} \\)"}</MathJax> chance of not
            rolling a 6, after which the number of rolls we expect to throw is
            the same as when we started. We can formulate this as:
          </p>
          <p>
            <MathJax>
              {
                "\\[ E = \\frac{1}{6} \\cdot 1 + \\frac{5}{6} \\cdot (E + 1) \\]"
              }
              .
            </MathJax>
          </p>
          <p>
            Solving for <MathJax inline>{"\\( E \\)"}</MathJax>, we find:
          </p>
          <p>
            <MathJax>{"\\[ E = 6 \\]"}</MathJax>
          </p>
          <p>
            Note that this equation assumes that{" "}
            <MathJax inline>{"\\( E \\)"}</MathJax> is a finite number, which is
            not guaranteed beforehand but is validated by the solution.
          </p>

          <div className="graphs-section">
            <h3>Visualization</h3>
            <p>
              Below are visual representations of the probability distribution
              and the convergence of expected rolls to get a 6.
            </p>
            <img
              src={ProbabilityDistribution}
              alt="Probability Distribution Graph"
            />
            <img
              src={ExpectedValueConvergence}
              alt="Expected Value Convergence Graph"
            />
          </div>

          <DieSimulator />
        </div>
      </div>
    </MathJaxContext>
  );
};

export default DieProbabilityPage;
