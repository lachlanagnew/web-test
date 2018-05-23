import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

const style = {
  card: {
    backgroundColor: '#eee'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  contactHeading: {
    marginLeft: 20
  }
}

class ContactCard extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div style={style.card}>
        <Row>
          <Col md={12}>
            <div class='well well-sm'>
              <form class='form-horizontal' action='' method='post'>
                <fieldset>
                  <h3 style={style.contactHeading}> Contact Us </h3>
                  <div style={style.formContainer}>
                    <label class='col-md-3 control-label' for='name'>Name</label>
                    <input id='name' name='name' type='text' placeholder='Your name' class='form-control' />
                    <label class='col-md-3 control-label' for='email'>Your E-mail</label>
                    <input id='email' name='email' type='text' placeholder='Your email' class='form-control' />
                    <label class='col-md-3 control-label' for='message'>Your message</label>
                    <textarea class='form-control' id='message' name='message' placeholder='Please enter your message here...' rows='5' />

                    <div class='form-group'>
                      <div class='col-md-12 text-right'>
                        <button type='submit' class='btn btn-primary btn-lg'>Submit</button>
                      </div>
                    </div>
                  </div>

                </fieldset>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ContactCard
