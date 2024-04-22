(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{213:function(t,e,a){"use strict";a.r(e);var _=a(0),i=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"直连接口下单并支付"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直连接口下单并支付"}},[t._v("#")]),t._v(" 直连接口下单并支付")]),t._v(" "),a("h3",{attrs:{id:"请求接口root地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求接口root地址"}},[t._v("#")]),t._v(" 请求接口ROOT地址")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  测试环境 : https://dev-gateway.luxpag.com\n  正式环境 : https://gateway.luxpag.com\n")])])]),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  /trade/pay\n")])])]),a("h3",{attrs:{id:"request-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-header"}},[t._v("#")]),t._v(" Request Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("推荐")]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",[a("a",{attrs:{href:"../faq"}},[t._v("Basic Base64(app_id:secret_key)")])])])])]),t._v(" "),a("h3",{attrs:{id:"请求参数（json格式）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数（json格式）"}},[t._v("#")]),t._v(" 请求参数（JSON格式）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("最大长度/默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("app_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[t._v("商户后台创建并获得")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),a("td",[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),t._v(" "),a("td",[t._v("商户订单号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("method")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[a("a",{attrs:{href:"method-list"}},[t._v("支付方式（CreditCard）")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("channel")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[t._v("小渠道选择（目前只有钱包可用，可指定具体钱包）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("order_currency")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",[a("a",{attrs:{href:"method-list"}},[t._v("币种：巴西（BRL）")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("order_amount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("decimal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.01 ~ 99999999999999.99")]),t._v(" "),a("td",[t._v("订单金额")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("128")]),t._v(" "),a("td",[t._v("订单标题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),a("td",[t._v("订单内容，Khipu必须按实际填写")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("notify_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),a("td",[t._v("回调地址,"),a("a",{attrs:{href:"ipn"}},[t._v("IPN通知")]),t._v("地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("return_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),a("td",[t._v("页面返回地址，部分渠道只支持https(Peru-Wallet)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("buyer_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("128")]),t._v(" "),a("td",[t._v("商户的用户ID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timeout_express")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90m")]),t._v(" "),a("td",[t._v("m(分), h(小时), d(日), c(当日UTC)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancellation_express")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Luxpag主动cancel时间：m(分), h(小时), d(日)，必须是整数，例：90m，必须大于 timeout_express，最大值为3天")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("a",{attrs:{href:"token"}},[t._v("信用卡token")]),t._v("（信用卡方式）,"),a("a",{attrs:{href:"success-direct"}},[t._v("Wallet Paypal token")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("issuer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("信用卡组织（信用卡方式）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bank")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("银行（DepositExpress方式必须:bradesco,caixa）(OpenFinance、Khipu、PSE部分渠道:需要调"),a("a",{attrs:{href:"bank-query"}},[t._v("获取银行接口")]),t._v(" bank_id)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("用户姓名(SPEI少于10个字符会被拒绝)，不能带表情字符(emoji),巴西不能有数字 ，(Pago46：非必须)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.email")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("用户邮箱（不支持‘+’号）（PIX：非必须）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.phone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("用户电话（Khipu、Pago46、OpenFinance、PIX：非必须）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.identify.number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("用户ID （Khipu、Pago46、CoDi、OXXO、SPEI、OXXOPay、CASH、BNCR（部分渠道）：非必须），需要校验"),a("a",{attrs:{href:"id-sdk"}},[t._v("ID格式")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.identify.type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("用户ID类型 （Khipu、Pago46、CoDi、OXXO、SPEI、OXXOPay、CASH、BNCR（部分渠道）：非必须）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.zip_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("邮编：Boleto和Lottery必须")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.state")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("区")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.city")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("城市")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.street_number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("街道1号码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.street")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("街道1，PSE部分渠道必须")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.neighborhood")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("街道2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ip")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("用户IP（信用卡方式必传）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("language_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("语言编码(Cash、BankTransfer:需要调"),a("a",{attrs:{href:"bank-query"}},[t._v("获取银行接口")]),t._v("，墨西哥Cash不需要)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("installments")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("a",{attrs:{href:"api-installments"}},[t._v("信用卡分期数")]),t._v("（默认1期）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("fingerprint")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("a",{attrs:{href:"token"}},[t._v("信用卡需要")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("account_number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10~18个数字")]),t._v(" "),a("td",[t._v("Wallet Todito 卡号必须 "),a("a",{attrs:{href:"test-data"}},[t._v("测试数据")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("account_verification_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4个数字")]),t._v(" "),a("td",[t._v("Wallet Todito PIN必须 "),a("a",{attrs:{href:"test-data"}},[t._v("测试数据")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("region")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("a",{attrs:{href:"region-list"}},[t._v("区域编码")]),t._v("，当 app 为 Global 时，该字段必须")])])])]),t._v(" "),a("h3",{attrs:{id:"请求样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求样例"}},[t._v("#")]),t._v(" 请求样例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location --request POST \'https://gateway.luxpag.com/trade/pay\' \\\n--header \'Authorization: Basic Base64(appid:secret_key)\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "app_id": "app_id",\n    "content": "content",\n    "method": "Boleto",\n    "notify_url": "notify_url",\n    "order_amount": 10,\n    "order_currency": "BRL",\n    "out_trade_no": "{{$randomUUID}}",\n    "subject": "subject",\n    "timeout_express": "1h",\n    "timestamp": "{{datetime}}",\n    "customer": {\n      "email": "email"\n    },\n    "address": {\n      "zip_code": "zip_code"\n    }\n}\'\n')])])]),a("h3",{attrs:{id:"响应（json格式）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应（json格式）"}},[t._v("#")]),t._v(" 响应（JSON格式）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("返回码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("返回消息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sub_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("子码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sub_msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("子消息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("商户订单号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("Luxpag创建的订单号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("trade_status")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("Luxpag创建的订单状态")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pay_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("下单成功地址；Luxpag 支付成功页面(支付成功后商户可跳转到该页面)，可支持的支付渠道：PIX、Boleto、DepositExpress、Lottery、OXXO、SPEI、Wallet-AME、PSE、Efecty；"),a("a",{attrs:{href:"success-direct"}},[t._v("PSE、Efecty")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("barcode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("Boleto条码；仅Boleto")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("qr_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("PIX二维码；仅PIX")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("provider_owner")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("银行信息； 仅DepositExpress")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("provider_owner_document")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("银行信息； 仅DepositExpress")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("provider_agency")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("银行信息； 仅DepositExpress")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("provider_number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("银行信息； 仅DepositExpress")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("wallet_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("钱包地址; AME：付款二维码地址，PicPay：付款地址，Todito、Paypal：无返回（根据卡号直接付款）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("app_link_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("AME手机版钱包地址（APP用）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bank_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("银行编码；仅Boleto")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bank_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("银行名称；仅SPEI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("reference")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("支付码；仅SPEI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("clabe")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("CLABE 银行编码；仅SPEI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("beneficiary_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("服务商；仅SPEI")])])])]),t._v(" "),a("h3",{attrs:{id:"返回样例（成功）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回样例（成功）"}},[t._v("#")]),t._v(" 返回样例（成功）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "10000",\n    "msg": "Success",\n    "out_trade_no": "{out_trade_no}",\n    "trade_no": "{trade_no}",\n    "trade_status": "{trade_status}",\n    "pay_url": "{pay_url}",\n    "barcode": "{barcode}",\n    "qr_code": "{qr_code}",\n    "provider_owner": "{provider_owner}",\n    "provider_owner_document": "{provider_owner_document}",\n    "provider_agency": "{provider_agency}",\n    "provider_number": "{provider_number}",\n    "wallet_url": "{wallet_url}",\n    "app_link_url": "{app_link_url}",\n    "luxpag_url": "{luxpag_url}"\n}\n')])])]),a("h3",{attrs:{id:"返回样例（失败）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回样例（失败）"}},[t._v("#")]),t._v(" 返回样例（失败）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "40002",\n    "msg": "Business Failed",\n    "sub_code": "invalid-signature",\n    "sub_msg": "invalid signature"\n}\n')])])]),a("h3",{attrs:{id:"返回状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回状态码"}},[t._v("#")]),t._v(" 返回状态码")]),t._v(" "),a("p",[t._v("创建订单时"),a("a",{attrs:{href:"error-list"}},[t._v("返回状态")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"完成样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成样例"}},[t._v("#")]),t._v(" 完成样例")]),t._v(" "),a("h4",{attrs:{id:"pix："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pix："}},[t._v("#")]),t._v(" PIX：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/PIX.png"),alt:"PIX"}}),t._v(" "),a("h4",{attrs:{id:"boleto："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boleto："}},[t._v("#")]),t._v(" Boleto：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Boleto.png"),alt:"Boleto"}}),t._v(" "),a("h4",{attrs:{id:"depositexpress："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depositexpress："}},[t._v("#")]),t._v(" DepositExpress：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/DepositExpress.png"),alt:"DepositExpress"}}),t._v(" "),a("h4",{attrs:{id:"oxxo："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oxxo："}},[t._v("#")]),t._v(" OXXO：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/OXXO.png"),alt:"OXXO"}}),t._v(" "),a("h4",{attrs:{id:"cash："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cash："}},[t._v("#")]),t._v(" Cash：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Cash.png"),alt:"Cash"}}),t._v(" "),a("h4",{attrs:{id:"spei："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spei："}},[t._v("#")]),t._v(" SPEI：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/SPEI.png"),alt:"SPEI"}}),t._v(" "),a("h4",{attrs:{id:"pse："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pse："}},[t._v("#")]),t._v(" PSE：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/PSE1.png"),alt:"PSE"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/PSE2.png"),alt:"PSE"}}),t._v(" "),a("h4",{attrs:{id:"efecty："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#efecty："}},[t._v("#")]),t._v(" Efecty：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/Efecty1.png"),alt:"Efecty"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/Efecty2.png"),alt:"Efecty"}})])}),[],!1,null,null,null);e.default=i.exports}}]);