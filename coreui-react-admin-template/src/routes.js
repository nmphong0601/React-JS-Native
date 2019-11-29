import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const CISUsers = React.lazy(() => import("./views/CISUsers/Users"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/help', exact: true, name: 'Help' },
  { path: '/help/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/help/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/help/theme/colors', name: 'Colors', component: Colors },
  { path: '/help/theme/typography', name: 'Typography', component: Typography },
  { path: '/help/base', exact: true, name: 'Base', component: Cards },
  { path: '/help/base/cards', name: 'Cards', component: Cards },
  { path: '/help/base/forms', name: 'Forms', component: Forms },
  { path: '/help/base/switches', name: 'Switches', component: Switches },
  { path: '/help/base/tables', name: 'Tables', component: Tables },
  { path: '/help/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/help/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/help/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/help/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/help/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/help/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/help/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/help/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/help/base/navs', name: 'Navs', component: Navs },
  { path: '/help/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/help/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/help/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/help/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/help/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/help/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/help/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/help/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/help/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/help/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/help/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/help/icons/flags', name: 'Flags', component: Flags },
  { path: '/help/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/help/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/help/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/help/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/help/notifications/badges', name: 'Badges', component: Badges },
  { path: '/help/notifications/modals', name: 'Modals', component: Modals },
  { path: '/help/widgets', name: 'Widgets', component: Widgets },
  { path: '/help/charts', name: 'Charts', component: Charts },
  { path: '/help/users', exact: true,  name: 'Users', component: Users },
  { path: '/help/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/users', exact: true,  name: 'CIS Users', component: CISUsers },
];

export default routes;
