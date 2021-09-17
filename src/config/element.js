import Vue from 'vue'
import '@/assets/scss/element/element-variables.scss'

import { Button, Select, Message, Dropdown,DropdownMenu, DropdownItem, Dialog,
  Menu, MenuItem, Form, FormItem, Tabs, TabPane, Input, Table, TableColumn, Pagination,
  Popover, Popconfirm
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
  .use(Tabs)
  .use(TabPane)
  .use(Input)
  .use(Table)
  .use(TableColumn)
  .use(Pagination)
  .use(Popover)
  .use(Popconfirm)

Vue.prototype.$message = Message


