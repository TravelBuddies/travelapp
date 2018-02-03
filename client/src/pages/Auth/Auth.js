
import React, { Component } from 'react'
import API from '../../utils/API'
import AuthInterface from '../../utils/AuthInterface'
import { Redirect } from 'react-router-dom'
import { Col, Row, Container } from '../../components/Grid'
import { Input, FormBtn } from '../../components/Form'
import ErrorDisplay from '../../components/ErrorDisplay'
import $ from 'jquery';
import 'foundation-sites';


class Auth extends Component {

  state = {
    username: '',
    password: '',
    newUser: false,
    loggedIn: false
  }

  componentDidMount() {
    $(document).foundation();
    API.checkForSession()
      .then( res => {
        const { user } = res.data
        
        if ( user ) {
          AuthInterface.login( user )
          this.setState({ loggedIn: true })
        }
      })
      .catch(() => {})

  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const { username, password } = this.state
    console.log(this.state)

    if ( !(username && password) ) return

    // const authMethod = NewUser ? 'signup' : 'login'
    const credentials = { username, password }
    console.log(credentials)

    API.userLogin( credentials )
      .then( res => {
        const { errors, user } = res.data

        if ( errors ) {
          return this.setState({ errors })
        }

        AuthInterface.login( user )
        this.setState({ loggedIn: true })

      })
      .catch(console.error)
  }

  //   API.getUser( {username, password} )
  //     .then( res => {
  //       const { errors, user } = res.data

  //       if ( errors ) {
  //         return this.setState({ errors })
  //       }

  //       AuthInterface.login( user )
  //       this.setState({ loggedIn: true })

  //     })
  //     .catch(console.error)
  // }

  dismissError = idx => {
    const { errors } = this.state

    errors.splice(idx, 1)

    this.setState({ errors })
  }

  render() {
    const { loggedIn, newUser, errors, username, password } = this.state
    console.log(this.state)
    if ( loggedIn ) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <Container fluid>
        <Row>

          <Col size='md-4'></Col>

          <Col size='md-4'>

            <h1 style={{ textAlign: 'center', padding: 25 }}>
              {
                newUser ? 'Signup' : 'Login'
              }
            </h1>

            <form>

              <Input
                value={ username }
                onChange={ this.handleInputChange }
                name='username'
                placeholder='Username (required)'
              />

              <Input
                value={ password }
                onChange={ this.handleInputChange }
                name='password'
                type='password'
                placeholder='Password (required)'
              />

              <FormBtn
                disabled={ !(username && password) }
                onClick={ this.handleFormSubmit }
              >
                {
                  newUser ? 'Signup' : 'Login'
                }
              </FormBtn>

              <p
                style={{ color: 'blue', float: 'left', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={ () => this.setState({ newUser: !newUser }) }
              >
                {
                  newUser ? 'Already a user? Login instead' : 'Need an account? Signup instead'
                }
              </p>

            </form>
          </Col>
        </Row>

        <ErrorDisplay errors={ errors } dismiss={ this.dismissError } />

      </Container>
    )
  }
}

export default Auth
