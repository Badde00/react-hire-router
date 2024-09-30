import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'
import EditPerson from './pages/PersonProfile/components/EditPerson'

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);
  const navigate = useNavigate();

  // Fetch people only once on the initial load
  useEffect(() => {
    if (people.length === 0) {
      fetch('https://randomuser.me/api/?results=50')
        .then((response) => response.json())
        .then((data) => setPeople(data.results));
    }
  }, [people]);


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Link to="/">Dashboard</Link>
        </nav>
      </header>
      <Routes>
      <Route
          path="/"
          element={<Dashboard
            people={people}
            hiredPeople={hiredPeople}
            setHiredPeople={setHiredPeople}
          />}
        />
        <Route
          path="/view/:uuid"
          element={
            <PersonProfile
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              navigate={navigate}
            />
          }
        />
        <Route
          path="/edit/:uuid"
          element={
            <EditPerson
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </>
  )
}
