//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

    // score functions
    const homeTouch = e => {
      setHomeScore(homeScore + 7);
    };
    const homeField = e => {
      setHomeScore(homeScore + 3);
    };
    const awayTouch = e => {
      setAwayScore(awayScore + 7);
    };
    const awayField = e => {
      setAwayScore(awayScore + 3);
    }
  
    // team name hooks
    const [homeTeam, setHomeTeam] = useState('Lions');
    const [awayTeam, setAwayTeam] = useState('Tigers');
  
    // change quarter function
    const [quarter, setQuarter] = useState(1);
    const changeQuarter = e => {
      setQuarter(quarter + 1)
      if (quarter === 4) {
        alert `Game Over`;
        setQuarter(1);
        setHomeScore(0);
        setAwayScore(0);
      }
    }
  
    // clock timer

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouch}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeField}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouch}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayField}>Away Field Goal</button>
        </div>
        <div className="quarterButton">
          <button className="addQuarter" onClick={changeQuarter}>Start New Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
