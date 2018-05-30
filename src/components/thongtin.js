import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class ThongTin extends Component {
  render() {
    return(
      <Row id='thong-tin'>
        <Col md={6}>
          <h3 className='bold'>THÔNG TIN DỰ ÁN</h3>
          <p>Trải dài trên dải cát trắng mênh mông, quyện vào hơn 4km mặt Sông – Biển, bán đảo Bảo Ninh xinh đẹp, huyền diệu tựa viên ngọc sáng tô điểm cho nét đẹp trong sáng tự nhiên của nàng tiên bán đảo trải mình giữa hai làn nước xanh thẳm, một bên là biển cả bao la, một bên là dòng Nhật Lệ thơ mộng.</p>
          <p>Đến với Bảo Ninh Sunrise – đến với thiên đường sống và nghỉ dưỡng lý tưởng, nơi con người và thiên nhiên giao hoà, đem lại sự thư thái trong tâm hồn.</p>
        </Col>

        <Col md={6}>
          <h3 className='bold'>KHU BIỆT THỰ SINH THÁI - BẢO NINH SUNRISE</h3>
          <p><span className='bold'>Vị trí:</span> Bán đảo Bảo Ninh, Thành phố Đồng Hới, Tỉnh Quảng Bình
          <br/><span className='bold'>Tổng diện tích:</span> 5,5ha gồm 120 căn biệt thự, được chia làm 2 phân khu chính:</p>
          <ul>
            <li>River: 3,7ha – 80 villa</li>
            <li>Ocean: 1,8ha - 40 villa</li>
          </ul>
          <p><span className='bold'>Chủ đầu tư:</span> Tập đoàn Trường Thịnh
          <br/><span className='bold'>Đơn vị phân phối dự án:</span> Công ty Cổ phần Bất động sản Protech
          <br/><span className='bold'>Đơn vị thi công xây dựng:</span> Công ty Cổ phần Vinaconex 25
          <br/><span className='bold'>Quản lý vận hành và cho thuê:</span> Sun Spa Resort</p>
        </Col>
      </Row>
    );
  }
}
