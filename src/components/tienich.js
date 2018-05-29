import React, { Component } from 'react';
import {Row, Col, Carousel, Table} from 'react-bootstrap';

const utilities = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
let table1=[]; let table2=[]; let table3=[];
for (let i=1; i < 4; i++) {
  table1.push(<tr>
                <td>{i}</td>
                <td>{utilities[i-1]}</td>
                <td>{i+1}</td>
                <td>{utilities[i]}</td>
              </tr>);
  i++;
}

for (let i=5; i < 8; i++) {
  table2.push(<tr>
                <td>{i}</td>
                <td>{utilities[i-1]}</td>
                <td>{i+1}</td>
                <td>{utilities[i]}</td>
              </tr>);
  i++;
}

for (let i=9; i < 12; i++) {
  table3.push(<tr>
                <td>{i}</td>
                <td>{utilities[i-1]}</td>
                <td>{i+1}</td>
                <td>{utilities[i]}</td>
              </tr>);
  i++;
}

export default class TienIch extends Component {
  render() {
    return(
      <Row id='tien-ich'>
        <Col md={4} id='tienich-text'>
          <h2>TIỆN ÍCH</h2>
          <p>Lorem ipsum dolor sit amet, sed eu graece senserit, nulla detraxit indoctum per ad. Autem omnium timeam vis ei. Cu partem placerat pri, corpora euripidis no eam. Harum luptatum usu ut, veri inermis scribentur mel ei. Aperiam albucius perfecto est et, ornatus voluptatum sed in, ad veri volumus dolores pri. Quando delicata cum ad, vis prompta periculis consetetur ei. Ex mel fugit laudem posidonium.</p>

          <Carousel controls={false}>
            <Carousel.Item>
              <Table responsive>
                {table1}
              </Table>
            </Carousel.Item>
            <Carousel.Item>
            <Table responsive>
              {table2}
            </Table>
            </Carousel.Item>
            <Carousel.Item>
            <Table responsive>
              {table3}
            </Table>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md={8} style={{padding: '0'}}>
           <iframe src="http://vrplus.vn/vr/" width='100%' height='500px' frameBorder={'0'} title="VR Tour"></iframe>
        </Col>
      </Row>
    );
  }
}
