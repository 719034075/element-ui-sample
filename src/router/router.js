const NotFound = () => import('../components/404.vue');
const Home = () => import('../components/Home.vue');

const Helloworld = () => import('../components/elements/helloworld/helloworld.vue');
const Transitions = () => import('../components/elements/helloworld/transitions.vue');
const Layout = () => import('../components/elements/components/basic/layout.vue');
const Container = () => import('../components/elements/components/basic/container.vue');
const Icon = () => import('../components/elements/components/basic/icon.vue');
const EButton = () => import('../components/elements/components/basic/ebutton.vue');
const ERadio = () => import('../components/elements/components/form/eradio.vue');
const ECheckbox = () => import('../components/elements/components/form/echeckbox.vue');
const EInput = () => import('../components/elements/components/form/einput.vue');
const EInputNumber = () => import('../components/elements/components/form/einputnumber.vue');
const ESelect = () => import('../components/elements/components/form/eselect.vue');
const ECascader = () => import('../components/elements/components/form/ecascader.vue');
const ESwitch = () => import('../components/elements/components/form/eswitch.vue');
const ESlider = () => import('../components/elements/components/form/eslider.vue');
const ETimePicker = () => import('../components/elements/components/form/etimepicker.vue');
const EDatePicker = () => import('../components/elements/components/form/edatepicker.vue');
const EDateTimePicker = () => import('../components/elements/components/form/edatetimepicker.vue');
const EUpload = () => import('../components/elements/components/form/eupload.vue');
const ERate = () => import('../components/elements/components/form/erate.vue');
const EColorPicker = () => import('../components/elements/components/form/ecolorpicker.vue');
const ETransfer = () => import('../components/elements/components/form/etransfer.vue');
const EForm = () => import('../components/elements/components/form/eform.vue');
const ETable = () => import('../components/elements/components/data/etable.vue');
const ETag = () => import('../components/elements/components/data/etag.vue');
const EProgress = () => import('../components/elements/components/data/eprogress.vue');
const ETree = () => import('../components/elements/components/data/etree.vue');
const EPagination = () => import('../components/elements/components/data/epagination.vue');
const EBadge = () => import('../components/elements/components/data/ebadge.vue');
const EAlert = () => import('../components/elements/components/notice/ealert.vue');
const ELoading = () => import('../components/elements/components/notice/eloading.vue');
const EMessage = () => import('../components/elements/components/notice/emessage.vue');
const EMessageBox = () => import('../components/elements/components/notice/emessagebox.vue');
const ENotification = () => import('../components/elements/components/notice/enotification.vue');
const ENavMenu = () => import('../components/elements/components/navigation/enavmenu.vue');
const ETabs = () => import('../components/elements/components/navigation/etabs.vue');
const EBreadcrumb = () => import('../components/elements/components/navigation/ebreadcrumb.vue');
const EDropdown = () => import('../components/elements/components/navigation/edropdown.vue');
const ESteps = () => import('../components/elements/components/navigation/esteps.vue');
const EDialog = () => import('../components/elements/components/others/edialog.vue');
const ETooltip = () => import('../components/elements/components/others/etooltip.vue');
const EPopover = () => import('../components/elements/components/others/epopover.vue');
const ECard = () => import('../components/elements/components/others/ecard.vue');
const ECarousel = () => import('../components/elements/components/others/ecarousel.vue');
const ECollapse = () => import('../components/elements/components/others/ecollapse.vue');

const SelfTemplates = () => import('../components/elements/selftemplates/SelfTemplates.vue');

const FooterCrumbs = () => import('../components/elements/selftemplates/FooterCrumbs.vue');

const route_Helloworld = {
    path: '/',
    component: Home,
    name: 'Helloworld',
    iconCls: 'fa fa-hand-paper-o',
    hidden: false,
    children: [
        {path: 'helloworld', component: Helloworld, name: 'helloworld', hidden: false},
        {path: 'transition', component: Transitions, name: '内置过渡动画', hidden: false},
    ]
};

const route_Basic = {
    path: '/',
    component: Home,
    name: 'Basic',
    iconCls: 'fa fa-bars',
    hidden: false,
    children: [
        {path: 'layout', component: Layout, name: '布局', hidden: false},
        {path: 'container', component: Container, name: '布局容器', hidden: false},
        {path: 'icon', component: Icon, name: '图标', hidden: false},
        {path: 'ebutton', component: EButton, name: '按钮', hidden: false},
    ]
};

