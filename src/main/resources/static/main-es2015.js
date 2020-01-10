(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./_mock/_api.ts":
/*!***********************!*\
  !*** ./_mock/_api.ts ***!
  \***********************/
/*! exports provided: APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/fesm2015/mock.js");

// region: mock data
const titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
const avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = [
    '卡色',
    'cipchk',
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼',
];
// endregion
function getFakeList(count = 20) {
    const list = [];
    for (let i = 0; i < count; i += 1) {
        list.push({
            id: `fake-list-${i}`,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                },
            ],
        });
    }
    return list;
}
function getNotice() {
    return [
        {
            id: 'xxx1',
            title: titles[0],
            logo: avatars[0],
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            updatedAt: new Date(),
            member: '科学搬砖组',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx2',
            title: titles[1],
            logo: avatars[1],
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            updatedAt: new Date('2017-07-24'),
            member: '全组都是吴彦祖',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx3',
            title: titles[2],
            logo: avatars[2],
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            updatedAt: new Date(),
            member: '中二少女团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx4',
            title: titles[3],
            logo: avatars[3],
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            updatedAt: new Date('2017-07-23'),
            member: '程序员日常',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx5',
            title: titles[4],
            logo: avatars[4],
            description: '凛冬将至',
            updatedAt: new Date('2017-07-23'),
            member: '高逼格设计天团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx6',
            title: titles[5],
            logo: avatars[5],
            description: '生命就像一盒巧克力，结果往往出人意料',
            updatedAt: new Date('2017-07-23'),
            member: '骗你来学计算机',
            href: '',
            memberLink: '',
        },
    ];
}
function getActivities() {
    return [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: avatars[0],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: avatars[1],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: avatars[2],
            },
            group: {
                name: '中二少女团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: avatars[3],
            },
            project: {
                name: '5 月日常迭代',
                link: 'http://github.com/',
            },
            template: '将 @{project} 更新至已发布状态',
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: avatars[4],
            },
            project: {
                name: '工程效能',
                link: 'http://github.com/',
            },
            comment: {
                name: '留言',
                link: 'http://github.com/',
            },
            template: '在 @{project} 发布了 @{comment}',
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: avatars[5],
            },
            group: {
                name: '程序员日常',
                link: 'http://github.com/',
            },
            project: {
                name: '品牌迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
    ];
}
const APIS = {
    '/api/list': (req) => getFakeList(req.queryString.count),
    '/api/notice': () => getNotice(),
    '/api/activities': () => getActivities(),
    '/api/401': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](401);
    },
    '/api/403': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](403);
    },
    '/api/404': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](404);
    },
    '/api/500': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](500);
    },
};


/***/ }),

/***/ "./_mock/_chart.ts":
/*!*************************!*\
  !*** ./_mock/_chart.ts ***!
  \*************************/
/*! exports provided: CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return CHARTS; });
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
// tslint:disable


// region: mock data
const visitData = [];
const beginDay = new Date().getTime();
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY[i],
    });
}
const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY2[i],
    });
}
const salesData = [];
for (let i = 0; i < 12; i += 1) {
    salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: `搜索关键词-${i}`,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}
const salesTypeData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];
const salesTypeDataOnline = [
    {
        x: '家用电器',
        y: 244,
    },
    {
        x: '食用酒水',
        y: 321,
    },
    {
        x: '个护健康',
        y: 311,
    },
    {
        x: '服饰箱包',
        y: 41,
    },
    {
        x: '母婴产品',
        y: 121,
    },
    {
        x: '其他',
        y: 111,
    },
];
const salesTypeDataOffline = [
    {
        x: '家用电器',
        y: 99,
    },
    {
        x: '个护健康',
        y: 188,
    },
    {
        x: '服饰箱包',
        y: 344,
    },
    {
        x: '母婴产品',
        y: 255,
    },
    {
        x: '其他',
        y: 65,
    },
];
const offlineData = [];
for (let i = 0; i < 10; i += 1) {
    offlineData.push({
        name: `门店${i}`,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
    offlineChartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}
const radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
    },
];
//
const radarData = [];
const radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
};
radarOriginData.forEach(item => {
    Object.keys(item).forEach(key => {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key],
            });
        }
    });
});
// endregion
const CHARTS = {
    '/chart': JSON.parse(JSON.stringify({
        visitData,
        visitData2,
        salesData,
        searchData,
        offlineData,
        offlineChartData,
        salesTypeData,
        salesTypeDataOnline,
        salesTypeDataOffline,
        radarData,
    })),
    '/chart/visit': JSON.parse(JSON.stringify(visitData)),
    '/chart/tags': mockjs__WEBPACK_IMPORTED_MODULE_0__["mock"]({
        'list|100': [{ x: '@city', 'value|1-100': 150, 'category|0-2': 1 }],
    }),
};


/***/ }),

/***/ "./_mock/_geo.ts":
/*!***********************!*\
  !*** ./_mock/_geo.ts ***!
  \***********************/
/*! exports provided: GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return GEOS; });
const DATA = [
    {
        name: '上海',
        id: '310000',
    },
    {
        name: '市辖区',
        id: '310100',
    },
    {
        name: '北京',
        id: '110000',
    },
    {
        name: '市辖区',
        id: '110100',
    },
    {
        name: '浙江省',
        id: '330000',
    },
    {
        name: '杭州市',
        id: '330100',
    },
    {
        name: '宁波市',
        id: '330200',
    },
    {
        name: '温州市',
        id: '330300',
    },
    {
        name: '嘉兴市',
        id: '330400',
    },
    {
        name: '湖州市',
        id: '330500',
    },
    {
        name: '绍兴市',
        id: '330600',
    },
    {
        name: '金华市',
        id: '330700',
    },
    {
        name: '衢州市',
        id: '330800',
    },
    {
        name: '舟山市',
        id: '330900',
    },
    {
        name: '台州市',
        id: '331000',
    },
    {
        name: '丽水市',
        id: '331100',
    },
];
const GEOS = {
    '/geo/province': () => DATA.filter(w => w.id.endsWith('0000')),
    '/geo/:id': (req) => {
        const pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter(w => w.id.slice(0, 2) === pid && !w.id.endsWith('0000'));
    },
};


/***/ }),

/***/ "./_mock/_pois.ts":
/*!************************!*\
  !*** ./_mock/_pois.ts ***!
  \************************/
/*! exports provided: POIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return POIS; });
const POIS = {
    '/pois': {
        total: 2,
        list: [
            {
                id: 10000,
                user_id: 1,
                name: '测试品牌',
                branch_name: '测试分店',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
            {
                id: 10001,
                user_id: 2,
                name: '测试品牌2',
                branch_name: '测试分店2',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
        ],
    },
};


/***/ }),

/***/ "./_mock/_profile.ts":
/*!***************************!*\
  !*** ./_mock/_profile.ts ***!
  \***************************/
/*! exports provided: PROFILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return PROFILES; });
const basicGoods = [
    {
        id: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2.00',
        num: '1',
        amount: '2.00',
    },
    {
        id: '1234562',
        name: '凉茶 300ml',
        barcode: '12421432143214322',
        price: '3.00',
        num: '2',
        amount: '6.00',
    },
    {
        id: '1234563',
        name: '好吃的薯片',
        barcode: '12421432143214323',
        price: '7.00',
        num: '4',
        amount: '28.00',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
];
const basicProgress = [
    {
        key: '1',
        time: '2017-10-01 14:10',
        rate: '联系客户',
        status: 'processing',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '2',
        time: '2017-10-01 14:05',
        rate: '取货员出发',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '1h',
    },
    {
        key: '3',
        time: '2017-10-01 13:05',
        rate: '取货员接单',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '4',
        time: '2017-10-01 13:00',
        rate: '申请审批通过',
        status: 'success',
        operator: '系统',
        cost: '1h',
    },
    {
        key: '5',
        time: '2017-10-01 12:00',
        rate: '发起退货申请',
        status: 'success',
        operator: '用户',
        cost: '5mins',
    },
];
const advancedOperation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '林东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': {
        advancedOperation1,
        advancedOperation2,
        advancedOperation3,
    },
};


/***/ }),

/***/ "./_mock/_rule.ts":
/*!************************!*\
  !*** ./_mock/_rule.ts ***!
  \************************/
/*! exports provided: RULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return RULES; });
const list = [];
for (let i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}
function getRule(params) {
    let ret = [...list];
    if (params.sorter) {
        const s = params.sorter.split('_');
        ret = ret.sort((prev, next) => {
            if (s[1] === 'descend') {
                return next[s[0]] - prev[s[0]];
            }
            return prev[s[0]] - next[s[0]];
        });
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter(data => params.statusList.indexOf(data.status) > -1);
    }
    if (params.no) {
        ret = ret.filter(data => data.no.indexOf(params.no) > -1);
    }
    return ret;
}
function removeRule(nos) {
    nos.split(',').forEach(no => {
        const idx = list.findIndex(w => w.no === no);
        if (idx !== -1)
            list.splice(idx, 1);
    });
    return true;
}
function saveRule(description) {
    const i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
const RULES = {
    '/rule': (req) => getRule(req.queryString),
    'DELETE /rule': (req) => removeRule(req.queryString.nos),
    'POST /rule': (req) => saveRule(req.body.description),
};


/***/ }),

/***/ "./_mock/_user.ts":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
const list = [];
const total = 50;
for (let i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    let ret = [...list];
    const pi = +params.pi;
    const ps = +params.ps;
    const start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(data => data.no.indexOf(params.no) > -1);
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    const item = list.find(w => w.id === id);
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
const USERS = {
    '/user': (req) => genData(req.queryString),
    '/user/:id': (req) => list.find(w => w.id === +req.params.id),
    'POST /user/:id': (req) => saveData(+req.params.id, req.body),
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': (req) => {
        const data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'bupt') {
            return { msg: `Invalid username or password（admin/ng-alain.com）` };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: `${data.userName}@qq.com`,
                id: 10000,
                time: +new Date(),
            },
        };
    },
    'POST /register': {
        msg: 'ok',
    },
};


/***/ }),

/***/ "./_mock/index.ts":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: PROFILES, RULES, APIS, CHARTS, POIS, USERS, GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_profile */ "./_mock/_profile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return _profile__WEBPACK_IMPORTED_MODULE_0__["PROFILES"]; });

/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_rule */ "./_mock/_rule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return _rule__WEBPACK_IMPORTED_MODULE_1__["RULES"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_api */ "./_mock/_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["APIS"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chart */ "./_mock/_chart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return _chart__WEBPACK_IMPORTED_MODULE_3__["CHARTS"]; });

/* harmony import */ var _pois__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_pois */ "./_mock/_pois.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return _pois__WEBPACK_IMPORTED_MODULE_4__["POIS"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_user */ "./_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_5__["USERS"]; });

/* harmony import */ var _geo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_geo */ "./_mock/_geo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return _geo__WEBPACK_IMPORTED_MODULE_6__["GEOS"]; });










/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/default/default.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/default/default.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\r\n<layout-header class=\"alain-default__header\"></layout-header>\r\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\r\n<section class=\"alain-default__content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<ng-template #settingHost></ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/default/header/header.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/default/header/header.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__header-logo\">\n<!--  <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\n    <img\n      class=\"alain-default__header-logo-expanded\"\n      src=\"./assets/bupt.jpg\"\n      alt=\"{{ settings.app.name }}\"\n      style=\"max-height:40px;\"\n    />\n    <img\n      class=\"alain-default__header-logo-collapsed\"\n      src=\"./assets/bupt.jpg\"\n      alt=\"{{ settings.app.name }}\"\n      style=\"max-height:30px;\"\n    />\n  </a>-->\n  <h2 class=\"alain-default__header-logo-expanded\" style=\"margin-left: 20px;color: #fcfcfc\">入侵检测</h2>\n</div>\n<div class=\"alain-default__nav-wrap\">\n  <ul class=\"alain-default__nav\">\n    <!-- Menu -->\n    <li>\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\n        <i nz-icon nzType=\"menu-{{ settings.layout.collapsed ? 'unfold' : 'fold' }}\"></i>\n      </div>\n    </li>\n    <!-- Github Page -->\n<!--    <li>\n      <a class=\"alain-default__nav-item\" href=\"//github.com/ng-alain/ng-alain\" target=\"_blank\">\n        <i nz-icon nzType=\"github\"></i>\n      </a>\n    </li>-->\n    <!-- Lock Page -->\n<!--    <li class=\"hidden-mobile\">\n      <div class=\"alain-default__nav-item\" routerLink=\"/passport/lock\">\n        <i nz-icon nzType=\"lock\"></i>\n      </div>\n    </li>-->\n    <!-- Search Button -->\n<!--    <li class=\"hidden-pc\" (click)=\"searchToggleChange()\">\n      <div class=\"alain-default__nav-item\">\n        <i nz-icon nzType=\"search\"></i>\n      </div>\n    </li>-->\n  </ul>\n<!--\n  <header-search class=\"alain-default__search\" [toggleChange]=\"searchToggleStatus\"></header-search>\n-->\n  <ul class=\"alain-default__nav\">\n    <!-- Notify -->\n <!--   <li>\n      <header-notify></header-notify>\n    </li>-->\n    <!-- Task -->\n<!--    <li class=\"hidden-mobile\">\n      <header-task></header-task>\n    </li>-->\n    <!-- App Icons -->\n <!--   <li class=\"hidden-mobile\">\n      <header-icon></header-icon>\n    </li>-->\n    <!-- Settings -->\n    <li class=\"hidden-mobile\">\n      <div\n        class=\"alain-default__nav-item\"\n        nz-dropdown\n        [nzDropdownMenu]=\"settingsMenu\"\n        nzTrigger=\"click\"\n        nzPlacement=\"bottomRight\"\n      >\n        <i nz-icon nzType=\"setting\"></i>\n      </div>\n      <nz-dropdown-menu #settingsMenu=\"nzDropdownMenu\">\n        <div nz-menu style=\"width:200px;\">\n          <div nz-menu-item>\n            <header-fullscreen></header-fullscreen>\n          </div>\n          <div nz-menu-item>\n            <header-storage></header-storage>\n          </div>\n         <!-- <div nz-menu-item>\n            <header-i18n></header-i18n>\n          </div>-->\n        </div>\n      </nz-dropdown-menu>\n    </li>\n    <li class=\"hidden-mobile\">\n      <header-user></header-user>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/default/setting-drawer/setting-drawer-item.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/default/setting-drawer/setting-drawer-item.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span\r\n  >{{ i.label }}<span class=\"pl-sm text-grey\">{{ i.tip }}</span></span\r\n>\r\n<div [ngSwitch]=\"i.type\">\r\n  <ng-container *ngSwitchCase=\"'color'\">\r\n    <input\r\n      nz-input\r\n      type=\"color\"\r\n      style=\"min-width: 88px\"\r\n      [(ngModel)]=\"i.value\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'input'\">\r\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'px'\">\r\n    <nz-input-number\r\n      [(ngModel)]=\"pxVal\"\r\n      (ngModelChange)=\"pxChange($event)\"\r\n      [nzMin]=\"i.min\"\r\n      [nzMax]=\"i.max\"\r\n      [nzStep]=\"i.step || 2\"\r\n      [nzFormatter]=\"format\"\r\n    ></nz-input-number>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'switch'\">\r\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/default/setting-drawer/setting-drawer.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/default/setting-drawer/setting-drawer.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\r\n  <div class=\"setting-drawer__content\">\r\n    <div class=\"setting-drawer__body setting-drawer__theme\">\r\n      <h3 class=\"setting-drawer__title\">主题色</h3>\r\n      <span\r\n        *ngFor=\"let c of colors\"\r\n        nz-tooltip\r\n        [ngStyle]=\"{ 'background-color': c.color }\"\r\n        (click)=\"changeColor(c.color)\"\r\n        nz-tooltip\r\n        [nzTitle]=\"c.key\"\r\n        class=\"setting-drawer__theme-tag\"\r\n        ><i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i\r\n      ></span>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <h3 class=\"setting-drawer__title\">设置</h3>\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"顶部\">\r\n          <div class=\"setting-drawer__body\">\r\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\r\n          </div>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"侧边栏\">\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"内容\">\r\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"其它\">\r\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <div class=\"setting-drawer__body-item\">\r\n        固定头和侧边栏\r\n        <nz-switch\r\n          nzSize=\"small\"\r\n          [(ngModel)]=\"layout.fixed\"\r\n          (ngModelChange)=\"setLayout('fixed', layout.fixed)\"\r\n        ></nz-switch>\r\n      </div>\r\n      <div class=\"setting-drawer__body-item\">\r\n        色弱模式\r\n        <nz-switch\r\n          nzSize=\"small\"\r\n          [(ngModel)]=\"layout.colorWeak\"\r\n          (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"\r\n        ></nz-switch>\r\n      </div>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">预览</button>\r\n    <button (click)=\"reset()\" type=\"button\" nz-button>重置</button>\r\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>拷贝</button>\r\n    <nz-alert\r\n      class=\"mt-md\"\r\n      nzType=\"warning\"\r\n      nzMessage=\"配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改参数配置文件 src/styles/theme.less\"\r\n    ></nz-alert>\r\n  </div>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\" (click)=\"toggle()\">\r\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/default/sidebar/sidebar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/default/sidebar/sidebar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__aside-inner\">\n <!-- <div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\n    <div class=\"alain-default__aside-user-info\">\n      <strong>{{ settings.user.name }}</strong>\n      <p class=\"mb0\">{{ settings.user.email }}</p>\n    </div>\n  </div>-->\n<!--  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\n    <ul nz-menu>\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\n    </ul>\n  </nz-dropdown-menu>-->\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/fullscreen/fullscreen.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/fullscreen/fullscreen.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/passport/passport.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/passport/passport.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\n  <div class=\"wrap\">\n    <div class=\"top\">\n      <div class=\"head\">\n        <img class=\"logo\" src=\"./assets/bupt.jpg\" />\n        <span class=\"title\">入侵检测系统</span>\n      </div>\n      <div class=\"desc\"></div>\n    </div>\n    <router-outlet></router-outlet>\n    <global-footer [links]=\"links\">\n      Copyright\n      <i nz-icon nzType=\"copyright\"></i> 2019<a>鸿通楼510实验室</a>出品\n    </global-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/dashboard/first/first.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/dashboard/first/first.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\n  <h1>\n    首页\n    <small>Welcome !</small>\n  </h1>\n</div>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzSpan=\"8\" >\n    <nz-card nzTitle=\"告警\" style=\"height: 230px\">\n      <g2-card  [title]=\"'已处理'\" [bordered]=\"true\" total=\"{{handledNum}}\" footer=\"全部警告 {{threatNum}}\" contentHeight=\"60\">\n        待处理<trend flag=\"down\" style=\"color: rgba(0,0,0,.85)\">{{notHandleNum}}</trend>\n      </g2-card>\n    </nz-card>\n  </div>\n    <div nz-col nzSpan=\"8\">\n     <nz-card nzTitle=\"捕获报文\">\n       <div echarts #tooHard class=\"demo-chart\" style=\"height: 170px;\"></div>\n     </nz-card>\n   </div>\n    <div nz-col nzSpan=\"8\">\n      <nz-card nzTitle=\"检测流量\">\n        <div echarts #FlowOption  class=\"demo-chart\" style=\"height: 170px;\"></div>\n      </nz-card>\n    </div>\n</div>\n    <nz-card>\n      <!--地图-->\n      <div style=\"float:left;width: 65%;height: 363px;\">\n        <div  echarts #MapChain class=\"demo-chart\" style=\"width: 100%;height:363px\"></div>\n      </div>\n      <div style=\"float:right;width: 30%\">\n        <!--木马IP统计-->\n        <div echarts #TriIPTotal  class=\"demo-chart\" style=\"width: 100%;height: 170px\"></div>\n       <!-- DNSIP统计-->\n        <div echarts #DnsIPTotal  class=\"demo-chart\" style=\"width: 100%;height: 170px\"></div>\n      </div>\n    </nz-card>\n<div nz-row nzGutter=\"16\" >\n    <div nz-col nzSpan=\"12\">\n      <nz-card nzTitle=\"威胁等级饼图\">\n      <div echarts #DnsBar class=\"demo-chart\" style=\"width: 100%;height: 260px\"></div>\n      </nz-card>\n    </div>\n    <div nz-col nzSpan=\"12\">\n      <nz-card nzTitle=\"威胁等级堆叠图\">\n      <div echarts #ThrenOption  class=\"demo-chart\" style=\"width: 100%;height: 260px\"></div>\n      </nz-card>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/passport/lock/lock.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/passport/lock/lock.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ant-card width-lg\" style=\"margin: 0 auto;\">\r\n  <div class=\"ant-card-body\">\r\n    <div class=\"avatar\">\r\n      <nz-avatar [nzSrc]=\"settings.user.avatar\" nzIcon=\"user\" nzSize=\"large\"></nz-avatar>\r\n    </div>\r\n    <form nz-form [formGroup]=\"f\" (ngSubmit)=\"submit()\" role=\"form\" class=\"mt-md\">\r\n      <nz-form-item>\r\n        <nz-form-control [nzErrorTip]=\"'validation.password.required' | translate\">\r\n          <nz-input-group nzSuffixIcon=\"lock\">\r\n            <input type=\"password\" nz-input formControlName=\"password\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-row nzType=\"flex\" nzAlign=\"middle\">\r\n        <nz-col [nzOffset]=\"12\" [nzSpan]=\"12\" style=\"text-align:right;\">\r\n          <button nz-button [disabled]=\"!f.valid\" nzType=\"primary\">{{ 'app.lock' | translate }}</button>\r\n        </nz-col>\r\n      </nz-row>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/passport/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/passport/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n  <nz-tabset [nzAnimated]=\"false\" class=\"tabs\" (nzSelectChange)=\"switch($event)\">\r\n    <nz-tab [nzTitle]=\"'app.login.tab-login-credentials' | translate\">\r\n      <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n      <nz-form-item>\r\n        <nz-form-control nzErrorTip=\"请输入用户名\">\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n            <input nz-input formControlName=\"userName\" placeholder=\"username: admin\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control nzErrorTip=\"请输入密码\">\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"password: bupt\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </nz-tab>\r\n <!--   <nz-tab [nzTitle]=\"'app.login.tab-login-mobile' | translate\">\r\n      <nz-form-item>\r\n        <nz-form-control [nzErrorTip]=\"mobileErrorTip\">\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n            <input nz-input formControlName=\"mobile\" placeholder=\"mobile number\" />\r\n          </nz-input-group>\r\n          <ng-template #mobileErrorTip let-i>\r\n            <ng-container *ngIf=\"i.errors.required\">\r\n              {{ 'validation.phone-number.required' | translate }}\r\n            </ng-container>\r\n            <ng-container *ngIf=\"i.errors.pattern\">\r\n              {{ 'validation.phone-number.wrong-format' | translate }}\r\n            </ng-container>\r\n          </ng-template>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control [nzErrorTip]=\"'validation.verification-code.required' | translate\">\r\n          <nz-row [nzGutter]=\"8\">\r\n            <nz-col [nzSpan]=\"16\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"mail\">\r\n                <input nz-input formControlName=\"captcha\" placeholder=\"captcha\" />\r\n              </nz-input-group>\r\n            </nz-col>\r\n            <nz-col [nzSpan]=\"8\">\r\n              <button\r\n                type=\"button\"\r\n                nz-button\r\n                nzSize=\"large\"\r\n                (click)=\"getCaptcha()\"\r\n                [disabled]=\"count\"\r\n                nzBlock\r\n                [nzLoading]=\"http.loading\"\r\n              >\r\n                {{ count ? count + 's' : ('app.register.get-verification-code' | translate) }}\r\n              </button>\r\n            </nz-col>\r\n          </nz-row>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </nz-tab>-->\r\n  </nz-tabset>\r\n  <nz-form-item>\r\n    <nz-col [nzSpan]=\"12\">\r\n      <label nz-checkbox formControlName=\"remember\">{{ 'app.login.remember-me' | translate }}</label>\r\n    </nz-col>\r\n    <nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n      <a class=\"forgot\" (click)=\"msg.error('请找卢新娟')\">{{ 'app.login.forgot-password' | translate }}</a>\r\n    </nz-col>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"http.loading\" nzBlock>\r\n      {{ 'app.login.login' | translate }}\r\n    </button>\r\n  </nz-form-item>\r\n</form>\r\n<!--<div class=\"other\">\r\n  {{ 'app.login.sign-in-with' | translate }}\r\n  <i\r\n    nz-tooltip=\"in fact Auth0 via window\"\r\n    (click)=\"open('auth0', 'window')\"\r\n    nz-icon\r\n    nzType=\"alipay-circle\"\r\n    class=\"icon\"\r\n  ></i>\r\n  <i nz-tooltip=\"in fact Github via redirect\" (click)=\"open('github')\" nz-icon nzType=\"taobao-circle\" class=\"icon\"></i>\r\n  <i (click)=\"open('weibo', 'window')\" nz-icon nzType=\"weibo-circle\" class=\"icon\"></i>\r\n  <a class=\"register\" routerLink=\"/passport/register\">{{ 'app.login.signup' | translate }}</a>\r\n</div>-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/passport/register-result/register-result.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/passport/register-result/register-result.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<result type=\"success\" [title]=\"title\" description=\"{{ 'app.register-result.activation-email' | translate }}\">\r\n  <ng-template #title>\r\n    <div class=\"title\" style=\"font-size: 20px;\">\r\n      {{ 'app.register-result.msg' | translate: params }}\r\n    </div>\r\n  </ng-template>\r\n  <button (click)=\"msg.success('email')\" nz-button nzSize=\"large\" [nzType]=\"'primary'\">\r\n    {{ 'app.register-result.view-mailbox' | translate }}\r\n  </button>\r\n  <button routerLink=\"/\" nz-button nzSize=\"large\">\r\n    {{ 'app.register-result.back-home' | translate }}\r\n  </button>\r\n</result>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/passport/register/register.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/passport/register/register.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ 'app.register.register' | translate }}</h3>\r\n<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n  <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n  <nz-form-item>\r\n    <nz-form-control [nzErrorTip]=\"mailErrorTip\">\r\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"user\">\r\n        <input nz-input formControlName=\"mail\" placeholder=\"Email\" />\r\n      </nz-input-group>\r\n      <ng-template #mailErrorTip let-i>\r\n        <ng-container *ngIf=\"i.errors?.required\">{{ 'validation.email.required' | translate }}</ng-container>\r\n        <ng-container *ngIf=\"i.errors?.email\">{{ 'validation.email.wrong-format' | translate }}</ng-container>\r\n      </ng-template>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzErrorTip]=\"'validation.password.required' | translate\">\r\n      <nz-popover\r\n        [nzPlacement]=\"'right'\"\r\n        [nzTrigger]=\"'focus'\"\r\n        [(nzVisible)]=\"visible\"\r\n        nzOverlayClassName=\"register-password-cdk\"\r\n        [nzOverlayStyle]=\"{ 'width.px': 240 }\"\r\n      >\r\n        <nz-input-group nzSize=\"large\" nz-popover nzAddonBeforeIcon=\"lock\">\r\n          <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"Password\" />\r\n        </nz-input-group>\r\n        <ng-template #nzTemplate>\r\n          <div style=\"padding: 4px 0;\">\r\n            <ng-container [ngSwitch]=\"status\">\r\n              <div *ngSwitchCase=\"'ok'\" class=\"success\">{{ 'validation.password.strength.strong' | translate }}</div>\r\n              <div *ngSwitchCase=\"'pass'\" class=\"warning\">{{ 'validation.password.strength.medium' | translate }}</div>\r\n              <div *ngSwitchDefault class=\"error\">{{ 'validation.password.strength.short' | translate }}</div>\r\n            </ng-container>\r\n            <div class=\"progress-{{ status }}\">\r\n              <nz-progress\r\n                [nzPercent]=\"progress\"\r\n                [nzStatus]=\"passwordProgressMap[status]\"\r\n                [nzStrokeWidth]=\"6\"\r\n                [nzShowInfo]=\"false\"\r\n              ></nz-progress>\r\n            </div>\r\n            <p class=\"mt-sm\">{{ 'validation.password.strength.msg' | translate }}</p>\r\n          </div>\r\n        </ng-template>\r\n      </nz-popover>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzErrorTip]=\"confirmErrorTip\">\r\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"lock\">\r\n        <input nz-input type=\"password\" formControlName=\"confirm\" placeholder=\"Confirm Password\" />\r\n      </nz-input-group>\r\n      <ng-template #confirmErrorTip let-i>\r\n        <ng-container *ngIf=\"i.errors?.required\">{{ 'validation.confirm-password.required' | translate }}</ng-container>\r\n        <ng-container *ngIf=\"i.errors?.equar\">{{ 'validation.password.twice' | translate }}</ng-container>\r\n      </ng-template>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzErrorTip]=\"mobileErrorTip\">\r\n      <nz-input-group nzSize=\"large\" [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n        <ng-template #addOnBeforeTemplate>\r\n          <nz-select formControlName=\"mobilePrefix\" style=\"width: 100px;\">\r\n            <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\r\n            <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\r\n          </nz-select>\r\n        </ng-template>\r\n        <input formControlName=\"mobile\" nz-input placeholder=\"Phone number\" />\r\n      </nz-input-group>\r\n      <ng-template #mobileErrorTip let-i>\r\n        <ng-container *ngIf=\"i.errors?.required\">{{ 'validation.phone-number.required' | translate }}</ng-container>\r\n        <ng-container *ngIf=\"i.errors?.pattern\">{{ 'validation.phone-number.wrong-format' | translate }}</ng-container>\r\n      </ng-template>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzErrorTip]=\"'validation.verification-code.required' | translate\">\r\n      <nz-row [nzGutter]=\"8\">\r\n        <nz-col [nzSpan]=\"16\">\r\n          <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"mail\">\r\n            <input nz-input formControlName=\"captcha\" placeholder=\"Captcha\" />\r\n          </nz-input-group>\r\n        </nz-col>\r\n        <nz-col [nzSpan]=\"8\">\r\n          <button\r\n            type=\"button\"\r\n            nz-button\r\n            nzSize=\"large\"\r\n            (click)=\"getCaptcha()\"\r\n            [disabled]=\"count\"\r\n            nzBlock\r\n            [nzLoading]=\"http.loading\"\r\n          >\r\n            {{ count ? count + 's' : ('app.register.get-verification-code' | translate) }}\r\n          </button>\r\n        </nz-col>\r\n      </nz-row>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"http.loading\" class=\"submit\">\r\n      {{ 'app.register.register' | translate }}\r\n    </button>\r\n    <a class=\"login\" routerLink=\"/passport/login\">{{ 'app.register.sign-in' | translate }}</a>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let AppComponent = class AppComponent {
    constructor(el, renderer, router, titleSrv, modalSrv) {
        this.router = router;
        this.titleSrv = titleSrv;
        this.modalSrv = modalSrv;
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', _delon_theme__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["VERSION"].full);
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(evt => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => {
            this.titleSrv.setTitle();
            this.modalSrv.closeAll();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <router-outlet></router-outlet>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: I18nHttpLoaderFactory, StartupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return I18nHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/json-schema/json-schema.module */ "./src/app/shared/json-schema/json-schema.module.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm2015/auth.js");
/* harmony import */ var _delon_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delon.module */ "./src/app/delon.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");

// tslint:disable: no-duplicate-imports




// #region default language
// 参考：https://ng-alain.com/docs/i18n



const LANG = {
    abbr: 'zh',
    ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a,
    zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"],
    delon: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["zh_CN"],
};
// register angular

Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: LANG.abbr },
    { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: LANG.zorro },
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["DELON_LOCALE"], useValue: LANG.delon },
];
// #endregion
// #region i18n services




