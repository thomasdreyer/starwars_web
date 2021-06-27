import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import Loading from '../Loading/Loading';
import {URL} from '../../Constants';
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
    <div  className="animate__animated animate__flipInX"  style={{display:'flex',flexDirection:'row', width:'40%',height:'auto',flexWrap:'wrap',marginTop:100}}>

    <img
      src={img !== '' ? img : image[0].img}
      style={{width:'50%',height:'auto'}}
    />

    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',width:'40%',border:'1px solid yellow',backgroundColor:'black',opacity:0.7,color:'yellow'}}>
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      color:'black',
      backgroundColor:'yellow',
      width:'100%'

    }}>
          <span className="animate__animated animate__fadeIn" style={{fontSize:30,fontFamily:'fantasy'}}>{data.persons.results[0].name}</span>
    </div>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:50}}>
        <span style={{fontSize:20,fontFamily:'fantasy'}}>Height: {data.persons.results[0].height}</span>
          <span style={{fontSize:25,fontFamily:'fantasy'}}>Mass: {data.persons.results[0].mass}</span>
            <span style={{fontSize:20,fontFamily:'fantasy'}}>Gender: {data.persons.results[0].gender}</span>
            <span style={{fontSize:20,fontFamily:'fantasy'}}>Home World:</span>
<a href={data.persons.results[0].homeworld} >
              <span style={{fontSize:16,fontFamily:'fantasy'}}>{data.persons.results[0].homeworld}</span>
              </a>
</div>
</div>

    </div>
  );
}
