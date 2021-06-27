import React from 'react'
import {RootStateOrAny, useSelector} from 'react-redux'
import PeopleList from './PeopleList';
import './People.css';

export default function People () {
  const count = useSelector((state:RootStateOrAny) => state.counter.value);
  return (
    <div className="containerPeople">
      <PeopleList key={count}/>
    </div>
  );
}
