webpackJsonp([22],{"2a3s":function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"",""])},"CH+q":function(t,e,s){"use strict";function a(t){s("u3HO")}Object.defineProperty(e,"__esModule",{value:!0});var r=s("Dd8w"),l=s.n(r),i=s("ZTLr"),n=s("QmSG"),o=s("NYxO"),c={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:n.pagesize,rowdata:{ticket_status:"1",action_user:localStorage.getItem("username")},STATUS_TEXT:{0:"未接收",1:"正在处理",2:"已完成",3:"搁置"},STATUS_TYPE:{0:"danger",1:"success",2:"info",3:"warning"},listQuery:{limit:n.LIMIT,offset:"",pid:"",ticket_status:"",create_user__username:"",action_user__username:"",search:"",ordering:""},workticketlist_btn_add:!1,workticketlist_btn_change_status:!1,btnstatus:!0,show_status:!1}},computed:l()({},Object(o.b)(["role","elements","username"])),created:function(){this.fetchData(),this.workticketlist_btn_add=this.elements["工单列表-新建工单按钮"],this.workticketlist_btn_change_status=this.elements["工单列表-更改工单状态按钮"]},methods:{fetchData:function(){var t=this;Object(i.f)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*n.LIMIT,this.fetchData()},changeStatus:function(){this.fetchData()},showMeCreate:function(){this.listQuery.create_user__username=localStorage.getItem("username"),this.listQuery.action_user__username="",this.fetchData()},showMeAction:function(){this.listQuery.action_user__username=localStorage.getItem("username"),this.listQuery.create_user__username="",this.fetchData()},showAllTicket:function(){this.listQuery.create_user__username="",this.listQuery.action_user__username="",this.listQuery.search="",this.listQuery.ticket_status="",this.fetchData()},handleSelectionChange:function(t){this.selectId=[];for(var e=0,s=t.length;e<s;e++)this.selectId.push(t[e].id);this.selectId.length>0?this.btnstatus=!1:this.btnstatus=!0},changeForm:function(){for(var t=this,e=0,s=this.selectId.length;e<s;e++)Object(i.g)(this.selectId[e],this.rowdata).then(function(s){delete t.selectId[e]});setTimeout(this.fetchData,2e3),this.show_status=!1},handleSortChange:function(t){"ascending"===t.order?this.listQuery.ordering=t.prop:"descending"===t.order?this.listQuery.ordering="-"+t.prop:this.listQuery.ordering="",this.fetchData()}}},u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[s("el-card",[s("div",{staticClass:"head-lavel"},[s("div",{staticClass:"table-button"},["super"===t.role||t.workticketlist_btn_add?s("router-link",{attrs:{to:"addworkticket"}},[s("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建工单")])],1):t._e(),t._v(" "),t.workticketlist_btn_change_status||"super"===t.role?s("el-button",{attrs:{type:"danger",disabled:t.btnstatus},on:{click:function(e){t.show_status=!0}}},[t._v("更改状态\n        ")]):t._e(),t._v(" "),s("el-button-group",[s("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:t.showAllTicket}},[t._v("全部")]),t._v(" "),s("el-button",{attrs:{type:"success",plain:"",size:"small"},on:{click:t.showMeCreate}},[t._v("我创建的工单")]),t._v(" "),s("el-button",{attrs:{type:"warning",plain:"",size:"small"},on:{click:t.showMeAction}},[t._v("我处理的工单")])],1),t._v(" "),s("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:t.changeStatus},model:{value:t.listQuery.ticket_status,callback:function(e){t.$set(t.listQuery,"ticket_status",e)},expression:"listQuery.ticket_status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return s("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),s("div",{staticClass:"table-search"},[s("el-input",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"工单发起人"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.create_user__username,callback:function(e){t.$set(t.listQuery,"create_user__username",e)},expression:"listQuery.create_user__username"}}),t._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单编号"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.pid,callback:function(e){t.$set(t.listQuery,"pid",e)},expression:"listQuery.pid"}}),t._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"工单标题、内容或类型"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}}),t._v(" "),s("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),s("div",[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange,"sort-change":t.handleSortChange}},[t.workticketlist_btn_change_status||"super"===t.role?s("el-table-column",{attrs:{type:"selection"}}):t._e(),t._v(" "),s("el-table-column",{attrs:{prop:"pid",label:"工单编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("router-link",{attrs:{to:"viewworkticket/"+e.row.pid}},[s("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(e.row.pid))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"标题"}}),t._v(" "),s("el-table-column",{attrs:{prop:"type",label:"工单类型"}}),t._v(" "),s("el-table-column",{attrs:{prop:"level",label:"工单等级",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[s("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:e.row.level,callback:function(s){t.$set(e.row,"level",s)},expression:"scope.row.level"}})],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"ticket_status",label:"工单状态",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[s("el-tag",{attrs:{type:t.STATUS_TYPE[e.row.ticket_status]}},[t._v("\n                "+t._s(t.STATUS_TEXT[e.row.ticket_status])+"\n              ")])],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"create_user",label:"工单创建人"}}),t._v(" "),s("el-table-column",{attrs:{prop:"create_time",label:"工单创建时间",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[s("span",[t._v(t._s(t._f("parseDate")(e.row.create_time)))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"update_time",label:"工单更新时间",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[s("span",[t._v(t._s(t._f("parseDate")(e.row.update_time)))])])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.username==e.row.create_user&&e.row.ticket_status<1?s("router-link",{attrs:{to:"editworkticket/"+e.row.pid}},[s("el-button",{attrs:{type:"success",size:"mini"}},[t._v("修改")])],1):t._e()]}}])})],1)],1),t._v(" "),s("div",{staticClass:"table-footer"},[s("div",{staticClass:"table-button"}),t._v(" "),s("div",{staticClass:"table-pagination"},[s("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])]),t._v(" "),s("el-dialog",{attrs:{title:"更改状态",visible:t.show_status},on:{"update:visible":function(e){t.show_status=e}}},[s("el-radio-group",{model:{value:t.rowdata.ticket_status,callback:function(e){t.$set(t.rowdata,"ticket_status",e)},expression:"rowdata.ticket_status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return s("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n      ")])})),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.show_status=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.changeForm}},[t._v("确 定")])],1)],1)],1)},_=[],h={render:u,staticRenderFns:_},d=h,p=s("VU/8"),f=a,b=p(c,d,!1,f,null,null);e.default=b.exports},u3HO:function(t,e,s){var a=s("2a3s");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("22d66a8b",a,!0)}});