// 加载i18n语言文件
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, `assets/tmp/i18n/`, '.json');
}
const I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
        },
    }),
];
const I18NSERVICE_PROVIDES = [{ provide: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["ALAIN_I18N_TOKEN"], useClass: _core__WEBPACK_IMPORTED_MODULE_11__["I18NService"], multi: false }];
// #endregion
// #region global third module
const GLOBAL_THIRD_MODULES = [];
// #endregion
// #region JSON Schema form (using @delon/form)

const FORM_MODULES = [_shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_12__["JsonSchemaModule"]];
// #endregion
// #region Http Interceptors



const INTERCEPTOR_PROVIDES = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _delon_auth__WEBPACK_IMPORTED_MODULE_13__["SimpleInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core__WEBPACK_IMPORTED_MODULE_11__["DefaultInterceptor"], multi: true },
];
// #endregion
// #region Startup Service

function StartupServiceFactory(startupService) {
    return () => startupService.load();
}
const APPINIT_PROVIDES = [
    _core__WEBPACK_IMPORTED_MODULE_11__["StartupService"],
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_core__WEBPACK_IMPORTED_MODULE_11__["StartupService"]],
        multi: true,
    },
];
// #endregion






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _delon_module__WEBPACK_IMPORTED_MODULE_14__["DelonModule"].forRoot(),
            _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
            _routes_routes_module__WEBPACK_IMPORTED_MODULE_18__["RoutesModule"],
            ...I18NSERVICE_MODULES,
            ...GLOBAL_THIRD_MODULES,
            ...FORM_MODULES,
        ],
        providers: [...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");



let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "./src/app/core/i18n/i18n.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/i18n/i18n.service.ts ***!
  \*******************************************/
/*! exports provided: I18NService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return I18NService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/zh-Hant */ "./node_modules/@angular/common/locales/zh-Hant.js");
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale/en */ "./node_modules/date-fns/locale/en/index.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale/zh_cn */ "./node_modules/date-fns/locale/zh_cn/index.js");
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/locale/zh_tw */ "./node_modules/date-fns/locale/zh_tw/index.js");
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");

// 请参考：https://ng-alain.com/docs/i18n













const DEFAULT = 'zh-CN';
const LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["zh_CN"],
        dateFns: date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["zh_CN"],
        abbr: '🇨🇳',
    },
    'zh-TW': {
        text: '繁体中文',
        ng: _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["zh_TW"],
        dateFns: date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["zh_TW"],
        abbr: '🇭🇰',
    },
    'en-US': {
        text: 'English',
        ng: _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["en_US"],
        dateFns: date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["en_US"],
        abbr: '🇬🇧',
    },
};
let I18NService = class I18NService {
    constructor(settings, nzI18nService, delonLocaleService, translate) {
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this._default = DEFAULT;
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._langs = Object.keys(LANGS).map(code => {
            const item = LANGS[code];
            return { code, text: item.text, abbr: item.abbr };
        });
        // `@ngx-translate/core` 预先知道支持哪些语言
        const lans = this._langs.map(item => item.code);
        translate.addLangs(lans);
        const defaultLan = settings.layout.lang || translate.getBrowserLang();
        if (lans.includes(defaultLan)) {
            this._default = defaultLan;
        }
        this.updateLangData(this._default);
    }
    updateLangData(lang) {
        const item = LANGS[lang];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        this.nzI18nService.setDateLocale(item.dateFns);
        window.__locale__ = item.dateFns;
        this.delonLocaleService.setLocale(item.delon);
    }
    get change() {
        return this.change$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(w => w != null));
    }
    use(lang) {
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang)
            return;
        this.updateLangData(lang);
        this.translate.use(lang).subscribe(() => this.change$.next(lang));
    }
    /** 获取语言列表 */
    getLangs() {
        return this._langs;
    }
    /** 翻译 */
    fanyi(key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    }
    /** 默认语言 */
    get defaultLang() {
        return this._default;
    }
    /** 当前语言 */
    get currentLang() {
        return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
    }
};
I18NService.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["SettingsService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzI18nService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["DelonLocaleService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
];
I18NService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_13__["SettingsService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzI18nService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_13__["DelonLocaleService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
], I18NService);



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: I18NService, throwIfAlreadyLoaded, DefaultInterceptor, StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_0__["I18NService"]; });

/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"]; });

/* harmony import */ var _net_default_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net/default.interceptor */ "./src/app/core/net/default.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _net_default_interceptor__WEBPACK_IMPORTED_MODULE_2__["DefaultInterceptor"]; });

/* harmony import */ var _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup/startup.service */ "./src/app/core/startup/startup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__["StartupService"]; });







/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/core/net/default.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/core/net/default.interceptor.ts ***!
  \*************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm2015/auth.js");










const CODEMESSAGE = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    /*500: '服务器发生错误，请检查服务器。',*/
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
let DefaultInterceptor = class DefaultInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    get notification() {
        return this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]);
    }
    goTo(url) {
        setTimeout(() => this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]).navigateByUrl(url));
    }
    checkStatus(ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        const errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
    }
    handleData(ev) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        if (ev.status > 0) {
            this.injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_7__["_HttpClient"]).end();
        }
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401:
                this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
                // 清空 token 信息
                this.injector.get(_delon_auth__WEBPACK_IMPORTED_MODULE_9__["DA_SERVICE_TOKEN"]).clear();
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            /*  case 500:
                this.goTo(`/exception/${ev.status}`);
                break;*/
            default:
                if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(ev);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ev);
    }
    intercept(req, next) {
        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + url;
        }
        const newReq = req.clone({ url });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((event) => {
            // 允许统一对请求错误处理
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"])
                return this.handleData(event);
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => this.handleData(err)));
    }
};
DefaultInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
DefaultInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], DefaultInterceptor);



/***/ }),

/***/ "./src/app/core/startup/startup.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/startup/startup.service.ts ***!
  \*************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../style-icons-auto */ "./src/style-icons-auto.ts");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../style-icons */ "./src/style-icons.ts");












/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
let StartupService = class StartupService {
    constructor(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        iconSrv.addIcon(..._style_icons_auto__WEBPACK_IMPORTED_MODULE_10__["ICONS_AUTO"], ..._style_icons__WEBPACK_IMPORTED_MODULE_11__["ICONS"]);
    }
    load() {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(resolve => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`), this.httpClient.get('assets/tmp/app-data.json'))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(([langData, appData]) => {
                resolve(null);
                return [langData, appData];
            }))
                .subscribe(([langData, appData]) => {
                // setting language data
                this.translate.setTranslation(this.i18n.defaultLang, langData);
                this.translate.setDefaultLang(this.i18n.defaultLang);
                // application data
                const res = appData;
                // 应用信息：包括站点名、描述、年份
                this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                this.aclService.setFull(true);
                // 初始化菜单
                this.menuService.add(res.menu);
                // 设置页面标题的后缀
                this.titleService.default = '';
                this.titleService.suffix = res.app.name;
            }, () => { }, () => {
                resolve(null);
            });
        });
    }
};
StartupService.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzIconService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18NService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_theme__WEBPACK_IMPORTED_MODULE_5__["ALAIN_I18N_TOKEN"],] }] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: _delon_acl__WEBPACK_IMPORTED_MODULE_6__["ACLService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["TitleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StartupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_5__["ALAIN_I18N_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzIconService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18NService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        _delon_acl__WEBPACK_IMPORTED_MODULE_6__["ACLService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["TitleService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StartupService);



/***/ }),

/***/ "./src/app/delon.module.ts":
/*!*********************************!*\
  !*** ./src/app/delon.module.ts ***!
  \*********************************/
/*! exports provided: fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return fnPageHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return fnDelonAuthConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return fnSTConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/fesm2015/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_mock */ "./_mock/index.ts");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm2015/abc.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm2015/auth.js");

var DelonModule_1;
/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://ng-alain.com/docs/module
 */




// #region mock


const MOCK_MODULES = true ? [_delon_mock__WEBPACK_IMPORTED_MODULE_5__["DelonMockModule"].forRoot({ data: _mock__WEBPACK_IMPORTED_MODULE_6__ })] : undefined;
const REUSETAB_PROVIDES = [
// {
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// },
];
// #endregion
// #region global config functions

function fnPageHeaderConfig() {
    return Object.assign({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"](), { homeI18n: 'home' });
}

function fnDelonAuthConfig() {
    return Object.assign({}, new _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"](), { login_url: '/passport/login' });
}
// tslint:disable-next-line: no-duplicate-imports

function fnSTConfig() {
    return Object.assign({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"](), { modal: { size: 'lg' } });
}
const GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"], useFactory: fnSTConfig },
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"], useFactory: fnPageHeaderConfig },
    { provide: _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"], useFactory: fnDelonAuthConfig },
];
// #endregion
let DelonModule = DelonModule_1 = class DelonModule {
    constructor(parentModule) {
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    static forRoot() {
        return {
            ngModule: DelonModule_1,
            providers: [...REUSETAB_PROVIDES, ...GLOBAL_CONFIG_PROVIDES],
        };
    }
};
DelonModule.ctorParameters = () => [
    { type: DelonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
DelonModule = DelonModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["AlainThemeModule"].forRoot(), _delon_acl__WEBPACK_IMPORTED_MODULE_4__["DelonACLModule"].forRoot(), ...MOCK_MODULES],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DelonModule])
], DelonModule);



/***/ }),

/***/ "./src/app/layout/default/default.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/default/default.component.ts ***!
  \*****************************************************/
/*! exports provided: LayoutDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return LayoutDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm2015/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");










let LayoutDefaultComponent = class LayoutDefaultComponent {
    constructor(router, _message, resolver, settings, el, renderer, doc) {
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(evt => {
            if (!this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                this.isFetching = false;
                if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                    _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"])) {
                return;
            }
            if (this.isFetching) {
                setTimeout(() => {
                    this.isFetching = false;
                }, 100);
            }
        });
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_5__["updateHostClass"])(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngAfterViewInit() {
        // Setting componet for only developer
        if (true) {
            setTimeout(() => {
                const settingFactory = this.resolver.resolveComponentFactory(_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_9__["SettingDrawerComponent"]);
                this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    }
    ngOnInit() {
        const { settings, unsubscribe$ } = this;
        settings.notify.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(unsubscribe$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
};
LayoutDefaultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settingHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], LayoutDefaultComponent.prototype, "settingHost", void 0);
LayoutDefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-default',
        template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/default/default.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
], LayoutDefaultComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/fullscreen.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/default/header/components/fullscreen.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullScreenComponent", function() { return HeaderFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let HeaderFullScreenComponent = class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull__WEBPACK_IMPORTED_MODULE_2__;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.enabled) {
            this.sf.toggle();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderFullScreenComponent.prototype, "_resize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderFullScreenComponent.prototype, "_click", null);
HeaderFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-fullscreen',
        template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderFullScreenComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/i18n.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/i18n.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderI18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderI18nComponent", function() { return HeaderI18nComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm2015/util.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");






let HeaderI18nComponent = class HeaderI18nComponent {
    constructor(settings, i18n, doc) {
        this.settings = settings;
        this.i18n = i18n;
        this.doc = doc;
        /** Whether to display language text */
        this.showLangText = true;
    }
    get langs() {
        return this.i18n.getLangs();
    }
    get curLangCode() {
        return this.settings.layout.lang;
    }
    change(lang) {
        const spinEl = this.doc.createElement('div');
        spinEl.setAttribute('class', `page-loading ant-spin ant-spin-lg ant-spin-spinning`);
        spinEl.innerHTML = `<span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>`;
        this.doc.body.appendChild(spinEl);
        this.i18n.use(lang);
        this.settings.setLayout('lang', lang);
        setTimeout(() => this.doc.location.reload());
    }
};
HeaderI18nComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_5__["I18NService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["ALAIN_I18N_TOKEN"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderI18nComponent.prototype, "showLangText", void 0);
HeaderI18nComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-i18n',
        template: `
    <div *ngIf="showLangText" nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ 'menu.lang' | translate }}
      <i nz-icon nzType="down"></i>
    </div>
    <i
      *ngIf="!showLangText"
      nz-dropdown
      [nzDropdownMenu]="langMenu"
      nzPlacement="bottomRight"
      nz-icon
      nzType="global"
    ></i>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          *ngFor="let item of langs"
          [nzSelected]="item.code === curLangCode"
          (click)="change(item.code)"
        >
          <span role="img" [attr.aria-label]="item.text" class="pr-xs">{{ item.abbr }}</span>
          {{ item.text }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_3__["ALAIN_I18N_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
        _core__WEBPACK_IMPORTED_MODULE_5__["I18NService"], Object])
], HeaderI18nComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/icon.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/icon.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderIconComponent = class HeaderIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
};
HeaderIconComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-icon',
        template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="iconMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <i nz-icon nzType="appstore"></i>
    </div>
    <nz-dropdown-menu #iconMenu="nzDropdownMenu">
      <div nz-menu class="wd-xl animated jello">
        <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="calendar" class="bg-error text-white"></i>
              <small>Calendar</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="file" class="bg-geekblue text-white"></i>
              <small>Files</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="cloud" class="bg-success text-white"></i>
              <small>Cloud</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="star" class="bg-magenta text-white"></i>
              <small>Star</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="team" class="bg-purple text-white"></i>
              <small>Team</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="scan" class="bg-warning text-white"></i>
              <small>QR</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="pay-circle" class="bg-cyan text-white"></i>
              <small>Pay</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="printer" class="bg-grey text-white"></i>
              <small>Print</small>
            </div>
          </div>
        </nz-spin>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HeaderIconComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/notify.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/notify.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");




/**
 * 菜单通知
 */
let HeaderNotifyComponent = class HeaderNotifyComponent {
    constructor(msg, cdr) {
        this.msg = msg;
        this.cdr = cdr;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    updateNoticeData(notices) {
        const data = this.data.slice();
        data.forEach(i => (i.list = []));
        notices.forEach(item => {
            const newItem = Object.assign({}, item);
            if (newItem.datetime)
                newItem.datetime = date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__(item.datetime, {
                    locale: window.__locale__,
                });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find(w => w.title === newItem.type).list.push(newItem);
        });
        return data;
    }
    loadData() {
        if (this.loading)
            return;
        this.loading = true;
        setTimeout(() => {
            this.data = this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            this.loading = false;
            this.cdr.detectChanges();
        }, 1000);
    }
    clear(type) {
        this.msg.success(`清空了 ${type}`);
    }
    select(res) {
        this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    }
};
HeaderNotifyComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderNotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-notify',
        template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HeaderNotifyComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderSearchComponent = class HeaderSearchComponent {
    constructor(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    set toggleChange(value) {
        if (typeof value === 'undefined')
            return;
        this.searchToggled = true;
        this.focus = true;
        setTimeout(() => this.qIpt.focus(), 300);
    }
    ngAfterViewInit() {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    }
    qFocus() {
        this.focus = true;
    }
    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }
};
HeaderSearchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alain-default__search-focus'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderSearchComponent.prototype, "focus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alain-default__search-toggled'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderSearchComponent.prototype, "searchToggled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], HeaderSearchComponent.prototype, "toggleChange", null);
HeaderSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-search',
        template: `
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'arrow-down' : 'search'">
      <input
        nz-input
        [(ngModel)]="q"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [placeholder]="'menu.search.placeholder' | translate"
      />
    </nz-input-group>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], HeaderSearchComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/storage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/default/header/components/storage.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStorageComponent", function() { return HeaderStorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");



let HeaderStorageComponent = class HeaderStorageComponent {
    constructor(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    _click() {
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: () => {
                localStorage.clear();
                this.messageSrv.success('Clear Finished!');
            },
        });
    }
};
HeaderStorageComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderStorageComponent.prototype, "_click", null);
HeaderStorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-storage',
        template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
], HeaderStorageComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/task.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/task.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTaskComponent", function() { return HeaderTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderTaskComponent = class HeaderTaskComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
};
HeaderTaskComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-task',
        template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="taskMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <nz-badge [nzDot]="true">
        <i nz-icon nzType="bell" class="alain-default__nav-item-icon"></i>
      </nz-badge>
    </div>
    <nz-dropdown-menu #taskMenu="nzDropdownMenu">
      <div nz-menu class="wd-lg">
        <div *ngIf="loading" class="mx-lg p-lg"><nz-spin></nz-spin></div>
        <nz-card *ngIf="!loading" nzTitle="Notifications" nzBordered="false" class="ant-card__body-nopadding">
          <ng-template #extra><i nz-icon nzType="plus"></i></ng-template>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/1.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>cipchk</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/2.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>はなさき</strong>
              <p class="mb0">ハルカソラトキヘダツヒカリ</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/3.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>苏先生</strong>
              <p class="mb0">请告诉我，我应该说点什么好？</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/4.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Kent</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/5.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Jefferson</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row>
            <div nz-col [nzSpan]="24" class="pt-md border-top-1 text-center text-grey point">
              See All
            </div>
          </div>
        </nz-card>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HeaderTaskComponent);



/***/ }),

/***/ "./src/app/layout/default/header/components/user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/user.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm2015/auth.js");





let HeaderUserComponent = class HeaderUserComponent {
    constructor(settings, router, tokenService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
    }
    logout() {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    }
};
HeaderUserComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"],] }] }
];
HeaderUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-user',
        template: `
    <div
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
      {{ settings.user.name }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/pro/account/settings">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'menu.account.settings' | translate }}
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'menu.account.logout' | translate }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
], HeaderUserComponent);



