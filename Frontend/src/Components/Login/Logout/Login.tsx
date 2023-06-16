import React from 'react'

const Login = () =>  {
  return (
    <div className='uk-login-container'>
      <div className='uk-card uk-card-default'>
      <form>

<div className="uk-margin">
    <div className="uk-inline">
        <span className="uk-form-icon" uk-icon="icon: user"></span>
        <input className="uk-input" type="text" aria-label="Not clickable icon" />
    </div>
</div>

<div className="uk-margin">
    <div className="uk-inline">
        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
        <input className="uk-input" type="text" aria-label="Not clickable icon" />
    </div>
</div>
3
</form>
      </div>
    </div>
  )
}

export default Login
