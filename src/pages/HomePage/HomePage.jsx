
import React, { Component } from 'react'
import CarouselHome from '../../Components/Carousel/CarouselHome';
import { Tabs,  Row, Col,BackTop ,  Avatar, Card, List } from 'antd';
import NavBar from '../../Components/NavBar/NavBar'

const { TabPane } = Tabs;



export default class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			current: 'mail',
		}
	}

	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	};

	callback = (key) => {
		console.log(key);
	}
	render() {
		const data1 = [
			{
				title: 'Title 1',
				src: require('../../assets/images/imgKhoaHoc/1.jpg')

			},
			{
				title: 'Title 2',
				src: require('../../assets/images/imgKhoaHoc/2.jpg')
			},
			{
				title: 'Title 3',
				src: require('../../assets/images/imgKhoaHoc/3.jpg')
			},
			{
				title: 'Title 1',
				src: require('../../assets/images/imgKhoaHoc/4.jpg')

			},
			{
				title: 'Title 3',
				src: require('../../assets/images/imgKhoaHoc/5.jpg')
			},
			{
				title: 'Title 4',
				src: require('../../assets/images/imgKhoaHoc/avatar_5.jpg')
			},
		];

		const dataCamNhanHocVien = [
			{
				title: 'Title 1',
				src: require('../../assets/images/camNhan/28.jpg')

			},
			{
				title: 'Title 2',
				src: require('../../assets/images/camNhan/29.jpg')
			},
			{
				title: 'Title 3',
				src: require('../../assets/images/camNhan/30.jpg')
			},
			{
				title: 'Title 1',
				src: require('../../assets/images/camNhan/31.jpg')

			},
			{
				title: 'Title 3',
				src: require('../../assets/images/camNhan/32.jpg')
			},
			{
				title: 'Title 4',
				src: require('../../assets/images/camNhan/33.jpg')
			},
			{
				title: 'Title 1',
				src: require('../../assets/images/camNhan/34.jpg')

			},
			{
				title: 'Title 3',
				src: require('../../assets/images/camNhan/35.jpg')
			},
			{
				title: 'Title 4',
				src: require('../../assets/images/camNhan/37.jpg')
			},
		];

		return (
			<div className="homepage">
				<div className="clearfix"></div>
				<NavBar/>
				<div className="clearfix"></div>

				<CarouselHome />
				<div className="clearfix"></div>

				<section className="tabHocVien" id="tabHocVien">
					<Tabs className="tab" defaultActiveKey="1" onChange={() => this.callback()} >
						<TabPane className="tabPane" tab="E.Learning l?? ai?" key="1" >
							<Row type="flex" justify="space-around" align="middle">
								<Col span={10}>
									<h3>Ch??ng t??i tin v??o ti???m n??ng c???a con ng?????i</h3>
									<p>E.Learning ???????c th??nh l???p d???a tr??n ni???m tin r???ng b???t c??? ai c??ng c?? th??? h???c l???p tr??nh.</p>
									<p>B???t k??? ai c??ng c?? th??? l?? m???t l???p tr??nh, tham gia trong ?????i ng??? Tech, b???t k??? tu???i t??c, n???n t???ng, gi???i t??nh ho???c t??nh tr???ng t??i ch??nh. Ch??ng t??i kh??ng b??? qua nh???ng ng?????i m???i b???t ?????u ho???c ch??a c?? kinh nghi???m theo ??u???i ??am m?? l???p tr??nh. Thay v??o ????, ch??ng t??i ch??o ????n h???c vi??n c???a t???t c??? c??c c???p ????? kinh nghi???m.</p>
								</Col>
								<Col span={14}>
									<iframe title="hoc vien" width="800" height="450" src="https://www.youtube.com/embed/kcSEsljlges" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
								</Col>
							</Row>

						</TabPane>
						<TabPane tab="H???c T???p t???i E.Learning" key="2" className="tabPane2">
							<Row>
								<Col span={10}>
									<div className="tabPane2_avatar">
									<Avatar src={require('../../assets/images/logo/le-quang-song-avatar-min-60x60_c.jpg')} /><span>Th???y L?? Quang Song-15 n??m kinh nghi???m Code, Qu???n l??, ????o t???o & Kh???i nghi???p</span>
									<p>B???n c?? th??? d??nh nhi???u th??ng th???m ch?? c??? n??m ????? c??? g???ng t??? h???c nh???ng th??? n??y v?? kh??ng c?? ?????nh h?????ng ho???c b???n c?? th??? ?????n ????y v?? l???y n?? ngay.</p>
									</div>
								</Col>
								<Col span={14}>
									<iframe title="hoc vien" width="800" height="450" src="https://www.youtube.com/embed/686mNAJVXzA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								</Col>
							</Row>
						</TabPane>
						<TabPane tab="C???u h???c vi??n" key="3" className="tabPane">
							<List
								grid={{ gutter:12, column: 3 }}
								dataSource={data1}
								renderItem={item => (
									<List.Item  className="card" >
										<Card bordered hoverables style={{ padding:0 }} className="list">
											<img alt="cuu hoc vien" src={item.src} style={{ width: 400, height: 300  }}/>
										</Card>
									</List.Item>
								)}
							/>
						</TabPane>
					</Tabs>
				</section>
				<div className="clearfix"></div>


				<section className="company">
					<h3>C??C C??NG TY C???U H???C VI??N E.LEARNING ??ANG L??M VI???C</h3>
					<h4>100% h???c vi??n sau khi ho??n th??nh d??? ??n ?????u c?? c??ng vi???c nh?? mong ?????i t???i c??c t???p ??o??n ph???n m???m, 
						c??c c??ng ty ph???n m???m ??a qu???c gia, c??c c??ng ty kh???i nghi???p....v???i thu nh???p t??? 90~140 tri???u/1 n??m.</h4>
					<img src={require('../../assets/images/imgKhoaHoc/cuuthanhvien.png')} alt="L?? Quang Song" />
				</section>
				<div className="clearfix"></div>

				<section className="reviewHocVien">
					<h3>H???C VI??N ???? N??I G?? V??? E.LEARNING ?</h3>
					<List
						grid={{ gutter: 16, column: 3 }}
						dataSource={dataCamNhanHocVien}
						renderItem={item => (
							<List.Item>
								<Card bordered hoverable>
									<img alt="hoc vien" src={item.src} style={{ width: 400, height: 600 }} />
								</Card>
							</List.Item>
						)}
					/>
				</section>
				<section className="academy">
					<h3> ???E.Learning Academy l?? h???c vi???n ti??n phong t???i Vi???t Nam ??p d???ng ph????ng ph??p ????o t???o Active Learning v?? Flipped Learning th??ng qua c??c d??? ??n th???c ti???n trong l??nh v???c ????o t???o CNTT.
						 H???c vi??n s??? ????ng vai tr?? l?? m???t Scrum member trong m?? h??nh Agile ????? tr??? th??nh m???t l???p tr??nh chuy??n nghi???p, ????p ???ng m???i nhu c???u tuy???n d???ng c???a Doanh nghi???p.???</h3>
					<h4> ??? E.Learning CEO</h4>
				</section>
				<div>
					<BackTop />
					<strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
				</div>
			</div>
		)
	}
}



