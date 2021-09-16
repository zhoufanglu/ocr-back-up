import Vue from 'vue'
import '@/assets/scss/element/element-variables.scss'

import { Button, Select, Message, Dropdown,DropdownMenu, DropdownItem, Dialog,
  Menu, MenuItem, Form, FormItem
} from 'element-ui'

//设置 size
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Button)
  .use(Select)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Dialog)
  .use(Menu)
  .use(MenuItem)
  .use(Form)
  .use(FormItem)

Vue.prototype.$message = Message


