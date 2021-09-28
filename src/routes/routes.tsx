import { Main, Member } from '../pages'

const routes = {
  isLogged: [],
  notLogged: [
    {
      id: 0,
      label: "Main",
      link: "/",
      component: <Main />,
      roles: [],
      exact: true
    },
    {
      id: 1,
      label: "Member",
      link: "/",
      component: <Member />,
      roles: [],
      exact: false
    }
  ]
}

export default routes