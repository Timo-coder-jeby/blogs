import {
  Button,
  Container,
  Main,
  Header,
  Aside,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "element-ui";

const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Container)
    Vue.use(Main)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
  }
}
export default element
