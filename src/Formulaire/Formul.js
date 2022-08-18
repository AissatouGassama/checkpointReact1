import React from 'react'

export default function Formul() {
  
    return (
      <div className='container'>
        <h2 className='inscr'>Formulaire d'inscription</h2>
          <form>
            <div className='fo'>
            <label className='style'> Name</label>
            <br/>
            <input type='text' className='form-control'/>
          </div>
          <div className='fo'>
            <label className='style'>Email</label>
            <br/>
            <input type='email'className='form-control'/>
          </div>
          <div className='fo'>
            <label className='style'>Téléphone</label>
            <br/>
            <input type='tel'className='form-contol'/>
          </div >
          <div className='fo'>
            <label className='style'>Password</label>
            <br/>
            <input type='password'className='form-contol'/>
          </div>
          <br/>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
          
      </div>
    )
  
  
}
