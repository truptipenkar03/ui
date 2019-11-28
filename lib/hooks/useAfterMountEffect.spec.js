"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useAfterMountEffect = require("./useAfterMountEffect");

describe('hooks:useAfterMountEffect', function () {
  it('should call the callback on the second render', function () {
    var mockCb = jest.fn();

    var _renderHook = (0, _reactHooks.renderHook)(function (_ref) {
      var testValue = _ref.testValue;
      (0, _useAfterMountEffect.useAfterMountEffect)(mockCb, [testValue]);
    }, {
      initialProps: {
        testValue: false
      }
    }),
        rerender = _renderHook.rerender;

    expect(mockCb).toBeCalledTimes(0);
    rerender({
      testValue: true
    });
    expect(mockCb).toBeCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VBZnRlck1vdW50RWZmZWN0LnNwZWMudHMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsIm1vY2tDYiIsImplc3QiLCJmbiIsInRlc3RWYWx1ZSIsImluaXRpYWxQcm9wcyIsInJlcmVuZGVyIiwiZXhwZWN0IiwidG9CZUNhbGxlZFRpbWVzIiwidG9CZUNhbGxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFLQTs7QUFJQUEsUUFBUSxDQUFDLDJCQUFELEVBQThCLFlBQU07QUFDMUNDLEVBQUFBLEVBQUUsQ0FBQywrQ0FBRCxFQUFrRCxZQUFNO0FBQ3hELFFBQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxFQUFMLEVBQWY7O0FBRHdELHNCQUtwRCw0QkFBVyxnQkFBbUI7QUFBQSxVQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2hDLG9EQUFvQkgsTUFBcEIsRUFBNEIsQ0FBQ0csU0FBRCxDQUE1QjtBQUNELEtBRkcsRUFFRDtBQUFFQyxNQUFBQSxZQUFZLEVBQUU7QUFBRUQsUUFBQUEsU0FBUyxFQUFFO0FBQWI7QUFBaEIsS0FGQyxDQUxvRDtBQUFBLFFBSXRERSxRQUpzRCxlQUl0REEsUUFKc0Q7O0FBU3hEQyxJQUFBQSxNQUFNLENBQUNOLE1BQUQsQ0FBTixDQUFlTyxlQUFmLENBQStCLENBQS9CO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQztBQUFFRixNQUFBQSxTQUFTLEVBQUU7QUFBYixLQUFELENBQVI7QUFDQUcsSUFBQUEsTUFBTSxDQUFDTixNQUFELENBQU4sQ0FBZVEsVUFBZjtBQUNELEdBWkMsQ0FBRjtBQWFELENBZE8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgcmVuZGVySG9vayxcbiAgYWN0XG59IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QtaG9va3MnXG5cbmltcG9ydCB7XG4gIHVzZUFmdGVyTW91bnRFZmZlY3Rcbn0gZnJvbSAnLi91c2VBZnRlck1vdW50RWZmZWN0JztcblxuZGVzY3JpYmUoJ2hvb2tzOnVzZUFmdGVyTW91bnRFZmZlY3QnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgY2FsbCB0aGUgY2FsbGJhY2sgb24gdGhlIHNlY29uZCByZW5kZXInLCAoKSA9PiB7XG4gICAgY29uc3QgbW9ja0NiID0gamVzdC5mbigpO1xuXG4gICAgY29uc3Qge1xuICAgICAgcmVyZW5kZXJcbiAgICB9ID0gcmVuZGVySG9vaygoeyB0ZXN0VmFsdWUgfSkgPT4ge1xuICAgICAgdXNlQWZ0ZXJNb3VudEVmZmVjdChtb2NrQ2IsIFt0ZXN0VmFsdWVdKTtcbiAgICB9LCB7IGluaXRpYWxQcm9wczogeyB0ZXN0VmFsdWU6IGZhbHNlIH19KTtcblxuICAgIGV4cGVjdChtb2NrQ2IpLnRvQmVDYWxsZWRUaW1lcygwKTtcbiAgICByZXJlbmRlcih7IHRlc3RWYWx1ZTogdHJ1ZSB9KTtcbiAgICBleHBlY3QobW9ja0NiKS50b0JlQ2FsbGVkKCk7XG4gIH0pO1xufSk7XG4iXX0=