/***/ }),

/***/ "./src/app/layout/default/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/default/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");



let HeaderComponent = class HeaderComponent {
    constructor(settings) {
        this.settings = settings;
    }
    toggleCollapsedSidebar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/default/header/header.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingDrawerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerItemComponent", function() { return SettingDrawerItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingDrawerItemComponent = class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.format = value => `${value} px`;
    }
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    pxChange(val) {
        this.i.value = `${val}px`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], SettingDrawerItemComponent.prototype, "data", null);
SettingDrawerItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'setting-drawer-item',
        template: __webpack_require__(/*! raw-loader!./setting-drawer-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/default/setting-drawer/setting-drawer-item.component.html"),
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.setting-drawer__body-item]': 'true',
        },
    })
], SettingDrawerItemComponent);



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.ts ***!
  \***************************************************************************/
/*! exports provided: SettingDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerComponent", function() { return SettingDrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm2015/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");






const ALAINDEFAULTVAR = 'alain-default-vars';
const DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D',
    },
    {
        key: 'volcano',
        color: '#FA541C',
    },
    {
        key: 'sunset',
        color: '#FAAD14',
    },
    {
        key: 'cyan',
        color: '#13C2C2',
    },
    {
        key: 'green',
        color: '#52C41A',
    },
    {
        key: 'daybreak',
        color: '#1890ff',
    },
    {
        key: 'geekblue',
        color: '#2F54EB',
    },
    {
        key: 'purple',
        color: '#722ED1',
    },
    {
        key: 'black',
        color: '#001529',
    },
];
const DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24,
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px',
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff',
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px',
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8,
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30,
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32,
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64,
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true,
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true,
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc',
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa',
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc',
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5',
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8,
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true,
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true,
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
};
let SettingDrawerComponent = class SettingDrawerComponent {
    constructor(cdr, msg, settingSrv, lazy, zone, doc) {
        this.cdr = cdr;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.zone = zone;
        this.doc = doc;
        this.loadedLess = false;
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    get layout() {
        return this.settingSrv.layout;
    }
    get cachedData() {
        return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
    }
    get DEFAULT_PRIMARY() {
        return DEFAULT_VARS['primary-color'].default;
    }
    loadLess() {
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then(() => {
            const lessConfigNode = this.doc.createElement('script');
            lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
            this.doc.body.appendChild(lessConfigNode);
        })
            .then(() => this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'))
            .then(() => {
            this.loadedLess = true;
        });
    }
    genVars() {
        const { data, color, validKeys } = this;
        const vars = {
            [`@primary-color`]: color,
        };
        validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    }
    runLess() {
        const { zone, msg, cdr } = this;
        const msgId = msg.loading(`正在编译主题！`, { nzDuration: 0 }).messageId;
        setTimeout(() => {
            zone.runOutsideAngular(() => {
                this.loadLess().then(() => {
                    window.less.modifyVars(this.genVars()).then(() => {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(() => cdr.detectChanges());
                    });
                });
            });
        }, 200);
    }
    toggle() {
        this.collapse = !this.collapse;
    }
    changeColor(color) {
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter(key => DEFAULT_VARS[key].default === '@primary-color')
            .forEach(key => delete this.cachedData[`@${key}`]);
        this.resetData(this.cachedData, false);
    }
    setLayout(name, value) {
        this.settingSrv.setLayout(name, value);
    }
    resetData(nowData, run = true) {
        nowData = nowData || {};
        const data = Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["deepCopy"])(DEFAULT_VARS);
        Object.keys(data).forEach(key => {
            const value = nowData[`@${key}`] || data[key].default || '';
            data[key].value = value === `@primary-color` ? this.color : value;
        });
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    }
    get validKeys() {
        return Object.keys(this.data).filter(key => this.data[key].value !== this.data[key].default);
    }
    apply() {
        this.runLess();
    }
    reset() {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    }
    copyVar() {
        const vars = this.genVars();
        const copyContent = Object.keys(vars)
            .map(key => `${key}: ${vars[key]};`)
            .join('\n');
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["copy"])(copyContent);
        this.msg.success('Copy success');
    }
};
SettingDrawerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_4__["LazyService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
SettingDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'setting-drawer',
        template: __webpack_require__(/*! raw-loader!./setting-drawer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/default/setting-drawer/setting-drawer.component.html"),
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.setting-drawer]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        _delon_util__WEBPACK_IMPORTED_MODULE_4__["LazyService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])
], SettingDrawerComponent);



/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");



let SidebarComponent = class SidebarComponent {
    constructor(settings) {
        this.settings = settings;
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/default/sidebar/sidebar.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return LayoutFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutFullScreenComponent = class LayoutFullScreenComponent {
};
LayoutFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-fullscreen',
        template: __webpack_require__(/*! raw-loader!./fullscreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/fullscreen/fullscreen.component.html"),
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.alain-fullscreen]': 'true',
        },
    })
], LayoutFullScreenComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _default_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/header/header.component */ "./src/app/layout/default/header/header.component.ts");
/* harmony import */ var _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/sidebar/sidebar.component */ "./src/app/layout/default/sidebar/sidebar.component.ts");
/* harmony import */ var _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/header/components/search.component */ "./src/app/layout/default/header/components/search.component.ts");
/* harmony import */ var _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/header/components/notify.component */ "./src/app/layout/default/header/components/notify.component.ts");
/* harmony import */ var _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/header/components/task.component */ "./src/app/layout/default/header/components/task.component.ts");
/* harmony import */ var _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/header/components/icon.component */ "./src/app/layout/default/header/components/icon.component.ts");
/* harmony import */ var _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default/header/components/fullscreen.component */ "./src/app/layout/default/header/components/fullscreen.component.ts");
/* harmony import */ var _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/header/components/i18n.component */ "./src/app/layout/default/header/components/i18n.component.ts");
/* harmony import */ var _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./default/header/components/storage.component */ "./src/app/layout/default/header/components/storage.component.ts");
/* harmony import */ var _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default/header/components/user.component */ "./src/app/layout/default/header/components/user.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer-item.component */ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts");
/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./passport/passport.component */ "./src/app/layout/passport/passport.component.ts");

















const SETTINGDRAWER = [_default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_15__["SettingDrawerComponent"], _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_16__["SettingDrawerItemComponent"]];
const COMPONENTS = [
    _default_default_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDefaultComponent"],
    _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__["LayoutFullScreenComponent"],
    _default_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
    _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
    ...SETTINGDRAWER,
];
const HEADERCOMPONENTS = [
    _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSearchComponent"],
    _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_8__["HeaderNotifyComponent"],
    _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_9__["HeaderTaskComponent"],
    _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_10__["HeaderIconComponent"],
    _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_11__["HeaderFullScreenComponent"],
    _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_12__["HeaderI18nComponent"],
    _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_13__["HeaderStorageComponent"],
    _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_14__["HeaderUserComponent"],
];
// passport

const PASSPORT = [_passport_passport_component__WEBPACK_IMPORTED_MODULE_17__["LayoutPassportComponent"]];
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        entryComponents: SETTINGDRAWER,
        declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
        exports: [...COMPONENTS, ...PASSPORT],
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/passport/passport.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: url('/assets/back3.jpg') no-repeat;\n}\n:host ::ng-deep .langs {\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n  text-align: right;\n}\n:host ::ng-deep .langs .anticon {\n  margin-top: 24px;\n  margin-right: 24px;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n}\n:host ::ng-deep .wrap {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 32px 0;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    /*   background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n        background-repeat: no-repeat;\n        background-position: center 110px;\n        background-size: 100%;*/\n    width: 100%;\n    height: 100%;\n  }\n  :host ::ng-deep .wrap {\n    /* padding: 32px 0 24px;*/\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n  width: 44px;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n}\n:host ::ng-deep .title {\n  position: relative;\n  /*      color: @heading-color;*/\n  color: #fefff9;\n  font-weight: 600;\n  font-size: 33px;\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n  margin-bottom: 50px;\n}\n:host ::ng-deep .desc {\n  margin-top: 12px;\n  margin-bottom: 40px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bhc3Nwb3J0L3Bhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvcGFzc3BvcnQvRDovQlVQVC1Qcm9qZWN0L3NyYy9hcHAvbGF5b3V0L3Bhc3Nwb3J0L3Bhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQ0Y3RjtFQUdNLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7QURFTjtBQ1RBO0VBVU0sV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FERU47QUNmQTtFQWVRLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FER1I7QUN0QkE7RUF1Qk0sbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZUFBQTtBREVOO0FDMUJBO0VBMkJNLG1CQUFBO0FERU47QUNDSTtFQUFBO0lERUE7OzsrQkFHMkI7SUNDdkIsV0FBQTtJQUNBLFlBQUE7RURDTjtFQ1JFO0lEVUEseUJBQXlCO0VBQzNCO0FBQ0Y7QUMxQ0E7RUE0Q00sa0JBQUE7QURDTjtBQzdDQTtFQStDTSxZQUFBO0VBQ0EsaUJBQUE7QURDTjtBQ2pEQTtFQWtEUSxxQkFBQTtBREVSO0FDcERBO0VBc0RNLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QURDTjtBQzVEQTtFQThETSxrQkFBQTtFRENKLCtCQUErQjtFQ0MzQixjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FEQ047QUN0RUE7RUF3RU0sZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBRENOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bhc3Nwb3J0L3Bhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmFjazMuanBnJykgbm8tcmVwZWF0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sYW5ncyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0IDo6bmctZGVlcCAubGFuZ3MgLmFudGljb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC53cmFwIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMzJweCAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtZm9ybS1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNvbnRhaW5lciB7XG4gICAgLyogICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9UVllUYkFYV2hlUXBSY1dEYURNdS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDExMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7Ki9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC53cmFwIHtcbiAgICAvKiBwYWRkaW5nOiAzMnB4IDAgMjRweDsqL1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxvZ28ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgd2lkdGg6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogICAgICBjb2xvcjogQGhlYWRpbmctY29sb3I7Ki9cbiAgY29sb3I6ICNmZWZmZjk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWQgUHJvJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGVzYyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iLCJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL3N0eWxlcy9kZWZhdWx0Jztcbjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmFjazMuanBnJykgbm8tcmVwZWF0O1xuICAgIH1cbiAgICAubGFuZ3Mge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgLmFudGljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAud3JhcCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMzJweCAwO1xuICAgIH1cbiAgICAuYW50LWZvcm0taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLW1kLW1pbikge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgIC8qICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvVFZZVGJBWFdoZVFwUmNXRGFETXUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAxMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlOyovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAud3JhcCB7XG4gICAgICAgLyogcGFkZGluZzogMzJweCAwIDI0cHg7Ki9cbiAgICAgIH1cbiAgICB9XG4gICAgLnRvcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5oZWFkZXIge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICB3aWR0aDo0NHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6NTAlO1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOjUwJTtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8qICAgICAgY29sb3I6IEBoZWFkaW5nLWNvbG9yOyovXG4gICAgICBjb2xvcjojZmVmZmY5O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkIFBybycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmRlc2Mge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICBjb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/passport/passport.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return LayoutPassportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutPassportComponent = class LayoutPassportComponent {
    constructor() {
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
};
LayoutPassportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-passport',
        template: __webpack_require__(/*! raw-loader!./passport.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/passport/passport.component.html"),
        styles: [__webpack_require__(/*! ./passport.component.less */ "./src/app/layout/passport/passport.component.less")]
    })
], LayoutPassportComponent);



/***/ }),

/***/ "./src/app/routes/callback/callback.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/callback/callback.component.ts ***!
  \*******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm2015/auth.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");