const route_Form = {
    path: '/',
    component: Home,
    name: 'Form',
    iconCls: 'fa fa-wpforms',
    hidden: false,
    children: [
        {path: 'eradio', component: ERadio, name: '单选框', hidden: false},
        {path: 'echeckbox', component: ECheckbox, name: '多选框', hidden: false},
        {path: 'einput', component: EInput, name: '输入框', hidden: false},
        {path: 'einputnumber', component: EInputNumber, name: '计数器', hidden: false},
        {path: 'eselect', component: ESelect, name: '选择器', hidden: false},
        {path: 'ecascader', component: ECascader, name: '级联选择器', hidden: false},
        {path: 'eswitch', component: ESwitch, name: '开关', hidden: false},
        {path: 'eslider', component: ESlider, name: '滑块', hidden: false},
        {path: 'etimepicker', component: ETimePicker, name: '时间选择器', hidden: false},
        {path: 'edatepicker', component: EDatePicker, name: '日期选择器', hidden: false},
        {path: 'edatetimepicker', component: EDateTimePicker, name: '日期时间选择器', hidden: false},
        {path: 'eupload', component: EUpload, name: '上传', hidden: false},
        {path: 'erate', component: ERate, name: '评分', hidden: false},
        {path: 'ecolorpicker', component: EColorPicker, name: '颜色选择器', hidden: false},
        {path: 'etransfer', component: ETransfer, name: '穿梭框', hidden: false},
        {path: 'eform', component: EForm, name: '表单', hidden: false},
    ]
};

const route_Data = {
    path: '/',
    component: Home,
    name: 'Data',
    iconCls: 'fa fa-database',
    hidden: false,
    children: [
        {path: 'etable', component: ETable, name: '表格', hidden: false},
        {path: 'etag', component: ETag, name: '标签', hidden: false},
        {path: 'eprogress', component: EProgress, name: '进度条', hidden: false},
        {path: 'etree', component: ETree, name: '树形控件', hidden: false},
        {path: 'epagination', component: EPagination, name: '分页', hidden: false},
        {path: 'ebadge', component: EBadge, name: '标记', hidden: false},
    ]
};

const route_Notice = {
    path: '/',
    component: Home,
    name: 'Notice',
    iconCls: 'fa fa-exclamation',
    hidden: false,
    children: [
        {path: 'ealert', component: EAlert, name: '警告', hidden: false},
        {path: 'eloading', component: ELoading, name: '加载', hidden: false},
        {path: 'emessage', component: EMessage, name: '消息提示', hidden: false},
        {path: 'emessagebox', component: EMessageBox, name: '弹框', hidden: false},
        {path: 'enotification', component: ENotification, name: '通知', hidden: false},
    ]
};

const route_Navigation = {
    path: '/',
    component: Home,
    name: 'Navigation',
    iconCls: 'fa fa-navicon',
    hidden: false,
    children: [
        {path: 'enavmenu', component: ENavMenu, name: '导航菜单', hidden: false},
        {path: 'etabs', component: ETabs, name: '标签页', hidden: false},
        {path: 'ebreadcrumb', component: EBreadcrumb, name: '面包屑', hidden: false},
        {path: 'edropdown', component: EDropdown, name: '下拉菜单', hidden: false},
        {path: 'esteps', component: ESteps, name: '步骤条', hidden: false},
    ]
};

const route_Others = {
    path: '/',
    component: Home,
    name: 'Others',
    iconCls: 'fa fa-circle-o-notch',
    hidden: false,
    children: [
        {path: 'edialog', component: EDialog, name: '对话框', hidden: false},
        {path: 'etooltip', component: ETooltip, name: '文字提示', hidden: false},
        {path: 'epopover', component: EPopover, name: '弹出框', hidden: false},
        {path: 'ecard', component: ECard, name: '卡片', hidden: false},
        {path: 'ecarousel', component: ECarousel, name: '走马灯', hidden: false},
        {path: 'ecollapse', component: ECollapse, name: '折叠面板', hidden: false},
    ]
};

const route_Selftemplates = {
    path: '/',
    component: Home,
    name: 'Selftemplates',
    iconCls: 'fa fa-circle-o-notch',
    hidden: false,
    children: [
        {path: 'selftemplates', component: SelfTemplates, name: '自定义模版', hidden: false},
    ]
};

const route_NotFound = {
    path: '/404',
    component: NotFound,
    name: '页面被外星人劫走',
    hidden: true,
};

const route_Redirect = {
    path: '*',
    redirect: {path: '/404'},
    hidden: true,
};

const routes = [
    route_Helloworld,
    route_Basic,
    route_Form,
    route_Data,
    route_Notice,
    route_Navigation,
    route_Others,
    route_NotFound,
    route_Selftemplates,
    route_Redirect
];

export default routes;