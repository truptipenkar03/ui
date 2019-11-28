"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAfterMountEffect = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Will ensure that affect is not called until at least the second render
 * of the component
 */
var useAfterMountEffect = function useAfterMountEffect(cb, deps) {
  var didMount = React.useRef(false);
  React.useEffect(function () {
    if (didMount.current) {
      cb();
    } else {
      didMount.current = true;
    }
  }, [cb].concat(_toConsumableArray(deps))); // eslint-disable-line
};

exports.useAfterMountEffect = useAfterMountEffect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VBZnRlck1vdW50RWZmZWN0LnRzIl0sIm5hbWVzIjpbInVzZUFmdGVyTW91bnRFZmZlY3QiLCJjYiIsImRlcHMiLCJkaWRNb3VudCIsIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBSU8sSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxFQUFELEVBQWlCQyxJQUFqQixFQUFpQztBQUNsRSxNQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTixDQUFhLEtBQWIsQ0FBakI7QUFFQUQsRUFBQUEsS0FBSyxDQUFDRSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUgsUUFBUSxDQUFDSSxPQUFiLEVBQXNCO0FBQ3BCTixNQUFBQSxFQUFFO0FBQ0gsS0FGRCxNQUVPO0FBQ0xFLE1BQUFBLFFBQVEsQ0FBQ0ksT0FBVCxHQUFtQixJQUFuQjtBQUNEO0FBQ0YsR0FORCxHQU1JTixFQU5KLDRCQU1XQyxJQU5YLElBSGtFLENBUy9DO0FBQ3BCLENBVk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogV2lsbCBlbnN1cmUgdGhhdCBhZmZlY3QgaXMgbm90IGNhbGxlZCB1bnRpbCBhdCBsZWFzdCB0aGUgc2Vjb25kIHJlbmRlclxuICogb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgdXNlQWZ0ZXJNb3VudEVmZmVjdCA9IChjYjogKCkgPT4gdm9pZCwgZGVwczogYW55W10pID0+IHtcbiAgY29uc3QgZGlkTW91bnQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpZE1vdW50LmN1cnJlbnQpIHtcbiAgICAgIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpZE1vdW50LmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cbiAgfSwgW2NiLCAuLi5kZXBzXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG4iXX0=