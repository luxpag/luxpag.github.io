(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{219:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"api-direct-payment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-direct-payment"}},[t._v("#")]),t._v(" API Direct Payment")]),t._v(" "),a("h3",{attrs:{id:"request-base-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-base-url"}},[t._v("#")]),t._v(" Request Base URL")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  Test Environment : https://dev-gateway.luxpag.com\n  Prod Environment : https://gateway.luxpag.com\n")])])]),a("h3",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" EndPoints")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  /trade/pay\n")])])]),a("h3",{attrs:{id:"request-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-header"}},[t._v("#")]),t._v(" Request Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("recommend")]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",[t._v("Basic Base64(app_id:secret_key)")])])])]),t._v(" "),a("h3",{attrs:{id:"request-body-json-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body-json-format"}},[t._v("#")]),t._v(" Request Body (JSON format)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Max Length(or Default Value)")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("app_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[t._v("created app's id at dashboard")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),a("td",[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),t._v(" "),a("td",[t._v("ID given by the merchant in their system")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("method")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("order_currency")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",[t._v("BRL for brazil")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("order_amount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("decimal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.01 ~ 99999999999999.99")]),t._v(" "),a("td",[t._v("request payment amount")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("subject")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("128")]),t._v(" "),a("td",[t._v("payment reason or item title")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),a("td",[t._v("payment reason detail or item detail")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("notify_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("IPN URL to merchant")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("return_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("return to merchant URL at checkout page")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("buyer_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("merchant user's id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timeout_express")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90m")]),t._v(" "),a("td",[t._v("m(minutes), h(hours), d(days), c(always end in currency day)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("a",{attrs:{href:"tokenize"}},[t._v("credit card token")]),t._v("（CreditCard method only）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("issuer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("issuer of credit card（CreditCard method only）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bank")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("bank code（DepositExpress only）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("user's name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.email")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("user's email")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.phone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("user's mobile phone number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.identify.number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("user's ID number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("customer.identify.type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("user's ID type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.zip_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("zip code")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.state")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("state")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.city")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("city")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.street_number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("street1 number")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.street")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("street1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("address.neighborhood")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("street2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ip")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("user's IP address(required for CreditCard)")])])])]),t._v(" "),a("h3",{attrs:{id:"request-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sample"}},[t._v("#")]),t._v(" Request Sample")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location --request POST \'https://gateway.gemini-tiger.cn/trade/create\' \\\n--header \'Authorization: Basic Base64(appid:secret_key)\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "app_id": "app_id",\n    "content": "content",\n    "method": "Boleto",\n    "notify_url": "notify_url",\n    "order_amount": 10,\n    "order_currency": "BRL",\n    "out_trade_no": "{{$randomUUID}}",\n    "subject": "subject",\n    "timeout_express": "1h",\n    "timestamp": "{{datetime}}",\n    "customer": {\n      "email": "email"\n    },\n    "address": {\n      "zip_code": "zip_code"\n    }\n}\'\n')])])]),a("h3",{attrs:{id:"http-response-json-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-response-json-format"}},[t._v("#")]),t._v(" Http Response (JSON format)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return code")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return msg")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sub_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return sub code(only error)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sub_msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return sub msg(only error)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("request out_trade_no")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("Luxpag trade NO.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("trade_status")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"return-code-success"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-code-success"}},[t._v("#")]),t._v(" Return Code (Success)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "10000",\n    "msg": "Success",\n    "out_trade_no": "{out_trade_no}",\n    "trade_no": "{trade_no}",\n    "trade_status": "{trade_status}"\n}\n')])])]),a("h3",{attrs:{id:"return-code-fail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-code-fail"}},[t._v("#")]),t._v(" Return Code (Fail)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "40002",\n    "msg": "Business Failed",\n    "sub_code": "invalid-signature",\n    "sub_msg": "invalid signature"\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);