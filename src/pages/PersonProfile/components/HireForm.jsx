import { useState } from 'react'
import PropTypes from 'prop-types'

function HireForm({ person, hiredPeople, setHiredPeople, navigate }) {
  HireForm.propTypes = {
    person: PropTypes.shape({
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
      login: PropTypes.shape({
        uuid: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    hiredPeople: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.shape({
          first: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired,
        }).isRequired,
        wage: PropTypes.number,
        login: PropTypes.shape({
          uuid: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
    setHiredPeople: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }

  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault();
    
    const hiredPerson = { ...person, wage: parseFloat(wage) };
    
    setHiredPeople([...hiredPeople, hiredPerson]);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
