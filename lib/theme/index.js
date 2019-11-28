"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = {
  animations: {
    time: {
      veryFast: 0.1,
      fast: 0.25,
      medium: 0.5,
      slow: 1
    }
  },
  button: {
    borderRadius: '4px',
    height: '32px',
    padding: '0px 15px',
    fontSize: '14px',
    fontWeight: '400',
    primary: {
      background: _colors["default"].primary,
      border: 'none',
      borderColor: 'none',
      color: _colors["default"].white,
      hoverBackground: _colors["default"].secondary,
      hoverColor: _colors["default"].white,
      focusBackground: _colors["default"].secondary,
      focusColor: _colors["default"].white
    },
    ghost: {
      background: 'transparent',
      border: '1px solid',
      borderColor: _colors["default"].primary,
      color: _colors["default"].primary,
      hoverBackground: _colors["default"].primary,
      hoverColor: _colors["default"].white,
      focusBackground: _colors["default"].primary,
      focusColor: _colors["default"].white
    },
    link: {
      background: 'transparent',
      border: 'none',
      borderColor: 'none',
      color: _colors["default"].primary,
      hoverBackground: 'transparent',
      hoverColor: _colors["default"].secondary,
      focusBackground: 'transparent',
      focusColor: _colors["default"].secondary
    }
  },
  colors: _objectSpread({}, _colors["default"])
};
exports.theme = theme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS9pbmRleC50cyJdLCJuYW1lcyI6WyJ0aGVtZSIsImFuaW1hdGlvbnMiLCJ0aW1lIiwidmVyeUZhc3QiLCJmYXN0IiwibWVkaXVtIiwic2xvdyIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwcmltYXJ5IiwiYmFja2dyb3VuZCIsImNvbG9ycyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJ3aGl0ZSIsImhvdmVyQmFja2dyb3VuZCIsInNlY29uZGFyeSIsImhvdmVyQ29sb3IiLCJmb2N1c0JhY2tncm91bmQiLCJmb2N1c0NvbG9yIiwiZ2hvc3QiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBTU8sSUFBTUEsS0FBa0IsR0FBRztBQUNoQ0MsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxRQUFRLEVBQUUsR0FETjtBQUVKQyxNQUFBQSxJQUFJLEVBQUUsSUFGRjtBQUdKQyxNQUFBQSxNQUFNLEVBQUUsR0FISjtBQUlKQyxNQUFBQSxJQUFJLEVBQUU7QUFKRjtBQURJLEdBRG9CO0FBU2hDQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsWUFBWSxFQUFFLEtBRFI7QUFFTkMsSUFBQUEsTUFBTSxFQUFFLE1BRkY7QUFHTkMsSUFBQUEsT0FBTyxFQUFFLFVBSEg7QUFJTkMsSUFBQUEsUUFBUSxFQUFFLE1BSko7QUFLTkMsSUFBQUEsVUFBVSxFQUFFLEtBTE47QUFNTkMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLFVBQVUsRUFBRUMsbUJBQU9GLE9BRFo7QUFFUEcsTUFBQUEsTUFBTSxFQUFFLE1BRkQ7QUFHUEMsTUFBQUEsV0FBVyxFQUFFLE1BSE47QUFJUEMsTUFBQUEsS0FBSyxFQUFFSCxtQkFBT0ksS0FKUDtBQUtQQyxNQUFBQSxlQUFlLEVBQUVMLG1CQUFPTSxTQUxqQjtBQU1QQyxNQUFBQSxVQUFVLEVBQUVQLG1CQUFPSSxLQU5aO0FBT1BJLE1BQUFBLGVBQWUsRUFBRVIsbUJBQU9NLFNBUGpCO0FBUVBHLE1BQUFBLFVBQVUsRUFBRVQsbUJBQU9JO0FBUlosS0FOSDtBQWdCTk0sSUFBQUEsS0FBSyxFQUFFO0FBQ0xYLE1BQUFBLFVBQVUsRUFBRSxhQURQO0FBRUxFLE1BQUFBLE1BQU0sRUFBRSxXQUZIO0FBR0xDLE1BQUFBLFdBQVcsRUFBRUYsbUJBQU9GLE9BSGY7QUFJTEssTUFBQUEsS0FBSyxFQUFFSCxtQkFBT0YsT0FKVDtBQUtMTyxNQUFBQSxlQUFlLEVBQUVMLG1CQUFPRixPQUxuQjtBQU1MUyxNQUFBQSxVQUFVLEVBQUVQLG1CQUFPSSxLQU5kO0FBT0xJLE1BQUFBLGVBQWUsRUFBRVIsbUJBQU9GLE9BUG5CO0FBUUxXLE1BQUFBLFVBQVUsRUFBRVQsbUJBQU9JO0FBUmQsS0FoQkQ7QUEwQk5PLElBQUFBLElBQUksRUFBRTtBQUNKWixNQUFBQSxVQUFVLEVBQUUsYUFEUjtBQUVKRSxNQUFBQSxNQUFNLEVBQUUsTUFGSjtBQUdKQyxNQUFBQSxXQUFXLEVBQUUsTUFIVDtBQUlKQyxNQUFBQSxLQUFLLEVBQUVILG1CQUFPRixPQUpWO0FBS0pPLE1BQUFBLGVBQWUsRUFBRSxhQUxiO0FBTUpFLE1BQUFBLFVBQVUsRUFBRVAsbUJBQU9NLFNBTmY7QUFPSkUsTUFBQUEsZUFBZSxFQUFFLGFBUGI7QUFRSkMsTUFBQUEsVUFBVSxFQUFFVCxtQkFBT007QUFSZjtBQTFCQSxHQVR3QjtBQThDaENOLEVBQUFBLE1BQU0sb0JBQ0RBLGtCQURDO0FBOUMwQixDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5pbXBvcnQge1xuICBHbG9iYWxUaGVtZVxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgdGhlbWU6IEdsb2JhbFRoZW1lID0ge1xuICBhbmltYXRpb25zOiB7XG4gICAgdGltZToge1xuICAgICAgdmVyeUZhc3Q6IDAuMSxcbiAgICAgIGZhc3Q6IDAuMjUsXG4gICAgICBtZWRpdW06IDAuNSxcbiAgICAgIHNsb3c6IDFcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGhlaWdodDogJzMycHgnLFxuICAgIHBhZGRpbmc6ICcwcHggMTVweCcsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICBwcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdub25lJyxcbiAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgICBob3ZlckJhY2tncm91bmQ6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICBob3ZlckNvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgICBmb2N1c0JhY2tncm91bmQ6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICBmb2N1c0NvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgfSxcbiAgICBnaG9zdDoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLnByaW1hcnksXG4gICAgICBjb2xvcjogY29sb3JzLnByaW1hcnksXG4gICAgICBob3ZlckJhY2tncm91bmQ6IGNvbG9ycy5wcmltYXJ5LFxuICAgICAgaG92ZXJDb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgZm9jdXNCYWNrZ3JvdW5kOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgIGZvY3VzQ29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnbm9uZScsXG4gICAgICBjb2xvcjogY29sb3JzLnByaW1hcnksXG4gICAgICBob3ZlckJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBob3ZlckNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgICAgZm9jdXNCYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZm9jdXNDb2xvcjogY29sb3JzLnNlY29uZGFyeSxcbiAgICB9XG4gIH0sXG4gIGNvbG9yczoge1xuICAgIC4uLmNvbG9yc1xuICB9LFxufTtcbiJdfQ==