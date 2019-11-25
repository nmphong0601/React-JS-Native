import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Media, Label } from 'reactstrap';
// import {} from './LoginStyles.js';

export default class Login extends Component {
	state = {
		newState: null,
	};

	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="8">
							<CardGroup>
								<Card className="text-white bg-image py-5 d-md-down-none" style={{ width: '44%' }}>
									<CardBody className="text-center flex-box-center">
										<Media src={process.env.PUBLIC_URL + '/assets/img/logo/CIS_E_office.png'} style={{ width: '100%' }}></Media>
									</CardBody>
								</Card>
								<Card className="bg-danger p-4">
									<CardBody>
										<Form>
											<h1>Đăng nhập</h1>
											<p className="text-white">Truy cập vào tài khoản của bạn</p>
											<InputGroup className="mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="icon-user"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input type="text" placeholder="Tài khoản đăng nhập" autoComplete="username" />
											</InputGroup>
											<InputGroup className="mb-4">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="icon-lock"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input type="password" placeholder="Mật khẩu đăng nhập" autoComplete="current-password" />
											</InputGroup>
											<Row>
												<Col xs="6">
													<Button color="light" className="px-4 text-danger" style={{ textTransform: 'uppercase' }}>Đăng nhập</Button>
												</Col>
												<Col xs="6" className="text-right">
													<Button color="link" className="px-0">Quên mật khẩu?</Button>
												</Col>
											</Row>
											<br />
											<Row>
												<Col xs="8" className="mix-group">
													<Label>Hoặc đăng nhập với</Label>
													<a href="https://google.com">
														<Media src={process.env.PUBLIC_URL + '/assets/img/icons/gmail_icon.png'}></Media>
													</a>
												</Col>
											</Row>
										</Form>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
