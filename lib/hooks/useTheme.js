"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = require("../theme");

var _styled = require("../styled");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// theme hook to get the current theme;
var useTheme = function useTheme() {
  return React.useContext(_styled.ThemeContext) || _theme.theme;
};

exports.useTheme = useTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VUaGVtZS50cyJdLCJuYW1lcyI6WyJ1c2VUaGVtZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBSUE7Ozs7OztBQUlBO0FBQ08sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUM1QixTQUFPQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLG9CQUFqQixLQUFrQ0MsWUFBekM7QUFDRCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICB0aGVtZVxufSBmcm9tIFwiLi4vdGhlbWVcIjtcblxuaW1wb3J0IHtcbiAgVGhlbWVDb250ZXh0XG59IGZyb20gXCIuLi9zdHlsZWRcIjtcblxuLy8gdGhlbWUgaG9vayB0byBnZXQgdGhlIGN1cnJlbnQgdGhlbWU7XG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCkgfHwgdGhlbWVcbn07XG4iXX0=