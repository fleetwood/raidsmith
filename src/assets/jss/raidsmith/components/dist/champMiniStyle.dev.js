"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _materialKitReact = require("assets/jss/material-kit-react.js");

var _raidTheme = require("assets/jss/raid-theme.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _raidTheme.raidTheme, {
  title: _objectSpread({}, _materialKitReact.title, {}, _raidTheme.robotoSlab, {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  container: _objectSpread({}, _materialKitReact.container, {
    padding: '4em',
    color: _raidTheme.grayColor,
    "& p, h1, h2, h3": {
      color: _raidTheme.grayColor
    }
  }),
  detailThumb: {
    right: '45px',
    top: '-45px',
    position: 'absolute'
  },
  champThumb: {
    border: "solid ".concat(_raidTheme.raidColors.border.width, " ").concat(_raidTheme.raidColors.border.teal1),
    color: _raidTheme.raidColors.blue
  },
  content: {
    top: '0',
    position: 'absolute',
    padding: '10px',
    color: _raidTheme.raidColors.font.white,
    width: '100%',
    height: '100%'
  },
  champName: {
    fontSize: '1.1rem',
    fontWeight: 700,
    width: '90%',
    textTransform: 'uppercase',
    textShadow: "0px 2px 2px black",
    color: _raidTheme.raidColors.font.white
  },
  factionName: {
    textShadow: "2px 2px 0px black",
    position: 'absolute',
    bottom: '8px',
    fontWeight: 400,
    color: _raidTheme.raidColors.font.white
  },
  specialtyName: {
    textShadow: "2px 2px 0px black",
    position: 'absolute',
    bottom: '28px',
    fontWeight: 600,
    color: _raidTheme.raidColors.font.crystal
  },
  affinityIcon: {
    position: "absolute",
    width: "45%",
    right: '5px',
    bottom: '5px'
  },
  auraIcon: {
    position: "absolute",
    height: "20%",
    right: '-5px',
    top: '5px'
  },
  borderCommon: _objectSpread({}, _raidTheme.raidTheme.borderCommon),
  borderUncommon: _objectSpread({}, _raidTheme.raidTheme.borderUncommon),
  borderRare: _objectSpread({}, _raidTheme.raidTheme.borderRare),
  borderEpic: _objectSpread({}, _raidTheme.raidTheme.borderEpic),
  borderLegendary: _objectSpread({}, _raidTheme.raidTheme.borderLegendary)
});

exports["default"] = _default;