(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\apis\\test.js"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/mongoose/dist/browser.umd.js":
/*!***************************************************!*\
  !*** ./node_modules/mongoose/dist/browser.umd.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=93)}([function(t,e,r){"use strict";e.arrayAtomicsSymbol=Symbol("mongoose#Array#_atomics"),e.arrayParentSymbol=Symbol("mongoose#Array#_parent"),e.arrayPathSymbol=Symbol("mongoose#Array#_path"),e.arraySchemaSymbol=Symbol("mongoose#Array#_schema"),e.documentArrayParent=Symbol("mongoose:documentArrayParent"),e.documentSchemaSymbol=Symbol("mongoose#Document#schema"),e.getSymbol=Symbol("mongoose#Document#get"),e.modelSymbol=Symbol("mongoose#Model"),e.objectIdSymbol=Symbol("mongoose#ObjectId"),e.populateModelSymbol=Symbol("mongoose.PopulateOptions#Model"),e.schemaTypeSymbol=Symbol("mongoose#schemaType"),e.validatorErrorSymbol=Symbol("mongoose:validatorError")},function(t,e,r){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=r(95),i=r(96),o=r(97);function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return c(this,t,e,r)}function c(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=h(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),i=(t=a(t,n)).write(e,r);i!==n&&(t=t.slice(0,i));return t}(t,e,r):function(t,e){if(u.isBuffer(e)){var r=0|p(e.length);return 0===(t=a(t,r)).length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||function(t){return t!=t}(e.length)?a(t,0):h(t,e);if("Buffer"===e.type&&o(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(l(e),t=a(t,e<0?0:0|p(e)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function h(t,e){var r=e.length<0?0:0|p(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function d(t,e){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return L(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(t).length;default:if(n)return L(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:_(t,e,r,n,i);if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):_(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function _(t,e,r,n,i){var o,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,r/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var l=-1;for(o=r;o<a;o++)if(c(t,o)===c(e,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*s}else-1!==l&&(o-=o-l),l=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){for(var f=!0,h=0;h<u;h++)if(c(t,o+h)!==c(e,h)){f=!1;break}if(f)return o}return-1}function m(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function g(t,e,r,n){return V(L(e,t.length-r),t,r,n)}function b(t,e,r,n){return V(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function w(t,e,r,n){return b(t,e,r,n)}function O(t,e,r,n){return V(U(e),t,r,n)}function S(t,e,r,n){return V(function(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function A(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function E(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,s,a,u,c=t[i],l=null,f=c>239?4:c>223?3:c>191?2:1;if(i+f<=r)switch(f){case 1:c<128&&(l=c);break;case 2:128==(192&(o=t[i+1]))&&(u=(31&c)<<6|63&o)>127&&(l=u);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(u=(15&c)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(l=u)}null===l?(l=65533,f=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),i+=f}return function(t){var e=t.length;if(e<=$)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=$));return r}(n)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,r){return c(null,t,e,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,r){return function(t,e,r,n){return l(e),e<=0?a(t,e):void 0!==r?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},u.allocUnsafe=function(t){return f(null,t)},u.allocUnsafeSlow=function(t){return f(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=u.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},u.byteLength=d,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?E(this,0,t):function(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return N(this,e,r);case"utf8":case"utf-8":return E(this,e,r);case"ascii":return j(this,e,r);case"latin1":case"binary":return x(this,e,r);case"base64":return A(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,r,n,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,s=r-e,a=Math.min(o,s),c=this.slice(n,i),l=t.slice(e,r),f=0;f<a;++f)if(c[f]!==l[f]){o=c[f],s=l[f];break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return m(this,t,e,r);case"utf8":case"utf-8":return g(this,t,e,r);case"ascii":return b(this,t,e,r);case"latin1":case"binary":return w(this,t,e,r);case"base64":return O(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;function j(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function x(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function N(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=I(t[o]);return i}function P(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function k(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function T(t,e,r,n,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function B(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function C(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function D(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function M(t,e,r,n,o){return o||D(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function R(t,e,r,n,o){return o||D(t,0,r,8),i.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=u.prototype;else{var i=e-t;r=new u(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},u.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},u.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},u.prototype.readUInt8=function(t,e){return e||k(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||k(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||k(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||k(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||k(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||k(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||k(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){e||k(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return e||k(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||k(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||k(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||k(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||k(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||k(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||T(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||T(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):B(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):B(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):C(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);T(this,t,e,r,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);T(this,t,e,r,i-1,-i)}var o=r-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):B(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):B(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):C(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||T(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):C(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,r){return M(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return M(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return R(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return R(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=u.isBuffer(t)?t:L(new u(t,n).toString()),a=s.length;for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};var F=/[^+\/0-9A-Za-z-_]/g;function I(t){return t<16?"0"+t.toString(16):t.toString(16)}function L(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function U(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(F,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}}).call(this,r(11))},function(t,e,r){"use strict";(function(t){
/*!
 * Module dependencies.
 */
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(111),o=r(44),s=r(62),a=r(45).Buffer,u=r(19),c=r(12),l=r(113),f=r(46),h=r(20),p=r(65),d=r(64),y=r(27),v=r(24),_=r(47),m=void 0;e.specialProperties=_,
/*!
 * Produces a collection name from model `name`. By default, just returns
 * the model name
 *
 * @param {String} name a model name
 * @param {Function} pluralize function that pluralizes the collection name
 * @return {String} a collection name
 * @api private
 */
e.toCollectionName=function(t,e){return"system.profile"===t?t:"system.indexes"===t?t:"function"==typeof e?e(t):t},
/*!
 * Determines if `a` and `b` are deep equal.
 *
 * Modified from node/lib/assert.js
 *
 * @param {any} a a value to compare to `b`
 * @param {any} b a value to compare to `a`
 * @return {Boolean}
 * @api private
 */
e.deepEqual=function t(r,i){if(r===i)return!0;if(r instanceof Date&&i instanceof Date)return r.getTime()===i.getTime();if(p(r,"ObjectID")&&p(i,"ObjectID")||p(r,"Decimal128")&&p(i,"Decimal128"))return r.toString()===i.toString();if(r instanceof RegExp&&i instanceof RegExp)return r.source===i.source&&r.ignoreCase===i.ignoreCase&&r.multiline===i.multiline&&r.global===i.global;if("object"!==(void 0===r?"undefined":n(r))&&"object"!==(void 0===i?"undefined":n(i)))return r==i;if(null===r||null===i||void 0===r||void 0===i)return!1;if(r.prototype!==i.prototype)return!1;if(r instanceof Number&&i instanceof Number)return r.valueOf()===i.valueOf();if(a.isBuffer(r))return e.buffer.areEqual(r,i);y(r)&&(r=r.toObject()),y(i)&&(i=i.toObject());var o=void 0,s=void 0,u=void 0,c=void 0;try{o=Object.keys(r),s=Object.keys(i)}catch(t){return!1}if(o.length!==s.length)return!1;for(o.sort(),s.sort(),c=o.length-1;c>=0;c--)if(o[c]!==s[c])return!1;for(c=o.length-1;c>=0;c--)if(!t(r[u=o[c]],i[u]))return!1;return!0},
/*!
 * Get the last element of an array
 */
e.last=function(t){if(t.length>0)return t[t.length-1]},e.clone=f,
/*!
 * ignore
 */
e.promiseOrCallback=v,
/*!
 * ignore
 */
e.omit=function(t,e){if(null==e)return Object.assign({},t);Array.isArray(e)||(e=[e]);var r=Object.assign({},t),n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){delete r[s.value]}}catch(t){i=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return r},
/*!
 * Shallow copies defaults into options.
 *
 * @param {Object} defaults
 * @param {Object} options
 * @return {Object} the merged object
 * @api private
 */
e.options=function(t,e){var r=Object.keys(t),n=r.length,i=void 0;for(e=e||{};n--;)(i=r[n])in e||(e[i]=t[i]);return e},
/*!
 * Generates a random string
 *
 * @api private
 */
e.random=function(){return Math.random().toString().substr(3)},
/*!
 * Merges `from` into `to` without overwriting existing properties.
 *
 * @param {Object} to
 * @param {Object} from
 * @api private
 */
e.merge=function t(r,n,i,o){i=i||{};var s=Object.keys(n),a=0,u=s.length,l=void 0;o=o||"";for(var f=i.omitNested||{};a<u;)if(l=s[a++],!(i.omit&&i.omit[l]||f[o]||_.has(l)))if(null==r[l])r[l]=n[l];else if(e.isObject(n[l])){if(e.isObject(r[l])||(r[l]={}),null!=n[l]){if(n[l].instanceOfSchema){r[l].instanceOfSchema?r[l].add(n[l].clone()):r[l]=n[l].clone();continue}if(n[l]instanceof c){r[l]=new c(n[l]);continue}}t(r[l],n[l],i,o?o+"."+l:l)}else i.overwrite&&(r[l]=n[l])},
/*!
 * Applies toObject recursively.
 *
 * @param {Document|Array|Object} obj
 * @return {Object}
 * @api private
 */
e.toObject=function t(n){m||(m=r(6));var i=void 0;if(null==n)return n;if(n instanceof m)return n.toObject();if(Array.isArray(n)){i=[];for(var o=0,s=n.length;o<s;++o)i.push(t(n[o]));return i}if(e.isPOJO(n)){for(var a in i={},n)_.has(a)||(i[a]=t(n[a]));return i}return n},e.isObject=h,
/*!
 * Determines if `arg` is a plain old JavaScript object (POJO). Specifically,
 * `arg` must be an object but not an instance of any special class, like String,
 * ObjectId, etc.
 *
 * `Object.getPrototypeOf()` is part of ES5: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
 *
 * @param {Object|Array|String|Function|RegExp|any} arg
 * @api private
 * @return {Boolean}
 */
e.isPOJO=function(t){if(null==t||"object"!==(void 0===t?"undefined":n(t)))return!1;var e=Object.getPrototypeOf(t);return!e||"Object"===e.constructor.name},
/*!
 * Determines if `obj` is a built-in object like an array, date, boolean,
 * etc.
 */
e.isNativeObject=function(t){return Array.isArray(t)||t instanceof Date||t instanceof Boolean||t instanceof Number||t instanceof String},
/*!
 * Determines if `val` is an object that has no own keys
 */
e.isEmptyObject=function(t){return null!=t&&"object"===(void 0===t?"undefined":n(t))&&0===Object.keys(t).length},
/*!
 * Search if `obj` or any POJOs nested underneath `obj` has a property named
 * `key`
 */
e.hasKey=function(t,r){var n=Object.keys(t),i=!0,o=!1,s=void 0;try{for(var a,u=n[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var c=a.value;if(c===r)return!0;if(e.isPOJO(t[c])&&e.hasKey(t[c],r))return!0}}catch(t){o=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}return!1},
/*!
 * A faster Array.prototype.slice.call(arguments) alternative
 * @api private
 */
e.args=s,
/*!
 * process.nextTick helper.
 *
 * Wraps `callback` in a try/catch + nextTick.
 *
 * node-mongodb-native has a habit of state corruption when an error is immediately thrown from within a collection callback.
 *
 * @param {Function} callback
 * @api private
 */
e.tick=function(e){if("function"==typeof e)return function(){try{e.apply(this,arguments)}catch(e){t.nextTick(function(){throw e})}}},
/*!
 * Returns true if `v` is an object that can be serialized as a primitive in
 * MongoDB
 */
e.isMongooseType=function(t){return t instanceof c||t instanceof u||t instanceof a},e.isMongooseObject=y,
/*!
 * Converts `expires` options of index objects to `expiresAfterSeconds` options for MongoDB.
 *
 * @param {Object} object
 * @api private
 */
e.expires=function(t){if(t&&"Object"===t.constructor.name&&"expires"in t){var e=void 0;e="string"!=typeof t.expires?t.expires:Math.round(i(t.expires)/1e3),t.expireAfterSeconds=e,delete t.expires}},
/*!
 * populate helper
 */
e.populate=function(t,r,i,o,s,a,u,c){var f=null;if(1===arguments.length){if(t instanceof l)return[t];if(Array.isArray(t))return function(t){var e=[];return t.forEach(function(t){/[\s]/.test(t.path)?t.path.split(" ").forEach(function(r){var n=Object.assign({},t);n.path=r,e.push(n)}):e.push(t)}),e}(t).map(function(t){return e.populate(t)[0]});f=e.isObject(t)?Object.assign({},t):{path:t}}else f="object"===(void 0===i?"undefined":n(i))?{path:t,select:r,match:i,options:o}:{path:t,select:r,model:i,match:o,options:s,populate:a,justOne:u,count:c};if("string"!=typeof f.path)throw new TypeError("utils.populate: invalid path. Expected string. Got typeof `"+(void 0===t?"undefined":n(t))+"`");return function(t){if(Array.isArray(t.populate)){var r=[];t.populate.forEach(function(t){if(/[\s]/.test(t.path)){var n=Object.assign({},t),i=n.path.split(" ");i.forEach(function(t){n.path=t,r.push(e.populate(n)[0])})}else r.push(e.populate(t)[0])}),t.populate=e.populate(r)}else null!=t.populate&&"object"===n(t.populate)&&(t.populate=e.populate(t.populate));var i=[],o=t.path.split(" ");null!=t.options&&(t.options=e.clone(t.options));for(var s=0;s<o.length;++s)i.push(new l(Object.assign({},t,{path:o[s]})));return i}
/*!
 * Return the value of `obj` at the given `path`.
 *
 * @param {String} path
 * @param {Object} obj
 */(f)},e.getValue=function(t,e,r){return o.get(t,e,"_doc",r)},
/*!
 * Sets the value of `obj` at the given `path`.
 *
 * @param {String} path
 * @param {Anything} val
 * @param {Object} obj
 */
e.setValue=function(t,e,r,n,i){o.set(t,e,r,"_doc",n,i)},
/*!
 * Returns an array of values from object `o`.
 *
 * @param {Object} o
 * @return {Array}
 * @private
 */
e.object={},e.object.vals=function(t){for(var e=Object.keys(t),r=e.length,n=[];r--;)n.push(t[e[r]]);return n},
/*!
 * @see exports.options
 */
e.object.shallowCopy=e.options;
/*!
 * Safer helper for hasOwnProperty checks
 *
 * @param {Object} obj
 * @param {String} prop
 */
var g=Object.prototype.hasOwnProperty;e.object.hasOwnProperty=function(t,e){return g.call(t,e)},
/*!
 * Determine if `val` is null or undefined
 *
 * @return {Boolean}
 */
e.isNullOrUndefined=function(t){return null===t||void 0===t},
/*!
 * ignore
 */
e.array={},
/*!
 * Flattens an array.
 *
 * [ 1, [ 2, 3, [4] ]] -> [1,2,3,4]
 *
 * @param {Array} arr
 * @param {Function} [filter] If passed, will be invoked with each item in the array. If `filter` returns a falsy value, the item will not be included in the results.
 * @return {Array}
 * @private
 */
e.array.flatten=function t(e,r,n){return n||(n=[]),e.forEach(function(e){Array.isArray(e)?t(e,r,n):r&&!r(e)||n.push(e)}),n};
/*!
 * ignore
 */
var b=Object.prototype.hasOwnProperty;e.hasUserDefinedProperty=function(t,r){if(null==t)return!1;if(Array.isArray(r)){var i=!0,o=!1,s=void 0;try{for(var a,u=r[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var c=a.value;if(e.hasUserDefinedProperty(t,c))return!0}}catch(t){o=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}return!1}if(b.call(t,r))return!0;if("object"===(void 0===t?"undefined":n(t))&&r in t){var l=t[r];return l!==Object.prototype[r]&&l!==Array.prototype[r]}return!1};
/*!
 * ignore
 */
var w=Math.pow(2,32)-1;e.isArrayIndex=function(t){return"number"==typeof t?t>=0&&t<=w:"string"==typeof t&&(!!/^\d+$/.test(t)&&((t=+t)>=0&&t<=w))},
/*!
 * Removes duplicate values from an array
 *
 * [1, 2, 3, 3, 5] => [1, 2, 3, 5]
 * [ ObjectId("550988ba0c19d57f697dc45e"), ObjectId("550988ba0c19d57f697dc45e") ]
 *    => [ObjectId("550988ba0c19d57f697dc45e")]
 *
 * @param {Array} arr
 * @return {Array}
 * @private
 */
e.array.unique=function(t){for(var e={},r={},n=[],i=t.length,o=0;o<i;++o)if("number"==typeof t[o]||"string"==typeof t[o]||null==t[o]){if(e[t[o]])continue;n.push(t[o]),e[t[o]]=!0}else if(t[o]instanceof c){if(r[t[o].toString()])continue;n.push(t[o]),r[t[o].toString()]=!0}else n.push(t[o]);return n},
/*!
 * Determines if two buffers are equal.
 *
 * @param {Buffer} a
 * @param {Object} b
 */
e.buffer={},e.buffer.areEqual=function(t,e){if(!a.isBuffer(t))return!1;if(!a.isBuffer(e))return!1;if(t.length!==e.length)return!1;for(var r=0,n=t.length;r<n;++r)if(t[r]!==e[r])return!1;return!0},e.getFunctionName=d,
/*!
 * Decorate buffers
 */
e.decorate=function(t,e){for(var r in e)_.has(r)||(t[r]=e[r])},e.mergeClone=function(t,r){y(r)&&(r=r.toObject({transform:!1,virtuals:!1,depopulate:!0,getters:!1,flattenDecimals:!1}));for(var n=Object.keys(r),i=n.length,o=0,s=void 0;o<i;)if(s=n[o++],!_.has(s))if(void 0===t[s])t[s]=e.clone(r[s],{transform:!1,virtuals:!1,depopulate:!0,getters:!1,flattenDecimals:!1});else{var u=r[s];if(null==u||!u.valueOf||u instanceof Date||(u=u.valueOf()),e.isObject(u)){var c=u;y(u)&&!u.isMongooseBuffer&&(c=c.toObject({transform:!1,virtuals:!1,depopulate:!0,getters:!1,flattenDecimals:!1})),u.isMongooseBuffer&&(c=a.from(c)),e.mergeClone(t[s],c)}else t[s]=e.clone(u,{flattenDecimals:!1})}},e.each=function(t,e){for(var r=0;r<t.length;++r)e(t[r])},
/*!
 * ignore
 */
e.getOption=function(t){var e=Array.prototype.slice.call(arguments,1),r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;if(null!=a[t])return a[t]}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return null},
/*!
 * ignore
 */
e.noop=function(){}}).call(this,r(8))},function(t,e,r){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},o=/%[sdj%]/g;e.format=function(t){if(!m(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(u(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,i=n.length,s=String(t).replace(o,function(t){if("%%"===t)return"%";if(r>=i)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),a=n[r];r<i;a=n[++r])v(a)||!w(a)?s+=" "+a:s+=" "+u(a);return s},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}};var s,a={};function u(t,r){var n={seen:[],stylize:l};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(r)?n.showHidden=r:r&&e._extend(n,r),g(n.showHidden)&&(n.showHidden=!1),g(n.depth)&&(n.depth=2),g(n.colors)&&(n.colors=!1),g(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),f(n,t,n.depth)}function c(t,e){var r=u.styles[e];return r?"["+u.colors[r][0]+"m"+t+"["+u.colors[r][1]+"m":t}function l(t,e){return t}function f(t,r,n){if(t.customInspect&&r&&A(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return m(i)||(i=f(t,i,n)),i}var o=function(t,e){if(g(e))return t.stylize("undefined","undefined");if(m(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(_(e))return t.stylize(""+e,"number");if(y(e))return t.stylize(""+e,"boolean");if(v(e))return t.stylize("null","null")}(t,r);if(o)return o;var s=Object.keys(r),a=function(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(r)),S(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return h(r);if(0===s.length){if(A(r)){var u=r.name?": "+r.name:"";return t.stylize("[Function"+u+"]","special")}if(b(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(O(r))return t.stylize(Date.prototype.toString.call(r),"date");if(S(r))return h(r)}var c,l="",w=!1,E=["{","}"];(d(r)&&(w=!0,E=["[","]"]),A(r))&&(l=" [Function"+(r.name?": "+r.name:"")+"]");return b(r)&&(l=" "+RegExp.prototype.toString.call(r)),O(r)&&(l=" "+Date.prototype.toUTCString.call(r)),S(r)&&(l=" "+h(r)),0!==s.length||w&&0!=r.length?n<0?b(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),c=w?function(t,e,r,n,i){for(var o=[],s=0,a=e.length;s<a;++s)x(e,String(s))?o.push(p(t,e,r,n,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(p(t,e,r,n,i,!0))}),o}(t,r,n,a,s):s.map(function(e){return p(t,r,n,a,e,w)}),t.seen.pop(),function(t,e,r){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(c,l,E)):E[0]+l+E[1]}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,r,n,i,o){var s,a,u;if((u=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?a=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(a=t.stylize("[Setter]","special")),x(n,i)||(s="["+i+"]"),a||(t.seen.indexOf(u.value)<0?(a=v(r)?f(t,u.value,null):f(t,u.value,r-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n")):a=t.stylize("[Circular]","special")),g(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function d(t){return Array.isArray(t)}function y(t){return"boolean"==typeof t}function v(t){return null===t}function _(t){return"number"==typeof t}function m(t){return"string"==typeof t}function g(t){return void 0===t}function b(t){return w(t)&&"[object RegExp]"===E(t)}function w(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t}function O(t){return w(t)&&"[object Date]"===E(t)}function S(t){return w(t)&&("[object Error]"===E(t)||t instanceof Error)}function A(t){return"function"==typeof t}function E(t){return Object.prototype.toString.call(t)}function $(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(g(s)&&(s=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!a[r])if(new RegExp("\\b"+r+"\\b","i").test(s)){var n=t.pid;a[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else a[r]=function(){};return a[r]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=y,e.isNull=v,e.isNullOrUndefined=function(t){return null==t},e.isNumber=_,e.isString=m,e.isSymbol=function(t){return"symbol"===(void 0===t?"undefined":n(t))},e.isUndefined=g,e.isRegExp=b,e.isObject=w,e.isDate=O,e.isError=S,e.isFunction=A,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"===(void 0===t?"undefined":n(t))||void 0===t},e.isBuffer=r(100);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[$(t.getHours()),$(t.getMinutes()),$(t.getSeconds())].join(":");return[t.getDate(),j[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=r(101),e._extend=function(t,e){if(!e||!w(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var N="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(N&&t[N]){var e;if("function"!=typeof(e=t[N]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,N,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise(function(t,n){e=t,r=n}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push(function(t,n){t?r(t):e(n)});try{t.apply(this,i)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),N&&Object.defineProperty(e,N,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,i(t))},e.promisify.custom=N,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return i.apply(o,arguments)};e.apply(this,r).then(function(e){t.nextTick(s,null,e)},function(e){t.nextTick(P,e,s)})}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,i(e)),r}}).call(this,r(8))},function(t,e,r){"use strict";var n=r(16);
/*!
 * Module exports.
 */t.exports=n,n.messages=r(125),n.Messages=n.messages,n.DocumentNotFoundError=r(126),n.CastError=r(13),n.ValidationError=r(29),n.ValidatorError=r(70),n.VersionError=r(127),n.ParallelSaveError=r(128),n.OverwriteModelError=r(129),n.MissingSchemaError=r(130),n.DivergentArrayError=r(131),n.StrictModeError=r(30)},function(t,e,r){"use strict";
/*!
 * Simplified lodash.get to work around the annoying null quirk. See:
 * https://github.com/lodash/lodash/issues/3659
 */function n(t,e){return null==t?t:t instanceof Map?t.get(e):t[e]}t.exports=function(t,e,r){var i=e.split("."),o=e,s=t,a=!0,u=!1,c=void 0;try{for(var l,f=i[Symbol.iterator]();!(a=(l=f.next()).done);a=!0){var h=l.value;if(null==s)return r;if(null!=s[o])return s[o];s=n(s,h),o=o.substr(h.length+1)}}catch(t){u=!0,c=t}finally{try{!a&&f.return&&f.return()}finally{if(u)throw c}}return null==s?r:s}},function(t,e,r){"use strict";(function(e,n){
/*!
 * Module dependencies.
 */
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r(18).EventEmitter,a=r(109),u=r(4),c=r(31),l=r(72),f=r(133),h=r(134),p=r(52),d=r(30),y=r(29),v=r(70),_=r(53),m=r(24),g=r(83),b=r(58).compile,w=r(58).defineKey,O=r(168).flatten,S=r(5),A=r(169),E=r(87),$=r(170),j=r(92),x=r(171),N=r(3).inspect,P=r(22).internalToObjectOptions,k=r(44),T=r(2),B=T.clone,C=T.deepEqual,D=T.isMongooseObject,M=r(0).arrayAtomicsSymbol,R=r(0).documentArrayParent,F=r(0).documentSchemaSymbol,I=r(0).getSymbol,L=r(0).populateModelSymbol,U=void 0,V=void 0,q=void 0,W=T.specialProperties;function H(t,e,r,n){var o=this;if("object"===(void 0===r?"undefined":i(r))&&null!=r&&(r=(n=r).skipId),n=n||{},null==this.schema){var u=T.isObject(e)&&!e.instanceOfSchema?new p(e):e;this.$__setSchema(u),e=r,r=n,n=arguments[4]||{}}if(this.$__=new a,this.$__.emitter=new s,this.isNew=!("isNew"in n)||n.isNew,this.errors=void 0,this.$__.$options=n||{},null!=t&&"object"!==(void 0===t?"undefined":i(t)))throw new f(t,"obj","Document");var c=this.schema;"boolean"==typeof e||"throw"===e?(this.$__.strictMode=e,e=void 0):(this.$__.strictMode=c.options.strict,this.$__.selected=e);for(var l=c.requiredPaths(!0),h=0;h<l.length;++h)this.$__.activePaths.require(l[h]);this.$__.emitter.setMaxListeners(0);var d=null;T.isPOJO(e)&&(d=x(e));var y=!1===d&&e?
/*!
 * ignore
 */
function(t){for(var e={},r=Object.keys(t),n=0;n<r.length;++n)for(var i=r[n].split("."),o=[],s=0;s<i.length;++s)o.push(i[s]),e[o.join(".")]=1;return e}
/*!
 * ignore
 */(e):{};if(null==this._doc&&(this.$__buildDoc(t,e,r,d,y,!1),z(this,e,r,d,y,!0,{isNew:this.isNew})),t&&(this.$__original_set?this.$__original_set(t,void 0,!0):this.$set(t,void 0,!0),t instanceof H&&(this.isNew=t.isNew)),n.willInit?s.prototype.once.call(this,"init",function(){z(o,e,r,d,y,!1,n.skipDefaults,o.isNew)}):z(this,e,r,d,y,!1,n.skipDefaults,this.isNew),this.$__._id=this._id,this.$locals={},this.$op=null,!this.$__.strictMode&&t){var v=this;Object.keys(this._doc).forEach(function(t){t in c.tree||w(t,null,v)})}!
/*!
 * Runs queued functions
 */
function(t){var e=t.schema&&t.schema.callQueue;if(!e.length)return;for(var r=void 0,n=0;n<e.length;++n)"pre"!==(r=e[n])[0]&&"post"!==r[0]&&"on"!==r[0]&&t[r[0]].apply(t,r[1])}
/*!
 * ignore
 */(this)}
/*!
 * Document exposes the NodeJS event emitter API, so you can use
 * `on`, `once`, etc.
 */for(var Y in T.each(["on","once","emit","listeners","removeListener","setMaxListeners","removeAllListeners","addListener"],function(t){H.prototype[t]=function(){return this.$__.emitter[t].apply(this.$__.emitter,arguments)}}),H.prototype.constructor=H,s.prototype)H[Y]=s.prototype[Y];function z(t,e,r,n,i,o,s){for(var a=Object.keys(t.schema.paths),u=a.length,c=0;c<u;++c){var l=void 0,f="",h=a[c];if("_id"!==h||!r)for(var p=t.schema.paths[h],d=-1===h.indexOf(".")?[h]:h.split("."),y=d.length,v=!1,_=t._doc,m=0;m<y&&null!=_;++m){var g=d[m];if(f+=(f.length?".":"")+g,!0===n){if(f in e)break}else if(!1===n&&e&&!v)if(f in e)v=!0;else if(!i[f])break;if(m===y-1){if(void 0!==_[g])break;if("function"==typeof p.defaultValue){if(!p.defaultValue.$runBeforeSetters&&o)break;if(p.defaultValue.$runBeforeSetters&&!o)break}else if(!o)continue;if(s&&s[f])break;if(e&&null!==n)if(!0===n){if(h in e)continue;void 0!==(l=p.getDefault(t,!1))&&(_[g]=l,t.$__.activePaths.default(h))}else v&&void 0!==(l=p.getDefault(t,!1))&&(_[g]=l,t.$__.activePaths.default(h));else void 0!==(l=p.getDefault(t,!1))&&(_[g]=l,t.$__.activePaths.default(h))}else _=_[g]}}}
/*!
 * ignore
 */
function K(t){var e={};!
/*!
 * ignore
 */
function(t){Object.keys(t.$__.activePaths.states.require).forEach(function(e){var r=t.schema.path(e);null!=r&&"function"==typeof r.originalRequiredValue&&(t.$__.cachedRequired[e]=r.originalRequiredValue.call(t))})}(t);var r=new Set(Object.keys(t.$__.activePaths.states.require).filter(function(e){return!(!t.isSelected(e)&&!t.isModified(e))&&(!(e in t.$__.cachedRequired)||t.$__.cachedRequired[e])}));function n(t){r.add(t)}Object.keys(t.$__.activePaths.states.init).forEach(n),Object.keys(t.$__.activePaths.states.modify).forEach(n),Object.keys(t.$__.activePaths.states.default).forEach(n);var i=t.$__getAllSubdocs(),o=t.modifiedPaths(),s=!0,a=!1,u=void 0;try{for(var c,l=i[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var f=c.value;if(f.$basePath){var h=!0,p=!1,d=void 0;try{for(var y,v=r[Symbol.iterator]();!(h=(y=v.next()).done);h=!0){var _=y.value;(null===_||_.startsWith(f.$basePath+"."))&&r.delete(_)}}catch(t){p=!0,d=t}finally{try{!h&&v.return&&v.return()}finally{if(p)throw d}}!t.isModified(f.$basePath,o)||t.isDirectModified(f.$basePath)||t.$isDefault(f.$basePath)||(r.add(f.$basePath),e[f.$basePath]=!0)}}}catch(t){a=!0,u=t}finally{try{!s&&l.return&&l.return()}finally{if(a)throw u}}var m=!0,g=!1,b=void 0;try{for(var w,A=r[Symbol.iterator]();!(m=(w=A.next()).done);m=!0){var E=w.value,$=t.schema.path(E);if($&&$.$isMongooseArray&&(!$.$isMongooseDocumentArray||S($,"schemaOptions.required")))j(t.$__getValue(E),r,E)}}catch(t){g=!0,b=t}finally{try{!m&&A.return&&A.return()}finally{if(g)throw b}}function j(t,e,r){if(null!=t)for(var n=t.length,i=0;i<n;++i)Array.isArray(t[i])?j(t[i],e,r+"."+i):e.add(r+"."+i)}var x={skipArrays:!0},N=!0,P=!1,k=void 0;try{for(var T,B=r[Symbol.iterator]();!(N=(T=B.next()).done);N=!0){var C=T.value;if(t.schema.nested[C]){var M=t.$__getValue(C);D(M)&&(M=M.toObject({transform:!1}));var R=O(M,C,x,t.schema);Object.keys(R).forEach(n)}}}catch(t){P=!0,k=t}finally{try{!N&&B.return&&B.return()}finally{if(P)throw k}}var F=!0,I=!1,L=void 0;try{for(var U,V=r[Symbol.iterator]();!(F=(U=V.next()).done);F=!0){var q=U.value;if(t.schema.singleNestedPaths.hasOwnProperty(q))r.delete(q);else{var W=t.schema.path(q);if(W&&W.$isSchemaMap){var H=t.$__getValue(q);if(null!=H){var Y=!0,z=!1,K=void 0;try{for(var Q,J=H.keys()[Symbol.iterator]();!(Y=(Q=J.next()).done);Y=!0){var G=Q.value;r.add(q+"."+G)}}catch(t){z=!0,K=t}finally{try{!Y&&J.return&&J.return()}finally{if(z)throw K}}}}}}}catch(t){I=!0,L=t}finally{try{!F&&V.return&&V.return()}finally{if(I)throw L}}return[r=Array.from(r),e]}
/*!
 * ignore
 */
/*!
 * ignore
 */
function Q(t,e){var r=new Set(e),n=new Map([]),i=!0,o=!1,s=void 0;try{for(var a,u=e[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var c=a.value;if(-1!==c.indexOf("."))for(var l=c.split("."),f=l[0],h=1;h<l.length;++h)n.set(f,c),f=f+"."+l[h]}}catch(t){o=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}var p=[],d=!0,y=!1,v=void 0;try{for(var _,m=t[Symbol.iterator]();!(d=(_=m.next()).done);d=!0){var g=_.value;r.has(g)?p.push(g):n.has(g)&&p.push(n.get(g))}}catch(t){y=!0,v=t}finally{try{!d&&m.return&&m.return()}finally{if(y)throw v}}return p}
/*!
 * Applies virtuals properties to `json`.
 */
function J(t,e,r,n){var i=t.schema,o=Object.keys(i.virtuals),s=o.length,a=s,u=void 0,c=void 0,l=t._doc,f=void 0,h=S(n,"aliases",!0);if(!l)return e;for(r=r||{},s=0;s<a;++s)if(u=o[s],h||!i.aliases.hasOwnProperty(u)){if(c=u,null!=r.path){if(!u.startsWith(r.path+"."))continue;c=u.substr(r.path.length+1)}var p=c.split(".");if(void 0!==(f=B(t.get(u),r))){var d=p.length;l=e;for(var y=0;y<d-1;++y)l[p[y]]=l[p[y]]||{},l=l[p[y]];l[p[d-1]]=f}}return e}
/*!
 * Applies virtuals properties to `json`.
 *
 * @param {Document} self
 * @param {Object} json
 * @return {Object} `json`
 */H.prototype.schema,Object.defineProperty(H.prototype,"$locals",{configurable:!1,enumerable:!1,writable:!0}),H.prototype.isNew,H.prototype.id,H.prototype.errors,H.prototype.$op,H.prototype.$__buildDoc=function(t,e,r,n,i){for(var o={},s=Object.keys(this.schema.paths).filter(function(t){return!t.includes("$*")}),a=s.length,u=0;u<a;++u){var c=s[u];if("_id"===c){if(r)continue;if(t&&"_id"in t)continue}for(var l=c.split("."),f=l.length,h=f-1,p="",d=o,y=!1,v=0;v<f;++v){var _=l[v];if(p+=(p.length?".":"")+_,!0===n){if(p in e)break}else if(!1===n&&e&&!y)if(p in e)y=!0;else if(!i[p])break;v<h&&(d=d[_]||(d[_]={}))}}this._doc=o},
/*!
 * Converts to POJO when you use the document for querying
 */
H.prototype.toBSON=function(){return this.toObject(P)},H.prototype.init=function(t,e,r){return"function"==typeof e&&(r=e,e=null),this.$__init(t,e),r&&r(null,this),this},
/*!
 * ignore
 */
H.prototype.$__init=function(t,e){if(this.isNew=!1,this.$init=!0,e=e||{},null!=t._id&&e.populated&&e.populated.length)for(var r=String(t._id),n=0;n<e.populated.length;++n){var i=e.populated[n];i.isVirtual?this.populated(i.path,T.getValue(i.path,t),i):this.populated(i.path,i._docs[r],i)}
/*!
 * Init helper.
 *
 * @param {Object} self document instance
 * @param {Object} obj raw mongodb doc
 * @param {Object} doc object we are initializing
 * @api private
 */
return function t(e,r,n,i,o){o=o||"";var s=Object.keys(r);var a=s.length;var u=void 0;var c=void 0;var l=void 0;var f=0;for(;f<a;)h(f++);function h(a){if(l=s[a],c=o+l,u=e.schema.path(c),!e.schema.$isRootDiscriminator||e.isSelected(c))if(!u&&T.isPOJO(r[l]))n[l]||(n[l]={}),t(e,r[l],n[l],i,c+".");else if(u){if(null===r[l])n[l]=null;else if(void 0!==r[l]){var f=r[l].$__||{},h=f.wasPopulated||null;if(u&&!h)try{n[l]=u.cast(r[l],e,!0)}catch(t){e.invalidate(t.path,new v({path:t.path,message:t.message,type:"cast",value:t.value}))}else n[l]=r[l]}e.isModified(c)||e.$__.activePaths.init(c)}else n[l]=r[l]}}(this,t,this._doc,e),
/*!
 * If populating a path within a document array, make sure each
 * subdoc within the array knows its subpaths are populated.
 *
 * ####Example:
 *     const doc = await Article.findOne().populate('comments.author');
 *     doc.comments[0].populated('author'); // Should be set
 */
function(t,e){if(null==t._id||null==e||0===e.length)return;var r=String(t._id),n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var u=s.value;if(!u.isVirtual)for(var c=u.path,l=c.split("."),f=0;f<l.length-1;++f){var h=l.slice(0,f+1).join("."),p=l.slice(f+1).join("."),d=t.get(h);if(null!=d&&d.isMongooseDocumentArray){for(var y=0;y<d.length;++y)d[y].populated(p,null==u._docs[r]?[]:u._docs[r][y],u);break}}}}catch(t){i=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}}(this,e.populated),this.emit("init",this),this.constructor.emit("init",this),this.$__._id=this._id,this},H.prototype.update=function(){var t=T.args(arguments);t.unshift({_id:this._id});var e=this.constructor.update.apply(this.constructor,t);return null!=this.$session()&&("session"in e.options||(e.options.session=this.$session())),e},H.prototype.updateOne=function(t,e,r){var n=this,i=this.constructor.updateOne({_id:this._id},t,e);return i._pre(function(t){n.constructor._middleware.execPre("updateOne",n,[n],t)}),i._post(function(t){n.constructor._middleware.execPost("updateOne",n,[n],{},t)}),null!=this.$session()&&("session"in i.options||(i.options.session=this.$session())),null!=r?i.exec(r):i},H.prototype.replaceOne=function(){var t=T.args(arguments);return t.unshift({_id:this._id}),this.constructor.replaceOne.apply(this.constructor,t)},H.prototype.$session=function(t){if(0===arguments.length)return this.$__.session;if(this.$__.session=t,!this.ownerDocument){var e=this.$__getAllSubdocs(),r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){o.value.$session(t)}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}}return t},H.prototype.overwrite=function(t){var e=Array.from(new Set(Object.keys(this._doc).concat(Object.keys(t)))),r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;"_id"!==a&&(this.schema.options.versionKey&&a===this.schema.options.versionKey||this.schema.options.discriminatorKey&&a===this.schema.options.discriminatorKey||this.$set(a,t[a]))}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return this},H.prototype.$set=function(t,e,r,n){var s=this;T.isPOJO(r)&&(n=r,r=void 0);var a=(n=n||{}).merge,f=r&&!0!==r,h=!0===r,p=void 0,y=0,v=void 0,_=void 0,m=void 0,b="strict"in n?n.strict:this.$__.strictMode;if(f&&((this.$__.adhocPaths||(this.$__.adhocPaths={}))[t]=this.schema.interpretAsType(t,r,this.schema.options)),"string"!=typeof t){if(t instanceof H&&(t=t.$__isNested?t.toObject():t._doc),null!=t){m=e?e+".":"";var w=(p=Object.keys(t)).length,O=S(n,"_skipMinimizeTopLevel",!1);if(0===w&&(!this.schema.options.minimize||O))return delete n._skipMinimizeTopLevel,e&&this.$set(e,{}),this;for(;y<w;)j.call(this,y++);return this}var $=t;t=e,e=$}else this.$__.$setCalled.add(t);function j(e){_=p[e];var o=m+_;if(v=this.schema.pathType(o),!0!==r||m||null==t[_]||"nested"!==v||null==this._doc[_]||0!==Object.keys(this._doc[_]).length||(delete this._doc[_],n=Object.assign({},n,{_skipMinimizeTopLevel:!0})),"object"!==i(t[_])||T.isNativeObject(t[_])||T.isMongooseType(t[_])||null==t[_]||"virtual"===v||"real"===v||this.$__path(o)instanceof c||this.schema.paths[o]&&this.schema.paths[o].options&&this.schema.paths[o].options.ref)if(b){if(h&&void 0===t[_]&&void 0!==this.get(_))return;if("adhocOrUndefined"===v&&(v=A(this,o,{typeOnly:!0})),"real"===v||"virtual"===v){var s=t[_];this.schema.paths[o]&&this.schema.paths[o].$isSingleNested&&t[_]instanceof H&&(s=s.toObject({virtuals:!1,transform:!1})),this.$set(m+_,s,h,n)}else if("nested"===v&&t[_]instanceof H)this.$set(m+_,t[_].toObject({transform:!1}),h,n);else if("throw"===b)throw"nested"===v?new l(_,t[_]):new d(_)}else void 0!==t[_]&&this.$set(m+_,t[_],h,n);else this.$__.$setCalled.add(m+_),this.$set(t[_],m+_,h,n)}var x=this.schema.pathType(t);if("adhocOrUndefined"===x&&(x=A(this,t,{typeOnly:!0})),e=E(e),"nested"===x&&e){if("object"===(void 0===e?"undefined":i(e))&&null!=e){if(a)return this.$set(e,t,h);this.$__setValue(t,null),g(this,t);var N=Object.keys(e);this.$__setValue(t,{});var P=!0,B=!1,C=void 0;try{for(var D,M=N[Symbol.iterator]();!(P=(D=M.next()).done);P=!0){var R=D.value;this.$set(t+"."+R,e[R],h)}}catch(t){B=!0,C=t}finally{try{!P&&M.return&&M.return()}finally{if(B)throw C}}return this.markModified(t),g(this,t,{skipDocArrays:!0}),this}return this.invalidate(t,new u.CastError("Object",e,t)),this}var F=void 0,I=-1===t.indexOf(".")?[t]:t.split(".");if("string"==typeof this.schema.aliases[I[0]]&&(I[0]=this.schema.aliases[I[0]]),"adhocOrUndefined"===x&&b){var U=void 0;for(y=0;y<I.length;++y){var V=I.slice(0,y+1).join(".");if(y+1<I.length&&"virtual"===this.schema.pathType(V))return k.set(t,e,this),this;if(null!=(F=this.schema.path(V))&&F instanceof c){U=!0;break}}if(null==F&&(F=A(this,t)),!U&&!F){if("throw"===b)throw new d(t);return this}}else{if("virtual"===x)return(F=this.schema.virtualpath(t)).applySetters(e,this),this;F=this.$__path(t)}var q=this._doc,W="";for(y=0;y<I.length-1;++y)q=q[I[y]],W+=(W.length>0?".":"")+I[y],q||(this.$set(W,{}),this.isSelected(W)||this.unmarkModified(W),q=this.$__getValue(W));var Y=void 0;if(I.length<=1)Y=t;else{for(y=0;y<I.length;++y){var z=I.slice(0,y+1).join(".");if(null===this.get(z,null,{getters:!1})){Y=z;break}}Y||(Y=t)}var K=null!=s.$__.$options.priorDoc?s.$__.$options.priorDoc.$__getValue(t):h?void 0:s.$__getValue(t);if(!F)return this.$__set(Y,t,h,I,F,e,K),this;if(F.$isSingleNested&&null!=e&&a){e instanceof H&&(e=e.toObject({virtuals:!1,transform:!1}));var Q=Object.keys(e),J=!0,G=!1,X=void 0;try{for(var Z,tt=Q[Symbol.iterator]();!(J=(Z=tt.next()).done);J=!0){var et=Z.value;this.$set(t+"."+et,e[et],h,n)}}catch(t){G=!0,X=t}finally{try{!J&&tt.return&&tt.return()}finally{if(G)throw X}}return this}var rt=!0;try{var nt=function(){if(null==F.options)return!1;if(!(e instanceof H))return!1;var t=e.constructor,r=F.options.ref;if(null!=r&&(r===t.modelName||r===t.baseModelName))return!0;var n=F.options.refPath;if(null==n)return!1;var i=e.get(n);return i===t.modelName||i===t.baseModelName}(),it=!1;nt&&e instanceof H&&(this.populated(t,e._id,o({},L,e.constructor)),it=!0);var ot=void 0;if(F.options&&Array.isArray(F.options[this.schema.options.typeKey])&&F.options[this.schema.options.typeKey].length&&F.options[this.schema.options.typeKey][0].ref&&
/*!
 * ignore
 */
function(t,e){if(!Array.isArray(t))return!1;if(0===t.length)return!1;var r=!0,n=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;if(!(a instanceof H))return!1;var u=a.constructor.modelName;if(null==u)return!1;if(a.constructor.modelName!=e&&a.constructor.baseModelName!=e)return!1}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return!0}(e,F.options[this.schema.options.typeKey][0].ref)&&(this.ownerDocument?(ot=o({},L,e[0].constructor),this.ownerDocument().populated(this.$__fullPath(t),e.map(function(t){return t._id}),ot)):(ot=o({},L,e[0].constructor),this.populated(t,e.map(function(t){return t._id}),ot)),it=!0),null==this.schema.singleNestedPaths[t]&&(e=F.applySetters(e,this,!1,K)),F.$isMongooseDocumentArray&&Array.isArray(e)&&e.length>0&&null!=e[0]&&null!=e[0].$__&&null!=e[0].$__.populated){var st=Object.keys(e[0].$__.populated),at=!0,ut=!1,ct=void 0;try{for(var lt,ft=function(){var r=lt.value;s.populated(t+"."+r,e.map(function(t){return t.populated(r)}),e[0].$__.populated[r].options)},ht=st[Symbol.iterator]();!(at=(lt=ht.next()).done);at=!0)ft()}catch(t){ut=!0,ct=t}finally{try{!at&&ht.return&&ht.return()}finally{if(ut)throw ct}}it=!0}if(!it&&this.$__.populated){if(Array.isArray(e)&&this.$__.populated[t])for(var pt=0;pt<e.length;++pt)e[pt]instanceof H&&(e[pt]=e[pt]._id);delete this.$__.populated[t]}this.$markValid(t)}catch(r){r instanceof u.StrictModeError&&r.isImmutableError?this.invalidate(t,r):this.invalidate(t,new u.CastError(F.instance,e,t,r)),rt=!1}return rt&&this.$__set(Y,t,h,I,F,e,K),F.$isSingleNested&&(this.isDirectModified(t)||null==e)&&g(this,t),this},H.prototype.set=H.prototype.$set,H.prototype.$__shouldModify=function(t,e,r,n,i,o,s){return!!this.isNew||null==this.schema.singleNestedPaths[e]&&(void 0===o&&!this.isSelected(e)||!(void 0===o&&e in this.$__.activePaths.states.default)&&(!(this.populated(e)&&o instanceof H&&C(o._id,s))&&(!C(o,s||this.get(e))||!!(!r&&null!==o&&void 0!==o&&e in this.$__.activePaths.states.default&&C(o,i.getDefault(this,r))))))},H.prototype.$__set=function(t,e,n,i,o,s,a){q=q||r(25);var u=this;this.$__shouldModify(t,e,n,i,o,s,a)&&(this.markModified(t),V||(V=r(81)),s&&s.isMongooseArray&&(s._registerAtomic("$set",s),s.isMongooseDocumentArray&&s.forEach(function(t){t&&t.__parentArray&&(t.__parentArray=s)}),this.$__.activePaths.forEach(function(t){t.startsWith(e+".")&&u.$__.activePaths.ignore(t)})));for(var c=this._doc,l=0,f=i.length,h="";l<f;l++){var p=l+1===f;if(h+=h?"."+i[l]:i[l],W.has(i[l]))return;p?c instanceof Map?c.set(i[l],s):c[i[l]]=s:T.isPOJO(c[i[l]])?c=c[i[l]]:c[i[l]]&&c[i[l]]instanceof q?c=c[i[l]]:c[i[l]]&&c[i[l]].$isSingleNested?c=c[i[l]]:c[i[l]]&&Array.isArray(c[i[l]])?c=c[i[l]]:(c[i[l]]=c[i[l]]||{},c=c[i[l]])}},H.prototype.$__getValue=function(t){return T.getValue(t,this._doc)},H.prototype.$__setValue=function(t,e){return T.setValue(t,e,this._doc),this},H.prototype.get=function(t,e,r){var n=void 0;r=r||{},e&&(n=this.schema.interpretAsType(t,e,this.schema.options));var i=this.$__path(t);if(null==i&&(i=this.schema.virtualpath(t)),i instanceof c){var o=this.schema.virtualpath(t);null!=o&&(i=o)}var s=t.split("."),a=this._doc;if(i instanceof _){if(0===i.getters.length)return;return i.applyGetters(null,this)}"string"==typeof this.schema.aliases[s[0]]&&(s[0]=this.schema.aliases[s[0]]);for(var u=0,l=s.length;u<l;u++)a&&a._doc&&(a=a._doc),a=null==a?void 0:a instanceof Map?a.get(s[u],{getters:!1}):u===l-1?T.getValue(s[u],a):a[s[u]];if(n&&(a=n.cast(a)),null!=i&&!1!==r.getters)a=i.applyGetters(a,this);else if(this.schema.nested[t]&&r.virtuals)return J(this,T.clone(a)||{},{path:t});return a},
/*!
 * ignore
 */
H.prototype[I]=H.prototype.get,H.prototype.$__path=function(t){var e=this.$__.adhocPaths,r=e&&e.hasOwnProperty(t)?e[t]:null;return r||this.schema.path(t)},H.prototype.markModified=function(t,e){this.$__.activePaths.modify(t),null==e||this.ownerDocument||(this.$__.pathsToScopes[t]=e)},H.prototype.unmarkModified=function(t){this.$__.activePaths.init(t),delete this.$__.pathsToScopes[t]},H.prototype.$ignore=function(t){this.$__.activePaths.ignore(t)},H.prototype.directModifiedPaths=function(){return Object.keys(this.$__.activePaths.states.modify)},H.prototype.$isEmpty=function(t){var e={minimize:!0,virtuals:!1,getters:!1,transform:!1};if(arguments.length>0){var r=this.get(t);return null==r||"object"===(void 0===r?"undefined":i(r))&&(T.isPOJO(r)?function t(e){if(null==e)return!0;if("object"!==(void 0===e?"undefined":i(e))||Array.isArray(e))return!1;var r=!0;var n=!1;var o=void 0;try{for(var s,a=Object.keys(e)[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var u=s.value;if(!t(e[u]))return!1}}catch(t){n=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}return!0}(r):0===Object.keys(r.toObject(e)).length)}return 0===Object.keys(this.toObject(e)).length},H.prototype.modifiedPaths=function(t){t=t||{};var e=this;return Object.keys(this.$__.activePaths.states.modify).reduce(function(r,n){var o=n.split(".");if(r=r.concat(o.reduce(function(t,e,r){return t.concat(o.slice(0,r).concat(e).join("."))},[]).filter(function(t){return-1===r.indexOf(t)})),!t.includeChildren)return r;var s=e.get(n);if(null!=s&&"object"===(void 0===s?"undefined":i(s)))if(s._doc&&(s=s._doc),Array.isArray(s)){for(var a=s.length,u=0;u<a;++u)if(-1===r.indexOf(n+"."+u)&&(r.push(n+"."+u),null!=s[u]&&s[u].$__)){var c=s[u].modifiedPaths(),l=!0,f=!1,h=void 0;try{for(var p,d=c[Symbol.iterator]();!(l=(p=d.next()).done);l=!0){var y=p.value;r.push(n+"."+u+"."+y)}}catch(t){f=!0,h=t}finally{try{!l&&d.return&&d.return()}finally{if(f)throw h}}}}else Object.keys(s).filter(function(t){return-1===r.indexOf(n+"."+t)}).forEach(function(t){r.push(n+"."+t)});return r},[])},H.prototype.isModified=function(t,e){if(t){Array.isArray(t)||(t=t.split(" "));var r=e||this.modifiedPaths(),n=Object.keys(this.$__.activePaths.states.modify);return t.some(function(t){return!!~r.indexOf(t)})||t.some(function(t){return n.some(function(e){return e===t||t.startsWith(e+".")})})}return this.$__.activePaths.some("modify")},H.prototype.$isDefault=function(t){return t in this.$__.activePaths.states.default},H.prototype.$isDeleted=function(t){return 0===arguments.length?!!this.$__.isDeleted:(this.$__.isDeleted=!!t,this)},H.prototype.isDirectModified=function(t){return t in this.$__.activePaths.states.modify},H.prototype.isInit=function(t){return t in this.$__.activePaths.states.init},H.prototype.isSelected=function(t){if(this.$__.selected){if("_id"===t)return 0!==this.$__.selected._id;var e=Object.keys(this.$__.selected),r=e.length,n=null,i=void 0;if(1===r&&"_id"===e[0])return 0===this.$__.selected._id;for(;r--;)if("_id"!==(i=e[r])&&j(this.$__.selected[i])){n=!!this.$__.selected[i];break}if(null===n)return!0;if(t in this.$__.selected)return n;r=e.length;for(var o=t+".";r--;)if("_id"!==(i=e[r])){if(i.startsWith(o))return n||i!==o;if(o.startsWith(i+"."))return n}return!n}return!0},H.prototype.isDirectSelected=function(t){if(this.$__.selected){if("_id"===t)return 0!==this.$__.selected._id;var e=Object.keys(this.$__.selected),r=e.length,n=null,i=void 0;if(1===r&&"_id"===e[0])return 0===this.$__.selected._id;for(;r--;)if("_id"!==(i=e[r])&&j(this.$__.selected[i])){n=!!this.$__.selected[i];break}return null===n||(t in this.$__.selected?n:!n)}return!0},H.prototype.validate=function(t,e,r){var n=this,i=void 0;return this.$op="validate",null!=this.ownerDocument||(this.$__.validating?i=new h(this,{parentStack:e&&e.parentStack,conflictStack:this.$__.validating.stack}):this.$__.validating=new h(this,{parentStack:e&&e.parentStack})),"function"==typeof t?(r=t,e=null,t=null):"function"==typeof e&&(r=e,e=t,t=null),m(r,function(r){if(null!=i)return r(i);n.$__validate(t,e,function(t){n.$op=null,r(t)})},this.constructor.events)},H.prototype.$__validate=function(t,r,n){var o=this;"function"==typeof t?(n=t,r=null,t=null):"function"==typeof r&&(n=r,r=null);var s=r&&"object"===(void 0===r?"undefined":i(r))&&"validateModifiedOnly"in r,a=void 0;a=s?!!r.validateModifiedOnly:this.schema.options.validateModifiedOnly;var c=this,l=function(){var t=o.$__.validationError;if(o.$__.validationError=void 0,a&&null!=t){var e=Object.keys(t.errors),r=!0,n=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var f=s.value;o.isModified(f)||delete t.errors[f]}}catch(t){n=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw i}}0===Object.keys(t.errors).length&&(t=void 0)}if(o.$__.cachedRequired={},o.emit("validate",c),o.constructor.emit("validate",c),o.$__.validating=null,t){for(var h in t.errors)!o[R]&&t.errors[h]instanceof u.CastError&&o.invalidate(h,t.errors[h]);return t}},f=K(this),h=a?f[0].filter(function(t){return o.isModified(t)}):f[0],p=f[1];if(Array.isArray(t)&&(h=Q(h,t)),0===h.length)return e.nextTick(function(){var t=l();if(t)return c.schema.s.hooks.execPost("validate:error",c,[c],{error:t},function(t){n(t)});n(null,c)});for(var d={},v=0,_=function(){var t=l();if(t)return c.schema.s.hooks.execPost("validate:error",c,[c],{error:t},function(t){n(t)});n(null,c)},m=function(t){null==t||d[t]||(d[t]=!0,v++,e.nextTick(function(){var e=c.schema.path(t);if(!e)return--v||_();if(c.$isValid(t)){var r=c.$__getValue(t),n=void 0;null==r&&(n=c.populated(t))&&(r=n);var i=t in c.$__.pathsToScopes?c.$__.pathsToScopes[t]:c,o={skipSchemaValidators:p[t],path:t};e.doValidate(r,function(r){if(r&&(!e.$isMongooseDocumentArray||r.$isArrayValidatorError)){if(e.$isSingleNested&&r instanceof y&&!1===e.schema.options.storeSubdocValidationError)return--v||_();c.invalidate(t,r,void 0,!0)}--v||_()},i,o)}else--v||_()}))},g=h.length,b=0;b<g;++b)m(h[b])},H.prototype.validateSync=function(t,e){var r=this,n=this,o=void 0;o=e&&"object"===(void 0===e?"undefined":i(e))&&"validateModifiedOnly"in e?!!e.validateModifiedOnly:this.schema.options.validateModifiedOnly,"string"==typeof t&&(t=t.split(" "));var s=K(this),a=o?s[0].filter(function(t){return r.isModified(t)}):s[0],c=s[1];Array.isArray(t)&&(a=Q(a,t));var l={};a.forEach(function(t){if(!l[t]){l[t]=!0;var e=n.schema.path(t);if(e&&n.$isValid(t)){var r=n.$__getValue(t),i=e.doValidateSync(r,n,{skipSchemaValidators:c[t],path:t});if(i&&(!e.$isMongooseDocumentArray||i.$isArrayValidatorError)){if(e.$isSingleNested&&i instanceof y&&!1===e.schema.options.storeSubdocValidationError)return;n.invalidate(t,i,void 0,!0)}}}});var f=n.$__.validationError;if(n.$__.validationError=void 0,n.emit("validate",n),n.constructor.emit("validate",n),f)for(var h in f.errors)f.errors[h]instanceof u.CastError&&n.invalidate(h,f.errors[h]);return f},H.prototype.invalidate=function(t,e,r,n){if(this.$__.validationError||(this.$__.validationError=new y(this)),!this.$__.validationError.errors[t])return e&&"string"!=typeof e||(e=new v({path:t,message:e,type:n||"user defined",value:r})),this.$__.validationError===e?this.$__.validationError:(this.$__.validationError.addError(t,e),this.$__.validationError)},H.prototype.$markValid=function(t){this.$__.validationError&&this.$__.validationError.errors[t]&&(delete this.$__.validationError.errors[t],0===Object.keys(this.$__.validationError.errors).length&&(this.$__.validationError=null))},H.prototype.$isValid=function(t){return!this.$__.validationError||!this.$__.validationError.errors[t]},H.prototype.$__reset=function(){var t=this;return U||(U=r(17)),this.$__.activePaths.map("init","modify",function(e){return t.$__getValue(e)}).filter(function(t){return t&&t instanceof Array&&t.isMongooseDocumentArray&&t.length}).forEach(function(e){for(var r=e.length;r--;){var n=e[r];n&&n.$__reset()}t.$__.activePaths.init(e.$path()),e[M]={}}),this.$__.activePaths.map("init","modify",function(e){return t.$__getValue(e)}).filter(function(t){return t&&t.$isSingleNested}).forEach(function(e){e.$__reset(),t.$__.activePaths.init(e.$basePath)}),this.$__dirty().forEach(function(t){var e=t.value;e&&e[M]&&(e[M]={})}),this.$__.activePaths.clear("modify"),this.$__.activePaths.clear("default"),this.$__.validationError=void 0,this.errors=void 0,t=this,this.schema.requiredPaths().forEach(function(e){t.$__.activePaths.require(e)}),this},H.prototype.$__dirty=function(){var t=this,e=this.$__.activePaths.map("modify",function(e){return{path:e,value:t.$__getValue(e),schema:t.$__path(e)}});(e=e.concat(this.$__.activePaths.map("default",function(e){if("_id"!==e&&null!=t.$__getValue(e))return{path:e,value:t.$__getValue(e),schema:t.$__path(e)}}))).sort(function(t,e){return t.path<e.path?-1:t.path>e.path?1:0});var r=[],n=void 0,i=void 0;return e.forEach(function(t){t&&(null==n||0!==t.path.indexOf(n)?(n=t.path+".",r.push(t),i=t):null!=i&&null!=i.value&&null!=i.value[M]&&i.value.hasAtomics()&&(i.value[M]={},i.value[M].$set=i.value))}),i=n=null,r},H.prototype.$__setSchema=function(t){t.plugin($,{deduplicate:!0}),b(t.tree,this,void 0,t.options);var e=!0,r=!1,n=void 0;try{for(var i,o=Object.keys(t.virtuals)[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value;t.virtuals[s]._applyDefaultGetters()}}catch(t){r=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(r)throw n}}this.schema=t,this[F]=t},H.prototype.$__getArrayPathsToValidate=function(){return U||(U=r(17)),this.$__.activePaths.map("init","modify",function(t){return this.$__getValue(t)}.bind(this)).filter(function(t){return t&&t instanceof Array&&t.isMongooseDocumentArray&&t.length}).reduce(function(t,e){return t.concat(e)},[]).filter(function(t){return t})},H.prototype.$__getAllSubdocs=function(){U||(U=r(17)),q=q||r(25);var t=this;return Object.keys(this._doc).reduce(function(e,r){return function t(e,r,n){var i=e;return n&&(i=e instanceof H&&e[F].paths[n]?e._doc[n]:e[n]),i instanceof q?r.push(i):i instanceof Map?r=Array.from(i.keys()).reduce(function(e,r){return t(i.get(r),e,null)},r):i&&i.$isSingleNested?(r=Object.keys(i._doc).reduce(function(e,r){return t(i._doc,e,r)},r)).push(i):i&&i.isMongooseDocumentArray?i.forEach(function(e){e&&e._doc&&(r=Object.keys(e._doc).reduce(function(r,n){return t(e._doc,r,n)},r),e instanceof q&&r.push(e))}):i instanceof H&&i.$__isNested&&(r=Object.keys(i).reduce(function(e,r){return t(i,e,r)},r)),r}(t,e,r)},[])},H.prototype.$__handleReject=function(t){this.listeners("error").length?this.emit("error",t):this.constructor.listeners&&this.constructor.listeners("error").length?this.constructor.emit("error",t):this.listeners&&this.listeners("error").length&&this.emit("error",t)},H.prototype.$toObject=function(t,e){var r={transform:!0,flattenDecimals:!0},i=e?"toJSON":"toObject",o=S(this,"constructor.base.options."+i,{}),s=S(this,"schema.options",{});r=T.options(r,B(o)),r=T.options(r,B(s[i]||{})),"flattenMaps"in(t=T.isPOJO(t)?B(t):{})||(t.flattenMaps=r.flattenMaps);var a=void 0;a=null!=t.minimize?t.minimize:null!=r.minimize?r.minimize:s.minimize;var u=Object.assign(T.clone(t),{_isNested:!0,json:e,minimize:a});if(T.hasUserDefinedProperty(t,"getters")&&(u.getters=t.getters),T.hasUserDefinedProperty(t,"virtuals")&&(u.virtuals=t.virtuals),(t.depopulate||S(t,"_parentOptions.depopulate",!1))&&t._isNested&&this.$__.wasPopulated)return B(this._id,u);(t=T.options(r,t))._isNested=!0,t.json=e,t.minimize=a,u._parentOptions=t,u._skipSingleNestedGetters=!0;var c=Object.assign({},u);c._skipSingleNestedGetters=!1;var l=t.transform,f=B(this._doc,u)||{};t.getters&&(!function(t,e,r){var n=t.schema,i=Object.keys(n.paths),o=i.length,s=void 0,a=t._doc,u=void 0;if(!a)return e;for(;o--;){var c=(s=i[o]).split("."),l=c.length,f=l-1,h=e,p=void 0;if(a=t._doc,t.isSelected(s))for(var d=0;d<l;++d){if(p=c[d],u=a[p],d===f){var y=t.get(s);h[p]=B(y,r)}else{if(null==u){p in a&&(h[p]=u);break}h=h[p]||(h[p]={})}a=u}}}
/*!
 * Applies schema type transforms to `json`.
 *
 * @param {Document} self
 * @param {Object} json
 * @return {Object} `json`
 */(this,f,c),t.minimize&&(f=
/*!
 * Minimizes an object, removing undefined values and empty objects
 *
 * @param {Object} object to minimize
 * @return {Object}
 */
function t(e){var r=Object.keys(e);var i=r.length;var o=void 0;var s=void 0;var a=void 0;for(;i--;)s=r[i],a=e[s],T.isObject(a)&&!n.isBuffer(a)&&(e[s]=t(a)),void 0!==e[s]?o=!0:delete e[s];return o?e:void 0}(f)||{})),(t.virtuals||t.getters&&!1!==t.virtuals)&&J(this,f,c,t),!1===t.versionKey&&this.schema.options.versionKey&&delete f[this.schema.options.versionKey];var h=t.transform;if(h&&function(t,e){var r=t.schema,n=Object.keys(r.paths||{});if(!t._doc)return e;var i=!0,o=!1,s=void 0;try{for(var a,u=n[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var c=a.value,l=r.paths[c];if("function"==typeof l.options.transform){var f=t.get(c);e[c]=l.options.transform.call(t,f)}else if(null!=l.$embeddedSchemaType&&"function"==typeof l.$embeddedSchemaType.options.transform){for(var h=[].concat(t.get(c)),p=l.$embeddedSchemaType.options.transform,d=0;d<h.length;++d)h[d]=p.call(t,h[d]);e[c]=h}}}catch(t){o=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}}(this,f),!0===h||s.toObject&&h){var p=t.json?s.toJSON:s.toObject;p&&(h="function"==typeof t.transform?t.transform:p.transform)}else t.transform=l;if("function"==typeof h){var d=h(this,f,t);void 0!==d&&(f=d)}return f},H.prototype.toObject=function(t){return this.$toObject(t)},H.prototype.toJSON=function(t){return this.$toObject(t,!0)},H.prototype.inspect=function(t){var e=void 0;T.isPOJO(t)&&((e=t).minimize=!1);var r=this.toObject(e);return null==r?"MongooseDocument { "+r+" }":r},N.custom&&(
/*!
  * Avoid Node deprecation warning DEP0079
  */
H.prototype[N.custom]=H.prototype.inspect),H.prototype.toString=function(){var t=this.inspect();return"string"==typeof t?t:N(t)},H.prototype.equals=function(t){if(!t)return!1;var e=this.get("_id"),r=t.get?t.get("_id"):t;return e||r?e&&e.equals?e.equals(r):e===r:C(this,t)},H.prototype.populate=function(){if(0===arguments.length)return this;var t=this.$__.populate||(this.$__.populate={}),e=T.args(arguments),r=void 0;if("function"==typeof e[e.length-1]&&(r=e.pop()),e.length)for(var n=T.populate.apply(null,e),i=0;i<n.length;++i)t[n[i].path]=n[i];if(r){var o=T.object.vals(t);this.$__.populate=void 0;var s=this.constructor;if(this.$__isNested){s=this.$__.scope.constructor;var a=this.$__.nestedPath;o.forEach(function(t){t.path=a+"."+t.path})}if(null!=this.$session()){var u=this.$session();o.forEach(function(t){null!=t.options?"session"in t.options||(t.options.session=u):t.options={session:u}})}s.populate(this,o,r)}return this},H.prototype.execPopulate=function(t){var e=this;return m(t,function(t){e.populate(t)},this.constructor.events)},H.prototype.populated=function(t,e,r){if(null===e||void 0===e){if(!this.$__.populated)return;var n=this.$__.populated[t];return n?n.value:void 0}if(!0===e){if(!this.$__.populated)return;return this.$__.populated[t]}this.$__.populated||(this.$__.populated={}),this.$__.populated[t]={value:e,options:r};for(var i=t.split("."),o=0;o<i.length-1;++o){var s=i.slice(0,o+1).join("."),a=this.get(s);if(null!=a&&null!=a.$__&&this.populated(s)){var u=i.slice(o+1).join(".");a.populated(u,e,r);break}}return e},H.prototype.depopulate=function(t){"string"==typeof t&&(t=t.split(" "));var e=void 0,r=this.$$populatedVirtuals?Object.keys(this.$$populatedVirtuals):[],n=S(this,"$__.populated",{});if(0===arguments.length){for(var i=0;i<r.length;i++)delete this.$$populatedVirtuals[r[i]],delete this._doc[r[i]],delete n[r[i]];for(var o=Object.keys(n),s=0;s<o.length;s++)(e=this.populated(o[s]))&&(delete n[o[s]],this.$set(o[s],e));return this}for(var a=0;a<t.length;a++)e=this.populated(t[a]),delete n[t[a]],-1!==r.indexOf(t[a])?(delete this.$$populatedVirtuals[t[a]],delete this._doc[t[a]]):e&&this.$set(t[a],e);return this},H.prototype.$__fullPath=function(t){return t||""},
/*!
 * Module exports.
 */
H.ValidationError=y,t.exports=H}).call(this,r(8),r(1).Buffer)},function(t,e,r){"use strict";(function(n){
/*!
 * Module dependencies.
 */
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(4),s=r(9),a=r(48),u=r(71),c=r(5),l=r(132),f=r(50),h=r(0).schemaTypeSymbol,p=r(3),d=r(2),y=r(0).validatorErrorSymbol,v=o.CastError,_=o.ValidatorError;function m(t,e,r){this[h]=!0,this.path=t,this.instance=r,this.validators=[],this.getters=this.constructor.hasOwnProperty("getters")?this.constructor.getters.slice():[],this.setters=[],e=e||{};var n=this.constructor.defaultOptions||{},o=Object.keys(n),a=!0,u=!1,c=void 0;try{for(var f,p=o[Symbol.iterator]();!(a=(f=p.next()).done);a=!0){var y=f.value;n.hasOwnProperty(y)&&!e.hasOwnProperty(y)&&(e[y]=n[y])}}catch(t){u=!0,c=t}finally{try{!a&&p.return&&p.return()}finally{if(u)throw c}}var v=this.OptionsConstructor||s;this.options=new v(e),this._index=null,this.selected,d.hasUserDefinedProperty(this.options,"immutable")&&(this.$immutable=this.options.immutable,l(this));var _=Object.keys(this.options),m=!0,g=!1,b=void 0;try{for(var w,O=_[Symbol.iterator]();!(m=(w=O.next()).done);m=!0){var S=w.value;if("cast"!==S&&(d.hasUserDefinedProperty(this.options,S)&&"function"==typeof this[S])){if("index"===S&&this._index){if(!1===e.index){var A=this._index;if("object"===(void 0===A?"undefined":i(A))&&null!=A){if(A.unique)throw new Error('Path "'+this.path+'" may not have `index` set to false and `unique` set to true');if(A.sparse)throw new Error('Path "'+this.path+'" may not have `index` set to false and `sparse` set to true')}this._index=!1}continue}var E=e[S];if("default"===S){this.default(E);continue}var $=Array.isArray(E)?E:[E];this[S].apply(this,$)}}}catch(t){g=!0,b=t}finally{try{!m&&O.return&&O.return()}finally{if(g)throw b}}Object.defineProperty(this,"$$context",{enumerable:!1,configurable:!1,writable:!0,value:null})}
/*!
 * ignore
 */m.prototype.OptionsConstructor=s,m.cast=function(t){return 0===arguments.length?this._cast:(!1===t&&(t=function(t){return t}),this._cast=t,this._cast)},m.set=function(t,e){this.hasOwnProperty("defaultOptions")||(this.defaultOptions=Object.assign({},this.defaultOptions)),this.defaultOptions[t]=e},m.get=function(t){this.getters=this.hasOwnProperty("getters")?this.getters:[],this.getters.push(t)},m.prototype.default=function(t){return 1===arguments.length?void 0===t?void(this.defaultValue=void 0):(this.defaultValue=t,this.defaultValue):(arguments.length>1&&(this.defaultValue=d.args(arguments)),this.defaultValue)},m.prototype.index=function(t){return this._index=t,d.expires(this._index),this},m.prototype.unique=function(t){if(!1===this._index){if(!t)return;throw new Error('Path "'+this.path+'" may not have `index` set to false and `unique` set to true')}return null==this._index||!0===this._index?this._index={}:"string"==typeof this._index&&(this._index={type:this._index}),this._index.unique=t,this},m.prototype.text=function(t){if(!1===this._index){if(!t)return;throw new Error('Path "'+this.path+'" may not have `index` set to false and `text` set to true')}return null===this._index||void 0===this._index||"boolean"==typeof this._index?this._index={}:"string"==typeof this._index&&(this._index={type:this._index}),this._index.text=t,this},m.prototype.sparse=function(t){if(!1===this._index){if(!t)return;throw new Error('Path "'+this.path+'" may not have `index` set to false and `sparse` set to true')}return null==this._index||"boolean"==typeof this._index?this._index={}:"string"==typeof this._index&&(this._index={type:this._index}),this._index.sparse=t,this},m.prototype.immutable=function(t){return this.$immutable=t,l(this),this},m.prototype.set=function(t){if("function"!=typeof t)throw new TypeError("A setter must be a function.");return this.setters.push(t),this},m.prototype.get=function(t){if("function"!=typeof t)throw new TypeError("A getter must be a function.");return this.getters.push(t),this},m.prototype.validate=function(t,e,r){if("function"==typeof t||t&&"RegExp"===d.getFunctionName(t.constructor)){var n=void 0;return"function"==typeof e?(n={validator:t,message:e}).type=r||"user defined":e instanceof Object&&!r?((n=d.clone(e)).message||(n.message=n.msg),n.validator=t,n.type=n.type||"user defined"):(null==e&&(e=o.messages.general.default),r||(r="user defined"),n={message:e,type:r,validator:t}),n.isAsync&&g(),this.validators.push(n),this}var s,a=void 0,u=void 0;for(a=0,s=arguments.length;a<s;a++){if(u=arguments[a],!d.isPOJO(u)){var c="Invalid validator. Received ("+(void 0===u?"undefined":i(u))+") "+u+". See http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate";throw new Error(c)}this.validate(u.validator,u)}return this};
/*!
 * ignore
 */
var g=p.deprecate(function(){},"Mongoose: the `isAsync` option for custom validators is deprecated. Make your async validators return a promise instead: https://mongoosejs.com/docs/validation.html#async-custom-validators");
/*!
 * ignore
 */
function b(t){return this.castForQuery(t)}
/*!
 * ignore
 */
/*!
 * Just like handleArray, except also allows `[]` because surprisingly
 * `$in: [1, []]` works fine
 */
function w(t){var e=this;return Array.isArray(t)?t.map(function(t){return Array.isArray(t)&&0===t.length?t:e.castForQuery(t)}):[this.castForQuery(t)]}
/*!
 * ignore
 */m.prototype.required=function(t,e){var r={};if(arguments.length>0&&null==t)return this.validators=this.validators.filter(function(t){return t.validator!==this.requiredValidator},this),this.isRequired=!1,delete this.originalRequiredValue,this;if("object"===(void 0===t?"undefined":i(t))&&(e=(r=t).message||e,t=t.isRequired),!1===t)return this.validators=this.validators.filter(function(t){return t.validator!==this.requiredValidator},this),this.isRequired=!1,delete this.originalRequiredValue,this;var n=this;this.isRequired=!0,this.requiredValidator=function(e){var r=c(this,"$__.cachedRequired");if(null!=r&&!this.isSelected(n.path)&&!this.isModified(n.path))return!0;if(null!=r&&n.path in r){var i=!r[n.path]||n.checkRequired(e,this);return delete r[n.path],i}return"function"==typeof t&&!t.apply(this)||n.checkRequired(e,this)},this.originalRequiredValue=t,"string"==typeof t&&(e=t,t=void 0);var s=e||o.messages.general.required;return this.validators.unshift(Object.assign({},r,{validator:this.requiredValidator,message:s,type:"required"})),this},m.prototype.ref=function(t){return this.options.ref=t,this},m.prototype.getDefault=function(t,e){var r="function"==typeof this.defaultValue?this.defaultValue.call(t):this.defaultValue;if(null!==r&&void 0!==r){"object"!==(void 0===r?"undefined":i(r))||this.options&&this.options.shared||(r=d.clone(r));var n=this.applySetters(r,t,e);return n&&n.$isSingleNested&&(n.$parent=t),n}return r},
/*!
 * Applies setters without casting
 *
 * @api private
 */
m.prototype._applySetters=function(t,e,r,n){for(var i=t,o=this.setters,s=o.length,a=this.caster;s--;)i=o[s].call(e,i,this);if(Array.isArray(i)&&a&&a.setters){for(var u=[],c=0;c<i.length;c++)u.push(a.applySetters(i[c],e,r,n));i=u}return i},m.prototype.applySetters=function(t,e,r,n,i){var o=this._applySetters(t,e,r,n,i);return null==o?o:o=this.cast(o,e,r,n,i)},m.prototype.applyGetters=function(t,e){var r=t,n=this.getters,i=n.length;if(0===i)return r;for(var o=0;o<i;++o)r=n[o].call(e,r,this);return r},m.prototype.select=function(t){return this.selected=!!t,this},m.prototype.doValidate=function(t,e,r,n){var o=!1,s=this.path,a=this.validators.filter(function(t){return null!=t&&"object"===(void 0===t?"undefined":i(t))}),u=a.length;if(!u)return e(null);var c=function(t,r){if(!o)if(void 0===t||t)--u<=0&&f(function(){e(null)});else{var n=r.ErrorConstructor||_;(o=new n(r))[y]=!0,f(function(){e(o)})}},l=this;a.forEach(function(e){if(!o){var i=e.validator,a=void 0,u=d.clone(e);if(u.path=n&&n.path?n.path:s,u.value=t,i instanceof RegExp)c(i.test(t),u);else if("function"==typeof i){if(void 0===t&&i!==l.requiredValidator)return void c(!0,u);if(u.isAsync)!
/*!
 * Handle async validators
 */
function(t,e,r,n,i){var o=!1,s=t.call(e,r,function(t,e){o||(o=!0,e&&(n.message=e),i(t,n))});"boolean"==typeof s?(o=!0,i(s,n)):s&&"function"==typeof s.then&&s.then(function(t){o||(o=!0,i(t,n))},function(t){o||(o=!0,n.reason=t,n.message=t.message,i(!1,n))})}(i,r,t,u,c);else{try{a=u.propsParameter?i.call(r,t,u):i.call(r,t)}catch(t){a=!1,u.reason=t,t.message&&(u.message=t.message)}null!=a&&"function"==typeof a.then?a.then(function(t){c(t,u)},function(t){u.reason=t,u.message=t.message,c(a=!1,u)}):c(a,u)}}}})},m.prototype.doValidateSync=function(t,e,r){var n=null,o=this.path;if(!this.validators.length)return null;var s=function(t,e){if(!n&&void 0!==t&&!t){var r=e.ErrorConstructor||_;(n=new r(e))[y]=!0}},a=this.validators;if(void 0===t){if(!(this.validators.length>0&&"required"===this.validators[0].type))return null;a=[this.validators[0]]}return a.forEach(function(a){if(!n&&null!=a&&"object"===(void 0===a?"undefined":i(a))){var u=a.validator,c=d.clone(a);c.path=r&&r.path?r.path:o,c.value=t;var l=void 0;if(!u.isAsync)if(u instanceof RegExp)s(u.test(t),c);else if("function"==typeof u){try{l=c.propsParameter?u.call(e,t,c):u.call(e,t)}catch(t){l=!1,c.reason=t}if(null!=l&&"function"==typeof l.then)return;s(l,c)}}}),n},m._isRef=function(t,e,r,i){var o=i&&t.options&&(t.options.ref||t.options.refPath);if(!o&&r&&null!=r.$__){var s=r.$__fullPath(t.path);o=(r.ownerDocument?r.ownerDocument():r).populated(s)||r.populated(t.path)}if(o){if(null==e)return!0;if(!n.isBuffer(e)&&"Binary"!==e._bsontype&&d.isObject(e))return!0}return!1},m.prototype.$conditionalHandlers={$all:function(t){var e=this;return Array.isArray(t)?t.map(function(t){return e.castForQuery(t)}):[this.castForQuery(t)]},$eq:b,$in:w,$ne:b,$nin:w,$exists:a,$type:u},
/*!
 * Wraps `castForQuery` to handle context
 */
m.prototype.castForQueryWrapper=function(t){return this.$$context=t.context,"$conditional"in t?this.castForQuery(t.$conditional,t.val):t.$skipQueryCastForUpdate||t.$applySetters?this._castForQuery(t.val):this.castForQuery(t.val)},m.prototype.castForQuery=function(t,e){var r=void 0;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new Error("Can't use "+t);return r.call(this,e)}return e=t,this._castForQuery(e)},
/*!
 * Internal switch for runSetters
 *
 * @api private
 */
m.prototype._castForQuery=function(t){return this.applySetters(t,this.$$context)},m.checkRequired=function(t){return arguments.length>0&&(this._checkRequired=t),this._checkRequired},m.prototype.checkRequired=function(t){return null!=t},
/*!
 * ignore
 */
m.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.path,t,this.instance);return e.validators=this.validators.slice(),void 0!==this.requiredValidator&&(e.requiredValidator=this.requiredValidator),void 0!==this.defaultValue&&(e.defaultValue=this.defaultValue),void 0!==this.$immutable&&void 0===this.options.immutable&&(e.$immutable=this.$immutable,l(e)),void 0!==this._index&&(e._index=this._index),void 0!==this.selected&&(e.selected=this.selected),void 0!==this.isRequired&&(e.isRequired=this.isRequired),void 0!==this.originalRequiredValue&&(e.originalRequiredValue=this.originalRequiredValue),e.getters=this.getters.slice(),e.setters=this.setters.slice(),e},
/*!
 * Module exports.
 */
t.exports=e=m,e.CastError=v,e.ValidatorError=_}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n,i,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(t){i=a}}();var c,l=[],f=!1,h=-1;function p(){f&&c&&(f=!1,c.length?l=c.concat(l):h=-1,l.length&&d())}function d(){if(!f){var t=u(p);f=!0;for(var e=l.length;e;){for(c=l,l=[];++h<e;)c&&c[h].run();h=-1,e=l.length}c=null,f=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new y(t,e)),1!==l.length||f||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";var n=r(46),i=function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),null==e)return this;Object.assign(this,n(e))},o=r(10);Object.defineProperty(i.prototype,"type",o),Object.defineProperty(i.prototype,"validate",o),Object.defineProperty(i.prototype,"cast",o),Object.defineProperty(i.prototype,"required",o),Object.defineProperty(i.prototype,"default",o),Object.defineProperty(i.prototype,"ref",o),Object.defineProperty(i.prototype,"select",o),Object.defineProperty(i.prototype,"index",o),Object.defineProperty(i.prototype,"unique",o),Object.defineProperty(i.prototype,"immutable",o),Object.defineProperty(i.prototype,"sparse",o),Object.defineProperty(i.prototype,"text",o),Object.defineProperty(i.prototype,"transform",o),t.exports=i},function(t,e,r){"use strict";t.exports=Object.freeze({enumerable:!0,configurable:!0,writable:!0,value:void 0})},function(t,e,r){"use strict";var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(n=window)}t.exports=n},function(t,e,r){"use strict";var n=r(14).get().ObjectId,i=r(0).objectIdSymbol;
/*!
 * Getter for convenience with populate, see gh-6115
 */
Object.defineProperty(n.prototype,"_id",{enumerable:!1,configurable:!0,get:function(){return this}}),n.prototype[i]=!0,t.exports=n},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(16),i=r(5),o=r(3);function s(t,e,r,i,o){arguments.length>0&&this.init(t,e,r,i,o),n.call(this,this.formatMessage()),this.name="CastError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack}
/*!
 * Inherits from MongooseError.
 */s.prototype=Object.create(n.prototype),s.prototype.constructor=n,
/*!
 * ignore
 */
s.prototype.init=function(t,e,r,n,s){var a=o.inspect(e);(a=a.replace(/^'/,'"').replace(/'$/,'"')).startsWith('"')||(a='"'+a+'"'),"string"==typeof i(s,"options.cast",null)&&(this.messageFormat=s.options.cast),this.stringValue=a,this.kind=t,this.value=e,this.path=r,this.reason=n},
/*!
 * ignore
 */
s.prototype.copy=function(t){this.messageFormat=t.messageFormat,this.stringValue=t.stringValue,this.kind=t.type,this.value=t.value,this.path=t.path,this.reason=t.reason,this.message=t.message},
/*!
 * ignore
 */
s.prototype.setModel=function(t){this.model=t,this.message=this.formatMessage(t)},
/*!
 * ignore
 */
s.prototype.formatMessage=function(t){if(null!=this.messageFormat){var e=this.messageFormat.replace("{KIND}",this.kind).replace("{VALUE}",this.stringValue).replace("{PATH}",this.path);return null!=t&&(e=e.replace("{MODEL}",t.modelName)),e}var r="Cast to "+this.kind+" failed for value "+this.stringValue+' at path "'+this.path+'"';return null!=t&&(r+=' for model "'+t.modelName+'"'),r},
/*!
 * exports
 */
t.exports=s},function(t,e,r){"use strict";
/*!
 * ignore
 */var n=null;t.exports.get=function(){return n},t.exports.set=function(t){n=t}},function(t,e,r){"use strict";(function(e){function r(t,r){return new e(t,r)}t.exports={normalizedFunctionString:function(t){return t.toString().replace(/function *\(/,"function (")},allocBuffer:"function"==typeof e.alloc?function(){return e.alloc.apply(e,arguments)}:r,toBuffer:"function"==typeof e.from?function(){return e.from.apply(e,arguments)}:r}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * ignore
 */function n(t){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack,this.message=t,this.name="MongooseError"}
/*!
 * Inherits from Error.
 */n.prototype=Object.create(Error.prototype),n.prototype.constructor=Error,t.exports=n},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(n):void 0};var o=r(82),s=r(6),a=r(12),u=r(85),c=r(56),l=r(22).internalToObjectOptions,f=r(3),h=r(2),p=r(0).arrayAtomicsSymbol,d=r(0).arrayParentSymbol,y=r(0).arrayPathSymbol,v=r(0).arraySchemaSymbol,_=r(0).documentArrayParent,m=Array.prototype.push,g=function(t){function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,o),n(r,[{key:"toBSON",
/*!
     * ignore
     */
value:function(){return this.toObject(l)}
/*!
     * ignore
     */},{key:"map",value:function(){var t=i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"map",this).apply(this,arguments);return t[v]=null,t[y]=null,t[d]=null,t}},{key:"_cast",value:function(t,r){if(null==this[v])return t;var n=this[v].casterConstructor;if((n.$isMongooseDocumentArray?t&&t.isMongooseDocumentArray:t instanceof n)||t&&t.constructor&&t.constructor.baseCasterConstructor===n)return t[_]&&t.__parentArray||(t[_]=this[d],t.__parentArray=this),t.$setIndex(r),t;if(void 0===t||null===t)return null;if((e.isBuffer(t)||t instanceof a||!h.isObject(t))&&(t={_id:t}),t&&n.discriminators&&n.schema&&n.schema.options&&n.schema.options.discriminatorKey)if("string"==typeof t[n.schema.options.discriminatorKey]&&n.discriminators[t[n.schema.options.discriminatorKey]])n=n.discriminators[t[n.schema.options.discriminatorKey]];else{var i=c(n,t[n.schema.options.discriminatorKey]);i&&(n=i)}return n.$isMongooseDocumentArray?n.cast(t,this,void 0,void 0,r):new n(t,this,void 0,void 0,r)}},{key:"id",value:function(t){var e=void 0,r=void 0,n=void 0;try{e=u(t).toString()}catch(t){e=null}for(var i=0,o=this.length;i<o;i++)if(this[i]&&null!==(n=this[i].get("_id"))&&void 0!==n)if(n instanceof s){if(r||(r=String(t)),r==n._id)return this[i]}else if(t instanceof a||n instanceof a){if(e==n)return this[i]}else if(h.deepEqual(t,n))return this[i];return null}},{key:"toObject",value:function(t){return[].concat(this.map(function(e){return null==e?null:"function"!=typeof e.toObject?e:e.toObject(t)}))}},{key:"slice",value:function(){var t=i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"slice",this).apply(this,arguments);return t[d]=this[d],t[y]=this[y],t}},{key:"push",value:function(){var t=i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"push",this).apply(this,arguments);return b(this),t}},{key:"pull",value:function(){var t=i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"pull",this).apply(this,arguments);return b(this),t}},{key:"shift",value:function(){var t=i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"shift",this).apply(this,arguments);return b(this),t}},{key:"splice",value:function(){var t=i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"splice",this).apply(this,arguments);return b(this),t}},{key:"inspect",value:function(){return this.toObject()}},{key:"create",value:function(t){var e=this[v].casterConstructor;if(t&&e.discriminators&&e.schema&&e.schema.options&&e.schema.options.discriminatorKey)if("string"==typeof t[e.schema.options.discriminatorKey]&&e.discriminators[t[e.schema.options.discriminatorKey]])e=e.discriminators[t[e.schema.options.discriminatorKey]];else{var r=c(e,t[e.schema.options.discriminatorKey]);r&&(e=r)}return new e(t,this)}
/*!
     * ignore
     */},{key:"notify",value:function(t){var e=this;return function r(n,i){for(var o=(i=i||e).length;o--;)if(null!=i[o]){switch(t){case"save":n=e[o]}i[o].isMongooseArray?r(n,i[o]):i[o]&&i[o].emit(t,n)}}}},{key:"isMongooseDocumentArray",get:function(){return!0}}]),r}();
/*!
 * If this is a document array, each element may contain single
 * populated paths, so we need to modify the top-level document's
 * populated cache. See gh-8247, gh-8265.
 */
function b(t){var e=t[d];if(e&&null!=e.$__.populated){var r=Object.keys(e.$__.populated).filter(function(e){return e.startsWith(t[y]+".")}),n=!0,i=!1,o=void 0;try{for(var s,a=function(){var r=s.value,n=r.slice((t[y]+".").length);if(!Array.isArray(e.$__.populated[r].value))return"continue";e.$__.populated[r].value=t.map(function(t){return t.populated(n)})},u=r[Symbol.iterator]();!(n=(s=u.next()).done);n=!0)a()}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}}}f.inspect.custom&&(g.prototype[f.inspect.custom]=g.prototype.inspect),
/*!
 * Module exports.
 */
t.exports=function(t,e,r){var n=new g;if(n[p]={},n[v]=void 0,Array.isArray(t)&&(t instanceof g&&t[y]===e&&t[d]===r&&(n[p]=Object.assign({},t[p])),t.forEach(function(t){m.call(n,t)})),n[y]=e,r&&r instanceof s)for(n[d]=r,n[v]=r.schema.path(e);null!=n&&null!=n[v]&&n[v].$isMongooseArray&&!n[v].$isMongooseDocumentArray;)n[v]=n[v].casterConstructor;return n}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect:null,s=o&&"function"==typeof o.apply?o.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var a=Number.isNaN||function(t){return t!=t};function u(){u.init.call(this)}t.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function l(t){return void 0===t._maxListeners?u.defaultMaxListeners:t._maxListeners}function f(t,e,r,n){var o,s,a;if("function"!=typeof r)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===r?"undefined":i(r)));if(void 0===(s=t._events)?(s=t._events=Object.create(null),t._eventsCount=0):(void 0!==s.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),s=t._events),a=s[e]),void 0===a)a=s[e]=r,++t._eventsCount;else if("function"==typeof a?a=s[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),(o=l(t))>0&&a.length>o&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=a.length,function(t){console&&console.warn&&console.warn(t)}(u)}return t}function h(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,s(this.listener,this.target,t))}.bind(n);return i.listener=r,n.wrapFn=i,i}function p(t,e,r){var n=t._events;if(void 0===n)return[];var i=n[e];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(i):y(i,i.length)}function d(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");c=t}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},u.prototype.getMaxListeners=function(){return l(this)},u.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var n="error"===t,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;if(n){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var u=i[t];if(void 0===u)return!1;if("function"==typeof u)s(u,this,e);else{var c=u.length,l=y(u,c);for(r=0;r<c;++r)s(l[r],this,e)}return!0},u.prototype.addListener=function(t,e){return f(this,t,e,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(t,e){return f(this,t,e,!0)},u.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===e?"undefined":i(e)));return this.on(t,h(this,t,e)),this},u.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===e?"undefined":i(e)));return this.prependListener(t,h(this,t,e)),this},u.prototype.removeListener=function(t,e){var r,n,o,s,a;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+(void 0===e?"undefined":i(e)));if(void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(o=-1,s=r.length-1;s>=0;s--)if(r[s]===e||r[s].listener===e){a=r[s].listener,o=s;break}if(o<0)return this;0===o?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,o),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,a||e)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},u.prototype.listeners=function(t){return p(this,t,!0)},u.prototype.rawListeners=function(t){return p(this,t,!1)},u.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},u.prototype.listenerCount=d,u.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e,r){"use strict";t.exports=r(14).get().Decimal128},function(t,e,r){"use strict";(function(e){
/*!
 * Determines if `arg` is an object.
 *
 * @param {Object|Array|String|Function|RegExp|any} arg
 * @api private
 * @return {Boolean}
 */
t.exports=function(t){return!!e.isBuffer(t)||"[object Object]"===Object.prototype.toString.call(t)}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(114);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function o(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}function s(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var a=r(3),u=Object.prototype.hasOwnProperty,c=Array.prototype.slice,l="foo"===function(){}.name;function f(t){return Object.prototype.toString.call(t)}function h(t){return!s(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var p=t.exports=g,d=/\s*function\s+([^\(\s]*)\s*/;function y(t){if(a.isFunction(t)){if(l)return t.name;var e=t.toString().match(d);return e&&e[1]}}function v(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function _(t){if(l||!a.isFunction(t))return a.inspect(t);var e=y(t);return"[Function"+(e?": "+e:"")+"]"}function m(t,e,r,n,i){throw new p.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function g(t,e){t||m(t,!0,e,"==",p.ok)}function b(t,e,r,i){if(t===e)return!0;if(s(t)&&s(e))return 0===o(t,e);if(a.isDate(t)&&a.isDate(e))return t.getTime()===e.getTime();if(a.isRegExp(t)&&a.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"===(void 0===t?"undefined":n(t))||null!==e&&"object"===(void 0===e?"undefined":n(e))){if(h(t)&&h(e)&&f(t)===f(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===o(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(s(t)!==s(e))return!1;var u=(i=i||{actual:[],expected:[]}).actual.indexOf(t);return-1!==u&&u===i.expected.indexOf(e)||(i.actual.push(t),i.expected.push(e),function(t,e,r,n){if(null===t||void 0===t||null===e||void 0===e)return!1;if(a.isPrimitive(t)||a.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=w(t),o=w(e);if(i&&!o||!i&&o)return!1;if(i)return t=c.call(t),e=c.call(e),b(t,e,r);var s,u,l=A(t),f=A(e);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),u=l.length-1;u>=0;u--)if(l[u]!==f[u])return!1;for(u=l.length-1;u>=0;u--)if(s=l[u],!b(t[s],e[s],r,n))return!1;return!0}(t,e,r,i))}return r?t===e:t==e}function w(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function O(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function S(t,e,r,n){var i;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=function(t){var e;try{t()}catch(t){e=t}return e}(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!i&&m(i,r,"Missing expected exception"+n);var o="string"==typeof n,s=!t&&a.isError(i),u=!t&&i&&!r;if((s&&o&&O(i,r)||u)&&m(i,r,"Got unwanted exception"+n),t&&i&&r&&!O(i,r)||!t&&i)throw i}p.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return v(_(t.actual),128)+" "+t.operator+" "+v(_(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,i=y(e),o=n.indexOf("\n"+i);if(o>=0){var s=n.indexOf("\n",o+1);n=n.substring(s+1)}this.stack=n}}},a.inherits(p.AssertionError,Error),p.fail=m,p.ok=g,p.equal=function(t,e,r){t!=e&&m(t,e,r,"==",p.equal)},p.notEqual=function(t,e,r){t==e&&m(t,e,r,"!=",p.notEqual)},p.deepEqual=function(t,e,r){b(t,e,!1)||m(t,e,r,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(t,e,r){b(t,e,!0)||m(t,e,r,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(t,e,r){b(t,e,!1)&&m(t,e,r,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function t(e,r,n){b(e,r,!0)&&m(e,r,n,"notDeepStrictEqual",t)},p.strictEqual=function(t,e,r){t!==e&&m(t,e,r,"===",p.strictEqual)},p.notStrictEqual=function(t,e,r){t===e&&m(t,e,r,"!==",p.notStrictEqual)},p.throws=function(t,e,r){S(!0,t,e,r)},p.doesNotThrow=function(t,e,r){S(!1,t,e,r)},p.ifError=function(t){if(t)throw t},p.strict=i(function t(e,r){e||m(e,!0,r,"==",t)},p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var A=Object.keys||function(t){var e=[];for(var r in t)u.call(t,r)&&e.push(r);return e}}).call(this,r(11))},function(t,e,r){"use strict";
/*!
 * ignore
 */e.internalToObjectOptions={transform:!1,virtuals:!1,getters:!1,_skipDepopulateTopLevel:!0,depopulate:!0,flattenDecimals:!1}},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);this._bsontype="Long",this.low_=0|t,this.high_=0|e}n.prototype.toInt=function(){return this.low_},n.prototype.toNumber=function(){return this.high_*n.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},n.prototype.toJSON=function(){return this.toString()},n.prototype.toString=function(t){var e=t||10;if(e<2||36<e)throw Error("radix out of range: "+e);if(this.isZero())return"0";if(this.isNegative()){if(this.equals(n.MIN_VALUE)){var r=n.fromNumber(e),i=this.div(r),o=i.multiply(r).subtract(this);return i.toString(e)+o.toInt().toString(e)}return"-"+this.negate().toString(e)}var s=n.fromNumber(Math.pow(e,6));o=this;for(var a="";!o.isZero();){var u=o.div(s),c=o.subtract(u.multiply(s)).toInt().toString(e);if((o=u).isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}},n.prototype.getHighBits=function(){return this.high_},n.prototype.getLowBits=function(){return this.low_},n.prototype.getLowBitsUnsigned=function(){return this.low_>=0?this.low_:n.TWO_PWR_32_DBL_+this.low_},n.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(n.MIN_VALUE)?64:this.negate().getNumBitsAbs();for(var t=0!==this.high_?this.high_:this.low_,e=31;e>0&&0==(t&1<<e);e--);return 0!==this.high_?e+33:e+1},n.prototype.isZero=function(){return 0===this.high_&&0===this.low_},n.prototype.isNegative=function(){return this.high_<0},n.prototype.isOdd=function(){return 1==(1&this.low_)},n.prototype.equals=function(t){return this.high_===t.high_&&this.low_===t.low_},n.prototype.notEquals=function(t){return this.high_!==t.high_||this.low_!==t.low_},n.prototype.lessThan=function(t){return this.compare(t)<0},n.prototype.lessThanOrEqual=function(t){return this.compare(t)<=0},n.prototype.greaterThan=function(t){return this.compare(t)>0},n.prototype.greaterThanOrEqual=function(t){return this.compare(t)>=0},n.prototype.compare=function(t){if(this.equals(t))return 0;var e=this.isNegative(),r=t.isNegative();return e&&!r?-1:!e&&r?1:this.subtract(t).isNegative()?-1:1},n.prototype.negate=function(){return this.equals(n.MIN_VALUE)?n.MIN_VALUE:this.not().add(n.ONE)},n.prototype.add=function(t){var e=this.high_>>>16,r=65535&this.high_,i=this.low_>>>16,o=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=0,l=0,f=0,h=0;return f+=(h+=o+(65535&t.low_))>>>16,h&=65535,l+=(f+=i+u)>>>16,f&=65535,c+=(l+=r+a)>>>16,l&=65535,c+=e+s,c&=65535,n.fromBits(f<<16|h,c<<16|l)},n.prototype.subtract=function(t){return this.add(t.negate())},n.prototype.multiply=function(t){if(this.isZero())return n.ZERO;if(t.isZero())return n.ZERO;if(this.equals(n.MIN_VALUE))return t.isOdd()?n.MIN_VALUE:n.ZERO;if(t.equals(n.MIN_VALUE))return this.isOdd()?n.MIN_VALUE:n.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(n.TWO_PWR_24_)&&t.lessThan(n.TWO_PWR_24_))return n.fromNumber(this.toNumber()*t.toNumber());var e=this.high_>>>16,r=65535&this.high_,i=this.low_>>>16,o=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=65535&t.low_,l=0,f=0,h=0,p=0;return h+=(p+=o*c)>>>16,p&=65535,f+=(h+=i*c)>>>16,h&=65535,f+=(h+=o*u)>>>16,h&=65535,l+=(f+=r*c)>>>16,f&=65535,l+=(f+=i*u)>>>16,f&=65535,l+=(f+=o*a)>>>16,f&=65535,l+=e*c+r*u+i*a+o*s,l&=65535,n.fromBits(h<<16|p,l<<16|f)},n.prototype.div=function(t){if(t.isZero())throw Error("division by zero");if(this.isZero())return n.ZERO;if(this.equals(n.MIN_VALUE)){if(t.equals(n.ONE)||t.equals(n.NEG_ONE))return n.MIN_VALUE;if(t.equals(n.MIN_VALUE))return n.ONE;var e=this.shiftRight(1).div(t).shiftLeft(1);if(e.equals(n.ZERO))return t.isNegative()?n.ONE:n.NEG_ONE;var r=this.subtract(t.multiply(e));return e.add(r.div(t))}if(t.equals(n.MIN_VALUE))return n.ZERO;if(this.isNegative())return t.isNegative()?this.negate().div(t.negate()):this.negate().div(t).negate();if(t.isNegative())return this.div(t.negate()).negate();var i=n.ZERO;for(r=this;r.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(r.toNumber()/t.toNumber()));for(var o=Math.ceil(Math.log(e)/Math.LN2),s=o<=48?1:Math.pow(2,o-48),a=n.fromNumber(e),u=a.multiply(t);u.isNegative()||u.greaterThan(r);)e-=s,u=(a=n.fromNumber(e)).multiply(t);a.isZero()&&(a=n.ONE),i=i.add(a),r=r.subtract(u)}return i},n.prototype.modulo=function(t){return this.subtract(this.div(t).multiply(t))},n.prototype.not=function(){return n.fromBits(~this.low_,~this.high_)},n.prototype.and=function(t){return n.fromBits(this.low_&t.low_,this.high_&t.high_)},n.prototype.or=function(t){return n.fromBits(this.low_|t.low_,this.high_|t.high_)},n.prototype.xor=function(t){return n.fromBits(this.low_^t.low_,this.high_^t.high_)},n.prototype.shiftLeft=function(t){if(0===(t&=63))return this;var e=this.low_;if(t<32){var r=this.high_;return n.fromBits(e<<t,r<<t|e>>>32-t)}return n.fromBits(0,e<<t-32)},n.prototype.shiftRight=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var r=this.low_;return n.fromBits(r>>>t|e<<32-t,e>>t)}return n.fromBits(e>>t-32,e>=0?0:-1)},n.prototype.shiftRightUnsigned=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var r=this.low_;return n.fromBits(r>>>t|e<<32-t,e>>>t)}return 32===t?n.fromBits(e,0):n.fromBits(e>>>t-32,0)},n.fromInt=function(t){if(-128<=t&&t<128){var e=n.INT_CACHE_[t];if(e)return e}var r=new n(0|t,t<0?-1:0);return-128<=t&&t<128&&(n.INT_CACHE_[t]=r),r},n.fromNumber=function(t){return isNaN(t)||!isFinite(t)?n.ZERO:t<=-n.TWO_PWR_63_DBL_?n.MIN_VALUE:t+1>=n.TWO_PWR_63_DBL_?n.MAX_VALUE:t<0?n.fromNumber(-t).negate():new n(t%n.TWO_PWR_32_DBL_|0,t/n.TWO_PWR_32_DBL_|0)},n.fromBits=function(t,e){return new n(t,e)},n.fromString=function(t,e){if(0===t.length)throw Error("number format error: empty string");var r=e||10;if(r<2||36<r)throw Error("radix out of range: "+r);if("-"===t.charAt(0))return n.fromString(t.substring(1),r).negate();if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character: '+t);for(var i=n.fromNumber(Math.pow(r,8)),o=n.ZERO,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+a),r);if(a<8){var c=n.fromNumber(Math.pow(r,a));o=o.multiply(c).add(n.fromNumber(u))}else o=(o=o.multiply(i)).add(n.fromNumber(u))}return o},n.INT_CACHE_={},n.TWO_PWR_16_DBL_=65536,n.TWO_PWR_24_DBL_=1<<24,n.TWO_PWR_32_DBL_=n.TWO_PWR_16_DBL_*n.TWO_PWR_16_DBL_,n.TWO_PWR_31_DBL_=n.TWO_PWR_32_DBL_/2,n.TWO_PWR_48_DBL_=n.TWO_PWR_32_DBL_*n.TWO_PWR_16_DBL_,n.TWO_PWR_64_DBL_=n.TWO_PWR_32_DBL_*n.TWO_PWR_32_DBL_,n.TWO_PWR_63_DBL_=n.TWO_PWR_64_DBL_/2,n.ZERO=n.fromInt(0),n.ONE=n.fromInt(1),n.NEG_ONE=n.fromInt(-1),n.MAX_VALUE=n.fromBits(-1,2147483647),n.MIN_VALUE=n.fromBits(0,-2147483648),n.TWO_PWR_24_=n.fromInt(1<<24),t.exports=n,t.exports.Long=n},function(t,e,r){"use strict";(function(e){var n=r(66),i=Symbol.for("mongoose:emitted");t.exports=function(t,r,o){return"function"==typeof t?r(function(r){if(null==r)t.apply(this,arguments);else{null!=o&&o.listeners("error").length>0&&!r[i]&&(r[i]=!0,o.emit("error",r));try{t(r)}catch(r){return e.nextTick(function(){throw r})}}}):new(n.get())(function(t,e){r(function(r,n){return null!=r?(null!=o&&o.listeners("error").length>0&&!r[i]&&(r[i]=!0,o.emit("error",r)),e(r)):arguments.length>2?t(Array.prototype.slice.call(arguments,1)):void t(n)})})}}).call(this,r(8))},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(61)(),i=r(18).EventEmitter,o=r(29),s=r(50),a=r(22).internalToObjectOptions,u=r(5),c=r(24),l=r(3),f=r(0).documentArrayParent,h=r(0).validatorErrorSymbol;function p(t,e,r,i,o){null!=e&&e.isMongooseDocumentArray?(this.__parentArray=e,this[f]=e.$parent()):(this.__parentArray=void 0,this[f]=void 0),this.$setIndex(o),this.$isDocumentArrayElement=!0,n.call(this,t,i,r);var s=this;this.on("isNew",function(t){s.isNew=t}),s.on("save",function(){s.constructor.emit("save",s)})}
/*!
 * Inherit from Document
 */for(var d in p.prototype=Object.create(n.prototype),p.prototype.constructor=p,i.prototype)p[d]=i.prototype[d];p.prototype.toBSON=function(){return this.toObject(a)},
/*!
 * ignore
 */
p.prototype.$setIndex=function(t){if(this.__index=t,null!=u(this,"$__.validationError",null)){var e=Object.keys(this.$__.validationError.errors),r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;this.invalidate(a,this.$__.validationError.errors[a])}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}}},p.prototype.markModified=function(t){this.$__.activePaths.modify(t),this.__parentArray&&(this.isNew?this.__parentArray._markModified():this.__parentArray._markModified(this,t))},
/*!
 * ignore
 */
p.prototype.populate=function(){throw new Error('Mongoose does not support calling populate() on nested docs. Instead of `doc.arr[0].populate("path")`, use `doc.populate("arr.0.path")`')},p.prototype.save=function(t,e){var r=this;return"function"==typeof t&&(e=t,t={}),(t=t||{}).suppressWarning||console.warn("mongoose: calling `save()` on a subdoc does **not** save the document to MongoDB, it only runs save middleware. Use `subdoc.save({ suppressWarning: true })` to hide this warning if you're sure this behavior is right for your app."),c(e,function(t){r.$__save(t)})},p.prototype.$__save=function(t){var e=this;return s(function(){return t(null,e)})},
/*!
 * no-op for hooks
 */
p.prototype.$__remove=function(t){return t(null,this)},p.prototype.remove=function(t,e){if("function"!=typeof t||e||(e=t,t=void 0),!this.__parentArray||t&&t.noop)return e&&e(null),this;var r=void 0;if(!this.willRemove){if(!(r=this._doc._id))throw new Error("For your own good, Mongoose does not know how to remove an EmbeddedDocument that has no _id");this.__parentArray.pull({_id:r}),this.willRemove=!0,
/*!
 * Registers remove event listeners for triggering
 * on subdocuments.
 *
 * @param {EmbeddedDocument} sub
 * @api private
 */
function(t){var e=t.ownerDocument();function r(){e.removeListener("save",r),e.removeListener("remove",r),t.emit("remove",t),t.constructor.emit("remove",t),e=t=null}e.on("save",r),e.on("remove",r)}(this)}return e&&e(null),this},p.prototype.update=function(){throw new Error("The #update method is not available on EmbeddedDocuments")},p.prototype.inspect=function(){return this.toObject({transform:!1,virtuals:!1,flattenDecimals:!1})},l.inspect.custom&&(
/*!
  * Avoid Node deprecation warning DEP0079
  */
p.prototype[l.inspect.custom]=p.prototype.inspect),p.prototype.invalidate=function(t,e,r){if(n.prototype.invalidate.call(this,t,e,r),!this[f]||null==this.__index){if(e[h]||e instanceof o)return!0;throw e}var i=this.__index,s=[this.__parentArray.$path(),i,t].join(".");return this[f].invalidate(s,e,r),!0},p.prototype.$markValid=function(t){if(this[f]){var e=this.__index;if(void 0!==e){var r=[this.__parentArray.$path(),e,t].join(".");this[f].$markValid(r)}}},
/*!
 * ignore
 */
p.prototype.$ignore=function(t){if(n.prototype.$ignore.call(this,t),this[f]){var e=this.__index;if(void 0!==e){var r=[this.__parentArray.$path(),e,t].join(".");this[f].$ignore(r)}}},p.prototype.$isValid=function(t){return void 0===this.__index||!this[f]||(!this[f].$__.validationError||!this[f].$__.validationError.errors[this.$__fullPath(t)])},p.prototype.ownerDocument=function(){if(this.$__.ownerDocument)return this.$__.ownerDocument;var t=this[f];if(!t)return this;for(;t[f]||t.$parent;)t=t[f]||t.$parent;return this.$__.ownerDocument=t,this.$__.ownerDocument},p.prototype.$__fullPath=function(t){if(!this.$__.fullPath){var e=this;if(!e[f])return t;for(var r=[];e[f]||e.$parent;)e[f]?r.unshift(e.__parentArray.$path()):r.unshift(e.$basePath),e=e[f]||e.$parent;this.$__.fullPath=r.join("."),this.$__.ownerDocument||(this.$__.ownerDocument=e)}return t?this.$__.fullPath+"."+t:this.$__.fullPath},p.prototype.parent=function(){return this[f]},p.prototype.parentArray=function(){return this.__parentArray},
/*!
 * Module exports.
 */
t.exports=p},function(t,e,r){"use strict";(function(e){if(void 0!==e)var n=r(1).Buffer;var i=r(15);function o(t,e){if(!(this instanceof o))return new o(t,e);if(!(null==t||"string"==typeof t||n.isBuffer(t)||t instanceof Uint8Array||Array.isArray(t)))throw new Error("only String, Buffer, Uint8Array or Array accepted");if(this._bsontype="Binary",t instanceof Number?(this.sub_type=t,this.position=0):(this.sub_type=null==e?s:e,this.position=0),null==t||t instanceof Number)void 0!==n?this.buffer=i.allocBuffer(o.BUFFER_SIZE):"undefined"!=typeof Uint8Array?this.buffer=new Uint8Array(new ArrayBuffer(o.BUFFER_SIZE)):this.buffer=new Array(o.BUFFER_SIZE),this.position=0;else{if("string"==typeof t)if(void 0!==n)this.buffer=i.toBuffer(t);else{if("undefined"==typeof Uint8Array&&"[object Array]"!==Object.prototype.toString.call(t))throw new Error("only String, Buffer, Uint8Array or Array accepted");this.buffer=a(t)}else this.buffer=t;this.position=t.length}}o.prototype.put=function(t){if(null!=t.length&&"number"!=typeof t&&1!==t.length)throw new Error("only accepts single character String, Uint8Array or Array");if("number"!=typeof t&&t<0||t>255)throw new Error("only accepts number in a valid unsigned byte range 0-255");var e=null;if(e="string"==typeof t?t.charCodeAt(0):null!=t.length?t[0]:t,this.buffer.length>this.position)this.buffer[this.position++]=e;else if(void 0!==n&&n.isBuffer(this.buffer)){var r=i.allocBuffer(o.BUFFER_SIZE+this.buffer.length);this.buffer.copy(r,0,0,this.buffer.length),this.buffer=r,this.buffer[this.position++]=e}else{r=null,r="[object Uint8Array]"===Object.prototype.toString.call(this.buffer)?new Uint8Array(new ArrayBuffer(o.BUFFER_SIZE+this.buffer.length)):new Array(o.BUFFER_SIZE+this.buffer.length);for(var s=0;s<this.buffer.length;s++)r[s]=this.buffer[s];this.buffer=r,this.buffer[this.position++]=e}},o.prototype.write=function(t,e){if(e="number"==typeof e?e:this.position,this.buffer.length<e+t.length){var r=null;if(void 0!==n&&n.isBuffer(this.buffer))r=i.allocBuffer(this.buffer.length+t.length),this.buffer.copy(r,0,0,this.buffer.length);else if("[object Uint8Array]"===Object.prototype.toString.call(this.buffer)){r=new Uint8Array(new ArrayBuffer(this.buffer.length+t.length));for(var o=0;o<this.position;o++)r[o]=this.buffer[o]}this.buffer=r}if(void 0!==n&&n.isBuffer(t)&&n.isBuffer(this.buffer))t.copy(this.buffer,e,0,t.length),this.position=e+t.length>this.position?e+t.length:this.position;else if(void 0!==n&&"string"==typeof t&&n.isBuffer(this.buffer))this.buffer.write(t,e,"binary"),this.position=e+t.length>this.position?e+t.length:this.position;else if("[object Uint8Array]"===Object.prototype.toString.call(t)||"[object Array]"===Object.prototype.toString.call(t)&&"string"!=typeof t){for(o=0;o<t.length;o++)this.buffer[e++]=t[o];this.position=e>this.position?e:this.position}else if("string"==typeof t){for(o=0;o<t.length;o++)this.buffer[e++]=t.charCodeAt(o);this.position=e>this.position?e:this.position}},o.prototype.read=function(t,e){if(e=e&&e>0?e:this.position,this.buffer.slice)return this.buffer.slice(t,t+e);for(var r="undefined"!=typeof Uint8Array?new Uint8Array(new ArrayBuffer(e)):new Array(e),n=0;n<e;n++)r[n]=this.buffer[t++];return r},o.prototype.value=function(t){if((t=null!=t&&t)&&void 0!==n&&n.isBuffer(this.buffer)&&this.buffer.length===this.position)return this.buffer;if(void 0!==n&&n.isBuffer(this.buffer))return t?this.buffer.slice(0,this.position):this.buffer.toString("binary",0,this.position);if(t){if(null!=this.buffer.slice)return this.buffer.slice(0,this.position);for(var e="[object Uint8Array]"===Object.prototype.toString.call(this.buffer)?new Uint8Array(new ArrayBuffer(this.position)):new Array(this.position),r=0;r<this.position;r++)e[r]=this.buffer[r];return e}return u(this.buffer,0,this.position)},o.prototype.length=function(){return this.position},o.prototype.toJSON=function(){return null!=this.buffer?this.buffer.toString("base64"):""},o.prototype.toString=function(t){return null!=this.buffer?this.buffer.slice(0,this.position).toString(t):""};var s=0,a=function(t){for(var e="undefined"!=typeof Uint8Array?new Uint8Array(new ArrayBuffer(t.length)):new Array(t.length),r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e},u=function(t,e,r){for(var n="",i=e;i<r;i++)n+=String.fromCharCode(t[i]);return n};o.BUFFER_SIZE=256,o.SUBTYPE_DEFAULT=0,o.SUBTYPE_FUNCTION=1,o.SUBTYPE_BYTE_ARRAY=2,o.SUBTYPE_UUID_OLD=3,o.SUBTYPE_UUID=4,o.SUBTYPE_MD5=5,o.SUBTYPE_USER_DEFINED=128,t.exports=o,t.exports.Binary=o}).call(this,r(11))},function(t,e,r){"use strict";
/*!
 * Returns if `v` is a mongoose object that has a `toObject()` method we can use.
 *
 * This is for compatibility with libs like Date.js which do foolish things to Natives.
 *
 * @param {any} v
 * @api private
 */t.exports=function(t){return null!=t&&(null!=t.$__||t.isMongooseArray||t.isMongooseBuffer||t.$isMongooseMap)}},function(t,e,r){"use strict";var n=["find","findOne","update","updateMany","updateOne","replaceOne","remove","count","distinct","findAndModify","aggregate","findStream","deleteOne","deleteMany"];function i(){}for(var o=0,s=n.length;o<s;++o){var a=n[o];i.prototype[a]=u(a)}function u(t){return function(){throw new Error("collection."+t+" not implemented")}}t.exports=i,i.methods=n},function(t,e,r){"use strict";
/*!
 * Module requirements
 */var n=r(4),i=r(3);function o(t){this.errors={},this._message="",t&&"model"===t.constructor.name?this._message=t.constructor.modelName+" validation failed":this._message="Validation failed",n.call(this,this._message),this.name="ValidationError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack,t&&(t.errors=this.errors)}
/*!
 * Inherits from MongooseError.
 */
/*!
 * ignore
 */
function s(t){for(var e=Object.keys(t.errors||{}),r=e.length,n=[],i=void 0,o=0;o<r;++o)i=e[o],t!==t.errors[i]&&n.push(i+": "+t.errors[i].message);return n.join(", ")}
/*!
 * Module exports
 */o.prototype=Object.create(n.prototype),o.prototype.constructor=n,o.prototype.toString=function(){return this.name+": "+s(this)},
/*!
 * inspect helper
 */
o.prototype.inspect=function(){return Object.assign(new Error(this.message),this)},i.inspect.custom&&(
/*!
  * Avoid Node deprecation warning DEP0079
  */
o.prototype[i.inspect.custom]=o.prototype.inspect)
/*!
 * Helper for JSON.stringify
 */,o.prototype.toJSON=function(){return Object.assign({},this,{message:this.message})},
/*!
 * add message
 */
o.prototype.addError=function(t,e){this.errors[t]=e,this.message=this._message+": "+s(this)},t.exports=o},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);function i(t,e,r){e=e||"Field `"+t+"` is not in schema and strict mode is set to throw.",n.call(this,e),this.name="StrictModeError",this.isImmutableError=!!r,Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack,this.path=t}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,t.exports=i},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(7),i=r(51),o=r(20);function s(t,e){if(e&&e.default){var r=e.default;Array.isArray(r)&&0===r.length?e.default=Array:!e.shared&&o(r)&&0===Object.keys(r).length&&(e.default=function(){return{}})}n.call(this,t,e,"Mixed"),this[i.schemaMixedSymbol]=!0}s.schemaName="Mixed",s.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.get=n.get,s.set=n.set,s.prototype.cast=function(t){return t},s.prototype.castForQuery=function(t,e){return 2===arguments.length?e:t},
/*!
 * Module exports.
 */
t.exports=s},function(t,e,r){"use strict";
/*!
 * Module requirements.
 */var n=r(77);
/*!
 * @ignore
 */
/*!
 * @ignore
 */
function i(t){return n.cast()(t)}e.castToNumber=i,e.castArraysOfNumbers=function t(e,r){e.forEach(function(n,o){Array.isArray(n)?t(n,r):e[o]=i.call(r,n)})}},function(t,e,r){"use strict";var n=r(59),i=r(23),o=r(34),s=r(35),a=r(36),u=r(37),c=r(38),l=r(60),f=r(39),h=r(40),p=r(41),d=r(42),y=r(43),v=r(26),_=r(102),m=r(103),g=r(105),b=r(15),w=b.allocBuffer(17825792),O=function(){};O.prototype.serialize=function(t,e){var r="boolean"==typeof(e=e||{}).checkKeys&&e.checkKeys,n="boolean"==typeof e.serializeFunctions&&e.serializeFunctions,i="boolean"!=typeof e.ignoreUndefined||e.ignoreUndefined,o="number"==typeof e.minInternalBufferSize?e.minInternalBufferSize:17825792;w.length<o&&(w=b.allocBuffer(o));var s=m(w,t,r,0,0,n,i,[]),a=b.allocBuffer(s);return w.copy(a,0,0,a.length),a},O.prototype.serializeWithBufferAndIndex=function(t,e,r){var n="boolean"==typeof(r=r||{}).checkKeys&&r.checkKeys,i="boolean"==typeof r.serializeFunctions&&r.serializeFunctions,o="boolean"!=typeof r.ignoreUndefined||r.ignoreUndefined,s="number"==typeof r.index?r.index:0;return m(e,t,n,s||0,0,i,o)-1},O.prototype.deserialize=function(t,e){return _(t,e)},O.prototype.calculateObjectSize=function(t,e){var r="boolean"==typeof(e=e||{}).serializeFunctions&&e.serializeFunctions,n="boolean"!=typeof e.ignoreUndefined||e.ignoreUndefined;return g(t,r,n)},O.prototype.deserializeStream=function(t,e,r,n,i,o){o=null!=o?o:{};for(var s=e,a=0;a<r;a++){var u=t[s]|t[s+1]<<8|t[s+2]<<16|t[s+3]<<24;o.index=s,n[i+a]=this.deserialize(t,o),s+=u}return s},O.BSON_INT32_MAX=2147483647,O.BSON_INT32_MIN=-2147483648,O.BSON_INT64_MAX=Math.pow(2,63)-1,O.BSON_INT64_MIN=-Math.pow(2,63),O.JS_INT_MAX=9007199254740992,O.JS_INT_MIN=-9007199254740992,O.BSON_DATA_NUMBER=1,O.BSON_DATA_STRING=2,O.BSON_DATA_OBJECT=3,O.BSON_DATA_ARRAY=4,O.BSON_DATA_BINARY=5,O.BSON_DATA_OID=7,O.BSON_DATA_BOOLEAN=8,O.BSON_DATA_DATE=9,O.BSON_DATA_NULL=10,O.BSON_DATA_REGEXP=11,O.BSON_DATA_CODE=13,O.BSON_DATA_SYMBOL=14,O.BSON_DATA_CODE_W_SCOPE=15,O.BSON_DATA_INT=16,O.BSON_DATA_TIMESTAMP=17,O.BSON_DATA_LONG=18,O.BSON_DATA_MIN_KEY=255,O.BSON_DATA_MAX_KEY=127,O.BSON_BINARY_SUBTYPE_DEFAULT=0,O.BSON_BINARY_SUBTYPE_FUNCTION=1,O.BSON_BINARY_SUBTYPE_BYTE_ARRAY=2,O.BSON_BINARY_SUBTYPE_UUID=3,O.BSON_BINARY_SUBTYPE_MD5=4,O.BSON_BINARY_SUBTYPE_USER_DEFINED=128,t.exports=O,t.exports.Code=f,t.exports.Map=n,t.exports.Symbol=c,t.exports.BSON=O,t.exports.DBRef=y,t.exports.Binary=v,t.exports.ObjectID=a,t.exports.Long=i,t.exports.Timestamp=s,t.exports.Double=o,t.exports.Int32=l,t.exports.MinKey=p,t.exports.MaxKey=d,t.exports.BSONRegExp=u,t.exports.Decimal128=h},function(t,e,r){"use strict";function n(t){if(!(this instanceof n))return new n(t);this._bsontype="Double",this.value=t}n.prototype.valueOf=function(){return this.value},n.prototype.toJSON=function(){return this.value},t.exports=n,t.exports.Double=n},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);this._bsontype="Timestamp",this.low_=0|t,this.high_=0|e}n.prototype.toInt=function(){return this.low_},n.prototype.toNumber=function(){return this.high_*n.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},n.prototype.toJSON=function(){return this.toString()},n.prototype.toString=function(t){var e=t||10;if(e<2||36<e)throw Error("radix out of range: "+e);if(this.isZero())return"0";if(this.isNegative()){if(this.equals(n.MIN_VALUE)){var r=n.fromNumber(e),i=this.div(r),o=i.multiply(r).subtract(this);return i.toString(e)+o.toInt().toString(e)}return"-"+this.negate().toString(e)}var s=n.fromNumber(Math.pow(e,6));o=this;for(var a="";!o.isZero();){var u=o.div(s),c=o.subtract(u.multiply(s)).toInt().toString(e);if((o=u).isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}},n.prototype.getHighBits=function(){return this.high_},n.prototype.getLowBits=function(){return this.low_},n.prototype.getLowBitsUnsigned=function(){return this.low_>=0?this.low_:n.TWO_PWR_32_DBL_+this.low_},n.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(n.MIN_VALUE)?64:this.negate().getNumBitsAbs();for(var t=0!==this.high_?this.high_:this.low_,e=31;e>0&&0==(t&1<<e);e--);return 0!==this.high_?e+33:e+1},n.prototype.isZero=function(){return 0===this.high_&&0===this.low_},n.prototype.isNegative=function(){return this.high_<0},n.prototype.isOdd=function(){return 1==(1&this.low_)},n.prototype.equals=function(t){return this.high_===t.high_&&this.low_===t.low_},n.prototype.notEquals=function(t){return this.high_!==t.high_||this.low_!==t.low_},n.prototype.lessThan=function(t){return this.compare(t)<0},n.prototype.lessThanOrEqual=function(t){return this.compare(t)<=0},n.prototype.greaterThan=function(t){return this.compare(t)>0},n.prototype.greaterThanOrEqual=function(t){return this.compare(t)>=0},n.prototype.compare=function(t){if(this.equals(t))return 0;var e=this.isNegative(),r=t.isNegative();return e&&!r?-1:!e&&r?1:this.subtract(t).isNegative()?-1:1},n.prototype.negate=function(){return this.equals(n.MIN_VALUE)?n.MIN_VALUE:this.not().add(n.ONE)},n.prototype.add=function(t){var e=this.high_>>>16,r=65535&this.high_,i=this.low_>>>16,o=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=0,l=0,f=0,h=0;return f+=(h+=o+(65535&t.low_))>>>16,h&=65535,l+=(f+=i+u)>>>16,f&=65535,c+=(l+=r+a)>>>16,l&=65535,c+=e+s,c&=65535,n.fromBits(f<<16|h,c<<16|l)},n.prototype.subtract=function(t){return this.add(t.negate())},n.prototype.multiply=function(t){if(this.isZero())return n.ZERO;if(t.isZero())return n.ZERO;if(this.equals(n.MIN_VALUE))return t.isOdd()?n.MIN_VALUE:n.ZERO;if(t.equals(n.MIN_VALUE))return this.isOdd()?n.MIN_VALUE:n.ZERO;if(this.isNegative())return t.isNegative()?this.negate().multiply(t.negate()):this.negate().multiply(t).negate();if(t.isNegative())return this.multiply(t.negate()).negate();if(this.lessThan(n.TWO_PWR_24_)&&t.lessThan(n.TWO_PWR_24_))return n.fromNumber(this.toNumber()*t.toNumber());var e=this.high_>>>16,r=65535&this.high_,i=this.low_>>>16,o=65535&this.low_,s=t.high_>>>16,a=65535&t.high_,u=t.low_>>>16,c=65535&t.low_,l=0,f=0,h=0,p=0;return h+=(p+=o*c)>>>16,p&=65535,f+=(h+=i*c)>>>16,h&=65535,f+=(h+=o*u)>>>16,h&=65535,l+=(f+=r*c)>>>16,f&=65535,l+=(f+=i*u)>>>16,f&=65535,l+=(f+=o*a)>>>16,f&=65535,l+=e*c+r*u+i*a+o*s,l&=65535,n.fromBits(h<<16|p,l<<16|f)},n.prototype.div=function(t){if(t.isZero())throw Error("division by zero");if(this.isZero())return n.ZERO;if(this.equals(n.MIN_VALUE)){if(t.equals(n.ONE)||t.equals(n.NEG_ONE))return n.MIN_VALUE;if(t.equals(n.MIN_VALUE))return n.ONE;var e=this.shiftRight(1).div(t).shiftLeft(1);if(e.equals(n.ZERO))return t.isNegative()?n.ONE:n.NEG_ONE;var r=this.subtract(t.multiply(e));return e.add(r.div(t))}if(t.equals(n.MIN_VALUE))return n.ZERO;if(this.isNegative())return t.isNegative()?this.negate().div(t.negate()):this.negate().div(t).negate();if(t.isNegative())return this.div(t.negate()).negate();var i=n.ZERO;for(r=this;r.greaterThanOrEqual(t);){e=Math.max(1,Math.floor(r.toNumber()/t.toNumber()));for(var o=Math.ceil(Math.log(e)/Math.LN2),s=o<=48?1:Math.pow(2,o-48),a=n.fromNumber(e),u=a.multiply(t);u.isNegative()||u.greaterThan(r);)e-=s,u=(a=n.fromNumber(e)).multiply(t);a.isZero()&&(a=n.ONE),i=i.add(a),r=r.subtract(u)}return i},n.prototype.modulo=function(t){return this.subtract(this.div(t).multiply(t))},n.prototype.not=function(){return n.fromBits(~this.low_,~this.high_)},n.prototype.and=function(t){return n.fromBits(this.low_&t.low_,this.high_&t.high_)},n.prototype.or=function(t){return n.fromBits(this.low_|t.low_,this.high_|t.high_)},n.prototype.xor=function(t){return n.fromBits(this.low_^t.low_,this.high_^t.high_)},n.prototype.shiftLeft=function(t){if(0===(t&=63))return this;var e=this.low_;if(t<32){var r=this.high_;return n.fromBits(e<<t,r<<t|e>>>32-t)}return n.fromBits(0,e<<t-32)},n.prototype.shiftRight=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var r=this.low_;return n.fromBits(r>>>t|e<<32-t,e>>t)}return n.fromBits(e>>t-32,e>=0?0:-1)},n.prototype.shiftRightUnsigned=function(t){if(0===(t&=63))return this;var e=this.high_;if(t<32){var r=this.low_;return n.fromBits(r>>>t|e<<32-t,e>>>t)}return 32===t?n.fromBits(e,0):n.fromBits(e>>>t-32,0)},n.fromInt=function(t){if(-128<=t&&t<128){var e=n.INT_CACHE_[t];if(e)return e}var r=new n(0|t,t<0?-1:0);return-128<=t&&t<128&&(n.INT_CACHE_[t]=r),r},n.fromNumber=function(t){return isNaN(t)||!isFinite(t)?n.ZERO:t<=-n.TWO_PWR_63_DBL_?n.MIN_VALUE:t+1>=n.TWO_PWR_63_DBL_?n.MAX_VALUE:t<0?n.fromNumber(-t).negate():new n(t%n.TWO_PWR_32_DBL_|0,t/n.TWO_PWR_32_DBL_|0)},n.fromBits=function(t,e){return new n(t,e)},n.fromString=function(t,e){if(0===t.length)throw Error("number format error: empty string");var r=e||10;if(r<2||36<r)throw Error("radix out of range: "+r);if("-"===t.charAt(0))return n.fromString(t.substring(1),r).negate();if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character: '+t);for(var i=n.fromNumber(Math.pow(r,8)),o=n.ZERO,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+a),r);if(a<8){var c=n.fromNumber(Math.pow(r,a));o=o.multiply(c).add(n.fromNumber(u))}else o=(o=o.multiply(i)).add(n.fromNumber(u))}return o},n.INT_CACHE_={},n.TWO_PWR_16_DBL_=65536,n.TWO_PWR_24_DBL_=1<<24,n.TWO_PWR_32_DBL_=n.TWO_PWR_16_DBL_*n.TWO_PWR_16_DBL_,n.TWO_PWR_31_DBL_=n.TWO_PWR_32_DBL_/2,n.TWO_PWR_48_DBL_=n.TWO_PWR_32_DBL_*n.TWO_PWR_16_DBL_,n.TWO_PWR_64_DBL_=n.TWO_PWR_32_DBL_*n.TWO_PWR_32_DBL_,n.TWO_PWR_63_DBL_=n.TWO_PWR_64_DBL_/2,n.ZERO=n.fromInt(0),n.ONE=n.fromInt(1),n.NEG_ONE=n.fromInt(-1),n.MAX_VALUE=n.fromBits(-1,2147483647),n.MIN_VALUE=n.fromBits(0,-2147483648),n.TWO_PWR_24_=n.fromInt(1<<24),t.exports=n,t.exports.Timestamp=n},function(t,e,r){"use strict";(function(e,n){var i="inspect",o=r(15),s=parseInt(16777215*Math.random(),10),a=new RegExp("^[0-9a-fA-F]{24}$");try{if(e&&e.from){var u=!0;i=r(3).inspect.custom||"inspect"}}catch(t){u=!1}for(var c=function t(e){if(e instanceof t)return e;if(!(this instanceof t))return new t(e);if(this._bsontype="ObjectID",null==e||"number"==typeof e)return this.id=this.generate(e),void(t.cacheHexString&&(this.__id=this.toString("hex")));var r=t.isValid(e);if(!r&&null!=e)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");if(r&&"string"==typeof e&&24===e.length&&u)return new t(o.toBuffer(e,"hex"));if(r&&"string"==typeof e&&24===e.length)return t.createFromHexString(e);if(null==e||12!==e.length){if(null!=e&&e.toHexString)return e;throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters")}this.id=e,t.cacheHexString&&(this.__id=this.toString("hex"))},l=[],f=0;f<256;f++)l[f]=(f<=15?"0":"")+f.toString(16);c.prototype.toHexString=function(){if(c.cacheHexString&&this.__id)return this.__id;var t="";if(!this.id||!this.id.length)throw new Error("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is ["+JSON.stringify(this.id)+"]");if(this.id instanceof p)return t=d(this.id),c.cacheHexString&&(this.__id=t),t;for(var e=0;e<this.id.length;e++)t+=l[this.id.charCodeAt(e)];return c.cacheHexString&&(this.__id=t),t},c.prototype.get_inc=function(){return c.index=(c.index+1)%16777215},c.prototype.getInc=function(){return this.get_inc()},c.prototype.generate=function(t){"number"!=typeof t&&(t=~~(Date.now()/1e3));var e=(void 0===n||1===n.pid?Math.floor(1e5*Math.random()):n.pid)%65535,r=this.get_inc(),i=o.allocBuffer(12);return i[3]=255&t,i[2]=t>>8&255,i[1]=t>>16&255,i[0]=t>>24&255,i[6]=255&s,i[5]=s>>8&255,i[4]=s>>16&255,i[8]=255&e,i[7]=e>>8&255,i[11]=255&r,i[10]=r>>8&255,i[9]=r>>16&255,i},c.prototype.toString=function(t){return this.id&&this.id.copy?this.id.toString("string"==typeof t?t:"hex"):this.toHexString()},c.prototype[i]=c.prototype.toString,c.prototype.toJSON=function(){return this.toHexString()},c.prototype.equals=function(t){return t instanceof c?this.toString()===t.toString():"string"==typeof t&&c.isValid(t)&&12===t.length&&this.id instanceof p?t===this.id.toString("binary"):"string"==typeof t&&c.isValid(t)&&24===t.length?t.toLowerCase()===this.toHexString():"string"==typeof t&&c.isValid(t)&&12===t.length?t===this.id:!(null==t||!(t instanceof c||t.toHexString))&&t.toHexString()===this.toHexString()},c.prototype.getTimestamp=function(){var t=new Date,e=this.id[3]|this.id[2]<<8|this.id[1]<<16|this.id[0]<<24;return t.setTime(1e3*Math.floor(e)),t},c.index=~~(16777215*Math.random()),c.createPk=function(){return new c},c.createFromTime=function(t){var e=o.toBuffer([0,0,0,0,0,0,0,0,0,0,0,0]);return e[3]=255&t,e[2]=t>>8&255,e[1]=t>>16&255,e[0]=t>>24&255,new c(e)};var h=[];for(f=0;f<10;)h[48+f]=f++;for(;f<16;)h[55+f]=h[87+f]=f++;var p=e,d=function(t){return t.toString("hex")};c.createFromHexString=function(t){if(void 0===t||null!=t&&24!==t.length)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");if(u)return new c(o.toBuffer(t,"hex"));for(var e=new p(12),r=0,n=0;n<24;)e[r++]=h[t.charCodeAt(n++)]<<4|h[t.charCodeAt(n++)];return new c(e)},c.isValid=function(t){return null!=t&&("number"==typeof t||("string"==typeof t?12===t.length||24===t.length&&a.test(t):t instanceof c||(t instanceof p||!!t.toHexString&&(12===t.id.length||24===t.id.length&&a.test(t.id)))))},Object.defineProperty(c.prototype,"generationTime",{enumerable:!0,get:function(){return this.id[3]|this.id[2]<<8|this.id[1]<<16|this.id[0]<<24},set:function(t){this.id[3]=255&t,this.id[2]=t>>8&255,this.id[1]=t>>16&255,this.id[0]=t>>24&255}}),t.exports=c,t.exports.ObjectID=c,t.exports.ObjectId=c}).call(this,r(1).Buffer,r(8))},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n;this._bsontype="BSONRegExp",this.pattern=t||"",this.options=e||"";for(var r=0;r<this.options.length;r++)if("i"!==this.options[r]&&"m"!==this.options[r]&&"x"!==this.options[r]&&"l"!==this.options[r]&&"s"!==this.options[r]&&"u"!==this.options[r])throw new Error("the regular expression options ["+this.options[r]+"] is not supported")}t.exports=n,t.exports.BSONRegExp=n},function(t,e,r){"use strict";(function(e){var n=e&&r(3).inspect.custom||"inspect";function i(t){if(!(this instanceof i))return new i(t);this._bsontype="Symbol",this.value=t}i.prototype.valueOf=function(){return this.value},i.prototype.toString=function(){return this.value},i.prototype[n]=function(){return this.value},i.prototype.toJSON=function(){return this.value},t.exports=i,t.exports.Symbol=i}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=function t(e,r){if(!(this instanceof t))return new t(e,r);this._bsontype="Code",this.code=e,this.scope=r};n.prototype.toJSON=function(){return{scope:this.scope,code:this.code}},t.exports=n,t.exports.Code=n},function(t,e,r){"use strict";var n=r(23),i=/^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,o=/^(\+|-)?(Infinity|inf)$/i,s=/^(\+|-)?NaN$/i,a=6176,u=[124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),c=[248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),l=[120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse(),f=/^([-+])?(\d+)?$/,h=r(15),p=function(t){return!isNaN(parseInt(t,10))},d=function(t){var e=n.fromNumber(1e9),r=n.fromNumber(0),i=0;if(!(t.parts[0]||t.parts[1]||t.parts[2]||t.parts[3]))return{quotient:t,rem:r};for(i=0;i<=3;i++)r=(r=r.shiftLeft(32)).add(new n(t.parts[i],0)),t.parts[i]=r.div(e).low_,r=r.modulo(e);return{quotient:t,rem:r}},y=function(t){this._bsontype="Decimal128",this.bytes=t};y.fromString=function(t){var e,r=!1,d=!1,v=!1,_=0,m=0,g=0,b=0,w=0,O=[0],S=0,A=0,E=0,$=0,j=0,x=0,N=[0,0],P=[0,0],k=0;if((t=t.trim()).length>=7e3)throw new Error(t+" not a valid Decimal128 string");var T=t.match(i),B=t.match(o),C=t.match(s);if(!T&&!B&&!C||0===t.length)throw new Error(t+" not a valid Decimal128 string");if(T&&T[4]&&void 0===T[2])throw new Error(t+" not a valid Decimal128 string");if("+"!==t[k]&&"-"!==t[k]||(r="-"===t[k++]),!p(t[k])&&"."!==t[k]){if("i"===t[k]||"I"===t[k])return new y(h.toBuffer(r?c:l));if("N"===t[k])return new y(h.toBuffer(u))}for(;p(t[k])||"."===t[k];)if("."!==t[k])S<34&&("0"!==t[k]||v)&&(v||(w=m),v=!0,O[A++]=parseInt(t[k],10),S+=1),v&&(g+=1),d&&(b+=1),m+=1,k+=1;else{if(d)return new y(h.toBuffer(u));d=!0,k+=1}if(d&&!m)throw new Error(t+" not a valid Decimal128 string");if("e"===t[k]||"E"===t[k]){var D=t.substr(++k).match(f);if(!D||!D[2])return new y(h.toBuffer(u));j=parseInt(D[0],10),k+=D[0].length}if(t[k])return new y(h.toBuffer(u));if(E=0,S){if($=S-1,_=g,0!==j&&1!==_)for(;"0"===t[w+_-1];)_-=1}else E=0,$=0,O[0]=0,g=1,S=1,_=0;for(j<=b&&b-j>16384?j=-6176:j-=b;j>6111;){if(($+=1)-E>34){var M=O.join("");if(M.match(/^0+$/)){j=6111;break}return new y(h.toBuffer(r?c:l))}j-=1}for(;j<-6176||S<g;){if(0===$){j=-6176,_=0;break}if(S<g?g-=1:$-=1,!(j<6111)){if((M=O.join("")).match(/^0+$/)){j=6111;break}return new y(h.toBuffer(r?c:l))}j+=1}if($-E+1<_&&"0"!==t[_]){var R=m;d&&-6176===j&&(w+=1,R+=1);var F=parseInt(t[w+$+1],10),I=0;if(F>=5&&(I=1,5===F))for(I=O[$]%2==1,x=w+$+2;x<R;x++)if(parseInt(t[x],10)){I=1;break}if(I)for(var L=$;L>=0&&++O[L]>9;L--)if(O[L]=0,0===L){if(!(j<6111))return new y(h.toBuffer(r?c:l));j+=1,O[L]=1}}if(N=n.fromNumber(0),P=n.fromNumber(0),0===_)N=n.fromNumber(0),P=n.fromNumber(0);else if($-E<17)for(L=E,P=n.fromNumber(O[L++]),N=new n(0,0);L<=$;L++)P=(P=P.multiply(n.fromNumber(10))).add(n.fromNumber(O[L]));else{for(L=E,N=n.fromNumber(O[L++]);L<=$-17;L++)N=(N=N.multiply(n.fromNumber(10))).add(n.fromNumber(O[L]));for(P=n.fromNumber(O[L++]);L<=$;L++)P=(P=P.multiply(n.fromNumber(10))).add(n.fromNumber(O[L]))}var U=function(t,e){if(!t&&!e)return{high:n.fromNumber(0),low:n.fromNumber(0)};var r=t.shiftRightUnsigned(32),i=new n(t.getLowBits(),0),o=e.shiftRightUnsigned(32),s=new n(e.getLowBits(),0),a=r.multiply(o),u=r.multiply(s),c=i.multiply(o),l=i.multiply(s);return a=a.add(u.shiftRightUnsigned(32)),u=new n(u.getLowBits(),0).add(c).add(l.shiftRightUnsigned(32)),{high:a=a.add(u.shiftRightUnsigned(32)),low:l=u.shiftLeft(32).add(new n(l.getLowBits(),0))}}(N,n.fromString("100000000000000000"));U.low=U.low.add(P),function(t,e){var r=t.high_>>>0,n=e.high_>>>0;return r<n||r===n&&t.low_>>>0<e.low_>>>0}(U.low,P)&&(U.high=U.high.add(n.fromNumber(1))),e=j+a;var V={low:n.fromNumber(0),high:n.fromNumber(0)};U.high.shiftRightUnsigned(49).and(n.fromNumber(1)).equals(n.fromNumber)?(V.high=V.high.or(n.fromNumber(3).shiftLeft(61)),V.high=V.high.or(n.fromNumber(e).and(n.fromNumber(16383).shiftLeft(47))),V.high=V.high.or(U.high.and(n.fromNumber(0x7fffffffffff)))):(V.high=V.high.or(n.fromNumber(16383&e).shiftLeft(49)),V.high=V.high.or(U.high.and(n.fromNumber(562949953421311)))),V.low=U.low,r&&(V.high=V.high.or(n.fromString("9223372036854775808")));var q=h.allocBuffer(16);return k=0,q[k++]=255&V.low.low_,q[k++]=V.low.low_>>8&255,q[k++]=V.low.low_>>16&255,q[k++]=V.low.low_>>24&255,q[k++]=255&V.low.high_,q[k++]=V.low.high_>>8&255,q[k++]=V.low.high_>>16&255,q[k++]=V.low.high_>>24&255,q[k++]=255&V.high.low_,q[k++]=V.high.low_>>8&255,q[k++]=V.high.low_>>16&255,q[k++]=V.high.low_>>24&255,q[k++]=255&V.high.high_,q[k++]=V.high.high_>>8&255,q[k++]=V.high.high_>>16&255,q[k++]=V.high.high_>>24&255,new y(q)};a=6176,y.prototype.toString=function(){for(var t,e,r,i,o,s,u=0,c=new Array(36),l=0;l<c.length;l++)c[l]=0;var f,h,p,y,v,_=0,m=!1,g={parts:new Array(4)},b=[];_=0;var w=this.bytes;if(i=w[_++]|w[_++]<<8|w[_++]<<16|w[_++]<<24,r=w[_++]|w[_++]<<8|w[_++]<<16|w[_++]<<24,e=w[_++]|w[_++]<<8|w[_++]<<16|w[_++]<<24,t=w[_++]|w[_++]<<8|w[_++]<<16|w[_++]<<24,_=0,{low:new n(i,r),high:new n(e,t)}.high.lessThan(n.ZERO)&&b.push("-"),(o=t>>26&31)>>3==3){if(30===o)return b.join("")+"Infinity";if(31===o)return"NaN";s=t>>15&16383,p=8+(t>>14&1)}else p=t>>14&7,s=t>>17&16383;if(f=s-a,g.parts[0]=(16383&t)+((15&p)<<14),g.parts[1]=e,g.parts[2]=r,g.parts[3]=i,0===g.parts[0]&&0===g.parts[1]&&0===g.parts[2]&&0===g.parts[3])m=!0;else for(v=3;v>=0;v--){var O=0,S=d(g);if(g=S.quotient,O=S.rem.low_)for(y=8;y>=0;y--)c[9*v+y]=O%10,O=Math.floor(O/10)}if(m)u=1,c[_]=0;else for(u=36,l=0;!c[_];)l++,u-=1,_+=1;if((h=u-1+f)>=34||h<=-7||f>0){for(b.push(c[_++]),(u-=1)&&b.push("."),l=0;l<u;l++)b.push(c[_++]);b.push("E"),h>0?b.push("+"+h):b.push(h)}else if(f>=0)for(l=0;l<u;l++)b.push(c[_++]);else{var A=u+f;if(A>0)for(l=0;l<A;l++)b.push(c[_++]);else b.push("0");for(b.push(".");A++<0;)b.push("0");for(l=0;l<u-Math.max(A-1,0);l++)b.push(c[_++])}return b.join("")},y.prototype.toJSON=function(){return{$numberDecimal:this.toString()}},t.exports=y,t.exports.Decimal128=y},function(t,e,r){"use strict";function n(){if(!(this instanceof n))return new n;this._bsontype="MinKey"}t.exports=n,t.exports.MinKey=n},function(t,e,r){"use strict";function n(){if(!(this instanceof n))return new n;this._bsontype="MaxKey"}t.exports=n,t.exports.MaxKey=n},function(t,e,r){"use strict";function n(t,e,r){if(!(this instanceof n))return new n(t,e,r);this._bsontype="DBRef",this.namespace=t,this.oid=e,this.db=r}n.prototype.toJSON=function(){return{$ref:this.namespace,$id:this.oid,$db:null==this.db?"":this.db}},t.exports=n,t.exports.DBRef=n},function(t,e,r){"use strict";t.exports=r(112)},function(t,e,r){"use strict";var n=r(1),i=n.Buffer;function o(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return i(t,e,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=n:(o(n,e),e.Buffer=s),o(i,s),s.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number");return i(t,e,r)},s.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=i(t);return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return i(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},function(t,e,r){"use strict";var n=r(63),i=r(19),o=r(12),s=r(47),a=r(27),u=r(64),c=r(65),l=r(20),f=r(0);
/*!
 * Object clone with Mongoose natives support.
 *
 * If options.minimize is true, creates a minimal data object. Empty objects and undefined values will not be cloned. This makes the data payload sent to MongoDB as small as possible.
 *
 * Functions are never cloned.
 *
 * @param {Object} obj the object to clone
 * @param {Object} options
 * @param {Boolean} isArrayChild true if cloning immediately underneath an array. Special case for minimize.
 * @return {Object} the cloned object
 * @api private
 */
function h(t,e,r){if(null==t)return t;if(Array.isArray(t))return function(t,e){for(var r=[],n=0,i=t.length;n<i;n++)r.push(h(t[n],e,!0));return r}(t,e);if(a(t))return e&&e._skipSingleNestedGetters&&t.$isSingleNested&&(e=Object.assign({},e,{getters:!1})),e&&e.json&&"function"==typeof t.toJSON?t.toJSON(e):t.toObject(e);if(t.constructor)switch(u(t.constructor)){case"Object":return p(t,e,r);case"Date":return new t.constructor(+t);case"RegExp":return n(t)}return t instanceof o?new o(t.id):c(t,"Decimal128")?e&&e.flattenDecimals?t.toJSON():i.fromString(t.toString()):!t.constructor&&l(t)?p(t,e,r):t[f.schemaTypeSymbol]?t.clone():e&&e.bson&&"function"==typeof t.toBSON?t:null!=t.valueOf?t.valueOf():p(t,e,r)}
/*!
 * ignore
 */
function p(t,e,r){var n=e&&e.minimize,i={},o=void 0;for(var a in t)if(!s.has(a)){var u=h(t[a],e);n&&void 0===u||(!1===n&&void 0===u?delete i[a]:(o||(o=!0),i[a]=u))}return n&&!r?o&&i:i}t.exports=h},function(t,e,r){"use strict";t.exports=new Set(["__proto__","constructor","prototype"])},function(t,e,r){"use strict";var n=r(49);
/*!
 * ignore
 */t.exports=function(t){var e=null!=this?this.path:null;return n(t,e)}},function(t,e,r){"use strict";var n=r(13);
/*!
 * Given a value, cast it to a boolean, or throw a `CastError` if the value
 * cannot be casted. `null` and `undefined` are considered valid.
 *
 * @param {Any} value
 * @param {String} [path] optional the path to set on the CastError
 * @return {Boolean|null|undefined}
 * @throws {CastError} if `value` is not one of the allowed values
 * @api private
 */t.exports=function(e,r){if(null==e)return e;if(t.exports.convertToTrue.has(e))return!0;if(t.exports.convertToFalse.has(e))return!1;throw new n("boolean",e,r)},t.exports.convertToTrue=new Set([!0,"true",1,"1","yes"]),t.exports.convertToFalse=new Set([!1,"false",0,"0","no"])},function(t,e,r){"use strict";(function(e){
/*!
 * Centralize this so we can more easily work around issues with people
 * stubbing out `process.nextTick()` in tests using sinon:
 * https://github.com/sinonjs/lolex#automatically-incrementing-mocked-time
 * See gh-6074
 */
t.exports=function(t){return e.nextTick(t)}}).call(this,r(8))},function(t,e,r){"use strict";e.schemaMixedSymbol=Symbol.for("mongoose:schema_mixed"),e.builtInMiddleware=Symbol.for("mongoose:built-in-middleware")},function(t,e,r){"use strict";(function(n){
/*!
 * Module dependencies.
 */
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r(18).EventEmitter,a=r(135),u=r(16),c=r(7),l=r(9),f=r(136),h=r(53),p=r(73),d=r(137),y=r(139),v=r(0).arrayParentSymbol,_=r(5),m=r(140),g=r(74),b=r(141),w=r(44),O=r(14).get().ReadPreference,S=r(51),A=r(3),E=r(2),$=r(142),j=void 0,x=r(143).middlewareFunctions,N=r(75).middlewareFunctions,P=x.concat(N).reduce(function(t,e){return t.add(e)},new Set),k=0;function T(t,e){if(!(this instanceof T))return new T(t,e);if(this.obj=t,this.paths={},this.aliases={},this.subpaths={},this.virtuals={},this.singleNestedPaths={},this.nested={},this.inherits={},this.callQueue=[],this._indexes=[],this.methods={},this.methodOptions={},this.statics={},this.tree={},this.query={},this.childSchemas=[],this.plugins=[],this.$id=++k,this.s={hooks:new a},this.options=this.defaultOptions(e),Array.isArray(t)){var r=!0,n=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.add(u)}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}}else t&&this.add(t);var c=t&&t._id&&E.isObject(t._id);!this.paths._id&&!this.options.noId&&this.options._id&&!c&&p(this),this.setupTimestamp(this.options.timestamps)}
/*!
 * Create virtual properties with alias field
 */
/*!
 * Inherit from EventEmitter.
 */
T.prototype=Object.create(s.prototype),T.prototype.constructor=T,T.prototype.instanceOfSchema=!0,
/*!
 * ignore
 */
Object.defineProperty(T.prototype,"$schemaType",{configurable:!1,enumerable:!1,writable:!0}),Object.defineProperty(T.prototype,"childSchemas",{configurable:!1,enumerable:!0,writable:!0}),T.prototype.obj,T.prototype.paths,T.prototype.tree,T.prototype.clone=function(){var t=this,e=new T({},this._userProvidedOptions);return e.base=this.base,e.obj=this.obj,e.options=E.clone(this.options),e.callQueue=this.callQueue.map(function(t){return t}),e.methods=E.clone(this.methods),e.methodOptions=E.clone(this.methodOptions),e.statics=E.clone(this.statics),e.query=E.clone(this.query),e.plugins=Array.prototype.slice.call(this.plugins),e._indexes=E.clone(this._indexes),e.s.hooks=this.s.hooks.clone(),e.tree=E.clone(this.tree),e.paths=E.clone(this.paths),e.nested=E.clone(this.nested),e.subpaths=E.clone(this.subpaths),e.singleNestedPaths=E.clone(this.singleNestedPaths),e.childSchemas=
/*!
 * ignore
 */
function(t){var e=[],r=!0,n=!1,i=void 0;try{for(var o,s=Object.keys(t.paths)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value,u=t.paths[a];(u.$isMongooseDocumentArray||u.$isSingleNested)&&e.push({schema:u.schema,model:u.caster})}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return e}
/*!
 * ignore
 */(e),e.virtuals=E.clone(this.virtuals),e.$globalPluginsApplied=this.$globalPluginsApplied,e.$isRootDiscriminator=this.$isRootDiscriminator,e.$implicitlyCreated=this.$implicitlyCreated,null!=this.discriminatorMapping&&(e.discriminatorMapping=Object.assign({},this.discriminatorMapping)),null!=this.discriminators&&(e.discriminators=Object.assign({},this.discriminators)),e.aliases=Object.assign({},this.aliases),e.on("init",function(e){return t.emit("init",e)}),e},T.prototype.pick=function(t,e){var r=new T({},e||this.options);if(!Array.isArray(t))throw new u('Schema#pick() only accepts an array argument, got "'+(void 0===t?"undefined":i(t))+'"');var n=!0,s=!1,a=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var f=c.value;if(this.nested[f])r.add(o({},f,_(this.tree,f)));else{var h=this.path(f);if(null==h)throw new u("Path `"+f+"` is not in the schema");r.add(o({},f,h))}}}catch(t){s=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(s)throw a}}return r},T.prototype.defaultOptions=function(t){t&&!1===t.safe&&(t.safe={w:0}),t&&t.safe&&0===t.safe.w&&(t.versionKey=!1),this._userProvidedOptions=null==t?{}:E.clone(t);var e=_(this,"base.options",{});return(t=E.options({strict:!("strict"in e)||e.strict,bufferCommands:!0,capped:!1,versionKey:"__v",discriminatorKey:"__t",minimize:!0,autoIndex:null,shardKey:null,read:null,validateBeforeSave:!0,noId:!1,_id:!0,noVirtualId:!1,id:!0,typeKey:"type",typePojoToMixed:!("typePojoToMixed"in e)||e.typePojoToMixed},E.clone(t))).read&&(t.read=O(t.read)),t},T.prototype.add=function(t,e){if(t instanceof T)return b(this,t),this;!1===t._id&&null==e&&(this.options._id=!1),e=e||"";for(var r=Object.keys(t),n=0;n<r.length;++n){var i=r[n],o=e+i;if(null==t[i])throw new TypeError("Invalid value for schema path `"+o+'`, got value "'+t[i]+'"');if("_id"!==i||!1!==t[i])if(t[i]instanceof h)this.virtual(t[i]);else{if(Array.isArray(t[i])&&1===t[i].length&&null==t[i][0])throw new TypeError("Invalid value for schema Array path `"+o+'`, got value "'+t[i][0]+'"');if(E.isPOJO(t[i])||t[i]instanceof l)if(Object.keys(t[i]).length<1)e&&(this.nested[e.substr(0,e.length-1)]=!0),this.path(o,t[i]);else if(!t[i][this.options.typeKey]||"type"===this.options.typeKey&&t[i].type.type)this.nested[o]=!0,this.add(t[i],o+".");else if(!this.options.typePojoToMixed&&E.isPOJO(t[i][this.options.typeKey])){e&&(this.nested[e.substr(0,e.length-1)]=!0);var s=new T(t[i][this.options.typeKey],{typePojoToMixed:!1}),a=Object.assign({},t[i],{type:s});this.path(e+i,a)}else e&&(this.nested[e.substr(0,e.length-1)]=!0),this.path(e+i,t[i]);else e&&(this.nested[e.substr(0,e.length-1)]=!0),this.path(e+i,t[i])}}return function(t,e){e=e||Object.keys(t.paths);var r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value,u=_(t.paths[a],"options");if(null!=u){var c=t.paths[a].path,l=u.alias;if(l){if("string"!=typeof l)throw new Error("Invalid value for alias option on "+c+", got "+l);t.aliases[l]=c,t.virtual(l).get(function(t){return function(){return"function"==typeof this.get?this.get(t):this[t]}}(c)).set(function(t){return function(e){return this.set(t,e)}}(c))}}}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}}(this,Object.keys(t).map(function(t){return e?e+t:t})),this},T.reserved=Object.create(null),T.prototype.reserved=T.reserved;var B=T.reserved;B.prototype=B.emit=B.on=B.once=B.listeners=B.removeListener=B.collection=B.db=B.errors=B.init=B.isModified=B.isNew=B.get=B.save=B.schema=B.toObject=B.validate=B.remove=B.populated=1;
/*!
 * Document keys to print warnings for
 */
var C={};
/*!
 * ignore
 */
function D(t){return/\.\d+/.test(t)?t.replace(/\.\d+\./g,".$.").replace(/\.\d+$/,".$"):t}
/*!
 * ignore
 */function M(t,e){var r=!0,n=!1,i=void 0;try{for(var o,s=Object.keys(t.paths)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;if(a.includes(".$*"))if(new RegExp("^"+a.replace(/\.\$\*/g,"\\.[^.]+")+"$").test(e))return t.paths[a]}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return null}
/*!
 * ignore. Deprecated re: #6405
 */
function R(t,e){var r=e.split(/\.(\d+)\.|\.(\d+)$/).filter(Boolean);if(r.length<2)return t.paths.hasOwnProperty(r[0])?t.paths[r[0]]:"adhocOrUndefined";var n=t.path(r[0]),i=!1;if(!n)return"adhocOrUndefined";for(var o=r.length-1,s=1;s<r.length;++s){i=!1;var a=r[s];if(s===o&&n&&!/\D/.test(a)){n=n.$isMongooseDocumentArray?n.$embeddedSchemaType:n instanceof j.Array?n.caster:void 0;break}if(/\D/.test(a)){if(!n||!n.schema){n=void 0;break}i="nested"===n.schema.pathType(a),n=n.schema.path(a)}else n instanceof j.Array&&s!==o&&(n=n.caster)}return t.subpaths[e]=n,n?"real":i?"nested":"adhocOrUndefined"}
/*!
 * ignore
 */C.increment="`increment` should not be used as a schema path name unless you have disabled versioning.",T.prototype.path=function(t,e){var r=D(t);if(void 0===e){var n=function(t,e,r){if(t.paths.hasOwnProperty(e))return t.paths[e];if(t.subpaths.hasOwnProperty(r))return t.subpaths[r];if(t.singleNestedPaths.hasOwnProperty(r))return t.singleNestedPaths[r];return null}(this,t,r);if(null!=n)return n;var o=M(this,t);return null!=o?o:null!=(n=this.hasMixedParent(r))?n:/\.\d+\.?.*$/.test(t)?function(t,e){return R(t,e),t.subpaths[e]}(this,t):void 0}if(B[t])throw new Error("`"+t+"` may not be used as a schema pathname");C[t]&&console.log("WARN: "+C[t]),"object"===(void 0===e?"undefined":i(e))&&E.hasUserDefinedProperty(e,"ref")&&$(e.ref,t);var s=t.split(/\./),a=s.pop(),u=this.tree;s.forEach(function(e,r){if(u[e]||(u[e]={}),"object"!==i(u[e])){var n="Cannot set nested path `"+t+"`. Parent path `"+s.slice(0,r).concat([e]).join(".")+"` already set to type "+u[e].name+".";throw new Error(n)}u=u[e]}),u[a]=E.clone(e),this.paths[t]=this.interpretAsType(t,e,this.options);var l=this.paths[t];if(l.$isSchemaMap){var f=t+".$*",h={type:{}};if(E.hasUserDefinedProperty(e,"of"))h=E.isPOJO(e.of)&&Object.keys(e.of).length>0&&!E.hasUserDefinedProperty(e.of,this.options.typeKey)?new T(e.of):e.of;this.paths[f]=this.interpretAsType(f,h,this.options),l.$__schemaType=this.paths[f]}if(l.$isSingleNested){for(var p in l.schema.paths)this.singleNestedPaths[t+"."+p]=l.schema.paths[p];for(var d in l.schema.singleNestedPaths)this.singleNestedPaths[t+"."+d]=l.schema.singleNestedPaths[d];for(var y in l.schema.subpaths)this.singleNestedPaths[t+"."+y]=l.schema.subpaths[y];Object.defineProperty(l.schema,"base",{configurable:!0,enumerable:!1,writable:!1,value:this.base}),l.caster.base=this.base,this.childSchemas.push({schema:l.schema,model:l.caster})}else l.$isMongooseDocumentArray&&(Object.defineProperty(l.schema,"base",{configurable:!0,enumerable:!1,writable:!1,value:this.base}),l.casterConstructor.base=this.base,this.childSchemas.push({schema:l.schema,model:l.casterConstructor}));if(l.$isMongooseArray&&l.caster instanceof c){for(var v=t,_=l,m=[];_.$isMongooseArray;)v+=".$",(_=_.$isMongooseDocumentArray?_.$embeddedSchemaType.clone():_.caster.clone()).path=v,m.push(_);var g=!0,b=!1,w=void 0;try{for(var O,S=m[Symbol.iterator]();!(g=(O=S.next()).done);g=!0){var A=O.value;this.subpaths[A.path]=A}}catch(t){b=!0,w=t}finally{try{!g&&S.return&&S.return()}finally{if(b)throw w}}}if(l.$isMongooseDocumentArray){var j=!0,x=!1,N=void 0;try{for(var P,k=Object.keys(l.schema.paths)[Symbol.iterator]();!(j=(P=k.next()).done);j=!0){var F=P.value;this.subpaths[t+"."+F]=l.schema.paths[F],l.schema.paths[F].$isUnderneathDocArray=!0}}catch(t){x=!0,N=t}finally{try{!j&&k.return&&k.return()}finally{if(x)throw N}}var I=!0,L=!1,U=void 0;try{for(var V,q=Object.keys(l.schema.subpaths)[Symbol.iterator]();!(I=(V=q.next()).done);I=!0){var W=V.value;this.subpaths[t+"."+W]=l.schema.subpaths[W],l.schema.subpaths[W].$isUnderneathDocArray=!0}}catch(t){L=!0,U=t}finally{try{!I&&q.return&&q.return()}finally{if(L)throw U}}var H=!0,Y=!1,z=void 0;try{for(var K,Q=Object.keys(l.schema.singleNestedPaths)[Symbol.iterator]();!(H=(K=Q.next()).done);H=!0){var J=K.value;this.subpaths[t+"."+J]=l.schema.singleNestedPaths[J],l.schema.singleNestedPaths[J].$isUnderneathDocArray=!0}}catch(t){Y=!0,z=t}finally{try{!H&&Q.return&&Q.return()}finally{if(Y)throw z}}}return this},Object.defineProperty(T.prototype,"base",{configurable:!0,enumerable:!1,writable:!0,value:null}),T.prototype.interpretAsType=function(t,e,r){if(e instanceof c)return e;var o=null!=this.base?this.base.Schema.Types:T.Types;if(!(E.isPOJO(e)||e instanceof l)&&"Object"!==E.getFunctionName(e.constructor)){var s=e;(e={})[r.typeKey]=s}var a=!e[r.typeKey]||"type"===r.typeKey&&e.type.type?{}:e[r.typeKey],u=void 0;if(E.isPOJO(a)||"mixed"===a)return new o.Mixed(t,e);if(Array.isArray(a)||Array===a||"array"===a){var f=Array===a||"array"===a?e.cast:a[0];if(f&&f.instanceOfSchema)return new o.DocumentArray(t,f,e);if(f&&f[r.typeKey]&&f[r.typeKey].instanceOfSchema)return new o.DocumentArray(t,f[r.typeKey],e,f);if(Array.isArray(f))return new o.Array(t,this.interpretAsType(t,f,r),e);if("string"==typeof f)f=o[f.charAt(0).toUpperCase()+f.substring(1)];else if(f&&(!f[r.typeKey]||"type"===r.typeKey&&f.type.type)&&E.isPOJO(f)){if(Object.keys(f).length){var h={minimize:r.minimize};r.typeKey&&(h.typeKey=r.typeKey),r.hasOwnProperty("strict")&&(h.strict=r.strict),r.hasOwnProperty("typePojoToMixed")&&(h.typePojoToMixed=r.typePojoToMixed);var p=new T(f,h);return p.$implicitlyCreated=!0,new o.DocumentArray(t,p,e)}return new o.Array(t,o.Mixed,e)}if(f&&(u="string"==typeof(a=!f[r.typeKey]||"type"===r.typeKey&&f.type.type?f:f[r.typeKey])?a:a.schemaName||E.getFunctionName(a),!o.hasOwnProperty(u)))throw new TypeError("Invalid schema configuration: `"+u+"` is not a valid type within the array `"+t+"`.See http://bit.ly/mongoose-schematypes for a list of valid schema types.");return new o.Array(t,f||o.Mixed,e,r)}if(a&&a.instanceOfSchema)return new o.Embedded(a,t,e);if((u=n.isBuffer(a)?"Buffer":"function"==typeof a||"object"===(void 0===a?"undefined":i(a))?a.schemaName||E.getFunctionName(a):null==a?""+a:a.toString())&&(u=u.charAt(0).toUpperCase()+u.substring(1)),"ObjectID"===u&&(u="ObjectId"),null==o[u])throw new TypeError("Invalid schema configuration: `"+u+"` is not a valid type at path `"+t+"`. See http://bit.ly/mongoose-schematypes for a list of valid schema types.");return new o[u](t,e)},T.prototype.eachPath=function(t){for(var e=Object.keys(this.paths),r=e.length,n=0;n<r;++n)t(e[n],this.paths[e[n]]);return this},T.prototype.requiredPaths=function(t){if(this._requiredpaths&&!t)return this._requiredpaths;for(var e=Object.keys(this.paths),r=e.length,n=[];r--;){var i=e[r];this.paths[i].isRequired&&n.push(i)}return this._requiredpaths=n,this._requiredpaths},T.prototype.indexedPaths=function(){return this._indexedpaths?this._indexedpaths:(this._indexedpaths=this.indexes(),this._indexedpaths)},T.prototype.pathType=function(t){var e=D(t);return this.paths.hasOwnProperty(t)?"real":this.virtuals.hasOwnProperty(t)?"virtual":this.nested.hasOwnProperty(t)?"nested":this.subpaths.hasOwnProperty(e)||this.subpaths.hasOwnProperty(t)?"real":this.singleNestedPaths.hasOwnProperty(e)||this.singleNestedPaths.hasOwnProperty(t)?"real":null!=M(this,t)?"real":/\.\d+\.|\.\d+$/.test(t)?R(this,t):"adhocOrUndefined"},T.prototype.hasMixedParent=function(t){var e=t.split(/\./g);t="";for(var r=0;r<e.length;++r)if((t=r>0?t+"."+e[r]:e[r])in this.paths&&this.paths[t]instanceof j.Mixed)return this.paths[t];return null},T.prototype.setupTimestamp=function(t){var e=this.childSchemas.find(function(t){return!!t.schema.options.timestamps});if(t||e){var r=g(t,"createdAt"),n=g(t,"updatedAt"),i=null!=t&&t.hasOwnProperty("currentTime")?t.currentTime:null,o={};this.$timestamps={createdAt:r,updatedAt:n},n&&!this.paths[n]&&(o[n]=Date),r&&!this.paths[r]&&(o[r]=Date),this.add(o),this.pre("save",function(t){var e=_(this,"$__.saveOptions.timestamps");if(!1===e)return t();var o=null!=e&&!1===e.updatedAt,s=null!=e&&!1===e.createdAt,a=null!=i?i():(this.ownerDocument?this.ownerDocument():this).constructor.base.now(),u=this._id&&this._id.auto;if(!s&&r&&!this.get(r)&&this.isSelected(r)&&this.set(r,u?this._id.getTimestamp():a),!o&&n&&(this.isNew||this.isModified())){var c=a;this.isNew&&(null!=r?c=this.$__getValue(r):u&&(c=this._id.getTimestamp())),this.set(n,c)}t()}),this.methods.initializeTimestamps=function(){var t=null!=i?i():this.constructor.base.now();return r&&!this.get(r)&&this.set(r,t),n&&!this.get(n)&&this.set(n,t),this},a[S.builtInMiddleware]=!0;var s={query:!0,model:!1};this.pre("findOneAndUpdate",s,a),this.pre("replaceOne",s,a),this.pre("update",s,a),this.pre("updateOne",s,a),this.pre("updateMany",s,a)}function a(t){var e=null!=i?i():this.model.base.now();y(e,r,n,this.getUpdate(),this.options,this.schema),d(e,this.getUpdate(),this.model.schema),t()}},T.prototype.queue=function(t,e){return this.callQueue.push([t,e]),this},T.prototype.pre=function(t){if(t instanceof RegExp){var e=Array.prototype.slice.call(arguments,1),r=!0,n=!1,i=void 0;try{for(var o,s=P[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;t.test(a)&&this.pre.apply(this,[a].concat(e))}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return this}if(Array.isArray(t)){var u=Array.prototype.slice.call(arguments,1),c=!0,l=!1,f=void 0;try{for(var h,p=t[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var d=h.value;this.pre.apply(this,[d].concat(u))}}catch(t){l=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw f}}return this}return this.s.hooks.pre.apply(this.s.hooks,arguments),this},T.prototype.post=function(t){if(t instanceof RegExp){var e=Array.prototype.slice.call(arguments,1),r=!0,n=!1,i=void 0;try{for(var o,s=P[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;t.test(a)&&this.post.apply(this,[a].concat(e))}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return this}if(Array.isArray(t)){var u=Array.prototype.slice.call(arguments,1),c=!0,l=!1,f=void 0;try{for(var h,p=t[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var d=h.value;this.post.apply(this,[d].concat(u))}}catch(t){l=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw f}}return this}return this.s.hooks.post.apply(this.s.hooks,arguments),this},T.prototype.plugin=function(t,e){if("function"!=typeof t)throw new Error('First param to `schema.plugin()` must be a function, got "'+(void 0===t?"undefined":i(t))+'"');if(e&&e.deduplicate)for(var r=0;r<this.plugins.length;++r)if(this.plugins[r].fn===t)return this;return this.plugins.push({fn:t,opts:e}),t(this,e),this},T.prototype.method=function(t,e,r){if("string"!=typeof t)for(var n in t)this.methods[n]=t[n],this.methodOptions[n]=E.clone(r);else this.methods[t]=e,this.methodOptions[t]=E.clone(r);return this},T.prototype.static=function(t,e){if("string"!=typeof t)for(var r in t)this.statics[r]=t[r];else this.statics[t]=e;return this},T.prototype.index=function(t,e){return t||(t={}),e||(e={}),e.expires&&E.expires(e),this._indexes.push([t,e]),this},T.prototype.set=function(t,e,r){if(1===arguments.length)return this.options[t];switch(t){case"read":this.options[t]=O(e,r),this._userProvidedOptions[t]=this.options[t];break;case"safe":F(this.options,e),this._userProvidedOptions[t]=this.options[t];break;case"timestamps":this.setupTimestamp(e),this.options[t]=e,this._userProvidedOptions[t]=this.options[t];break;default:this.options[t]=e,this._userProvidedOptions[t]=this.options[t]}return this};
/*!
 * ignore
 */
var F=A.deprecate(function(t,e){t.safe=!1===e?{w:0}:e},"Mongoose: The `safe` option for schemas is deprecated. Use the `writeConcern` option instead: http://bit.ly/mongoose-write-concern");T.prototype.get=function(t){return this.options[t]};var I="2d 2dsphere hashed text".split(" ");
/*!
 * ignore
 */
function L(t,e){for(var r=e.split("."),n=r.pop(),i=t.tree,o=0;o<r.length;++o)i=i[r[o]];delete i[n]}
/*!
 * ignore
 */
function U(t){return t.startsWith("$[")&&t.endsWith("]")}
/*!
 * Module exports.
 */Object.defineProperty(T,"indexTypes",{get:function(){return I},set:function(){throw new Error("Cannot overwrite Schema.indexTypes")}}),T.prototype.indexes=function(){return m(this)},T.prototype.virtual=function(t,e){var r=this;if(t instanceof h)return this.virtual(t.path,t.options);if(e=new f(e),E.hasUserDefinedProperty(e,["ref","refPath"])){if(null==e.localField)throw new Error("Reference virtuals require `localField` option");if(null==e.foreignField)throw new Error("Reference virtuals require `foreignField` option");this.pre("init",function(r){if(w.has(t,r)){var n=w.get(t,r);this.$$populatedVirtuals||(this.$$populatedVirtuals={}),e.justOne||e.count?this.$$populatedVirtuals[t]=Array.isArray(n)?n[0]:n:this.$$populatedVirtuals[t]=Array.isArray(n)?n:null==n?[]:[n],w.unset(t,r)}});var n=this.virtual(t);return n.options=e,n.get(function(e){return this.$$populatedVirtuals&&this.$$populatedVirtuals.hasOwnProperty(t)?this.$$populatedVirtuals[t]:null!=e?e:void 0}).set(function(r){this.$$populatedVirtuals||(this.$$populatedVirtuals={}),e.justOne||e.count?(this.$$populatedVirtuals[t]=Array.isArray(r)?r[0]:r,"object"!==i(this.$$populatedVirtuals[t])&&(this.$$populatedVirtuals[t]=e.count?r:null)):(this.$$populatedVirtuals[t]=Array.isArray(r)?r:null==r?[]:[r],this.$$populatedVirtuals[t]=this.$$populatedVirtuals[t].filter(function(t){return t&&"object"===(void 0===t?"undefined":i(t))}))})}var o=this.virtuals,s=t.split(".");if("real"===this.pathType(t))throw new Error('Virtual path "'+t+'" conflicts with a real path in the schema');o[t]=s.reduce(function(r,n,i){return r[n]||(r[n]=i===s.length-1?new h(e,t):{}),r[n]},this.tree);for(var a=s[0],u=0;u<s.length-1;++u){if(null!=this.paths[a]&&this.paths[a].$isMongooseDocumentArray)if("break"===function(){var t=s.slice(u+1).join(".");return r.paths[a].schema.virtual(t).get(function(e,r,n){var i=n.__parentArray[v],o=a+"."+n.__index+"."+t;return i.get(o)}),"break"}())break;a+="."+s[u+1]}return o[t]},T.prototype.virtualpath=function(t){return this.virtuals.hasOwnProperty(t)?this.virtuals[t]:null},T.prototype.remove=function(t){return"string"==typeof t&&(t=[t]),Array.isArray(t)&&t.forEach(function(t){if(null!=this.path(t)||this.nested[t]){if(this.nested[t]){var e=Object.keys(this.paths).concat(Object.keys(this.nested)),r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;a.startsWith(t+".")&&(delete this.paths[a],delete this.nested[a],L(this,a))}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return delete this.nested[t],void L(this,t)}delete this.paths[t],L(this,t)}},this),this},T.prototype.loadClass=function(t,e){return t===Object.prototype||t===Function.prototype||t.prototype.hasOwnProperty("$isMongooseModelPrototype")?this:(this.loadClass(Object.getPrototypeOf(t)),e||Object.getOwnPropertyNames(t).forEach(function(e){if(!e.match(/^(length|name|prototype)$/)){var r=Object.getOwnPropertyDescriptor(t,e);"function"==typeof r.value&&this.static(e,r.value)}},this),Object.getOwnPropertyNames(t.prototype).forEach(function(r){if(!r.match(/^(constructor)$/)){var n=Object.getOwnPropertyDescriptor(t.prototype,r);e||"function"==typeof n.value&&this.method(r,n.value),"function"==typeof n.get&&this.virtual(r).get(n.get),"function"==typeof n.set&&this.virtual(r).set(n.set)}},this),this)},
/*!
 * ignore
 */
T.prototype._getSchema=function(t){var e=this.path(t),r=[];if(e)return e.$fullPath=t,e;for(var n=t.split("."),i=0;i<n.length;++i)("$"===n[i]||U(n[i]))&&(n[i]="0");return function t(e,n){for(var i=e.length+1,o=void 0,s=void 0;i--;)if(s=e.slice(0,i).join("."),o=n.path(s)){if(r.push(s),o.caster){if(o.caster instanceof j.Mixed)return o.caster.$fullPath=r.join("."),o.caster;if(i!==e.length&&o.schema){var a=void 0;return"$"===e[i]||U(e[i])?i+1===e.length?o:((a=t(e.slice(i+1),o.schema))&&(a.$isUnderneathDocArray=a.$isUnderneathDocArray||!o.schema.$isSingleNested),a):((a=t(e.slice(i),o.schema))&&(a.$isUnderneathDocArray=a.$isUnderneathDocArray||!o.schema.$isSingleNested),a)}}return o.$fullPath=r.join("."),o}}(n,this)},
/*!
 * ignore
 */
T.prototype._getPathType=function(t){if(this.path(t))return"real";return function t(e,r){for(var n=e.length+1,i=void 0,o=void 0;n--;){if(o=e.slice(0,n).join("."),i=r.path(o))return i.caster?i.caster instanceof j.Mixed?{schema:i,pathType:"mixed"}:n!==e.length&&i.schema?"$"===e[n]||U(e[n])?n===e.length-1?{schema:i,pathType:"nested"}:t(e.slice(n+1),i.schema):t(e.slice(n),i.schema):{schema:i,pathType:i.$isSingleNested?"nested":"array"}:{schema:i,pathType:"real"};if(n===e.length&&r.nested[o])return{schema:r,pathType:"nested"}}return{schema:i||r,pathType:"undefined"}}(t.split("."),this)},t.exports=e=T,T.Types=j=r(54),
/*!
 * ignore
 */
e.ObjectId=j.ObjectId}).call(this,r(1).Buffer)},function(t,e,r){"use strict";function n(t,e){this.path=e,this.getters=[],this.setters=[],this.options=Object.assign({},t)}n.prototype._applyDefaultGetters=function(){if(!(this.getters.length>0||this.setters.length>0)){var t="$"+this.path;this.getters.push(function(){return this[t]}),this.setters.push(function(e){this[t]=e})}},
/*!
 * ignore
 */
n.prototype.clone=function(){var t=new n(this.options,this.path);return t.getters=[].concat(this.getters),t.setters=[].concat(this.setters),t},n.prototype.get=function(t){return this.getters.push(t),this},n.prototype.set=function(t){return this.setters.push(t),this},n.prototype.applyGetters=function(t,e){for(var r=t,n=this.getters.length-1;n>=0;n--)r=this.getters[n].call(e,r,this,e);return r},n.prototype.applySetters=function(t,e){for(var r=t,n=this.setters.length-1;n>=0;n--)r=this.setters[n].call(e,r,this,e);return r},
/*!
 * exports
 */
t.exports=n},function(t,e,r){"use strict";
/*!
 * Module exports.
 */e.String=r(144),e.Number=r(77),e.Boolean=r(148),e.DocumentArray=r(149),e.Embedded=r(155),e.Array=r(55),e.Buffer=r(157),e.Date=r(159),e.ObjectId=r(162),e.Mixed=r(31),e.Decimal128=e.Decimal=r(164),e.Map=r(166),e.Oid=e.ObjectId,e.Object=e.Mixed,e.Bool=e.Boolean,e.ObjectID=e.ObjectId},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(48),i=r(71),o=r(16),s=r(150),a=r(7),u=a.CastError,c=r(31),l=r(151),f=r(152),h=r(5),p=r(79),d=r(3),y=r(2),v=r(32).castToNumber,_=r(80),m=r(56),g=void 0,b=void 0,w=Symbol("mongoose#isNestedArray");function O(t,e,n,i){b||(b=r(57).Embedded);var o="type";if(i&&i.typeKey&&(o=i.typeKey),this.schemaOptions=i,e){var s={};y.isPOJO(e)&&(e[o]?(delete(s=y.clone(e))[o],e=e[o]):e=c),e===Object&&(e=c);var u="string"==typeof e?e:y.getFunctionName(e),l=r(54),f=l.hasOwnProperty(u)?l[u]:e;this.casterConstructor=f,this.casterConstructor instanceof O&&(this.casterConstructor[w]=!0),"function"!=typeof f||f.$isArraySubdocument||f.$isSchemaMap?this.caster=f:this.caster=new f(null,s),this.$embeddedSchemaType=this.caster,this.caster instanceof b||(this.caster.path=t)}this.$isMongooseArray=!0,a.call(this,t,n,"Array");var h=void 0,p=void 0;if(null!=this.defaultValue&&(h=this.defaultValue,p="function"==typeof h),!("defaultValue"in this)||void 0!==this.defaultValue){var d=function(){var t=[];return p?t=h.call(this):null!=h&&(t=t.concat(h)),t};d.$runBeforeSetters=!0,this.default(d)}}O.schemaName="Array",O.options={castNonArrays:!0},O.defaultOptions={},O.set=a.set,
/*!
 * Inherits from SchemaType.
 */
O.prototype=Object.create(a.prototype),O.prototype.constructor=O,O.prototype.OptionsConstructor=s,
/*!
 * ignore
 */
O._checkRequired=a.prototype.checkRequired,O.checkRequired=a.checkRequired,O.prototype.checkRequired=function(t,e){return a._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():O.checkRequired())(t)},O.prototype.enum=function(){for(var t=this;;){var e=h(t,"caster.instance");if("Array"!==e){if("String"!==e&&"Number"!==e)throw new Error("`enum` can only be set on an array of strings or numbers , not "+e);break}t=t.caster}return t.caster.enum.apply(t.caster,arguments),this},O.prototype.applyGetters=function(t,e){return this.caster.options&&this.caster.options.ref?t:a.prototype.applyGetters.call(this,t,e)},O.prototype._applySetters=function(t,e,r,n){if(this.casterConstructor instanceof O&&O.options.castNonArrays&&!this[w]){for(var i=0,o=this;null!=o&&o instanceof O&&!o.$isMongooseDocumentArray;)++i,o=o.casterConstructor;if(null!=t&&t.length>0){var s=l(t);if(s.min===s.max&&s.max<i)for(var u=s.max;u<i;++u)t=[t]}}return a.prototype._applySetters.call(this,t,e,r,n)},O.prototype.cast=function(t,e,n){g||(g=r(57).Array);var i=void 0,s=void 0;if(Array.isArray(t)){if(!t.length&&e){var a=e.schema.indexedPaths(),l=this.path;for(i=0,s=a.length;i<s;++i){var f=a[i][0][l];if("2dsphere"===f||"2d"===f)return}var h=this.path.endsWith(".coordinates")?this.path.substr(0,this.path.lastIndexOf(".")):null;if(null!=h)for(i=0,s=a.length;i<s;++i){if("2dsphere"===a[i][0][h])return}}if(t&&t.isMongooseArray?t&&t.isMongooseArray&&(t=new g(t,this.path,e)):t=new g(t,this.path,e),null!=e&&null!=e.$__&&e.populated(this.path))return t;if(this.caster&&this.casterConstructor!==c)try{for(i=0,s=t.length;i<s;i++){if("Number"===this.caster.instance&&void 0===t[i])throw new o("Mongoose number arrays disallow storing undefined");t[i]=this.caster.cast(t[i],e,n)}}catch(e){throw new u("["+e.kind+"]",d.inspect(t),this.path,e,this)}return t}if(n||O.options.castNonArrays)return e&&n&&e.markModified(this.path),this.cast([t],e,n);throw new u("Array",d.inspect(t),this.path,null,this)},
/*!
 * Ignore
 */
O.prototype.discriminator=function(t,e){for(var r=this;r.$isMongooseArray&&!r.$isMongooseDocumentArray;)if(null==(r=r.casterConstructor)||"function"==typeof r)throw new o("You can only add an embedded discriminator on a document array, "+this.path+" is a plain array");return r.discriminator(t,e)},
/*!
 * ignore
 */
O.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.path,this.caster,t,this.schemaOptions);return e.validators=this.validators.slice(),e},O.prototype.castForQuery=function(t,e){var r=this,n=void 0,i=void 0;if(2===arguments.length){if(!(n=this.$conditionalHandlers[t]))throw new Error("Can't use "+t+" with Array.");i=n.call(this,e)}else{i=t;var o=this.casterConstructor;if(i&&o.discriminators&&o.schema&&o.schema.options&&o.schema.options.discriminatorKey)if("string"==typeof i[o.schema.options.discriminatorKey]&&o.discriminators[i[o.schema.options.discriminatorKey]])o=o.discriminators[i[o.schema.options.discriminatorKey]];else{var s=m(o,i[o.schema.options.discriminatorKey]);s&&(o=s)}var a=this.casterConstructor.prototype,u=a&&(a.castForQuery||a.cast);!u&&o.castForQuery&&(u=o.castForQuery);var c=this.caster;Array.isArray(i)?(this.setters.reverse().forEach(function(t){i=t.call(r,i,r)}),i=i.map(function(t){return y.isObject(t)&&t.$elemMatch?t:u?t=u.call(c,t):null!=t?t=new o(t):t})):u?i=u.call(c,i):null!=i&&(i=new o(i))}return i};var S=O.prototype.$conditionalHandlers={};S.$all=function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){if(y.isObject(t)){var e={};return e[this.path]=t,f(this.casterConstructor.schema,e)[this.path]}return t},this),this.castForQuery(t)},S.$options=String,S.$elemMatch=function(t){for(var e=Object.keys(t),r=e.length,n=0;n<r;++n){var i=e[n],o=t[i];p(i)&&null!=o&&(t[i]=this.castForQuery(i,o))}var s=h(this,"casterConstructor.schema.options.discriminatorKey"),a=h(this,"casterConstructor.schema.discriminators",{});return null!=s&&null!=t[s]&&null!=a[t[s]]?f(a[t[s]],t):f(this.casterConstructor.schema,t)},S.$geoIntersects=_.cast$geoIntersects,S.$or=S.$and=function(t){if(!Array.isArray(t))throw new TypeError("conditional $or/$and require array");for(var e=[],r=0;r<t.length;++r)e.push(f(this.casterConstructor.schema,t[r]));return e},S.$near=S.$nearSphere=_.cast$near,S.$within=S.$geoWithin=_.cast$within,S.$size=S.$minDistance=S.$maxDistance=v,S.$exists=n,S.$type=i,S.$eq=S.$gt=S.$gte=S.$lt=S.$lte=S.$ne=S.$regex=O.prototype.castForQuery,S.$nin=a.prototype.$conditionalHandlers.$nin,S.$in=a.prototype.$conditionalHandlers.$in,
/*!
 * Module exports.
 */
t.exports=O},function(t,e,r){"use strict";
/*!
* returns discriminator by discriminatorMapping.value
*
* @param {Model} model
* @param {string} value
*/t.exports=function(t,e){var r=null;if(!t.discriminators)return r;for(var n in t.discriminators){var i=t.discriminators[n];if(i.schema&&i.schema.discriminatorMapping&&i.schema.discriminatorMapping.value==e){r=i;break}}return r}},function(t,e,r){"use strict";
/*!
 * Module exports.
 */e.Array=r(81),e.Buffer=r(84),e.Document=e.Embedded=r(25),e.DocumentArray=r(17),e.Decimal128=r(19),e.ObjectId=r(12),e.Map=r(86),e.Subdocument=r(88)},function(t,e,r){"use strict";var n=r(0).documentSchemaSymbol,i=r(5),o=r(0).getSymbol,s=r(2),a=void 0;
/*!
 * Compiles schemas.
 */
function u(t,e,n,i){a=a||r(6);for(var o=Object.keys(t),u=o.length,l=void 0,f=void 0,h=0;h<u;++h){l=t[f=o[h]],c(f,s.isPOJO(l)&&Object.keys(l).length&&(!l[i.typeKey]||"type"===i.typeKey&&l.type.type)?l:null,e,n,o,i)}}
/*!
 * Defines the accessor named prop on the incoming prototype.
 */function c(t,e,c,l,f,h){a=a||r(6);var p=(l?l+".":"")+t;l=l||"",e?Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:function(){var t=this;if(this.$__.getters||(this.$__.getters={}),!this.$__.getters[p]){var r=Object.create(a.prototype,function(t){var e={};return Object.getOwnPropertyNames(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r),e[r].get?delete e[r]:e[r].enumerable=-1===["isNew","$__","errors","_doc","$locals","$op","__parentArray","__index","$isDocumentArrayElement"].indexOf(r)}),e}(this));l||(r.$__.scope=this),r.$__.nestedPath=p,Object.defineProperty(r,"schema",{enumerable:!1,configurable:!0,writable:!1,value:c.schema}),Object.defineProperty(r,n,{enumerable:!1,configurable:!0,writable:!1,value:c.schema}),Object.defineProperty(r,"toObject",{enumerable:!1,configurable:!0,writable:!1,value:function(){return s.clone(t.get(p,null,{virtuals:i(this,"schema.options.toObject.virtuals",null)}))}}),Object.defineProperty(r,"toJSON",{enumerable:!1,configurable:!0,writable:!1,value:function(){return t.get(p,null,{virtuals:i(t,"schema.options.toJSON.virtuals",null)})}}),Object.defineProperty(r,"$__isNested",{enumerable:!1,configurable:!0,writable:!1,value:!0});var o=Object.freeze({minimize:!0,virtuals:!1,getters:!1,transform:!1});Object.defineProperty(r,"$isEmpty",{enumerable:!1,configurable:!0,writable:!1,value:function(){return 0===Object.keys(this.get(p,null,o)||{}).length}}),u(e,r,p,h),this.$__.getters[p]=r}return this.$__.getters[p]},set:function(t){return t instanceof a&&(t=t.toObject({transform:!1})),(this.$__.scope||this).$set(p,t)}}):Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:function(){return this[o].call(this.$__.scope||this,p)},set:function(t){return this.$set.call(this.$__.scope||this,p,t)}})}
/*!
 * exports
 */
e.compile=u,e.defineKey=c},function(t,e,r){"use strict";(function(e){if(void 0!==e.Map)t.exports=e.Map,t.exports.Map=e.Map;else{var r=function(t){this._keys=[],this._values={};for(var e=0;e<t.length;e++)if(null!=t[e]){var r=t[e],n=r[0],i=r[1];this._keys.push(n),this._values[n]={v:i,i:this._keys.length-1}}};r.prototype.clear=function(){this._keys=[],this._values={}},r.prototype.delete=function(t){var e=this._values[t];return null!=e&&(delete this._values[t],this._keys.splice(e.i,1),!0)},r.prototype.entries=function(){var t=this,e=0;return{next:function(){var r=t._keys[e++];return{value:void 0!==r?[r,t._values[r].v]:void 0,done:void 0===r}}}},r.prototype.forEach=function(t,e){e=e||this;for(var r=0;r<this._keys.length;r++){var n=this._keys[r];t.call(e,this._values[n].v,n,e)}},r.prototype.get=function(t){return this._values[t]?this._values[t].v:void 0},r.prototype.has=function(t){return null!=this._values[t]},r.prototype.keys=function(){var t=this,e=0;return{next:function(){var r=t._keys[e++];return{value:void 0!==r?r:void 0,done:void 0===r}}}},r.prototype.set=function(t,e){return this._values[t]?(this._values[t].v=e,this):(this._keys.push(t),this._values[t]={v:e,i:this._keys.length-1},this)},r.prototype.values=function(){var t=this,e=0;return{next:function(){var r=t._keys[e++];return{value:void 0!==r?t._values[r].v:void 0,done:void 0===r}}}},Object.defineProperty(r.prototype,"size",{enumerable:!0,get:function(){return this._keys.length}}),t.exports=r,t.exports.Map=r}}).call(this,r(11))},function(t,e,r){"use strict";var n=function t(e){if(!(this instanceof t))return new t(e);this._bsontype="Int32",this.value=e};n.prototype.valueOf=function(){return this.value},n.prototype.toJSON=function(){return this.value},t.exports=n,t.exports.Int32=n},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(6),i=r(172),o=!1;t.exports=function(){return o?i:n},
/*!
 * ignore
 */
t.exports.setBrowser=function(t){o=t}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=[],i=t.length;if(0===i)return n;var o=e<0?Math.max(0,e+i):e||0;for(void 0!==r&&(i=r<0?r+i:r);i-- >o;)n[i-o]=t[i];return n}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.prototype.toString;t.exports=function(t){if(!function(t){return"object"==(void 0===t?"undefined":n(t))&&"[object RegExp]"==i.call(t)}(t))throw new TypeError("Not a RegExp");var e=[];t.global&&e.push("g"),t.multiline&&e.push("m"),t.ignoreCase&&e.push("i"),t.dotAll&&e.push("s"),t.unicode&&e.push("u"),t.sticky&&e.push("y");var r=new RegExp(t.source,e.join(""));return"number"==typeof t.lastIndex&&(r.lastIndex=t.lastIndex),r}},function(t,e,r){"use strict";t.exports=function(t){return t.name?t.name:(t.toString().trim().match(/^function\s*([^\s(]+)/)||[])[1]}},function(t,e,r){"use strict";var n=r(5);
/*!
 * Get the bson type, if it exists
 */t.exports=function(t,e){return n(t,"_bsontype",void 0)===e}},function(t,e,r){"use strict";(function(e){
/*!
 * ignore
 */
var n=r(21),i=r(115),o={_promise:null,get:function(){return o._promise},set:function(t){n.ok("function"==typeof t,"mongoose.Promise must be a function, got "+t),o._promise=t,i.Promise=t}};
/*!
 * Use native promises by default
 */
o.set(e.Promise),t.exports=o}).call(this,r(11))},function(t,e,r){"use strict";(function(t,n){
/*!
 * Module dependencies.
 */
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(45).Buffer,s=r(63),a=e.clone=function t(r,n){if(void 0===r||null===r)return r;if(Array.isArray(r))return e.cloneArray(r,n);if(r.constructor){if(/ObjectI[dD]$/.test(r.constructor.name))return"function"==typeof r.clone?r.clone():new r.constructor(r.id);if("ReadPreference"===r.constructor.name)return new r.constructor(r.mode,t(r.tags,n));if("Binary"==r._bsontype&&r.buffer&&r.value)return"function"==typeof r.clone?r.clone():new r.constructor(r.value(!0),r.sub_type);if("Date"===r.constructor.name||"Function"===r.constructor.name)return new r.constructor(+r);if("RegExp"===r.constructor.name)return s(r);if("Buffer"===r.constructor.name)return e.cloneBuffer(r)}return c(r)?e.cloneObject(r,n):r.valueOf?r.valueOf():void 0};
/*!
 * ignore
 */
e.cloneObject=function(t,e){var r,n,i,o=e&&e.minimize,s={};for(i in t)n=a(t[i],e),o&&void 0===n||(r||(r=!0),s[i]=n);return o?r&&s:s},e.cloneArray=function(t,e){for(var r=[],n=0,i=t.length;n<i;n++)r.push(a(t[n],e));return r},e.tick=function(t){if("function"==typeof t)return function(){var e=arguments;l(function(){t.apply(this,e)})}},e.merge=function t(r,n){for(var i,o=Object.keys(n),s=o.length;s--;)void 0===r[i=o[s]]?r[i]=n[i]:e.isObject(n[i])?t(r[i],n[i]):r[i]=n[i]},e.mergeClone=function t(r,n){for(var i,o=Object.keys(n),s=o.length;s--;)void 0===r[i=o[s]]?r[i]=a(n[i]):e.isObject(n[i])?t(r[i],n[i]):r[i]=a(n[i])},e.readPref=function(t){switch(t){case"p":t="primary";break;case"pp":t="primaryPreferred";break;case"s":t="secondary";break;case"sp":t="secondaryPreferred";break;case"n":t="nearest"}return t},e.readConcern=function(t){if("string"==typeof t){switch(t){case"l":t="local";break;case"a":t="available";break;case"m":t="majority";break;case"lz":t="linearizable";break;case"s":t="snapshot"}t={level:t}}return t};var u=Object.prototype.toString;e.toString=function(t){return u.call(t)};var c=e.isObject=function(t){return"[object Object]"==e.toString(t)};e.isArray=function(t){return Array.isArray(t)||"object"==(void 0===t?"undefined":i(t))&&"[object Array]"==e.toString(t)},e.keys=Object.keys||function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e},e.create="function"==typeof Object.create?Object.create:function(t){if(arguments.length>1)throw new Error("Adding properties is not supported");function e(){}return e.prototype=t,new e},e.inherits=function(t,r){t.prototype=e.create(r.prototype),t.prototype.constructor=t};var l=e.soon="function"==typeof t?t:n.nextTick;e.cloneBuffer=function(t){var e=o.alloc(t.length);return t.copy(e,0,0,t.length),e},e.isArgumentsObject=function(t){return"[object Arguments]"===Object.prototype.toString.call(t)}}).call(this,r(68).setImmediate,r(8))},function(t,e,r){"use strict";(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},r(116),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||void 0,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||void 0}).call(this,r(11))},function(t,e,r){"use strict";(function(t,r,n,i){var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.isNode=void 0!==t&&"object"==o(r)&&"object"==(void 0===n?"undefined":o(n))&&"function"==typeof i&&t.argv,e.isMongo=!e.isNode&&"function"==typeof printjson&&"function"==typeof ObjectId&&"function"==typeof rs&&"function"==typeof sh,e.isBrowser=!e.isNode&&!e.isMongo&&"undefined"!=typeof window,e.type=e.isNode?"node":e.isMongo?"mongo":e.isBrowser?"browser":"unknown"}).call(this,r(8),r(121)(t),r(11),r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);function i(t){var e=t.message;e||(e=n.messages.general.default);var r=this.formatMessage(e,t);n.call(this,r),t=Object.assign({},t,{message:r}),this.name="ValidatorError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack,this.properties=t,this.kind=t.type,this.path=t.path,this.value=t.value,this.reason=t.reason}
/*!
 * Inherits from MongooseError
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,
/*!
 * The object used to define this validator. Not enumerable to hide
 * it from `require('util').inspect()` output re: gh-3925
 */
Object.defineProperty(i.prototype,"properties",{enumerable:!1,writable:!0,value:null}),
/*!
 * Formats error messages
 */
i.prototype.formatMessage=function(t,e){if("function"==typeof t)return t(e);for(var r=Object.keys(e),n=0;n<r.length;++n){var i=r[n];"message"!==i&&(t=t.replace("{"+i.toUpperCase()+"}",e[i]))}return t},
/*!
 * toString helper
 */
i.prototype.toString=function(){return this.message},
/*!
 * exports
 */
t.exports=i},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=function(t){if("number"!=typeof t&&"string"!=typeof t)throw new Error("$type parameter must be number or string");return t}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);function i(t,e){var r=Array.isArray(e)?"array":"primitive value";n.call(this,"Tried to set nested object field `"+t+"` to "+r+" `"+e+"` and strict mode is set to throw."),this.name="ObjectExpectedError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack,this.path=t}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,t.exports=i},function(t,e,r){"use strict";t.exports=function(t){var e={_id:{auto:!0}};e._id[t.options.typeKey]="ObjectId",t.add(e)}},function(t,e,r){"use strict";t.exports=
/*!
 * ignore
 */
function(t,e){if(null==t)return null;if("boolean"==typeof t)return e;if("boolean"==typeof t[e])return t[e]?e:null;if(!(e in t))return e;return t[e]}},function(t,e,r){"use strict";var n=r(51),i=r(24);
/*!
 * Register hooks for this model
 *
 * @param {Model} model
 * @param {Schema} schema
 */
function o(t,e,r){var s={useErrorHandlers:!0,numCallbackParams:1,nullResultByDefault:!0,contextParameter:!0},a=(r=r||{}).decorateDoc?t:t.prototype;t.$appliedHooks=!0;var u=!0,c=!1,l=void 0;try{for(var f,h=Object.keys(e.paths)[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var p=f.value,d=e.paths[p],y=null;if(d.$isSingleNested)y=d.caster;else{if(!d.$isMongooseDocumentArray)continue;y=d.Constructor}if(!y.$appliedHooks&&(o(y,d.schema,r),null!=y.discriminators))for(var v=Object.keys(y.discriminators),_=0;_<v.length;++_)o(y.discriminators[v[_]],y.discriminators[v[_]].schema,r)}}catch(t){c=!0,l=t}finally{try{!u&&h.return&&h.return()}finally{if(c)throw l}}var m=e.s.hooks.filter(function(t){return"updateOne"===t.name||"deleteOne"===t.name?!!t.document:"remove"!==t.name||(null==t.document||!!t.document)}).filter(function(t){return!e.methods[t.name]||!t.fn[n.builtInMiddleware]});t._middleware=m,a.$__originalValidate=a.$__originalValidate||a.$__validate;for(var g=["save","validate","remove","deleteOne"],b=0;b<g.length;b++){var w=g[b],O="validate"===w?"$__originalValidate":"$__"+w,S=m.createWrapper(w,a[O],null,s);a["$__"+w]=S}a.$__init=m.createWrapperSync("init",a.$__init,null,s);var A=Object.keys(e.methods),E=Object.assign({},s,{checkForPromise:!0}),$=!0,j=!1,x=void 0;try{for(var N,P=function(){var e=N.value;if(!m.hasHooks(e))return"continue";var r=a[e];a[e]=function(){var r=this,n=Array.prototype.slice.call(arguments),o=n.slice(-1).pop(),s="function"==typeof o?n.slice(0,n.length-1):n;return i(o,function(t){return r["$__"+e].apply(r,s.concat([t]))},t.events)},a["$__"+e]=m.createWrapper(e,r,null,E)},k=A[Symbol.iterator]();!($=(N=k.next()).done);$=!0)P()}catch(t){j=!0,x=t}finally{try{!$&&k.return&&k.return()}finally{if(j)throw x}}}
/*!
 * ignore
 */
t.exports=o,
/*!
 * ignore
 */
o.middlewareFunctions=["deleteOne","save","validate","remove","updateOne","init"]},function(t,e,r){"use strict";var n=r(13);
/*!
 * Given a value, cast it to a string, or throw a `CastError` if the value
 * cannot be casted. `null` and `undefined` are considered valid.
 *
 * @param {Any} value
 * @param {String} [path] optional the path to set on the CastError
 * @return {string|null|undefined}
 * @throws {CastError}
 * @api private
 */t.exports=function(t,e){if(null==t)return t;if(t._id&&"string"==typeof t._id)return t._id;if(t.toString&&t.toString!==Object.prototype.toString&&!Array.isArray(t))return t.toString();throw new n("string",t,e)}},function(t,e,r){"use strict";(function(e){
/*!
 * Module requirements.
 */
var n=r(4),i=r(146),o=r(7),s=r(147),a=r(78),u=r(2),c=r(0).populateModelSymbol,l=o.CastError,f=void 0;function h(t,e){o.call(this,t,e,"Number")}
/*!
 * ignore
 */
function p(t){return this.cast(t)}h.get=o.get,h.set=o.set,
/*!
 * ignore
 */
h._cast=s,h.cast=function(t){return 0===arguments.length?this._cast:(!1===t&&(t=function(t){if("number"!=typeof t)throw new Error;return t}),this._cast=t,this._cast)},h.schemaName="Number",h.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
h.prototype=Object.create(o.prototype),h.prototype.constructor=h,h.prototype.OptionsConstructor=i,
/*!
 * ignore
 */
h._checkRequired=function(t){return"number"==typeof t||t instanceof Number},h.checkRequired=o.checkRequired,h.prototype.checkRequired=function(t,e){return o._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():h.checkRequired())(t)},h.prototype.min=function(t,e){if(this.minValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.minValidator},this)),null!==t&&void 0!==t){var r=e||n.messages.Number.min;r=r.replace(/{MIN}/,t),this.validators.push({validator:this.minValidator=function(e){return null==e||e>=t},message:r,type:"min",min:t})}return this},h.prototype.max=function(t,e){if(this.maxValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.maxValidator},this)),null!==t&&void 0!==t){var r=e||n.messages.Number.max;r=r.replace(/{MAX}/,t),this.validators.push({validator:this.maxValidator=function(e){return null==e||e<=t},message:r,type:"max",max:t})}return this},h.prototype.enum=function(t,e){return this.enumValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.enumValidator},this)),Array.isArray(t)||(t=Array.prototype.slice.call(arguments),e=n.messages.Number.enum),e=null==e?n.messages.Number.enum:e,this.enumValidator=function(e){return null==e||-1!==t.indexOf(e)},this.validators.push({validator:this.enumValidator,message:e,type:"enum",enumValues:t}),this},h.prototype.cast=function(t,n,i){if(o._isRef(this,t,n,i)){if(null===t||void 0===t)return t;if(f||(f=r(6)),t instanceof f)return t.$__.wasPopulated=!0,t;if("number"==typeof t)return t;if(e.isBuffer(t)||!u.isObject(t))throw new l("number",t,this.path,null,this);var s=n.$__fullPath(this.path),a=new((n.ownerDocument?n.ownerDocument():n).populated(s,!0).options[c])(t);return a.$__.wasPopulated=!0,a}var p=t&&void 0!==t._id?t._id:t,d="function"==typeof this.constructor.cast?this.constructor.cast():h.cast();try{return d(p)}catch(t){throw new l("number",p,this.path,t,this)}},h.prototype.$conditionalHandlers=u.options(o.prototype.$conditionalHandlers,{$bitsAllClear:a,$bitsAnyClear:a,$bitsAllSet:a,$bitsAnySet:a,$gt:p,$gte:p,$lt:p,$lte:p,$mod:function(t){var e=this;return Array.isArray(t)?t.map(function(t){return e.cast(t)}):[this.cast(t)]}}),h.prototype.castForQuery=function(t,e){var r=void 0;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new l("number",e,this.path,null,this);return r.call(this,e)}return e=this._castForQuery(t)},
/*!
 * Module exports.
 */
t.exports=h}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){
/*!
 * Module requirements.
 */
var n=r(13);
/*!
 * ignore
 */
/*!
 * ignore
 */
function i(t,e){var r=Number(e);if(isNaN(r))throw new n("number",e,t);return r}t.exports=function(t){var r=this;return Array.isArray(t)?t.map(function(t){return i(r.path,t)}):e.isBuffer(t)?t:i(r.path,t)}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=new Set(["$ref","$id","$db"]);t.exports=function(t){return t.startsWith("$")&&!n.has(t)}},function(t,e,r){"use strict";
/*!
 * Module requirements.
 */var n=r(32).castArraysOfNumbers,i=r(32).castToNumber;function o(t,e){switch(t.$geometry.type){case"Polygon":case"LineString":case"Point":n(t.$geometry.coordinates,e)}return s(e,t),t}function s(t,e){e.$maxDistance&&(e.$maxDistance=i.call(t,e.$maxDistance)),e.$minDistance&&(e.$minDistance=i.call(t,e.$minDistance))}
/*!
 * ignore
 */
e.cast$geoIntersects=function(t){if(!t.$geometry)return;return o(t,this),t},e.cast$near=function(t){var e=r(55);if(Array.isArray(t))return n(t,this),t;if(s(this,t),t&&t.$geometry)return o(t,this);return e.prototype.castForQuery.call(this,t)},e.cast$within=function(t){var e=this;if(s(this,t),t.$box||t.$polygon){var r=t.$box?"$box":"$polygon";t[r].forEach(function(t){if(!Array.isArray(t)){var r="Invalid $within $box argument. Expected an array, received "+t;throw new TypeError(r)}t.forEach(function(r,n){t[n]=i.call(e,r)})})}else if(t.$center||t.$centerSphere){var n=t.$center?"$center":"$centerSphere";t[n].forEach(function(r,o){Array.isArray(r)?r.forEach(function(t,n){r[n]=i.call(e,t)}):t[n][o]=i.call(e,r)})}else t.$geometry&&o(t,this);return t}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(82),i=r(6),o=r(0).arrayAtomicsSymbol,s=r(0).arrayParentSymbol,a=r(0).arrayPathSymbol,u=r(0).arraySchemaSymbol,c=Array.prototype.push;
/*!
 * Module exports.
 */
t.exports=function(t,e,r){var l=new n;if(l[o]={},Array.isArray(t)){for(var f=t.length,h=0;h<f;++h)c.call(l,t[h]);l[o]=t[o]||{}}return l[a]=e,l[u]=void 0,r&&r instanceof i&&(l[s]=r,l[u]=r.schema.path(e)),l}},function(t,e,r){"use strict";(function(e){var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var i=r(6),o=r(25),s=r(16),a=r(12),u=r(83),c=r(5),l=r(22).internalToObjectOptions,f=r(2),h=r(3),p=r(0).arrayAtomicsSymbol,d=r(0).arrayParentSymbol,y=r(0).arrayPathSymbol,v=r(0).arraySchemaSymbol,_=r(0).populateModelSymbol,m=Array.prototype.push,g=Symbol("mongoose#MongooseCoreArray#validators"),b=function(t){function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,Array),n(r,[{key:"$__getAtomics",value:function(){var t=[],e=Object.keys(this[p]),r=e.length,n=Object.assign({},l,{_isNested:!0});if(0===r)return t[0]=["$set",this.toObject(n)],t;for(;r--;){var i=e[r],o=this[p][i];f.isMongooseObject(o)?o=o.toObject(n):Array.isArray(o)?o=this.toObject.call(o,n):null!=o&&Array.isArray(o.$each)?o.$each=this.toObject.call(o.$each,n):null!=o&&"function"==typeof o.valueOf&&(o=o.valueOf()),"$addToSet"===i&&(o={$each:o}),t.push([i,o])}return t}
/*!
     * ignore
     */},{key:"$atomics",value:function(){return this[p]}
/*!
     * ignore
     */},{key:"$parent",value:function(){return this[d]}
/*!
     * ignore
     */},{key:"$path",value:function(){return this[y]}},{key:"$shift",value:function(){if(this._registerAtomic("$pop",-1),this._markModified(),!this._shifted)return this._shifted=!0,[].shift.call(this)}},{key:"$pop",value:function(){if(this._registerAtomic("$pop",1),this._markModified(),!this._popped)return this._popped=!0,[].pop.call(this)}
/*!
     * ignore
     */},{key:"$schema",value:function(){return this[v]}},{key:"_cast",value:function(t){var r=!1,n=void 0;return this[d]&&(r=this[d].populated(this[y],!0)),r&&null!==t&&void 0!==t?(n=r.options[_],(e.isBuffer(t)||t instanceof a||!f.isObject(t))&&(t={_id:t}),t.schema&&t.schema.discriminatorMapping&&void 0!==t.schema.discriminatorMapping.key||(t=new n(t)),this[v].caster.applySetters(t,this[d],!0)):this[v].caster.applySetters(t,this[d],!1)}},{key:"_mapCast",value:function(t,e){return this._cast(t,this.length+e)}},{key:"_markModified",value:function(t,e){var r=this[d],n=void 0;if(r){if(n=this[y],arguments.length&&(n=null!=e?n+"."+this.indexOf(t)+"."+e:n+"."+t),null!=n&&n.endsWith(".$"))return this;r.markModified(n,arguments.length>0?t:r)}return this}},{key:"_registerAtomic",value:function(t,e){if("$set"===t)return this[p]={$set:e},u(this[d],this[y]),this._markModified(),this;var r=this[p];if("$pop"===t&&!("$pop"in r)){var n=this;this[d].once("save",function(){n._popped=n._shifted=null})}if(this[p].$set||Object.keys(r).length&&!(t in r))return this[p]={$set:this},this;var i=void 0;if("$pullAll"===t||"$addToSet"===t)r[t]||(r[t]=[]),r[t]=r[t].concat(e);else if("$pullDocs"===t){var s=r.$pull||(r.$pull={});e[0]instanceof o?(i=s.$or||(s.$or=[]),Array.prototype.push.apply(i,e.map(function(t){return t.toObject({transform:!1,virtuals:!1})}))):(i=s._id||(s._id={$in:[]})).$in=i.$in.concat(e)}else"$push"===t?(r.$push=r.$push||{$each:[]},null!=e&&f.hasUserDefinedProperty(e,"$each")?r.$push=e:r.$push.$each=r.$push.$each.concat(e)):r[t]=e;return this}},{key:"addToSet",value:function(){w(this,arguments);var t=[].map.call(arguments,this._mapCast,this),e=[],r="";return(t=this[v].applySetters(t,this[d]))[0]instanceof o?r="doc":t[0]instanceof Date&&(r="date"),t.forEach(function(t){var n=void 0,i=+t;switch(r){case"doc":n=this.some(function(e){return e.equals(t)});break;case"date":n=this.some(function(t){return+t===i});break;default:n=~this.indexOf(t)}n||([].push.call(this,t),this._registerAtomic("$addToSet",t),this._markModified(),[].push.call(e,t))},this),e}},{key:"hasAtomics",value:function(){return f.isPOJO(this[p])?Object.keys(this[p]).length:0}},{key:"includes",value:function(t,e){return-1!==this.indexOf(t,e)}},{key:"indexOf",value:function(t,e){t instanceof a&&(t=t.toString()),e=null==e?0:e;for(var r=this.length,n=e;n<r;++n)if(t==this[n])return n;return-1}},{key:"inspect",value:function(){return JSON.stringify(this)}},{key:"nonAtomicPush",value:function(){var t=[].map.call(arguments,this._mapCast,this),e=[].push.apply(this,t);return this._registerAtomic("$set",this),this._markModified(),e}},{key:"pop",value:function(){var t=[].pop.call(this);return this._registerAtomic("$set",this),this._markModified(),t}},{key:"pull",value:function(){for(var t=[].map.call(arguments,this._cast,this),e=this[d].get(this[y]),r=e.length,n=void 0;r--;){if((n=e[r])instanceof i)t.some(function(t){return n.equals(t)})&&[].splice.call(e,r,1);else~e.indexOf.call(t,n)&&[].splice.call(e,r,1)}return t[0]instanceof o?this._registerAtomic("$pullDocs",t.map(function(t){return t._id||t})):this._registerAtomic("$pullAll",t),this._markModified(),u(this[d],this[y])>0&&this._registerAtomic("$set",this),this}},{key:"push",value:function(){var t=arguments,e=t,r=null!=t[0]&&f.hasUserDefinedProperty(t[0],"$each");if(r&&(e=t[0],t=t[0].$each),null==this[v])return m.apply(this,t);w(this,t);var n=this[d];t=[].map.call(t,this._mapCast,this),t=this[v].applySetters(t,n,void 0,void 0,{skipDocumentArrayCast:!0});var i=void 0,o=this[p];if(r){if(e.$each=t,c(o,"$push.$each.length",0)>0&&o.$push.$position!=o.$position)throw new s("Cannot call `Array#push()` multiple times with different `$position`");null!=e.$position?([].splice.apply(this,[e.$position,0].concat(t)),i=this.length):i=[].push.apply(this,t)}else{if(c(o,"$push.$each.length",0)>0&&null!=o.$push.$position)throw new s("Cannot call `Array#push()` multiple times with different `$position`");e=t,i=[].push.apply(this,t)}return this._registerAtomic("$push",e),this._markModified(),i}},{key:"remove",value:function(){return this.pull.apply(this,arguments)}},{key:"set",value:function(t,e){var r=this._cast(e,t);return this[t]=r,this._markModified(t),this}},{key:"shift",value:function(){var t=[].shift.call(this);return this._registerAtomic("$set",this),this._markModified(),t}},{key:"sort",value:function(){var t=[].sort.apply(this,arguments);return this._registerAtomic("$set",this),t}},{key:"splice",value:function(){var t=void 0;if(w(this,Array.prototype.slice.call(arguments,2)),arguments.length){var e=void 0;if(null==this[v])e=arguments;else{e=[];for(var r=0;r<arguments.length;++r)e[r]=r<2?arguments[r]:this._cast(arguments[r],arguments[0]+(r-2))}t=[].splice.apply(this,e),this._registerAtomic("$set",this)}return t}
/*!
     * ignore
     */},{key:"slice",value:function(){var t=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(n):void 0}(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"slice",this).apply(this,arguments);return t[d]=this[d],t[v]=this[v],t[p]=this[p],t}
/*!
     * ignore
     */},{key:"toBSON",value:function(){return this.toObject(l)}},{key:"toObject",value:function(t){return t&&t.depopulate?((t=f.clone(t))._isNested=!0,this.map(function(e){return e instanceof i?e.toObject(t):e})):this.slice()}},{key:"unshift",value:function(){w(this,arguments);var t=[].map.call(arguments,this._cast,this);return t=this[v].applySetters(t,this[d]),[].unshift.apply(this,t),this._registerAtomic("$set",this),this._markModified(),this.length}},{key:"isMongooseArray",get:function(){return!0}},{key:"validators",get:function(){return this[g]},set:function(t){this[g]=t}}]),r}();
/*!
 * ignore
 */
function w(t,e){var r=null==t?null:c(t[v],"caster.options.ref",null);0===t.length&&e.length>0&&
/*!
 * ignore
 */
function(t,e){if(!e)return!1;for(var r=0;r<t.length;++r){var n=t[r];if(null==n)return!1;var o=n.constructor;if(!(n instanceof i)||o.modelName!==e&&o.baseModelName!==e)return!1}return!0}(e,r)&&t[d].populated(t[y],[],function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},_,e[0].constructor))}h.inspect.custom&&(b.prototype[h.inspect.custom]=b.prototype.inspect),t.exports=b}).call(this,r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=function(t,e,r){var n=(r=r||{}).skipDocArrays,i=0;if(!t)return i;var o=!0,s=!1,a=void 0;try{for(var u,c=Object.keys(t.$__.activePaths.states.modify)[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;if(n){var f=t.schema.path(l);if(f&&f.$isMongooseDocumentArray)continue}l.startsWith(e+".")&&(delete t.$__.activePaths.states.modify[l],++i)}}catch(t){s=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(s)throw a}}return i}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(14).get().Binary,i=r(2),o=r(45).Buffer,s=o.from("").constructor.prototype;function a(t,e,r){var n=void 0;n=0===arguments.length||null===arguments[0]||void 0===arguments[0]?0:t;var s=void 0,u=void 0,l=void 0;Array.isArray(e)?(u=e[0],l=e[1]):s=e;var f=void 0;return f="number"==typeof n||n instanceof Number?o.alloc(n):o.from(n,s,r),i.decorate(f,a.mixin),f.isMongooseBuffer=!0,f[a.pathSymbol]=u,f[c]=l,f._subtype=0,f}var u=Symbol.for("mongoose#Buffer#_path"),c=Symbol.for("mongoose#Buffer#_parent");a.pathSymbol=u,
/*!
 * Inherit from Buffer.
 */
a.mixin={_subtype:void 0,_markModified:function(){var t=this[c];return t&&t.markModified(this[a.pathSymbol]),this},write:function(){var t=s.write.apply(this,arguments);return t>0&&this._markModified(),t},copy:function(t){var e=s.copy.apply(this,arguments);return t&&t.isMongooseBuffer&&t._markModified(),e}},
/*!
 * Compile other Buffer methods marking this buffer as modified.
 */
"writeUInt8 writeUInt16 writeUInt32 writeInt8 writeInt16 writeInt32 writeFloat writeDouble fill utf8Write binaryWrite asciiWrite set writeUInt16LE writeUInt16BE writeUInt32LE writeUInt32BE writeInt16LE writeInt16BE writeInt32LE writeInt32BE writeFloatLE writeFloatBE writeDoubleLE writeDoubleBE".split(" ").forEach(function(t){s[t]&&(a.mixin[t]=function(){var e=s[t].apply(this,arguments);return this._markModified(),e})}),a.mixin.toObject=function(t){var e="number"==typeof t?t:this._subtype||0;return new n(o.from(this),e)},a.mixin.toBSON=function(){return new n(this,this._subtype||0)},a.mixin.equals=function(t){if(!o.isBuffer(t))return!1;if(this.length!==t.length)return!1;for(var e=0;e<this.length;++e)if(this[e]!==t[e])return!1;return!0},a.mixin.subtype=function(t){if("number"!=typeof t)throw new TypeError("Invalid subtype. Expected a number");this._subtype!==t&&this._markModified(),this._subtype=t},
/*!
 * Module exports.
 */
a.Binary=n,t.exports=a},function(t,e,r){"use strict";var n=r(14).get().ObjectId,i=r(21);t.exports=function(t){if(null==t)return t;if(t instanceof n)return t;if(t._id){if(t._id instanceof n)return t._id;if(t._id.toString instanceof Function)return new n(t._id.toString())}if(t.toString instanceof Function)return new n(t.toString());i.ok(!1)}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(n):void 0};var s=r(31),a=r(2).deepEqual,u=r(5),c=r(87),l=r(3),f=r(47),h=r(0).populateModelSymbol,p=function(t){function e(t,r,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),null!=t&&"Object"===t.constructor.name&&(t=Object.keys(t).reduce(function(e,r){return e.concat([[r,t[r]]])},[]));var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.$__parent=null!=n&&null!=n.$__?n:null,o.$__path=r,o.$__schemaType=null==i?new s(r):i,o.$__runDeferred(),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Map),i(e,[{key:"$init",value:function(t,r){d(t),o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"set",this).call(this,t,r),null!=r&&r.$isSingleNested&&(r.$basePath=this.$__path+"."+t)}},{key:"$__set",value:function(t,r){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"set",this).call(this,t,r)}},{key:"get",value:function(t,r){return!1===(r=r||{}).getters?o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"get",this).call(this,t):this.$__schemaType.applyGetters(o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"get",this).call(this,t),this.$__parent)}},{key:"set",value:function(t,r){if(d(t),r=c(r),null==this.$__schemaType)return this.$__deferred=this.$__deferred||[],void this.$__deferred.push({key:t,value:r});var n=this.$__path+"."+t,i=null!=this.$__parent&&this.$__parent.$__?this.$__parent.populated(n)||this.$__parent.populated(this.$__path):null,s=this.get(t);if(null!=i)null==r.$__&&(r=new i.options[h](r)),r.$__.wasPopulated=!0;else try{r=this.$__schemaType.applySetters(r,this.$__parent,!1,this.get(t))}catch(t){if(null!=this.$__parent&&null!=this.$__parent.$__)return void this.$__parent.invalidate(n,t);throw t}o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"set",this).call(this,t,r),null!=r&&r.$isSingleNested&&(r.$basePath=this.$__path+"."+t);var u=this.$__parent;null==u||null==u.$__||a(r,s)||u.markModified(this.$__path+"."+t)}},{key:"delete",value:function(t){this.set(t,void 0),o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"delete",this).call(this,t)}},{key:"toBSON",value:function(){return new Map(this)}},{key:"toObject",value:function(t){if(u(t,"flattenMaps")){var e={},r=this.keys(),n=!0,i=!1,o=void 0;try{for(var s,a=r[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var c=s.value;e[c]=this.get(c)}}catch(t){i=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return e}return new Map(this)}},{key:"toJSON",value:function(){var t={},e=this.keys(),r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value;t[a]=this.get(a)}}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return t}},{key:"inspect",value:function(){return new Map(this)}},{key:"$__runDeferred",value:function(){if(this.$__deferred){for(var t=0;t<this.$__deferred.length;++t)this.set(this.$__deferred[t].key,this.$__deferred[t].value);this.$__deferred=null}}}]),e}();
/*!
 * Since maps are stored as objects under the hood, keys must be strings
 * and can't contain any invalid characters
 */
function d(t){var e=void 0===t?"undefined":n(t);if("string"!==e)throw new TypeError("Mongoose maps only support string keys, got "+e);if(t.startsWith("$"))throw new Error('Mongoose maps do not support keys that start with "$", got "'+t+'"');if(t.includes("."))throw new Error('Mongoose maps do not support keys that contain ".", got "'+t+'"');if(f.has(t))throw new Error('Mongoose maps do not support reserved key name "'+t+'"')}l.inspect.custom&&Object.defineProperty(p.prototype,l.inspect.custom,{enumerable:!1,writable:!1,configurable:!1,value:p.prototype.inspect}),Object.defineProperty(p.prototype,"$__set",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(p.prototype,"$__parent",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(p.prototype,"$__path",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(p.prototype,"$__schemaType",{enumerable:!1,writable:!0,configurable:!1}),Object.defineProperty(p.prototype,"$isMongooseMap",{enumerable:!1,writable:!1,configurable:!1,value:!0}),Object.defineProperty(p.prototype,"$__deferredCalls",{enumerable:!1,writable:!1,configurable:!1,value:!0}),t.exports=p},function(t,e,r){"use strict";var n=r(2);t.exports=function(t){return n.isPOJO(t)&&null!=t.$__&&null!=t._doc?t._doc:t}},function(t,e,r){"use strict";var n=r(6),i=r(50),o=r(22).internalToObjectOptions,s=r(24),a=r(0).documentArrayParent;function u(t,e,r,i,o){var s=this;this.$isSingleNested=!0;var a=null!=o&&o.priorDoc,u=null;if(a&&(this._doc=Object.assign({},o.priorDoc._doc),delete this._doc[this.schema.options.discriminatorKey],u=Object.keys(o.priorDoc._doc||{}).filter(function(t){return t!==s.schema.options.discriminatorKey})),null!=r&&(o=Object.assign({},o,{isNew:r.isNew})),n.call(this,t,e,i,o),a){var c=!0,l=!1,f=void 0;try{for(var h,p=u[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var d=h.value;if(!this.$__.activePaths.states.modify[d]&&!this.$__.activePaths.states.default[d]&&!this.$__.$setCalled.has(d)){var y=this.schema.path(d),v=null==y?void 0:y.getDefault(this);void 0===v?delete this._doc[d]:(this._doc[d]=v,this.$__.activePaths.default(d))}}}catch(t){l=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw f}}}}t.exports=u,u.prototype=Object.create(n.prototype),u.prototype.toBSON=function(){return this.toObject(o)},u.prototype.save=function(t,e){var r=this;return"function"==typeof t&&(e=t,t={}),(t=t||{}).suppressWarning||console.warn("mongoose: calling `save()` on a subdoc does **not** save the document to MongoDB, it only runs save middleware. Use `subdoc.save({ suppressWarning: true })` to hide this warning if you're sure this behavior is right for your app."),s(e,function(t){r.$__save(t)})},u.prototype.$__save=function(t){var e=this;return i(function(){return t(null,e)})},u.prototype.$isValid=function(t){return this.$parent&&this.$basePath?this.$parent.$isValid([this.$basePath,t].join(".")):n.prototype.$isValid.call(this,t)},u.prototype.markModified=function(t){if(n.prototype.markModified.call(this,t),this.$parent&&this.$basePath){if(this.$parent.isDirectModified(this.$basePath))return;this.$parent.markModified([this.$basePath,t].join("."),this)}},u.prototype.isModified=function(t,e){var r=this;return this.$parent&&this.$basePath?((Array.isArray(t)||"string"==typeof t)&&(t=(t=Array.isArray(t)?t:t.split(" ")).map(function(t){return[r.$basePath,t].join(".")})),this.$parent.isModified(t,e)):n.prototype.isModified.call(this,t,e)},u.prototype.$markValid=function(t){n.prototype.$markValid.call(this,t),this.$parent&&this.$basePath&&this.$parent.$markValid([this.$basePath,t].join("."))},
/*!
 * ignore
 */
u.prototype.invalidate=function(t,e,r){if(e!==this.ownerDocument().$__.validationError&&n.prototype.invalidate.call(this,t,e,r),this.$parent&&this.$basePath)this.$parent.invalidate([this.$basePath,t].join("."),e,r);else if("cast"===e.kind||"CastError"===e.name)throw e},
/*!
 * ignore
 */
u.prototype.$ignore=function(t){n.prototype.$ignore.call(this,t),this.$parent&&this.$basePath&&this.$parent.$ignore([this.$basePath,t].join("."))},u.prototype.ownerDocument=function(){if(this.$__.ownerDocument)return this.$__.ownerDocument;var t=this.$parent;if(!t)return this;for(;t.$parent||t[a];)t=t.$parent||t[a];return this.$__.ownerDocument=t,this.$__.ownerDocument},u.prototype.parent=function(){return this.$parent},
/*!
 * no-op for hooks
 */
u.prototype.$__remove=function(t){return t(null,this)},u.prototype.remove=function(t,e){"function"==typeof t&&(e=t,t=null),
/*!
 * Registers remove event listeners for triggering
 * on subdocuments.
 *
 * @param {Subdocument} sub
 * @api private
 */
function(t){var e=t.ownerDocument();function r(){e.removeListener("save",r),e.removeListener("remove",r),t.emit("remove",t),t.constructor.emit("remove",t),e=t=null}e.on("save",r),e.on("remove",r)}(this),t&&t.noop||this.$parent.set(this.$basePath,null),"function"==typeof e&&e(null)},
/*!
 * ignore
 */
u.prototype.populate=function(){throw new Error('Mongoose does not support calling populate() on nested docs. Instead of `doc.nested.populate("path")`, use `doc.populate("nested.path")`')}},function(t,e,r){"use strict";var n=r(58).defineKey,i=r(5),o=r(2),s={toJSON:!0,toObject:!0,_id:!0,id:!0};
/*!
 * ignore
 */
t.exports=function(t,e,r,a,u){if(!r||!r.instanceOfSchema)throw new Error("You must pass a valid discriminator Schema");if(t.schema.discriminatorMapping&&!t.schema.discriminatorMapping.isRoot)throw new Error('Discriminator "'+e+'" can only be a discriminator of the root model');if(u){var c=i(t.base,"options.applyPluginsToDiscriminators",!1);t.base._applyPlugins(r,{skipTopLevel:!c})}var l=t.schema.options.discriminatorKey,f=t.schema.path(l);if(null!=f)o.hasUserDefinedProperty(f.options,"select")||(f.options.select=!0),f.options.$skipDiscriminatorCheck=!0;else{var h={};h[l]={default:void 0,select:!0,$skipDiscriminatorCheck:!0},h[l][t.schema.options.typeKey]=String,t.schema.add(h),n(l,null,t.prototype,null,[l],t.schema.options)}if(r.path(l)&&!0!==r.path(l).options.$skipDiscriminatorCheck)throw new Error('Discriminator "'+e+'" cannot have field with name "'+l+'"');var p=e;if("string"==typeof a&&a.length&&(p=a),function(e,r){e._baseSchema=r,r.paths._id&&r.paths._id.options&&!r.paths._id.options.auto&&e.remove("_id");for(var n=Object.keys(r.paths),i=[],a=0;a<n.length;++a)e.nested[n[a]]&&i.push(n[a]);o.merge(e,r,{omit:{discriminators:!0,base:!0},omitNested:i.reduce(function(t,e){return t["tree."+e]=!0,t},{})});for(var u=0;u<i.length;++u)delete e.paths[i[u]];e.childSchemas.forEach(function(t){t.model.prototype.$__setSchema(t.schema)});var c={};c[l]={default:p,select:!0,set:function(t){if(t===p)return p;throw new Error("Can't set discriminator key \""+l+'"')},$skipDiscriminatorCheck:!0},c[l][e.options.typeKey]=f?f.instance:String,e.add(c),e.discriminatorMapping={key:l,value:p,isRoot:!1},r.options.collection&&(e.options.collection=r.options.collection);var h=e.options.toJSON,d=e.options.toObject,y=e.options._id,v=e.options.id,_=Object.keys(e.options);e.options.discriminatorKey=r.options.discriminatorKey;for(var m=0;m<_.length;++m){var g=_[m];if(!s[g]&&!o.deepEqual(e.options[g],r.options[g]))throw new Error("Can't customize discriminator option "+g+" (can only modify "+Object.keys(s).join(", ")+")")}e.options=o.clone(r.options),h&&(e.options.toJSON=h),d&&(e.options.toObject=d),void 0!==y&&(e.options._id=y),e.options.id=v,e.s.hooks=t.schema.s.hooks.merge(e.s.hooks),e.plugins=Array.prototype.slice.call(r.plugins),e.callQueue=r.callQueue.concat(e.callQueue),delete e._requiredpaths}(r,t.schema),t.discriminators||(t.discriminators={}),t.schema.discriminatorMapping||(t.schema.discriminatorMapping={key:l,value:null,isRoot:!0}),t.schema.discriminators||(t.schema.discriminators={}),t.schema.discriminators[e]=r,t.discriminators[e])throw new Error('Discriminator with name "'+e+'" already exists');return r}},function(t,e,r){"use strict";var n=r(73);t.exports=function(t,e){return null==e||null==e._id?t:(t=t.clone(),e._id?t.paths._id||(n(t),t.options._id=!0):(t.remove("_id"),t.options._id=!1),t)}},function(t,e,r){"use strict";var n=r(56);
/*!
 * Find the correct constructor, taking into account discriminators
 */t.exports=function(t,e){var r=t.schema.options.discriminatorKey;if(null!=e&&t.discriminators&&null!=e[r])if(t.discriminators[e[r]])t=t.discriminators[e[r]];else{var i=n(t,e[r]);i&&(t=i)}return t}},function(t,e,r){"use strict";
/*!
 * ignore
 */var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return null==t||("object"!==(void 0===t?"undefined":n(t))||!("$meta"in t||"$slice"in t))}},function(t,e,r){"use strict";t.exports=r(94)},function(t,e,r){"use strict";(function(n){r(14).set(r(98));var i=r(61),o=r(66);i.setBrowser(!0),Object.defineProperty(e,"Promise",{get:function(){return o.get()},set:function(t){o.set(t)}}),e.PromiseProvider=o,e.Error=r(4),e.Schema=r(52),e.Types=r(57),e.VirtualType=r(53),e.SchemaType=r(7),e.utils=r(2),e.Document=i(),e.model=function(t,r){var n=function(t){function n(t,e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t,r,e))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e.Document),n}();return n.modelName=t,n},
/*!
 * Module exports.
 */
"undefined"!=typeof window&&(window.mongoose=t.exports,window.Buffer=n)}).call(this,r(1).Buffer)},function(t,e,r){"use strict";e.byteLength=function(t){var e=c(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,n=c(t),s=n[0],a=n[1],u=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,a)),l=0,f=a>0?s-4:s;for(r=0;r<f;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],u[l++]=e>>16&255,u[l++]=e>>8&255,u[l++]=255&e;2===a&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,u[l++]=255&e);1===a&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,u[l++]=e>>8&255,u[l++]=255&e);return u},e.fromByteArray=function(t){for(var e,r=t.length,i=r%3,o=[],s=0,a=r-i;s<a;s+=16383)o.push(f(t,s,s+16383>a?a:s+16383));1===i?(e=t[r-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)n[a]=s[a],i[s.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function l(t){return n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t]}function f(t,e,r){for(var n,i=[],o=e;o<r;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(l(n));return i.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e,r){"use strict";e.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,c=u>>1,l=-7,f=r?i-1:0,h=r?-1:1,p=t[e+f];for(f+=h,o=p&(1<<-l)-1,p>>=-l,l+=a;l>0;o=256*o+t[e+f],f+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+t[e+f],f+=h,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=c}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(s++,u/=2),s+f>=l?(a=0,s=l):s+f>=1?(a=(e*u-1)*Math.pow(2,i),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[r+p]=255&s,p+=d,s/=256,c-=8);t[r+p-d]|=128*y}},function(t,e,r){"use strict";var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,r){"use strict";
/*!
 * Module exports.
 */e.Binary=r(99),e.Collection=function(){throw new Error("Cannot create a collection from browser library")},e.Decimal128=r(106),e.ObjectId=r(107),e.ReadPreference=r(108)},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(33).Binary;
/*!
 * Module exports.
 */t.exports=n},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return t&&"object"===(void 0===t?"undefined":n(t))&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e,r){"use strict";"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(module,exports,__webpack_require__){"use strict";var Long=__webpack_require__(23).Long,Double=__webpack_require__(34).Double,Timestamp=__webpack_require__(35).Timestamp,ObjectID=__webpack_require__(36).ObjectID,_Symbol=__webpack_require__(38).Symbol,Code=__webpack_require__(39).Code,MinKey=__webpack_require__(41).MinKey,MaxKey=__webpack_require__(42).MaxKey,Decimal128=__webpack_require__(40),Int32=__webpack_require__(60),DBRef=__webpack_require__(43).DBRef,BSONRegExp=__webpack_require__(37).BSONRegExp,Binary=__webpack_require__(26).Binary,utils=__webpack_require__(15),deserialize=function(t,e,r){var n=(e=null==e?{}:e)&&e.index?e.index:0,i=t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24;if(i<5||t.length<i||i+n>t.length)throw new Error("corrupt bson message");if(0!==t[n+i-1])throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");return deserializeObject(t,n,e,r)},deserializeObject=function t(e,r,n,i){var o=null!=n.evalFunctions&&n.evalFunctions,s=null!=n.cacheFunctions&&n.cacheFunctions,a=null!=n.cacheFunctionsCrc32&&n.cacheFunctionsCrc32;if(!a)var u=null;var c=null==n.fieldsAsRaw?null:n.fieldsAsRaw,l=null!=n.raw&&n.raw,f="boolean"==typeof n.bsonRegExp&&n.bsonRegExp,h=null!=n.promoteBuffers&&n.promoteBuffers,p=null==n.promoteLongs||n.promoteLongs,d=null==n.promoteValues||n.promoteValues,y=r;if(e.length<5)throw new Error("corrupt bson message < 5 bytes long");var v=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;if(v<5||v>e.length)throw new Error("corrupt bson message");for(var _=i?[]:{},m=0;;){var g=e[r++];if(0===g)break;for(var b=r;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");var w=i?m++:e.toString("utf8",r,b);if(r=b+1,g===BSON.BSON_DATA_STRING){var O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;if(O<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");_[w]=e.toString("utf8",r,r+O-1),r+=O}else if(g===BSON.BSON_DATA_OID){var S=utils.allocBuffer(12);e.copy(S,0,r,r+12),_[w]=new ObjectID(S),r+=12}else if(g===BSON.BSON_DATA_INT&&!1===d)_[w]=new Int32(e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24);else if(g===BSON.BSON_DATA_INT)_[w]=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;else if(g===BSON.BSON_DATA_NUMBER&&!1===d)_[w]=new Double(e.readDoubleLE(r)),r+=8;else if(g===BSON.BSON_DATA_NUMBER)_[w]=e.readDoubleLE(r),r+=8;else if(g===BSON.BSON_DATA_DATE){var A=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,E=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;_[w]=new Date(new Long(A,E).toNumber())}else if(g===BSON.BSON_DATA_BOOLEAN){if(0!==e[r]&&1!==e[r])throw new Error("illegal boolean type value");_[w]=1===e[r++]}else if(g===BSON.BSON_DATA_OBJECT){var $=r,j=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;if(j<=0||j>e.length-r)throw new Error("bad embedded document length in bson");_[w]=l?e.slice(r,r+j):t(e,$,n,!1),r+=j}else if(g===BSON.BSON_DATA_ARRAY){$=r;var x=n,N=r+(j=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24);if(c&&c[w]){for(var P in x={},n)x[P]=n[P];x.raw=!0}if(_[w]=t(e,$,x,!0),0!==e[(r+=j)-1])throw new Error("invalid array terminator byte");if(r!==N)throw new Error("corrupted array bson")}else if(g===BSON.BSON_DATA_UNDEFINED)_[w]=void 0;else if(g===BSON.BSON_DATA_NULL)_[w]=null;else if(g===BSON.BSON_DATA_LONG){A=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,E=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;var k=new Long(A,E);_[w]=p&&!0===d&&k.lessThanOrEqual(JS_INT_MAX_LONG)&&k.greaterThanOrEqual(JS_INT_MIN_LONG)?k.toNumber():k}else if(g===BSON.BSON_DATA_DECIMAL128){var T=utils.allocBuffer(16);e.copy(T,0,r,r+16),r+=16;var B=new Decimal128(T);_[w]=B.toObject?B.toObject():B}else if(g===BSON.BSON_DATA_BINARY){var C=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,D=C,M=e[r++];if(C<0)throw new Error("Negative binary type element size found");if(C>e.length)throw new Error("Binary type size larger than document size");if(null!=e.slice){if(M===Binary.SUBTYPE_BYTE_ARRAY){if((C=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<0)throw new Error("Negative binary type element size found for subtype 0x02");if(C>D-4)throw new Error("Binary type with subtype 0x02 contains to long binary size");if(C<D-4)throw new Error("Binary type with subtype 0x02 contains to short binary size")}_[w]=h&&d?e.slice(r,r+C):new Binary(e.slice(r,r+C),M)}else{var R="undefined"!=typeof Uint8Array?new Uint8Array(new ArrayBuffer(C)):new Array(C);if(M===Binary.SUBTYPE_BYTE_ARRAY){if((C=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<0)throw new Error("Negative binary type element size found for subtype 0x02");if(C>D-4)throw new Error("Binary type with subtype 0x02 contains to long binary size");if(C<D-4)throw new Error("Binary type with subtype 0x02 contains to short binary size")}for(b=0;b<C;b++)R[b]=e[r+b];_[w]=h&&d?R:new Binary(R,M)}r+=C}else if(g===BSON.BSON_DATA_REGEXP&&!1===f){for(b=r;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");var F=e.toString("utf8",r,b);for(b=r=b+1;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");var I=e.toString("utf8",r,b);r=b+1;var L=new Array(I.length);for(b=0;b<I.length;b++)switch(I[b]){case"m":L[b]="m";break;case"s":L[b]="g";break;case"i":L[b]="i"}_[w]=new RegExp(F,L.join(""))}else if(g===BSON.BSON_DATA_REGEXP&&!0===f){for(b=r;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");for(F=e.toString("utf8",r,b),b=r=b+1;0!==e[b]&&b<e.length;)b++;if(b>=e.length)throw new Error("Bad BSON Document: illegal CString");I=e.toString("utf8",r,b),r=b+1,_[w]=new BSONRegExp(F,I)}else if(g===BSON.BSON_DATA_SYMBOL){if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");_[w]=new _Symbol(e.toString("utf8",r,r+O-1)),r+=O}else if(g===BSON.BSON_DATA_TIMESTAMP)A=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,E=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24,_[w]=new Timestamp(A,E);else if(g===BSON.BSON_DATA_MIN_KEY)_[w]=new MinKey;else if(g===BSON.BSON_DATA_MAX_KEY)_[w]=new MaxKey;else if(g===BSON.BSON_DATA_CODE){if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");var U=e.toString("utf8",r,r+O-1);if(o)if(s){var V=a?u(U):U;_[w]=isolateEvalWithHash(functionCache,V,U,_)}else _[w]=isolateEval(U);else _[w]=new Code(U);r+=O}else if(g===BSON.BSON_DATA_CODE_W_SCOPE){var q=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24;if(q<13)throw new Error("code_w_scope total size shorter minimum expected length");if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");U=e.toString("utf8",r,r+O-1),$=r+=O,j=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;var W=t(e,$,n,!1);if(r+=j,q<8+j+O)throw new Error("code_w_scope total size is to short, truncating scope");if(q>8+j+O)throw new Error("code_w_scope total size is to long, clips outer document");o?(s?(V=a?u(U):U,_[w]=isolateEvalWithHash(functionCache,V,U,_)):_[w]=isolateEval(U),_[w].scope=W):_[w]=new Code(U,W)}else{if(g!==BSON.BSON_DATA_DBPOINTER)throw new Error("Detected unknown BSON type "+g.toString(16)+' for fieldname "'+w+'", are you using the latest BSON parser');if((O=e[r++]|e[r++]<<8|e[r++]<<16|e[r++]<<24)<=0||O>e.length-r||0!==e[r+O-1])throw new Error("bad string length in bson");var H=e.toString("utf8",r,r+O-1);r+=O;var Y=utils.allocBuffer(12);e.copy(Y,0,r,r+12),S=new ObjectID(Y),r+=12;var z=H.split("."),K=z.shift(),Q=z.join(".");_[w]=new DBRef(Q,S,K)}}if(v!==r-y){if(i)throw new Error("corrupt array bson");throw new Error("corrupt object bson")}return null!=_.$id&&(_=new DBRef(_.$ref,_.$id,_.$db)),_},isolateEvalWithHash=function isolateEvalWithHash(functionCache,hash,functionString,object){var value=null;return null==functionCache[hash]&&(eval("value = "+functionString),functionCache[hash]=value),functionCache[hash].bind(object)},isolateEval=function isolateEval(functionString){var value=null;return eval("value = "+functionString),value},BSON={},functionCache=BSON.functionCache={};BSON.BSON_DATA_NUMBER=1,BSON.BSON_DATA_STRING=2,BSON.BSON_DATA_OBJECT=3,BSON.BSON_DATA_ARRAY=4,BSON.BSON_DATA_BINARY=5,BSON.BSON_DATA_UNDEFINED=6,BSON.BSON_DATA_OID=7,BSON.BSON_DATA_BOOLEAN=8,BSON.BSON_DATA_DATE=9,BSON.BSON_DATA_NULL=10,BSON.BSON_DATA_REGEXP=11,BSON.BSON_DATA_DBPOINTER=12,BSON.BSON_DATA_CODE=13,BSON.BSON_DATA_SYMBOL=14,BSON.BSON_DATA_CODE_W_SCOPE=15,BSON.BSON_DATA_INT=16,BSON.BSON_DATA_TIMESTAMP=17,BSON.BSON_DATA_LONG=18,BSON.BSON_DATA_DECIMAL128=19,BSON.BSON_DATA_MIN_KEY=255,BSON.BSON_DATA_MAX_KEY=127,BSON.BSON_BINARY_SUBTYPE_DEFAULT=0,BSON.BSON_BINARY_SUBTYPE_FUNCTION=1,BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY=2,BSON.BSON_BINARY_SUBTYPE_UUID=3,BSON.BSON_BINARY_SUBTYPE_MD5=4,BSON.BSON_BINARY_SUBTYPE_USER_DEFINED=128,BSON.BSON_INT32_MAX=2147483647,BSON.BSON_INT32_MIN=-2147483648,BSON.BSON_INT64_MAX=Math.pow(2,63)-1,BSON.BSON_INT64_MIN=-Math.pow(2,63),BSON.JS_INT_MAX=9007199254740992,BSON.JS_INT_MIN=-9007199254740992;var JS_INT_MAX_LONG=Long.fromNumber(9007199254740992),JS_INT_MIN_LONG=Long.fromNumber(-9007199254740992);module.exports=deserialize},function(t,e,r){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(104).writeIEEE754,o=r(23).Long,s=r(59),a=r(26).Binary,u=r(15).normalizedFunctionString,c=/\x00/,l=["$db","$ref","$id","$clusterTime"],f=function(t){return"object"===(void 0===t?"undefined":n(t))&&"[object Date]"===Object.prototype.toString.call(t)},h=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t,e,r,n,i){t[n++]=C.BSON_DATA_STRING,t[(n=n+(i?t.write(e,n,"ascii"):t.write(e,n,"utf8"))+1)-1]=0;var o=t.write(r,n+4,"utf8");return t[n+3]=o+1>>24&255,t[n+2]=o+1>>16&255,t[n+1]=o+1>>8&255,t[n]=o+1&255,n=n+4+o,t[n++]=0,n},d=function(t,e,r,n,s){if(Math.floor(r)===r&&r>=C.JS_INT_MIN&&r<=C.JS_INT_MAX)if(r>=C.BSON_INT32_MIN&&r<=C.BSON_INT32_MAX){t[n++]=C.BSON_DATA_INT;var a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8");n+=a,t[n++]=0,t[n++]=255&r,t[n++]=r>>8&255,t[n++]=r>>16&255,t[n++]=r>>24&255}else if(r>=C.JS_INT_MIN&&r<=C.JS_INT_MAX)t[n++]=C.BSON_DATA_NUMBER,n+=a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,i(t,r,n,"little",52,8),n+=8;else{t[n++]=C.BSON_DATA_LONG,n+=a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var u=o.fromNumber(r),c=u.getLowBits(),l=u.getHighBits();t[n++]=255&c,t[n++]=c>>8&255,t[n++]=c>>16&255,t[n++]=c>>24&255,t[n++]=255&l,t[n++]=l>>8&255,t[n++]=l>>16&255,t[n++]=l>>24&255}else t[n++]=C.BSON_DATA_NUMBER,n+=a=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,i(t,r,n,"little",52,8),n+=8;return n},y=function(t,e,r,n,i){return t[n++]=C.BSON_DATA_NULL,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,n},v=function(t,e,r,n,i){return t[n++]=C.BSON_DATA_BOOLEAN,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,t[n++]=r?1:0,n},_=function(t,e,r,n,i){t[n++]=C.BSON_DATA_DATE,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var s=o.fromNumber(r.getTime()),a=s.getLowBits(),u=s.getHighBits();return t[n++]=255&a,t[n++]=a>>8&255,t[n++]=a>>16&255,t[n++]=a>>24&255,t[n++]=255&u,t[n++]=u>>8&255,t[n++]=u>>16&255,t[n++]=u>>24&255,n},m=function(t,e,r,n,i){if(t[n++]=C.BSON_DATA_REGEXP,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,r.source&&null!=r.source.match(c))throw Error("value "+r.source+" must not contain null bytes");return n+=t.write(r.source,n,"utf8"),t[n++]=0,r.global&&(t[n++]=115),r.ignoreCase&&(t[n++]=105),r.multiline&&(t[n++]=109),t[n++]=0,n},g=function(t,e,r,n,i){if(t[n++]=C.BSON_DATA_REGEXP,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,null!=r.pattern.match(c))throw Error("pattern "+r.pattern+" must not contain null bytes");return n+=t.write(r.pattern,n,"utf8"),t[n++]=0,n+=t.write(r.options.split("").sort().join(""),n,"utf8"),t[n++]=0,n},b=function(t,e,r,n,i){return null===r?t[n++]=C.BSON_DATA_NULL:"MinKey"===r._bsontype?t[n++]=C.BSON_DATA_MIN_KEY:t[n++]=C.BSON_DATA_MAX_KEY,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,n},w=function(t,e,r,n,i){if(t[n++]=C.BSON_DATA_OID,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,"string"==typeof r.id)t.write(r.id,n,"binary");else{if(!r.id||!r.id.copy)throw new Error("object ["+JSON.stringify(r)+"] is not a valid ObjectId");r.id.copy(t,n,0,12)}return n+12},O=function(t,e,r,n,i){t[n++]=C.BSON_DATA_BINARY,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var o=r.length;return t[n++]=255&o,t[n++]=o>>8&255,t[n++]=o>>16&255,t[n++]=o>>24&255,t[n++]=C.BSON_BINARY_SUBTYPE_DEFAULT,r.copy(t,n,0,o),n+=o},S=function(t,e,r,n,i,o,s,a,u,c){for(var l=0;l<c.length;l++)if(c[l]===r)throw new Error("cyclic dependency detected");c.push(r),t[n++]=Array.isArray(r)?C.BSON_DATA_ARRAY:C.BSON_DATA_OBJECT,n+=u?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var f=B(t,r,i,n,o+1,s,a,c);return c.pop(),f},A=function(t,e,r,n,i){return t[n++]=C.BSON_DATA_DECIMAL128,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,r.bytes.copy(t,n,0,16),n+16},E=function(t,e,r,n,i){t[n++]="Long"===r._bsontype?C.BSON_DATA_LONG:C.BSON_DATA_TIMESTAMP,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var o=r.getLowBits(),s=r.getHighBits();return t[n++]=255&o,t[n++]=o>>8&255,t[n++]=o>>16&255,t[n++]=o>>24&255,t[n++]=255&s,t[n++]=s>>8&255,t[n++]=s>>16&255,t[n++]=s>>24&255,n},$=function(t,e,r,n,i){return t[n++]=C.BSON_DATA_INT,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,t[n++]=255&r,t[n++]=r>>8&255,t[n++]=r>>16&255,t[n++]=r>>24&255,n},j=function(t,e,r,n,o){return t[n++]=C.BSON_DATA_NUMBER,n+=o?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0,i(t,r,n,"little",52,8),n+=8},x=function(t,e,r,n,i,o,s){t[n++]=C.BSON_DATA_CODE,n+=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var a=u(r),c=t.write(a,n+4,"utf8")+1;return t[n]=255&c,t[n+1]=c>>8&255,t[n+2]=c>>16&255,t[n+3]=c>>24&255,n=n+4+c-1,t[n++]=0,n},N=function(t,e,r,i,o,s,a,u,c){if(r.scope&&"object"===n(r.scope)){t[i++]=C.BSON_DATA_CODE_W_SCOPE;var l=c?t.write(e,i,"ascii"):t.write(e,i,"utf8");i+=l,t[i++]=0;var f=i,h="string"==typeof r.code?r.code:r.code.toString();i+=4;var p=t.write(h,i+4,"utf8")+1;t[i]=255&p,t[i+1]=p>>8&255,t[i+2]=p>>16&255,t[i+3]=p>>24&255,t[i+4+p-1]=0,i=i+p+4;var d=B(t,r.scope,o,i,s+1,a,u);i=d-1;var y=d-f;t[f++]=255&y,t[f++]=y>>8&255,t[f++]=y>>16&255,t[f++]=y>>24&255,t[i++]=0}else{t[i++]=C.BSON_DATA_CODE,i+=l=c?t.write(e,i,"ascii"):t.write(e,i,"utf8"),t[i++]=0,h=r.code.toString();var v=t.write(h,i+4,"utf8")+1;t[i]=255&v,t[i+1]=v>>8&255,t[i+2]=v>>16&255,t[i+3]=v>>24&255,i=i+4+v-1,t[i++]=0}return i},P=function(t,e,r,n,i){t[n++]=C.BSON_DATA_BINARY,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var o=r.value(!0),s=r.position;return r.sub_type===a.SUBTYPE_BYTE_ARRAY&&(s+=4),t[n++]=255&s,t[n++]=s>>8&255,t[n++]=s>>16&255,t[n++]=s>>24&255,t[n++]=r.sub_type,r.sub_type===a.SUBTYPE_BYTE_ARRAY&&(s-=4,t[n++]=255&s,t[n++]=s>>8&255,t[n++]=s>>16&255,t[n++]=s>>24&255),o.copy(t,n,0,r.position),n+=r.position},k=function(t,e,r,n,i){t[n++]=C.BSON_DATA_SYMBOL,n+=i?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var o=t.write(r.value,n+4,"utf8")+1;return t[n]=255&o,t[n+1]=o>>8&255,t[n+2]=o>>16&255,t[n+3]=o>>24&255,n=n+4+o-1,t[n++]=0,n},T=function(t,e,r,n,i,o,s){t[n++]=C.BSON_DATA_OBJECT,n+=s?t.write(e,n,"ascii"):t.write(e,n,"utf8"),t[n++]=0;var a,u=n,c=(a=null!=r.db?B(t,{$ref:r.namespace,$id:r.oid,$db:r.db},!1,n,i+1,o):B(t,{$ref:r.namespace,$id:r.oid},!1,n,i+1,o))-u;return t[u++]=255&c,t[u++]=c>>8&255,t[u++]=c>>16&255,t[u++]=c>>24&255,a},B=function(t,r,i,o,a,u,B,C){o=o||0,(C=C||[]).push(r);var D=o+4;if(Array.isArray(r))for(var M=0;M<r.length;M++){var R=""+M,F=r[M];if(F&&F.toBSON){if("function"!=typeof F.toBSON)throw new Error("toBSON is not a function");F=F.toBSON()}var I=void 0===F?"undefined":n(F);"string"===I?D=p(t,R,F,D,!0):"number"===I?D=d(t,R,F,D,!0):"boolean"===I?D=v(t,R,F,D,!0):F instanceof Date||f(F)?D=_(t,R,F,D,!0):void 0===F?D=y(t,R,0,D,!0):null===F?D=y(t,R,0,D,!0):"ObjectID"===F._bsontype||"ObjectId"===F._bsontype?D=w(t,R,F,D,!0):e.isBuffer(F)?D=O(t,R,F,D,!0):F instanceof RegExp||h(F)?D=m(t,R,F,D,!0):"object"===I&&null==F._bsontype?D=S(t,R,F,D,i,a,u,B,!0,C):"object"===I&&"Decimal128"===F._bsontype?D=A(t,R,F,D,!0):"Long"===F._bsontype||"Timestamp"===F._bsontype?D=E(t,R,F,D,!0):"Double"===F._bsontype?D=j(t,R,F,D,!0):"function"==typeof F&&u?D=x(t,R,F,D,0,0,u):"Code"===F._bsontype?D=N(t,R,F,D,i,a,u,B,!0):"Binary"===F._bsontype?D=P(t,R,F,D,!0):"Symbol"===F._bsontype?D=k(t,R,F,D,!0):"DBRef"===F._bsontype?D=T(t,R,F,D,a,u,!0):"BSONRegExp"===F._bsontype?D=g(t,R,F,D,!0):"Int32"===F._bsontype?D=$(t,R,F,D,!0):"MinKey"!==F._bsontype&&"MaxKey"!==F._bsontype||(D=b(t,R,F,D,!0))}else if(r instanceof s)for(var L=r.entries(),U=!1;!U;){var V=L.next();if(!(U=V.done)){if(R=V.value[0],I=void 0===(F=V.value[1])?"undefined":n(F),"string"==typeof R&&-1===l.indexOf(R)){if(null!=R.match(c))throw Error("key "+R+" must not contain null bytes");if(i){if("$"===R[0])throw Error("key "+R+" must not start with '$'");if(~R.indexOf("."))throw Error("key "+R+" must not contain '.'")}}"string"===I?D=p(t,R,F,D):"number"===I?D=d(t,R,F,D):"boolean"===I?D=v(t,R,F,D):F instanceof Date||f(F)?D=_(t,R,F,D):null===F||void 0===F&&!1===B?D=y(t,R,0,D):"ObjectID"===F._bsontype||"ObjectId"===F._bsontype?D=w(t,R,F,D):e.isBuffer(F)?D=O(t,R,F,D):F instanceof RegExp||h(F)?D=m(t,R,F,D):"object"===I&&null==F._bsontype?D=S(t,R,F,D,i,a,u,B,!1,C):"object"===I&&"Decimal128"===F._bsontype?D=A(t,R,F,D):"Long"===F._bsontype||"Timestamp"===F._bsontype?D=E(t,R,F,D):"Double"===F._bsontype?D=j(t,R,F,D):"Code"===F._bsontype?D=N(t,R,F,D,i,a,u,B):"function"==typeof F&&u?D=x(t,R,F,D,0,0,u):"Binary"===F._bsontype?D=P(t,R,F,D):"Symbol"===F._bsontype?D=k(t,R,F,D):"DBRef"===F._bsontype?D=T(t,R,F,D,a,u):"BSONRegExp"===F._bsontype?D=g(t,R,F,D):"Int32"===F._bsontype?D=$(t,R,F,D):"MinKey"!==F._bsontype&&"MaxKey"!==F._bsontype||(D=b(t,R,F,D))}}else{if(r.toBSON){if("function"!=typeof r.toBSON)throw new Error("toBSON is not a function");if(null!=(r=r.toBSON())&&"object"!==(void 0===r?"undefined":n(r)))throw new Error("toBSON function did not return an object")}for(R in r){if((F=r[R])&&F.toBSON){if("function"!=typeof F.toBSON)throw new Error("toBSON is not a function");F=F.toBSON()}if(I=void 0===F?"undefined":n(F),"string"==typeof R&&-1===l.indexOf(R)){if(null!=R.match(c))throw Error("key "+R+" must not contain null bytes");if(i){if("$"===R[0])throw Error("key "+R+" must not start with '$'");if(~R.indexOf("."))throw Error("key "+R+" must not contain '.'")}}"string"===I?D=p(t,R,F,D):"number"===I?D=d(t,R,F,D):"boolean"===I?D=v(t,R,F,D):F instanceof Date||f(F)?D=_(t,R,F,D):void 0===F?!1===B&&(D=y(t,R,0,D)):null===F?D=y(t,R,0,D):"ObjectID"===F._bsontype||"ObjectId"===F._bsontype?D=w(t,R,F,D):e.isBuffer(F)?D=O(t,R,F,D):F instanceof RegExp||h(F)?D=m(t,R,F,D):"object"===I&&null==F._bsontype?D=S(t,R,F,D,i,a,u,B,!1,C):"object"===I&&"Decimal128"===F._bsontype?D=A(t,R,F,D):"Long"===F._bsontype||"Timestamp"===F._bsontype?D=E(t,R,F,D):"Double"===F._bsontype?D=j(t,R,F,D):"Code"===F._bsontype?D=N(t,R,F,D,i,a,u,B):"function"==typeof F&&u?D=x(t,R,F,D,0,0,u):"Binary"===F._bsontype?D=P(t,R,F,D):"Symbol"===F._bsontype?D=k(t,R,F,D):"DBRef"===F._bsontype?D=T(t,R,F,D,a,u):"BSONRegExp"===F._bsontype?D=g(t,R,F,D):"Int32"===F._bsontype?D=$(t,R,F,D):"MinKey"!==F._bsontype&&"MaxKey"!==F._bsontype||(D=b(t,R,F,D))}}C.pop(),t[D++]=0;var q=D-o;return t[o++]=255&q,t[o++]=q>>8&255,t[o++]=q>>16&255,t[o++]=q>>24&255,D},C={BSON_DATA_NUMBER:1,BSON_DATA_STRING:2,BSON_DATA_OBJECT:3,BSON_DATA_ARRAY:4,BSON_DATA_BINARY:5,BSON_DATA_UNDEFINED:6,BSON_DATA_OID:7,BSON_DATA_BOOLEAN:8,BSON_DATA_DATE:9,BSON_DATA_NULL:10,BSON_DATA_REGEXP:11,BSON_DATA_CODE:13,BSON_DATA_SYMBOL:14,BSON_DATA_CODE_W_SCOPE:15,BSON_DATA_INT:16,BSON_DATA_TIMESTAMP:17,BSON_DATA_LONG:18,BSON_DATA_DECIMAL128:19,BSON_DATA_MIN_KEY:255,BSON_DATA_MAX_KEY:127,BSON_BINARY_SUBTYPE_DEFAULT:0,BSON_BINARY_SUBTYPE_FUNCTION:1,BSON_BINARY_SUBTYPE_BYTE_ARRAY:2,BSON_BINARY_SUBTYPE_UUID:3,BSON_BINARY_SUBTYPE_MD5:4,BSON_BINARY_SUBTYPE_USER_DEFINED:128,BSON_INT32_MAX:2147483647,BSON_INT32_MIN:-2147483648};C.BSON_INT64_MAX=Math.pow(2,63)-1,C.BSON_INT64_MIN=-Math.pow(2,63),C.JS_INT_MAX=9007199254740992,C.JS_INT_MIN=-9007199254740992,t.exports=B}).call(this,r(1).Buffer)},function(t,e,r){"use strict";e.readIEEE754=function(t,e,r,n,i){var o,s,a="big"===r,u=8*i-n-1,c=(1<<u)-1,l=c>>1,f=-7,h=a?0:i-1,p=a?1:-1,d=t[e+h];for(h+=p,o=d&(1<<-f)-1,d>>=-f,f+=u;f>0;o=256*o+t[e+h],h+=p,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=n;f>0;s=256*s+t[e+h],h+=p,f-=8);if(0===o)o=1-l;else{if(o===c)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,n),o-=l}return(d?-1:1)*s*Math.pow(2,o-n)},e.writeIEEE754=function(t,e,r,n,i,o){var s,a,u,c="big"===n,l=8*o-i-1,f=(1<<l)-1,h=f>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=c?o-1:0,y=c?-1:1,v=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+h>=1?p/u:p*Math.pow(2,1-h))*u>=2&&(s++,u/=2),s+h>=f?(a=0,s=f):s+h>=1?(a=(e*u-1)*Math.pow(2,i),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+d]=255&a,d+=y,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;t[r+d]=255&s,d+=y,s/=256,l-=8);t[r+d-y]|=128*v}},function(t,e,r){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(23).Long,o=r(34).Double,s=r(35).Timestamp,a=r(36).ObjectID,u=r(38).Symbol,c=r(37).BSONRegExp,l=r(39).Code,f=r(40),h=r(41).MinKey,p=r(42).MaxKey,d=r(43).DBRef,y=r(26).Binary,v=r(15).normalizedFunctionString,_=function(t){return"object"===(void 0===t?"undefined":n(t))&&"[object Date]"===Object.prototype.toString.call(t)},m=function(t,e,r){var n=5;if(Array.isArray(t))for(var i=0;i<t.length;i++)n+=g(i.toString(),t[i],e,!0,r);else for(var o in t.toBSON&&(t=t.toBSON()),t)n+=g(o,t[o],e,!1,r);return n};function g(t,r,g,w,O){switch(r&&r.toBSON&&(r=r.toBSON()),void 0===r?"undefined":n(r)){case"string":return 1+e.byteLength(t,"utf8")+1+4+e.byteLength(r,"utf8")+1;case"number":return Math.floor(r)===r&&r>=b.JS_INT_MIN&&r<=b.JS_INT_MAX&&r>=b.BSON_INT32_MIN&&r<=b.BSON_INT32_MAX?(null!=t?e.byteLength(t,"utf8")+1:0)+5:(null!=t?e.byteLength(t,"utf8")+1:0)+9;case"undefined":return w||!O?(null!=t?e.byteLength(t,"utf8")+1:0)+1:0;case"boolean":return(null!=t?e.byteLength(t,"utf8")+1:0)+2;case"object":if(null==r||r instanceof h||r instanceof p||"MinKey"===r._bsontype||"MaxKey"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+1;if(r instanceof a||"ObjectID"===r._bsontype||"ObjectId"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+13;if(r instanceof Date||_(r))return(null!=t?e.byteLength(t,"utf8")+1:0)+9;if(void 0!==e&&e.isBuffer(r))return(null!=t?e.byteLength(t,"utf8")+1:0)+6+r.length;if(r instanceof i||r instanceof o||r instanceof s||"Long"===r._bsontype||"Double"===r._bsontype||"Timestamp"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+9;if(r instanceof f||"Decimal128"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+17;if(r instanceof l||"Code"===r._bsontype)return null!=r.scope&&Object.keys(r.scope).length>0?(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+4+e.byteLength(r.code.toString(),"utf8")+1+m(r.scope,g,O):(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+e.byteLength(r.code.toString(),"utf8")+1;if(r instanceof y||"Binary"===r._bsontype)return r.sub_type===y.SUBTYPE_BYTE_ARRAY?(null!=t?e.byteLength(t,"utf8")+1:0)+(r.position+1+4+1+4):(null!=t?e.byteLength(t,"utf8")+1:0)+(r.position+1+4+1);if(r instanceof u||"Symbol"===r._bsontype)return(null!=t?e.byteLength(t,"utf8")+1:0)+e.byteLength(r.value,"utf8")+4+1+1;if(r instanceof d||"DBRef"===r._bsontype){var S={$ref:r.namespace,$id:r.oid};return null!=r.db&&(S.$db=r.db),(null!=t?e.byteLength(t,"utf8")+1:0)+1+m(S,g,O)}return r instanceof RegExp||"[object RegExp]"===Object.prototype.toString.call(r)?(null!=t?e.byteLength(t,"utf8")+1:0)+1+e.byteLength(r.source,"utf8")+1+(r.global?1:0)+(r.ignoreCase?1:0)+(r.multiline?1:0)+1:r instanceof c||"BSONRegExp"===r._bsontype?(null!=t?e.byteLength(t,"utf8")+1:0)+1+e.byteLength(r.pattern,"utf8")+1+e.byteLength(r.options,"utf8")+1:(null!=t?e.byteLength(t,"utf8")+1:0)+m(r,g,O)+1;case"function":if(r instanceof RegExp||"[object RegExp]"===Object.prototype.toString.call(r)||"[object RegExp]"===String.call(r))return(null!=t?e.byteLength(t,"utf8")+1:0)+1+e.byteLength(r.source,"utf8")+1+(r.global?1:0)+(r.ignoreCase?1:0)+(r.multiline?1:0)+1;if(g&&null!=r.scope&&Object.keys(r.scope).length>0)return(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+4+e.byteLength(v(r),"utf8")+1+m(r.scope,g,O);if(g)return(null!=t?e.byteLength(t,"utf8")+1:0)+1+4+e.byteLength(v(r),"utf8")+1}return 0}var b={BSON_INT32_MAX:2147483647,BSON_INT32_MIN:-2147483648,JS_INT_MAX:9007199254740992,JS_INT_MIN:-9007199254740992};t.exports=m}).call(this,r(1).Buffer)},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=r(33).Decimal128},function(t,e,r){"use strict";
/*!
 * [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) ObjectId
 * @constructor NodeMongoDbObjectId
 * @see ObjectId
 */var n=r(33).ObjectID;
/*!
 * Getter for convenience with populate, see gh-6115
 */Object.defineProperty(n.prototype,"_id",{enumerable:!1,configurable:!0,get:function(){return this}}),
/*!
 * ignore
 */
t.exports=n},function(t,e,r){"use strict";
/*!
 * ignore
 */t.exports=function(){}},function(t,e,r){"use strict";
/*!
 * Dependencies
 */var n=r(110).ctor("require","modify","init","default","ignore");t.exports=function(){this.strictMode=void 0,this.selected=void 0,this.shardval=void 0,this.saveError=void 0,this.validationError=void 0,this.adhocPaths=void 0,this.removing=void 0,this.inserting=void 0,this.saving=void 0,this.version=void 0,this.getters={},this._id=void 0,this.populate=void 0,this.populated=void 0,this.wasPopulated=!1,this.scope=void 0,this.activePaths=new n,this.pathsToScopes={},this.cachedRequired={},this.session=null,this.$setCalled=new Set,this.ownerDocument=void 0,this.fullPath=void 0}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(2),i=t.exports=function(){};
/*!
 * StateMachine represents a minimal `interface` for the
 * constructors it builds via StateMachine.ctor(...).
 *
 * @api private
 */
/*!
 * StateMachine.ctor('state1', 'state2', ...)
 * A factory method for subclassing StateMachine.
 * The arguments are a list of states. For each state,
 * the constructor's prototype gets state transition
 * methods named after each state. These transition methods
 * place their path argument into the given state.
 *
 * @param {String} state
 * @param {String} [state]
 * @return {Function} subclass constructor
 * @private
 */
i.ctor=function(){var t=n.args(arguments),e=function(){i.apply(this,arguments),this.paths={},this.states={},this.stateNames=t;for(var e=t.length,r=void 0;e--;)r=t[e],this.states[r]={}};return e.prototype=new i,t.forEach(function(t){e.prototype[t]=function(e){this._changeState(e,t)}}),e},
/*!
 * This function is wrapped by the state change functions:
 *
 * - `require(path)`
 * - `modify(path)`
 * - `init(path)`
 *
 * @api private
 */
i.prototype._changeState=function(t,e){var r=this.states[this.paths[t]];r&&delete r[t],this.paths[t]=e,this.states[e][t]=!0},
/*!
 * ignore
 */
i.prototype.clear=function(t){for(var e=Object.keys(this.states[t]),r=e.length,n=void 0;r--;)n=e[r],delete this.states[t][n],delete this.paths[n]},
/*!
 * Checks to see if at least one path is in the states passed in via `arguments`
 * e.g., this.some('required', 'inited')
 *
 * @param {String} state that we want to check for.
 * @private
 */
i.prototype.some=function(){var t=this,e=arguments.length?arguments:this.stateNames;return Array.prototype.some.call(e,function(e){return Object.keys(t.states[e]).length})},
/*!
 * This function builds the functions that get assigned to `forEach` and `map`,
 * since both of those methods share a lot of the same logic.
 *
 * @param {String} iterMethod is either 'forEach' or 'map'
 * @return {Function}
 * @api private
 */
i.prototype._iter=function(t){return function(){var e=arguments.length,r=n.args(arguments,0,e-1),i=arguments[e-1];r.length||(r=this.stateNames);var o=this;return r.reduce(function(t,e){return t.concat(Object.keys(o.states[e]))},[])[t](function(t,e,r){return i(t,e,r)})}},
/*!
 * Iterates over the paths that belong to one of the parameter states.
 *
 * The function profile can look like:
 * this.forEach(state1, fn);         // iterates over all paths in state1
 * this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2
 * this.forEach(fn);                 // iterates over all paths in all states
 *
 * @param {String} [state]
 * @param {String} [state]
 * @param {Function} callback
 * @private
 */
i.prototype.forEach=function(){return this.forEach=this._iter("forEach"),this.forEach.apply(this,arguments)},
/*!
 * Maps over the paths that belong to one of the parameter states.
 *
 * The function profile can look like:
 * this.forEach(state1, fn);         // iterates over all paths in state1
 * this.forEach(state1, state2, fn); // iterates over all paths in state1 or state2
 * this.forEach(fn);                 // iterates over all paths in all states
 *
 * @param {String} [state]
 * @param {String} [state]
 * @param {Function} callback
 * @return {Array}
 * @private
 */
i.prototype.map=function(){return this.map=this._iter("map"),this.map.apply(this,arguments)}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=1e3,o=60*i,s=60*o,a=24*s,u=7*a,c=365.25*a;function l(t,e,r,n){var i=e>=1.5*r;return Math.round(t/r)+" "+n+(i?"s":"")}t.exports=function(t,e){e=e||{};var r=void 0===t?"undefined":n(t);if("string"===r&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!e)return;var r=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return r*c;case"weeks":case"week":case"w":return r*u;case"days":case"day":case"d":return r*a;case"hours":case"hour":case"hrs":case"hr":case"h":return r*s;case"minutes":case"minute":case"mins":case"min":case"m":return r*o;case"seconds":case"second":case"secs":case"sec":case"s":return r*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}(t);if("number"===r&&isFinite(t))return e.long?function(t){var e=Math.abs(t);if(e>=a)return l(t,e,a,"day");if(e>=s)return l(t,e,s,"hour");if(e>=o)return l(t,e,o,"minute");if(e>=i)return l(t,e,i,"second");return t+" ms"}(t):function(t){var e=Math.abs(t);if(e>=a)return Math.round(t/a)+"d";if(e>=s)return Math.round(t/s)+"h";if(e>=o)return Math.round(t/o)+"m";if(e>=i)return Math.round(t/i)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=["__proto__","constructor","prototype"];
/*!
 * Returns the value passed to it.
 */
function o(t){return t}e.get=function(t,r,n,i){var s;"function"==typeof n&&(n.length<2?(i=n,n=void 0):(s=n,n=void 0)),i||(i=o);var a="string"==typeof t?t.split("."):t;if(!Array.isArray(a))throw new TypeError("Invalid `path`. Must be either string or array");for(var u,c=r,l=0;l<a.length;++l){if(u=a[l],Array.isArray(c)&&!/^\d+$/.test(u)){var f=a.slice(l);return[].concat(c).map(function(t){return t?e.get(f,t,n||s,i):i(void 0)})}if(s)c=s(c,u);else{var h=n&&c[n]?c[n]:c;c=h instanceof Map?h.get(u):h[u]}if(!c)return i(c)}return i(c)},e.has=function(t,e){var r="string"==typeof t?t.split("."):t;if(!Array.isArray(r))throw new TypeError("Invalid `path`. Must be either string or array");for(var i=r.length,o=e,s=0;s<i;++s){if(null==o||"object"!==(void 0===o?"undefined":n(o))||!(r[s]in o))return!1;o=o[r[s]]}return!0},e.unset=function(t,e){var r="string"==typeof t?t.split("."):t;if(!Array.isArray(r))throw new TypeError("Invalid `path`. Must be either string or array");for(var o=r.length,s=e,a=0;a<o;++a){if(null==s||"object"!==(void 0===s?"undefined":n(s))||!(r[a]in s))return!1;if(-1!==i.indexOf(r[a]))return!1;if(a===o-1)return delete s[r[a]],!0;s=s instanceof Map?s.get(r[a]):s[r[a]]}return!0},e.set=function(t,r,n,s,a,u){var c;"function"==typeof s&&(s.length<2?(a=s,s=void 0):(c=s,s=void 0)),a||(a=o);var l="string"==typeof t?t.split("."):t;if(!Array.isArray(l))throw new TypeError("Invalid `path`. Must be either string or array");if(null!=n){for(var f=0;f<l.length;++f)if(-1!==i.indexOf(l[f]))return;for(var h,p=u||/\$/.test(t)&&!1!==u,d=n,y=(f=0,l.length-1);f<y;++f)if("$"!=(h=l[f])){if(Array.isArray(d)&&!/^\d+$/.test(h)){var v=l.slice(f);if(!p&&Array.isArray(r))for(var _=0;_<d.length&&_<r.length;++_)e.set(v,r[_],d[_],s||c,a,p);else for(_=0;_<d.length;++_)e.set(v,r,d[_],s||c,a,p);return}if(c)d=c(d,h);else{var m=s&&d[s]?d[s]:d;d=m instanceof Map?m.get(h):m[h]}if(!d)return}else if(f==y-1)break;if(h=l[y],s&&d[s]&&(d=d[s]),Array.isArray(d)&&!/^\d+$/.test(h))if(!p&&Array.isArray(r))!
/*!
 * Recursively set nested arrays
 */
function t(e,r,n,i,o,s){for(var a,u=0;u<e.length&&u<r.length;++u)a=e[u],Array.isArray(a)&&Array.isArray(r[u])?t(a,r[u],n,i,o,s):a&&(i?i(a,n,s(r[u])):(a[o]&&(a=a[o]),a[n]=s(r[u])))}(d,r,h,c,s,a);else for(_=0;_<d.length;++_)item=d[_],item&&(c?c(item,h,a(r)):(item[s]&&(item=item[s]),item[h]=a(r)));else c?c(d,h,a(r)):d instanceof Map?d.set(h,a(r)):d[h]=a(r)}}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var i=r(46);t.exports=function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._docs={},null!=e&&(e=i(e),Object.assign(this,e),"object"===n(e.subPopulate)&&(this.populate=e.subPopulate),null!=e.perDocumentLimit&&null!=e.limit))throw new Error("Can not use `limit` and `perDocumentLimit` at the same time. Path: `"+e.path+"`.")}},function(t,e,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,s,a=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var c in r=Object(arguments[u]))i.call(r,c)&&(a[c]=r[c]);if(n){s=n(r);for(var l=0;l<s.length;l++)o.call(r,s[l])&&(a[s[l]]=r[s[l]])}}return a}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(62),o=r(21),s=r(3),a=r(67),u=r(117)("mquery");function c(t,e){if(!(this instanceof c))return new c(t,e);var r=this.constructor.prototype;this.op=r.op||void 0,this.options=Object.assign({},r.options),this._conditions=r._conditions?a.clone(r._conditions):{},this._fields=r._fields?a.clone(r._fields):void 0,this._update=r._update?a.clone(r._update):void 0,this._path=r._path||void 0,this._distinct=r._distinct||void 0,this._collection=r._collection||void 0,this._traceFunction=r._traceFunction||void 0,e&&this.setOptions(e),t&&(t.find&&t.remove&&t.update?this.collection(t):this.find(t))}var l="$geoWithin";Object.defineProperty(c,"use$geoWithin",{get:function(){return"$geoWithin"==l},set:function(t){l=!0===t?"$geoWithin":"$within"}}),c.prototype.toConstructor=function(){function t(e,r){if(!(this instanceof t))return new t(e,r);c.call(this,e,r)}a.inherits(t,c);var e=t.prototype;return e.options={},e.setOptions(this.options),e.op=this.op,e._conditions=a.clone(this._conditions),e._fields=a.clone(this._fields),e._update=a.clone(this._update),e._path=this._path,e._distinct=this._distinct,e._collection=this._collection,e._traceFunction=this._traceFunction,t},c.prototype.setOptions=function(t){if(!t||!a.isObject(t))return this;for(var e,r=a.keys(t),n=0;n<r.length;++n)if("function"==typeof this[e=r[n]]){var i=a.isArray(t[e])?t[e]:[t[e]];this[e].apply(this,i)}else this.options[e]=t[e];return this},c.prototype.collection=function(t){return this._collection=new c.Collection(t),this},c.prototype.collation=function(t){return this.options.collation=t,this},c.prototype.$where=function(t){return this._conditions.$where=t,this},c.prototype.where=function(){if(!arguments.length)return this;this.op||(this.op="find");var t=n(arguments[0]);if("string"==t)return this._path=arguments[0],2===arguments.length&&(this._conditions[this._path]=arguments[1]),this;if("object"==t&&!Array.isArray(arguments[0]))return this.merge(arguments[0]);throw new TypeError("path must be a string or object")},c.prototype.equals=function(t){this._ensurePath("equals");var e=this._path;return this._conditions[e]=t,this},c.prototype.eq=function(t){this._ensurePath("eq");var e=this._path;return this._conditions[e]=t,this},c.prototype.or=function(t){var e=this._conditions.$or||(this._conditions.$or=[]);return a.isArray(t)||(t=[t]),e.push.apply(e,t),this},c.prototype.nor=function(t){var e=this._conditions.$nor||(this._conditions.$nor=[]);return a.isArray(t)||(t=[t]),e.push.apply(e,t),this},c.prototype.and=function(t){var e=this._conditions.$and||(this._conditions.$and=[]);return Array.isArray(t)||(t=[t]),e.push.apply(e,t),this},
/*!
 * gt, gte, lt, lte, ne, in, nin, all, regex, size, maxDistance
 *
 *     Thing.where('type').nin(array)
 */
"gt gte lt lte ne in nin all regex size maxDistance minDistance".split(" ").forEach(function(t){c.prototype[t]=function(){var e,r;return 1===arguments.length?(this._ensurePath(t),r=arguments[0],e=this._path):(r=arguments[1],e=arguments[0]),(null===this._conditions[e]||"object"===n(this._conditions[e])?this._conditions[e]:this._conditions[e]={})["$"+t]=r,this}}),c.prototype.mod=function(){var t,e;return 1===arguments.length?(this._ensurePath("mod"),t=arguments[0],e=this._path):2!==arguments.length||a.isArray(arguments[1])?3===arguments.length?(t=i(arguments,1),e=arguments[0]):(t=arguments[1],e=arguments[0]):(this._ensurePath("mod"),t=i(arguments),e=this._path),(this._conditions[e]||(this._conditions[e]={})).$mod=t,this},c.prototype.exists=function(){var t,e;return 0===arguments.length?(this._ensurePath("exists"),t=this._path,e=!0):1===arguments.length?"boolean"==typeof arguments[0]?(this._ensurePath("exists"),t=this._path,e=arguments[0]):(t=arguments[0],e=!0):2===arguments.length&&(t=arguments[0],e=arguments[1]),(this._conditions[t]||(this._conditions[t]={})).$exists=e,this},c.prototype.elemMatch=function(){if(null==arguments[0])throw new TypeError("Invalid argument");var t,e,r;if("function"==typeof arguments[0])this._ensurePath("elemMatch"),e=this._path,t=arguments[0];else if(a.isObject(arguments[0]))this._ensurePath("elemMatch"),e=this._path,r=arguments[0];else if("function"==typeof arguments[1])e=arguments[0],t=arguments[1];else{if(!arguments[1]||!a.isObject(arguments[1]))throw new TypeError("Invalid argument");e=arguments[0],r=arguments[1]}return t&&(t(r=new c),r=r._conditions),(this._conditions[e]||(this._conditions[e]={})).$elemMatch=r,this},c.prototype.within=function(){if(this._ensurePath("within"),this._geoComparison=l,0===arguments.length)return this;if(2===arguments.length)return this.box.apply(this,arguments);if(2<arguments.length)return this.polygon.apply(this,arguments);var t=arguments[0];if(!t)throw new TypeError("Invalid argument");if(t.center)return this.circle(t);if(t.box)return this.box.apply(this,t.box);if(t.polygon)return this.polygon.apply(this,t.polygon);if(t.type&&t.coordinates)return this.geometry(t);throw new TypeError("Invalid argument")},c.prototype.box=function(){var t,e;if(3===arguments.length)t=arguments[0],e=[arguments[1],arguments[2]];else{if(2!==arguments.length)throw new TypeError("Invalid argument");this._ensurePath("box"),t=this._path,e=[arguments[0],arguments[1]]}return(this._conditions[t]||(this._conditions[t]={}))[this._geoComparison||l]={$box:e},this},c.prototype.polygon=function(){var t,e;return"string"==typeof arguments[0]?(e=arguments[0],t=i(arguments,1)):(this._ensurePath("polygon"),e=this._path,t=i(arguments)),(this._conditions[e]||(this._conditions[e]={}))[this._geoComparison||l]={$polygon:t},this},c.prototype.circle=function(){var t,e;if(1===arguments.length)this._ensurePath("circle"),t=this._path,e=arguments[0];else{if(2!==arguments.length)throw new TypeError("Invalid argument");t=arguments[0],e=arguments[1]}if(!("radius"in e&&e.center))throw new Error("center and radius are required");var r=this._conditions[t]||(this._conditions[t]={}),n=e.spherical?"$centerSphere":"$center",i=this._geoComparison||l;return r[i]={},r[i][n]=[e.center,e.radius],"unique"in e&&(r[i].$uniqueDocs=!!e.unique),this},c.prototype.near=function(){var t,e;if(this._geoComparison="$near",0===arguments.length)return this;if(1===arguments.length)this._ensurePath("near"),t=this._path,e=arguments[0];else{if(2!==arguments.length)throw new TypeError("Invalid argument");t=arguments[0],e=arguments[1]}if(!e.center)throw new Error("center is required");var r=this._conditions[t]||(this._conditions[t]={}),n=e.spherical?"$nearSphere":"$near";if(Array.isArray(e.center)){r[n]=e.center;var i="maxDistance"in e?e.maxDistance:null;null!=i&&(r.$maxDistance=i),null!=e.minDistance&&(r.$minDistance=e.minDistance)}else{if("Point"!=e.center.type||!Array.isArray(e.center.coordinates))throw new Error(s.format("Invalid GeoJSON specified for %s",n));r[n]={$geometry:e.center},"maxDistance"in e&&(r[n].$maxDistance=e.maxDistance),"minDistance"in e&&(r[n].$minDistance=e.minDistance)}return this},c.prototype.intersects=function(){if(this._ensurePath("intersects"),this._geoComparison="$geoIntersects",0===arguments.length)return this;var t=arguments[0];if(null!=t&&t.type&&t.coordinates)return this.geometry(t);throw new TypeError("Invalid argument")},c.prototype.geometry=function(){if("$within"!=this._geoComparison&&"$geoWithin"!=this._geoComparison&&"$near"!=this._geoComparison&&"$geoIntersects"!=this._geoComparison)throw new Error("geometry() must come after `within()`, `intersects()`, or `near()");var t,e;if(1!==arguments.length)throw new TypeError("Invalid argument");if(this._ensurePath("geometry"),e=this._path,!(t=arguments[0]).type||!Array.isArray(t.coordinates))throw new TypeError("Invalid argument");return(this._conditions[e]||(this._conditions[e]={}))[this._geoComparison]={$geometry:t},this},c.prototype.select=function(){var t=arguments[0];if(!t)return this;if(1!==arguments.length)throw new Error("Invalid select: select only takes 1 argument");this._validate("select");var e,r,i=this._fields||(this._fields={}),o=void 0===t?"undefined":n(t);if(("string"==o||a.isArgumentsObject(t))&&"number"==typeof t.length||Array.isArray(t)){for("string"==o&&(t=t.split(/\s+/)),e=0,r=t.length;e<r;++e){var s=t[e];if(s){var u="-"==s[0]?0:1;0===u&&(s=s.substring(1)),i[s]=u}}return this}if(a.isObject(t)){var c=a.keys(t);for(e=0;e<c.length;++e)i[c[e]]=t[c[e]];return this}throw new TypeError("Invalid select() argument. Must be string or object.")},c.prototype.slice=function(){if(0===arguments.length)return this;var t,e;if(this._validate("slice"),1===arguments.length){var r=arguments[0];if("object"===(void 0===r?"undefined":n(r))&&!Array.isArray(r)){for(var o=Object.keys(r),s=o.length,a=0;a<s;++a)this.slice(o[a],r[o[a]]);return this}this._ensurePath("slice"),t=this._path,e=arguments[0]}else 2===arguments.length?"number"==typeof arguments[0]?(this._ensurePath("slice"),t=this._path,e=i(arguments)):(t=arguments[0],e=arguments[1]):3===arguments.length&&(t=arguments[0],e=i(arguments,1));return(this._fields||(this._fields={}))[t]={$slice:e},this},c.prototype.sort=function(t){if(!t)return this;var e,r,i;this._validate("sort");var o=void 0===t?"undefined":n(t);if(Array.isArray(t)){for(r=t.length,e=0;e<t.length;++e){if(!Array.isArray(t[e]))throw new Error("Invalid sort() argument, must be array of arrays");p(this.options,t[e][0],t[e][1])}return this}if(1===arguments.length&&"string"==o){for(r=(t=t.split(/\s+/)).length,e=0;e<r;++e)if(i=t[e]){var s="-"==i[0]?-1:1;-1===s&&(i=i.substring(1)),h(this.options,i,s)}return this}if(a.isObject(t)){var u=a.keys(t);for(e=0;e<u.length;++e)i=u[e],h(this.options,i,t[i]);return this}if("undefined"!=typeof Map&&t instanceof Map)return function(t,e){if(t.sort=t.sort||new Map,!(t.sort instanceof Map))throw new TypeError("Can't mix sort syntaxes. Use either array or object or map consistently");e.forEach(function(e,r){var n=String(e||1).toLowerCase();if(!(n=f[n]))throw new TypeError("Invalid sort value: < "+r+": "+e+" >");t.sort.set(r,n)})}
/*!
 * limit, skip, maxScan, batchSize, comment
 *
 * Sets these associated options.
 *
 *     query.comment('feed query');
 */(this.options,t),this;throw new TypeError("Invalid sort() argument. Must be a string, object, or array.")};
/*!
 * @ignore
 */
var f={1:1,"-1":-1,asc:1,ascending:1,desc:-1,descending:-1};function h(t,e,r){if(Array.isArray(t.sort))throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");var n;if(r&&r.$meta)(n=t.sort||(t.sort={}))[e]={$meta:r.$meta};else{n=t.sort||(t.sort={});var i=String(r||1).toLowerCase();if(!(i=f[i]))throw new TypeError("Invalid sort value: { "+e+": "+r+" }");n[e]=i}}function p(t,e,r){if(t.sort=t.sort||[],!Array.isArray(t.sort))throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");var n=String(r||1).toLowerCase();if(!(n=f[n]))throw new TypeError("Invalid sort value: [ "+e+", "+r+" ]");t.sort.push([e,n])}
/*!
 * Internal helper for update, updateMany, updateOne
 */
function d(t,e,r,n,i,o,s){return t.op=e,c.canMerge(r)&&t.merge(r),n&&t._mergeUpdate(n),a.isObject(i)&&t.setOptions(i),o||s?!t._update||!t.options.overwrite&&0===a.keys(t._update).length?(s&&a.soon(s.bind(null,null,0)),t):(i=t._optionsForExec(),s||(i.safe=!1),r=t._conditions,n=t._updateForExec(),u("update",t._collection.collectionName,r,n,i),s=t._wrapCallback(e,s,{conditions:r,doc:n,options:i}),t._collection[e](r,n,i,a.tick(s)),t):t}["limit","skip","maxScan","batchSize","comment"].forEach(function(t){c.prototype[t]=function(e){return this._validate(t),this.options[t]=e,this}}),c.prototype.maxTime=c.prototype.maxTimeMS=function(t){return this._validate("maxTime"),this.options.maxTimeMS=t,this},c.prototype.snapshot=function(){return this._validate("snapshot"),this.options.snapshot=!arguments.length||!!arguments[0],this},c.prototype.hint=function(){if(0===arguments.length)return this;this._validate("hint");var t=arguments[0];if(a.isObject(t)){var e=this.options.hint||(this.options.hint={});for(var r in t)e[r]=t[r];return this}if("string"==typeof t)return this.options.hint=t,this;throw new TypeError("Invalid hint. "+t)},c.prototype.j=function(t){return this.options.j=t,this},c.prototype.slaveOk=function(t){return this.options.slaveOk=!arguments.length||!!t,this},c.prototype.read=c.prototype.setReadPreference=function(t){return arguments.length>1&&!c.prototype.read.deprecationWarningIssued&&(console.error("Deprecation warning: 'tags' argument is not supported anymore in Query.read() method. Please use mongodb.ReadPreference object instead."),c.prototype.read.deprecationWarningIssued=!0),this.options.readPreference=a.readPref(t),this},c.prototype.readConcern=c.prototype.r=function(t){return this.options.readConcern=a.readConcern(t),this},c.prototype.tailable=function(){return this._validate("tailable"),this.options.tailable=!arguments.length||!!arguments[0],this},c.prototype.writeConcern=c.prototype.w=function(t){return"object"===(void 0===t?"undefined":n(t))?(void 0!==t.j&&(this.options.j=t.j),void 0!==t.w&&(this.options.w=t.w),void 0!==t.wtimeout&&(this.options.wtimeout=t.wtimeout)):this.options.w="m"===t?"majority":t,this},c.prototype.wtimeout=c.prototype.wTimeout=function(t){return this.options.wtimeout=t,this},c.prototype.merge=function(t){if(!t)return this;if(!c.canMerge(t))throw new TypeError("Invalid argument. Expected instanceof mquery or plain object");return t instanceof c?(t._conditions&&a.merge(this._conditions,t._conditions),t._fields&&(this._fields||(this._fields={}),a.merge(this._fields,t._fields)),t.options&&(this.options||(this.options={}),a.merge(this.options,t.options)),t._update&&(this._update||(this._update={}),a.mergeClone(this._update,t._update)),t._distinct&&(this._distinct=t._distinct),this):(a.merge(this._conditions,t),this)},c.prototype.find=function(t,e){if(this.op="find","function"==typeof t?(e=t,t=void 0):c.canMerge(t)&&this.merge(t),!e)return this;var r=this._conditions,n=this._optionsForExec();return this.$useProjection?n.projection=this._fieldsForExec():n.fields=this._fieldsForExec(),u("find",this._collection.collectionName,r,n),e=this._wrapCallback("find",e,{conditions:r,options:n}),this._collection.find(r,n,a.tick(e)),this},c.prototype.cursor=function(t){if(this.op){if("find"!==this.op)throw new TypeError(".cursor only support .find method")}else this.find(t);var e=this._conditions,r=this._optionsForExec();return this.$useProjection?r.projection=this._fieldsForExec():r.fields=this._fieldsForExec(),u("findCursor",this._collection.collectionName,e,r),this._collection.findCursor(e,r)},c.prototype.findOne=function(t,e){if(this.op="findOne","function"==typeof t?(e=t,t=void 0):c.canMerge(t)&&this.merge(t),!e)return this;var r=this._conditions,n=this._optionsForExec();return this.$useProjection?n.projection=this._fieldsForExec():n.fields=this._fieldsForExec(),u("findOne",this._collection.collectionName,r,n),e=this._wrapCallback("findOne",e,{conditions:r,options:n}),this._collection.findOne(r,n,a.tick(e)),this},c.prototype.count=function(t,e){if(this.op="count",this._validate(),"function"==typeof t?(e=t,t=void 0):c.canMerge(t)&&this.merge(t),!e)return this;var r=this._conditions,n=this._optionsForExec();return u("count",this._collection.collectionName,r,n),e=this._wrapCallback("count",e,{conditions:r,options:n}),this._collection.count(r,n,a.tick(e)),this},c.prototype.distinct=function(t,e,r){if(this.op="distinct",this._validate(),!r){switch(void 0===e?"undefined":n(e)){case"function":r=e,"string"==typeof t&&(e=t,t=void 0);break;case"undefined":case"string":break;default:throw new TypeError("Invalid `field` argument. Must be string or function")}switch(void 0===t?"undefined":n(t)){case"function":r=t,t=e=void 0;break;case"string":e=t,t=void 0}}if("string"==typeof e&&(this._distinct=e),c.canMerge(t)&&this.merge(t),!r)return this;if(!this._distinct)throw new Error("No value for `distinct` has been declared");var i=this._conditions,o=this._optionsForExec();return u("distinct",this._collection.collectionName,i,o),r=this._wrapCallback("distinct",r,{conditions:i,options:o}),this._collection.distinct(this._distinct,i,o,a.tick(r)),this},c.prototype.update=function(t,e,r,i){var o;switch(arguments.length){case 3:"function"==typeof r&&(i=r,r=void 0);break;case 2:"function"==typeof e&&(i=e,e=t,t=void 0);break;case 1:switch(void 0===t?"undefined":n(t)){case"function":i=t,t=r=e=void 0;break;case"boolean":o=t,t=void 0;break;default:e=t,t=r=void 0}}return d(this,"update",t,e,r,o,i)},c.prototype.updateMany=function(t,e,r,i){var o;switch(arguments.length){case 3:"function"==typeof r&&(i=r,r=void 0);break;case 2:"function"==typeof e&&(i=e,e=t,t=void 0);break;case 1:switch(void 0===t?"undefined":n(t)){case"function":i=t,t=r=e=void 0;break;case"boolean":o=t,t=void 0;break;default:e=t,t=r=void 0}}return d(this,"updateMany",t,e,r,o,i)},c.prototype.updateOne=function(t,e,r,i){var o;switch(arguments.length){case 3:"function"==typeof r&&(i=r,r=void 0);break;case 2:"function"==typeof e&&(i=e,e=t,t=void 0);break;case 1:switch(void 0===t?"undefined":n(t)){case"function":i=t,t=r=e=void 0;break;case"boolean":o=t,t=void 0;break;default:e=t,t=r=void 0}}return d(this,"updateOne",t,e,r,o,i)},c.prototype.replaceOne=function(t,e,r,i){var o;switch(arguments.length){case 3:"function"==typeof r&&(i=r,r=void 0);break;case 2:"function"==typeof e&&(i=e,e=t,t=void 0);break;case 1:switch(void 0===t?"undefined":n(t)){case"function":i=t,t=r=e=void 0;break;case"boolean":o=t,t=void 0;break;default:e=t,t=r=void 0}}return this.setOptions({overwrite:!0}),d(this,"replaceOne",t,e,r,o,i)},c.prototype.remove=function(t,e){var r;if(this.op="remove","function"==typeof t?(e=t,t=void 0):c.canMerge(t)?this.merge(t):!0===t&&(r=t,t=void 0),!r&&!e)return this;var n=this._optionsForExec();e||(n.safe=!1);var i=this._conditions;return u("remove",this._collection.collectionName,i,n),e=this._wrapCallback("remove",e,{conditions:i,options:n}),this._collection.remove(i,n,a.tick(e)),this},c.prototype.deleteOne=function(t,e){var r;if(this.op="deleteOne","function"==typeof t?(e=t,t=void 0):c.canMerge(t)?this.merge(t):!0===t&&(r=t,t=void 0),!r&&!e)return this;var n=this._optionsForExec();e||(n.safe=!1),delete n.justOne;var i=this._conditions;return u("deleteOne",this._collection.collectionName,i,n),e=this._wrapCallback("deleteOne",e,{conditions:i,options:n}),this._collection.deleteOne(i,n,a.tick(e)),this},c.prototype.deleteMany=function(t,e){var r;if(this.op="deleteMany","function"==typeof t?(e=t,t=void 0):c.canMerge(t)?this.merge(t):!0===t&&(r=t,t=void 0),!r&&!e)return this;var n=this._optionsForExec();e||(n.safe=!1),delete n.justOne;var i=this._conditions;return u("deleteOne",this._collection.collectionName,i,n),e=this._wrapCallback("deleteOne",e,{conditions:i,options:n}),this._collection.deleteMany(i,n,a.tick(e)),this},c.prototype.findOneAndUpdate=function(t,e,r,n){switch(this.op="findOneAndUpdate",this._validate(),arguments.length){case 3:"function"==typeof r&&(n=r,r={});break;case 2:"function"==typeof e&&(n=e,e=t,t=void 0),r=void 0;break;case 1:"function"==typeof t?(n=t,t=r=e=void 0):(e=t,t=r=void 0)}return c.canMerge(t)&&this.merge(t),e&&this._mergeUpdate(e),r&&this.setOptions(r),n?this._findAndModify("update",n):this},c.prototype.findOneAndRemove=c.prototype.findOneAndDelete=function(t,e,r){return this.op="findOneAndRemove",this._validate(),"function"==typeof e?(r=e,e=void 0):"function"==typeof t&&(r=t,t=void 0),c.canMerge(t)&&this.merge(t),e&&this.setOptions(e),r?this._findAndModify("remove",r):this},c.prototype._findAndModify=function(t,e){o.equal("function",void 0===e?"undefined":n(e));var r,i=this._optionsForExec();if("remove"==t)i.remove=!0;else if("new"in i||(i.new=!0),"upsert"in i||(i.upsert=!1),!(r=this._updateForExec())){if(!i.upsert)return this.findOne(e);r={$set:{}}}null!=this._fieldsForExec()&&(this.$useProjection?i.projection=this._fieldsForExec():i.fields=this._fieldsForExec());var s=this._conditions;return u("findAndModify",this._collection.collectionName,s,r,i),e=this._wrapCallback("findAndModify",e,{conditions:s,doc:r,options:i}),this._collection.findAndModify(s,r,i,a.tick(e)),this},c.prototype._wrapCallback=function(t,e,r){var n=this._traceFunction||c.traceFunction;if(n){r.collectionName=this._collection.collectionName;var i=n&&n.call(null,t,r,this),o=(new Date).getTime();return function(t,r){if(i){var n=(new Date).getTime()-o;i.call(null,t,r,n)}e&&e.apply(null,arguments)}}return e},c.prototype.setTraceFunction=function(t){return this._traceFunction=t,this},c.prototype.exec=function(t,e){switch(void 0===t?"undefined":n(t)){case"function":e=t,t=null;break;case"string":this.op=t}o.ok(this.op,"Missing query type: (find, update, etc)"),"update"!=this.op&&"remove"!=this.op||e||(e=!0);var r=this;if("function"!=typeof e)return new c.Promise(function(t,e){r[r.op](function(r,n){r?e(r):t(n),t=e=null})});this[this.op](e)},c.prototype.thunk=function(){var t=this;return function(e){t.exec(e)}},c.prototype.then=function(t,e){var r=this;return new c.Promise(function(t,e){r.exec(function(r,n){r?e(r):t(n),t=e=null})}).then(t,e)},c.prototype.stream=function(t){if("find"!=this.op)throw new Error("stream() is only available for find");var e=this._conditions,r=this._optionsForExec();return this.$useProjection?r.projection=this._fieldsForExec():r.fields=this._fieldsForExec(),u("stream",this._collection.collectionName,e,r,t),this._collection.findStream(e,r,t)},c.prototype.selected=function(){return!!(this._fields&&Object.keys(this._fields).length>0)},c.prototype.selectedInclusively=function(){if(!this._fields)return!1;var t=Object.keys(this._fields);if(0===t.length)return!1;for(var e=0;e<t.length;++e){var r=t[e];if(0===this._fields[r])return!1;if(this._fields[r]&&"object"===n(this._fields[r])&&this._fields[r].$meta)return!1}return!0},c.prototype.selectedExclusively=function(){if(!this._fields)return!1;var t=Object.keys(this._fields);if(0===t.length)return!1;for(var e=0;e<t.length;++e){var r=t[e];if(0===this._fields[r])return!0}return!1},c.prototype._mergeUpdate=function(t){this._update||(this._update={}),t instanceof c?t._update&&a.mergeClone(this._update,t._update):a.mergeClone(this._update,t)},c.prototype._optionsForExec=function(){return a.clone(this.options)},c.prototype._fieldsForExec=function(){return a.clone(this._fields)},c.prototype._updateForExec=function(){for(var t=a.clone(this._update),e=a.keys(t),r=e.length,n={};r--;){var i=e[r];this.options.overwrite?n[i]=t[i]:"$"!==i[0]?(n.$set||(t.$set?n.$set=t.$set:n.$set={}),n.$set[i]=t[i],e.splice(r,1),~e.indexOf("$set")||e.push("$set")):"$set"===i&&n.$set||(n[i]=t[i])}return this._compiledUpdate=n,n},c.prototype._ensurePath=function(t){if(!this._path)throw new Error(t+"() must be used after where() when called with these arguments")},
/*!
 * Permissions
 */
c.permissions=r(120),c._isPermitted=function(t,e){var r=c.permissions[e];return!r||!0!==r[t]},c.prototype._validate=function(t){var e,r;if(void 0===t){if("function"!=typeof(r=c.permissions[this.op]))return!0;e=r(this)}else c._isPermitted(t,this.op)||(e=t);if(e)throw new Error(e+" cannot be used with "+this.op)},c.canMerge=function(t){return t instanceof c||a.isObject(t)},c.setGlobalTraceFunction=function(t){c.traceFunction=t},
/*!
 * Exports.
 */
c.utils=a,c.env=r(69),c.Collection=r(122),c.BaseCollection=r(28),c.Promise=r(124),t.exports=c},function(t,e,r){"use strict";(function(t,e){!function(t,r){if(!t.setImmediate){var n,i=1,o={},s=!1,a=t.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(t);u=u&&u.setTimeout?u:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick(function(){l(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?function(){var e="setImmediate$"+Math.random()+"$",r=function(r){r.source===t&&"string"==typeof r.data&&0===r.data.indexOf(e)&&l(+r.data.slice(e.length))};t.addEventListener?t.addEventListener("message",r,!1):t.attachEvent("onmessage",r),n=function(r){t.postMessage(e+r,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){l(t.data)},n=function(e){t.port2.postMessage(e)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var t=a.documentElement;n=function(e){var r=a.createElement("script");r.onreadystatechange=function(){l(e),r.onreadystatechange=null,t.removeChild(r),r=null},t.appendChild(r)}}():n=function(t){setTimeout(l,0,t)},u.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];var s={callback:t,args:e};return o[i]=s,n(i),i++},u.clearImmediate=c}function c(t){delete o[t]}function l(t){if(s)setTimeout(l,0,t);else{var e=o[t];if(e){s=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(r,n)}}(e)}finally{c(t),s=!1}}}}}("undefined"==typeof self?void 0===t?void 0:t:self)}).call(this,r(11),r(8))},function(t,e,r){"use strict";(function(n){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==n&&"env"in n&&(t=n.env.DEBUG),t}(e=t.exports=r(118)).log=function(){return"object"===("undefined"==typeof console?"undefined":i(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var i=0,o=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&"%c"===t&&(o=++i)}),t.splice(o,0,n)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=o,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(o())}).call(this,r(8))},function(t,e,r){"use strict";function n(t){var r;function n(){if(n.enabled){var t=n,i=+new Date,o=i-(r||i);t.diff=o,t.prev=r,t.curr=i,r=i;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var u=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(r,n){if("%%"===r)return r;u++;var i=e.formatters[n];if("function"==typeof i){var o=s[u];r=i.call(t,o),s.splice(u,1),u--}return r}),e.formatArgs.call(t,s),(n.log||e.log||console.log.bind(console)).apply(t,s)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=function(t){var r,n=0;for(r in t)n=(n<<5)-n+t.charCodeAt(r),n|=0;return e.colors[Math.abs(n)%e.colors.length]}(t),n.destroy=i,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return-1!==t&&(e.instances.splice(t,1),!0)}(e=t.exports=n.debug=n.default=n).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){var r;e.save(t),e.names=[],e.skips=[];var n=("string"==typeof t?t:"").split(/[\s,]+/),i=n.length;for(r=0;r<i;r++)n[r]&&("-"===(t=n[r].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(r=0;r<e.instances.length;r++){var o=e.instances[r];o.enabled=e.enabled(o.namespace)}},e.enabled=function(t){if("*"===t[t.length-1])return!0;var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1},e.humanize=r(119),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=1e3,o=60*i,s=60*o,a=24*s,u=365.25*a;function c(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}t.exports=function(t,e){e=e||{};var r=void 0===t?"undefined":n(t);if("string"===r&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!e)return;var r=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return r*u;case"days":case"day":case"d":return r*a;case"hours":case"hour":case"hrs":case"hr":case"h":return r*s;case"minutes":case"minute":case"mins":case"min":case"m":return r*o;case"seconds":case"second":case"secs":case"sec":case"s":return r*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}(t);if("number"===r&&!1===isNaN(t))return e.long?function(t){return c(t,a,"day")||c(t,s,"hour")||c(t,o,"minute")||c(t,i,"second")||t+" ms"}(t):function(t){if(t>=a)return Math.round(t/a)+"d";if(t>=s)return Math.round(t/s)+"h";if(t>=o)return Math.round(t/o)+"m";if(t>=i)return Math.round(t/i)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){"use strict";var n=e;n.distinct=function(t){return t._fields&&Object.keys(t._fields).length>0?"field selection and slice":(Object.keys(n.distinct).every(function(r){return!t.options[r]||(e=r,!1)}),e);var e},n.distinct.select=n.distinct.slice=n.distinct.sort=n.distinct.limit=n.distinct.skip=n.distinct.batchSize=n.distinct.comment=n.distinct.maxScan=n.distinct.snapshot=n.distinct.hint=n.distinct.tailable=!0,n.findOneAndUpdate=n.findOneAndRemove=function(t){var e;return Object.keys(n.findOneAndUpdate).every(function(r){return!t.options[r]||(e=r,!1)}),e},n.findOneAndUpdate.limit=n.findOneAndUpdate.skip=n.findOneAndUpdate.batchSize=n.findOneAndUpdate.maxScan=n.findOneAndUpdate.snapshot=n.findOneAndUpdate.hint=n.findOneAndUpdate.tailable=n.findOneAndUpdate.comment=!0,n.count=function(t){return t._fields&&Object.keys(t._fields).length>0?"field selection and slice":(Object.keys(n.count).every(function(r){return!t.options[r]||(e=r,!1)}),e);var e},n.count.slice=n.count.batchSize=n.count.comment=n.count.maxScan=n.count.snapshot=n.count.tailable=!0},function(t,e,r){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";var n=r(69);if("unknown"==n.type)throw new Error("Unknown environment");t.exports=n.isNode?r(123):(n.isMongo,r(28))},function(t,e,r){"use strict";var n=r(28);function i(t){this.collection=t,this.collectionName=t.collectionName}r(67).inherits(i,n),i.prototype.find=function(t,e,r){this.collection.find(t,e,function(t,e){if(t)return r(t);try{e.toArray(r)}catch(t){r(t)}})},i.prototype.findOne=function(t,e,r){this.collection.findOne(t,e,r)},i.prototype.count=function(t,e,r){this.collection.count(t,e,r)},i.prototype.distinct=function(t,e,r,n){this.collection.distinct(t,e,r,n)},i.prototype.update=function(t,e,r,n){this.collection.update(t,e,r,n)},i.prototype.updateMany=function(t,e,r,n){this.collection.updateMany(t,e,r,n)},i.prototype.updateOne=function(t,e,r,n){this.collection.updateOne(t,e,r,n)},i.prototype.replaceOne=function(t,e,r,n){this.collection.replaceOne(t,e,r,n)},i.prototype.deleteOne=function(t,e,r){this.collection.deleteOne(t,e,r)},i.prototype.deleteMany=function(t,e,r){this.collection.deleteMany(t,e,r)},i.prototype.remove=function(t,e,r){this.collection.remove(t,e,r)},i.prototype.findAndModify=function(t,e,r,n){var i=Array.isArray(r.sort)?r.sort:[];this.collection.findAndModify(t,i,e,r,n)},i.prototype.findStream=function(t,e,r){return this.collection.find(t,e).stream(r)},i.prototype.findCursor=function(t,e){return this.collection.find(t,e)},t.exports=i},function(t,e,r){"use strict";(function(r,n,i){var o,s,a,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r){"object"==u(e)&&void 0!==t?t.exports=r():(s=[],void 0===(a="function"==typeof(o=r)?o.apply(e,s):o)||(t.exports=a))}(function(){var t,e,o;return function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof _dereq_&&_dereq_;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return i(r||t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof _dereq_&&_dereq_,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){e.exports=function(t){var e=t._SomePromiseArray;function r(t){var r=new e(t),n=r.promise();return r.setHowMany(1),r.setUnwrap(),r.init(),n}t.any=function(t){return r(t)},t.prototype.any=function(){return r(this)}}},{}],2:[function(t,e,n){var i;try{throw new Error}catch(t){i=t}var o=t("./schedule"),s=t("./queue"),a=t("./util");function u(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new s(16),this._normalQueue=new s(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues()},this._schedule=o}function c(t,e,r){this._lateQueue.push(t,e,r),this._queueTick()}function l(t,e,r){this._normalQueue.push(t,e,r),this._queueTick()}function f(t){this._normalQueue._pushOne(t),this._queueTick()}u.prototype.setScheduler=function(t){var e=this._schedule;return this._schedule=t,this._customScheduler=!0,e},u.prototype.hasCustomScheduler=function(){return this._customScheduler},u.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},u.prototype.disableTrampolineIfNecessary=function(){a.hasDevTools&&(this._trampolineEnabled=!1)},u.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},u.prototype.fatalError=function(t,e){e?(r.stderr.write("Fatal "+(t instanceof Error?t.stack:t)+"\n"),r.exit(2)):this.throwLater(t)},u.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e)},0);else try{this._schedule(function(){t(e)})}catch(t){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},a.hasDevTools?(u.prototype.invokeLater=function(t,e,r){this._trampolineEnabled?c.call(this,t,e,r):this._schedule(function(){setTimeout(function(){t.call(e,r)},100)})},u.prototype.invoke=function(t,e,r){this._trampolineEnabled?l.call(this,t,e,r):this._schedule(function(){t.call(e,r)})},u.prototype.settlePromises=function(t){this._trampolineEnabled?f.call(this,t):this._schedule(function(){t._settlePromises()})}):(u.prototype.invokeLater=c,u.prototype.invoke=l,u.prototype.settlePromises=f),u.prototype._drainQueue=function(t){for(;t.length()>0;){var e=t.shift();if("function"==typeof e){var r=t.shift(),n=t.shift();e.call(r,n)}else e._settlePromises()}},u.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue)},u.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},u.prototype._reset=function(){this._isTickUsed=!1},e.exports=u,e.exports.firstLineError=i},{"./queue":26,"./schedule":29,"./util":36}],3:[function(t,e,r){e.exports=function(t,e,r,n){var i=!1,o=function(t,e){this._reject(e)},s=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(o,o,null,this,t)},a=function(t,e){0==(50397184&this._bitField)&&this._resolveCallback(e.target)},u=function(t,e){e.promiseRejectionQueued||this._reject(t)};t.prototype.bind=function(o){i||(i=!0,t.prototype._propagateFrom=n.propagateFromFunction(),t.prototype._boundValue=n.boundValueFunction());var c=r(o),l=new t(e);l._propagateFrom(this,1);var f=this._target();if(l._setBoundTo(c),c instanceof t){var h={promiseRejectionQueued:!1,promise:l,target:f,bindingPromise:c};f._then(e,s,void 0,l,h),c._then(a,u,void 0,l,h),l._setOnCancel(c)}else l._resolveCallback(f);return l},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField},t.prototype._isBound=function(){return 2097152==(2097152&this._bitField)},t.bind=function(e,r){return t.resolve(r).bind(e)}}},{}],4:[function(t,e,r){var n;"undefined"!=typeof Promise&&(n=Promise);var i=t("./promise")();i.noConflict=function(){try{Promise===i&&(Promise=n)}catch(t){}return i},e.exports=i},{"./promise":22}],5:[function(t,e,r){var n=Object.create;if(n){var i=n(null),o=n(null);i[" size"]=o[" size"]=0}e.exports=function(e){var r=t("./util"),n=r.canEvaluate;r.isIdentifier;function i(t){return function(t,n){var i;if(null!=t&&(i=t[n]),"function"!=typeof i){var o="Object "+r.classString(t)+" has no method '"+r.toString(n)+"'";throw new e.TypeError(o)}return i}(t,this.pop()).apply(t,this)}function o(t){return t[this]}function s(t){var e=+this;return e<0&&(e=Math.max(0,e+t.length)),t[e]}e.prototype.call=function(t){var e=[].slice.call(arguments,1);return e.push(t),this._then(i,void 0,void 0,e,void 0)},e.prototype.get=function(t){var e;if("number"==typeof t)e=s;else if(n){var r=(void 0)(t);e=null!==r?r:o}else e=o;return this._then(e,void 0,void 0,t,void 0)}}},{"./util":36}],6:[function(t,e,r){e.exports=function(e,r,n,i){var o=t("./util"),s=o.tryCatch,a=o.errorObj,u=e._async;e.prototype.break=e.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled");for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}var r=t._cancellationParent;if(null==r||!r._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=r}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},e.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},e.prototype._cancelBy=function(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0))},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),u.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},e.prototype._doInvokeOnCancel=function(t,e){if(o.isArray(t))for(var r=0;r<t.length;++r)this._doInvokeOnCancel(t[r],e);else if(void 0!==t)if("function"==typeof t){if(!e){var n=s(t).call(this._boundValue());n===a&&(this._attachExtraTrace(n.e),u.throwLater(n.e))}}else t._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var t=this._onCancel();this._unsetOnCancel(),u.invoke(this._doInvokeOnCancel,this,t)},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},e.prototype._resultCancelled=function(){this.cancel()}}},{"./util":36}],7:[function(t,e,r){e.exports=function(e){var r=t("./util"),n=t("./es5").keys,i=r.tryCatch,o=r.errorObj;return function(t,s,a){return function(u){var c=a._boundValue();t:for(var l=0;l<t.length;++l){var f=t[l];if(f===Error||null!=f&&f.prototype instanceof Error){if(u instanceof f)return i(s).call(c,u)}else if("function"==typeof f){var h=i(f).call(c,u);if(h===o)return h;if(h)return i(s).call(c,u)}else if(r.isObject(u)){for(var p=n(f),d=0;d<p.length;++d){var y=p[d];if(f[y]!=u[y])continue t}return i(s).call(c,u)}}return e}}}},{"./es5":13,"./util":36}],8:[function(t,e,r){e.exports=function(t){var e=!1,r=[];function n(){this._trace=new n.CapturedTrace(i())}function i(){var t=r.length-1;if(t>=0)return r[t]}return t.prototype._promiseCreated=function(){},t.prototype._pushContext=function(){},t.prototype._popContext=function(){return null},t._peekContext=t.prototype._peekContext=function(){},n.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,r.push(this._trace))},n.prototype._popContext=function(){if(void 0!==this._trace){var t=r.pop(),e=t._promiseCreated;return t._promiseCreated=null,e}return null},n.CapturedTrace=null,n.create=function(){if(e)return new n},n.deactivateLongStackTraces=function(){},n.activateLongStackTraces=function(){var r=t.prototype._pushContext,o=t.prototype._popContext,s=t._peekContext,a=t.prototype._peekContext,u=t.prototype._promiseCreated;n.deactivateLongStackTraces=function(){t.prototype._pushContext=r,t.prototype._popContext=o,t._peekContext=s,t.prototype._peekContext=a,t.prototype._promiseCreated=u,e=!1},e=!0,t.prototype._pushContext=n.prototype._pushContext,t.prototype._popContext=n.prototype._popContext,t._peekContext=t.prototype._peekContext=i,t.prototype._promiseCreated=function(){var t=this._peekContext();t&&null==t._promiseCreated&&(t._promiseCreated=this)}},n}},{}],9:[function(t,e,n){e.exports=function(e,n){var i,o,s,a=e._getDomain,c=e._async,l=t("./errors").Warning,f=t("./util"),h=f.canAttachTrace,p=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,d=/\((?:timers\.js):\d+:\d+\)/,y=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,v=null,_=null,m=!1,g=!(0==f.env("BLUEBIRD_DEBUG")),b=!(0==f.env("BLUEBIRD_WARNINGS")||!g&&!f.env("BLUEBIRD_WARNINGS")),w=!(0==f.env("BLUEBIRD_LONG_STACK_TRACES")||!g&&!f.env("BLUEBIRD_LONG_STACK_TRACES")),O=0!=f.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(b||!!f.env("BLUEBIRD_W_FORGOTTEN_RETURN"));e.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=-1048577&t._bitField|524288},e.prototype._ensurePossibleRejectionHandled=function(){if(0==(524288&this._bitField)){this._setRejectionIsUnhandled();var t=this;setTimeout(function(){t._notifyUnhandledRejection()},1)}},e.prototype._notifyUnhandledRejectionIsHandled=function(){W("rejectionHandled",i,void 0,this)},e.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},e.prototype._returnedNonUndefined=function(){return 0!=(268435456&this._bitField)},e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),W("unhandledRejection",o,t,this)}},e.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},e.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},e.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},e.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},e.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},e.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},e.prototype._warn=function(t,e,r){return L(t,e,r||this)},e.onPossiblyUnhandledRejection=function(t){var e=a();o="function"==typeof t?null===e?t:f.domainBind(e,t):void 0},e.onUnhandledRejectionHandled=function(t){var e=a();i="function"==typeof t?null===e?t:f.domainBind(e,t):void 0};var S=function(){};e.longStackTraces=function(){if(c.haveItemsQueued()&&!X.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!X.longStackTraces&&Y()){var t=e.prototype._captureStackTrace,r=e.prototype._attachExtraTrace;X.longStackTraces=!0,S=function(){if(c.haveItemsQueued()&&!X.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");e.prototype._captureStackTrace=t,e.prototype._attachExtraTrace=r,n.deactivateLongStackTraces(),c.enableTrampoline(),X.longStackTraces=!1},e.prototype._captureStackTrace=F,e.prototype._attachExtraTrace=I,n.activateLongStackTraces(),c.disableTrampolineIfNecessary()}},e.hasLongStackTraces=function(){return X.longStackTraces&&Y()};var A=function(){try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent");return f.global.dispatchEvent(t),function(t,e){var r=new CustomEvent(t.toLowerCase(),{detail:e,cancelable:!0});return!f.global.dispatchEvent(r)}}if("function"==typeof Event){t=new Event("CustomEvent");return f.global.dispatchEvent(t),function(t,e){var r=new Event(t.toLowerCase(),{cancelable:!0});return r.detail=e,!f.global.dispatchEvent(r)}}return(t=document.createEvent("CustomEvent")).initCustomEvent("testingtheevent",!1,!0,{}),f.global.dispatchEvent(t),function(t,e){var r=document.createEvent("CustomEvent");return r.initCustomEvent(t.toLowerCase(),!1,!0,e),!f.global.dispatchEvent(r)}}catch(t){}return function(){return!1}}(),E=f.isNode?function(){return r.emit.apply(r,arguments)}:f.global?function(t){var e="on"+t.toLowerCase(),r=f.global[e];return!!r&&(r.apply(f.global,[].slice.call(arguments,1)),!0)}:function(){return!1};function $(t,e){return{promise:e}}var j={promiseCreated:$,promiseFulfilled:$,promiseRejected:$,promiseResolved:$,promiseCancelled:$,promiseChained:function(t,e,r){return{promise:e,child:r}},warning:function(t,e){return{warning:e}},unhandledRejection:function(t,e,r){return{reason:e,promise:r}},rejectionHandled:$},x=function(t){var e=!1;try{e=E.apply(null,arguments)}catch(t){c.throwLater(t),e=!0}var r=!1;try{r=A(t,j[t].apply(null,arguments))}catch(t){c.throwLater(t),r=!0}return r||e};function N(){return!1}function P(t,e,r){var n=this;try{t(e,r,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+f.toString(t));n._attachCancellationCallback(t)})}catch(t){return t}}function k(t){if(!this._isCancellable())return this;var e=this._onCancel();void 0!==e?f.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t)}function T(){return this._onCancelField}function B(t){this._onCancelField=t}function C(){this._cancellationParent=void 0,this._onCancelField=void 0}function D(t,e){if(0!=(1&e)){this._cancellationParent=t;var r=t._branchesRemainingToCancel;void 0===r&&(r=0),t._branchesRemainingToCancel=r+1}0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}e.config=function(t){if("longStackTraces"in(t=Object(t))&&(t.longStackTraces?e.longStackTraces():!t.longStackTraces&&e.hasLongStackTraces()&&S()),"warnings"in t){var r=t.warnings;X.warnings=!!r,O=X.warnings,f.isObject(r)&&"wForgottenReturn"in r&&(O=!!r.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!X.cancellation){if(c.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");e.prototype._clearCancellationData=C,e.prototype._propagateFrom=D,e.prototype._onCancel=T,e.prototype._setOnCancel=B,e.prototype._attachCancellationCallback=k,e.prototype._execute=P,M=D,X.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!X.monitoring?(X.monitoring=!0,e.prototype._fireEvent=x):!t.monitoring&&X.monitoring&&(X.monitoring=!1,e.prototype._fireEvent=N)),e},e.prototype._fireEvent=N,e.prototype._execute=function(t,e,r){try{t(e,r)}catch(t){return t}},e.prototype._onCancel=function(){},e.prototype._setOnCancel=function(t){},e.prototype._attachCancellationCallback=function(t){},e.prototype._captureStackTrace=function(){},e.prototype._attachExtraTrace=function(){},e.prototype._clearCancellationData=function(){},e.prototype._propagateFrom=function(t,e){};var M=function(t,e){0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)};function R(){var t=this._boundTo;return void 0!==t&&t instanceof e?t.isFulfilled()?t.value():void 0:t}function F(){this._trace=new J(this._peekContext())}function I(t,e){if(h(t)){var r=this._trace;if(void 0!==r&&e&&(r=r._parent),void 0!==r)r.attachExtraTrace(t);else if(!t.__stackCleaned__){var n=V(t);f.notEnumerableProp(t,"stack",n.message+"\n"+n.stack.join("\n")),f.notEnumerableProp(t,"__stackCleaned__",!0)}}}function L(t,r,n){if(X.warnings){var i,o=new l(t);if(r)n._attachExtraTrace(o);else if(X.longStackTraces&&(i=e._peekContext()))i.attachExtraTrace(o);else{var s=V(o);o.stack=s.message+"\n"+s.stack.join("\n")}x("warning",o)||q(o,"",!0)}}function U(t){for(var e=[],r=0;r<t.length;++r){var n=t[r],i="    (No stack trace)"===n||v.test(n),o=i&&z(n);i&&!o&&(m&&" "!==n.charAt(0)&&(n="    "+n),e.push(n))}return e}function V(t){var e=t.stack,r=t.toString();return e="string"==typeof e&&e.length>0?function(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),r=0;r<e.length;++r){var n=e[r];if("    (No stack trace)"===n||v.test(n))break}return r>0&&"SyntaxError"!=t.name&&(e=e.slice(r)),e}(t):["    (No stack trace)"],{message:r,stack:"SyntaxError"==t.name?e:U(e)}}function q(t,e,r){if("undefined"!=typeof console){var n;if(f.isObject(t)){var i=t.stack;n=e+_(i,t)}else n=e+String(t);"function"==typeof s?s(n,r):"function"!=typeof console.log&&"object"!==u(console.log)||console.log(n)}}function W(t,e,r,n){var i=!1;try{"function"==typeof e&&(i=!0,"rejectionHandled"===t?e(n):e(r,n))}catch(t){c.throwLater(t)}"unhandledRejection"===t?x(t,r,n)||i||q(r,"Unhandled rejection "):x(t,n)}function H(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{e=t&&"function"==typeof t.toString?t.toString():f.toString(t);if(/\[object [a-zA-Z0-9$_]+\]/.test(e))try{e=JSON.stringify(t)}catch(t){}0===e.length&&(e="(empty array)")}return"(<"+function(t){if(t.length<41)return t;return t.substr(0,38)+"..."}(e)+">, no stack trace)"}function Y(){return"function"==typeof G}var z=function(){return!1},K=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function Q(t){var e=t.match(K);if(e)return{fileName:e[1],line:parseInt(e[2],10)}}function J(t){this._parent=t,this._promisesCreated=0;var e=this._length=1+(void 0===t?0:t._length);G(this,J),e>32&&this.uncycle()}f.inherits(J,Error),n.CapturedTrace=J,J.prototype.uncycle=function(){var t=this._length;if(!(t<2)){for(var e=[],r={},n=0,i=this;void 0!==i;++n)e.push(i),i=i._parent;for(n=(t=this._length=n)-1;n>=0;--n){var o=e[n].stack;void 0===r[o]&&(r[o]=n)}for(n=0;n<t;++n){var s=r[e[n].stack];if(void 0!==s&&s!==n){s>0&&(e[s-1]._parent=void 0,e[s-1]._length=1),e[n]._parent=void 0,e[n]._length=1;var a=n>0?e[n-1]:this;s<t-1?(a._parent=e[s+1],a._parent.uncycle(),a._length=a._parent._length+1):(a._parent=void 0,a._length=1);for(var u=a._length+1,c=n-2;c>=0;--c)e[c]._length=u,u++;return}}}},J.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var e=V(t),r=e.message,n=[e.stack],i=this;void 0!==i;)n.push(U(i.stack.split("\n"))),i=i._parent;!function(t){for(var e=t[0],r=1;r<t.length;++r){for(var n=t[r],i=e.length-1,o=e[i],s=-1,a=n.length-1;a>=0;--a)if(n[a]===o){s=a;break}for(a=s;a>=0;--a){var u=n[a];if(e[i]!==u)break;e.pop(),i--}e=n}}(n),function(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}(n),f.notEnumerableProp(t,"stack",function(t,e){for(var r=0;r<e.length-1;++r)e[r].push("From previous event:"),e[r]=e[r].join("\n");return r<e.length&&(e[r]=e[r].join("\n")),t+"\n"+e.join("\n")}(r,n)),f.notEnumerableProp(t,"__stackCleaned__",!0)}};var G=function(){var t=/^\s*at\s*/,e=function(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():H(e)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,v=t,_=e;var r=Error.captureStackTrace;return z=function(t){return p.test(t)},function(t,e){Error.stackTraceLimit+=6,r(t,e),Error.stackTraceLimit-=6}}var n,i=new Error;if("string"==typeof i.stack&&i.stack.split("\n")[0].indexOf("stackDetection@")>=0)return v=/@/,_=e,m=!0,function(t){t.stack=(new Error).stack};try{throw new Error}catch(t){n="stack"in t}return"stack"in i||!n||"number"!=typeof Error.stackTraceLimit?(_=function(t,e){return"string"==typeof t?t:"object"!==(void 0===e?"undefined":u(e))&&"function"!=typeof e||void 0===e.name||void 0===e.message?H(e):e.toString()},null):(v=t,_=e,function(t){Error.stackTraceLimit+=6;try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit-=6})}();"undefined"!=typeof console&&void 0!==console.warn&&(s=function(t){console.warn(t)},f.isNode&&r.stderr.isTTY?s=function(t,e){var r=e?"[33m":"[31m";console.warn(r+t+"[0m\n")}:f.isNode||"string"!=typeof(new Error).stack||(s=function(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red")}));var X={warnings:b,longStackTraces:!1,cancellation:!1,monitoring:!1};return w&&e.longStackTraces(),{longStackTraces:function(){return X.longStackTraces},warnings:function(){return X.warnings},cancellation:function(){return X.cancellation},monitoring:function(){return X.monitoring},propagateFromFunction:function(){return M},boundValueFunction:function(){return R},checkForgottenReturns:function(t,e,r,n,i){if(void 0===t&&null!==e&&O){if(void 0!==i&&i._returnedNonUndefined())return;if(0==(65535&n._bitField))return;r&&(r+=" ");var o="",s="";if(e._trace){for(var a=e._trace.stack.split("\n"),u=U(a),c=u.length-1;c>=0;--c){var l=u[c];if(!d.test(l)){var f=l.match(y);f&&(o="at "+f[1]+":"+f[2]+":"+f[3]+" ");break}}if(u.length>0){var h=u[0];for(c=0;c<a.length;++c)if(a[c]===h){c>0&&(s="\n"+a[c-1]);break}}}var p="a promise was created in a "+r+"handler "+o+"but was not returned from it, see http://goo.gl/rRqMUw"+s;n._warn(p,!0,e)}},setBounds:function(t,e){if(Y()){for(var r,n,i=t.stack.split("\n"),o=e.stack.split("\n"),s=-1,a=-1,u=0;u<i.length;++u)if(c=Q(i[u])){r=c.fileName,s=c.line;break}for(u=0;u<o.length;++u){var c;if(c=Q(o[u])){n=c.fileName,a=c.line;break}}s<0||a<0||!r||!n||r!==n||s>=a||(z=function(t){if(p.test(t))return!0;var e=Q(t);return!!(e&&e.fileName===r&&s<=e.line&&e.line<=a)})}},warn:L,deprecated:function(t,e){var r=t+" is deprecated and will be removed in a future version.";return e&&(r+=" Use "+e+" instead."),L(r)},CapturedTrace:J,fireDomEvent:A,fireGlobalEvent:E}}},{"./errors":12,"./util":36}],10:[function(t,e,r){e.exports=function(t){function e(){return this.value}function r(){throw this.reason}t.prototype.return=t.prototype.thenReturn=function(r){return r instanceof t&&r.suppressUnhandledRejections(),this._then(e,void 0,void 0,{value:r},void 0)},t.prototype.throw=t.prototype.thenThrow=function(t){return this._then(r,void 0,void 0,{reason:t},void 0)},t.prototype.catchThrow=function(t){if(arguments.length<=1)return this._then(void 0,r,void 0,{reason:t},void 0);var e=arguments[1];return this.caught(t,function(){throw e})},t.prototype.catchReturn=function(r){if(arguments.length<=1)return r instanceof t&&r.suppressUnhandledRejections(),this._then(void 0,e,void 0,{value:r},void 0);var n=arguments[1];n instanceof t&&n.suppressUnhandledRejections();return this.caught(r,function(){return n})}}},{}],11:[function(t,e,r){e.exports=function(t,e){var r=t.reduce,n=t.all;function i(){return n(this)}t.prototype.each=function(t){return r(this,t,e,0)._then(i,void 0,void 0,this,void 0)},t.prototype.mapSeries=function(t){return r(this,t,e,e)},t.each=function(t,n){return r(t,n,e,0)._then(i,void 0,void 0,t,void 0)},t.mapSeries=function(t,n){return r(t,n,e,e)}}},{}],12:[function(t,e,r){var n,i,o=t("./es5"),s=o.freeze,a=t("./util"),u=a.inherits,c=a.notEnumerableProp;function l(t,e){function r(n){if(!(this instanceof r))return new r(n);c(this,"message","string"==typeof n?n:e),c(this,"name",t),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return u(r,Error),r}var f=l("Warning","warning"),h=l("CancellationError","cancellation error"),p=l("TimeoutError","timeout error"),d=l("AggregateError","aggregate error");try{n=TypeError,i=RangeError}catch(t){n=l("TypeError","type error"),i=l("RangeError","range error")}for(var y="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),v=0;v<y.length;++v)"function"==typeof Array.prototype[y[v]]&&(d.prototype[y[v]]=Array.prototype[y[v]]);o.defineProperty(d.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),d.prototype.isOperational=!0;var _=0;function m(t){if(!(this instanceof m))return new m(t);c(this,"name","OperationalError"),c(this,"message",t),this.cause=t,this.isOperational=!0,t instanceof Error?(c(this,"message",t.message),c(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}d.prototype.toString=function(){var t=Array(4*_+1).join(" "),e="\n"+t+"AggregateError of:\n";_++,t=Array(4*_+1).join(" ");for(var r=0;r<this.length;++r){for(var n=this[r]===this?"[Circular AggregateError]":this[r]+"",i=n.split("\n"),o=0;o<i.length;++o)i[o]=t+i[o];e+=(n=i.join("\n"))+"\n"}return _--,e},u(m,Error);var g=Error.__BluebirdErrorTypes__;g||(g=s({CancellationError:h,TimeoutError:p,OperationalError:m,RejectionError:m,AggregateError:d}),o.defineProperty(Error,"__BluebirdErrorTypes__",{value:g,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:n,RangeError:i,CancellationError:g.CancellationError,OperationalError:g.OperationalError,TimeoutError:g.TimeoutError,AggregateError:g.AggregateError,Warning:f}},{"./es5":13,"./util":36}],13:[function(t,e,r){var n=function(){return void 0===this}();if(n)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:n,propertyIsWritable:function(t,e){var r=Object.getOwnPropertyDescriptor(t,e);return!(r&&!r.writable&&!r.set)}};else{var i={}.hasOwnProperty,o={}.toString,s={}.constructor.prototype,a=function(t){var e=[];for(var r in t)i.call(t,r)&&e.push(r);return e};e.exports={isArray:function(t){try{return"[object Array]"===o.call(t)}catch(t){return!1}},keys:a,names:a,defineProperty:function(t,e,r){return t[e]=r.value,t},getDescriptor:function(t,e){return{value:t[e]}},freeze:function(t){return t},getPrototypeOf:function(t){try{return Object(t).constructor.prototype}catch(t){return s}},isES5:n,propertyIsWritable:function(){return!0}}}},{}],14:[function(t,e,r){e.exports=function(t,e){var r=t.map;t.prototype.filter=function(t,n){return r(this,t,n,e)},t.filter=function(t,n,i){return r(t,n,i,e)}}},{}],15:[function(t,e,r){e.exports=function(e,r,n){var i=t("./util"),o=e.CancellationError,s=i.errorObj,a=t("./catch_filter")(n);function u(t,e,r){this.promise=t,this.type=e,this.handler=r,this.called=!1,this.cancelPromise=null}function c(t){this.finallyHandler=t}function l(t,e){return null!=t.cancelPromise&&(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0)}function f(){return p.call(this,this.promise._target()._settledValue())}function h(t){if(!l(this,t))return s.e=t,s}function p(t){var i=this.promise,a=this.handler;if(!this.called){this.called=!0;var u=this.isFinallyHandler()?a.call(i._boundValue()):a.call(i._boundValue(),t);if(u===n)return u;if(void 0!==u){i._setReturnedNonUndefined();var p=r(u,i);if(p instanceof e){if(null!=this.cancelPromise){if(p._isCancelled()){var d=new o("late cancellation observer");return i._attachExtraTrace(d),s.e=d,s}p.isPending()&&p._attachCancellationCallback(new c(this))}return p._then(f,h,void 0,this,void 0)}}}return i.isRejected()?(l(this),s.e=t,s):(l(this),t)}return u.prototype.isFinallyHandler=function(){return 0===this.type},c.prototype._resultCancelled=function(){l(this.finallyHandler)},e.prototype._passThrough=function(t,e,r,n){return"function"!=typeof t?this.then():this._then(r,n,void 0,new u(this,e,t),void 0)},e.prototype.lastly=e.prototype.finally=function(t){return this._passThrough(t,0,p,p)},e.prototype.tap=function(t){return this._passThrough(t,1,p)},e.prototype.tapCatch=function(t){var r=arguments.length;if(1===r)return this._passThrough(t,1,void 0,p);var n,o=new Array(r-1),s=0;for(n=0;n<r-1;++n){var u=arguments[n];if(!i.isObject(u))return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+i.classString(u)));o[s++]=u}o.length=s;var c=arguments[n];return this._passThrough(a(o,c,this),1,void 0,p)},u}},{"./catch_filter":7,"./util":36}],16:[function(t,e,r){e.exports=function(e,r,n,i,o,s){var a=t("./errors").TypeError,u=t("./util"),c=u.errorObj,l=u.tryCatch,f=[];function h(t,r,i,o){if(s.cancellation()){var a=new e(n),u=this._finallyPromise=new e(n);this._promise=a.lastly(function(){return u}),a._captureStackTrace(),a._setOnCancel(this)}else{(this._promise=new e(n))._captureStackTrace()}this._stack=o,this._generatorFunction=t,this._receiver=r,this._generator=void 0,this._yieldHandlers="function"==typeof i?[i].concat(f):f,this._yieldedPromise=null,this._cancellationPhase=!1}u.inherits(h,o),h.prototype._isResolved=function(){return null===this._promise},h.prototype._cleanup=function(){this._promise=this._generator=null,s.cancellation()&&null!==this._finallyPromise&&(this._finallyPromise._fulfill(),this._finallyPromise=null)},h.prototype._promiseCancelled=function(){if(!this._isResolved()){var t;if(void 0!==this._generator.return)this._promise._pushContext(),t=l(this._generator.return).call(this._generator,void 0),this._promise._popContext();else{var r=new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel=r,this._promise._attachExtraTrace(r),this._promise._pushContext(),t=l(this._generator.throw).call(this._generator,r),this._promise._popContext()}this._cancellationPhase=!0,this._yieldedPromise=null,this._continue(t)}},h.prototype._promiseFulfilled=function(t){this._yieldedPromise=null,this._promise._pushContext();var e=l(this._generator.next).call(this._generator,t);this._promise._popContext(),this._continue(e)},h.prototype._promiseRejected=function(t){this._yieldedPromise=null,this._promise._attachExtraTrace(t),this._promise._pushContext();var e=l(this._generator.throw).call(this._generator,t);this._promise._popContext(),this._continue(e)},h.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof e){var t=this._yieldedPromise;this._yieldedPromise=null,t.cancel()}},h.prototype.promise=function(){return this._promise},h.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._promiseFulfilled(void 0)},h.prototype._continue=function(t){var r=this._promise;if(t===c)return this._cleanup(),this._cancellationPhase?r.cancel():r._rejectCallback(t.e,!1);var n=t.value;if(!0===t.done)return this._cleanup(),this._cancellationPhase?r.cancel():r._resolveCallback(n);var o=i(n,this._promise);if(o instanceof e||null!==(o=function(t,r,n){for(var o=0;o<r.length;++o){n._pushContext();var s=l(r[o])(t);if(n._popContext(),s===c){n._pushContext();var a=e.reject(c.e);return n._popContext(),a}var u=i(s,n);if(u instanceof e)return u}return null}(o,this._yieldHandlers,this._promise))){var s=(o=o._target())._bitField;0==(50397184&s)?(this._yieldedPromise=o,o._proxy(this,null)):0!=(33554432&s)?e._async.invoke(this._promiseFulfilled,this,o._value()):0!=(16777216&s)?e._async.invoke(this._promiseRejected,this,o._reason()):this._promiseCancelled()}else this._promiseRejected(new a("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s",String(n))+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")))},e.coroutine=function(t,e){if("function"!=typeof t)throw new a("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r=Object(e).yieldHandler,n=h,i=(new Error).stack;return function(){var e=t.apply(this,arguments),o=new n(void 0,void 0,r,i),s=o.promise();return o._generator=e,o._promiseFulfilled(void 0),s}},e.coroutine.addYieldHandler=function(t){if("function"!=typeof t)throw new a("expecting a function but got "+u.classString(t));f.push(t)},e.spawn=function(t){if(s.deprecated("Promise.spawn()","Promise.coroutine()"),"function"!=typeof t)return r("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n=new h(t,this),i=n.promise();return n._run(e.spawn),i}}},{"./errors":12,"./util":36}],17:[function(t,e,r){e.exports=function(e,r,n,i,o,s){var a=t("./util");a.canEvaluate,a.tryCatch,a.errorObj;e.join=function(){var t,e=arguments.length-1;e>0&&"function"==typeof arguments[e]&&(t=arguments[e]);var n=[].slice.call(arguments);t&&n.pop();var i=new r(n).promise();return void 0!==t?i.spread(t):i}}},{"./util":36}],18:[function(t,e,r){e.exports=function(e,r,n,i,o,s){var a=e._getDomain,c=t("./util"),l=c.tryCatch,f=c.errorObj,h=e._async;function p(t,e,r,n){this.constructor$(t),this._promise._captureStackTrace();var i=a();this._callback=null===i?e:c.domainBind(i,e),this._preservedValues=n===o?new Array(this.length()):null,this._limit=r,this._inFlight=0,this._queue=[],h.invoke(this._asyncInit,this,void 0)}function d(t,r,i,o){if("function"!=typeof r)return n("expecting a function but got "+c.classString(r));var s=0;if(void 0!==i){if("object"!==(void 0===i?"undefined":u(i))||null===i)return e.reject(new TypeError("options argument must be an object but it is "+c.classString(i)));if("number"!=typeof i.concurrency)return e.reject(new TypeError("'concurrency' must be a number but it is "+c.classString(i.concurrency)));s=i.concurrency}return new p(t,r,s="number"==typeof s&&isFinite(s)&&s>=1?s:0,o).promise()}c.inherits(p,r),p.prototype._asyncInit=function(){this._init$(void 0,-2)},p.prototype._init=function(){},p.prototype._promiseFulfilled=function(t,r){var n=this._values,o=this.length(),a=this._preservedValues,u=this._limit;if(r<0){if(n[r=-1*r-1]=t,u>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0}else{if(u>=1&&this._inFlight>=u)return n[r]=t,this._queue.push(r),!1;null!==a&&(a[r]=t);var c=this._promise,h=this._callback,p=c._boundValue();c._pushContext();var d=l(h).call(p,t,r,o),y=c._popContext();if(s.checkForgottenReturns(d,y,null!==a?"Promise.filter":"Promise.map",c),d===f)return this._reject(d.e),!0;var v=i(d,this._promise);if(v instanceof e){var _=(v=v._target())._bitField;if(0==(50397184&_))return u>=1&&this._inFlight++,n[r]=v,v._proxy(this,-1*(r+1)),!1;if(0==(33554432&_))return 0!=(16777216&_)?(this._reject(v._reason()),!0):(this._cancel(),!0);d=v._value()}n[r]=d}return++this._totalResolved>=o&&(null!==a?this._filter(n,a):this._resolve(n),!0)},p.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,r=this._values;t.length>0&&this._inFlight<e;){if(this._isResolved())return;var n=t.pop();this._promiseFulfilled(r[n],n)}},p.prototype._filter=function(t,e){for(var r=e.length,n=new Array(r),i=0,o=0;o<r;++o)t[o]&&(n[i++]=e[o]);n.length=i,this._resolve(n)},p.prototype.preservedValues=function(){return this._preservedValues},e.prototype.map=function(t,e){return d(this,t,e,null)},e.map=function(t,e,r,n){return d(t,e,r,n)}}},{"./util":36}],19:[function(t,e,r){e.exports=function(e,r,n,i,o){var s=t("./util"),a=s.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+s.classString(t));return function(){var n=new e(r);n._captureStackTrace(),n._pushContext();var i=a(t).apply(this,arguments),s=n._popContext();return o.checkForgottenReturns(i,s,"Promise.method",n),n._resolveFromSyncValue(i),n}},e.attempt=e.try=function(t){if("function"!=typeof t)return i("expecting a function but got "+s.classString(t));var n,u=new e(r);if(u._captureStackTrace(),u._pushContext(),arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument");var c=arguments[1],l=arguments[2];n=s.isArray(c)?a(t).apply(l,c):a(t).call(l,c)}else n=a(t)();var f=u._popContext();return o.checkForgottenReturns(n,f,"Promise.try",u),u._resolveFromSyncValue(n),u},e.prototype._resolveFromSyncValue=function(t){t===s.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}}},{"./util":36}],20:[function(t,e,r){var n=t("./util"),i=n.maybeWrapAsError,o=t("./errors").OperationalError,s=t("./es5");var a=/^(?:name|message|stack|cause)$/;function u(t){var e;if(function(t){return t instanceof Error&&s.getPrototypeOf(t)===Error.prototype}(t)){(e=new o(t)).name=t.name,e.message=t.message,e.stack=t.stack;for(var r=s.keys(t),i=0;i<r.length;++i){var u=r[i];a.test(u)||(e[u]=t[u])}return e}return n.markAsOriginatingFromRejection(t),t}e.exports=function(t,e){return function(r,n){if(null!==t){if(r){var o=u(i(r));t._attachExtraTrace(o),t._reject(o)}else if(e){var s=[].slice.call(arguments,1);t._fulfill(s)}else t._fulfill(n);t=null}}}},{"./errors":12,"./es5":13,"./util":36}],21:[function(t,e,r){e.exports=function(e){var r=t("./util"),n=e._async,i=r.tryCatch,o=r.errorObj;function s(t,e){if(!r.isArray(t))return a.call(this,t,e);var s=i(e).apply(this._boundValue(),[null].concat(t));s===o&&n.throwLater(s.e)}function a(t,e){var r=this._boundValue(),s=void 0===t?i(e).call(r,null):i(e).call(r,null,t);s===o&&n.throwLater(s.e)}function u(t,e){if(!t){var r=new Error(t+"");r.cause=t,t=r}var s=i(e).call(this._boundValue(),t);s===o&&n.throwLater(s.e)}e.prototype.asCallback=e.prototype.nodeify=function(t,e){if("function"==typeof t){var r=a;void 0!==e&&Object(e).spread&&(r=s),this._then(r,u,void 0,this,t)}return this}}},{"./util":36}],22:[function(t,e,n){e.exports=function(){var n=function(){return new d("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},i=function(){return new N.PromiseInspection(this._target())},o=function(t){return N.reject(new d(t))};function s(){}var a,u={},c=t("./util");a=c.isNode?function(){var t=r.domain;return void 0===t&&(t=null),t}:function(){return null},c.notEnumerableProp(N,"_getDomain",a);var l=t("./es5"),f=t("./async"),h=new f;l.defineProperty(N,"_async",{value:h});var p=t("./errors"),d=N.TypeError=p.TypeError;N.RangeError=p.RangeError;var y=N.CancellationError=p.CancellationError;N.TimeoutError=p.TimeoutError,N.OperationalError=p.OperationalError,N.RejectionError=p.OperationalError,N.AggregateError=p.AggregateError;var v=function(){},_={},m={},g=t("./thenables")(N,v),b=t("./promise_array")(N,v,g,o,s),w=t("./context")(N),O=w.create,S=t("./debuggability")(N,w),A=(S.CapturedTrace,t("./finally")(N,g,m)),E=t("./catch_filter")(m),$=t("./nodeback"),j=c.errorObj,x=c.tryCatch;function N(t){t!==v&&function(t,e){if(null==t||t.constructor!==N)throw new d("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if("function"!=typeof e)throw new d("expecting a function but got "+c.classString(e))}(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function P(t){this.promise._resolveCallback(t)}function k(t){this.promise._rejectCallback(t,!1)}function T(t){var e=new N(v);e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t}return N.prototype.toString=function(){return"[object Promise]"},N.prototype.caught=N.prototype.catch=function(t){var e=arguments.length;if(e>1){var r,n=new Array(e-1),i=0;for(r=0;r<e-1;++r){var s=arguments[r];if(!c.isObject(s))return o("Catch statement predicate: expecting an object but got "+c.classString(s));n[i++]=s}return n.length=i,t=arguments[r],this.then(void 0,E(n,t,this))}return this.then(void 0,t)},N.prototype.reflect=function(){return this._then(i,i,void 0,this,void 0)},N.prototype.then=function(t,e){if(S.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var r=".then() only accepts functions but was passed: "+c.classString(t);arguments.length>1&&(r+=", "+c.classString(e)),this._warn(r)}return this._then(t,e,void 0,void 0,void 0)},N.prototype.done=function(t,e){this._then(t,e,void 0,void 0,void 0)._setIsFinal()},N.prototype.spread=function(t){return"function"!=typeof t?o("expecting a function but got "+c.classString(t)):this.all()._then(t,void 0,void 0,_,void 0)},N.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t},N.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new b(this).promise()},N.prototype.error=function(t){return this.caught(c.originatesFromRejection,t)},N.getNewLibraryCopy=e.exports,N.is=function(t){return t instanceof N},N.fromNode=N.fromCallback=function(t){var e=new N(v);e._captureStackTrace();var r=arguments.length>1&&!!Object(arguments[1]).multiArgs,n=x(t)($(e,r));return n===j&&e._rejectCallback(n.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e},N.all=function(t){return new b(t).promise()},N.cast=function(t){var e=g(t);return e instanceof N||((e=new N(v))._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e},N.resolve=N.fulfilled=N.cast,N.reject=N.rejected=function(t){var e=new N(v);return e._captureStackTrace(),e._rejectCallback(t,!0),e},N.setScheduler=function(t){if("function"!=typeof t)throw new d("expecting a function but got "+c.classString(t));return h.setScheduler(t)},N.prototype._then=function(t,e,r,n,i){var o=void 0!==i,s=o?i:new N(v),u=this._target(),l=u._bitField;o||(s._propagateFrom(this,3),s._captureStackTrace(),void 0===n&&0!=(2097152&this._bitField)&&(n=0!=(50397184&l)?this._boundValue():u===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,s));var f=a();if(0!=(50397184&l)){var p,d,_=u._settlePromiseCtx;0!=(33554432&l)?(d=u._rejectionHandler0,p=t):0!=(16777216&l)?(d=u._fulfillmentHandler0,p=e,u._unsetRejectionIsUnhandled()):(_=u._settlePromiseLateCancellationObserver,d=new y("late cancellation observer"),u._attachExtraTrace(d),p=e),h.invoke(_,u,{handler:null===f?p:"function"==typeof p&&c.domainBind(f,p),promise:s,receiver:n,value:d})}else u._addCallbacks(t,e,s,n,f);return s},N.prototype._length=function(){return 65535&this._bitField},N.prototype._isFateSealed=function(){return 0!=(117506048&this._bitField)},N.prototype._isFollowing=function(){return 67108864==(67108864&this._bitField)},N.prototype._setLength=function(t){this._bitField=-65536&this._bitField|65535&t},N.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},N.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},N.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},N.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},N.prototype._isFinal=function(){return(4194304&this._bitField)>0},N.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},N.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},N.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},N.prototype._setAsyncGuaranteed=function(){h.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},N.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3];if(e!==u)return void 0===e&&this._isBound()?this._boundValue():e},N.prototype._promiseAt=function(t){return this[4*t-4+2]},N.prototype._fulfillmentHandlerAt=function(t){return this[4*t-4+0]},N.prototype._rejectionHandlerAt=function(t){return this[4*t-4+1]},N.prototype._boundValue=function(){},N.prototype._migrateCallback0=function(t){t._bitField;var e=t._fulfillmentHandler0,r=t._rejectionHandler0,n=t._promise0,i=t._receiverAt(0);void 0===i&&(i=u),this._addCallbacks(e,r,n,i,null)},N.prototype._migrateCallbackAt=function(t,e){var r=t._fulfillmentHandlerAt(e),n=t._rejectionHandlerAt(e),i=t._promiseAt(e),o=t._receiverAt(e);void 0===o&&(o=u),this._addCallbacks(r,n,i,o,null)},N.prototype._addCallbacks=function(t,e,r,n,i){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=r,this._receiver0=n,"function"==typeof t&&(this._fulfillmentHandler0=null===i?t:c.domainBind(i,t)),"function"==typeof e&&(this._rejectionHandler0=null===i?e:c.domainBind(i,e));else{var s=4*o-4;this[s+2]=r,this[s+3]=n,"function"==typeof t&&(this[s+0]=null===i?t:c.domainBind(i,t)),"function"==typeof e&&(this[s+1]=null===i?e:c.domainBind(i,e))}return this._setLength(o+1),o},N.prototype._proxy=function(t,e){this._addCallbacks(void 0,void 0,e,t,null)},N.prototype._resolveCallback=function(t,e){if(0==(117506048&this._bitField)){if(t===this)return this._rejectCallback(n(),!1);var r=g(t,this);if(!(r instanceof N))return this._fulfill(t);e&&this._propagateFrom(r,2);var i=r._target();if(i!==this){var o=i._bitField;if(0==(50397184&o)){var s=this._length();s>0&&i._migrateCallback0(this);for(var a=1;a<s;++a)i._migrateCallbackAt(this,a);this._setFollowing(),this._setLength(0),this._setFollowee(i)}else if(0!=(33554432&o))this._fulfill(i._value());else if(0!=(16777216&o))this._reject(i._reason());else{var u=new y("late cancellation observer");i._attachExtraTrace(u),this._reject(u)}}else this._reject(n())}},N.prototype._rejectCallback=function(t,e,r){var n=c.ensureErrorObject(t),i=n===t;if(!i&&!r&&S.warnings()){var o="a promise was rejected with a non-error: "+c.classString(t);this._warn(o,!0)}this._attachExtraTrace(n,!!e&&i),this._reject(t)},N.prototype._resolveFromExecutor=function(t){if(t!==v){var e=this;this._captureStackTrace(),this._pushContext();var r=!0,n=this._execute(t,function(t){e._resolveCallback(t)},function(t){e._rejectCallback(t,r)});r=!1,this._popContext(),void 0!==n&&e._rejectCallback(n,!0)}},N.prototype._settlePromiseFromHandler=function(t,e,r,n){var i=n._bitField;if(0==(65536&i)){var o;n._pushContext(),e===_?r&&"number"==typeof r.length?o=x(t).apply(this._boundValue(),r):(o=j).e=new d("cannot .spread() a non-array: "+c.classString(r)):o=x(t).call(e,r);var s=n._popContext();0==(65536&(i=n._bitField))&&(o===m?n._reject(r):o===j?n._rejectCallback(o.e,!1):(S.checkForgottenReturns(o,s,"",n,this),n._resolveCallback(o)))}},N.prototype._target=function(){for(var t=this;t._isFollowing();)t=t._followee();return t},N.prototype._followee=function(){return this._rejectionHandler0},N.prototype._setFollowee=function(t){this._rejectionHandler0=t},N.prototype._settlePromise=function(t,e,r,n){var o=t instanceof N,a=this._bitField,u=0!=(134217728&a);0!=(65536&a)?(o&&t._invokeInternalOnCancel(),r instanceof A&&r.isFinallyHandler()?(r.cancelPromise=t,x(e).call(r,n)===j&&t._reject(j.e)):e===i?t._fulfill(i.call(r)):r instanceof s?r._promiseCancelled(t):o||t instanceof b?t._cancel():r.cancel()):"function"==typeof e?o?(u&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,r,n,t)):e.call(r,n,t):r instanceof s?r._isResolved()||(0!=(33554432&a)?r._promiseFulfilled(n,t):r._promiseRejected(n,t)):o&&(u&&t._setAsyncGuaranteed(),0!=(33554432&a)?t._fulfill(n):t._reject(n))},N.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,r=t.promise,n=t.receiver,i=t.value;"function"==typeof e?r instanceof N?this._settlePromiseFromHandler(e,n,i,r):e.call(n,i,r):r instanceof N&&r._reject(i)},N.prototype._settlePromiseCtx=function(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value)},N.prototype._settlePromise0=function(t,e,r){var n=this._promise0,i=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(n,t,i,e)},N.prototype._clearCallbackDataAtIndex=function(t){var e=4*t-4;this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0},N.prototype._fulfill=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(t===this){var r=n();return this._attachExtraTrace(r),this._reject(r)}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!=(134217728&e)?this._settlePromises():h.settlePromises(this))}},N.prototype._reject=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=t,this._isFinal())return h.fatalError(t,c.isNode);(65535&e)>0?h.settlePromises(this):this._ensurePossibleRejectionHandled()}},N.prototype._fulfillPromises=function(t,e){for(var r=1;r<t;r++){var n=this._fulfillmentHandlerAt(r),i=this._promiseAt(r),o=this._receiverAt(r);this._clearCallbackDataAtIndex(r),this._settlePromise(i,n,o,e)}},N.prototype._rejectPromises=function(t,e){for(var r=1;r<t;r++){var n=this._rejectionHandlerAt(r),i=this._promiseAt(r),o=this._receiverAt(r);this._clearCallbackDataAtIndex(r),this._settlePromise(i,n,o,e)}},N.prototype._settlePromises=function(){var t=this._bitField,e=65535&t;if(e>0){if(0!=(16842752&t)){var r=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,r,t),this._rejectPromises(e,r)}else{var n=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,n,t),this._fulfillPromises(e,n)}this._setLength(0)}this._clearCancellationData()},N.prototype._settledValue=function(){var t=this._bitField;return 0!=(33554432&t)?this._rejectionHandler0:0!=(16777216&t)?this._fulfillmentHandler0:void 0},N.defer=N.pending=function(){return S.deprecated("Promise.defer","new Promise"),{promise:new N(v),resolve:P,reject:k}},c.notEnumerableProp(N,"_makeSelfResolutionError",n),t("./method")(N,v,g,o,S),t("./bind")(N,v,g,S),t("./cancel")(N,b,o,S),t("./direct_resolve")(N),t("./synchronous_inspection")(N),t("./join")(N,b,g,v,h,a),N.Promise=N,N.version="3.5.1",t("./map.js")(N,b,o,g,v,S),t("./call_get.js")(N),t("./using.js")(N,o,g,O,v,S),t("./timers.js")(N,v,S),t("./generators.js")(N,o,v,g,s,S),t("./nodeify.js")(N),t("./promisify.js")(N,v),t("./props.js")(N,b,g,o),t("./race.js")(N,v,g,o),t("./reduce.js")(N,b,o,g,v,S),t("./settle.js")(N,b,S),t("./some.js")(N,b,o),t("./filter.js")(N,v),t("./each.js")(N,v),t("./any.js")(N),c.toFastProperties(N),c.toFastProperties(N.prototype),T({a:1}),T({b:2}),T({c:3}),T(1),T(function(){}),T(void 0),T(!1),T(new N(v)),S.setBounds(f.firstLineError,c.lastLineError),N}},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(t,e,r){e.exports=function(e,r,n,i,o){var s=t("./util");s.isArray;function a(t){var n=this._promise=new e(r);t instanceof e&&n._propagateFrom(t,3),n._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}return s.inherits(a,o),a.prototype.length=function(){return this._length},a.prototype.promise=function(){return this._promise},a.prototype._init=function t(r,o){var a=n(this._values,this._promise);if(a instanceof e){var u=(a=a._target())._bitField;if(this._values=a,0==(50397184&u))return this._promise._setAsyncGuaranteed(),a._then(t,this._reject,void 0,this,o);if(0==(33554432&u))return 0!=(16777216&u)?this._reject(a._reason()):this._cancel();a=a._value()}if(null!==(a=s.asArray(a)))0!==a.length?this._iterate(a):-5===o?this._resolveEmptyArray():this._resolve(function(t){switch(t){case-2:return[];case-3:return{};case-6:return new Map}}(o));else{var c=i("expecting an array or an iterable object but got "+s.classString(a)).reason();this._promise._rejectCallback(c,!1)}},a.prototype._iterate=function(t){var r=this.getActualLength(t.length);this._length=r,this._values=this.shouldCopyValues()?new Array(r):this._values;for(var i=this._promise,o=!1,s=null,a=0;a<r;++a){var u=n(t[a],i);s=u instanceof e?(u=u._target())._bitField:null,o?null!==s&&u.suppressUnhandledRejections():null!==s?0==(50397184&s)?(u._proxy(this,a),this._values[a]=u):o=0!=(33554432&s)?this._promiseFulfilled(u._value(),a):0!=(16777216&s)?this._promiseRejected(u._reason(),a):this._promiseCancelled(a):o=this._promiseFulfilled(u,a)}o||i._setAsyncGuaranteed()},a.prototype._isResolved=function(){return null===this._values},a.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},a.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},a.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1)},a.prototype._promiseFulfilled=function(t,e){return this._values[e]=t,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},a.prototype._promiseCancelled=function(){return this._cancel(),!0},a.prototype._promiseRejected=function(t){return this._totalResolved++,this._reject(t),!0},a.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var r=0;r<t.length;++r)t[r]instanceof e&&t[r].cancel()}},a.prototype.shouldCopyValues=function(){return!0},a.prototype.getActualLength=function(t){return t},a}},{"./util":36}],24:[function(t,e,r){e.exports=function(e,r){var n={},i=t("./util"),o=t("./nodeback"),s=i.withAppended,a=i.maybeWrapAsError,c=i.canEvaluate,l=t("./errors").TypeError,f={__isPromisified__:!0},h=new RegExp("^(?:"+["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"].join("|")+")$"),p=function(t){return i.isIdentifier(t)&&"_"!==t.charAt(0)&&"constructor"!==t};function d(t){return!h.test(t)}function y(t){try{return!0===t.__isPromisified__}catch(t){return!1}}function v(t,e,r){var n=i.getDataPropertyOrDefault(t,e+r,f);return!!n&&y(n)}function _(t,e,r,n){for(var o=i.inheritedDataKeys(t),s=[],a=0;a<o.length;++a){var u=o[a],c=t[u],f=n===p||p(u,c,t);"function"!=typeof c||y(c)||v(t,u,e)||!n(u,c,t,f)||s.push(u,c)}return function(t,e,r){for(var n=0;n<t.length;n+=2){var i=t[n];if(r.test(i))for(var o=i.replace(r,""),s=0;s<t.length;s+=2)if(t[s]===o)throw new l("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",e))}}(s,e,r),s}var m=function(t){return t.replace(/([$])/,"\\$")};var g=c?void 0:function(t,u,c,l,f,h){var p=function(){return this}(),d=t;function y(){var i=u;u===n&&(i=this);var c=new e(r);c._captureStackTrace();var l="string"==typeof d&&this!==p?this[d]:t,f=o(c,h);try{l.apply(i,s(arguments,f))}catch(t){c._rejectCallback(a(t),!0,!0)}return c._isFateSealed()||c._setAsyncGuaranteed(),c}return"string"==typeof d&&(t=l),i.notEnumerableProp(y,"__isPromisified__",!0),y};function b(t,e,r,o,s){for(var a=new RegExp(m(e)+"$"),u=_(t,e,a,r),c=0,l=u.length;c<l;c+=2){var f=u[c],h=u[c+1],p=f+e;if(o===g)t[p]=g(f,n,f,h,e,s);else{var d=o(h,function(){return g(f,n,f,h,e,s)});i.notEnumerableProp(d,"__isPromisified__",!0),t[p]=d}}return i.toFastProperties(t),t}e.promisify=function(t,e){if("function"!=typeof t)throw new l("expecting a function but got "+i.classString(t));if(y(t))return t;var r=function(t,e,r){return g(t,e,void 0,t,null,r)}(t,void 0===(e=Object(e)).context?n:e.context,!!e.multiArgs);return i.copyDescriptors(t,r,d),r},e.promisifyAll=function(t,e){if("function"!=typeof t&&"object"!==(void 0===t?"undefined":u(t)))throw new l("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");var r=!!(e=Object(e)).multiArgs,n=e.suffix;"string"!=typeof n&&(n="Async");var o=e.filter;"function"!=typeof o&&(o=p);var s=e.promisifier;if("function"!=typeof s&&(s=g),!i.isIdentifier(n))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for(var a=i.inheritedDataKeys(t),c=0;c<a.length;++c){var f=t[a[c]];"constructor"!==a[c]&&i.isClass(f)&&(b(f.prototype,n,o,s,r),b(f,n,o,s,r))}return b(t,n,o,s,r)}}},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(t,e,r){e.exports=function(e,r,n,i){var o,s=t("./util"),a=s.isObject,u=t("./es5");"function"==typeof Map&&(o=Map);var c=function(){var t=0,e=0;function r(r,n){this[t]=r,this[t+e]=n,t++}return function(n){e=n.size,t=0;var i=new Array(2*n.size);return n.forEach(r,i),i}}();function l(t){var e,r=!1;if(void 0!==o&&t instanceof o)e=c(t),r=!0;else{var n=u.keys(t),i=n.length;e=new Array(2*i);for(var s=0;s<i;++s){var a=n[s];e[s]=t[a],e[s+i]=a}}this.constructor$(e),this._isMap=r,this._init$(void 0,r?-6:-3)}function f(t){var r,o=n(t);return a(o)?(r=o instanceof e?o._then(e.props,void 0,void 0,void 0,void 0):new l(o).promise(),o instanceof e&&r._propagateFrom(o,2),r):i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")}s.inherits(l,r),l.prototype._init=function(){},l.prototype._promiseFulfilled=function(t,e){if(this._values[e]=t,++this._totalResolved>=this._length){var r;if(this._isMap)r=function(t){for(var e=new o,r=t.length/2|0,n=0;n<r;++n){var i=t[r+n],s=t[n];e.set(i,s)}return e}(this._values);else{r={};for(var n=this.length(),i=0,s=this.length();i<s;++i)r[this._values[i+n]]=this._values[i]}return this._resolve(r),!0}return!1},l.prototype.shouldCopyValues=function(){return!1},l.prototype.getActualLength=function(t){return t>>1},e.prototype.props=function(){return f(this)},e.props=function(t){return f(t)}}},{"./es5":13,"./util":36}],26:[function(t,e,r){function n(t){this._capacity=t,this._length=0,this._front=0}n.prototype._willBeOverCapacity=function(t){return this._capacity<t},n.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1),this[this._front+e&this._capacity-1]=t,this._length=e+1},n.prototype.push=function(t,e,r){var n=this.length()+3;if(this._willBeOverCapacity(n))return this._pushOne(t),this._pushOne(e),void this._pushOne(r);var i=this._front+n-3;this._checkCapacity(n);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=r,this._length=n},n.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},n.prototype.length=function(){return this._length},n.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1)},n.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t,function(t,e,r,n,i){for(var o=0;o<i;++o)r[o+n]=t[o+e],t[o+e]=void 0}(this,0,this,e,this._front+this._length&e-1)},e.exports=n},{}],27:[function(t,e,r){e.exports=function(e,r,n,i){var o=t("./util"),s=function(t){return t.then(function(e){return a(e,t)})};function a(t,a){var u=n(t);if(u instanceof e)return s(u);if(null===(t=o.asArray(t)))return i("expecting an array or an iterable object but got "+o.classString(t));var c=new e(r);void 0!==a&&c._propagateFrom(a,3);for(var l=c._fulfill,f=c._reject,h=0,p=t.length;h<p;++h){var d=t[h];(void 0!==d||h in t)&&e.cast(d)._then(l,f,void 0,c,null)}return c}e.race=function(t){return a(t,void 0)},e.prototype.race=function(){return a(this,void 0)}}},{"./util":36}],28:[function(t,e,r){e.exports=function(e,r,n,i,o,s){var a=e._getDomain,u=t("./util"),c=u.tryCatch;function l(t,r,n,i){this.constructor$(t);var s=a();this._fn=null===s?r:u.domainBind(s,r),void 0!==n&&(n=e.resolve(n))._attachCancellationCallback(this),this._initialValue=n,this._currentCancellable=null,this._eachValues=i===o?Array(this._length):0===i?null:void 0,this._promise._captureStackTrace(),this._init$(void 0,-5)}function f(t,e){this.isFulfilled()?e._resolve(t):e._reject(t)}function h(t,e,r,i){return"function"!=typeof e?n("expecting a function but got "+u.classString(e)):new l(t,e,r,i).promise()}function p(t){this.accum=t,this.array._gotAccum(t);var r=i(this.value,this.array._promise);return r instanceof e?(this.array._currentCancellable=r,r._then(d,void 0,void 0,this,void 0)):d.call(this,r)}function d(t){var r,n=this.array,i=n._promise,o=c(n._fn);i._pushContext(),(r=void 0!==n._eachValues?o.call(i._boundValue(),t,this.index,this.length):o.call(i._boundValue(),this.accum,t,this.index,this.length))instanceof e&&(n._currentCancellable=r);var a=i._popContext();return s.checkForgottenReturns(r,a,void 0!==n._eachValues?"Promise.each":"Promise.reduce",i),r}u.inherits(l,r),l.prototype._gotAccum=function(t){void 0!==this._eachValues&&null!==this._eachValues&&t!==o&&this._eachValues.push(t)},l.prototype._eachComplete=function(t){return null!==this._eachValues&&this._eachValues.push(t),this._eachValues},l.prototype._init=function(){},l.prototype._resolveEmptyArray=function(){this._resolve(void 0!==this._eachValues?this._eachValues:this._initialValue)},l.prototype.shouldCopyValues=function(){return!1},l.prototype._resolve=function(t){this._promise._resolveCallback(t),this._values=null},l.prototype._resultCancelled=function(t){if(t===this._initialValue)return this._cancel();this._isResolved()||(this._resultCancelled$(),this._currentCancellable instanceof e&&this._currentCancellable.cancel(),this._initialValue instanceof e&&this._initialValue.cancel())},l.prototype._iterate=function(t){var r,n;this._values=t;var i=t.length;if(void 0!==this._initialValue?(r=this._initialValue,n=0):(r=e.resolve(t[0]),n=1),this._currentCancellable=r,!r.isRejected())for(;n<i;++n){var o={accum:null,value:t[n],index:n,length:i,array:this};r=r._then(p,void 0,void 0,o,void 0)}void 0!==this._eachValues&&(r=r._then(this._eachComplete,void 0,void 0,this,void 0)),r._then(f,f,void 0,r,this)},e.prototype.reduce=function(t,e){return h(this,t,e,null)},e.reduce=function(t,e,r,n){return h(t,e,r,n)}}},{"./util":36}],29:[function(t,e,o){var s,a=t("./util"),u=a.getNativePromise();if(a.isNode&&"undefined"==typeof MutationObserver){var c=n.setImmediate,l=r.nextTick;s=a.isRecentNode?function(t){c.call(n,t)}:function(t){l.call(r,t)}}else if("function"==typeof u&&"function"==typeof u.resolve){var f=u.resolve();s=function(t){f.then(t)}}else s="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?void 0!==i?function(t){i(t)}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0)}:function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}:function(){var t=document.createElement("div"),e={attributes:!0},r=!1,n=document.createElement("div");new MutationObserver(function(){t.classList.toggle("foo"),r=!1}).observe(n,e);return function(i){var o=new MutationObserver(function(){o.disconnect(),i()});o.observe(t,e),r||(r=!0,n.classList.toggle("foo"))}}();e.exports=s},{"./util":36}],30:[function(t,e,r){e.exports=function(e,r,n){var i=e.PromiseInspection;function o(t){this.constructor$(t)}t("./util").inherits(o,r),o.prototype._promiseResolved=function(t,e){return this._values[t]=e,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},o.prototype._promiseFulfilled=function(t,e){var r=new i;return r._bitField=33554432,r._settledValueField=t,this._promiseResolved(e,r)},o.prototype._promiseRejected=function(t,e){var r=new i;return r._bitField=16777216,r._settledValueField=t,this._promiseResolved(e,r)},e.settle=function(t){return n.deprecated(".settle()",".reflect()"),new o(t).promise()},e.prototype.settle=function(){return e.settle(this)}}},{"./util":36}],31:[function(t,e,r){e.exports=function(e,r,n){var i=t("./util"),o=t("./errors").RangeError,s=t("./errors").AggregateError,a=i.isArray,u={};function c(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1}function l(t,e){if((0|e)!==e||e<0)return n("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var r=new c(t),i=r.promise();return r.setHowMany(e),r.init(),i}i.inherits(c,r),c.prototype._init=function(){if(this._initialized)if(0!==this._howMany){this._init$(void 0,-5);var t=a(this._values);!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}else this._resolve([])},c.prototype.init=function(){this._initialized=!0,this._init()},c.prototype.setUnwrap=function(){this._unwrap=!0},c.prototype.howMany=function(){return this._howMany},c.prototype.setHowMany=function(t){this._howMany=t},c.prototype._promiseFulfilled=function(t){return this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0)},c.prototype._promiseRejected=function(t){return this._addRejected(t),this._checkOutcome()},c.prototype._promiseCancelled=function(){return this._values instanceof e||null==this._values?this._cancel():(this._addRejected(u),this._checkOutcome())},c.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var t=new s,e=this.length();e<this._values.length;++e)this._values[e]!==u&&t.push(this._values[e]);return t.length>0?this._reject(t):this._cancel(),!0}return!1},c.prototype._fulfilled=function(){return this._totalResolved},c.prototype._rejected=function(){return this._values.length-this.length()},c.prototype._addRejected=function(t){this._values.push(t)},c.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},c.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},c.prototype._getRangeError=function(t){var e="Input array must contain at least "+this._howMany+" items but contains only "+t+" items";return new o(e)},c.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},e.some=function(t,e){return l(t,e)},e.prototype.some=function(t){return l(this,t)},e._SomePromiseArray=c}},{"./errors":12,"./util":36}],32:[function(t,e,r){e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}e.prototype._settledValue=function(){return this._settledValueField};var r=e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},n=e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},i=e.prototype.isFulfilled=function(){return 0!=(33554432&this._bitField)},o=e.prototype.isRejected=function(){return 0!=(16777216&this._bitField)},s=e.prototype.isPending=function(){return 0==(50397184&this._bitField)},a=e.prototype.isResolved=function(){return 0!=(50331648&this._bitField)};e.prototype.isCancelled=function(){return 0!=(8454144&this._bitField)},t.prototype.__isCancelled=function(){return 65536==(65536&this._bitField)},t.prototype._isCancelled=function(){return this._target().__isCancelled()},t.prototype.isCancelled=function(){return 0!=(8454144&this._target()._bitField)},t.prototype.isPending=function(){return s.call(this._target())},t.prototype.isRejected=function(){return o.call(this._target())},t.prototype.isFulfilled=function(){return i.call(this._target())},t.prototype.isResolved=function(){return a.call(this._target())},t.prototype.value=function(){return r.call(this._target())},t.prototype.reason=function(){var t=this._target();return t._unsetRejectionIsUnhandled(),n.call(t)},t.prototype._value=function(){return this._settledValue()},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},t.PromiseInspection=e}},{}],33:[function(t,e,r){e.exports=function(e,r){var n=t("./util"),i=n.errorObj,o=n.isObject;var s={}.hasOwnProperty;return function(t,a){if(o(t)){if(t instanceof e)return t;var u=function(t){try{return function(t){return t.then}(t)}catch(t){return i.e=t,i}}(t);if(u===i){a&&a._pushContext();var c=e.reject(u.e);return a&&a._popContext(),c}if("function"==typeof u)return function(t){try{return s.call(t,"_promise0")}catch(t){return!1}}(t)?(c=new e(r),t._then(c._fulfill,c._reject,void 0,c,null),c):function(t,o,s){var a=new e(r),u=a;s&&s._pushContext(),a._captureStackTrace(),s&&s._popContext();var c=!0,l=n.tryCatch(o).call(t,function(t){a&&(a._resolveCallback(t),a=null)},function(t){a&&(a._rejectCallback(t,c,!0),a=null)});return c=!1,a&&l===i&&(a._rejectCallback(l.e,!0,!0),a=null),u}(t,u,a)}return t}}},{"./util":36}],34:[function(t,e,r){e.exports=function(e,r,n){var i=t("./util"),o=e.TimeoutError;function s(t){this.handle=t}s.prototype._resultCancelled=function(){clearTimeout(this.handle)};var a=function(t){return u(+this).thenReturn(t)},u=e.delay=function(t,i){var o,u;return void 0!==i?(o=e.resolve(i)._then(a,null,null,t,void 0),n.cancellation()&&i instanceof e&&o._setOnCancel(i)):(o=new e(r),u=setTimeout(function(){o._fulfill()},+t),n.cancellation()&&o._setOnCancel(new s(u)),o._captureStackTrace()),o._setAsyncGuaranteed(),o};e.prototype.delay=function(t){return u(t,this)};function c(t){return clearTimeout(this.handle),t}function l(t){throw clearTimeout(this.handle),t}e.prototype.timeout=function(t,e){var r,a;t=+t;var u=new s(setTimeout(function(){r.isPending()&&function(t,e,r){var n;n="string"!=typeof e?e instanceof Error?e:new o("operation timed out"):new o(e),i.markAsOriginatingFromRejection(n),t._attachExtraTrace(n),t._reject(n),null!=r&&r.cancel()}(r,e,a)},t));return n.cancellation()?(a=this.then(),(r=a._then(c,l,void 0,u,void 0))._setOnCancel(u)):r=this._then(c,l,void 0,u,void 0),r}}},{"./util":36}],35:[function(t,e,r){e.exports=function(e,r,n,i,o,s){var a=t("./util"),u=t("./errors").TypeError,c=t("./util").inherits,l=a.errorObj,f=a.tryCatch,h={};function p(t){setTimeout(function(){throw t},0)}function d(t,r){var i=0,s=t.length,a=new e(o);return function o(){if(i>=s)return a._fulfill();var u=function(t){var e=n(t);return e!==t&&"function"==typeof t._isDisposable&&"function"==typeof t._getDisposer&&t._isDisposable()&&e._setDisposable(t._getDisposer()),e}(t[i++]);if(u instanceof e&&u._isDisposable()){try{u=n(u._getDisposer().tryDispose(r),t.promise)}catch(t){return p(t)}if(u instanceof e)return u._then(o,p,null,null,null)}o()}(),a}function y(t,e,r){this._data=t,this._promise=e,this._context=r}function v(t,e,r){this.constructor$(t,e,r)}function _(t){return y.isDisposer(t)?(this.resources[this.index]._setDisposable(t),t.promise()):t}function m(t){this.length=t,this.promise=null,this[t-1]=null}y.prototype.data=function(){return this._data},y.prototype.promise=function(){return this._promise},y.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():h},y.prototype.tryDispose=function(t){var e=this.resource(),r=this._context;void 0!==r&&r._pushContext();var n=e!==h?this.doDispose(e,t):null;return void 0!==r&&r._popContext(),this._promise._unsetDisposable(),this._data=null,n},y.isDisposer=function(t){return null!=t&&"function"==typeof t.resource&&"function"==typeof t.tryDispose},c(v,y),v.prototype.doDispose=function(t,e){return this.data().call(t,t,e)},m.prototype._resultCancelled=function(){for(var t=this.length,r=0;r<t;++r){var n=this[r];n instanceof e&&n.cancel()}},e.using=function(){var t=arguments.length;if(t<2)return r("you must pass at least 2 arguments to Promise.using");var i,o=arguments[t-1];if("function"!=typeof o)return r("expecting a function but got "+a.classString(o));var u=!0;2===t&&Array.isArray(arguments[0])?(t=(i=arguments[0]).length,u=!1):(i=arguments,t--);for(var c=new m(t),h=0;h<t;++h){var p=i[h];if(y.isDisposer(p)){var v=p;(p=p.promise())._setDisposable(v)}else{var g=n(p);g instanceof e&&(p=g._then(_,null,null,{resources:c,index:h},void 0))}c[h]=p}var b=new Array(c.length);for(h=0;h<b.length;++h)b[h]=e.resolve(c[h]).reflect();var w=e.all(b).then(function(t){for(var e=0;e<t.length;++e){var r=t[e];if(r.isRejected())return l.e=r.error(),l;if(!r.isFulfilled())return void w.cancel();t[e]=r.value()}O._pushContext(),o=f(o);var n=u?o.apply(void 0,t):o(t),i=O._popContext();return s.checkForgottenReturns(n,i,"Promise.using",O),n}),O=w.lastly(function(){var t=new e.PromiseInspection(w);return d(c,t)});return c.promise=O,O._setOnCancel(c),O},e.prototype._setDisposable=function(t){this._bitField=131072|this._bitField,this._disposer=t},e.prototype._isDisposable=function(){return(131072&this._bitField)>0},e.prototype._getDisposer=function(){return this._disposer},e.prototype._unsetDisposable=function(){this._bitField=-131073&this._bitField,this._disposer=void 0},e.prototype.disposer=function(t){if("function"==typeof t)return new v(t,this,i());throw new u}}},{"./errors":12,"./util":36}],36:[function(t,e,i){var o=t("./es5"),s="undefined"==typeof navigator,a={e:{}},c,l="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:void 0!==this?this:null;function f(){try{var t=c;return c=null,t.apply(this,arguments)}catch(t){return a.e=t,a}}function h(t){return c=t,f}var p=function(t,e){var r={}.hasOwnProperty;function n(){for(var n in this.constructor=t,this.constructor$=e,e.prototype)r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n])}return n.prototype=e.prototype,t.prototype=new n,t.prototype};function d(t){return null==t||!0===t||!1===t||"string"==typeof t||"number"==typeof t}function y(t){return"function"==typeof t||"object"===(void 0===t?"undefined":u(t))&&null!==t}function v(t){return d(t)?new Error(x(t)):t}function _(t,e){var r,n=t.length,i=new Array(n+1);for(r=0;r<n;++r)i[r]=t[r];return i[r]=e,i}function m(t,e,r){if(!o.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var n=Object.getOwnPropertyDescriptor(t,e);return null!=n?null==n.get&&null==n.set?n.value:r:void 0}function g(t,e,r){if(d(t))return t;var n={value:r,configurable:!0,enumerable:!1,writable:!0};return o.defineProperty(t,e,n),t}function b(t){throw t}var w=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var r=0;r<t.length;++r)if(t[r]===e)return!0;return!1};if(o.isES5){var r=Object.getOwnPropertyNames;return function(t){for(var n=[],i=Object.create(null);null!=t&&!e(t);){var s;try{s=r(t)}catch(t){return n}for(var a=0;a<s.length;++a){var u=s[a];if(!i[u]){i[u]=!0;var c=Object.getOwnPropertyDescriptor(t,u);null!=c&&null==c.get&&null==c.set&&n.push(u)}}t=o.getPrototypeOf(t)}return n}}var n={}.hasOwnProperty;return function(r){if(e(r))return[];var i=[];t:for(var o in r)if(n.call(r,o))i.push(o);else{for(var s=0;s<t.length;++s)if(n.call(t[s],o))continue t;i.push(o)}return i}}(),O=/this\s*\.\s*\S+\s*=/;function S(t){try{if("function"==typeof t){var e=o.names(t.prototype),r=o.isES5&&e.length>1,n=e.length>0&&!(1===e.length&&"constructor"===e[0]),i=O.test(t+"")&&o.names(t).length>0;if(r||n||i)return!0}return!1}catch(t){return!1}}function A(t){function e(){}e.prototype=t;for(var r=8;r--;)new e;return t}var E=/^[a-z$_][a-z$_0-9]*$/i;function $(t){return E.test(t)}function j(t,e,r){for(var n=new Array(t),i=0;i<t;++i)n[i]=e+i+r;return n}function x(t){try{return t+""}catch(t){return"[no string representation]"}}function N(t){return t instanceof Error||null!==t&&"object"===(void 0===t?"undefined":u(t))&&"string"==typeof t.message&&"string"==typeof t.name}function P(t){try{g(t,"isOperational",!0)}catch(t){}}function k(t){return null!=t&&(t instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===t.isOperational)}function T(t){return N(t)&&o.propertyIsWritable(t,"stack")}var B="stack"in new Error?function(t){return T(t)?t:new Error(x(t))}:function(t){if(T(t))return t;try{throw new Error(x(t))}catch(t){return t}};function C(t){return{}.toString.call(t)}function D(t,e,r){for(var n=o.names(t),i=0;i<n.length;++i){var s=n[i];if(r(s))try{o.defineProperty(e,s,o.getDescriptor(t,s))}catch(t){}}}var M=function(t){return o.isArray(t)?t:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var R="function"==typeof Array.from?function(t){return Array.from(t)}:function(t){for(var e,r=[],n=t[Symbol.iterator]();!(e=n.next()).done;)r.push(e.value);return r};M=function(t){return o.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?R(t):null}}var F=void 0!==r&&"[object process]"===C(r).toLowerCase(),I=void 0!==r&&void 0!==r.env;function L(t){return I?r.env[t]:void 0}function U(){if("function"==typeof Promise)try{var t=new Promise(function(){});if("[object Promise]"==={}.toString.call(t))return Promise}catch(t){}}function V(t,e){return t.bind(e)}var q={isClass:S,isIdentifier:$,inheritedDataKeys:w,getDataPropertyOrDefault:m,thrower:b,isArray:o.isArray,asArray:M,notEnumerableProp:g,isPrimitive:d,isObject:y,isError:N,canEvaluate:s,errorObj:a,tryCatch:h,inherits:p,withAppended:_,maybeWrapAsError:v,toFastProperties:A,filledRange:j,toString:x,canAttachTrace:T,ensureErrorObject:B,originatesFromRejection:k,markAsOriginatingFromRejection:P,classString:C,copyDescriptors:D,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:F,hasEnvVariables:I,env:L,global:l,getNativePromise:U,domainBind:V};q.isRecentNode=q.isNode&&function(){var t=r.versions.node.split(".").map(Number);return 0===t[0]&&t[1]>10||t[0]>0}(),q.isNode&&q.toFastProperties(r);try{throw new Error}catch(t){q.lastLineError=t}e.exports=q},{"./es5":13}]},{},[4])(4)}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise)}).call(this,r(8),r(11),r(68).setImmediate)},function(t,e,r){"use strict";var n=t.exports={};n.DocumentNotFoundError=null,n.general={},n.general.default="Validator failed for path `{PATH}` with value `{VALUE}`",n.general.required="Path `{PATH}` is required.",n.Number={},n.Number.min="Path `{PATH}` ({VALUE}) is less than minimum allowed value ({MIN}).",n.Number.max="Path `{PATH}` ({VALUE}) is more than maximum allowed value ({MAX}).",n.Number.enum="`{VALUE}` is not a valid enum value for path `{PATH}`.",n.Date={},n.Date.min="Path `{PATH}` ({VALUE}) is before minimum allowed value ({MIN}).",n.Date.max="Path `{PATH}` ({VALUE}) is after maximum allowed value ({MAX}).",n.String={},n.String.enum="`{VALUE}` is not a valid enum value for path `{PATH}`.",n.String.match="Path `{PATH}` is invalid ({VALUE}).",n.String.minlength="Path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).",n.String.maxlength="Path `{PATH}` (`{VALUE}`) is longer than the maximum allowed length ({MAXLENGTH})."},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4),i=r(3);
/*!
 * OverwriteModel Error constructor.
 *
 * @inherits MongooseError
 */
function o(t,e,r,o){var s=void 0,a=n.messages;s=null!=a.DocumentNotFoundError?"function"==typeof a.DocumentNotFoundError?a.DocumentNotFoundError(t,e):a.DocumentNotFoundError:'No document found for query "'+i.inspect(t)+'" on model "'+e+'"',n.call(this,s),this.name="DocumentNotFoundError",this.result=o,this.numAffected=r,Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack,this.filter=t,this.query=t}
/*!
 * Inherits from MongooseError.
 */o.prototype=Object.create(n.prototype),o.prototype.constructor=n,
/*!
 * exports
 */
t.exports=o},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);function i(t,e,r){var i=r.join(", ");n.call(this,'No matching document found for id "'+t._id+'" version '+e+' modifiedPaths "'+i+'"'),this.name="VersionError",this.version=e,this.modifiedPaths=r}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,
/*!
 * exports
 */
t.exports=i},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);function i(t){n.call(this,"Can't save() the same doc multiple times in parallel. Document: "+t._id),this.name="ParallelSaveError"}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,
/*!
 * exports
 */
t.exports=i},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);
/*!
 * OverwriteModel Error constructor.
 *
 * @inherits MongooseError
 */function i(t){n.call(this,"Cannot overwrite `"+t+"` model once compiled."),this.name="OverwriteModelError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,
/*!
 * exports
 */
t.exports=i},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);
/*!
 * MissingSchema Error constructor.
 *
 * @inherits MongooseError
 */function i(t){var e="Schema hasn't been registered for model \""+t+'".\nUse mongoose.model(name, schema)';n.call(this,e),this.name="MissingSchemaError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,
/*!
 * exports
 */
t.exports=i},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);
/*!
 * DivergentArrayError constructor.
 *
 * @inherits MongooseError
 */function i(t){var e="For your own good, using `document.save()` to update an array which was selected using an $elemMatch projection OR populated using skip, limit, query conditions, or exclusion of the _id field when the operation results in a $pop or $set of the entire array is not supported. The following path(s) would have been modified unsafely:\n  "+t.join("\n  ")+"\nUse Model.update() to update these arrays instead.";n.call(this,e),this.name="DivergentArrayError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,
/*!
 * exports
 */
t.exports=i},function(t,e,r){"use strict";var n=r(30);
/*!
 * ignore
 */t.exports=function(t){t.$immutable?(t.$immutableSetter=function(t,e){return function(r){if(null==this||null==this.$__)return r;if(this.isNew)return r;var i="function"==typeof e?e.call(this,this):e;if(!i)return r;if("throw"===this.$__.strictMode&&r!==this[t])throw new n(t,"Path `"+t+"` is immutable and strict mode is set to throw.",!0);return this[t]}}(t.path,t.options.immutable),t.set(t.$immutableSetter)):t.$immutableSetter&&(t.setters=t.setters.filter(function(e){return e!==t.$immutableSetter}),delete t.$immutableSetter)}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(4);function i(t,e,r){n.call(this,'Parameter "'+e+'" to '+r+"() must be an object, got "+t.toString()),this.name="ObjectParameterError",Error.captureStackTrace?Error.captureStackTrace(this):this.stack=(new Error).stack}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,t.exports=i},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(16);function i(t){n.call(this,"Can't validate() the same doc multiple times in parallel. Document: "+t._id),this.name="ParallelValidateError"}
/*!
 * Inherits from MongooseError.
 */i.prototype=Object.create(n.prototype),i.prototype.constructor=n,
/*!
 * exports
 */
t.exports=i},function(t,e,r){"use strict";(function(e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function n(){this._pres=new Map,this._posts=new Map}function i(t,e,r,n,i,o,s){if(o.useErrorHandlers){var a={error:e};return t.execPost(r,n,i,a,function(t){return"function"==typeof s&&s(t)})}return"function"==typeof s?s(e):void 0}function o(t,e,r){return t.has(e)?t.get(e):r}function s(t,e,r,n){var i=void 0;try{i=t.apply(e,r)}catch(t){return n(t)}a(i)&&i.then(function(){return n()},function(t){return n(t)})}function a(t){return null!=t&&"function"==typeof t.then}function u(t){var r=!1,n=this;return function(){var i=arguments;if(!r)return r=!0,e.nextTick(function(){return t.apply(n,i)})}}n.prototype.execPre=function(t,r,n,i){3===arguments.length&&(i=n,n=[]);var c=o(this._pres,t,[]),l=c.length,f=0,h=c.numAsync||0,p=!1,d=n;if(!l)return e.nextTick(function(){i(null)});var y=function t(){if(!(f>=l)){var n=c[f];if(n.isAsync){var o=[u(v),u(function(t){if(t){if(p)return;return p=!0,i(t)}if(0==--h&&f>=l)return i(null)})];s(n.fn,r,o,o[0])}else if(n.fn.length>0){o=[u(v)];for(var y=arguments.length>=2?arguments:[null].concat(d),_=1;_<y.length;++_)o.push(y[_]);s(n.fn,r,o,o[0])}else{var m=null,g=null;try{g=n.fn.call(r)}catch(t){m=t}if(a(g))g.then(function(){return v()},function(t){return v(t)});else{if(++f>=l)return h>0?void 0:e.nextTick(function(){i(m)});t(m)}}}};function v(t){if(t){if(p)return;return p=!0,i(t)}if(++f>=l)return h>0?void 0:i(null);y.apply(r,arguments)}y.apply(null,[null].concat(n))},n.prototype.execPreSync=function(t,e,r){for(var n=o(this._pres,t,[]),i=n.length,s=0;s<i;++s)n[s].fn.apply(e,r||[])},n.prototype.execPost=function(t,r,n,i,c){arguments.length<5&&(c=i,i=null);var l=o(this._posts,t,[]),f=l.length,h=0,p=null;if(i&&i.error&&(p=i.error),!f)return e.nextTick(function(){c.apply(null,[p].concat(n))});!function t(){for(var e=l[h].fn,i=0,o=n.length,d=[],y=0;y<o;++y)i+=n[y]&&n[y]._kareemIgnore?0:1,n[y]&&n[y]._kareemIgnore||d.push(n[y]);if(p)if(e.length===i+2){var v=u(function(e){if(e&&(p=e),++h>=f)return c.call(null,p);t()});s(e,r,[p].concat(d).concat([v]),v)}else{if(++h>=f)return c.call(null,p);t()}else{var _=u(function(e){return e?(p=e,t()):++h>=f?c.apply(null,[null].concat(n)):void t()});if(e.length===i+2)return++h>=f?c.apply(null,[null].concat(n)):t();if(e.length===i+1)s(e,r,d.concat([_]),_);else{var m=void 0,g=void 0;try{g=e.apply(r,d)}catch(t){m=t,p=t}if(a(g))return g.then(function(){return _()},function(t){return _(t)});if(++h>=f)return c.apply(null,[m].concat(n));t()}}}()},n.prototype.execPostSync=function(t,e,r){for(var n=o(this._posts,t,[]),i=n.length,s=0;s<i;++s)n[s].fn.apply(e,r||[])},n.prototype.createWrapperSync=function(t,e){var r=this;return function(){r.execPreSync(t,this,arguments);var n=e.apply(this,arguments);return r.execPostSync(t,this,[n]),n}},n.prototype.wrap=function(t,e,r,n,o){var s=n.length>0?n[n.length-1]:null,a=("function"==typeof s&&n.slice(0,n.length-1),this),u=(o=o||{}).checkForPromise;this.execPre(t,r,n,function(c){if(c){for(var l=o.numCallbackParams||0,f=o.contextParameter?[r]:[],h=f.length;h<l;++h)f.push(null);return i(a,c,t,r,f,o,s)}var p="function"==typeof s?n.length-1:n.length,d=e.length,y=e.apply(r,n.slice(0,p).concat(v));if(u){if(null!=y&&"function"==typeof y.then)return y.then(function(t){return v(null,t)},function(t){return v(t)});if(d<p+1)return v(null,y)}function v(){var e=Array.prototype.slice.call(arguments,1);if(o.nullResultByDefault&&0===e.length&&e.push(null),arguments[0])return i(a,arguments[0],t,r,e,o,s);a.execPost(t,r,e,function(){return arguments[0]?"function"==typeof s?s(arguments[0]):void 0:"function"==typeof s?s.apply(r,arguments):void 0})}})},n.prototype.filter=function(t){var e=this,r=this.clone(),n=Array.from(r._pres.keys()),i=!0,o=!1,s=void 0;try{for(var a,u=function(){var n=a.value,i=e._pres.get(n).map(function(t){return Object.assign({},t,{name:n})}).filter(t);if(0===i.length)return r._pres.delete(n),"continue";i.numAsync=i.filter(function(t){return t.isAsync}).length,r._pres.set(n,i)},c=n[Symbol.iterator]();!(i=(a=c.next()).done);i=!0)u()}catch(t){o=!0,s=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw s}}var l=Array.from(r._posts.keys()),f=!0,h=!1,p=void 0;try{for(var d,y=function(){var n=d.value,i=e._posts.get(n).map(function(t){return Object.assign({},t,{name:n})}).filter(t);if(0===i.length)return r._posts.delete(n),"continue";r._posts.set(n,i)},v=l[Symbol.iterator]();!(f=(d=v.next()).done);f=!0)y()}catch(t){h=!0,p=t}finally{try{!f&&v.return&&v.return()}finally{if(h)throw p}}return r},n.prototype.hasHooks=function(t){return this._pres.has(t)||this._posts.has(t)},n.prototype.createWrapper=function(t,r,n,i){var o=this;return this.hasHooks(t)?function(){var e=n||this,s=Array.prototype.slice.call(arguments);o.wrap(t,r,e,s,i)}:function(){var t=this,n=arguments;e.nextTick(function(){return r.apply(t,n)})}},n.prototype.pre=function(t,e,n,i,s){var a={};"object"===(void 0===e?"undefined":r(e))&&null!=e?e=(a=e).isAsync:"boolean"!=typeof arguments[1]&&(n,n=e,e=!1);var u=o(this._pres,t,[]);if(this._pres.set(t,u),e&&(u.numAsync=u.numAsync||0,++u.numAsync),"function"!=typeof n)throw new Error('pre() requires a function, got "'+(void 0===n?"undefined":r(n))+'"');return s?u.unshift(Object.assign({},a,{fn:n,isAsync:e})):u.push(Object.assign({},a,{fn:n,isAsync:e})),this},n.prototype.post=function(t,e,n,i){var s=o(this._posts,t,[]);if("function"==typeof e&&(i=!!n,n=e,e={}),"function"!=typeof n)throw new Error('post() requires a function, got "'+(void 0===n?"undefined":r(n))+'"');return i?s.unshift(Object.assign({},e,{fn:n})):s.push(Object.assign({},e,{fn:n})),this._posts.set(t,s),this},n.prototype.clone=function(){var t=new n,e=!0,r=!1,i=void 0;try{for(var o,s=this._pres.keys()[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var a=o.value,u=this._pres.get(a).slice();u.numAsync=this._pres.get(a).numAsync,t._pres.set(a,u)}}catch(t){r=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(r)throw i}}var c=!0,l=!1,f=void 0;try{for(var h,p=this._posts.keys()[Symbol.iterator]();!(c=(h=p.next()).done);c=!0){var d=h.value;t._posts.set(d,this._posts.get(d).slice())}}catch(t){l=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw f}}return t},n.prototype.merge=function(t,e){var r=(e=1===arguments.length||e)?this.clone():this,n=!0,i=!1,s=void 0;try{for(var a,u=function(){var e=a.value,n=o(r._pres,e,[]),i=t._pres.get(e).filter(function(t){return-1===n.map(function(t){return t.fn}).indexOf(t.fn)}),s=n.concat(i);s.numAsync=n.numAsync||0,s.numAsync+=i.filter(function(t){return t.isAsync}).length,r._pres.set(e,s)},c=t._pres.keys()[Symbol.iterator]();!(n=(a=c.next()).done);n=!0)u()}catch(t){i=!0,s=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw s}}var l=!0,f=!1,h=void 0;try{for(var p,d=function(){var e=p.value,n=o(r._posts,e,[]),i=t._posts.get(e).filter(function(t){return-1===n.indexOf(t)});r._posts.set(e,n.concat(i))},y=t._posts.keys()[Symbol.iterator]();!(l=(p=y.next()).done);l=!0)d()}catch(t){f=!0,h=t}finally{try{!l&&y.return&&y.return()}finally{if(f)throw h}}return r},t.exports=n}).call(this,r(8))},function(t,e,r){"use strict";var n=r(10),i=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,e),null!=e&&null!=e.options&&(this.options=Object.assign({},e.options))};Object.defineProperty(i.prototype,"ref",n),Object.defineProperty(i.prototype,"refPath",n),Object.defineProperty(i.prototype,"localField",n),Object.defineProperty(i.prototype,"foreignField",n),Object.defineProperty(i.prototype,"justOne",n),Object.defineProperty(i.prototype,"count",n),Object.defineProperty(i.prototype,"match",n),Object.defineProperty(i.prototype,"options",n),Object.defineProperty(i.prototype,"skip",n),Object.defineProperty(i.prototype,"limit",n),Object.defineProperty(i.prototype,"perDocumentLimit",n),t.exports=i},function(t,e,r){"use strict";var n=r(138),i=r(74);function o(t,e,r){var n=e.schema.options.timestamps;if(n)for(var o=t.length,s=i(n,"createdAt"),a=i(n,"updatedAt"),u=0;u<o;++u)null!=a&&(t[u][a]=r),null!=s&&(t[u][s]=r)}function s(t,e,r){var n=e.schema.options.timestamps;if(n){var o=i(n,"createdAt"),s=i(n,"updatedAt");null!=s&&(t[s]=r),null!=o&&(t[o]=r)}}t.exports=
/*!
 * ignore
 */
function(t,e,r){if(null==e)return;var a=Object.keys(e),u=void 0,c=void 0,l=void 0,f=void 0,h=void 0;if(a.length&&a[0].startsWith("$")){if(e.$push)for(u in e.$push){var p=r.path(u);e.$push[u]&&p&&p.$isMongooseDocumentArray&&p.schema.options.timestamps&&(f=p.schema.options.timestamps,c=i(f,"createdAt"),l=i(f,"updatedAt"),e.$push[u].$each?e.$push[u].$each.forEach(function(e){null!=l&&(e[l]=t),null!=c&&(e[c]=t)}):(null!=l&&(e.$push[u][l]=t),null!=c&&(e.$push[u][c]=t)))}if(null!=e.$set){var d=Object.keys(e.$set),y=!0,v=!1,_=void 0;try{for(var m,g=d[Symbol.iterator]();!(y=(m=g.next()).done);y=!0){u=m.value;var b=n(u);if(h=r.path(b)){for(var w=null,O=b.split("."),S=O.length-1;S>0;--S){var A=r.path(O.slice(0,S).join("."));if(null!=A&&(A.$isMongooseDocumentArray||A.$isSingleNested)){w=A;break}}if(Array.isArray(e.$set[u])&&h.$isMongooseDocumentArray)o(e.$set[u],h,t);else if(e.$set[u]&&h.$isSingleNested)s(e.$set[u],h,t);else if(null!=w){if(f=w.schema.options.timestamps,c=i(f,"createdAt"),l=i(f,"updatedAt"),!f||null==l)continue;if(w.$isSingleNested){e.$set[w.path+"."+l]=t;continue}var E=u.substr(w.path.length+1);if(/^\d+$/.test(E)){e.$set[w.path+"."+E][l]=t;continue}var $=E.indexOf(".");E=-1!==$?E.substr(0,$):E,e.$set[w.path+"."+E+"."+l]=t}else if(null!=h.schema&&h.schema!=r&&e.$set[u]){if(f=h.schema.options.timestamps,c=i(f,"createdAt"),l=i(f,"updatedAt"),!f)continue;null!=l&&(e.$set[u][l]=t),null!=c&&(e.$set[u][c]=t)}}}}catch(t){v=!0,_=t}finally{try{!y&&g.return&&g.return()}finally{if(v)throw _}}}}else{var j=Object.keys(e).filter(function(t){return!t.startsWith("$")}),x=!0,N=!1,P=void 0;try{for(var k,T=j[Symbol.iterator]();!(x=(k=T.next()).done);x=!0){u=k.value;var B=n(u);(h=r.path(B))&&(Array.isArray(e[u])&&h.$isMongooseDocumentArray?o(e[u],h,t):null!=e[u]&&h.$isSingleNested&&s(e[u],h,t))}}catch(t){N=!0,P=t}finally{try{!x&&T.return&&T.return()}finally{if(N)throw P}}}}},function(t,e,r){"use strict";t.exports=function(t){return t.replace(/\.\$(\[[^\]]*\])?\./g,".0.").replace(/\.(\[[^\]]*\])?\$$/g,".0")}},function(t,e,r){"use strict";
/*!
 * ignore
 */var n=r(5);t.exports=
/*!
 * ignore
 */
function(t,e,r,i,o){var s=i,a=s,u=n(o,"overwrite",!1),c=n(o,"timestamps",!0);if(!c||null==s)return i;var l=null!=c&&!1===c.createdAt,f=null!=c&&!1===c.updatedAt;if(u)return i&&i.$set&&(i=i.$set,s.$set={},a=s.$set),f||!r||i[r]||(a[r]=t),l||!e||i[e]||(a[e]=t),s;if(i=i||{},Array.isArray(s))return s.push({$set:{updatedAt:t}}),s;s.$set=s.$set||{},f||!r||i.$currentDate&&i.$currentDate[r]||(s.$set[r]=t,s.hasOwnProperty(r)&&delete s[r]);!l&&e&&(i[e]&&delete i[e],i.$set&&i.$set[e]&&delete i.$set[e],s.$setOnInsert=s.$setOnInsert||{},s.$setOnInsert[e]=t);0===Object.keys(s.$set).length&&delete s.$set;return s}},function(t,e,r){"use strict";var n=r(5),i=r(20);
/*!
 * Gather all indexes defined in the schema, including single nested,
 * document arrays, and embedded discriminators.
 */
t.exports=function(t){var e=[],r=new WeakMap,o=t.constructor.indexTypes,s=new Map;return function t(a,u,c){if(!r.has(a)){r.set(a,!0),u=u||"";for(var l=Object.keys(a.paths),f=l.length,h=0;h<f;++h){var p=l[h],d=a.paths[p];if(null==c||!c.paths[p]){if(d.$isMongooseDocumentArray||d.$isSingleNested){if(!0!==n(d,"options.excludeIndexes")&&!0!==n(d,"schemaOptions.excludeIndexes")&&!0!==n(d,"schema.options.excludeIndexes")&&t(d.schema,u+p+"."),null!=d.schema.discriminators){var y=d.schema.discriminators,v=Object.keys(y),_=!0,m=!1,g=void 0;try{for(var b,w=v[Symbol.iterator]();!(_=(b=w.next()).done);_=!0)t(y[b.value],u+p+".",d.schema)}catch(t){m=!0,g=t}finally{try{!_&&w.return&&w.return()}finally{if(m)throw g}}}if(d.$isMongooseDocumentArray)continue}var O=d._index||d.caster&&d.caster._index;if(!1!==O&&null!==O&&void 0!==O){var S={},A=i(O),E=A?O:{},$="string"==typeof O?O:!!A&&O.type;$&&-1!==o.indexOf($)?S[u+p]=$:E.text?(S[u+p]="text",delete E.text):S[u+p]=1,delete E.type,"background"in E||(E.background=!0);var j=E&&E.name;"string"==typeof j&&s.has(j)?Object.assign(s.get(j),S):(e.push([S,E]),s.set(j,S))}}}r.delete(a),u?
/*!
   * Checks for indexes added to subdocs using Schema.index().
   * These indexes need their paths prefixed properly.
   *
   * schema._indexes = [ [indexObj, options], [indexObj, options] ..]
   */
function(t,r){for(var n=t._indexes,i=n.length,o=0;o<i;++o){for(var s=n[o][0],a=Object.keys(s),u=a.length,c={},l=0;l<u;++l){var f=a[l];c[r+f]=s[f]}e.push([c,n[o][1]])}}(a,u):(a._indexes.forEach(function(t){"background"in t[1]||(t[1].background=!0)}),e=e.concat(a._indexes))}}(t),e}},function(t,e,r){"use strict";t.exports=function(t,e){for(var r in t.add(e.tree||{}),t.callQueue=t.callQueue.concat(e.callQueue),t.method(e.methods),t.static(e.statics),e.query)t.query[r]=e.query[r];for(var n in e.virtuals)t.virtuals[n]=e.virtuals[n].clone();t.s.hooks.merge(e.s.hooks,!1)}},function(t,e,r){"use strict";var n=r(16),i=r(3);t.exports=function(t,e){if("string"==typeof t)return;if("function"==typeof t)return;throw new n('Invalid ref at path "'+e+'". Got '+i.inspect(t,{depth:0}))}},function(t,e,r){"use strict";
/*!
 * ignore
 */
/*!
 * Apply query middleware
 *
 * @param {Query} query constructor
 * @param {Model} model
 */
function n(t,e){var r={useErrorHandlers:!0,numCallbackParams:1,nullResultByDefault:!0},i=e.hooks.filter(function(t){var e=function(t){var e={};t.hasOwnProperty("query")&&(e.query=t.query);t.hasOwnProperty("document")&&(e.document=t.document);return e}(t);return"updateOne"===t.name?null==e.query||!!e.query:"deleteOne"===t.name?!!e.query||0===Object.keys(e).length:"validate"!==t.name&&"remove"!==t.name||!!e.query});t.prototype._execUpdate=i.createWrapper("update",t.prototype._execUpdate,null,r),t.prototype.__distinct=i.createWrapper("distinct",t.prototype.__distinct,null,r),t.prototype.validate=i.createWrapper("validate",t.prototype.validate,null,r),n.middlewareFunctions.filter(function(t){return"update"!==t&&"distinct"!==t&&"validate"!==t}).forEach(function(e){t.prototype["_"+e]=i.createWrapper(e,t.prototype["_"+e],null,r)})}t.exports=n,
/*!
 * ignore
 */
n.middlewareFunctions=["count","countDocuments","deleteMany","deleteOne","distinct","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndRemove","findOneAndReplace","findOneAndUpdate","remove","replaceOne","update","updateMany","updateOne","validate"]},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
var n=r(7),i=r(4),o=r(145),s=r(76),a=r(2),u=r(0).populateModelSymbol,c=n.CastError,l=void 0;function f(t,e){this.enumValues=[],this.regExp=null,n.call(this,t,e,"String")}
/*!
 * ignore
 */
function h(t){return this.castForQuery(t)}f.schemaName="String",f.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
f.prototype=Object.create(n.prototype),f.prototype.constructor=f,Object.defineProperty(f.prototype,"OptionsConstructor",{configurable:!1,enumerable:!1,writable:!1,value:o}),
/*!
 * ignore
 */
f._cast=s,f.cast=function(t){return 0===arguments.length?this._cast:(!1===t&&(t=function(t){if(null!=t&&"string"!=typeof t)throw new Error;return t}),this._cast=t,this._cast)},f.get=n.get,f.set=n.set,
/*!
 * ignore
 */
f._checkRequired=function(t){return(t instanceof String||"string"==typeof t)&&t.length},f.checkRequired=n.checkRequired,f.prototype.enum=function(){if(this.enumValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.enumValidator},this),this.enumValidator=!1),void 0===arguments[0]||!1===arguments[0])return this;var t=void 0,e=void 0;a.isObject(arguments[0])?(t=arguments[0].values,e=arguments[0].message):(t=arguments,e=i.messages.String.enum);for(var r=0;r<t.length;r++)void 0!==t[r]&&this.enumValues.push(this.cast(t[r]));var n=this.enumValues;return this.enumValidator=function(t){return void 0===t||~n.indexOf(t)},this.validators.push({validator:this.enumValidator,message:e,type:"enum",enumValues:n}),this},f.prototype.lowercase=function(t){return arguments.length>0&&!t?this:this.set(function(t,e){return"string"!=typeof t&&(t=e.cast(t)),t?t.toLowerCase():t})},f.prototype.uppercase=function(t){return arguments.length>0&&!t?this:this.set(function(t,e){return"string"!=typeof t&&(t=e.cast(t)),t?t.toUpperCase():t})},f.prototype.trim=function(t){return arguments.length>0&&!t?this:this.set(function(t,e){return"string"!=typeof t&&(t=e.cast(t)),t?t.trim():t})},f.prototype.minlength=function(t,e){if(this.minlengthValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.minlengthValidator},this)),null!==t&&void 0!==t){var r=e||i.messages.String.minlength;r=r.replace(/{MINLENGTH}/,t),this.validators.push({validator:this.minlengthValidator=function(e){return null===e||e.length>=t},message:r,type:"minlength",minlength:t})}return this},f.prototype.maxlength=function(t,e){if(this.maxlengthValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.maxlengthValidator},this)),null!==t&&void 0!==t){var r=e||i.messages.String.maxlength;r=r.replace(/{MAXLENGTH}/,t),this.validators.push({validator:this.maxlengthValidator=function(e){return null===e||e.length<=t},message:r,type:"maxlength",maxlength:t})}return this},f.prototype.match=function(t,e){var r=e||i.messages.String.match;return this.validators.push({validator:function(e){return!!t&&(null==e||""===e||t.test(e))},message:r,type:"regexp",regexp:t}),this},f.prototype.checkRequired=function(t,e){return n._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():f.checkRequired())(t)},f.prototype.cast=function(t,i,o){if(n._isRef(this,t,i,o)){if(null===t||void 0===t)return t;if(l||(l=r(6)),t instanceof l)return t.$__.wasPopulated=!0,t;if("string"==typeof t)return t;if(e.isBuffer(t)||!a.isObject(t))throw new c("string",t,this.path,null,this);var s=i.$__fullPath(this.path),h=new((i.ownerDocument?i.ownerDocument():i).populated(s,!0).options[u])(t);return h.$__.wasPopulated=!0,h}var p="function"==typeof this.constructor.cast?this.constructor.cast():f.cast();try{return p(t)}catch(e){throw new c("string",t,this.path,null,this)}};var p=a.options(n.prototype.$conditionalHandlers,{$all:function(t){var e=this;return Array.isArray(t)?t.map(function(t){return e.castForQuery(t)}):[this.castForQuery(t)]},$gt:h,$gte:h,$lt:h,$lte:h,$options:String,$regex:h,$not:h});Object.defineProperty(f.prototype,"$conditionalHandlers",{configurable:!1,enumerable:!1,writable:!1,value:Object.freeze(p)}),f.prototype.castForQuery=function(t,e){var r=void 0;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new Error("Can't use "+t+" with String.");return r.call(this,e)}return e=t,"[object RegExp]"===Object.prototype.toString.call(e)?e:this._castForQuery(e)},
/*!
 * Module exports.
 */
t.exports=f}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"enum",o),Object.defineProperty(i.prototype,"match",o),Object.defineProperty(i.prototype,"lowercase",o),Object.defineProperty(i.prototype,"trim",o),Object.defineProperty(i.prototype,"uppercase",o),Object.defineProperty(i.prototype,"minlength",o),Object.defineProperty(i.prototype,"maxlength",o),
/*!
 * ignore
 */
t.exports=i},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"min",o),Object.defineProperty(i.prototype,"max",o),Object.defineProperty(i.prototype,"enum",o),
/*!
 * ignore
 */
t.exports=i},function(t,e,r){"use strict";var n=r(21);
/*!
 * Given a value, cast it to a number, or throw a `CastError` if the value
 * cannot be casted. `null` and `undefined` are considered valid.
 *
 * @param {Any} value
 * @param {String} [path] optional the path to set on the CastError
 * @return {Boolean|null|undefined}
 * @throws {Error} if `value` is not one of the allowed values
 * @api private
 */t.exports=function(t){return null==t?t:""===t?null:("string"!=typeof t&&"boolean"!=typeof t||(t=Number(t)),n.ok(!isNaN(t)),t instanceof Number?t.valueOf():"number"==typeof t?t:Array.isArray(t)||"function"!=typeof t.valueOf?t.toString&&!Array.isArray(t)&&t.toString()==Number(t)?Number(t):void n.ok(!1):Number(t.valueOf()))}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(13),i=r(7),o=r(49),s=r(2);function a(t,e){i.call(this,t,e,"Boolean")}a.schemaName="Boolean",a.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
a.prototype=Object.create(i.prototype),a.prototype.constructor=a,
/*!
 * ignore
 */
a._cast=o,a.set=i.set,a.cast=function(t){return 0===arguments.length?this._cast:(!1===t&&(t=function(t){if(null!=t&&"boolean"!=typeof t)throw new Error;return t}),this._cast=t,this._cast)},
/*!
 * ignore
 */
a._checkRequired=function(t){return!0===t||!1===t},a.checkRequired=i.checkRequired,a.prototype.checkRequired=function(t){return this.constructor._checkRequired(t)},Object.defineProperty(a,"convertToTrue",{get:function(){return o.convertToTrue},set:function(t){o.convertToTrue=t}}),Object.defineProperty(a,"convertToFalse",{get:function(){return o.convertToFalse},set:function(t){o.convertToFalse=t}}),a.prototype.cast=function(t){var e="function"==typeof this.constructor.cast?this.constructor.cast():a.cast();try{return e(t)}catch(e){throw new n("Boolean",t,this.path,e,this)}},a.$conditionalHandlers=s.options(i.prototype.$conditionalHandlers,{}),a.prototype.castForQuery=function(t,e){var r=void 0;return 2===arguments.length?(r=a.$conditionalHandlers[t])?r.call(this,e):this._castForQuery(e):this._castForQuery(t)},
/*!
 * Module exports.
 */
t.exports=a},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(55),i=r(13),o=r(18).EventEmitter,s=r(154),a=r(7),u=r(29),c=r(89),l=r(5),f=r(90),h=r(3),p=r(2),d=r(91),y=r(0).arrayPathSymbol,v=r(0).documentArrayParent,_=void 0,m=void 0;function g(t,e,r,i){null!=i&&null!=i._id?e=f(e,i):null!=r&&null!=r._id&&(e=f(e,r));var o=b(e,r);o.prototype.$basePath=t,n.call(this,t,o,r),this.schema=e,this.schemaOptions=i||{},this.$isMongooseDocumentArray=!0,this.Constructor=o,o.base=e.base;var s=this.defaultValue;"defaultValue"in this&&void 0===s||this.default(function(){var t=s.call(this);return Array.isArray(t)||(t=[t]),t});var u=this;this.$embeddedSchemaType=new a(t+".$",{required:l(this,"schemaOptions.required",!1)}),this.$embeddedSchemaType.cast=function(t,e,r){return u.cast(t,e,r)[0]},this.$embeddedSchemaType.$isMongooseDocumentArrayElement=!0,this.$embeddedSchemaType.caster=this.Constructor,this.$embeddedSchemaType.schema=this.schema}
/*!
 * Ignore
 */
function b(t,e,n){function i(){m.apply(this,arguments),this.$session(this.ownerDocument().$session())}m||(m=r(25));var s=null!=n?n.prototype:m.prototype;for(var a in i.prototype=Object.create(s),i.prototype.$__setSchema(t),i.schema=t,i.prototype.constructor=i,i.$isArraySubdocument=!0,i.events=new o,t.methods)i.prototype[a]=t.methods[a];for(var u in t.statics)i[u]=t.statics[u];for(var c in o.prototype)i[c]=o.prototype[c];return i.options=e,i}
/*!
 * Scopes paths selected in a query to this array.
 * Necessary for proper default application of subdocument values.
 *
 * @param {DocumentArrayPath} array - the array to scope `fields` paths
 * @param {Object|undefined} fields - the root fields selected in the query
 * @param {Boolean|undefined} init - if we are being created part of a query result
 */
function w(t,e,r){if(r&&e){for(var n=t.path+".",i=Object.keys(e),o=i.length,s={},a=void 0,u=void 0,c=void 0;o--;)if((u=i[o]).startsWith(n)){if("$"===(c=u.substring(n.length)))continue;c.startsWith("$.")&&(c=c.substr(2)),a||(a=!0),s[c]=e[u]}return a&&s||void 0}}
/*!
 * Module exports.
 */g.schemaName="DocumentArray",g.options={castNonArrays:!0},
/*!
 * Inherits from ArrayType.
 */
g.prototype=Object.create(n.prototype),g.prototype.constructor=g,g.prototype.OptionsConstructor=s,g.prototype.discriminator=function(t,e,r){"function"==typeof t&&(t=p.getFunctionName(t));var n=b(e=c(this.casterConstructor,t,e,r),null,this.casterConstructor);n.baseCasterConstructor=this.casterConstructor;try{Object.defineProperty(n,"name",{value:t})}catch(t){}return this.casterConstructor.discriminators[t]=n,this.casterConstructor.discriminators[t]},g.prototype.doValidate=function(t,e,n,i){_||(_=r(17));var o=this;try{a.prototype.doValidate.call(this,t,function(r){if(r)return r.$isArrayValidatorError=!0,e(r);var s=t&&t.length,a=void 0;if(!s)return e();if(i&&i.updateValidator)return e();t.isMongooseDocumentArray||(t=new _(t,o.path,n));function c(t){null!=t&&((a=t)instanceof u||(a.$isArrayValidatorError=!0)),--s||e(a)}for(var l=0,f=s;l<f;++l){var h=t[l];if(null!=h){if(!(h instanceof m)){var p=d(o.casterConstructor,t[l]);h=t[l]=new p(h,t,void 0,void 0,l)}h.$__validate(c)}else--s||e(a)}},n)}catch(t){return t.$isArrayValidatorError=!0,e(t)}},g.prototype.doValidateSync=function(t,e){var r=a.prototype.doValidateSync.call(this,t,e);if(null!=r)return r.$isArrayValidatorError=!0,r;var n=t&&t.length,i=null;if(n){for(var o=0,s=n;o<s;++o){var u=t[o];if(u){if(!(u instanceof m)){var c=d(this.casterConstructor,t[o]);u=t[o]=new c(u,t,void 0,void 0,o)}var l=u.validateSync();l&&null==i&&(i=l)}}return i}},
/*!
 * ignore
 */
g.prototype.getDefault=function(t){var e="function"==typeof this.defaultValue?this.defaultValue.call(t):this.defaultValue;if(null==e)return e;_||(_=r(17)),Array.isArray(e)||(e=[e]),e=new _(e,this.path,t);for(var n=0;n<e.length;++n){var i=new(d(this.casterConstructor,e[n]))({},e,void 0,void 0,n);i.init(e[n]),i.isNew=!0,Object.assign(i.$__.activePaths.default,i.$__.activePaths.init),i.$__.activePaths.init={},e[n]=i}return e},g.prototype.cast=function(t,e,n,o,s){_||(_=r(17));var a=void 0,u=void 0,c={transform:!1,virtuals:!1};if(!Array.isArray(t)){if(!n&&!g.options.castNonArrays)throw new i("DocumentArray",h.inspect(t),this.path,null,this);return e&&n&&e.markModified(this.path),this.cast([t],e,n,o)}t&&t.isMongooseDocumentArray||s&&s.skipDocumentArrayCast?t&&t.isMongooseDocumentArray&&(t=new _(t,this.path,e)):t=new _(t,this.path,e);for(var l=t.length,f=0;f<l;++f)if(t[f]){var b=d(this.casterConstructor,t[f]);if(!t[f].$__||t[f]instanceof b&&t[f][v]===e||(t[f]=t[f].toObject({transform:!1,virtuals:t[f].schema===b.schema})),t[f]instanceof m)null==t[f].__index&&t[f].$setIndex(f);else if(null!=t[f])if(n)e?a||(a=w(this,e.$__.selected,n)):a=!0,u=new b(null,t,!0,a,f),t[f]=u.init(t[f]);else if(o&&"function"==typeof o.id&&(u=o.id(t[f]._id)),o&&u&&p.deepEqual(u.toObject(c),t[f]))u.set(t[f]),t[f]=u;else try{u=new b(t[f],t,void 0,void 0,f),t[f]=u}catch(e){var O=h.inspect(t[f]);throw new i("embedded",O,t[y],e,this)}}return t},
/*!
 * ignore
 */
g.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.path,this.schema,t,this.schemaOptions);return e.validators=this.validators.slice(),e.Constructor.discriminators=Object.assign({},this.Constructor.discriminators),e},t.exports=g},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"enum",o),
/*!
 * ignore
 */
t.exports=i},function(t,e,r){"use strict";t.exports=function t(e){if(!Array.isArray(e))return{min:0,max:0};if(0===e.length)return{min:1,max:1};var r=t(e[0]);for(var n=1;n<e.length;++n){var i=t(e[n]);i.min<r.min&&(r.min=i.min),i.max>r.max&&(r.max=i.max)}r.min=r.min+1;r.max=r.max+1;return r}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(30),o=r(54),s=r(153),a=r(5),u=r(79),c=r(3),l=r(20),f=r(27),h=["Polygon","MultiPolygon"];function p(t,e,r){if(Array.isArray(t))t.forEach(function(n,i){if(Array.isArray(n)||l(n))return p(n,e,r);t[i]=e.castForQueryWrapper({val:n,context:r})});else for(var n=Object.keys(t),i=n.length;i--;){var o=n[i],s=t[o];Array.isArray(s)||l(s)?(p(s,e,r),t[o]=s):t[o]=e.castForQuery({val:s,context:r})}}t.exports=function t(e,r,d,y){if(Array.isArray(r))throw new Error("Query filter must be an object, got an array ",c.inspect(r));r.hasOwnProperty("_bsontype")&&"ObjectID"!==r._bsontype&&delete r._bsontype;var v=Object.keys(r),_=v.length,m=void 0,g=void 0,b=void 0,w=void 0,O=void 0,S=void 0;for(d=d||{};_--;)if(S=r[w=v[_]],"$or"===w||"$nor"===w||"$and"===w)for(var A=S.length;A--;)S[A]=t(e,S[A],d,y);else{if("$where"===w){if("string"!==(O=void 0===S?"undefined":n(S))&&"function"!==O)throw new Error("Must have a string or function for $where");"function"===O&&(r[w]=S.toString());continue}if("$elemMatch"===w)S=t(e,S,d,y);else if("$text"===w)S=s(S,w);else{if(!e)continue;if(!(g=e.path(w)))for(var E=w.split("."),$=E.length;$--;){var j=E.slice(0,$).join("."),x=E.slice($).join("."),N=e.path(j),P=a(N,"schema.options.discriminatorKey");if(null!=N&&null!=a(N,"schema.discriminators")&&null!=P&&x!==P){var k=a(r,j+"."+P);null!=k&&(g=N.schema.discriminators[k].path(x))}}if(g){if(null==S)continue;if("Object"===S.constructor.name)if(Object.keys(S).some(u))for(var T=Object.keys(S),B=void 0,C=T.length;C--;)if(b=S[B=T[C]],"$not"===B){if(b&&g&&!g.caster){if((m=Object.keys(b)).length&&u(m[0]))for(var D in b)b[D]=g.castForQueryWrapper({$conditional:D,val:b[D],context:y});else S[B]=g.castForQueryWrapper({$conditional:B,val:b,context:y});continue}t(g.caster?g.caster.schema:e,b,d,y)}else S[B]=g.castForQueryWrapper({$conditional:B,val:b,context:y});else r[w]=g.castForQueryWrapper({val:S,context:y});else if(Array.isArray(S)&&-1===["Buffer","Array"].indexOf(g.instance)){for(var M=[],R=0;R<S.length;R++)M.push(g.castForQueryWrapper({val:S[R],context:y}));r[w]={$in:M}}else r[w]=g.castForQueryWrapper({val:S,context:y})}else{for(var F=w.split("."),I=F.length,L=void 0,U=void 0,V=void 0;I--&&(L=F.slice(0,I).join("."),!(g=e.path(L))););if(g){g.caster&&g.caster.schema?((V={})[U=F.slice(I).join(".")]=S,r[w]=t(g.caster.schema,V,d,y)[U]):r[w]=S;continue}if(l(S)){var q="";if(S.$near?q="$near":S.$nearSphere?q="$nearSphere":S.$within?q="$within":S.$geoIntersects?q="$geoIntersects":S.$geoWithin&&(q="$geoWithin"),q){var W=new o.Number("__QueryCasting__"),H=S[q];if(null!=S.$maxDistance&&(S.$maxDistance=W.castForQueryWrapper({val:S.$maxDistance,context:y})),null!=S.$minDistance&&(S.$minDistance=W.castForQueryWrapper({val:S.$minDistance,context:y})),"$within"===q){var Y=H.$center||H.$centerSphere||H.$box||H.$polygon;if(!Y)throw new Error("Bad $within parameter: "+JSON.stringify(S));H=Y}else if("$near"===q&&"string"==typeof H.type&&Array.isArray(H.coordinates))H=H.coordinates;else if(("$near"===q||"$nearSphere"===q||"$geoIntersects"===q)&&H.$geometry&&"string"==typeof H.$geometry.type&&Array.isArray(H.$geometry.coordinates))null!=H.$maxDistance&&(H.$maxDistance=W.castForQueryWrapper({val:H.$maxDistance,context:y})),null!=H.$minDistance&&(H.$minDistance=W.castForQueryWrapper({val:H.$minDistance,context:y})),f(H.$geometry)&&(H.$geometry=H.$geometry.toObject({transform:!1,virtuals:!1})),H=H.$geometry.coordinates;else if("$geoWithin"===q)if(H.$geometry){f(H.$geometry)&&(H.$geometry=H.$geometry.toObject({virtuals:!1}));var z=H.$geometry.type;if(-1===h.indexOf(z))throw new Error('Invalid geoJSON type for $geoWithin "'+z+'", must be "Polygon" or "MultiPolygon"');H=H.$geometry.coordinates}else H=H.$box||H.$polygon||H.$center||H.$centerSphere,f(H)&&(H=H.toObject({virtuals:!1}));p(H,W,y);continue}}if(e.nested[w])continue;if(d.upsert&&d.strict){if("throw"===d.strict)throw new i(w);throw new i(w,'Path "'+w+'" is not in schema, strict mode is `true`, and upsert is `true`.')}if("throw"===d.strictQuery)throw new i(w,'Path "'+w+"\" is not in schema and strictQuery is 'throw'.");d.strictQuery&&delete r[w]}}}return r}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(13),o=r(49),s=r(76);
/*!
 * Casts val to an object suitable for `$text`. Throws an error if the object
 * can't be casted.
 *
 * @param {Any} val value to cast
 * @param {String} [path] path to associate with any errors that occured
 * @return {Object} casted object
 * @see https://docs.mongodb.com/manual/reference/operator/query/text/
 * @api private
 */
t.exports=function(t,e){if(null==t||"object"!==(void 0===t?"undefined":n(t)))throw new i("$text",t,e);return null!=t.$search&&(t.$search=s(t.$search,e+".$search")),null!=t.$language&&(t.$language=s(t.$language,e+".$language")),null!=t.$caseSensitive&&(t.$caseSensitive=o(t.$caseSensitive,e+".$castSensitive")),null!=t.$diacriticSensitive&&(t.$diacriticSensitive=o(t.$diacriticSensitive,e+".$diacriticSensitive")),t}},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"excludeIndexes",o),Object.defineProperty(i.prototype,"_id",o),
/*!
 * ignore
 */
t.exports=i},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(13),o=r(18).EventEmitter,s=r(72),a=r(156),u=r(7),c=r(48),l=r(32).castToNumber,f=r(89),h=r(80),p=r(5),d=r(91),y=r(90),v=r(22).internalToObjectOptions,_=void 0;function m(t,e,r){t=y(t,r),this.caster=g(t),this.caster.path=e,this.caster.prototype.$basePath=e,this.schema=t,this.$isSingleNested=!0,u.call(this,e,r,"Embedded")}
/*!
 * ignore
 */
/*!
 * ignore
 */
function g(t,e){_||(_=r(88));var n=function(t,e,r){var n=this;this.$parent=r,_.apply(this,arguments),this.$session(this.ownerDocument().$session()),r&&(r.on("save",function(){n.emit("save",n),n.constructor.emit("save",n)}),r.on("isNew",function(t){n.isNew=t,n.emit("isNew",t),n.constructor.emit("isNew",t)}))},i=null!=e?e.prototype:_.prototype;for(var s in(n.prototype=Object.create(i)).$__setSchema(t),n.prototype.constructor=n,n.schema=t,n.$isSingleNested=!0,n.events=new o,n.prototype.toBSON=function(){return this.toObject(v)},t.methods)n.prototype[s]=t.methods[s];for(var a in t.statics)n[a]=t.statics[a];for(var u in o.prototype)n[u]=o.prototype[u];return n}
/*!
 * Special case for when users use a common location schema to represent
 * locations for use with $geoWithin.
 * https://docs.mongodb.org/manual/reference/operator/query/geoWithin/
 *
 * @param {Object} val
 * @api private
 */t.exports=m,m.prototype=Object.create(u.prototype),m.prototype.constructor=m,m.prototype.OptionsConstructor=a,m.prototype.$conditionalHandlers.$geoWithin=function(t){return{$geometry:this.castForQuery(t.$geometry)}},
/*!
 * ignore
 */
m.prototype.$conditionalHandlers.$near=m.prototype.$conditionalHandlers.$nearSphere=h.cast$near,m.prototype.$conditionalHandlers.$within=m.prototype.$conditionalHandlers.$geoWithin=h.cast$within,m.prototype.$conditionalHandlers.$geoIntersects=h.cast$geoIntersects,m.prototype.$conditionalHandlers.$minDistance=l,m.prototype.$conditionalHandlers.$maxDistance=l,m.prototype.$conditionalHandlers.$exists=c,m.prototype.cast=function(t,e,r,i){if(t&&t.$isSingleNested&&t.parent===e)return t;if(null!=t&&("object"!==(void 0===t?"undefined":n(t))||Array.isArray(t)))throw new s(this.path,t);var o=d(this.caster,t),a=void 0,u=p(e,"$__.selected",{}),c=this.path,l=Object.keys(u).reduce(function(t,e){return e.startsWith(c+".")&&(t[e.substr(c.length+1)]=u[e]),t},{});return r?((a=new o(void 0,l,e)).init(t),a):0===Object.keys(t).length?new o({},l,e):new o(t,l,e,void 0,{priorDoc:i})},m.prototype.castForQuery=function(t,e,r){var n=void 0;if(2===arguments.length){if(!(n=this.$conditionalHandlers[t]))throw new Error("Can't use "+t);return n.call(this,e)}if(null==(e=t))return e;this.options.runSetters&&(e=this._applySetters(e));var o=d(this.caster,e),s=null!=r&&null!=r.strict?r.strict:void 0;try{e=new o(e,s)}catch(t){if(!(t instanceof i))throw new i("Embedded",e,this.path,t,this);throw t}return e},m.prototype.doValidate=function(t,e,r,n){var i=d(this.caster,t);if(n&&n.skipSchemaValidators)return t instanceof i||(t=new i(t,null,r)),t.validate(e);u.prototype.doValidate.call(this,t,function(r){return r?e(r):t?void t.validate(e):e(null)},r,n)},m.prototype.doValidateSync=function(t,e,r){if(!r||!r.skipSchemaValidators){var n=u.prototype.doValidateSync.call(this,t,e);if(n)return n}if(t)return t.validateSync()},m.prototype.discriminator=function(t,e,r){return e=f(this.caster,t,e,r),this.caster.discriminators[t]=g(e,this.caster),this.caster.discriminators[t]},
/*!
 * ignore
 */
m.prototype.clone=function(){var t=Object.assign({},this.options),e=new this.constructor(this.schema,this.path,t);return e.validators=this.validators.slice(),e.caster.discriminators=Object.assign({},this.caster.discriminators),e}},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"_id",o),t.exports=i},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(84),o=r(158),s=r(7),a=r(78),u=r(2),c=r(0).populateModelSymbol,l=i.Binary,f=s.CastError,h=void 0;function p(t,e){s.call(this,t,e,"Buffer")}
/*!
 * ignore
 */
function d(t){return this.castForQuery(t)}p.schemaName="Buffer",p.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
p.prototype=Object.create(s.prototype),p.prototype.constructor=p,p.prototype.OptionsConstructor=o,
/*!
 * ignore
 */
p._checkRequired=function(t){return!(!t||!t.length)},p.set=s.set,p.checkRequired=s.checkRequired,p.prototype.checkRequired=function(t,e){return s._isRef(this,t,e,!0)?!!t:this.constructor._checkRequired(t)},p.prototype.cast=function(t,o,a){var p=void 0;if(s._isRef(this,t,o,a)){if(null===t||void 0===t)return t;if(h||(h=r(6)),t instanceof h)return t.$__.wasPopulated=!0,t;if(e.isBuffer(t))return t;if(!u.isObject(t))throw new f("buffer",t,this.path,null,this);var d=o.$__fullPath(this.path);return(p=new((o.ownerDocument?o.ownerDocument():o).populated(d,!0).options[c])(t)).$__.wasPopulated=!0,p}if(t&&t._id&&(t=t._id),t&&t.isMongooseBuffer)return t;if(e.isBuffer(t))return t&&t.isMongooseBuffer||(t=new i(t,[this.path,o]),null!=this.options.subtype&&(t._subtype=this.options.subtype)),t;if(t instanceof l){if(p=new i(t.value(!0),[this.path,o]),"number"!=typeof t.sub_type)throw new f("buffer",t,this.path,null,this);return p._subtype=t.sub_type,p}if(null===t)return t;var y=void 0===t?"undefined":n(t);if("string"===y||"number"===y||Array.isArray(t)||"object"===y&&"Buffer"===t.type&&Array.isArray(t.data))return"number"===y&&(t=[t]),p=new i(t,[this.path,o]),null!=this.options.subtype&&(p._subtype=this.options.subtype),p;throw new f("buffer",t,this.path,null,this)},p.prototype.subtype=function(t){return this.options.subtype=t,this},p.prototype.$conditionalHandlers=u.options(s.prototype.$conditionalHandlers,{$bitsAllClear:a,$bitsAnyClear:a,$bitsAllSet:a,$bitsAnySet:a,$gt:d,$gte:d,$lt:d,$lte:d}),p.prototype.castForQuery=function(t,e){var r=void 0;if(2===arguments.length){if(!(r=this.$conditionalHandlers[t]))throw new Error("Can't use "+t+" with Buffer.");return r.call(this,e)}e=t;var n=this._castForQuery(e);return n?n.toObject({transform:!1,virtuals:!1}):n},
/*!
 * Module exports.
 */
t.exports=p}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"subtype",o),
/*!
 * ignore
 */
t.exports=i},function(t,e,r){"use strict";
/*!
 * Module requirements.
 */var n=r(4),i=r(160),o=r(7),s=r(161),a=r(2),u=o.CastError;function c(t,e){o.call(this,t,e,"Date")}
/*!
 * Date Query casting.
 *
 * @api private
 */
function l(t){return this.cast(t)}c.schemaName="Date",c.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
c.prototype=Object.create(o.prototype),c.prototype.constructor=c,c.prototype.OptionsConstructor=i,
/*!
 * ignore
 */
c._cast=s,c.set=o.set,c.cast=function(t){return 0===arguments.length?this._cast:(!1===t&&(t=function(t){if(null!=t&&!(t instanceof Date))throw new Error;return t}),this._cast=t,this._cast)},c.prototype.expires=function(t){return this._index&&"Object"===this._index.constructor.name||(this._index={}),this._index.expires=t,a.expires(this._index),this},
/*!
 * ignore
 */
c._checkRequired=function(t){return t instanceof Date},c.checkRequired=o.checkRequired,c.prototype.checkRequired=function(t,e){return o._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():c.checkRequired())(t)},c.prototype.min=function(t,e){if(this.minValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.minValidator},this)),t){var r=e||n.messages.Date.min;"string"==typeof r&&(r=r.replace(/{MIN}/,t===Date.now?"Date.now()":t.toString()));var i=this;this.validators.push({validator:this.minValidator=function(e){var r=t;"function"==typeof t&&t!==Date.now&&(r=r.call(this));var n=r===Date.now?r():i.cast(r);return null===e||e.valueOf()>=n.valueOf()},message:r,type:"min",min:t})}return this},c.prototype.max=function(t,e){if(this.maxValidator&&(this.validators=this.validators.filter(function(t){return t.validator!==this.maxValidator},this)),t){var r=e||n.messages.Date.max;"string"==typeof r&&(r=r.replace(/{MAX}/,t===Date.now?"Date.now()":t.toString()));var i=this;this.validators.push({validator:this.maxValidator=function(e){var r=t;"function"==typeof r&&r!==Date.now&&(r=r.call(this));var n=r===Date.now?r():i.cast(r);return null===e||e.valueOf()<=n.valueOf()},message:r,type:"max",max:t})}return this},c.prototype.cast=function(t){var e="function"==typeof this.constructor.cast?this.constructor.cast():c.cast();try{return e(t)}catch(e){throw new u("date",t,this.path,e,this)}},c.prototype.$conditionalHandlers=a.options(o.prototype.$conditionalHandlers,{$gt:l,$gte:l,$lt:l,$lte:l}),c.prototype.castForQuery=function(t,e){if(2!==arguments.length)return this._castForQuery(t);var r=this.$conditionalHandlers[t];if(!r)throw new Error("Can't use "+t+" with Date.");return r.call(this,e)},
/*!
 * Module exports.
 */
t.exports=c},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"min",o),Object.defineProperty(i.prototype,"max",o),Object.defineProperty(i.prototype,"expires",o),
/*!
 * ignore
 */
t.exports=i},function(t,e,r){"use strict";var n=r(21);t.exports=function(t){if(null==t||""===t)return null;if(t instanceof Date)return n.ok(!isNaN(t.valueOf())),t;var e=void 0;if(n.ok("boolean"!=typeof t),e=t instanceof Number||"number"==typeof t?new Date(t):"string"==typeof t&&!isNaN(Number(t))&&(Number(t)>=275761||Number(t)<-271820)?new Date(Number(t)):"function"==typeof t.valueOf?new Date(t.valueOf()):new Date(t),!isNaN(e.valueOf()))return e;n.ok(!1)}},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
var n=r(163),i=r(7),o=r(85),s=r(12),a=r(2),u=r(0).populateModelSymbol,c=i.CastError,l=void 0;function f(t,e){var r="string"==typeof t&&24===t.length&&/^[a-f0-9]+$/i.test(t),n=e&&e.suppressWarning;!r&&void 0!==t||n||(console.warn("mongoose: To create a new ObjectId please try `Mongoose.Types.ObjectId` instead of using `Mongoose.Schema.ObjectId`. Set the `suppressWarning` option if you're trying to create a hex char path in your schema."),console.trace()),i.call(this,t,e,"ObjectID")}
/*!
 * ignore
 */
function h(t){return this.cast(t)}
/*!
 * ignore
 */
function p(){return new s}function d(t){if(l||(l=r(6)),this instanceof l){if(void 0===t){var e=new s;return this.$__._id=e,e}this.$__._id=t}return t}
/*!
 * Module exports.
 */f.schemaName="ObjectId",f.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
f.prototype=Object.create(i.prototype),f.prototype.constructor=f,f.prototype.OptionsConstructor=n,f.get=i.get,f.set=i.set,f.prototype.auto=function(t){return t&&(this.default(p),this.set(d)),this},
/*!
 * ignore
 */
f._checkRequired=function(t){return t instanceof s},
/*!
 * ignore
 */
f._cast=o,f.cast=function(t){return 0===arguments.length?this._cast:(!1===t&&(t=function(t){if(!(t instanceof s))throw new Error;return t}),this._cast=t,this._cast)},f.checkRequired=i.checkRequired,f.prototype.checkRequired=function(t,e){return i._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():f.checkRequired())(t)},f.prototype.cast=function(t,n,o){if(i._isRef(this,t,n,o)){if(null===t||void 0===t)return t;if(l||(l=r(6)),t instanceof l)return t.$__.wasPopulated=!0,t;if(t instanceof s)return t;if("objectid"===(t.constructor.name||"").toLowerCase())return new s(t.toHexString());if(e.isBuffer(t)||!a.isObject(t))throw new c("ObjectId",t,this.path,null,this);var h=n.$__fullPath(this.path),p=(n.ownerDocument?n.ownerDocument():n).populated(h,!0),d=t;return n.$__.populated&&n.$__.populated[h]&&n.$__.populated[h].options&&n.$__.populated[h].options.options&&n.$__.populated[h].options.options.lean||((d=new p.options[u](t)).$__.wasPopulated=!0),d}var y="function"==typeof this.constructor.cast?this.constructor.cast():f.cast();try{return y(t)}catch(e){throw new c("ObjectId",t,this.path,e,this)}},f.prototype.$conditionalHandlers=a.options(i.prototype.$conditionalHandlers,{$gt:h,$gte:h,$lt:h,$lte:h}),p.$runBeforeSetters=!0,t.exports=f}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"auto",o),
/*!
 * ignore
 */
t.exports=i},function(t,e,r){"use strict";(function(e){
/*!
 * Module dependencies.
 */
var n=r(7),i=n.CastError,o=r(19),s=r(165),a=r(2),u=r(0).populateModelSymbol,c=void 0;function l(t,e){n.call(this,t,e,"Decimal128")}
/*!
 * ignore
 */
function f(t){return this.cast(t)}l.schemaName="Decimal128",l.defaultOptions={},
/*!
 * Inherits from SchemaType.
 */
l.prototype=Object.create(n.prototype),l.prototype.constructor=l,
/*!
 * ignore
 */
l._cast=s,l.set=n.set,l.cast=function(t){return 0===arguments.length?this._cast:(!1===t&&(t=function(t){if(null!=t&&!(t instanceof o))throw new Error;return t}),this._cast=t,this._cast)},
/*!
 * ignore
 */
l._checkRequired=function(t){return t instanceof o},l.checkRequired=n.checkRequired,l.prototype.checkRequired=function(t,e){return n._isRef(this,t,e,!0)?!!t:("function"==typeof this.constructor.checkRequired?this.constructor.checkRequired():l.checkRequired())(t)},l.prototype.cast=function(t,s,f){if(n._isRef(this,t,s,f)){if(null===t||void 0===t)return t;if(c||(c=r(6)),t instanceof c)return t.$__.wasPopulated=!0,t;if(t instanceof o)return t;if(e.isBuffer(t)||!a.isObject(t))throw new i("Decimal128",t,this.path,null,this);var h=s.$__fullPath(this.path),p=(s.ownerDocument?s.ownerDocument():s).populated(h,!0),d=t;return s.$__.populated&&s.$__.populated[h]&&s.$__.populated[h].options&&s.$__.populated[h].options.options&&s.$__.populated[h].options.options.lean||((d=new p.options[u](t)).$__.wasPopulated=!0),d}var y="function"==typeof this.constructor.cast?this.constructor.cast():l.cast();try{return y(t)}catch(e){throw new i("Decimal128",t,this.path,e,this)}},l.prototype.$conditionalHandlers=a.options(n.prototype.$conditionalHandlers,{$gt:f,$gte:f,$lt:f,$lte:f}),
/*!
 * Module exports.
 */
t.exports=l}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(19),o=r(21);t.exports=function(t){return null==t?t:"object"===(void 0===t?"undefined":n(t))&&"string"==typeof t.$numberDecimal?i.fromString(t.$numberDecimal):t instanceof i?t:"string"==typeof t?i.fromString(t):e.isBuffer(t)?new i(t):"number"==typeof t?i.fromString(String(t)):"function"==typeof t.valueOf&&"string"==typeof t.valueOf()?i.fromString(t.valueOf()):void o.ok(!1)}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";(function(e){
/*!
 * ignore
 */
var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var i=r(86),o=r(167),s=r(7),a=function(t){function r(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t,e,"Map"));return n.$isSchemaMap=!0,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,s),n(r,[{key:"set",value:function(t,e){return s.set(t,e)}},{key:"cast",value:function(t,r,n){if(t instanceof i)return t;if(n){var o=new i({},this.path,r,this.$__schemaType);if(t instanceof e.Map){var s=!0,a=!1,u=void 0;try{for(var c,l=t.keys()[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var f=c.value;o.$init(f,o.$__schemaType.cast(t.get(f),r,!0))}}catch(t){a=!0,u=t}finally{try{!s&&l.return&&l.return()}finally{if(a)throw u}}}else{var h=!0,p=!1,d=void 0;try{for(var y,v=Object.keys(t)[Symbol.iterator]();!(h=(y=v.next()).done);h=!0){var _=y.value;o.$init(_,o.$__schemaType.cast(t[_],r,!0))}}catch(t){p=!0,d=t}finally{try{!h&&v.return&&v.return()}finally{if(p)throw d}}}return o}return new i(t,this.path,r,this.$__schemaType)}},{key:"clone",value:function(){var t=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(n):void 0}(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"clone",this).call(this);return null!=this.$__schemaType&&(t.$__schemaType=this.$__schemaType.clone()),t}}]),r}();a.prototype.OptionsConstructor=o,a.defaultOptions={},t.exports=a}).call(this,r(11))},function(t,e,r){"use strict";var n=r(9),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),e}(),o=r(10);Object.defineProperty(i.prototype,"of",o),t.exports=i},function(t,e,r){"use strict";(function(t){
/*!
 * Module dependencies.
 */
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(14).get().Binary,o=r(19),s=r(12),a=r(27);
/*!
 * ignore
 */
function u(e){return e&&"object"===(void 0===e?"undefined":n(e))&&!(e instanceof Date)&&!(e instanceof s)&&(!Array.isArray(e)||e.length>0)&&!(e instanceof t)&&!(e instanceof o)&&!(e instanceof i)}e.flatten=
/*!
 * ignore
 */
function e(r,n,i,o){var s=void 0;s=r&&a(r)&&!t.isBuffer(r)?Object.keys(r.toObject({transform:!1,virtuals:!1})):Object.keys(r||{});var c=s.length;var l={};n=n?n+".":"";for(var f=0;f<c;++f){var h=s[f],p=r[h];l[n+h]=p;var d=o&&o.path&&o.path(n+h),y=o&&o.nested&&o.nested[n+h];if(!d||"Mixed"!==d.instance){if(u(p)){if(i&&i.skipArrays&&Array.isArray(p))continue;var v=e(p,n+h,i,o);for(var _ in v)l[_]=v[_];Array.isArray(p)&&(l[n+h]=p)}if(y){var m=Object.keys(o.paths),g=!0,b=!1,w=void 0;try{for(var O,S=m[Symbol.iterator]();!(g=(O=S.next()).done);g=!0){var A=O.value;A.startsWith(n+h+".")&&!l.hasOwnProperty(A)&&(l[A]=void 0)}}catch(t){b=!0,w=t}finally{try{!g&&S.return&&S.return()}finally{if(b)throw w}}}}}return l}
/*!
 * ignore
 */,e.modifiedPaths=function e(r,n,i){var o=Object.keys(r||{});var s=o.length;i=i||{};n=n?n+".":"";for(var c=0;c<s;++c){var l=o[c],f=r[l];i[n+l]=!0,a(f)&&!t.isBuffer(f)&&(f=f.toObject({transform:!1,virtuals:!1})),u(f)&&e(f,n+l,i)}return i}}).call(this,r(1).Buffer)},function(t,e,r){"use strict";var n=r(5);
/*!
 * Like `schema.path()`, except with a document, because impossible to
 * determine path type without knowing the embedded discriminator key.
 */t.exports=function t(e,r,i){for(var o=(i=i||{}).typeOnly,s=r.split("."),a=null,u="adhocOrUndefined",c=0;c<s.length;++c){var l=s.slice(0,c+1).join(".");if(null!=(a=e.schema.path(l))){if("Mixed"===a.instance)return o?"real":a;if(u=e.schema.pathType(l),(a.$isSingleNested||a.$isMongooseDocumentArrayElement)&&null!=a.schema.discriminators){var f=a.schema.discriminators,h=e.get(l+"."+n(a,"schema.options.discriminatorKey"));if(null==h||null==f[h])continue;var p=s.slice(c+1).join(".");return t(e.get(l),p,i)}}else u="adhocOrUndefined"}return o?u:a}},function(t,e,r){"use strict";
/*!
 * ignore
 */
/*!
 * Returns this documents _id cast to a string.
 */
function n(){return null!=this._id?String(this._id):null}t.exports=function(t){!t.paths.id&&!t.options.noVirtualId&&t.options.id&&t.virtual("id").get(n)}},function(t,e,r){"use strict";var n=r(92);
/*!
 * ignore
 */t.exports=function(t){var e=Object.keys(t),r=e.length,i=null;if(1===r&&"_id"===e[0])i=!!t[e[r]];else for(;r--;)if("_id"!==e[r]&&n(t[e[r]])){i=!t[e[r]];break}return i}},function(t,e,r){"use strict";
/*!
 * Module dependencies.
 */var n=r(6),i=r(18).EventEmitter,o=r(4),s=r(52),a=r(12),u=o.ValidationError,c=r(75),l=r(20);function f(t,e,r,i,u){if(!(this instanceof f))return new f(t,e,r,i,u);if(l(e)&&!e.instanceOfSchema&&(e=new s(e)),e=this.schema||e,!this.schema&&e.options._id&&void 0===(t=t||{})._id&&(t._id=new a),!e)throw new o.MissingSchemaError;for(var h in this.$__setSchema(e),n.call(this,t,r,i,u),c(this,e,{decorateDoc:!0}),e.methods)this[h]=e.methods[h];for(var p in e.statics)this[p]=e.statics[p]}
/*!
 * Inherit from the NodeJS document
 */f.prototype=Object.create(n.prototype),f.prototype.constructor=f,
/*!
 * ignore
 */
f.events=new i,
/*!
 * Browser doc exposes the event emitter API
 */
f.$emitter=new i,["on","once","emit","listeners","removeListener","setMaxListeners","removeAllListeners","addListener"].forEach(function(t){f[t]=function(){return f.$emitter[t].apply(f.$emitter,arguments)}}),
/*!
 * Module exports.
 */
f.ValidationError=u,t.exports=f}])});

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapis%2Ftest&absolutePagePath=C%3A%5Cnextjs%5Ccovid-19-barter-trade%5Cpages%5Capis%5Ctest.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapis%2Ftest&absolutePagePath=C%3A%5Cnextjs%5Ccovid-19-barter-trade%5Cpages%5Capis%5Ctest.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/apis/test", function() {
      var mod = __webpack_require__(/*! ./pages/apis/test.js */ "./pages/apis/test.js")
      if(true) {
        module.hot.accept(/*! ./pages/apis/test.js */ "./pages/apis/test.js", function() {
          if(!next.router.components["/apis/test"]) return
          var updatedPage = __webpack_require__(/*! ./pages/apis/test.js */ "./pages/apis/test.js")
          next.router.update("/apis/test", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./pages/apis/test.js":
/*!****************************!*\
  !*** ./pages/apis/test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dbConnect.js */ "./utils/dbConnect.js");

Object(_utils_dbConnect_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (function (request, response) {
  return 'Done';
});

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");

console.log("mongodb+srv://Ebere:qWjOLsZTlMxY0uHM@cluster0-ev2sa.mongodb.net/test?retryWrites=true&w=majority");

function dbConnect() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function dbConnect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mongoose.connect("mongodb+srv://Ebere:qWjOLsZTlMxY0uHM@cluster0-ev2sa.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          mongoose.connection.once("open", function () {
            console.log("Database Conection Established!");
          }).on("error", function (error) {
            console.log("Error is: ", error);
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/* harmony default export */ __webpack_exports__["default"] = (dbConnect);

/***/ }),

/***/ 3:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fapis%2Ftest&absolutePagePath=C%3A%5Cnextjs%5Ccovid-19-barter-trade%5Cpages%5Capis%5Ctest.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fapis%2Ftest&absolutePagePath=C%3A%5Cnextjs%5Ccovid-19-barter-trade%5Cpages%5Capis%5Ctest.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapis%2Ftest&absolutePagePath=C%3A%5Cnextjs%5Ccovid-19-barter-trade%5Cpages%5Capis%5Ctest.js!./");


/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=test.js.map