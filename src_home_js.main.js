"use strict";
(self["webpackChunknaha"] = self["webpackChunknaha"] || []).push([["src_home_js"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_city_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/city.jpeg */ "./src/images/city.jpeg");
/* harmony import */ var _images_yellowHouse_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yellowHouse.jpeg */ "./src/images/yellowHouse.jpeg");
/* harmony import */ var _images_family_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/family.png */ "./src/images/family.png");
/* harmony import */ var _images_donato_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/donato.png */ "./src/images/donato.png");





let card1 = document.getElementById('1');
const cardImg1 = new Image();
cardImg1.src = _images_city_jpeg__WEBPACK_IMPORTED_MODULE_0__;
cardImg1.alt = "Urban City Scape";
card1.prepend(cardImg1);    
 
let card2 = document.getElementById('2');
const cardImg2 = new Image();
cardImg2.src = _images_yellowHouse_jpeg__WEBPACK_IMPORTED_MODULE_1__;
cardImg2.alt = "Yellow home";
card2.prepend(cardImg2);  

let card3 = document.getElementById('3');
const cardImg3 = new Image();
cardImg3.src = _images_family_png__WEBPACK_IMPORTED_MODULE_2__;
cardImg3.alt = "Family in kitchen";
card3.prepend(cardImg3);  

let bio = document.getElementById('bios');

/***/ }),

/***/ "./src/images/city.jpeg":
/*!******************************!*\
  !*** ./src/images/city.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9ba6764e953d77c69ac.jpeg";

/***/ }),

/***/ "./src/images/donato.png":
/*!*******************************!*\
  !*** ./src/images/donato.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "780adebadce3540b94a2.png";

/***/ }),

/***/ "./src/images/family.png":
/*!*******************************!*\
  !*** ./src/images/family.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15772edcb83a404f8c20.png";

/***/ }),

/***/ "./src/images/yellowHouse.jpeg":
/*!*************************************!*\
  !*** ./src/images/yellowHouse.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d34b7f9e61bd991c47ca.jpeg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2hvbWVfanMubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNTO0FBQ1Q7QUFDQTs7QUFFdEM7QUFDQTtBQUNBLGVBQWUsOENBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQU07QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBRztBQUNsQjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFoYS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaXR5IGZyb20gJy4vaW1hZ2VzL2NpdHkuanBlZyc7XG5pbXBvcnQgWWVsbG93IGZyb20gJy4vaW1hZ2VzL3llbGxvd0hvdXNlLmpwZWcnO1xuaW1wb3J0IEZhbSBmcm9tICcuL2ltYWdlcy9mYW1pbHkucG5nJztcbmltcG9ydCBpbWcgZnJvbSAnLi9pbWFnZXMvZG9uYXRvLnBuZyc7XG5cbmxldCBjYXJkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcxJyk7XG5jb25zdCBjYXJkSW1nMSA9IG5ldyBJbWFnZSgpO1xuY2FyZEltZzEuc3JjID0gQ2l0eTtcbmNhcmRJbWcxLmFsdCA9IFwiVXJiYW4gQ2l0eSBTY2FwZVwiO1xuY2FyZDEucHJlcGVuZChjYXJkSW1nMSk7ICAgIFxuIFxubGV0IGNhcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzInKTtcbmNvbnN0IGNhcmRJbWcyID0gbmV3IEltYWdlKCk7XG5jYXJkSW1nMi5zcmMgPSBZZWxsb3c7XG5jYXJkSW1nMi5hbHQgPSBcIlllbGxvdyBob21lXCI7XG5jYXJkMi5wcmVwZW5kKGNhcmRJbWcyKTsgIFxuXG5sZXQgY2FyZDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMycpO1xuY29uc3QgY2FyZEltZzMgPSBuZXcgSW1hZ2UoKTtcbmNhcmRJbWczLnNyYyA9IEZhbTtcbmNhcmRJbWczLmFsdCA9IFwiRmFtaWx5IGluIGtpdGNoZW5cIjtcbmNhcmQzLnByZXBlbmQoY2FyZEltZzMpOyAgXG5cbmxldCBiaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvcycpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==