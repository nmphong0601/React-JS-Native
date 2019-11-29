import React, { Component } from "react";
import UsersService from "../../CISUsers/UsersService";
import { Redirect } from "react-router-dom";
import "./CISLogin.css";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Media,
  Label
} from "reactstrap";
// import {} from './LoginStyles.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      userInfor: null
    };

    this.service = new UsersService();
  }

  handleUserNameChange = event => {
    this.setState({ userName: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    let loginData = {
      userName: this.state.userName,
      password: this.state.password
	};
	this.service.login(loginData).then(result => {
		if(result.status === "success"){
			this.setState({ userInfor : result.data});
			this.forceUpdate();
		}
	});
  };

  componentDidMount() {}

  render() {
	if(this.state.userInfor != null){
		return <Redirect to="/users" />;
	}
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card
                  className="text-white bg-image py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center flex-box-center">
                    <Media
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/logo/CIS_E_office.png"
                      }
                      style={{ width: "100%" }}
                    ></Media>
                  </CardBody>
                </Card>
                <Card className="bg-danger p-4">
                  <CardBody>
                    <Form>
                      <h1>Đăng nhập</h1>
                      <p className="text-white">
                        Truy cập vào tài khoản của bạn
                      </p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Tài khoản đăng nhập"
                          autoComplete="username"
                          value={this.state.userName}
                          onChange={this.handleUserNameChange}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Mật khẩu đăng nhập"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.handlePasswordChange}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="light"
                            className="px-4 text-danger"
                            style={{
                              textTransform: "uppercase"
                            }}
                            onClick={this.login.bind(this)}
                          >
                            Đăng nhập
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Quên mật khẩu?
                          </Button>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col xs="8" className="mix-group">
                          <Label>Hoặc đăng nhập với</Label>
                          <a href="https://google.com">
                            <Media
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/icons/gmail_icon.png"
                              }
                            ></Media>
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
