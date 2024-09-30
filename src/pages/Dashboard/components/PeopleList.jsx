import PeopleListItem from './PeopleListItem'
import PropTypes from 'prop-types'

function PeopleList(props) {
  PeopleList.propTypes = {
    people: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.shape({
          first: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired,
        }).isRequired,
        wage: PropTypes.number,
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
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
