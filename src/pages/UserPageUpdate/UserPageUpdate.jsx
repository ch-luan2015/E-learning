import React from "react";
import { connect } from "react-redux";
import { PageHeader, Form, Input, Tooltip, Icon, Select, Checkbox, Button, Tag } from "antd";
import { capNhatNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { settings } from "../../common/Config/settings";
import styles from './UserPageUpdate.module.css'




class UserPageUpdate extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			nguoiDungCapNhat: {
				taiKhoan: "",
				matKhau: "",
				hoTen: "",
				soDT: "",
				maLoaiNguoiDung: "",
				maNhom: "",
				email: ""
			},
			errors: {
				taiKhoan: "",
				matKhau: "",
				hoTen: "",
				soDT: "",
				maLoaiNguoiDung: "",
				maNhom: "",
				email: ""
			},
			nguoiDung: JSON.parse(localStorage.getItem("userLogin")),

			confirmDirty: false,
		};
	}



	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				let { matKhau, hoTen, soDT, email } = values;
				let { taiKhoan, maLoaiNguoiDung } = this.state.nguoiDung;
				let nguoiDungCapNhat = {
					taiKhoan: taiKhoan,
					matKhau: matKhau,
					hoTen: hoTen,
					soDT: soDT,
					maNhom: settings.groupID,
					email: email,
					maLoaiNguoiDung: maLoaiNguoiDung
				};
				console.log('nguoiDungCapNhat', nguoiDungCapNhat)
				this.props.capNhatNguoiDung(nguoiDungCapNhat);
			}
		});
	};


	render() {
		const { Option } = Select;
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 12 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0
				},
				sm: {
					span: 16,
					offset: 8
				}
			}
		};
		const prefixSelector = getFieldDecorator("prefix", {
			initialValue: "84"
		})(
			<Select style={{ width: 70 }}>
				<Option value="84">+84</Option>
				<Option value="86">+86</Option>
			</Select>
		);


		return (
			<div className={styles.Formupdate}>
				<PageHeader
					style={{ color:'#E83E8C',
					border: "1px solid rgb(235, 237, 240)",
					backgroundColor:'#F0F0F0',
					marginTop:'0'
				}}
					tags={<Tag color="blue">Updating</Tag>}
					title="C???p Nh???t Th??ng Tin"
				 />
				<Form {...formItemLayout} onSubmit={this.handleSubmit} style={{marginTop:"30px"}}>
					<Form.Item
						label={
							<span>T??i Kho???n&nbsp;
								<Tooltip title="B???n mu???n ng?????i kh??c g???i b???n l?? g?? ?">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						} >
						{getFieldDecorator("taiKhoan", {
							rules: [{ required: false }]
						})(<Input disabled placeholder={this.state.nguoiDung.taiKhoan} />)}
					</Form.Item>

					<Form.Item label="M???t Kh???u" hasFeedback>
						{getFieldDecorator("matKhau", {
							rules: [
								{
									required: true,
									message: "Xin h??y nh???p v??o m???t kh???u c???a b???n!"
								},
							]
						})(<Input.Password />)}
					</Form.Item>

					<Form.Item
						label={
							<span>H??? v?? T??n&nbsp;</span>
						}>
						{getFieldDecorator("hoTen", {
							rules: [{ required: true, message: "Xin h??y nh???p v??o h??? v?? t??n c???a b???n!", whitespace: true }]
						})(<Input placeholder={this.state.nguoiDung.hoTen} />)}
					</Form.Item>

					<Form.Item label="E-mail">
						{getFieldDecorator("email", {
							rules: [
								{
									type: "email",
									message: "Email kh??ng ????ng !"
								},
								{
									required: true,
									message: "Xin h??y nh???p v??o email c???a b???n !"
								}
							]
						})(<Input placeholder={this.state.nguoiDung.email} />)}
					</Form.Item>


					<Form.Item label="Phone Number">
						{getFieldDecorator("soDT", {
							rules: [{ required: true, message: "Xin h??y nh???p v??p s??? ??i???n tho???i !" }]
						})(<Input addonBefore={prefixSelector} style={{ width: "100%" }} placeholder={this.state.nguoiDung.soDT} />)}
					</Form.Item>

					<Form.Item label="M?? Lo???i">
						{getFieldDecorator("maLoaiNguoiDung", {
							rules: [{ required: false }]
						})
							(
								<Input disabled={true} placeholder={this.state.nguoiDung.maLoaiNguoiDung}  />
							)}
					</Form.Item>

					<Form.Item label="Group ID"  >
						{getFieldDecorator("maNhom", {

							rules: [{ required: false }]
						})(
							<Input disabled={true} placeholder={this.state.nguoiDung.maNhom} />
						)}
					</Form.Item>



					<Form.Item {...tailFormItemLayout}>
						{getFieldDecorator("agreement", {
							valuePropName: "checked"
						})(
							<Checkbox>
								?????ng ?? c???p nh???t !
						</Checkbox>
						)}
					</Form.Item>

					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							C???p Nh???t
					</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const WrappedUpdateForm = Form.create({ name: "update" })(UserPageUpdate);

const mapDispatchToProps = dispatch => {
	return {
		capNhatNguoiDung: nguoiDungCapNhat => {
			dispatch(capNhatNguoiDungAction(nguoiDungCapNhat));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(WrappedUpdateForm);
