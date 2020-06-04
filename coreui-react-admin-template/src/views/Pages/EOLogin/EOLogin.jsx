import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
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
// import NguoiDungActions from '../../../actions/nguoiDungActions';
import Actions from '../../../actions/actions';
import NguoiDungStore from '../../../stores/NguoiDung/NguoiDungStore';
import { StyleCardBody } from './EOLogin.styles';

class EOLogin extends PureComponent { 
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      username: "",
      password: "",
      loaiTaiKhoan: "chuyenvien",
      hasError: false,
    };
  }

  onChange() {
    debugger;
    this.setState({
      userInfor: NguoiDungStore.getNguoiDung()
    });

    if(this.state.userInfor != null){
      this.props.history.push("/help");
    }
  }

  handleUserNameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    debugger;
    let loginData = {
      username: this.state.username,
      password: this.state.password,
      loaiTaiKhoan: "chuyenvien"
	  };
    Actions.NguoiDungAction.login(loginData);
  }

  componentWillMount = () => {
    NguoiDungStore.addChangeListener(this.onChange);
  }

  componentWillUnmount = () => {
    NguoiDungStore.removeChangeListener(this.onChange);
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card
                  className="text-white bg-info py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <StyleCardBody className="text-center flex-box-center">
                    <Media
                      src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"}
                      style={{ width: "100%" }}
                    ></Media>
                  </StyleCardBody>
                </Card>
                <Card className="bg-white p-4">
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
                            className="px-4 text-dark"
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

EOLogin.propTypes = {
  // bla: PropTypes.string,
};

EOLogin.defaultProps = {
  // bla: 'test',
};

export default EOLogin;
