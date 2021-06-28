import React from "react";
import { useSelector } from 'react-redux'
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import Loading from '../Loading/Loading';
import {URL} from '../../Constants';
import './Person.css';
export default function Person({imageArray}) {
     const p = useSelector((state:any) => state.person.name)
     const img = useSelector((state:any) => state.person.img)
     const PERSON_QUERY = gql`{
           persons(p:"${p}") {
               results{
               name,
               height,
               mass,
               gender,
               homeworld
             }
           }
       }`;
  const { data, isLoading, error } = useQuery("persons", () => {
    return request(URL, PERSON_QUERY);
  });

const image = imageArray.filter((m,i)=> m.name.includes(p));

  if (isLoading) return <Loading/>
  if (error) return <pre>Error</pre>;

  return (
    <div  className="animate__animated animate__flipInX containerPerson">

    <img
      src={img !== '' ? img : image[0].img}
      alt={data.persons.results[0].name}
    />

    <div className="overViewContainer">
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      color:'black',
      backgroundColor:'yellow',
      width:'100%'

    }}>
          <span className="animate__animated animate__fadeIn heading">{data.persons.results[0].name}</span>
    </div>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:50}}>
        <span className="content">Height: {data.persons.results[0].height}</span>
        <span className="content">Mass: {data.persons.results[0].mass}</span>
        <span className="content">Gender: {data.persons.results[0].gender}</span>
        <span className="content">Home World:</span>
        <a href={data.persons.results[0].homeworld} >
          <span style={{fontSize:14,fontFamily:'fantasy'}}>{data.persons.results[0].homeworld}</span>
        </a>
    </div>

</div>

    </div>
  );
}
