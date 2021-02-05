(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{217:function(t,e,n){"use strict";n.r(e);var a=n(0),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ipn-notifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ipn-notifications"}},[t._v("#")]),t._v(" IPN Notifications")]),t._v(" "),n("p",[t._v("IPN (Instant Payment Notification) is a notification sent from one server to another through an HTTP POST request informing your transactions.")]),t._v(" "),n("p",[t._v("In order to receive notifications about the events in your platform, you have to previously configure the notification when you do the POST of the payment, indicating the URL in the field notify_url.")]),t._v(" "),n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),n("p",[t._v("Whenever an event occurs, we will send you a notification in json format using HTTP POST to the URL that you specified.")]),t._v(" "),n("p",[t._v("We will notify the following events:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("PROCESSING")]),t._v(" "),n("td",[t._v("trade processing(payment information submitted by the user)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("SUCCESS")]),t._v(" "),n("td",[t._v("trade succeeded")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("CANCEL")]),t._v(" "),n("td",[t._v("trade cancelled")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("RISK_CONTROLLING")]),t._v(" "),n("td",[t._v("trade in risk control")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("DISPUTE")]),t._v(" "),n("td",[t._v("dispute processing")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("REFUSED")]),t._v(" "),n("td",[t._v("trade refused")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("REFUNDED")]),t._v(" "),n("td",[t._v("refund occurred")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("CHARGEBACK")]),t._v(" "),n("td",[t._v("chargeback occurred")])])])]),t._v(" "),n("p",[t._v('Luxpag will send notifications with the following schedule of retries and confirmation awaiting times. You must return an HTTP STATUS 200 (OK) with reponse data "success" or "{"result":"success"}" before the corresponding time expires. If not, it will be assumed that you did not receive it correctly and you will be notified again.')]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Event")]),t._v(" "),n("th",[t._v("Time after the first dispatch")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Dispatch")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("1st retry")]),t._v(" "),n("td",[t._v("10 minutes")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("2nd retry")]),t._v(" "),n("td",[t._v("30 minutes")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("3rd retry")]),t._v(" "),n("td",[t._v("60 minutes")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("4th retry")]),t._v(" "),n("td",[t._v("120 minutes")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("5th retry")]),t._v(" "),n("td",[t._v("360 minutes")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("6th retry")]),t._v(" "),n("td",[t._v("840 minutes")])])])]),t._v(" "),n("p",[t._v("The notification sent has the following format:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Content-Type: application/json\nMethod: POST\nBody:\n  {\n  \t"amount":"",\n  \t"out_trade_no":"",\n  \t"method":"",\n  \t"trade_status":"",\n  \t"trade_no":"",\n  \t"currency":"",\n  \t"out_request_no":"",\n  \t"app_id":"",\n    "user":{\n      "identify":{\n        "number":"",\n        "type":""\n      },\n      "phone":"",\n      "email":""\n    },\n    "card":{\n      "card_no":"F6L4"\n    }\n  }\n')])])]),n("h3",{attrs:{id:"what-should-i-do-when-i-receive-a-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-should-i-do-when-i-receive-a-notification"}},[t._v("#")]),t._v(" What should I do when I receive a notification?")]),t._v(" "),n("p",[t._v('When you receive a notification on your platform, Luxpag waits for a response to validate that you received it correctly. For this, you must return an HTTP STATUS 200 (OK) with reponse data "success" or "{"result":"success"}".')]),t._v(" "),n("p",[t._v("It is recommended that you respond to the notification before executing business logic or prior to accessing external resources so as not to exceed the estimated response times.")]),t._v(" "),n("p",[t._v("This communication is exclusively between the servers of Luxpag and your server, so there will not be a physical user seeing any type of result.")]),t._v(" "),n("h3",{attrs:{id:"check-signature-optional"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-signature-optional"}},[t._v("#")]),t._v(" Check Signature(Optional)")]),t._v(" "),n("p",[t._v("Luxpag includes a signature in the Luxpag-Signature header of each event. You can verify the signature to enhance security.")]),t._v(" "),n("p",[t._v("We will use the merchant's private key to encrypt the callback payload with hmacSHA256.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  hmacSHA256(payload, secret_key);\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);