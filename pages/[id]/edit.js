import {React,useState} from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,MDBInput
  } from 'mdb-react-ui-kit';
  import Link from 'next/link';
  import Router, { useRouter } from 'next/router';
  const axios=require('axios').default;
const EditHero=({heros})=> {
    const router=useRouter()
    const heroId=router.query.id;
   
const [form, setform] = useState({
    superHero:heros.superHero,
    realName:heros.realName
})
const handleChange=(e)=>{
    setform({
        ...form,
        [e.target.name]:e.target.value
    })
}
const handleForm=async(e)=>{
    e.preventDefault()
    console.log('kojo')
try {
    const res= await axios(`http://localhost:3000/api/hero/${heroId}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        data:JSON.stringify(form)
    })
    Router.push('/')
} catch (error) {
    console.log('koo')
    console.log(error.response)
}
}


  return (
    <div className='container'>
    <h1 className='display-3'>ADD NEW GOAL</h1>
    <form onSubmit={handleForm}>
    <MDBInput
    onChange={handleChange}
    label='SuperHero'
    type="text"
    name='superHero'
    value={form.superHero}
    />
    <MDBInput
    className='mt-2'
    onChange={handleChange}
    label='realName'
    type="text"
    name='realName'
    value={form.realName}
    />
    <MDBBtn type="submit">EDIT GOAL</MDBBtn>
    </form>
    </div>
  )
}
export async function getServerSideProps({params}){
    const id=params.id
    const res=await axios(`http://localhost:3000/api/hero/${id}`)
    // console.log(res.data.hero);
    const {hero}=res.data
    return {
        props:{heros:hero}
    }
  }
export default EditHero