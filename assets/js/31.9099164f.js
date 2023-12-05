(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{231:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("h2",{attrs:{id:"how-to-set-the-value-of-authorization-in-the-request-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-the-value-of-authorization-in-the-request-header"}},[t._v("#")]),t._v(" How to set the value of Authorization in the Request Header?")]),t._v(" "),a("ol",[a("li",[t._v("Log in to the merchant dashboard")]),t._v(" "),a("li",[t._v("Find APP at APP Management, and check for detail")]),t._v(" "),a("li",[t._v("Get APP ID & Secret Key")]),t._v(" "),a("li",[t._v("contact APP ID & Secret Key with ':', get original string: str")]),t._v(" "),a("li",[t._v("Encode str with Base64, then get result: strEncoded")]),t._v(" "),a("li",[t._v("contact 'Basic ' before strEncoded and get result: authStr")]),t._v(" "),a("li",[t._v("put authStr as Authorization's value")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  APP ID : '1234567890'\n  Security Key : 'abcdefg'\n\n  str = '1234567890:abcdefg'\n  strEncoded = Base64(str)\n  // get result of strEncoded will be -> MTIzNDU2Nzg5MDphYmNkZWZn\n  authStr = 'Basic MTIzNDU2Nzg5MDphYmNkZWZn'\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  // Java\n  import org.springframework.util.Base64Utils\n\n  String appId = "1234567890";\n  String securityKey = "abcdefg";\n  String authStr = "Basic " + Base64Utils.encodeToString((appId + ":" + securityKey).getBytes());\n  authStr = \'Basic MTIzNDU2Nzg5MDphYmNkZWZn\';\n\n  // POST\n  Method: POST\n  Header:Content-Type: application/json\n  Header:Authorization: \'Basic MTIzNDU2Nzg5MDphYmNkZWZn\'\n\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);