let CallbackComponent = class CallbackComponent {
    constructor(socialService, settingsSrv, route) {
        this.socialService = socialService;
        this.settingsSrv = settingsSrv;
        this.route = route;
    }
    ngOnInit() {
        this.type = this.route.snapshot.params.type;
        this.mockModel();
    }
    mockModel() {
        const info = {
            token: '123456789',
            name: 'cipchk',
            email: `${this.type}@${this.type}.com`,
            id: 10000,
            time: +new Date(),
        };
        this.settingsSrv.setUser(Object.assign({}, this.settingsSrv.user, info));
        this.socialService.callback(info);
    }
};
CallbackComponent.ctorParameters = () => [
    { type: _delon_auth__WEBPACK_IMPORTED_MODULE_3__["SocialService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-callback',
        template: ``,
        providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["SocialService"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["SocialService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CallbackComponent);



/***/ }),

/***/ "./src/app/routes/dashboard/first/first.component.less":
/*!*************************************************************!*\
  !*** ./src/app/routes/dashboard/first/first.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aletDistributeSelect,\n.AaptureMessageSelect,\n.DetectFlowSelect,\n.TopSelect,\n.FlowSelect {\n  position: absolute;\n  right: 1%;\n  top: 5%;\n  width: 110px;\n}\n.threatenSelect {\n  position: absolute;\n  right: 0.6%;\n  top: 2.5%;\n  width: 110px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Rhc2hib2FyZC9maXJzdC9EOi9CVVBULVByb2plY3Qvc3JjL2FwcC9yb3V0ZXMvZGFzaGJvYXJkL2ZpcnN0L2ZpcnN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvZGFzaGJvYXJkL2ZpcnN0L2ZpcnN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDS0Y7QURIQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvZGFzaGJvYXJkL2ZpcnN0L2ZpcnN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXREaXN0cmlidXRlU2VsZWN0LCAuQWFwdHVyZU1lc3NhZ2VTZWxlY3QsIC5EZXRlY3RGbG93U2VsZWN0LC5Ub3BTZWxlY3QsLkZsb3dTZWxlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxJTtcbiAgdG9wOiA1JTtcbiAgd2lkdGg6IDExMHB4O1xufVxuIC50aHJlYXRlblNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6MC42JTtcbiAgdG9wOiAyLjUlO1xuICB3aWR0aDogMTEwcHg7XG59XG5cbiIsIi5hbGV0RGlzdHJpYnV0ZVNlbGVjdCxcbi5BYXB0dXJlTWVzc2FnZVNlbGVjdCxcbi5EZXRlY3RGbG93U2VsZWN0LFxuLlRvcFNlbGVjdCxcbi5GbG93U2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMSU7XG4gIHRvcDogNSU7XG4gIHdpZHRoOiAxMTBweDtcbn1cbi50aHJlYXRlblNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNiU7XG4gIHRvcDogMi41JTtcbiAgd2lkdGg6IDExMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/dashboard/first/first.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/dashboard/first/first.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardFirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardFirstComponent", function() { return DashboardFirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/map/js/china.js */ "./node_modules/echarts/map/js/china.js");
/* harmony import */ var echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_6__);







let DashboardFirstComponent = class DashboardFirstComponent {
    constructor(el, renderer2, http) {
        this.el = el;
        this.renderer2 = renderer2;
        this.http = http;
    }
    ngAfterViewInit() {
        /*告警数据*/
        this.aletDistributeSet();
        /* 捕获报文*/
        this.AaptureMessageSet();
        /*流量检测*/
        this.DetectFlowSet();
        /*威胁等级饼图*/
        this.getDns();
        /* 威胁等级堆叠图*/
        this.getThrenOption();
        /*木马IP统计*/
        this.TopSelectSet();
        /* DnsIP统计*/
        this.DnsTopSelectSet();
        /* 地图获取*/
        this.getDitu();
    }
    ngOnInit() {
    }
    /*地图*/
    getDitu() {
        this.myChartMapOption = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.MapChain.nativeElement);
        this.myChartMapOption.setOption({
            title: {
                text: 'IP攻击实时监控',
                subtext: '',
                left: 'center',
                textStyle: {
                    fontSize: '24',
                },
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                zoom: 1.25,
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                    offset: 0,
                                    color: '#4682B4' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#36648B' // 100% 处的颜色
                                }],
                            globalCoord: false // 缺省为 false
                        },
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10 // 图形阴影的模糊大小
                    },
                    emphasis: {
                        areaColor: '#2a333d',
                        borderWidth: 0
                    }
                },
            },
            series: [{
                    type: 'lines',
                    zlevel: 4,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.1,
                        color: '#DEB887',
                        symbol: 'arrow',
                        symbolSize: 20 /*标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。*/
                    },
                    lineStyle: {
                        normal: {
                            color: '#f89801',
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data: []
                }, {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 4,
                    rippleEffect: {
                        period: 4,
                        scale: 2.5,
                        brushType: 'stroke' /*波纹的绘制方式，可选 'stroke' 和 'fill'。*/
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: 13,
                    itemStyle: {
                        normal: {
                            color: '#000000',
                            borderColor: '#323c48'
                        }
                    },
                    data: []
                }
            ],
            tooltip: {
                trigger: 'item',
                formatter: (p) => {
                    const dataCon = p.data;
                    if (dataCon.warn !== undefined) {
                        const ip = dataCon.warn.split(',');
                        let s = `${dataCon.name}</br>IP:`;
                        for (const i of ip) {
                            s += `</br>${i}`;
                        }
                        return s;
                    }
                    else if (dataCon.name !== undefined) {
                        return `${dataCon.name}`;
                    }
                }
            }
        });
        this.myChartMapOption.showLoading();
        const geoCoordMap = {
            '北京': [116.46, 39.92],
            '平谷': [117.1, 40.13],
            '密云': [116.85, 40.37],
            '顺义': [116.65, 40.13],
            '通县': [116.67, 39.92],
            '怀柔': [116.62, 40.32],
            '大兴': [116.33, 39.73],
            '房山': [115.98, 39.72],
            '延庆': [115.97, 40.47],
            '昌平': [116.2, 40.22],
            '上海': [121.48, 31.22],
            '嘉定': [121.24, 31.4],
            '宝山': [121.48, 31.41],
            '川沙': [121.7, 31.19],
            '南汇': [121.76, 31.05],
            '奉贤': [121.46, 30.92],
            '松江': [121.24, 31],
            '金山': [121.16, 30.89],
            '青浦': [121.1, 31.15],
            '崇明': [121.4, 31.73],
            '天津': [117.2, 39.13],
            '宁河': [117.83, 39.33],
            '静海': [116.92, 38.93],
            '蓟县': [117.4, 40.05],
            '宝坻': [117.3, 39.75],
            '武清': [117.05, 39.4],
            '重庆': [106.54, 29.59],
            '綦江': [106.56, 29.41],
            '长寿': [106.64, 29.01],
            '南桐': [107.04, 29.86],
            '合川': [106.28, 29.26],
            '潼南': [106.22, 30.03],
            '铜梁': [105.8, 30.16],
            '壁山': [106.03, 29.86],
            '荣昌': [106.21, 29.62],
            '大足': [105.59, 29.4],
            '永川': [105.71, 29.75],
            '万盛': [105.91, 29.38],
            '石家庄': [114.48, 38.03],
            '唐山': [118.02, 39.63],
            '行唐': [114.54, 38.42],
            '灵寿': [114.38, 38.31],
            '束鹿': [115.18, 37.94],
            '晋县': [115.03, 38.03],
            '藁城': [114.84, 38.03],
            '高邑': [114.58, 37.62],
            '赵县': [114.78, 37.76],
            '井陉': [114.13, 38.03],
            '获鹿': [114.03, 38.08],
            '新乐': [114.67, 38.33],
            '正定': [114.56, 38.13],
            '深泽': [115.2, 38.2],
            '无极': [114.96, 38.16],
            '赞皇': [114.35, 37.65],
            '元氏': [114.5, 37.74],
            '栾城': [114.64, 38.87],
            '平山': [114.24, 38.2],
            '邯郸': [114.47, 36.6],
            '永年': [114.5, 36.77],
            '曲周': [114.92, 36.78],
            '馆陶': [115.4, 36.47],
            '魏县': [114.94, 36.37],
            '成安': [114.68, 36.43],
            '大名': [115.14, 36.28],
            '涉县': [113.67, 36.57],
            '鸡泽': [113.85, 36.95],
            '丘县': [115.18, 36.84],
            '广平': [114.94, 36.49],
            '肥乡': [114.8, 36.56],
            '临漳': [114.62, 36.35],
            '磁县': [114.37, 36.37],
            '武安': [114.2, 36.7],
            '邢台': [114.48, 37.05],
            '柏乡': [114.68, 37.49],
            '宁普': [114.9, 37.62],
            '隆尧': [114.75, 37.35],
            '临西': [115.5, 36.87],
            '南官': [115.37, 37.37],
            '巨鹿': [115.03, 37.22],
            '任县': [114.68, 37.11],
            '沙河': [114.52, 36.94],
            '临城': [114.5, 37.43],
            '内丘': [114.5, 37.28],
            '新河': [115.22, 37.53],
            '清河': [115.67, 37.07],
            '威县': [115.08, 36.97],
            '广宗': [115.14, 37.06],
            '平乡': [115.02, 37.06],
            '南和': [114.71, 37],
            '保定': [115.48, 38.85],
            '涞水': [115.71, 39.39],
            '涿县': [115.98, 39.48],
            '定兴': [115.78, 39.28],
            '容城': [115.86, 39.06],
            '安新': [115.92, 38.92],
            '蠡县': [115.58, 38.49],
            '博野': [115.46, 38.46],
            '定县': [114.02, 38.52],
            '阜平': [114.18, 38.85],
            '唐县': [114.97, 38.75],
            '涞源': [114.67, 39.37],
            '易县': [115.49, 39.35],
            '新城': [115.84, 39.34],
            '雄县': [116.1, 38.98],
            '徐水': [115.65, 39.02],
            '高阳': [115.78, 38.68],
            '安国': [115.3, 38.41],
            '清苑': [115.47, 38.76],
            '望都': [115.14, 38.71],
            '曲阳': [114.68, 38.62],
            '完县': [115.12, 38.84],
            '满城': [115.45, 38.95],
            '张家口': [114.87, 40.82],
            '康保': [114.6, 41.87],
            '赤城': [115.82, 40.92],
            '怀来': [115.54, 40.4],
            '蔚县': [114.53, 39.83],
            '宣化': [115.03, 40.63],
            '张北': [114.7, 41.15],
            '沽源': [115.68, 41.68],
            '崇礼': [115.25, 40.98],
            '涿鹿': [115.2, 40.37],
            '阳原': [114.15, 40.12],
            '怀安': [114.38, 40.67],
            '尚义': [113.95, 41.05],
            '万全': [114.73, 40.84],
            '承德': [117.93, 40.97],
            '围场': [117.72, 41.95],
            '平泉': [118.68, 41.02],
            '宽城': [118.47, 40.62],
            '兴隆': [117.48, 40.42],
            '滦平': [117.53, 40.95],
            '隆化': [117.7, 41.32],
            '青龙': [118.93, 40.43],
            '丰宁': [116.63, 41.2],
            '秦皇岛': [119.57, 39.95],
            '迁西': [118.3, 40.15],
            '迁安': [118.69, 40.02],
            '昌黎': [119.15, 39.72],
            '卢龙': [118.85, 39.89],
            '滦南': [118.67, 39.49],
            '玉田': [117.9, 39.9],
            '唐海': [118.54, 39.31],
            '遵化': [117.97, 40.2],
            '抚宁': [119.22, 39.88],
            '乐亭': [118.9, 39.43],
            '滦县': [118.73, 39.74],
            '丰南': [118.1, 39.58],
            '丰润': [118.13, 39.82],
            '廊坊': [116.7, 39.53],
            '安次': [116.69, 39.52],
            '三河': [117.06, 39.97],
            '香河': [117, 39.76],
            '霸县': [116.38, 39.12],
            '固安': [116.29, 39.44],
            '大城': [116.63, 38.7],
            '文安': [116.45, 38.87],
            '永清': [116.48, 39.32],
            '大厂': [116.98, 39.98],
            '沧州': [116.83, 38.33],
            '黄骅': [117.33, 38.4],
            '盐山': [117.22, 38.07],
            '吴桥': [116.37, 37.65],
            '东光': [116.52, 37.89],
            '肃宁': [115.82, 38.43],
            '河间': [116.07, 38.45],
            '泊头': [116.56, 38.08],
            '交河': [116.27, 38.02],
            '青县': [116.8, 38.58],
            '海兴': [117.85, 38.17],
            '南皮': [116.7, 38.05],
            '任丘': [116.08, 38.72],
            '献县': [116.12, 38.2],
            '孟村': [117.1, 38.06],
            '衡水': [115.72, 37.72],
            '饶阳': [115.74, 38.24],
            '阜城': [116.14, 37.87],
            '景县': [116.26, 37.69],
            '枣强': [115.72, 37.52],
            '深县': [115.56, 38.02],
            '安平': [115.5, 38.22],
            '武强': [115.96, 38.03],
            '武邑': [115.9, 37.81],
            '故城': [115.96, 37.36],
            '冀县': [115.56, 37.59],
            '太原': [112.53, 37.87],
            '阳曲': [112.65, 38.05],
            '娄烦': [111.78, 38.05],
            '清徐': [112.33, 37.62],
            '大同': [113.3, 40.12],
            '阳泉': [113.57, 37.85],
            '长治': [113.08, 36.18],
            '天镇': [114.08, 40.42],
            '灵丘': [114.2, 39.47],
            '怀仁': [113.1, 39.82],
            '山阴': [112.82, 39.52],
            '平鲁': [112.12, 39.53],
            '右玉': [112.33, 40.18],
            '阳高': [113.72, 40.38],
            '广灵': [113.27, 39.75],
            '浑源': [113.68, 39.7],
            '应县': [113.18, 39.58],
            '朔县': [112.42, 39.32],
            '左云': [112.67, 40.02],
            '忻县': [112.7, 38.38],
            '代县': [112.97, 39.07],
            '五台': [113.32, 38.72],
            '静乐': [111.9, 38.37],
            '保德': [111.09, 38.01],
            '河曲': [111.17, 39.38],
            '神池': [112.17, 39.1],
            '原平': [112.7, 38.73],
            '繁峙': [113.28, 39.2],
            '定襄': [112.95, 38.5],
            '岢岚': [111.58, 38.7],
            '五寨': [111.82, 38.93],
            '偏关': [111.47, 39.45],
            '宁武': [112.28, 39],
            '榆次': [112.72, 37.68],
            '孟县': [113.37, 38.01],
            '昔阳': [113.68, 37.62],
            '左权': [113.35, 37.07],
            '太谷': [112.53, 37.42],
            '平遥': [112.18, 37.2],
            '灵石': [111.77, 36.83],
            '寿阳': [113.17, 37.88],
            '平定': [113.62, 37.79],
            '和顺': [113.55, 37.33],
            '榆社': [112.97, 37.08],
            '祁县': [112.33, 37.36],
            '介休': [111.88, 37.03],
            '离石': [111.13, 37.53],
            '兴县': [111.22, 38.47],
            '方由': [111.24, 37.86],
            '岚县': [111.62, 38.28],
            '交城': [112.14, 37.55],
            '文水': [112.02, 37.42],
            '汾阳': [111.75, 37.27],
            '孝义': [111.8, 37.12],
            '交口': [111.2, 36.97],
            '石楼': [110.83, 37],
            '中阳': [111.17, 37.37],
            '临县': [110.95, 37.95],
            '柳林': [110.85, 37.45],
            '襄垣': [113.02, 36.55],
            '黎城': [113.4, 36.56],
            '壶关': [113.23, 35.11],
            '高平': [112.88, 35.48],
            '阳城': [112.38, 35.84],
            '长子': [112.87, 36.13],
            '沁源': [112.32, 36.5],
            '潞城': [113.22, 36.33],
            '武乡': [112.83, 36.83],
            '平顺': [113.43, 36.19],
            '陵川': [113.27, 35.78],
            '晋城': [112.83, 35.52],
            '沁水': [112.15, 35.67],
            '屯留': [112.87, 36.32],
            '沁县': [112.68, 36.75],
            '临汾': [111.5, 36.08],
            '汾西': [111.53, 36.63],
            '安泽': [112.2, 36.15],
            '古县': [111.9, 36.29],
            '翼城': [111.68, 35.73],
            '曲沃': [111.33, 35.63],
            '吉县': [110.65, 36.12],
            '大宁': [110.72, 36.47],
            '侯马': [111.45, 35.03],
            '永和': [110.64, 36.62],
            '洪洞': [111.68, 36.25],
            '霍县': [111.72, 36.57],
            '浮山': [111.83, 35.97],
            '襄汾': [111.43, 35.86],
            '乡宁': [110.8, 35.97],
            '蒲县': [111.07, 36.42],
            '运城': [110.97, 35.03],
            '闻喜': [111.2, 35.37],
            '垣曲': [111.63, 35.3],
            '芮城': [110.68, 34.71],
            '临猗': [110.78, 35.15],
            '新绛': [111.22, 35.62],
            '河津': [110.7, 35.58],
            '夏县': [111.22, 35.12],
            '绛县': [111.58, 35.48],
            '平陆': [111.2, 34.12],
            '永济': [110.42, 34.88],
            '万荣': [110.83, 110.83],
            '稷山': [110.97, 35.6],
            '沈阳': [123.38, 41.8],
            '新民': [122.83, 42],
            '辽中': [122.7, 41.52],
            '大连': [121.62, 38.92],
            '金县': [121.7, 39.13],
            '复县': [121.97, 39.63],
            '新金': [121.95, 39.55],
            '庄河': [22.97, 39.7],
            '长海': [122.58, 39.28],
            '鞍山': [122.85, 41.12],
            '海城': [122.75, 40.85],
            '台安': [122.4, 41.4],
            '抚顺': [123.97, 41.97],
            '新宾': [125.02, 41.72],
            '清原': [124.9, 42.13],
            '本溪': [123.73, 41.3],
            '垣仁': [125.33, 41.28],
            '锦州': [121.15, 41.13],
            '锦县': [121.35, 41.17],
            '义县': [121.22, 41.55],
            '黑山': [122.12, 41.7],
            '北镇': [121.8, 41.6],
            '锦西': [120.83, 40.77],
            '兴城': [120.68, 40.63],
            '绥中': [120.32, 40.35],
            '丹东': [124.37, 40.13],
            '东沟': [124.13, 39.97],
            '岫岩': [123.25, 40.3],
            '凤城': [124.05, 40.47],
            '宽甸': [124.77, 40.75],
            '阜新': [121.65, 42],
            '彰武': [122.52, 42.42],
            '营口': [122.18, 40.65],
            '盖县': [122.37, 40.42],
            '盘山': [122.03, 41.02],
            '大洼': [122.06, 41],
            '辽阳': [123.17, 41.28],
            '灯塔': [123.34, 41.43],
            '铁岭': [123.85, 42.32],
            '开原': [124.03, 42.53],
            '昌图': [124.13, 42.8],
            '铁法': [123.5, 42.48],
            '康平': [123.33, 42.75],
            '法库': [123.37, 42.52],
            '西丰': [124.7, 42.77],
            '朝阳': [120.42, 41.58],
            '建昌': [119.78, 40.82],
            '北票': [120.75, 41.82],
            '凌源': [119.37, 41.27],
            '建平': [119.63, 41.38],
            '长春': [125.35, 43.88],
            '吉林': [126.57, 43.87],
            '农安': [125.15, 44.45],
            '德惠': [125.68, 44.52],
            '榆树': [126.55, 44.83],
            '九台': [126.83, 44.15],
            '双阳': [125.68, 43.53],
            '永吉': [126.57, 43.87],
            '舒兰': [126.97, 44.4],
            '蛟河': [127.33, 43.75],
            '桦甸': [126.72, 42.97],
            '磐石': [126.03, 42.93],
            '延吉': [129.52, 42.93],
            '汪清': [129.75, 43.32],
            '珲春': [130.35, 42.85],
            '图们': [129.83, 42.98],
            '和龙': [129, 42.52],
            '安图': [128.3, 42.58],
            '敦化': [128.18, 43.35],
            '通化': [125.92, 41.49],
            '柳河': [125.7, 40.88],
            '海龙': [125.65, 42.53],
            '辉南': [126.03, 42.68],
            '靖宇': [126.8, 42.38],
            '浑江': [126.4, 41.97],
            '抚松': [127.27, 42.33],
            '集安': [126.17, 41.15],
            '长白': [128.17, 41.43],
            '四平': [124.37, 43.17],
            '梨树': [124.33, 43.32],
            '怀德': [124.82, 43.5],
            '伊通': [125.32, 43.33],
            '辽源': [125.15, 42.97],
            '东丰': [125.5, 42.68],
            '双辽': [123.5, 43.52],
            '白城': [122.82, 45.63],
            '大安': [124.18, 45.5],
            '扶余': [124.82, 45.2],
            '乾安': [124.02, 45],
            '长岭': [123.97, 44.3],
            '通榆': [123.13, 44.82],
            '洮安': [122.75, 45.35],
            '哈尔滨': [126.63, 45.75],
            '齐齐哈尔': [123.97, 47.33],
            '鹤岗': [130.3, 47.33],
            '双鸭山': [131.17, 46.65],
            '鸡四': [130.97, 45.3],
            '大庆': [125.03, 46.58],
            '伊春': [128.92, 47.73],
            '嘉荫': [130, 48.93],
            '铁力': [128.08, 47.98],
            '绥化': [127, 46.63],
            '绥棱': [127.12, 47.22],
            '海伦': [126.97, 47.47],
            '庆安': [127.5, 46.87],
            '兰西': [126.3, 46.28],
            '肇东': [125.98, 46.07],
            '肇州': [125.25, 45.72],
            '肇源': [125.07, 45.53],
            '安达': [125.33, 46.42],
            '明水': [125.88, 47.18],
            '青岗': [126.13, 46.68],
            '望奎': [126.5, 46.83],
            '黑河': [127.53, 50.22],
            '爱辉': [127.53, 50.22],
            '德都': [126.17, 48.5],
            '通北': [126.8, 49.76],
            '北安': [126.5, 48.22],
            '孙吴': [127.5, 49.22],
            '逊克': [128.42, 49.57],
            '嫩江': [125.2, 49.17],
            '佳木斯': [130.35, 46.83],
            '桦川': [130.68, 47.02],
            '萝北': [130.83, 47.58],
            '绥滨': [131.83, 47.3],
            '富锦': [132.02, 47.23],
            '同江': [132.5, 47.67],
            '抚远': [134.15, 48.33],
            '饶河': [134, 46.78],
            '七台河': [130.83, 45.82],
            '宝清': [132.17, 46.33],
            '集贤': [131.13, 46.7],
            '勃利': [130.53, 45.75],
            '桦南': [130.53, 46.25],
            '依兰': [129.55, 46.33],
            '汤源': [129.92, 46.73],
            '牡丹江': [129.58, 44.6],
            '林口': [130.23, 45.3],
            '鸡东': [131.04, 45.27],
            '密山': [131.85, 45.53],
            '虎林': [133.97, 45.75],
            '绥芬河': [131.17, 44.38],
            '东宁': [131.12, 44.07],
            '穆棱': [130.5, 44.9],
            '宁安': [129.47, 44.35],
            '海林': [129.35, 44.57],
            '阿城': [126.95, 45.52],
            '呼兰': [126.58, 46],
            '巴彦': [127.38, 46.08],
            '宾县': [127.48, 45.75],
            '木兰': [128.03, 45.95],
            '通河': [128.7, 45.98],
            '方正': [128.8, 45.83],
            '延寿': [128.35, 45.47],
            '尚志': [127.95, 45.22],
            '五常': [127.17, 44.93],
            '双城': [126.32, 45.53],
            '富裕': [124.4, 47.8],
            '讷河': [124.85, 48.48],
            '克山': [125.87, 48.03],
            '克东': [126.22, 48.03],
            '拜泉': [126.07, 47.62],
            '依安': [125.3, 47.92],
            '林甸': [124.87, 47.18],
            '泰来': [123.45, 46.4],
            '龙江': [123.18, 47.35],
            '甘南': [123.48, 47.9],
            '杜尔伯特': [124.44, 46.86],
            '加格达奇': [124.07, 50.42],
            '呼玛': [126.6, 51.72],
            '塔河': [124.7, 52.32],
            '漠河': [122.37, 53.48],
            '杭州': [120.19, 30.26],
            '余杭': [120.3, 30.43],
            '富阳': [119.95, 30.07],
            '建德': [119.27, 29.49],
            '临安': [119.72, 30.23],
            '萧山': [120.25, 30.16],
            '桐庐': [119.64, 29.8],
            '淳安': [119.05, 29.61],
            '宁波': [121.56, 29.86],
            '镇海': [121.72, 29.96],
            '温州': [120.65, 28.01],
            '瓯海': [120.65, 28.01],
            '永喜': [120.68, 28.16],
            '洞头': [121.12, 27.84],
            '平阳': [120.55, 27.68],
            '泰顺': [119.7, 27.57],
            '乐清': [120.94, 28.14],
            '瑞安': [120.62, 27.8],
            '文成': [120.08, 27.08],
            '苍南': [120.36, 27.53],
            '湖州': [120.1, 30.86],
            '平湖': [121.02, 30.7],
            '桐乡': [120.54, 30.64],
            '安吉': [119.68, 30.68],
            '嘉善': [120.92, 30.84],
            '嘉兴': [120.76, 30.77],
            '海盐': [120.92, 30.53],
            '海宁': [120.69, 30.53],
            '德清': [120.08, 30.54],
            '长兴': [119.91, 30.01],
            '定海': [122.11, 30.03],
            '岱山': [122.2, 30.26],
            '嵊四': [122.45, 30.72],
            '普陀': [122.3, 29.97],
            '鄞县': [121.56, 29.86],
            '象山': [121.8, 29.48],
            '奉化': [121.41, 29.66],
            '慈溪': [121.23, 30.18],
            '宁海': [121.42, 29.3],
            '余姚': [121.16, 30.04],
            '绍兴': [120.58, 30.01],
            '新昌': [120.89, 29.49],
            '诸暨': [120.23, 29.71],
            '上虞': [120.87, 30.03],
            '嵊县': [120.81, 29.6],
            '椒江': [121.44, 28.67],
            '临海': [121.13, 28.8],
            '三门': [121.38, 29.11],
            '温岭': [121.36, 28.36],
            '仙居': [120.73, 28.85],
            '天台': [121.03, 29.15],
            '黄岩': [121.27, 28.64],
            '玉环': [121.23, 28.14],
            '丽水': [119.92, 28.45],
            '青田': [120.28, 28.45],
            '庆无': [119.06, 27.61],
            '遂昌': [119.25, 28.59],
            '缙云': [120.6, 28.66],
            '云和': [119.56, 28.12],
            '龙泉': [119.13, 28.08],
            '松阳': [119.48, 28.46],
            '金华': [119.64, 29.12],
            '浦江': [119.88, 29.46],
            '东阳': [120.23, 29.27],
            '武义': [119.81, 28.9],
            '江山': [118.61, 28.74],
            '开化': [118.39, 29.15],
            '衢州': [118.88, 28.97],
            '兰溪': [119.48, 29.19],
            '义乌': [120.06, 29.32],
            '永康': [120.02, 28.92],
            '常山': [118.5, 28.9],
            '福州': [119.3, 26.08],
            '闽侯': [119.14, 26.16],
            '厦门': [118.1, 24.46],
            '同安': [118.15, 24.74],
            '南平': [118.16, 26.65],
            /*  '南平': [118.11,27.34],*/
            '建瓯': [118.32, 27.05],
            '浦城': [118.55, 27.92],
            '邵武': [117.48, 27.34],
            '顺昌': [117.8, 26.8],
            '崇安': [118.02, 27.76],
            '光泽': [117.34, 27.54],
            '松溪': [118.77, 27.53],
            '政和': [118.85, 27.38],
            '宁德': [119.52, 26.65],
            '福安': [119.65, 27.09],
            '连江': [119.53, 26.2],
            '福鼎': [120.2, 27.34],
            '霞浦': [120, 26.89],
            '吉田': [118.74, 26.59],
            '罗源': [119.55, 26.49],
            '寿宁': [119.5, 27.47],
            '周宁': [119.36, 27.12],
            '屏南': [118.98, 26.92],
            '柘荣': [119.89, 27.25],
            '莆田': [119, 25.44],
            '仙游': [118.7, 25.37],
            '福清': [119.39, 25.73],
            '长乐': [119.52, 25.96],
            '永泰': [118.95, 25.88],
            '平潭': [119.78, 25.51],
            '闽清': [118.86, 26.21],
            '泉州': [118.58, 24.93],
            '晋江': [118.57, 24.82],
            '南安': [118.39, 24.96],
            '惠安': [118.78, 25.04],
            '安溪': [118.18, 25.07],
            '永春': [118.3, 25.34],
            '德化': [118.24, 25.5],
            '金门': [118.34, 24.43],
            '漳州': [117.35, 24.52],
            '龙海': [117.79, 24.44],
            '漳浦': [117.61, 24.12],
            '诏安': [117.16, 23.73],
            '平和': [117.3, 24.38],
            '云霄': [117.34, 23.99],
            '南靖': [117.35, 24.51],
            '长泰': [117.75, 24.62],
            '东山': [117.4, 23.72],
            '华安': [117.53, 25],
            '龙岩': [117.01, 25.12],
            '上杭': [116.41, 25.43],
            '永定': [116.81, 24.76],
            '长汀': [116.37, 25.85],
            '武平': [116.1, 25.11],
            '连城': [116.75, 25.72],
            '漳平': [117.4, 25.3],
            '三明': [117.61, 26.23],
            '龙溪': [118.17, 26.18],
            '宁化': [116.64, 26.26],
            '大田': [117.83, 25.69],
            '永安': [117.37, 25.97],
            '沙县': [117.77, 26.41],
            '将乐': [117.45, 26.73],
            '清流': [116.81, 26.12],
            '建宁': [116.82, 26.85],
            '泰宁': [117.15, 26.92],
            '明溪': [117.18, 26.36],
            '济南': [117, 36.65],
            '历城': [117.07, 36.69],
            '长清': [116.73, 36.55],
            '章丘': [117.53, 36.72],
            '青岛': [120.33, 36.07],
            '崂山': [120.42, 36.15],
            '胶南': [119.97, 35.88],
            '即墨': [120.45, 36.38],
            '胶县': [120, 36.28],
            '淄博': [118.05, 36.78],
            '枣庄': [117.57, 34.86],
            '滕县': [117.17, 35.09],
            '东营': [118.49, 37.46],
            '垦利': [118.54, 37.59],
            '利津': [118.25, 37.49],
            '德州': [116.29, 37.45],
            '宁津': [116.8, 37.64],
            '乐陵': [117.22, 37.74],
            '商河': [117.15, 37.31],
            '济阳': [117.2, 36.97],
            '禹城': [116.66, 36.95],
            '夏津': [116, 36.95],
            '陵县': [116.58, 37.34],
            '庆云': [117.37, 37.37],
            '临邑': [116.86, 37.2],
            '齐河': [116.76, 36.79],
            '平原': [116.44, 37.16],
            '武城': [116.08, 37.2],
            '滨州': [118.03, 37.36],
            '滨县': [117.97, 37.47],
            '广饶': [118.41, 37.04],
            '桓台': [118.12, 36.95],
            '邹平': [117.75, 36.89],
            '阳信': [117.58, 37.65],
            '沾化': [118.14, 37.7],
            '博兴': [118.12, 37.12],
            '高青': [117.66, 37.18],
            '惠民': [117.51, 17.49],
            '无棣': [117.58, 37.73],
            '潍坊': [119.1, 36.62],
            '潍县': [119.22, 36.77],
            '平度': [119.97, 36.77],
            '诸城': [119.42, 35.99],
            '安丘': [119.2, 36.42],
            '临朐': [118.53, 36.5],
            '寿光': [118.73, 36.86],
            '昌邑': [119.41, 36.86],
            '高密': [119.75, 36.38],
            '五莲': [119.2, 35.74],
            '昌乐': [118.83, 36.69],
            '高都': [118.47, 36.69],
            '烟台': [121.39, 37.52],
            '牟平': [121.59, 37.38],
            '文登': [122.05, 37.2],
            '海阳': [121.17, 36.76],
            '莱阳': [120.71, 36.97],
            '栖霞': [120.83, 37.28],
            '掖县': [119.93, 37.18],
            '长岛': [120.73, 37.91],
            '威海': [122.1, 37.5],
            '福山': [121.27, 37.49],
            '荣成': [122.41, 37.16],
            '乳山': [121.52, 36.89],
            '莱西': [120.53, 36.86],
            '招远': [120.38, 37.35],
            '黄县': [120.51, 37.64],
            '蓬莱': [120.75, 37.8],
            '临沂': [118.35, 35.05],
            '沂水': [118.64, 35.78],
            '日照': [119.46, 35.42],
            '临沭': [118.73, 34.89],
            '仓山': [118.03, 34.84],
            '平邑': [117.63, 35.49],
            '沂源': [118.17, 36.18],
            '沂南': [118.47, 35.54],
            '营县': [118.83, 35.57],
            '莒南': [118.83, 35.17],
            '郯城': [118.35, 34.61],
            '费县': [117.97, 35.26],
            '蒙阴': [117.95, 35.7],
            '泰安': [117.13, 36.18],
            '莱芜': [117.67, 36.19],
            '肥城': [116.76, 36.24],
            '平阴': [116.46, 36.29],
            '新汶': [117.67, 35.86],
            '新泰': [117.76, 35.91],
            '宁阳': [116.8, 35.76],
            '东平': [116.3, 35.91],
            '济宁': [116.59, 35.38],
            '兖州': [116.83, 35.54],
            '泗水': [117.27, 35.65],
            '鱼台': [116.65, 35],
            '嘉祥': [116.34, 35.41],
            '汶上': [116.49, 35.71],
            '曲阜': [116.98, 35.59],
            '邹县': [116.97, 35.39],
            '微山': [117.12, 34.8],
            '金乡': [116.32, 35.07],
            '荷泽': [115.43, 35.24],
            '郓城': [115.94, 35.59],
            '巨野': [116.08, 35.38],
            '单县': [116.07, 34.82],
            '曹县': [115.53, 34.83],
            '鄄城': [115.5, 35.57],
            '梁山': [116.1, 35.8],
            '成武': [115.88, 34.97],
            '定陶': [115.57, 35.07],
            '东明': [115.08, 35.31],
            '聊城': [115.97, 36.45],
            '高唐': [116.23, 36.86],
            '东阿': [116.23, 36.32],
            '莘县': [115.67, 36.24],
            '临清': [115.72, 36.68],
            '茌平': [116.27, 36.58],
            '阳谷': [115.78, 36.11],
            '冠县': [115.45, 35.47],
            '郑州': [113.65, 34.76],
            '荥阳': [113.35, 34.79],
            '开封': [114.35, 34.79],
            '平顶山': [113.29, 33.75],
            '洛阳': [112.44, 34.7],
            '焦作': [113.21, 35.24],
            '鹤壁': [114.17, 35.9],
            '杞县': [114.77, 34.56],
            '尉氏': [114.17, 34.41],
            '新郑': [113.71, 34.4],
            '登封': [113.02, 34.46],
            '通许': [114.46, 34.48],
            '中牟': [114, 34.73],
            '密县': [113.35, 34.51],
            '巩县': [112.96, 34.76],
            '兰考': [114.81, 34.69],
            '新乡': [113.85, 35.31],
            '汲县': [114.05, 35.44],
            '封丘': [114.04, 35.03],
            '获嘉': [113.63, 35.27],
            '温贺': [113.06, 34.94],
            '济源': [112.57, 35.08],
            '博爱': [113.05, 35.16],
            '辉县': [113.77, 35.46],
            '延津': [114.19, 35.14],
            '原阳': [113.96, 35.05],
            '武陟': [113.38, 35.1],
            /*   '孟县': [112.77,34.92],*/
            '沁阳': [112.92, 35.08],
            '修武': [113.42, 35.24],
            '安阳': [114.35, 36.1],
            '南乐': [115.21, 36.08],
            '范县': [115.46, 35.9],
            '台前': [115.83, 36],
            '滑县': [114.52, 35.57],
            '浚县': [114.54, 35.67],
            '淇县': [114.17, 35.6],
            '内黄': [114.88, 35.95],
            '清丰': [115.1, 35.89],
            '濮阳': [114.98, 35.71],
            '长垣': [114.67, 35.19],
            '汤阴': [114.35, 35.92],
            '林县': [113.81, 36.06],
            '商丘': [115.65, 34.44],
            '夏邑': [116.13, 34.22],
            '柘城': [115.29, 34.08],
            '睢县': [115.04, 34.46],
            '虞城': [115.87, 34.4],
            '永城': [116.37, 33.94],
            '宁陵': [115.31, 34.44],
            '民权': [115.13, 34.65],
            '周口': [114.63, 33.63],
            '商水': [114.59, 33.54],
            '扶沟': [114.38, 34.05],
            '鹿邑': [115.48, 33.86],
            '淮阳': [114.88, 33.74],
            '沈丘': [115.06, 33.41],
            '西华': [114.5, 33.79],
            '太康': [114.85, 34.06],
            '郸城': [115.17, 33.63],
            '项城': [114.9, 33.44],
            '许昌': [113.81, 34.02],
            '鄢县': [114.17, 34.11],
            '郾城': [113.98, 33.6],
            '襄城': [113.46, 33.86],
            '鲁山': [112.88, 33.74],
            '郏县': [113.19, 33.98],
            '漯河': [114.02, 33.56],
            '长葛': [113.77, 34.22],
            '临颖': [113.94, 33.81],
            '舞阳': [113.58, 33.44],
            '叶县': [113.35, 33.62],
            '宝丰': [113.04, 33.86],
            '禹县': [113.47, 34.16],
            '驻马店': [114.02, 32.98],
            '确山': [114.02, 32.83],
            '西平': [114, 33.38],
            '汝南': [114.35, 33],
            '新蔡': [114.97, 32.75],
            '泌阳': [113.31, 32.72],
            '遂平': [113.98, 33.15],
            '上蔡': [114.26, 33.25],
            '平舆': [114.62, 32.97],
            '正阳': [114.38, 32.62],
            '信阳': [114.08, 32.13],
            '息县': [114.72, 32.35],
            '固始': [115.68, 32.17],
            '潢川': [115.04, 32.13],
            '新县': [114.83, 31.62],
            '罗山': [114.53, 32.21],
            '淮滨': [115.41, 32.44],
            '商城': [115.42, 31.81],
            '光山': [114.91, 32.02],
            '南阳': [112.53, 33.01],
            '方城': [112.98, 33.25],
            '唐河': [112.83, 32.7],
            '新野': [112.36, 32.51],
            '邓县': [112.08, 32.68],
            '淅川': [111.47, 33.14],
            '南召': [112.4, 33.49],
            '社旗': [112.92, 33.05],
            '桐柏': [113.4, 32.37],
            '镇平': [112.23, 33.03],
            '内乡': [111.83, 33.05],
            '西峡': [111.5, 33.31],
            '三门峡': [111.19, 34.76],
            '孟津': [112.42, 34.84],
            '临汝': [112.83, 34.17],
            '汝阳': [112.46, 34.16],
            '嵩县': [112.07, 34.14],
            '栾川': [111.6, 33.81],
            '灵宝': [110.85, 34.52],
            '渑池': [111.75, 34.76],
            '义马': [111.92, 34.73],
            '偃师': [112.77, 34.73],
            '伊川': [112.42, 34.43],
            '宜阳': [112.15, 34.51],
            '洛宁': [111.65, 34.39],
            '卢氏': [111.03, 34.06],
            '陕县': [111.19, 34.76],
            '新安': [112.14, 34.75],
            '武汉': [114.31, 30.52],
            '武昌': [114.33, 30.35],
            '汉阳': [114.02, 30.57],
            '黄石': [115.09, 30.2],
            '十堰': [110.79, 32.65],
            '沙市': [112.24, 30.32],
            '宜昌': [111.3, 30.7],
            '襄樊': [112.14, 30.02],
            '孝感': [113.91, 31.92],
            '黄陂': [114.36, 30.88],
            '汉川': [113.59, 30.63],
            '云梦': [113.73, 31.02],
            '应山': [113.81, 31.62],
            '大悟': [114.09, 31.56],
            '应城': [113.6, 30.94],
            '安陆': [113.69, 31.25],
            '鄂城': [114.87, 30.38],
            '黄冈': [114.87, 30.44],
            '新洲': [114.8, 31.84],
            '红安': [114.61, 31.29],
            '麻城': [115, 31.17],
            '罗川': [115.37, 30.79],
            '浠水': [115.22, 30.46],
            '蕲春': [115.3, 30.24],
            '黄梅': [115.93, 30.09],
            '广济': [115.56, 29.85],
            '英山': [115.57, 30.75],
            '咸宁': [114.28, 29.87],
            '阳新': [115.22, 29.83],
            '通山': [114.52, 29.6],
            '通城': [113.8, 29.23],
            '嘉鱼': [113.91, 29.97],
            '崇阳': [114.04, 29.54],
            '蒲圻': [113.85, 29.71],
            '荆门': [112.19, 31.02],
            '江陵': [112.18, 30.35],
            '钟祥': [112.58, 31.17],
            '京山': [113.11, 31.03],
            '监利': [112.9, 29.83],
            '石首': [112.41, 29.73],
            '长沙': [113, 28.21],
            '望城': [112.8, 28.37],
            '株洲': [113.16, 27.83],
            '湘潭': [112.91, 27.87],
            '衡阳': [112.61, 26.89],
            '邵阳': [111.5, 27.22],
            '岳阳': [113.09, 29.37],
            '临湘': [113.42, 29.48],
            '平江': [113.56, 29.71],
            '泪罗': [113.05, 28.8],
            '湘阴': [112.87, 28.68],
            '华容': [112.55, 29.52],
            '浏阳': [113.63, 28.16],
            '醴陵': [113.5, 27.67],
            '攸县': [113.32, 27.01],
            '茶陵': [113.54, 26.79],
            '酃县': [113.77, 26.49],
            '湘乡': [112.5, 27.75],
            '郴州': [113, 25.79],
            '郴县': [113, 25.79],
            '安仁': [113.27, 26.71],
            '永兴': [113.11, 26.13],
            '资兴': [113.39, 25.95],
            '桂东': [113.91, 25.08],
            '汝城': [113.68, 25.54],
            '宜章': [113.96, 25.41],
            '临武': [112.55, 25.27],
            '嘉禾': [112.35, 25.56],
            '桂阳': [112.72, 25.73],
            '来阳': [112.84, 26.41],
            '衡南': [112.61, 26.89],
            '衡山': [112.86, 27.25],
            '衡东': [112.95, 27.1],
            '常宁': [112.39, 26.38],
            '祁阳': [111.85, 26.59],
            '祁东': [112.14, 26.8],
            /* '衡阳': [112.39,26.98],*/
            '永州': [111.63, 26.22],
            '零陵': [111.63, 26.22],
            '新田': [112.21, 25.91],
            '宁远': [111.95, 25.6],
            '蓝山': [112.16, 25.37],
            '双牌': [111.64, 25.96],
            '江永': [111.33, 25.41],
            '道县': [111.57, 25.52],
            '东安': [111.28, 26.41],
            '江华': [111.79, 24.97],
            '新宁': [110.84, 26.44],
            '武冈': [110.61, 26.73],
            '隆回': [111.04, 27.13],
            '绥宁': [110.14, 25.59],
            '洞口': [110.57, 27.06],
            '城步': [110.3, 26.37],
            '娄底': [111.96, 27.71],
            '涟源': [111.66, 27.68],
            '新邵': [111.46, 27.33],
            '双峰': [112.18, 27.44],
            '冷水江': [111.41, 27.68],
            '邵东': [111.73, 27.25],
            '新化': [111.29, 27.73],
            '怀化': [109.95, 27.52],
            '黔阳': [110.14, 27.33],
            '辰溪': [110.18, 28.02],
            '沅陵': [110.39, 28.46],
            '溆浦': [110.57, 27.92],
            '会同': [109.71, 26.86],
            '靖县': [109.68, 26.57],
            '洪江': [109.96, 27.1],
            '芷江': [109.78, 27.44],
            '麻阳': [109.79, 27.87],
            '通道': [109.77, 26.16],
            '新晃': [109.16, 27.37],
            '吉首': [109.71, 28.3],
            '永顺': [109.84, 29],
            '桑植': [110.16, 29.38],
            '大庸': [110.48, 29.13],
            '古丈': [109.91, 28.62],
            '泸溪': [110.73, 28.29],
            '凤凰': [109.43, 27.92],
            '花垣': [109.46, 28.59],
            '保靖': [109.64, 28.7],
            '龙山': [109.42, 29.64],
            '常德': [111.69, 29.05],
            '临澧': [111.64, 29.44],
            '澧县': [111.75, 29.65],
            '安乡': [112.16, 29.41],
            '津市': [111.87, 29.64],
            '汉寿': [111.97, 28.9],
            '桃源': [111.47, 28.9],
            '慈利': [111.09, 29.41],
            '石门': [111.35, 29.59],
            '益阳': [112.33, 28.6],
            '南县': [112.39, 29.37],
            '沅江': [112.36, 28.83],
            '宁乡': [112.55, 28.27],
            '安化': [111.2, 28.38],
            '桃江': [112.11, 28.51],
            '广州': [113.23, 23.16],
            '花县': [113.19, 23.4],
            '新十': [114.2, 24.09],
            '增城': [113.81, 23.13],
            '从化': [113.55, 23.57],
            '龙门': [114.25, 23.75],
            '番禺': [113.36, 22.95],
            '海口': [110.35, 20.02],
            '汕头': [116.69, 23.39],
            /* '洪江': [110.38,21.2],*/
            '茂名': [110.88, 21.68],
            '佛山': [113.11, 23.05],
            '江门': [113.06, 22.61],
            '深圳': [114.07, 22.62],
            '宝安': [113.85, 22.58],
            '珠海': [113.52, 22.3],
            '韶关': [113.62, 24.84],
            '曲江': [113.58, 24.68],
            '乐昌': [113.35, 25.14],
            '仁化': [113.73, 25.11],
            '南雄': [114.33, 25.14],
            '始兴': [114.08, 24.78],
            '翁源': [114.13, 24.36],
            '佛岗': [113.52, 23.86],
            '英德': [113.38, 24.17],
            '清远': [113.01, 23.7],
            '阳山': [112.65, 24.48],
            '连县': [112.4, 24.77],
            '连山': [112.07, 24.59],
            '连南': [112.28, 24.77],
            '惠州': [114.4, 23.09],
            '惠阳': [114.4, 23.09],
            '博罗': [114.28, 23.18],
            '河源': [114.68, 23.73],
            '连平': [114.48, 24.39],
            '和平': [114.89, 24.45],
            '龙川': [115.25, 24.09],
            '紫金': [115.18, 23.64],
            '惠东': [114.7, 22.97],
            '东莞': [113.75, 23.04],
            '梅州': [116.1, 24.55],
            '梅县': [116.1, 24.55],
            '平远': [117.9, 24.59],
            '蕉岭': [116.18, 24.66],
            '大埔': [116.7, 24.34],
            '丰顺': [116.18, 23.78],
            '五华': [115.75, 23.93],
            '兴宁': [115.75, 24.15],
            '潮州': [116.63, 23.68],
            '澄海': [116.8, 23.48],
            '潮安': [116.63, 23.68],
            '饶平': [117.01, 23.7],
            '南澳': [117.03, 23.44],
            '潮阳': [116.61, 23.27],
            '惠来': [116.29, 23.07],
            '陆丰': [117.64, 22.95],
            '海丰': [117.33, 22.98],
            '普宁': [116.17, 23.29],
            '揭西': [115.82, 23.45],
            '揭阳': [116.35, 23.55],
            '南海': [113.11, 23.05],
            '三水': [112.89, 23.18],
            '顺德': [113.24, 22.84],
            '中山': [113.38, 22.52],
            '斗门': [113.25, 22.2],
            '新会': [113.02, 22.52],
            '鹤山': [112.94, 22.76],
            '开平': [112.68, 22.36],
            '台山': [112.78, 22.27],
            '恩平': [112.29, 22.21],
            '高明': [112.76, 21.71],
            '廉江': [110.27, 21.63],
            '化州': [110.59, 21.64],
            '高州': [110.83, 21.95],
            '信宜': [110.9, 22.36],
            '阳春': [111.78, 22.16],
            '阳江': [111.95, 21.85],
            '电白': [110.99, 21.52],
            '吴川': [110.78, 21.43],
            '徐闻': [110.17, 20.34],
            '海康': [110.07, 20.91],
            '遂溪': [110.24, 21.39],
            '肇庆': [112.44, 23.05],
            '高要': [112.44, 23.05],
            '怀集': [112.18, 23.93],
            '广宁': [112.43, 23.14],
            '四会': [112.68, 23.36],
            '新兴': [112.2, 22.68],
            '云浮': [112.02, 22.93],
            '罗定': [111.56, 22.77],
            '郁南': [111.51, 23.23],
            '德庆': [111.75, 23.15],
            '封开': [111.48, 23.45],
            /* '海口': [110.35,20.02],*/
            '琼山': [110.33, 19.98],
            '文昌': [110.72, 19.61],
            '定安': [110.31, 19.68],
            '琼海': [110.46, 19.25],
            '万宁': [110.39, 18.8],
            '屯昌': [110.1, 19.36],
            '澄迈': [110, 19.75],
            '儋县': [109.57, 19.52],
            '临高': [109.69, 19.91],
            '保亭': [109.7, 18.64],
            '白沙': [109.44, 19.23],
            '琼中': [109.83, 19.05],
            '陵水': [110.02, 18.48],
            '崖县': [109.5, 18.25],
            '乐东': [109.17, 18.73],
            '东方': [108.64, 19.09],
            '昌江': [109.03, 19.25],
            '成都': [104.06, 30.67],
            '金堂': [104.32, 30.88],
            '双流': [104.94, 30.57],
            '蒲江': [103.29, 30.2],
            '郫县': [103.86, 30.8],
            '新都': [104.13, 30.82],
            '来易': [102.15, 26.9],
            '盐边': [101.56, 26.9],
            '温江': [103.81, 30.97],
            '灌县': [103.61, 31.04],
            '彭县': [103.94, 30.99],
            '什邡': [104.16, 31.13],
            '广汉': [104.25, 30.99],
            '新津': [103.78, 30.42],
            '邛崃': [103.47, 30.42],
            '大邑': [103.53, 30.58],
            '崇庆': [103.69, 30.63],
            '绵阳': [104.73, 31.48],
            '江油': [104.7, 31.8],
            '青川': [105.21, 32.59],
            '平武': [104.52, 32.42],
            '光元': [105.86, 32.44],
            '旺苍': [106.33, 32.25],
            '剑阁': [105.45, 32.03],
            '梓潼': [105.16, 31.64],
            '三台': [105.06, 31.1],
            '盐亭': [105.35, 31.23],
            '射洪': [105.31, 30.9],
            '遂宁': [105.58, 30.52],
            '蓬溪': [105.74, 30.78],
            '中江': [104.68, 31.06],
            '德阳': [104.37, 31.13],
            '绵竹': [104.19, 31.32],
            '安县': [104.41, 31.64],
            '北川': [104.44, 31.89],
            '内江': [105.04, 29.59],
            '乐至': [105.02, 30.3],
            '安岳': [105.3, 30.12],
            '威远': [104.7, 29.57],
            '资中': [104.85, 29.81],
            '资阳': [104.6, 30.19],
            '简阳': [104.53, 30.38],
            '隆昌': [105.25, 29.64],
            '宜宾': [104.56, 29.77],
            '富顺': [104.97, 29.24],
            '南溪': [104.96, 28.87],
            '江安': [105.06, 28.71],
            '纳溪': [105.38, 28.77],
            '泸县': [105.46, 28.96],
            '合江': [105.78, 28.79],
            '泸州': [105.39, 28.91],
            '古蔺': [105.79, 28.03],
            '叙水': [105.44, 28.19],
            '长宁': [104.91, 28.6],
            '兴文': [105.06, 28.36],
            '琪县': [104.81, 28.38],
            '高县': [104.52, 28.4],
            '筠连': [104.53, 28.16],
            '屏由': [104.15, 28.68],
            '乐由': [103.73, 29.59],
            '夹江': [103.59, 29.75],
            '洪雅': [103.38, 29.95],
            '丹棱': [103.53, 30.04],
            '青神': [103.81, 29.86],
            '眉由': [103.81, 30.05],
            '彭由': [103.83, 30.22],
            '井研': [104.06, 29.67],
            '仁寿': [104.09, 30],
            '犍为': [103.93, 29.21],
            '沐川': [103.98, 28.96],
            '娥眉': [103.5, 29.62],
            '马边': [103.53, 28.87],
            '峨边': [103.25, 29.23],
            '金口': [103.13, 29.24],
            '涪陵': [107.36, 29.7],
            '垫江': [107.34, 30.36],
            '丰都': [107.7, 29.89],
            '石柱': [108.13, 29.98],
            '秀山': [108.97, 28.47],
            '西阳': [108.75, 28.85],
            '黔江': [108.81, 29.53],
            '彭水': [108.19, 29.29],
            '武隆': [108.72, 29.29],
            '南川': [107.13, 29.15],
            '万县': [108.35, 30.83],
            '开县': [108.39, 31.23],
            '城口': [108.67, 31.98],
            '巫溪': [109.6, 31.42],
            '巫山': [109.86, 31.1],
            '奉节': [109.52, 31.06],
            '云阳': [108.89, 30.99],
            '忠县': [108.03, 30.33],
            '梁平': [107.78, 30.66],
            '南允': [106.06, 30.8],
            '苍溪': [105.96, 31.75],
            '阆中': [105.97, 31.75],
            '仪陇': [106.38, 31.52],
            '南部': [106.03, 31.34],
            '西允': [105.84, 31.01],
            '营山': [106.57, 31.07],
            '蓬安': [106.44, 31.04],
            '广安': [106.61, 30.48],
            '岳池': [106.43, 30.55],
            '武胜': [106.3, 30.38],
            '华云': [106.74, 30.41],
            '达县': [107.49, 31.23],
            '万源': [108.06, 32.07],
            '宜汉': [107.71, 31.39],
            '开江': [107.87, 31.1],
            '邻水': [106.91, 30.36],
            '大竹': [107.21, 30.75],
            '渠县': [106.94, 30.85],
            '南江': [106.83, 32.36],
            '巴中': [106.73, 31.86],
            '平昌': [107.11, 31.59],
            '通江': [108.24, 31.95],
            '百沙': [108.18, 32],
            '雅安': [102.97, 29.97],
            '芦山': [102.91, 30.17],
            '名山': [103.06, 30.09],
            '荣经': [102.81, 29.79],
            '汉源': [102.66, 29.4],
            '石棉': [102.38, 29.21],
            '天全': [102.78, 30.09],
            '宝兴': [102.84, 30.36],
            '马尔康': [102.22, 31.92],
            '红原': [102.55, 31.79],
            '阿坝': [101.72, 31.93],
            '若尔盖': [102.94, 33.62],
            '黑水': [102.95, 32.06],
            '松潘': [103.61, 32.64],
            '南坪': [104.19, 33.23],
            '汶川': [103.61, 31.46],
            '理县': [103.16, 31.42],
            '小金': [102.34, 30.97],
            '金川 ': [102.03, 31.48],
            '壤塘': [100.97, 32.3],
            '茂汶': [103.89, 31.67],
            '康定': [101.95, 30.04],
            '炉霍': [100.65, 31.38],
            '甘孜': [99.96, 31.64],
            '新龙': [100.28, 30.96],
            '白玉': [98.83, 32.23],
            '德格': [98.57, 31.81],
            '石渠': [98.06, 33.01],
            '色达': [100.35, 32.3],
            '泸定': [102.25, 29.92],
            '丹巴': [101.87, 30.85],
            '九龙': [101.53, 29.01],
            '雅江': [101, 30.03],
            '道孚': [101.14, 30.99],
            '理塘': [100.28, 30.03],
            '乡城': [99.78, 28.93],
            '稻城': [100.31, 29.04],
            '巴塘': [99, 30],
            '得荣': [99.25, 28.71],
            '西昌': [102.29, 27.92],
            '昭觉': [102.83, 28.03],
            '甘洛': [102.74, 28.96],
            '雷波': [103.62, 28.21],
            '宁南': [102.76, 27.07],
            '会东': [102.55, 26.74],
            '会理': [102.21, 26.67],
            '德昌': [102.15, 27.4],
            '美姑': [103.14, 28.33],
            '金阳': [103.22, 27.73],
            '布拖': [102.8, 27.7],
            '普格': [102.52, 27.38],
            '喜德': [102.42, 28.33],
            '越西': [102.49, 28.66],
            '盐源': [101.51, 27.42],
            '冕宁': [102.15, 28.58],
            '木里': [101.25, 27.9],
            '贵阳': [106.71, 26.57],
            '六盘水': [104.82, 26.58],
            '水城': [104.82, 26.58],
            '盘县': [104.64, 25.81],
            '六枝': [105.47, 26.21],
            '遵义': [106.9, 27.7],
            '绥阳': [107.19, 27.95],
            '道真': [107.6, 28.89],
            '凤冈': [107.72, 27.97],
            '余庆': [107.88, 27.22],
            '赤水': [105.69, 28.57],
            '桐梓': [106.8, 28.16],
            '正安': [107.43, 28.56],
            '务川': [107.87, 28.54],
            '湄潭': [107.5, 27.76],
            '仁怀': [106.41, 27.81],
            '习水': [106.2, 28.33],
            '铜仁': [109.21, 27.73],
            '玉屏': [108.91, 27.24],
            '思南': [108.23, 27.94],
            '德江': [108.13, 28.27],
            '万山': [109.2, 27.52],
            '江口': [108.82, 27.68],
            '师阡': [108.24, 27.52],
            '印江': [108.41, 28.02],
            '沿河': [108.48, 28.57],
            '松桃': [109.18, 28.17],
            '毕节': [105.29, 27.32],
            '黔西': [106.04, 27.03],
            '织金': [105.76, 26.66],
            '赫章': [104.71, 27.13],
            '大方': [105.61, 27.16],
            '金沙': [106.22, 27.46],
            '钠雍': [105.38, 26.77],
            '威宁': [104.28, 26.87],
            '安顺': [105.92, 26.25],
            '息烽': [106.73, 27.1],
            '清镇': [106.46, 26.56],
            '普定': [105.75, 26.32],
            '开阳': [106.95, 27.06],
            '修文': [106.59, 26.84],
            '平坝': [106.26, 26.42],
            '镇宁': [105.75, 26.08],
            '紫云': [106.06, 25.75],
            '关岭': [105.62, 25.94],
            '兴义': [104.91, 25.1],
            '普安': [104.96, 25.79],
            '贞丰': [105.63, 25.39],
            '望谟': [106.09, 25.17],
            '册亭': [105.79, 25],
            '安龙': [105.49, 25.11],
            '兴仁': [105.18, 25.44],
            '晴龙': [105.21, 25.83],
            '凯里': [107.97, 26.59],
            '施秉': [108.11, 27.03],
            '镇远': [108.41, 27.06],
            '天柱': [109.2, 26.89],
            '剑河': [108.58, 26.64],
            '黎平': [109.14, 26.24],
            '从江': [108.9, 25.76],
            '麻江': [107.58, 26.49],
            '黄平': [107.89, 26.89],
            '三穗': [108.68, 26.98],
            '岑巩': [108.72, 27.21],
            '锦屏': [109.18, 26.7],
            '台江': [108.32, 26.68],
            '榕江': [108.5, 25.94],
            '雷山': [108.07, 26.38],
            '丹寨': [107.79, 26.21],
            '都匀': [107.53, 26.72],
            '贵定': [107.22, 26.58],
            '瓮安': [107.48, 27.08],
            '平塘': [107.55, 25.83],
            '长顺': [106.45, 26.03],
            '惠水': [106.66, 26.14],
            '荔波': [107.88, 25.42],
            '福泉': [107.51, 26.7],
            '独山': [107.54, 25.84],
            '罗甸': [106.74, 25.43],
            '龙里': [106.98, 26.46],
            '三都': [107.86, 26],
            '昆明': [102.73, 25.04],
            '富民': [102.48, 25.21],
            '晋宁': [102.58, 24.68],
            '呈贡': [102.79, 24.9],
            '安宁': [102.44, 24.95],
            '昭通': [103.7, 29.32],
            '永善': [103.63, 28.22],
            '大关': [103.91, 27.74],
            '彝良': [104.06, 27.61],
            '鲁甸': [103.54, 27.21],
            '绥江': [103.97, 28.58],
            '盐津': [104.28, 28.08],
            '威信': [105.05, 27.85],
            '镇雄': [104.86, 27.42],
            '巧家': [102.92, 26.9],
            '永富': [104.38, 28.62],
            '曲靖': [103.79, 25.51],
            '宣威': [104.09, 26.24],
            '富源': [104.24, 25.67],
            '师宗': [103.97, 24.85],
            '嵩明': [103.03, 25.35],
            '会泽': [103.27, 26.41],
            '沽益': [103.82, 25.62],
            '罗平': [104.3, 24.88],
            '陆良': [104.64, 25.04],
            '宜良': [103.12, 24.9],
            '马龙': [103.61, 25.41],
            '路南': [103.24, 24.77],
            '寻甸': [103.25, 25.56],
            '玉溪': [102.52, 24.35],
            '华宁': [102.93, 24.26],
            '通海': [102.75, 24.09],
            '澄江': [102.91, 24.68],
            '江川': [102.73, 24.27],
            '易门': [102.15, 24.67],
            '元江': [102, 23.59],
            '新平': [101.98, 24.06],
            '峨山': [102.38, 24.16],
            '思茅': [101, 22.79],
            '普洱': [101.03, 23.07],
            '镇沅': [100.88, 23.9],
            '景东': [100.82, 24.42],
            '景谷': [100.71, 23.5],
            '黑江': [101.71, 23.4],
            '澜沦': [99.97, 22.55],
            '西盟': [99.47, 22.73],
            '江城': [101.88, 22.58],
            '孟连': [99.55, 22.32],
            '临沦': [100.09, 23.88],
            '云县': [100.12, 24.44],
            '镇康': [99.02, 23.92],
            '永德': [99.25, 24.03],
            '凤庆': [99.92, 24.58],
            '双江': [99.85, 23.45],
            '沧源': [99.24, 23.15],
            '耿马': [99.41, 23.56],
            '保由': [99.18, 25.12],
            '施甸': [99.15, 24.69],
            '腾冲': [98.51, 25.01],
            '昌宁': [99.61, 24.82],
            '龙陵': [98.7, 24.58],
            '丽江': [100.25, 26.86],
            '华坪': [101.24, 26.63],
            '永胜': [100.76, 26.71],
            '宁蒗': [100.82, 27.29],
            '文山': [104.24, 23.37],
            '广南': [105.09, 24.05],
            '西畴': [104.68, 23.42],
            '麻栗坡': [104.71, 23.12],
            '马关': [104.4, 23.01],
            '丘北': [104.19, 24.03],
            '砚山': [104.35, 23.62],
            '富宁': [105.6, 23.62],
            '个旧': [102.43, 23.35],
            '弥勒': [103.43, 24.41],
            '蒙自': [103.41, 23.36],
            '元阳': [102.81, 23.17],
            '红河': [102.42, 23.35],
            '石屏': [102.48, 23.73],
            '泸西': [103.76, 24.52],
            '金平': [103.24, 22.77],
            '开远': [103.23, 23.7],
            '绿春': [102.42, 23.01],
            '建水': [102.79, 23.64],
            '河口': [103.98, 22.52],
            '屏边': [103.67, 22.68],
            '景淇': [100.79, 22],
            '勐海': [100.5, 21.95],
            '勐腊': [101.56, 21.48],
            '楚雄': [101.54, 25.01],
            '元谋': [101.85, 25.7],
            '武定': [102.36, 25.55],
            '禄丰': [102.08, 25.15],
            '南华': [101.26, 25.21],
            '大姚': [101.34, 25.73],
            '永仁': [101.7, 26.07],
            '禄劝': [102.45, 25.58],
            '牟定': [101.58, 25.32],
            '双柏': [101.67, 24.68],
            '姚安': [101.24, 25.4],
            '下关': [100.24, 25.45],
            '剑川': [99.88, 26.53],
            '洱源': [99.94, 26.1],
            '宾川': [100.55, 25.82],
            '弥渡': [100.52, 25.34],
            '永平': [99.52, 25.45],
            '鹤庆': [100.18, 26.55],
            '大理': [100.19, 25.69],
            '漾濞': [99.98, 25.68],
            '云龙': [99.39, 25.9],
            '祥云': [100.56, 25.48],
            '巍山': [100.33, 25.23],
            '南涧': [100.51, 25.04],
            '潞西': [98.6, 24.41],
            '陇川': [97.96, 24.33],
            '盈江': [97.93, 24.69],
            '畹町': [98.08, 24.08],
            '瑞丽': [97.83, 24],
            '梁河': [98.3, 24.78],
            '泸水': [98.82, 25.97],
            '碧江': [98.95, 26.55],
            '福贡': [98.92, 26.89],
            '兰坪': [99.29, 26.49],
            '贡山': [98.65, 27.73],
            '中甸': [99.72, 27.78],
            '德钦': [98.93, 28.49],
            '维西': [99.27, 27.15],
            '南昌': [115.89, 28.68],
            '新建': [115.8, 28.69],
            '景德镇': [117.22, 29.3],
            '萍乡': [113.85, 27.6],
            '九江': [115.97, 29.71],
            '彭泽': [116.56, 29.9],
            '湖口': [116.23, 29.75],
            '都昌': [116.19, 29.29],
            '星子': [116.03, 29.47],
            '永修': [115.82, 29.04],
            '德安': [115.75, 29.33],
            '瑞昌': [115.65, 29.68],
            '武宁': [115.09, 29.26],
            '修永': [114.55, 29.04],
            '上饶': [117.97, 28.47],
            '婺源': [117.83, 29.25],
            '德兴': [117.58, 28.96],
            '玉山': [118.25, 28.68],
            '广丰': [118.2, 28.45],
            '铅山': [117.71, 28.32],
            '横峰': [117.62, 28.42],
            '鹰潭': [117.02, 28.23],
            '贵溪': [117.2, 28.3],
            '余江': [116.82, 28.22],
            '万年': [117.08, 28.7],
            '乐平': [117.12, 28.97],
            '波阳': [116.68, 29],
            '于干': [116.69, 28.7],
            '弋阳': [117.43, 28.42],
            '宜春': [114.38, 27.81],
            '万载': [114.44, 28.11],
            '铜鼓': [114.37, 28.53],
            '宜丰': [114.78, 28.4],
            '上高': [114.91, 28.25],
            '安义': [115.55, 28.86],
            '奉新': [115.38, 28.71],
            '高安': [115.38, 28.42],
            '丰城': [115.7, 28.19],
            '清江': [115.54, 28.07],
            '新余': [114.92, 27.81],
            '分宜': [114.68, 27.82],
            '靖安': [115.37, 28.88],
            '抚州': [116.34, 28],
            '临川': [116.29, 27.95],
            '金溪': [116.77, 27.92],
            '资溪': [117.06, 27.7],
            '黎川': [116.91, 27.3],
            '南丰': [116.52, 27.22],
            '南城': [116.62, 27.56],
            '宜黄': [116.2, 27.55],
            '崇仁': [116.05, 27.75],
            '乐安': [115.82, 27.44],
            '东乡': [116.61, 28.23],
            '进贤': [116.26, 28.37],
            '吉安': [114.97, 27.12],
            '新干': [115.4, 27.77],
            '峡江': [115.15, 27.56],
            '吉水': [115.14, 27.22],
            '永丰': [115.42, 27.33],
            '泰和': [114.88, 26.81],
            '万安': [114.77, 26.47],
            '遂川': [114.5, 26.33],
            '宁冈': [113.97, 26.71],
            '永新': [114.23, 26.96],
            '莲花': [113.94, 27.14],
            '安福': [114.62, 27.39],
            '井冈山': [114.17, 26.57],
            '赣州': [114.92, 25.85],
            '广昌': [116.32, 26.84],
            '石城': [116.32, 26.34],
            '宁都': [116, 26.46],
            '兴国': [115.33, 26.32],
            '于都': [115.39, 25.96],
            '瑞金': [116.02, 25.89],
            '会昌': [115.79, 25.58],
            '安远': [115.41, 25.15],
            '寻乌': [115.64, 24.96],
            '定南': [115.02, 24.7],
            '龙南': [114.79, 24.91],
            '全南': [114.53, 24.76],
            '信丰': [114.94, 25.39],
            '赣县': [114.02, 25.85],
            '南康': [114.75, 25.66],
            '上犹': [114.55, 25.8],
            '崇义': [114.31, 25.69],
            '大余': [114.36, 25.39],
            '西安': [108.95, 34.27],
            '长安': [108.97, 34.18],
            '铜川': [109.11, 35.09],
            '耀县': [108.98, 34.91],
            '宝鸡': [107.15, 34.38],
            '凤翔': [107.39, 34.53],
            '千阳': [107.13, 34.65],
            '陇县': [106.86, 34.91],
            '麟游': [107.8, 34.69],
            '岐山': [107.63, 34.46],
            '浮风': [107.87, 34.38],
            '武功': [108.22, 34.28],
            '眉县': [107.76, 34.29],
            '太白': [107.3, 34.09],
            '凤县': [106.51, 33.93],
            '榆林': [109.77, 38.3],
            '神木': [110.51, 38.83],
            '府谷': [111.07, 39.05],
            '佳县': [110.48, 38.04],
            '米脂': [110.23, 37.78],
            '吴堡': [110.73, 37.49],
            '绥德': [110.24, 37.49],
            '清涧': [110.15, 37.11],
            '子洲': [110.05, 37.45],
            '横山': [109.32, 37.97],
            '靖边': [108.79, 37.61],
            '定边': [107.59, 37.6],
            '延安': [109.47, 36.6],
            '安寨': [109.34, 36.88],
            '子长': [109.65, 37.16],
            '延川': [110.18, 36.87],
            '延长': [110.02, 36.59],
            '宜川': [110.15, 36.04],
            '黄龙': [109.86, 35.6],
            '洛川': [109.42, 35.76],
            '宜君': [109.11, 35.43],
            '黄陵': [109.27, 35.6],
            '富县': [109.37, 36],
            '甘泉': [109.37, 36.29],
            '志丹': [108.78, 36.84],
            '吴旗': [108.22, 36.93],
            '咸阳': [108.72, 34.36],
            '礼泉': [108.43, 34.5],
            '永寿': [108.14, 34.71],
            '彬县': [108.09, 35.04],
            '长武': [107.8, 35.22],
            '旬邑': [108.33, 35.13],
            '淳化': [108.57, 34.81],
            '泾阳': [108.84, 34.53],
            '三原': [108.94, 34.62],
            '高陵': [109.1, 34.55],
            '户县': [108.61, 34.12],
            '周至': [108.22, 34.18],
            '兴平': [108.49, 34.32],
            '乾县': [108.25, 34.54],
            '渭南': [109.5, 34.52],
            '蒲城': [109.59, 34.97],
            '白水': [109.6, 35.18],
            '成城': [109.93, 35.2],
            '韩城': [110.45, 35.47],
            '合阳': [110.15, 35.24],
            '人荔': [109.96, 34.82],
            '潼关': [110.25, 34.56],
            '华阴': [110.09, 34.58],
            '华县': [109.77, 34.53],
            '蓝田': [109.32, 34.17],
            '临潼': [109.22, 34.38],
            '富平': [109.17, 34.76],
            '商县': [109.96, 33.88],
            '洛南': [110.15, 34.11],
            '丹凤': [110.35, 33.71],
            '商南': [110.88, 33.54],
            '山阳': [109.91, 33.55],
            '镇安': [109.16, 33.45],
            '柞水': [109.14, 33.69],
            '安康': [109.02, 32.7],
            '旬阳': [109.35, 32.83],
            '白河': [110.06, 32.83],
            '平利': [109.37, 32.41],
            '镇坪': [109.51, 31.91],
            '岚皋': [108.89, 32.3],
            '紫阳': [108.55, 32.56],
            '汉阴': [108.53, 32.9],
            '石泉': [108.26, 33.05],
            '宁陕': [108.33, 33.34],
            '汉中': [108.04, 33.07],
            '留坝': [106.95, 33.65],
            '城固': [107.32, 33.16],
            '洋县': [107.56, 33.23],
            '佛坪': [108, 33.55],
            '西乡': [107.77, 33],
            '镇巴': [107.91, 32.56],
            '南郑': [106.93, 33],
            '宁强': [106.25, 32.82],
            '勉县': [106.68, 33.16],
            '略阳': [106.16, 33.34],
            '西宁': [101.74, 36.56],
            '大通': [101.67, 36.92],
            '平安': [102.09, 36.47],
            '湟中': [101.57, 36.49],
            '乐都': [102.38, 36.49],
            '民和': [102.8, 36.3],
            '湟源': [101.28, 36.72],
            '互助': [101.95, 36.84],
            '化隆': [102.3, 36.11],
            '循化': [102.46, 35.84],
            '门源': [101.62, 37.37],
            '海晏': [100.99, 36.89],
            '刚察': [100.17, 37.32],
            '祁连': [100.22, 38.2],
            '同仁': [102, 35.54],
            '尖扎': [102, 35.92],
            '泽库': [101.5, 35.03],
            '河南': [101.62, 34.75],
            '共和': [100.61, 36.27],
            '贵德': [101.47, 36.02],
            '贵南': [100.75, 35.57],
            '同德': [100.63, 35.24],
            '兴海': [99.99, 35.6],
            '玛沁': [100.26, 34.49],
            '甘德': [99.89, 33.95],
            '久治': [101.47, 33.46],
            '班玛': [100.73, 32.92],
            '达日': [99.68, 33.74],
            '玛多': [98.26, 34.92],
            '玉树': [96.97, 33.03],
            '称多': [97.12, 33.35],
            '囊谦': [96.47, 32.23],
            '杂多': [95.3, 32.92],
            '治多': [95.6, 33.86],
            '曲麻菜': [95.5, 34.52],
            '格尔木': [94.9, 36.41],
            '乌兰': [98.46, 36.9],
            '都兰': [98.13, 36.3],
            '天峻': [99.03, 37.28],
            '兰州': [103.73, 36.03],
            '永登': [103.25, 36.73],
            '榆中': [104.09, 35.87],
            '永昌': [101.94, 38.23],
            '皋兰': [103.97, 36.32],
            '定西': [104.57, 35.57],
            '会宁': [105.08, 35.72],
            '陇西': [104.61, 34.98],
            '临洮': [103.88, 35.39],
            '靖远': [104.71, 36.54],
            '通渭': [105.27, 35.24],
            '渭源': [104.19, 35.17],
            '平凉': [106.68, 35.51],
            '灵台': [107.61, 35.1],
            '华亭': [106.65, 35.21],
            '静宁': [105.73, 35.51],
            '泾川': [107.38, 35.31],
            '崇信': [107.05, 35.27],
            '庄浪': [106.06, 35.2],
            '庆阳': [107.88, 36.03],
            '华池': [108, 36.44],
            '庄宁': [108.43, 35.5],
            '镇源': [107.22, 35.7],
            '环县': [107.33, 36.57],
            '合水': [108.02, 35.81],
            '宁县': [107.94, 35.17],
            '天水': [105.69, 34.6],
            '徽县': [106.11, 33.78],
            '礼县': [105.15, 34.22],
            '武山': [104.88, 34.69],
            '秦安': [105.69, 34.89],
            '清水': [106.12, 34.73],
            '两当': [106.28, 33.9],
            '西和': [105.28, 34.02],
            '甘谷': [105.35, 34.7],
            '漳县': [104.48, 34.87],
            '张家川': [106.23, 35],
            '武都': [104.94, 33.43],
            '宕昌': [104.38, 34.06],
            '康县': [105.58, 33.33],
            '成县': [105.7, 33.75],
            '文县': [104.7, 32.95],
            '临潭': [103.35, 34.69],
            '舟曲': [104.38, 33.81],
            '玛曲': [102.04, 33.97],
            '下河': [102.46, 35.21],
            '卓尼': [103.54, 34.61],
            '迭部': [103.23, 34.08],
            '碌曲': [102.5, 34.6],
            '临夏': [103.22, 35.62],
            '永靖': [103.34, 35.97],
            '和政': [103.31, 35.43],
            '康乐': [103.68, 35.39],
            '广河': [103.54, 35.46],
            /* '东乡': [103.39,35.68],*/
            '岷县': [104.04, 34.41],
            '积石山': [102.85, 35.74],
            '武威': [102.61, 37.94],
            '民勤': [103.08, 38.62],
            '古浪': [102.86, 37.43],
            '景泰': [104.05, 37.14],
            '天祝': [102.84, 37.24],
            '张掖': [100.46, 38.93],
            '民乐': [100.85, 38.43],
            '临泽': [100.17, 39.14],
            '山丹': [101.19, 38.79],
            '高台': [99.84, 39.14],
            '肃南': [99.57, 38.86],
            '玉门': [97.58, 39.81],
            '酒泉': [98.5, 39.71],
            '敦煌': [94.71, 40.13],
            '金塔': [98.92, 39.97],
            '安西': [95.77, 40.51],
            '阿克塞': [94.25, 38.46],
            '肃北': [94.89, 39.49],
            '南宁': [108.33, 22.84],
            '柳州': [109.4, 24.33],
            '桂林': [110.28, 25.29],
            '梧州': [111.34, 23.51],
            '凭祥': [106.75, 22.11],
            '邕宁': [108.49, 22.74],
            '武鸣': [108.27, 23.17],
            '马山': [108.2, 23.73],
            '上林': [108.59, 23.44],
            '宾阳': [108.8, 23.22],
            '横县': [109.2, 22.69],
            '扶绥': [107.92, 22.65],
            '崇左': [107.37, 22.42],
            '宁明': [107.08, 22.12],
            '龙州': [106.84, 22.36],
            '大新': [107.21, 22.85],
            '天等': [107.12, 23.08],
            '隆安': [107.68, 23.18],
            '河池': [108.06, 24.7],
            '环江': [108.26, 24.83],
            '罗城': [108.9, 24.79],
            '宜山': [108.64, 24.47],
            '东兰': [107.36, 24.53],
            '凤山': [107.05, 24.55],
            '天峨': [107.16, 25.01],
            '南丹': [107.54, 24.98],
            '都安': [108.09, 23.94],
            '巴马': [107.25, 24.15],
            '合山': [108.89, 23.82],
            '柳城': [109.24, 24.67],
            '融安': [109.37, 24.24],
            '鹿寨': [109.74, 24.49],
            '象州': [109.7, 23.98],
            '武宜': [109.66, 23.6],
            '柳江': [109.34, 24.27],
            '来宾': [109.24, 23.76],
            '忻城': [108.66, 24.07],
            '融水': [109.24, 25.07],
            '三江': [109.58, 25.8],
            '金秀': [110.18, 24.14],
            '临桂': [110.22, 25.22],
            '灵川': [110.33, 25.42],
            '兴安': [110.66, 25.6],
            '资源': [110.66, 26.03],
            '全州': [111.06, 25.96],
            '灌阳': [111.14, 25.49],
            '恭城': [110.81, 24.85],
            '平乐': [110.66, 24.64],
            '荔浦': [110.38, 24.51],
            '永福': [109.98, 24.99],
            '龙胜': [110.02, 25.78],
            '苍悟': [111.22, 23.51],
            '钟山': [111.3, 24.53],
            '富川': [110.26, 24.83],
            '贺县': [111.54, 24.44],
            '岑溪': [111, 22.95],
            '藤县': [110.9, 23.36],
            '蒙山': [110.54, 24.22],
            '昭平': [110.8, 24.18],
            '玉林': [110.14, 22.64],
            '桂平': [110.07, 23.38],
            '平南': [110.4, 23.55],
            '容县': [110.53, 22.87],
            '北流': [110.33, 22.71],
            '陆川': [110.25, 22.33],
            '博白': [109.98, 22.27],
            '贵县': [109.6, 23.11],
            '北海': [109.12, 21.49],
            '钦州': [108.61, 21.96],
            '灵山': [109.29, 22.44],
            '浦北': [109.56, 22.27],
            '合浦': [109.2, 21.33],
            '上思': [107.98, 22.16],
            '防城': [108.35, 21.78],
            '百色': [106.62, 23.91],
            '凌云': [106.55, 24.35],
            '乐业': [106.56, 24.78],
            '田阳': [106.9, 23.75],
            '田东': [107.12, 23.62],
            '平果': [107.59, 23.33],
            '德保': [106.6, 23.34],
            '靖西': [106.41, 23.15],
            '那坡': [105.85, 23.42],
            '西林': [105.08, 24.51],
            '田林': [106.24, 24.31],
            '隆林': [105.34, 24.8],
            '乌鲁木齐': [87.68, 43.77],
            '克拉玛依': [84.77, 45.59],
            '石河子': [85.94, 44.27],
            '吐鲁番': [89.19, 42.91],
            '托克逊': [88.63, 42.77],
            '鄯善': [90.25, 42.82],
            '哈密': [93.44, 42.78],
            '伊吾': [94.65, 43.28],
            '巴里坤': [93, 43.6],
            '库尔勒': [86.06, 41.68],
            '和静': [86.35, 42.31],
            '和硕': [86.84, 42.23],
            '博湖': [86.53, 41.95],
            '尉梨': [86.24, 41.36],
            '轮台': [84.25, 41.77],
            '焉耆': [86.55, 42.05],
            '和田': [79.94, 37.12],
            '民丰': [82.63, 37.07],
            '策勒': [80.78, 37.04],
            '于田': [81.63, 36.86],
            '洛浦': [80.17, 37.12],
            '皮山': [78.29, 37.06],
            '墨玉': [79.74, 37.31],
            '阿克苏': [80.29, 41.15],
            '温宿': [80.24, 41.29],
            '拜城': [81.84, 41.82],
            '库车': [82.97, 41.68],
            '新和': [82.63, 41.55],
            '沙雅': [82.9, 41.25],
            '阿瓦提': [80.34, 40.64],
            '柯平': [79.06, 40.55],
            '乌什': [79.25, 41.22],
            '咯什': [75.94, 39.52],
            '巴楚': [78.59, 39.78],
            '枷师': [76.78, 39.46],
            '乐普湖': [76.67, 39.23],
            '麦盖提': [77.62, 38.95],
            '莎车': [77.25, 38.45],
            '泽普': [77.26, 38.2],
            '叶城': [77.42, 37.89],
            '疏勒': [76.05, 39.41],
            '英吉沙': [76.17, 38.91],
            '疏附': [75.83, 39.42],
            '塔什库尔干': [75.22, 75.22],
            '阿图什': [76.12, 39.73],
            '阿合奇': [78.42, 41.91],
            '阿克陶': [75.94, 39.14],
            '乌恰': [75.18, 39.7],
            '昌吉': [87.31, 44.05],
            '阜康': [87.94, 44.14],
            '奇台': [89.52, 44.02],
            '吉木萨尔': [89.14, 44],
            '米泉': [87.68, 43.97],
            '玛纳斯': [86.22, 44.28],
            '呼图壁': [86.92, 44.18],
            '木垒': [90.34, 43.8],
            '博乐': [82.1, 44.93],
            '精河': [82.92, 44.67],
            '温泉': [81.08, 44.95],
            '伊宁': [81.33, 43.91],
            '尼勒克': [82.53, 43.82],
            '新源': [83.27, 43.41],
            '巩留': [82.23, 43.35],
            '奎屯': [84.89, 44.45],
            '特克斯': [81.81, 43.23],
            '昭苏': [81.08, 43.15],
            '霍城': [80.87, 44.07],
            '察布察尔': [81.12, 43.82],
            '塔城': [82.96, 46.74],
            '额敏': [83.62, 46.52],
            '乌苏': [84.62, 44.45],
            '托里': [83.59, 45.92],
            '裕民': [82.94, 46.21],
            '沙湾': [85.56, 44.29],
            '和布克赛尔': [85.13, 46.78],
            '阿勒泰': [88.14, 47.86],
            '青河': [90.37, 46.71],
            '富蕴': [89.44, 47.05],
            '福海': [87.51, 47.15],
            '吉木乃': [85.84, 47.42],
            '布尔津': [86.92, 47.7],
            '哈巴河': [86.41, 48.05],
            '呼和浩特': [111.65, 40.82],
            '上默特左旗': [111.13, 40.72],
            '托克托': [111.15, 40.28],
            '包头': [110, 40.58],
            '上默特右旗': [110.52, 40.55],
            '固阳': [110.03, 41.03],
            '乌海': [106.82, 39.67],
            '集宁': [113.08, 41.03],
            '兴和': [113.97, 40.88],
            '清水河': [111.65, 39.92],
            '武川': [111.42, 41.12],
            '卓资': [112.52, 40.93],
            '商都': [113.53, 41.58],
            '丰镇': [113.15, 40.45],
            '凉城': [112.48, 40.52],
            '和林格尔': [111.8, 40.4],
            '化德': [114, 41.9],
            '察哈尔右翼后旗': [113.15, 41.85],
            '察哈尔右翼中旗': [112.62, 41.28],
            '察哈尔右翼前旗': [113.18, 40.78],
            '四子王旗': [111.68, 41.37],
            '达尔罕茂明安联合旗': [110.42, 41.72],
            '二连浩特': [111.96, 43.65],
            '阿巴哈纳尔旗': [116.08, 43.95],
            '多伦': [116.48, 42.18],
            '阿巴嘎旗': [114.97, 44.03],
            '西乌珠穆沁旗': [117.58, 44.6],
            '东乌珠穆沁旗': [116.97, 45.53],
            '苏尼特左旗': [113.7, 43.85],
            '苏尼特右旗': [112.95, 42.47],
            '太仆寺旗': [115.3, 41.9],
            '正镶白旗': [115, 42.32],
            '正蓝旗': [116.02, 42.25],
            '镶黄旗': [113.83, 42.25],
            '海拉尔': [119.73, 29.22],
            '满洲里': [117.47, 49.58],
            '陈巴尔虎旗': [119.45, 49.33],
            '额尔古纳右旗': [120.08, 50.45],
            '额尔古纳左旗': [121.52, 50.8],
            '喜桂图旗': [120.73, 49.3],
            '阿荣旗': [123.5, 48.13],
            '布特哈旗': [122.78, 47.98],
            '新巴尔虎左旗': [116.82, 48.67],
            '新巴尔虎右旗': [118.23, 48.22],
            '鄂伦春自治旗': [123.7, 50.58],
            '莫力达瓦达斡尔族自治旗': [124.5, 48.47],
            '鄂温克族自治旗': [119.75, 49.13],
            '通辽': [122.28, 43.63],
            '开鲁': [121.32, 43.62],
            '科尔沁左翼后旗': [122.35, 42.97],
            '科尔沁左翼中旗': [123.28, 44.13],
            '库伦旗': [121.75, 42.72],
            '奈曼旗': [120.65, 42.85],
            '扎鲁特旗': [120.87, 44.55],
            '赤峰': [118.87, 42.28],
            '宁城': [119.32, 41.62],
            '林西': [118.02, 43.62],
            '喀喇沁旗': [118.67, 41.95],
            '敖汉旗': [119.87, 42.3],
            '翁牛特旗': [119, 42.97],
            '巴林右旗': [118.65, 43.52],
            '巴林左旗': [119.35, 43.98],
            '阿鲁科尔沁旗': [120.05, 43.97],
            '克什克腾旗': [117.48, 43.28],
            '伊克昭盟': [110, 39.83],
            '东胜县': [110, 39.83],
            '准格尔旗': [111.13, 39.68],
            '乌审旗': [109.03, 38.38],
            '伊金霍洛旗': [109.77, 39.25],
            '鄂托克旗': [107.97, 39.12],
            '鄂托克前旗': [107.43, 38.18],
            '杭锦旗': [108.7, 39.83],
            '达拉特旗': [110.02, 40.42],
            '临河': [107.37, 40.78],
            '五原': [108.28, 41.12],
            '磴口': [106.98, 40.33],
            '杭锦后旗': [107.12, 40.88],
            '乌拉特中旗': [108.52, 41.55],
            '乌拉特前旗': [108.65, 40.75],
            '乌拉特后旗': [108.52, 40.88],
            '阿拉善左旗': [105.68, 38.85],
            '阿拉善右旗': [101.68, 39.2],
            '额济纳旗': [100.88, 41.9],
            '乌兰浩特': [122.08, 46.07],
            '突泉': [121.5, 45.4],
            '科尔沁右翼前旗': [122.03, 46.12],
            '科尔沁右翼中旗': [121.47, 45.05],
            '拉萨': [91.11, 29.97],
            '林周': [91.24, 30.2],
            '当雄': [91.05, 30.51],
            '墨竹工卡': [91.77, 29.77],
            '尼木': [90.14, 29.44],
            '米林': [94.13, 29.18],
            '墨脱': [95.26, 29.22],
            '达孜': [91.39, 29.63],
            '曲水': [90.7, 29.39],
            '堆龙德庆': [90.96, 29.67],
            '林芝': [94.25, 29.59],
            '工布江达': [93.25, 29.92],
            '那曲': [92.1, 31.47],
            '巴青': [94.1, 31.96],
            '比如': [93.68, 31.53],
            '班戈': [90.05, 31.35],
            '嘉黎': [93.46, 30.63],
            '聂荣': [92.3, 31.08],
            '索县': [93.71, 31.92],
            '安多': [91.68, 32.29],
            '申扎': [88.7, 30.94],
            '吕都': [97.14, 31.18],
            '贡觉': [98.29, 30.86],
            '左贡': [97.9, 29.68],
            '察隅': [97.49, 28.62],
            '洛隆': [95.76, 30.81],
            '丁青': [95.63, 31.42],
            '波密': [95.75, 29.92],
            '江达': [89.19, 31.53],
            '察雅': [97.56, 30.69],
            '芒康': [98.68, 29.64],
            '八宿': [96.95, 30.04],
            '边坝': [94.69, 30.94],
            '类乌齐': [96.57, 31.2],
            '乃东': [91.76, 29.18],
            '加查': [92.6, 29.09],
            '曲松': [92.11, 29.08],
            '错那': [91.91, 27.98],
            '穷结': [91.65, 29.04],
            '贡嘎': [90.96, 29.25],
            '浪卡子': [90.33, 29.96],
            '桑日': [92, 29.26],
            '朗县': [93.11, 29.06],
            '隆子': [92.42, 28.46],
            '措美': [91.4, 28.49],
            '洛扎': [90.83, 28.42],
            '扎囊': [91.26, 29.22],
            '日喀则': [88.82, 29.28],
            '定结': [87.77, 28.38],
            '拉孜': [87.62, 29.1],
            '聂拉木': [85.94, 28.19],
            '谢通门': [88.25, 29.43],
            '仲巴': [84.15, 29.66],
            '康马': [89.67, 28.57],
            '亚东': [88.93, 27.55],
            '岗巴': [88.5, 28.29],
            '南木林': [89.02, 29.71],
            '萨迦': [88, 28.87],
            '定日': [87.11, 28.57],
            '吉隆': [85.29, 28.94],
            '昂仁': [87.22, 29.3],
            '江孜': [89.63, 28.94],
            '仁布': [89.77, 29.21],
            '白朗': [89.16, 29.11],
            '萨嘎': [85.3, 29.38],
            '噶尔': [80, 32.08],
            '革吉': [81.13, 32.45],
            '扎达': [79.76, 31.47],
            '措勤': [85.16, 31.06],
            '日上': [79.61, 33.44],
            '改则': [84.1, 32.33],
            '普兰': [81.18, 30.37],
            '银川': [106.27, 38.47],
            '永宁': [106.24, 38.28],
            '贺兰': [106.35, 38.55],
            '石嘴山': [106.39, 39.04],
            '平罗': [106.54, 38.91],
            '陶乐': [106.69, 38.82],
            '吴忠': [106.21, 37.99],
            '同心': [105.94, 36.97],
            '灵武': [106.34, 38.1],
            '中宁': [105.66, 37.48],
            '盐池': [107.41, 37.78],
            '中卫': [105.18, 37.51],
            '青铜峡': [106.07, 38.02],
            '固原': [106.28, 36.01],
            '西吉': [105.7, 35.97],
            '泾源': [106.33, 35.5],
            '海原': [105.64, 36.56],
            '隆德': [106.11, 35.63],
            '台湾': [121.5, 25.14],
            '香港': [114.1, 22.2],
            '澳门': [113.33, 22.13],
            '合肥': [117.27, 31.86],
            '长丰': [117.16, 32.47],
            '淮南': [116.98, 32.62],
            '凤台': [116.71, 32.68],
            '淮北': [116.77, 33.97],
            '濉溪': [116.76, 33.92],
            '芜湖': [118.38, 31.33],
            '铜陵': [117.82, 30.93],
            '蚌埠': [117.34, 32.93],
            '马鞍山': [118.48, 31.56],
            '安庆': [117.03, 30.52],
            '宿州': [116.97, 33.63],
            '宿县': [116.97, 33.63],
            '砀山': [116.34, 34.42],
            '萧县': [116.93, 34.19],
            '吴壁': [117.55, 33.55],
            '泗县': [117.89, 33.49],
            '五河': [117.87, 33.14],
            '固镇': [117.32, 33.33],
            '怀远': [117.19, 32.95],
            '滁州': [118.31, 32.33],
            '嘉山': [117.98, 32.78],
            '天长': [119, 32.68],
            '来安': [118.44, 32.44],
            '全椒': [118.27, 32.1],
            '定远': [117.68, 32.52],
            '凤阳': [117.4, 32.86],
            '巢湖': [117.87, 31.62],
            '巢县': [117.87, 31.62],
            '肥东': [117.47, 31.89],
            '含山': [118.11, 31.7],
            '和县': [118.37, 31.7],
            '无为': [117.75, 31.3],
            '卢江': [117.29, 31.23],
            '宣城': [118.73, 31.95],
            '当涂': [118.49, 31.55],
            '郎溪': [119.17, 31.14],
            '广德': [119.41, 30.89],
            '泾县': [118.41, 30.68],
            '南陵': [118.32, 30.91],
            '繁昌': [118.21, 31.07],
            '宁国': [118.95, 30.62],
            '青阳': [117.84, 30.64],
            '屯溪': [118.31, 29.72],
            '休宁': [118.19, 29.81],
            '旌得': [118.53, 30.28],
            '绩溪': [118.57, 30.07],
            '歙县': [118.44, 29.88],
            '祁门': [117.7, 29.86],
            '黟县': [117.92, 29.93],
            '太平': [118.13, 30.28],
            '石台': [117.48, 30.19],
            '桐城': [116.94, 31.04],
            '纵阳': [117.21, 30.69],
            '怀宁': [116.63, 30.41],
            '望江': [116.69, 30.12],
            '宿松': [116.13, 30.15],
            '太湖': [116.27, 30.42],
            '岳西': [116.36, 30.84],
            '潜山': [116.53, 30.62],
            '东至': [116.99, 30.08],
            '贵池': [117.48, 30.66],
            '六安': [116.49, 31.73],
            '霍丘': [116.27, 32.32],
            '寿县': [116.78, 32.57],
            '肥西': [117.15, 31.7],
            '舒城': [116.94, 31.45],
            '霍山': [116.32, 31.38],
            '金寨': [115.87, 31.67],
            '阜阳': [115.81, 32.89],
            '毫县': [116.76, 33.86],
            '涡阳': [116.21, 33.49],
            '蒙城': [116.55, 33.25],
            '利辛': [116.19, 33.12],
            '颖上': [116.26, 32.62],
            '阜南': [115.6, 32.63],
            '临泉': [115.24, 33.06],
            '界首': [115.34, 33.24],
            '太和': [115.61, 33.16],
            '南京': [118.78, 32.04],
            '江宁': [118.83, 31.95],
            '六合': [118.83, 32.36],
            '江浦': [118.62, 32.07],
            '徐州': [117.2, 34.26],
            '连云港': [119.16, 34.59],
            '南通': [120.86, 32.01],
            '苏州': [120.62, 31.32],
            '无锡': [120.29, 31.59],
            '常州': [119.95, 31.79],
            '丰县': [116.57, 34.79],
            '沛县': [116.93, 34.73],
            '赣榆': [119.11, 34.83],
            '东海': [118.75, 34.54],
            '新沂': [118.33, 34.38],
            '邳县': [117.97, 34.3],
            '睢宁': [117.94, 33.89],
            '铜山': [117.2, 34.26],
            /*  '清江': [119.02,33.59],*/
            '灌云': [119.23, 34.3],
            '灌南': [119.36, 34.09],
            '沭阳': [118.79, 34.12],
            '宿迁': [118.3, 33.96],
            '泗阳': [118.68, 33.73],
            '盱眙': [118.05, 33],
            '涟水': [119.26, 33.77],
            '淮阴': [119.02, 33.62],
            '淮安': [119.15, 33.5],
            '洪泽': [118.85, 33.28],
            '泗洪': [118.23, 33.46],
            '金湖': [119.02, 33.01],
            '盐城': [120.13, 33.38],
            '滨海': [119.84, 34.01],
            '阜宁': [119.79, 33.78],
            '射阳': [120.26, 33.77],
            '建湖': [119.77, 33.46],
            '响水': [119.56, 34.2],
            '大丰': [120.45, 33.19],
            '东台': [120.31, 32.84],
            '海安': [120.45, 32.57],
            '如皋': [120.56, 32.39],
            '如东': [121.18, 32.33],
            '启东': [121.66, 31.8],
            '海门': [121.15, 31.89],
            '扬州': [119.42, 32.39],
            '宝应': [119.32, 33.23],
            '兴化': [119.82, 32.93],
            '高邮': [119.45, 32.78],
            '泰兴': [120.02, 32.16],
            '泰县': [120.15, 32.51],
            '泰州': [119.9, 32.49],
            '靖江': [120.26, 32.03],
            '江都': [119.55, 32.43],
            '邗江': [119.42, 32.39],
            '仪征': [119.16, 32.27],
            '镇江': [119.44, 32.2],
            '丹徒': [119.44, 32.2],
            '扬中': [119.81, 32.24],
            '丹阳': [119.55, 32],
            '武进': [119.95, 31.78],
            '宜兴': [119.82, 31.36],
            '金坛': [119.56, 31.74],
            '溧阳': [119.48, 31.43],
            '句容': [119.16, 31.95],
            '溧水': [119.02, 31.65],
            '高淳': [118.87, 31.32],
            '江阴': [120.26, 31.91],
            '沙洲': [120.55, 31.86],
            '常熟': [120.74, 31.64],
            '太仓': [121.1, 31.45],
            '昆山': [120.95, 31.39],
            '吴县': [120.62, 31.32],
            '吴江': [120.63, 31.16]
        };
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/ipAddress').subscribe((req) => {
            function formtGCData(geoData, data, srcNam, dest) {
                const tGeoDt = [];
                if (dest) {
                    for (const i of data) {
                        if (srcNam !== i.name && geoData[i.name] !== undefined) {
                            tGeoDt.push({
                                coords: [geoData[srcNam], geoData[i.name]],
                                effect: {
                                    symbolSize: i.value / 2
                                }
                            });
                        }
                    }
                }
                else {
                    for (const i of data) {
                        if (srcNam !== i.name && geoData[i.name] !== undefined) {
                            tGeoDt.push({
                                coords: [geoData[i.name], geoData[srcNam]],
                                effect: {
                                    symbolSize: i.value / 2
                                }
                            });
                        }
                    }
                }
                return tGeoDt;
            }
            function formtVData(geoData, data, srcNam) {
                const tGeoDt = [];
                for (const i of data) {
                    const tNam = i.name;
                    if (srcNam !== tNam && geoData[tNam] !== undefined) {
                        let color;
                        let textSize = 8;
                        if (i.value > 5 && i.value <= 19) {
                            color = '#D2691E';
                            textSize = 10;
                        }
                        else if (i.value > 19) {
                            color = 'red';
                            textSize = 12;
                        }
                        tGeoDt.push({
                            name: tNam,
                            value: geoData[tNam],
                            symbolSize: i.value / 2,
                            warn: i.warn,
                            itemStyle: {
                                normal: {
                                    color: '#EEE685'
                                }
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        fontSize: 7,
                                        color: '#A52A2A' /*地理位置字体颜色*/
                                    }
                                }
                            }
                        });
                    }
                }
                tGeoDt.push({
                    name: srcNam,
                    value: geoData[srcNam],
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: '#F0FFFF',
                            borderColor: '#000'
                        }
                    }
                });
                return tGeoDt;
            }
            this.myChartMapOption.setOption({
                series: [{
                        data: formtGCData(geoCoordMap, req.data, '北京', true)
                    }, {
                        data: formtVData(geoCoordMap, req.data, '北京')
                    }
                ],
            });
            this.myChartMapOption.hideLoading();
        });
    }
    /*获取警告数据*/
    aletDistributeSet() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/threatNum').subscribe((req) => {
            if (req.data != null) {
                this.notHandleNum = req.data[0].notHandleNum;
                this.handledNum = req.data[0].handledNum;
                this.threatNum = req.data[0].threatNum;
            }
        });
    }
    /* 获取报文数据*/
    AaptureMessageSet() {
        this.myChartAapure = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.tooHard.nativeElement);
        this.myChartAapure.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '4%',
                right: '2%',
                bottom: '1%',
                containLabel: true
            },
            color: ['#1E90FF'],
            xAxis: {
                type: 'category',
                data: [],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#1E90FF',
                    }
                },
                axisLabel: {
                    color: '#1E90FF'
                }
            },
            yAxis: {
                name: '数量(万个)',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#1E90FF',
                    }
                }
            },
            series: [
                {
                    data: [],
                    type: 'bar',
                    barWidth: '50%',
                    areaStyle: { color: ['#1E90FF'] },
                },
            ],
        });
        let stime;
        stime = moment__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'days');
        const params = {
            time: stime._d.getTime(),
        };
        this.myChartAapure.showLoading();
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/packageNum', params).subscribe((req) => {
            if (req.data != null) {
                const yAaptureData = [];
                const xAaptureData = [];
                for (const i of req.data) {
                    yAaptureData.push(i.packageNum / 10000);
                    const day = moment__WEBPACK_IMPORTED_MODULE_3__(Number(i.time)).format('MM-DD HH:mm:ss');
                    xAaptureData.push(day);
                }
                this.myChartAapure.setOption({
                    xAxis: {
                        data: xAaptureData,
                    },
                    series: [
                        {
                            data: yAaptureData,
                        },
                    ],
                });
            }
            this.myChartAapure.hideLoading();
        });
    }
    /* 获取检测流量数据*/
    DetectFlowSet() {
        this.myChartFlow = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.FlowOption.nativeElement);
        this.myChartFlow.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '4%',
                right: '2%',
                bottom: '1%',
                containLabel: true
            },
            color: ['#33CCFF'],
            xAxis: {
                type: 'category',
                data: [],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#33CCFF',
                    }
                },
                axisLabel: {
                    color: '#33CCFF'
                },
            },
            yAxis: {
                name: '流量(M)',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#33CCFF',
                    }
                }
            },
            series: [
                {
                    data: [],
                    type: 'bar',
                    barWidth: '50%',
                    areaStyle: { color: ['#33CCFF'] },
                },
            ],
        });
        let stime;
        stime = moment__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'days');
        const params = {
            time: stime._d.getTime(),
        };
        this.myChartFlow.showLoading();
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/flowNum', params).subscribe((req) => {
            if (req.data != null) {
                const yDetectFlowData = [];
                const xDetectFlowData = [];
                for (const i of req.data) {
                    var num = i.flowNum / 1048576;
                    yDetectFlowData.push(num.toFixed(2));
                    const day = moment__WEBPACK_IMPORTED_MODULE_3__(Number(i.time)).format('MM-DD HH:mm:ss');
                    xDetectFlowData.push(day);
                }
                this.myChartFlow.setOption({
                    xAxis: {
                        data: xDetectFlowData,
                    },
                    series: [
                        {
                            data: yDetectFlowData,
                        },
                    ],
                });
            }
            this.myChartFlow.hideLoading();
        });
    }
    /*获取木马ip访问统计排名*/
    TopSelectSet() {
        this.myChartTriIPOption = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.TriIPTotal.nativeElement);
        this.myChartTriIPOption.setOption({
            title: {
                text: '木马IP统计'
            },
            color: ['#CD2626'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#CD2626',
                    }
                },
            },
            yAxis: {
                type: 'category',
                name: 'ip',
                data: [],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: '#CD2626'
                },
                axisLine: {
                    lineStyle: {
                        color: '#CD2626',
                    }
                },
            },
            series: [{
                    name: '访问次数',
                    data: [],
                    type: 'bar',
                }]
        });
        this.myChartTriIPOption.showLoading();
        const params = {
            n: 10,
        };
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/trojanIpCount', params).subscribe((req) => {
            if (req.data != null) {
                const xData = [];
                const yData = [];
                for (const i of req.data) {
                    yData.push(i.ip);
                    xData.push(i.countnumber);
                }
                this.myChartTriIPOption.setOption({
                    yAxis: {
                        data: yData.reverse(),
                    },
                    series: [{
                            data: xData.reverse(),
                        }]
                });
            }
            this.myChartTriIPOption.hideLoading();
        });
    }
    /* dnsIP 访问统计*/
    DnsTopSelectSet() {
        this.myChartDNSIPOption = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.DnsIPTotal.nativeElement);
        this.myChartDNSIPOption.setOption({
            title: {
                text: 'DNSIP统计'
            },
            color: ['#CD2626'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#CD2626',
                    }
                },
            },
            yAxis: {
                type: 'category',
                name: 'ip',
                data: [],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: '#CD2626'
                },
                axisLine: {
                    lineStyle: {
                        color: '#CD2626',
                    }
                },
            },
            series: [{
                    name: '访问次数',
                    data: [],
                    type: 'bar',
                }]
        });
        this.myChartDNSIPOption.showLoading();
        const params = {
            n: 10,
        };
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/dnsIpCount', params).subscribe((req) => {
            if (req.data != null) {
                const xData = [];
                const yData = [];
                for (const i of req.data) {
                    yData.push(i.ip);
                    xData.push(i.countnumber);
                }
                this.myChartDNSIPOption.setOption({
                    yAxis: {
                        data: yData.reverse(),
                    },
                    series: [{
                            data: xData.reverse(),
                        }]
                });
            }
            this.myChartDNSIPOption.hideLoading();
        });
    }
    /* 威胁等级饼图等级*/
    getDns() {
        this.myChartDnsOption = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.DnsBar.nativeElement);
        this.myChartDnsOption.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ["#66CD00", "#5CACEE", "#CDCD00", "#EE7942", "#CD3700"],
            legend: {
                orient: 'vertical',
                left: 'left',
                data: [],
            },
            series: [
                {
                    name: '危险等级',
                    type: 'pie',
                    center: ['55%', '53%'],
                    radius: ['0', '90'],
                    itemStyle: {
                        borderColor: '#04192b',
                        borderWidth: 1
                    },
                    data: [],
                }
            ]
        });
        this.myChartDnsOption.showLoading();
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/threatLevel').subscribe((req) => {
            if (req.data != null) {
                const xData = [];
                const yData = [];
                for (const i of req.data) {
                    xData.push(i.dangerLevel);
                    yData.push(i.number);
                }
                this.myChartDnsOption.setOption({
                    legend: {
                        data: ['可以忽略', '一般', '值得注意', '危险', '十分危险'],
                    },
                    series: [
                        {
                            data: [
                                { value: yData[0], name: '可以忽略' },
                                { value: yData[1], name: '一般' },
                                { value: yData[2], name: '值得注意' },
                                { value: yData[3], name: '危险' },
                                { value: yData[4], name: '十分危险' },
                            ],
                        }
                    ]
                });
            }
            this.myChartDnsOption.hideLoading();
        });
    }
    /*  威胁等级堆叠柱状图*/
    getThrenOption() {
        this.myChartThrenOption = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](this.ThrenOption.nativeElement);
        this.myChartThrenOption.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: [],
                textStyle: {
                    color: '#FF3030',
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#FF3030',
                        }
                    },
                    axisLabel: {
                        color: '#FF3030'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#FF3030',
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    name: '木马',
                    type: 'bar',
                    stack: '威胁',
                    data: [],
                    itemStyle: {
                        normal: { color: "#CD3700" },
                    }
                },
                {
                    name: 'DNS',
                    type: 'bar',
                    stack: '威胁',
                    data: [],
                    itemStyle: {
                        normal: { color: "#CDCD00" },
                    }
                },
            ]
        });
        this.myChartThrenOption.showLoading();
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].PUBLIC_URL + '/info/threatLevelNum').subscribe((req) => {
            if (req.data != null) {
                const xData = [];
                const yData1 = [];
                const yData2 = [];
                xData.push(req.data[0].type);
                for (const i of req.data) {
                    yData1.push(i.level[0]);
                    yData2.push(i.level[1]);
                }
                console.log(yData1[0]);
                console.log(yData2[0]);
                this.myChartThrenOption.setOption({
                    legend: {
                        data: ['木马', 'DNS'],
                    },
                    xAxis: [
                        {
                            data: ['可以忽略', '一般', '值得注意', '危险', '十分危险'],
                        }
                    ],
                    series: [
                        {
                            name: '木马',
                            type: 'bar',
                            stack: '威胁',
                            data: yData1[0],
                        },
                        {
                            name: 'DNS',
                            type: 'bar',
                            stack: '威胁',
                            data: yData2[0],
                        },
                    ]
                });
            }
            this.myChartThrenOption.hideLoading();
        });
    }
};
DashboardFirstComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tooHard', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardFirstComponent.prototype, "tooHard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FlowOption', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardFirstComponent.prototype, "FlowOption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TriIPTotal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardFirstComponent.prototype, "TriIPTotal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('DnsIPTotal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardFirstComponent.prototype, "DnsIPTotal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('DnsBar', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardFirstComponent.prototype, "DnsBar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ThrenOption', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardFirstComponent.prototype, "ThrenOption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MapChain', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardFirstComponent.prototype, "MapChain", void 0);
DashboardFirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-first',
        template: __webpack_require__(/*! raw-loader!./first.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/dashboard/first/first.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./first.component.less */ "./src/app/routes/dashboard/first/first.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]])
], DashboardFirstComponent);



