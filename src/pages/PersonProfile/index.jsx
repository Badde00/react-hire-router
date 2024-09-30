import { useNavigate, useLocation } from 'react-router-dom'
import HireForm from './components/HireForm'
import PropTypes from 'prop-types'

function PersonProfile({ hiredPeople, setHiredPeople }) {
  PersonProfile.propTypes = {
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
  }
  const { state } = useLocation()
  const { person } = state
  const navigate = useNavigate()

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm 
        person={person} 
        hiredPeople={hiredPeople} 
        setHiredPeople={setHiredPeople} 
        navigate={navigate} 
      />
    </article>
  )
}

export default PersonProfile
