import React from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import Booking from './Booking'

function MyBooking() {
  return (
    <div className='page'>
        <Container>
            <Row>
                <Tabs fill variant="tabs" defaultActiveKey="Pending" style={{marginTop:"20px"}}>
                    <Tab eventKey="Pending" title="Pending">
                        <Booking bookingstatus="Pending"></Booking>
                    </Tab>
                    <Tab eventKey="Confirm" title="Confirm">
                        <Booking bookingstatus="Confirm"/>
                    </Tab>
                    <Tab eventKey="Cancel" title="Cancel">
                        <Booking bookingstatus="Cancel"/>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    </div>
  )
}

export default MyBooking