/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.less":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-card-body {\n  position: relative;\n  margin-top: 80px;\n}\n:host ::ng-deep .avatar {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  margin-left: -20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvY2svRDovQlVQVC1Qcm9qZWN0L3NyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvY2svbG9jay5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvY2svbG9jay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREhBO0VBTUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9jay9sb2NrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmFudC1jYXJkLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG4gIC5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuYW50LWNhcmQtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.ts ***!
  \********************************************************/
/*! exports provided: UserLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLockComponent", function() { return UserLockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm2015/auth.js");






let UserLockComponent = class UserLockComponent {
    constructor(fb, tokenService, settings, router) {
        this.tokenService = tokenService;
        this.settings = settings;
        this.router = router;
        tokenService.clear();
        this.f = fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    submit() {
        // tslint:disable-next-line:forin
        for (const i in this.f.controls) {
            this.f.controls[i].markAsDirty();
            this.f.controls[i].updateValueAndValidity();
        }
        if (this.f.valid) {
            console.log('Valid!');
            console.log(this.f.value);
            this.tokenService.set({
                token: '123',
            });
            this.router.navigate(['dashboard']);
        }
    }
};
UserLockComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_5__["DA_SERVICE_TOKEN"],] }] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
UserLockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'passport-lock',
        template: __webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/passport/lock/lock.component.html"),
        styles: [__webpack_require__(/*! ./lock.component.less */ "./src/app/routes/passport/lock/lock.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_5__["DA_SERVICE_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], Object, _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], UserLockComponent);



