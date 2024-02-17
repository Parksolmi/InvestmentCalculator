import { useState } from 'react';

function UserInput ({ userInput,  onChange  }) {

  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label for="initial">initial investment</label>
            <input 
              id="initial" 
              type="number" 
              required 
              value={userInput.initialInvestment}
              onChange={(event) => onChange('initialInvestment', event.target.value)}
            />
          </p>
          <p>
            <label for="annual">annual investment</label>
            <input 
              id="annual" 
              type="number" 
              required
              value={userInput.annualInvestment}
              onChange={(event) => onChange('annualInvestment', event.target.value)}
            />
          </p>
        </div>
        
        <div className="input-group">
          <p>
            <label for="expected">expected return</label>
            <input 
              id="expected" 
              type="number" 
              required
              value={userInput.expectedReturn}
              onChange={(event) => onChange('expectedReturn', event.target.value)}
            />
          </p>
          <p>
            <label for="duration">duration</label>
            <input 
              id="duration" 
              type="number" 
              required
              value={userInput.duration}
              onChange={(event) => onChange('duration', event.target.value)}
            />
          </p>
        </div>
      </div>
    </section>
  )
}

export default UserInput;
