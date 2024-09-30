import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'


function EditPerson({ hiredPeople, setHiredPeople }) {
  EditPerson.propTypes = {
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
  const { uuid } = useParams()
  const navigate = useNavigate()

  const person = hiredPeople.find(p => p.login.uuid === uuid)

  // Manage form state for each field
  const [firstName, setFirstName] = useState(person?.name.first || '')
  const [lastName, setLastName] = useState(person?.name.last || '')
  const [city, setCity] = useState(person?.location.city || '')
  const [wage, setWage] = useState(person?.wage || 0)

  if (!person) return <p>Person not found!</p>

  function handleSubmit(event) {
    event.preventDefault()

    // Update the hired person’s information
    const updatedPeople = hiredPeople.map(p => 
      p.login.uuid === uuid 
        ? { 
            ...p, 
            name: { ...p.name, first: firstName, last: lastName },
            location: { ...p.location, city: city },
            wage: parseFloat(wage)
          }
        : p
    )

    setHiredPeople(updatedPeople)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit {person.name.first} {person.name.last}</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={e => setFirstName(e.target.value)}
        value={firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={e => setLastName(e.target.value)}
        value={lastName}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={e => setCity(e.target.value)}
        value={city}
      />

      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />

      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditPerson
