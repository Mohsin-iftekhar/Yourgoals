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
const AddNewHero=()=> {
    console.log('sdf')
const [form, setform] = useState({
    superHero:'',
    realName:''
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
    const res= await axios('http://localhost:3000/api/hero',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        data:JSON.stringify(form)
    })
//      axios.post('http://localhost3000/api/hero',{
//         headers:{
//                     "Content-Type":"application/json"
//                 },
//                 data:JSON.stringify(form)
//     })
    Router.push('/')
} catch (error) {
    console.log(error)
}
// try {
//     const response = await axios.post('http://localhost:1337/api/hero', {
//         data:form,
//       });
//       console.log(response);
//     } catch (error) {
//     console.log
//     }
//   } catch (error) {
//     console.log(error)
//   }
}


  return (
    <div className='container'>
    <h1 className='display-3'>ADD NEW GOAL</h1>
    <form onSubmit={handleForm}>
    <MDBInput
    onChange={handleChange}
    label='TITLE'
    type="text"
    name='superHero'
    />
    <MDBInput
    className='mt-2'
    onChange={handleChange}
    label='DESCRIPTION'
    type="text"
    name='realName'
    />
    <MDBBtn className='my-2' type="submit">ADD NEW GOAL</MDBBtn>
    </form>
    </div>
  )
}

export default AddNewHero