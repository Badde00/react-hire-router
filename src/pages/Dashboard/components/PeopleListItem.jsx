import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  PeopleListItem.propTypes = {
    person: PropTypes.shape({
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
    }).isRequired,
  };
  const { person } = props;

  return (
    <li key={person.login.uuid}>
      <h3>
        <Link to={`/view/${person.login.uuid}`} state={{ person }}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <p>
        {person.location.city}, {person.location.country}
      </p>
      <p>Age: {person.dob.age}</p>
    </li>
  );
}

export default PeopleListItem;

/**
 * Data example:
 * {
  "results":[
    {
      "gender":"male",
      "name":{
        "title":"Mr",
        "first":"Sátiro",
        "last":"Costa"
      },
      "location":{
        "street":{
          "number":4671,
          "name":"Rua Pará "
        },
        "city":"Lauro de Freitas",
        "state":"Acre",
        "country":"Brazil",
        "postcode":25009,
        "coordinates":{
          "latitude":"-73.0886",
          "longitude":"-165.5683"
        },
        "timezone":{
          "offset":"+1:00",
          "description":"Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email":"satiro.costa@example.com",
      "login":{
        "uuid":"e2777702-ad16-4361-879b-01d66665b70a",
        "username":"purplepanda140",
        "password":"holycow",
        "salt":"N2fzpyha",
        "md5":"2d608b256563e6bceb39d02a7958da4d",
        "sha1":"f7eedbdfa4bf8682cd06ad4ca25a3a4893e11f44",
        "sha256":"90510f08c88a3e07aebd024fd55e7b6ca15789af7773bb97aec10436ab5bd965"
      },
      "dob":{
        "date":"1948-06-25T17:34:59.143Z",
        "age":76
      },
      "registered":{
        "date":"2019-06-07T12:51:08.434Z",
        "age":5
      },
      "phone":"(44) 4374-0677",
      "cell":"(68) 8320-5776",
      "id":{
        "name":"CPF",
        "value":"819.911.185-91"
      },
      "picture":{
        "large":"https://randomuser.me/api/portraits/men/39.jpg",
        "medium":"https://randomuser.me/api/portraits/med/men/39.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/men/39.jpg"
      },
      "nat":"BR"
    }
  ],
  "info":{
    "seed":"c1526240ac6225a7",
    "results":1,
    "page":1,
    "version":"1.4"
  }
}
 */
