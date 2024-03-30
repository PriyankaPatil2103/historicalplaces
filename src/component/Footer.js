import React from 'react'
import Wave from 'react-wavify';
import styled from '@emotion/styled';
import  ReactDOM  from 'react-dom';
import '../AllCss/Footer.css';
import { Col, Row } from 'react-bootstrap';

const WaveContainer = styled.div`
  position: fixed;
  margin-bottom: 0%;
  left: 0;
  right: 0;
  top: -5px;
  height: ${(props) => props.level + 'vh'};
  display: flex;
  z-index: -1;
  transform: rotate(180deg);
`;

function Footer() {
  return (
    <div>
        <Row>
         <div style={{ marginLeft: 'auto' }}>
       <Col>
       <h1>
            Contact Info:9172215409
        </h1></Col>
        <Col><h2>Address------J-890 Dwarka House New Delhi-110096</h2></Col>
        
      </div>
      </Row>

      <WaveContainer level={90}>
        <Wave
          fill="#00b6ad"
          paused={false}
          opacity="0.30"
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="#EEF5FF"
          opacity="0.80"
          paused={false}
          options={{
            height: 75,
            amplitude: 20,
            speed: 0.3,
            points: 2,
          }}
        />
      </WaveContainer>
      <WaveContainer level={90}>
        <Wave
          fill="#B4D4FF"
          paused={false}
          opacity="0.5"
          options={{
            height: 45,
            amplitude: 30,
            speed: 0.1,
            points: 4,
          }}
        />
      </WaveContainer>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Footer />, rootElement);
export default Footer