/***/ }),

/***/ "./src/app/routes/passport/login/login.component.less":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  margin-bottom: 24px;\n  text-align: center;\n  border-bottom: 0;\n}\n:host ::ng-deep .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 34px;\n}\n:host ::ng-deep .icon {\n  margin-left: 16px;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n:host ::ng-deep .icon:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .other {\n  margin-top: 24px;\n  line-height: 22px;\n  text-align: left;\n}\n:host ::ng-deep .other nz-tooltip {\n  vertical-align: middle;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vRDovQlVQVC1Qcm9qZWN0L3NyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQ0Y3RjtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRElGO0FDUEE7RUFNTSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURJTjtBQ1pBO0VBV00sZUFBQTtFQUNBLGlCQUFBO0FESU47QUNoQkE7RUFlTSxrQkFBQTtBRElOO0FDbkJBO0VBa0JNLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtBRElOO0FDSE07RUFDRSxjQUFBO0FES1I7QUM5QkE7RUE2Qk0sZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FESU47QUNuQ0E7RUFpQ1Esc0JBQUE7QURLUjtBQ3RDQTtFQW9DUSxZQUFBO0FES1IiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicyAuYW50LXRhYnMtYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicy10YWIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiAzNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMxODkwZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLm90aGVyIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm90aGVyIG56LXRvb2x0aXAge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5vdGhlciAucmVnaXN0ZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iLCJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL3N0eWxlcy9kZWZhdWx0Jztcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIDo6bmctZGVlcCB7XG4gICAgLmFudC10YWJzIC5hbnQtdGFicy1iYXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMzRweDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAub3RoZXIge1xuICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG56LXRvb2x0aXAge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgLnJlZ2lzdGVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm2015/auth.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm2015/abc.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");









let UserLoginComponent = class UserLoginComponent {
    constructor(fb, modalSrv, router, settingsService, socialService, reuseTabService, tokenService, startupSrv, http, msg) {
        this.router = router;
        this.settingsService = settingsService;
        this.socialService = socialService;
        this.reuseTabService = reuseTabService;
        this.tokenService = tokenService;
        this.startupSrv = startupSrv;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remember: [true],
        });
        modalSrv.closeAll();
    }
    // #region fields
    get userName() {
        return this.form.controls.userName;
    }
    get password() {
        return this.form.controls.password;
    }
    get mobile() {
        return this.form.controls.mobile;
    }
    get captcha() {
        return this.form.controls.captcha;
    }
    // #endregion
    switch(ret) {
        this.type = ret.index;
    }
    getCaptcha() {
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(() => {
            this.count -= 1;
            if (this.count <= 0) {
                clearInterval(this.interval$);
            }
        }, 1000);
    }
    // #endregion
    submit() {
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.userName.updateValueAndValidity();
            this.password.markAsDirty();
            this.password.updateValueAndValidity();
            if (this.userName.invalid || this.password.invalid) {
                return;
            }
        }
        else {
            this.mobile.markAsDirty();
            this.mobile.updateValueAndValidity();
            this.captcha.markAsDirty();
            this.captcha.updateValueAndValidity();
            if (this.mobile.invalid || this.captcha.invalid) {
                return;
            }
        }
        // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
        // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
        this.http
            .post('/login/account?_allow_anonymous=true', {
            type: this.type,
            userName: this.userName.value,
            password: this.password.value,
        })
            .subscribe((res) => {
            if (res.msg !== 'ok') {
                this.error = res.msg;
                return;
            }
            // 清空路由复用信息
            this.reuseTabService.clear();
            // 设置用户Token信息
            this.tokenService.set(res.user);
            // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
            this.startupSrv.load().then(() => {
                let url = this.tokenService.referrer.url || '/';
                if (url.includes('/passport')) {
                    url = '/';
                }
                this.router.navigateByUrl(url);
            });
        });
    }
    /* submit() {
       this.error = '';
   /!*    this.userName.markAsDirty();
       this.password.markAsDirty();
       if (this.userName.invalid || this.password.invalid) {
         return;
       }*!/
       if (this.type === 0) {
         this.userName.markAsDirty();
         this.userName.updateValueAndValidity();
         this.password.markAsDirty();
         this.password.updateValueAndValidity();
         if (this.userName.invalid || this.password.invalid) {
           return;
         }
       } else {
         this.mobile.markAsDirty();
         this.mobile.updateValueAndValidity();
         this.captcha.markAsDirty();
         this.captcha.updateValueAndValidity();
         if (this.mobile.invalid || this.captcha.invalid) {
           return;
         }
       }
       console.log(this.userName.value);
       console.log(this.password.value);
       // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
       // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
       this.http
         .post('login/account?_allow_anonymous=true', {
           type: this.type,
           userName: this.userName.value,
           password: this.password.value,
         })
         .subscribe((res: any) => {
           if (res.msg !== 'ok') {
             console.log(res);
             this.error = res.msg;
             return;
            /!* console.log(this.startupSrv)*!/
            // debugger;
            //  this.router.navigate(['dashboard'])
            //  this.startupSrv.load().then(() => {
            //   /!* debugger;*!/
            //    // this.router.navigate(['/'])
            //  })
             /!*return;*!/
           }
           // 清空路由复用信息
           this.reuseTabService.clear();
           // 设置用户Token信息
           this.tokenService.set(res.user);
           // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
           this.startupSrv.load().then(() => {
             let url = this.tokenService.referrer!.url || '/';
             if (url.includes('/passport')) {
               url = '/';
             }
             this.router.navigateByUrl(url);
           });
         });
     }*/
    // #endregion
    ngOnDestroy() {
        if (this.interval$) {
            clearInterval(this.interval$);
        }
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] },
    { type: _delon_auth__WEBPACK_IMPORTED_MODULE_6__["SocialService"] },
    { type: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_delon_abc__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_6__["DA_SERVICE_TOKEN"],] }] },
    { type: _core__WEBPACK_IMPORTED_MODULE_8__["StartupService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_1__["_HttpClient"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }
];
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'passport-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/passport/login/login.component.html"),
        providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_6__["SocialService"]],
        styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/routes/passport/login/login.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_delon_abc__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_6__["DA_SERVICE_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
        _delon_auth__WEBPACK_IMPORTED_MODULE_6__["SocialService"],
        _delon_abc__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"], Object, _core__WEBPACK_IMPORTED_MODULE_8__["StartupService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_1__["_HttpClient"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
], UserLoginComponent);



