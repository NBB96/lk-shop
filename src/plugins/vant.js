import Vue from 'vue'

//底部导航
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

//loading
import { Loading } from 'vant';
Vue.use(Loading);

//图片懒加载
import { Image } from 'vant';

Vue.use(Image)

//提示
import { Toast } from 'vant';

Vue.use(Toast);

//蒙版提示
import { Dialog } from 'vant';

Vue.use(Dialog)

//导航栏
import { NavBar } from 'vant';
Vue.use(NavBar);

//联系人
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);

//地址列表
import { AddressList } from 'vant';

Vue.use(AddressList);

//地址编辑
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);

// 商品信息
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);

//提交订单
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);

import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);