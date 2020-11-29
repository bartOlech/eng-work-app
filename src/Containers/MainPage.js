import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../Redux/Actions/getUser';
import { getMainMatched } from '../Redux/Actions/getMainMatched';
import { getSecondMatched } from '../Redux/Actions/getSecondMatched';

import Main from '../Components/Main';

import image from '../assets/user.svg';

const MainPage = ({ getUser, getMainMatched, getSecondMatched, mainMatchedDataFromApi, secondMatchDataFromApi }) => {
  const[users, setUsers] = useState([]);

  // Do usunięcia w przyszłości, będzie pobierane z api
  const mainMatchData = [
    {
      mainMatch: 'Język angielski',
      additionalMatch: ['Piłka nozna', 'Koszykówka', 'Pływanie'],
      userName: 'Mateusz',
      image,
      levelOfMatch: 2,
      place: 'Kraków',
    },
    {
      mainMatch: 'Matematyka',
      additionalMatch: ['Rowery', 'Siłownia', 'Boks'],
      userName: 'Janek',
      image,
      levelOfMatch: 3,
      place: 'Brak danych',
    }
  ];

  const secondMatchData = {
    mainMatch: 'Język polski',
    userName: 'Weronika',
    matchBy: 'Miejsce zamieszkania',
    place: 'Wrocław',
  }

  // Zalogowany user
  const user = 'werew4f52';

  useEffect(() => {
    fetch(`http://localhost:8080/results?name=${user}`).then(res => res.json()).then(json => {
        setUsers(json)
    }).catch(err => console.log(err))

    // Symulacja pobrania z api
    getUser('Bart', image);
    getMainMatched(mainMatchData)
    getSecondMatched(secondMatchData)
  }, [])

  return (
    <div>
      {console.log(users)}
      <Main mainMatchData={mainMatchedDataFromApi} secondMatchData={secondMatchDataFromApi} />
    </div>

  )
}

const mapStateToProps = (state) => ({
  mainMatchedDataFromApi: state.matchData.mainMatchedData,
  secondMatchDataFromApi: state.matchData.secondMatchedData,
})

const mapDispatchToProps = {
  getUser,
  getMainMatched,
  getSecondMatched
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);