/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserRegisterResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterResultComponent", function() { return UserRegisterResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserRegisterResultComponent = class UserRegisterResultComponent {
    constructor(route, msg) {
        this.msg = msg;
        this.params = { email: '' };
        this.email = '';
        this.params.email = this.email = route.snapshot.queryParams.email || 'ng-alain@example.com';
    }
};
UserRegisterResultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
UserRegisterResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'passport-register-result',
        template: __webpack_require__(/*! raw-loader!./register-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/passport/register-result/register-result.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
], UserRegisterResultComponent);



/***/ }),

/***/ "./src/app/routes/passport/register/register.component.less":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep h3 {\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 40px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #52c41a;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #faad14;\n}\n::ng-deep .register-password-cdk .error {\n  color: #f5222d;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvcmVnaXN0ZXIvRDovQlVQVC1Qcm9qZWN0L3NyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQ0Y3RjtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRElGO0FDUEE7RUFNTSxtQkFBQTtFQUNBLGVBQUE7QURJTjtBQ1hBO0VBVU0sVUFBQTtBRElOO0FDZEE7RUFhTSxZQUFBO0VBQ0EsaUJBQUE7QURJTjtBQ0FBOzs7RUFLTSw4QkFBQTtFQUFBLHNCQUFBO0FEQU47QUNMQTtFQVFNLGNBQUE7QURBTjtBQ1JBO0VBV00sY0FBQTtBREFOO0FDWEE7RUFjTSxjQUFBO0FEQU47QUNkQTtFQWtCUSx5QkFBQTtBRERSIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3VibWl0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAubG9naW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLnN1Y2Nlc3MsXG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAud2FybmluZyxcbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC5lcnJvciB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAuc3VjY2VzcyB7XG4gIGNvbG9yOiAjNTJjNDFhO1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLndhcm5pbmcge1xuICBjb2xvcjogI2ZhYWQxNDtcbn1cbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC5lcnJvciB7XG4gIGNvbG9yOiAjZjUyMjJkO1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLnByb2dyZXNzLXBhc3MgPiAucHJvZ3Jlc3MgLmFudC1wcm9ncmVzcy1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWFkMTQ7XG59XG4iLCJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL3N0eWxlcy9kZWZhdWx0Jztcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIDo6bmctZGVlcCB7XG4gICAgaDMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLnN1Ym1pdCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAubG9naW4ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbGluZS1oZWlnaHQ6IEBidG4taGVpZ2h0LWxnO1xuICAgIH1cbiAgfVxufVxuOjpuZy1kZWVwIHtcbiAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayB7XG4gICAgLnN1Y2Nlc3MsXG4gICAgLndhcm5pbmcsXG4gICAgLmVycm9yIHtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgfVxuICAgIC5zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcbiAgICB9XG4gICAgLndhcm5pbmcge1xuICAgICAgY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgIH1cbiAgICAuZXJyb3Ige1xuICAgICAgY29sb3I6IEBlcnJvci1jb2xvcjtcbiAgICB9XG4gICAgLnByb2dyZXNzLXBhc3MgPiAucHJvZ3Jlc3Mge1xuICAgICAgLmFudC1wcm9ncmVzcy1iZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");

var UserRegisterComponent_1;





let UserRegisterComponent = UserRegisterComponent_1 = class UserRegisterComponent {
    constructor(fb, router, http, msg) {
        this.router = router;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        this.visible = false;
        this.status = 'pool';
        this.progress = 0;
        this.passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            pool: 'exception',
        };
        // #endregion
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), UserRegisterComponent_1.checkPassword.bind(this)]],
            confirm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), UserRegisterComponent_1.passwordEquar]],
            mobilePrefix: ['+86'],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    // #region fields
    get mail() {
        return this.form.controls.mail;
    }
    get password() {
        return this.form.controls.password;
    }
    get confirm() {
        return this.form.controls.confirm;
    }
    get mobile() {
        return this.form.controls.mobile;
    }
    get captcha() {
        return this.form.controls.captcha;
    }
    static checkPassword(control) {
        if (!control)
            return null;
        const self = this;
        self.visible = !!control.value;
        if (control.value && control.value.length > 9) {
            self.status = 'ok';
        }
        else if (control.value && control.value.length > 5) {
            self.status = 'pass';
        }
        else {
            self.status = 'pool';
        }
        if (self.visible) {
            self.progress = control.value.length * 10 > 100 ? 100 : control.value.length * 10;
        }
    }
    static passwordEquar(control) {
        if (!control || !control.parent) {
            return null;
        }
        if (control.value !== control.parent.get('password').value) {
            return { equar: true };
        }
        return null;
    }
    getCaptcha() {
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(() => {
            this.count -= 1;
            if (this.count <= 0)
                clearInterval(this.interval$);
        }, 1000);
    }
    // #endregion
    submit() {
        this.error = '';
        Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].markAsDirty();
            this.form.controls[key].updateValueAndValidity();
        });
        if (this.form.invalid) {
            return;
        }
        const data = this.form.value;
        this.http.post('/register', data).subscribe(() => {
            this.router.navigateByUrl('/passport/register-result', {
                queryParams: { email: data.mail },
            });
        });
    }
    ngOnDestroy() {
        if (this.interval$)
            clearInterval(this.interval$);
    }
};
UserRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
UserRegisterComponent = UserRegisterComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'passport-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/passport/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/routes/passport/register/register.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
], UserRegisterComponent);



