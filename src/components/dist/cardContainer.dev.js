"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardContainer;

var _card = _interopRequireDefault(require("./card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CardContainer() {
  var arr = [1, 2, 3, 4, 5];
  var conatiner = arr.map(function (number, index) {
    return _card["default"];
  });
}