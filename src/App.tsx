import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <div className="App">
        {/* "Document Upload" section */}
        <header className="App-header">
          {/* title */}
          <p className='title'>Main Title</p>
          <div style={{ borderBottom: '1px solid #bbb', width: '18%', marginBottom: '20px', marginTop: '0px'}}></div>
        </header>

        <Row>
          {/* First column */}
          <Col>
            {/* "Select Import Name" section */}
            <Row>
              <Col>
                <div>
                  text
                </div>
              </Col>
            </Row>

            {/* "Drag & Drop" section */}
            <Row>
              <Col>
                <div>
                  text
                </div>
              </Col>
            </Row>
          </Col>

          {/* Second column */}
          <Col>
            {/* "Split schedule" section */}
            <Row>
              <Col>
                <div>
                  text
                </div>
              </Col>
            </Row>
            
            {/* "Location Checking" section */}
            <Row>
              <Col>
                <div>
                  text
                </div>
              </Col>
            </Row>

            {/* "Continue import" section */}
            <Row>
              <Col>
                <div>
                  text
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;