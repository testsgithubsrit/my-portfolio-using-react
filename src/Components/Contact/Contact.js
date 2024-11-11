import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import './Contact.css';
const Contact = () => {
  const{
    register,
    handleSubmit,
   // watch,
    formState:{errors},
  }=useForm();


  const[loading,setloading]=useState(false);
  const onSubmit=(data)=>{
    console.log(data);
  setloading(true);

    // Disable button for 5 seconds
    setTimeout(()=>{
      setloading(false);
      alert('Form submitted');
    },5000);
  };
  return (
    <>
    <div className='bg'>
    <div className='containers mt-4'>
    <form onSubmit={handleSubmit (onSubmit)} >
    <div className="mb-3 ">
    <label htmlfor="fname" className="form-label">First Name*</label>
    <input type="text"
     className="form-control"
     id="fname"
     {...register('fname',{required:'first name is required'})} />
      {errors.fname && <p className="text-danger">{errors.fname.message}</p>}
  </div>
  <div className="mb-3 ">
    <label htmlfor="lname" className="form-label">Last Name*</label>
    <input type="text"
     className="form-control" 
     id="lname"
     {...register('lname',{required:'Last name is required'})} />
     {errors.lname && <p className="text-danger">{errors.lname.message}</p>}
  </div>
  <div className="mb-3 ">
    <label htmlfor="mobile" className="form-label">Mobile No.*</label>
    <input type="tel"
     className="form-control"
      id="mobile"
      {...register('mobile',{
        required:'mobile no. is required',
        minLength:{value:10,message:'mobile no. must be 10 digits'},
        maxLength:{value:10,message:'mobile no. must be 10 digits'},
        pattern:{value:/^\d{10}$/,message:'enter a valid mobile number'},
      })}/>
      {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
  </div>
  <div className="mb-3 email">
    <label htmlfor="email" className="form-label">Email address*</label>
    <input type="email"
     className="form-control" 
     id="email"
     {...register('email',{required:'Email is required',
      pattern:{
        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message:'Enter a valid enail address',
      },
     })}/>
     {errors.email&&<p className='text-danger'>{errors.email.message}</p>}
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Password*</label>
    <input type="password" className="form-control" id="exampleInputPassword1"required/>
  </div>

  <div className="mb-3">
  <label htmlfor="Textarea"> your feedback*</label>
  <textarea className="form-control" 
  placeholder="Leave a comment here" 
  id="Textarea"rows="5"
  {...register('Textarea',{required:'feedback is required'})}></textarea>
   {errors.Textarea&&<p className='text-danger'>{errors.Textarea.message}</p>}
</div>


  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"required/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className='submit'>
  <button type="submit" className="btn btn-primary " disabled={loading}>  {loading?'submitting...':'Submit'}</button>
  </div>
</form>
</div>
  <Footer/>  
</div> 
    </>
  )
}

export default Contact;