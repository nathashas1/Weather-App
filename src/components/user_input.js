import React from 'react';
const Form = ({weather}) => {
  return (
      <form onSubmit={weather(0)}>
        <div className="userInput">
          <input className="input" type="text" name="city" placeholder="City..." />
          <button className="submit" value="0">Get Weather</button>
        </div>
      </form>
  )
}
export default Form;