/***/ }),

/***/ "./src/app/routes/routes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoutingModule", function() { return RouteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layout_default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _layout_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/fullscreen/fullscreen.component */ "./src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
/* harmony import */ var _dashboard_first_first_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/first/first.component */ "./src/app/routes/dashboard/first/first.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");




// layout



// dashboard pages

/*import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';*/
// passport pages



// single pages


const routes = [
    {
        path: '',
        component: _layout_default_default_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
        /*    canActivate: [SimpleGuard],
            canActivateChild: [SimpleGuard],*/
        children: [
            { path: '', redirectTo: 'dashboard/first', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: 'dashboard/first', pathMatch: 'full' },
            { path: 'dashboard/first', component: _dashboard_first_first_component__WEBPACK_IMPORTED_MODULE_7__["DashboardFirstComponent"] },
            /*  { path: 'dashboard/analysis', component: DashboardAnalysisComponent },
              { path: 'dashboard/monitor', component: DashboardMonitorComponent },
              { path: 'dashboard/workplace', component: DashboardWorkplaceComponent },*/
            { path: 'horse', loadChildren: () => __webpack_require__.e(/*! import() | horse-horse-module */ "horse-horse-module").then(__webpack_require__.bind(null, /*! ./horse/horse.module */ "./src/app/routes/horse/horse.module.ts")).then(m => m.HorseModule) },
            { path: 'dns', loadChildren: () => __webpack_require__.e(/*! import() | dns-dns-module */ "dns-dns-module").then(__webpack_require__.bind(null, /*! ./dns/dns.module */ "./src/app/routes/dns/dns.module.ts")).then(m => m.DnsModule) },
            { path: 'extras', loadChildren: () => __webpack_require__.e(/*! import() | extras-extras-module */ "extras-extras-module").then(__webpack_require__.bind(null, /*! ./extras/extras.module */ "./src/app/routes/extras/extras.module.ts")).then(m => m.ExtrasModule) },
            // Exception
            { path: 'exception', loadChildren: () => __webpack_require__.e(/*! import() | exception-exception-module */ "exception-exception-module").then(__webpack_require__.bind(null, /*! ./exception/exception.module */ "./src/app/routes/exception/exception.module.ts")).then(m => m.ExceptionModule) },
        ],
    },
    // 全屏布局
    {
        path: 'data-v',
        component: _layout_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFullScreenComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | data-v-data-v-module */ "data-v-data-v-module").then(__webpack_require__.bind(null, /*! ./data-v/data-v.module */ "./src/app/routes/data-v/data-v.module.ts")).then(m => m.DataVModule) }],
    },
    // passport
    {
        path: 'passport',
        component: _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_6__["LayoutPassportComponent"],
        children: [
            {
                path: 'login',
                component: _passport_login_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
                data: { title: '登录', titleI18n: 'app.login.login' },
            },
            {
                path: 'register',
                component: _passport_register_register_component__WEBPACK_IMPORTED_MODULE_9__["UserRegisterComponent"],
                data: { title: '注册', titleI18n: 'app.register.register' },
            },
            {
                path: 'register-result',
                component: _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_10__["UserRegisterResultComponent"],
                data: { title: '注册结果', titleI18n: 'app.register.register' },
            },
            {
                path: 'lock',
                component: _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_12__["UserLockComponent"],
                data: { title: '锁屏', titleI18n: 'app.lock' },
            },
        ],
    },
    // 单页不包裹Layout
    { path: 'callback/:type', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"] },
    { path: '**', redirectTo: 'exception/404' },
];
let RouteRoutingModule = class RouteRoutingModule {
};
RouteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                useHash: _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useHash,
                // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
                // Pls refer to https://ng-alain.com/components/reuse-tab
                scrollPositionRestoration: 'top',
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RouteRoutingModule);



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/routes/routes-routing.module.ts");
/* harmony import */ var _dashboard_first_first_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/first/first.component */ "./src/app/routes/dashboard/first/first.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var angular_baidu_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-baidu-maps */ "./node_modules/angular-baidu-maps/fesm2015/angular-baidu-maps.js");




// dashboard pages

// passport pages



// single pages




const COMPONENTS = [
    _dashboard_first_first_component__WEBPACK_IMPORTED_MODULE_4__["DashboardFirstComponent"],
    // passport pages
    _passport_login_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
    _passport_register_register_component__WEBPACK_IMPORTED_MODULE_6__["UserRegisterComponent"],
    _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__["UserRegisterResultComponent"],
    // single pages
    _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__["UserLockComponent"],
    _callback_callback_component__WEBPACK_IMPORTED_MODULE_9__["CallbackComponent"],
];
const COMPONENTS_NOROUNT = [];
let RoutesModule = class RoutesModule {
};
RoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__["RouteRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"],
            angular_baidu_maps__WEBPACK_IMPORTED_MODULE_11__["AbmModule"].forRoot({
                apiKey: '' // app key为必选项
            })],
        declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
        entryComponents: COMPONENTS_NOROUNT,
    })
], RoutesModule);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_yuan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/yuan */ "./src/app/shared/utils/yuan.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return _utils_yuan__WEBPACK_IMPORTED_MODULE_0__["yuan"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });

// Components
// Utils

// Module



/***/ }),

/***/ "./src/app/shared/json-schema/json-schema.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/json-schema/json-schema.module.ts ***!
  \**********************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return SCHEMA_THIRDS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return JsonSchemaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm2015/form.js");




// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
const SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
let JsonSchemaModule = class JsonSchemaModule {
    constructor(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
};
JsonSchemaModule.ctorParameters = () => [
    { type: _delon_form__WEBPACK_IMPORTED_MODULE_3__["WidgetRegistry"] }
];
JsonSchemaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: SCHEMA_THIRDS_COMPONENTS,
        entryComponents: SCHEMA_THIRDS_COMPONENTS,
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _delon_form__WEBPACK_IMPORTED_MODULE_3__["DelonFormModule"].forRoot()],
        exports: [...SCHEMA_THIRDS_COMPONENTS],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_form__WEBPACK_IMPORTED_MODULE_3__["WidgetRegistry"]])
], JsonSchemaModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm2015/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/chart */ "./node_modules/@delon/chart/fesm2015/chart.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm2015/form.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
/* harmony import */ var ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ueditor */ "./node_modules/ngx-ueditor/fesm2015/ngx-ueditor.js");
/* harmony import */ var ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-tinymce */ "./node_modules/ngx-tinymce/fesm2015/ngx-tinymce.js");





// delon





// i18n

// #region third libs




const THIRDMODULES = [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_12__["CountdownModule"], ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__["UEditorModule"], ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__["NgxTinymceModule"]];
// #endregion
// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["AlainThemeModule"].forChild(),
            _delon_abc__WEBPACK_IMPORTED_MODULE_6__["DelonABCModule"],
            _delon_chart__WEBPACK_IMPORTED_MODULE_7__["DelonChartModule"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_8__["DelonACLModule"],
            _delon_form__WEBPACK_IMPORTED_MODULE_9__["DelonFormModule"],
            // third libs
            ...THIRDMODULES,
        ],
        declarations: [
            // your components
            ...COMPONENTS,
            ...DIRECTIVES,
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["AlainThemeModule"],
            _delon_abc__WEBPACK_IMPORTED_MODULE_6__["DelonABCModule"],
            _delon_chart__WEBPACK_IMPORTED_MODULE_7__["DelonChartModule"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_8__["DelonACLModule"],
            _delon_form__WEBPACK_IMPORTED_MODULE_9__["DelonFormModule"],
            // i18n
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
            // third libs
            ...THIRDMODULES,
            // your components
            ...COMPONENTS,
            ...DIRECTIVES,
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/utils/yuan.ts":
/*!**************************************!*\
  !*** ./src/app/shared/utils/yuan.ts ***!
  \**************************************/
/*! exports provided: yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return yuan; });
/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
// tslint:disable-next-line:no-any
function yuan(value, digits = 2) {
    if (typeof value === 'number') {
        value = value.toFixed(digits);
    }
    return `&yen ${value}`;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    PUBLIC_URL: 'http://10.3.200.130:8080',
    login_url: `http://10.3.200.130:8080/login`,
    SERVER_URL: `./`,
    production: false,
    useHash: true,
    hmr: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");



const hmrBootstrap = (module, bootstrap) => {
    let ngModule;
    module.hot.accept();
    bootstrap().then(mod => (ngModule = mod));
    module.hot.dispose(() => {
        const appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        const modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], null);
        if (modalService) {
            modalService.closeAll();
        }
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





Object(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["preloaderFinished"])();

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
const bootstrap = () => {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    })
        .then(res => {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        return res;
    });
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    // tslint:disable-next-line: no-string-literal
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "./src/style-icons-auto.ts":
/*!*********************************!*\
  !*** ./src/style-icons-auto.ts ***!
  \*********************************/
/*! exports provided: ICONS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return ICONS_AUTO; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/

const ICONS_AUTO = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AlipayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ApiOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ArrowDownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CloudOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CopyrightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CustomerServiceOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DatabaseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DingdingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DislikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ForkOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FrownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["HddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LaptopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PieChartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PrinterOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["RocketOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ScanOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShareAltOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SoundOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["StarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ToolOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TrophyOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UsbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["WeiboCircleOutline"]
];


/***/ }),

/***/ "./src/style-icons.ts":
/*!****************************!*\
  !*** ./src/style-icons.ts ***!
  \****************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
// Custom icon static resources

const ICONS = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["InfoOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BulbOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ProfileOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ExceptionOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LinkOutline"]];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BUPT-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map