import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios=require('axios').default;
const index=({heros})=> {
  return (
    <div className='container'>
  <h1 className="display-2">YOUR GOALS LIST</h1>
  <div>
  {heros.map(hero=>{
    return(
      <MDBCard key={hero.superHero}>
      <MDBCardBody>
        <MDBCardTitle>{hero.superHero}</MDBCardTitle>
    
        <Link href={`/${hero._id}`}>
        <MDBBtn className='mx-2'>VIEW THIS GOAL</MDBBtn>
        </Link>
        <Link href={`/${hero._id}/edit`}>
        <MDBBtn>EDIT GOAL</MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
    )
   })}
  </div>
    </div>
  )
}
index.getInitialProps=async()=>{
  const res=await axios('http://localhost:3000/api/hero')
  // console.log(res.data.hero);
  const {hero}=res.data
  return {heros:hero}
}
export default index