const React = require('react')
const Default = require('../layouts/Default')


class SignUp extends React.Component {
  render () {
    return (
      <Default title="Sign Up For Legos">
        <form action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Create Account' />
          </fieldset>
        </form>
        <a href={'/user/login'}>Log in if you have an account!</a>
      </Default>
    )
  }
}

module.exports = SignUp