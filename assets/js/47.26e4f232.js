(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{247:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"api-direct-payment-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-direct-payment-access"}},[t._v("#")]),t._v(" API Direct Payment Access")]),t._v(" "),a("h2",{attrs:{id:"一、method：pse、efecty-past"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、method：pse、efecty-past"}},[t._v("#")]),t._v(" 一、Method：PSE、Efecty(Past)")]),t._v(" "),a("p",[t._v("New ways：After successful PSE or Efecty payment, you need to pay_url jump to Payty payment(Launch on March 27, 2023).")]),t._v(" "),a("p",[t._v("Past：After successful PSE or Efecty payment, you need to jump to Payty payment(The old version has been docked, and the new version is not supported). The detailed process is as follows:")]),t._v(" "),a("h3",{attrs:{id:"_1、payment-return-example-successful-："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、payment-return-example-successful-："}},[t._v("#")]),t._v(" 1、Payment return example (successful)：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('New return\n{\n    "code":"10000",\n    "msg":"Success",\n    "out_trade_no":"out_trade_no_1285925731034600",\n    "trade_no":"LP20230310035011408-YNdRcq",\n    "trade_status":"PROCESSING",\n    "pay_url":"https://secure.payty.com/t/8x8pk8gk"\n}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Past\n{\n    "code":"10000",\n    "msg":"Success",\n    "trade_no":"2022021402120600004",\n    "out_trade_no":"LP20220214021316563-5d0Wg6",\n    "web_url":"",\n    "pay_url":"https://secure.payty.com/vads-payment/",\n    "trade_status":"PROCESSING",\n    "form_date":{\n        "vads_payment_cards":"VISA;PSE",\n        "signature":"V64LLsvVZR+7UoKGxEKu0alqTvAVmh81+5vASLLECl0=",\n        "vads_trans_date":"20220214021206",\n        "vads_ctx_mode":"TEST",\n        "vads_action_mode":"INTERACTIVE",\n        "vads_page_action":"PAYMENT",\n        "vads_order_description":"luxpag test",\n        "vads_order_id":"2022021402120600004",\n        "vads_currency":"170",\n        "vads_version":"V2",\n        "vads_trans_id":"07hscj",\n        "vads_amount":100000,\n        "vads_payment_config":"SINGLE",\n        "vads_site_id":"10454805"\n    }\n}\n')])])]),a("h3",{attrs:{id:"_2、jump-payment-past-："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、jump-payment-past-："}},[t._v("#")]),t._v(" 2、Jump payment(Past)：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Stop\n<input type="button" id="button1" onclick="pay()" value="Test" />\n\n<script type="text/javascript">\n    function pay() {\n        var pay_url = "https://secure.payty.com/vads-payment/";\n        var form_date = {\n            "vads_payment_cards": "VISA;PSE",\n            "signature": "V64LLsvVZR+7UoKGxEKu0alqTvAVmh81+5vASLLECl0=",\n            "vads_trans_date": "20220214021206",\n            "vads_ctx_mode": "TEST",\n            "vads_action_mode": "INTERACTIVE",\n            "vads_page_action": "PAYMENT",\n            "vads_order_description": "luxpag test",\n            "vads_order_id": "2022021402120600004",\n            "vads_currency": "170",\n            "vads_version": "V2",\n            "vads_trans_id": "07hscj",\n            "vads_amount": 100000,\n            "vads_payment_config": "SINGLE",\n            "vads_site_id": "10454805"\n        }\n        \n        location.href = pay_url + "?" + Object.keys(form_date)?.map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(form_date[k])}`).join("&");\n    }\n<\/script>  \n')])])]),a("h2",{attrs:{id:"二、method：wallet-paypal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、method：wallet-paypal"}},[t._v("#")]),t._v(" 二、Method：Wallet - Paypal")]),t._v(" "),a("p",[t._v("Before placing an order, wallet Paypal needs to get a token from luxpag, and then get nonce from Paypal. The detailed process is as follows:")]),t._v(" "),a("h3",{attrs:{id:"_1、get-wallet-paypal-token-from-luxpag："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、get-wallet-paypal-token-from-luxpag："}},[t._v("#")]),t._v(" 1、Get wallet paypal token from luxpag：")]),t._v(" "),a("h4",{attrs:{id:"request-base-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-base-url"}},[t._v("#")]),t._v(" Request Base URL")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  测试环境 : https://dev-gateway.luxpag.com\n  正式环境 : https://gateway.luxpag.com\n")])])]),a("h4",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" EndPoints")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  /trade/get-paypal-client-token\n")])])]),a("h4",{attrs:{id:"request-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-header"}},[t._v("#")]),t._v(" Request Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("recommend")]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",[a("a",{attrs:{href:"../faq"}},[t._v("Basic Base64(app_id:secret_key)")])])])])]),t._v(" "),a("h4",{attrs:{id:"request-body-json-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body-json-format"}},[t._v("#")]),t._v(" Request Body (JSON format)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Max Length(or Default Value)")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("app_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[t._v("created app's id at dashboard")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),a("td",[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("region")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("a",{attrs:{href:"region-list"}},[t._v("region code")]),t._v(" When the app is Global, it must")])])])]),t._v(" "),a("h4",{attrs:{id:"request-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sample"}},[t._v("#")]),t._v(" Request Sample")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl --location --request POST 'https://gateway.luxpag.com/trade/get-paypal-client-token' \\\n--header 'Authorization: Basic Base64(appid:secret_key)' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"app_id\": \"app_id\",\n    \"timestamp\": \"{{datetime}}\",\n}'\n")])])]),a("h4",{attrs:{id:"http-response-json-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-response-json-format"}},[t._v("#")]),t._v(" Http Response (JSON format)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return code")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return msg")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("token")])])])]),t._v(" "),a("h4",{attrs:{id:"return-code-success"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-code-success"}},[t._v("#")]),t._v(" Return Code (Success)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "10000",\n    "msg": "Success",\n    "token": "{token}",\n}\n')])])]),a("h4",{attrs:{id:"_2、nonce-from-paypal-with-luxpag-wallet-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、nonce-from-paypal-with-luxpag-wallet-token"}},[t._v("#")]),t._v(" 2、nonce from paypal with luxpag wallet token:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var myDeviceData;\n// token:Luxpag token\nfunction payForward(token) {\n    braintree.client.create({\n        authorization:  token // Token you got from Luxpag server\n    }).then(function (clientInstance) {\n        return braintree.dataCollector.create({\n            client: clientInstance,\n        });\n    }).then(function (dataCollectorInstance) {\n        // At this point, you should access the dataCollectorInstance.deviceData value and provide it\n        // to your server, e.g. by injecting it into your form as a hidden input\n        myDeviceData = dataCollectorInstance.deviceData;\n        // Initialize your PayPal Checkout component here\n        return braintree.paypalCheckout.create(/* ... */);\n    });\n    // Create a client.\n    braintree.client.create({\n        authorization: token//Token you got from Luxpag server\n    }).then(function (clientInstance) {\n        // Create a PayPal Checkout component.\n        return braintree.paypalCheckout.create({\n            client: clientInstance\n        });\n    }).then(function (paypalCheckoutInstance) {\n        return paypalCheckoutInstance.loadPayPalSDK({\n            vault: true\n        });\n    }).then(function (paypalCheckoutInstance) {\n        return paypal.Buttons({\n            fundingSource: paypal.FUNDING.PAYPAL,\n            createBillingAgreement: function () {\n                return paypalCheckoutInstance.createPayment({\n                    flow: 'vault', // Required\n                });\n            },\n            style: {\n                shape: \"rect\",\n                height: 52,\n            },\n            onApprove: function (data, actions) {\n                return paypalCheckoutInstance.tokenizePayment(data).then(function (payload) {\n                    // Submit `payload.nonce` to your server\n                    // Submit Luxpag pay Interface and token = payload.nonce\n                });\n            },\n            onCancel: function (data) {\n                console.log('PayPal payment canceled', JSON.stringify(data, 0, 2));\n            },\n            onError: function (err) {\n                console.error('PayPal error', err);\n            }\n        }).render('#paypal-button');\n    }).then(function () {\n        // The PayPal button will be rendered in an html element with the ID\n        // `paypal-button`. This function will be called when the PayPal button\n        // is set up and ready to be used\n    }).catch(function (err) {\n        // Handle component creation error\n    });\n}\n")])])]),a("h3",{attrs:{id:"_3、api-direct-payment："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、api-direct-payment："}},[t._v("#")]),t._v(" 3、"),a("a",{attrs:{href:"/api-direct"}},[t._v("API Direct Payment")]),t._v("：")]),t._v(" "),a("p",[t._v("API Direct Payment。")]),t._v(" "),a("h3",{attrs:{id:"_4、test-account-with-luxpag-wallet。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、test-account-with-luxpag-wallet。"}},[t._v("#")]),t._v(" 4、Test account with luxpag Wallet。")]),t._v(" "),a("p",[t._v("Test user account.")]),t._v(" "),a("h3",{attrs:{id:"_5、sample。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、sample。"}},[t._v("#")]),t._v(" 5、Sample。")]),t._v(" "),a("p",[t._v("For reference only. It is recommended to seal the luxpag API on the server and the PayPal nonce on the client.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<script src="https://res.luxpag.com/lib/js/jquery-1.10.2.min.js"><\/script>\n<script src="https://js.braintreegateway.com/web/3.85.2/js/client.min.js"><\/script>\n<script src="https://js.braintreegateway.com/web/3.85.2/js/paypal-checkout.min.js"><\/script>\n<script src="https://js.braintreegateway.com/web/3.79.0/js/data-collector.min.js"><\/script>\n\n<div id="paypal-button"> </div>\n\n<script type="text/javascript">\n    $(document).ready(function () {\n    var param= \'{"app_id":"???????","timestamp":"2022-01-20 14:55:10"}\';\n    $.ajax({\n        type: "POST",\n        url: "https://dev-gateway.luxpag.com/trade/get-paypal-client-token",\n        headers: {\'Authorization\': \'Basic ???????\'},\n        cache: false,\n        dataType: "json",\n        contentType: "application/json",\n        data: param,\n        success: function (d) {\n            if (d.code == "10000" && d.token != null) {\n                payForward(d.token);\n            }\n        }\n    });\n});\n\nvar myDeviceData;\n// token:Luxpag token\nfunction payForward(token) {\n    braintree.client.create({\n        authorization:  token\n    }).then(function (clientInstance) {\n        return braintree.dataCollector.create({\n            client: clientInstance,\n        });\n    }).then(function (dataCollectorInstance) {\n        myDeviceData = dataCollectorInstance.deviceData;\n        return braintree.paypalCheckout.create(/* ... */);\n    });\n    braintree.client.create({\n        authorization: token\n    }).then(function (clientInstance) {\n        return braintree.paypalCheckout.create({\n            client: clientInstance\n        });\n    }).then(function (paypalCheckoutInstance) {\n        return paypalCheckoutInstance.loadPayPalSDK({\n            vault: true\n        });\n    }).then(function (paypalCheckoutInstance) {\n        return paypal.Buttons({\n            fundingSource: paypal.FUNDING.PAYPAL,\n            createBillingAgreement: function () {\n                return paypalCheckoutInstance.createPayment({\n                    flow: \'vault\', // Required\n                });\n            },\n            style: {\n                shape: "rect",\n                height: 52,\n            },\n            onApprove: function (data, actions) {\n                return paypalCheckoutInstance.tokenizePayment(data).then(function (payload) {\n                    // Submit `payload.nonce` to your server\n                    // Submit Luxpag pay Interface and token = payload.nonce\n                    pay(payload.nonce);\n                });\n            },\n            onCancel: function (data) {\n            },\n            onError: function (err) {\n            }\n        }).render(\'#paypal-button\');\n    }).then(function () {\n    }).catch(function (err) {\n    });\n}\nfunction pay(token){\n    var param = {};\n    param.token = token;\n\n    $.ajax({\n        type: "POST",\n        url: "https://dev-gateway.luxpag.com/trade/pay",\n        headers: {\'Authorization\': \'Basic ???????\'},\n        cache: false,\n        dataType: "json",\n        contentType: "application/json",\n        data: JSON.stringify(param),\n        success: function (d) {\n        }\n    });\n}\n<\/script>  \n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);