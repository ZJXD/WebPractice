import Vue from 'vue'
// import { Container, Header, Main, Button, Input, Message } from 'element-ui'
import { Container } from 'element-ui'
import { Header } from 'element-ui'
import { Main } from 'element-ui'
import { Footer } from 'element-ui'
import { Button } from 'element-ui'
import { Input } from 'element-ui'
import { Message } from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Button)
Vue.use(Input)

Vue.prototype.$message = Message
