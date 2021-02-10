import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div>
        <Nav className='justify-content-center '>
        <Nav.Item>
        {step1 ? (
          <LinkContainer to='/Stepper'>
            <Nav.Link>Personal</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Personal</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/Adress'>
            <Nav.Link>Address</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Address</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/Education'>
            <Nav.Link>Education</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Education</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/Documents'>
            <Nav.Link>Documents</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Documents</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/Undertaking'>
            <Nav.Link>Undertaking</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Undertaking</Nav.Link>
        )}
      </Nav.Item>


      
    </Nav>
    </div>
   
  )
}

export default CheckoutSteps