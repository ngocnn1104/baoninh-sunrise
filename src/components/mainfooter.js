import React, { Component } from 'react';
import {Row, Col, Table} from 'react-bootstrap';

export default class MainFooter extends Component {
  render() {
    return(
      <Row id='main-footer'>
        <Col md={4}>
          <h4>ĐỊA CHỈ DỰ ÁN</h4>
          <p>123 Đà Nẵng, Việt Nam</p>
        </Col>

        <Col md={4}>
        <h4>ĐỊA CHỈ CÔNG TY</h4>
        <p>BẢO NINH SUNRISE</p>
        <Table responsive>
          <tr>
            <td>Địa chỉ:</td>
            <td>123 Đà Nẵng, Việt Nam</td>
          </tr>
          <tr>
            <td>Điện thoại:</td>
            <td>+84 (12) 3456789</td>
          </tr>
          <tr>
            <td>E-mail:</td>
            <td><a href='mailto:info@baoninhsunrise.vn'></a>info@baoninhsunrise.vn</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td><a href='http://baoninhsunrise.vn'>http://baoninhsunrise.vn</a></td>
          </tr>
        </Table>
        </Col>

        <Col md={4}>
          <h4>HOTLINE: 1800 1000</h4>
          <p>Email: info@baoninhsunrise.vn</p>
          <p>Website: <a href='http://baoninhsunrise.vn'>http://baoninhsunrise.vn</a></p>
          <p>* Hình ảnh chỉ mang tính chất minh họa.</p>
          <p>* Thông số trong bản vẽ là tương đối, thông số chính thức của từng căn sẽ được quy định tại văn bản ký kết giữa Chủ đầu tư và Khách hàng.</p>
          <p>* Thông tin trong tài liệu đúng tại thời điểm phát hành và Chủ đầu tư có quyền điều chỉnh trong quá trình triển khai mà không cần thông báo trước.</p>
        </Col>
      </Row>
    );
  }
}
