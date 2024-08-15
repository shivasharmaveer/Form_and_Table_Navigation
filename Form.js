// function Form()
// {
//     return(
//        <div>
//           App
//        </div>
//     )
// };

// export default Form;

import React from 'react'

export const Form = () => {
  return (
  <div>

   <div className='main-div'>

    <div className='submain-div'>

      <div className='div'>
      <p className='para1'>First Name</p>
      <input 
            type="text" 
            placeholder="Your First name" 
          />
      </div>

      <br/>


    <div  className='div'>
      <p>Last Name</p>
      <input 
            type="text" 
            placeholder="Your Last name" 
          />
    </div>

    <br/>


    <div  className='div'>
       <p>Email</p>
      <input 
            type="Email" 
            placeholder="Enter Your Email here" 
          />
    </div>

    <br/>
          
    <div  className='div'>
         <p>Choose your Country</p>
        <select>
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="Austraia">Austraia</option>
            <option value="Brazil">Brazil</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
        </select>
    </div>

    <br/>

    
    <div  className='div'>
       <p>Street Address</p>
      <input 
            type="Address" 
            placeholder="Enter your Address here" 
          />
    </div>

    <br/>


    <div  className='div'>
      <p>Enter your City</p>
      <input 
            type="City" 
            placeholder="Enter your City here" 
          />
    </div>

    <br/>


     <div  className='div'>
      <p>Street Address</p>
      <input 
            type="Address" 
            placeholder="Enter your Address here" 
          />
    </div>

    <br/>


    <div  className='div'>
       <p>State/Province</p>
      <input 
            type="State" 
            placeholder="Enter your State here" 
          /> 
    </div>

    <br/>


    <div  className='div'>
        <p>ZIP/POSTAL CODE</p>
         <input 
            type="Code" 
            placeholder="Enter your ZIP/POSTAL here" 
          />
    </div>
    </div>

     <div className='feild'>
    <div>
          <p>By Email</p>

          <input 
            type="Checkbox" 
            id="Comments" 
          />
          <label htmlFor="comments">Comments</label>
          <br/>
          <input 
            type="Checkbox" 
            id="Candidates" 
          />
          <label htmlFor="Candidates">Candidates</label>
    </div>
 
 

        <div>
          <input 
            type="Checkbox" 
            id="Offers" 
          />
          <label htmlFor="Offers">Offers</label>

          </div>




</div>
</div>
      
    </div>
  );
};
