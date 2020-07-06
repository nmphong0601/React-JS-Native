import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import { styled } from '@material-ui/core';

const EOAside = React.lazy(() => import('./EOAside'));
const EOFooter = React.lazy(() => import('./EOFooter'));
const EOHeader = React.lazy(() => import('./EOHeader'));

const appHeaderStyle = {
  backgroundColor: '#2dc3e8'
};

class EOLayout extends Component {

  loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  componentWillMount = () => {
    const authorizationData = JSON.parse(localStorage.getItem('authorizationData'));
    if (!authorizationData) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed style={appHeaderStyle}>
          <Suspense fallback={this.loading()}>
            <EOHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} router={router} />
            </Suspense>
            <AppSidebarFooter>
              <hr color="white"></hr>
              <div className="col-md-12" style={{ width: 'auto', height: 'auto', border: '1px solid rgb(5,5,5)' }}>
                <div className="text-center">Thống kê truy cập</div>
                <div className="text-center" style={{ fontWeight: 'bold' }}>Danh sách Online</div>
                <ul style={{ listStyle: 'none', padding: '0' }} className="text-center">
                  <li>
                    <strong>Văn thư</strong>
                  </li>
                  <li>
                    <strong>Bùi Đức Dũng</strong>
                  </li>
                  <li>
                    <strong>Hà Thị Ngà</strong>
                  </li>
                </ul>
                <hr color="white" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}></hr>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  <li>
                    <strong>Đang online: 1</strong>
                  </li>
                  <li>
                    <strong>Lượt truy cập: 1000</strong>
                  </li>
                </ul>
              </div>
              <hr color="white"></hr>
              <div className="text-center">Liên kết Website</div>
              <select className="form-control" style={{width: '100%'}} id="LienKet">
                <option value="" disabled selected>--Chọn--</option>
                <option value="1">Chính phủ</option>
                <option value="2">Bộ thông tin và Truyền thông</option>
                <option value="3">Cổng Thông tin điện tử tỉnh Khánh Hòa</option>
                <option value="4">Trang thông tin điện tử Sở</option>
                <option value="5">Thông tin và Truyền thông tỉnh Khánh Hòa</option>
              </select>
            </AppSidebarFooter>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  {/* <Redirect from="/" to="/dashboard" /> */}
                  <Redirect from="/help" to="/help/dashboard" />
                  <Redirect from="/" to="/login" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <EOAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <EOFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default EOLayout;
