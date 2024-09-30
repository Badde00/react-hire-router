import { Link } from 'react-router-dom'
import PeopleList from './components/PeopleList'
import PropTypes from 'prop-types'

function Dashboard({ people, hiredPeople }) {
  Dashboard.propTypes = {
    people: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.shape({
          first: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired,
        }).isRequired,
        location: PropTypes.shape({
          city: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
        }).isRequired,
        login: PropTypes.shape({
          uuid: PropTypes.string.isRequired,
        }).isRequired,
        dob: PropTypes.shape({
          age: PropTypes.number.isRequired,
        }).isRequired,
      })
    ).isRequired,
    hiredPeople: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.shape({
          first: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired,
        }).isRequired,
        location: PropTypes.shape({
          city: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
        }).isRequired,
        login: PropTypes.shape({
          uuid: PropTypes.string.isRequired,
        }).isRequired,
        dob: PropTypes.shape({
          age: PropTypes.number.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <ul>
          {hiredPeople.map(person => (
            <li key={person.login.uuid}>
              {person.name.first} {person.name.last} - Wage: {person.wage || 'N/A'}
              <Link to={`/edit/${person.login.uuid}`}>Edit</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Dashboard
