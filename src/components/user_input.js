import React from 'react';
const Form = ({weather}) => {
  return (
      <form onSubmit={weather}>
        <div className="userInput">
          <input className="input" type="text" name="city" placeholder="City..." />
          <button className="submit">Get Weather</button>
        </div>
      </form>
  )
}
export default Form;
