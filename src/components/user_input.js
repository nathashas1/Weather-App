import React from 'react';
const Form = ({weather}) => {
  return (
      <form onSubmit={weather}>
        <input type="text" name="city" placeholder="City..." />
        <button>Get Weather</button>
      </form>
  )
}
export default Form;
