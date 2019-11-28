"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var React = _interopRequireWildcard(require("react"));

var _StyledButton = require("./StyledButton");

var _framerMotion = require("framer-motion");

var _CircleNotch = require("../icons/CircleNotch");

var _useTheme = require("../../hooks/useTheme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      loading = props.loading,
      loadingIcon = props.loadingIcon,
      motionConfig = props.motionConfig,
      type = props.type,
      rest = _objectWithoutProperties(props, ["children", "className", "loading", "loadingIcon", "motionConfig", "type"]);

  var theme = (0, _useTheme.useTheme)();
  var button = theme.button,
      time = theme.animations.time;
  var iconToShow = loadingIcon || React.createElement(_CircleNotch.SvgCircleNotch, {
    fill: button[type || 'primary'].color
  });
  var motionConfigToUse = motionConfig || {
    style: {
      height: button.fontSize,
      width: button.fontSize,
      transformOrigin: 'center center'
    },
    animate: {
      rotate: 360
    },
    transition: {
      duration: time.slow,
      loop: Infinity,
      ease: 'linear'
    }
  };
  return React.createElement(_StyledButton.StyledButton, _extends({
    ref: ref,
    buttonType: type,
    className: "".concat(className, " rtk-button"),
    loading: loading,
    theme: theme
  }, rest), React.createElement(_framerMotion.motion.div, {
    variants: {
      loading: {
        width: button.fontSize,
        marginRight: 5,
        transition: {
          type: 'tween'
        }
      },
      notLoading: {
        width: 0,
        marginRight: 0
      }
    },
    animate: loading ? 'loading' : 'notLoading',
    layoutTransition: {
      type: 'tween',
      duration: time.veryFast,
      delay: time.veryFast
    }
  }, loading && React.createElement(_framerMotion.motion.div, motionConfigToUse, iconToShow)), React.createElement("span", null, children));
});
exports.Button = Button;
Button.defaultProps = {
  type: 'primary',
  children: '',
  className: '',
  disabled: false,
  loading: false,
  onClick: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24udHN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsb2FkaW5nIiwibG9hZGluZ0ljb24iLCJtb3Rpb25Db25maWciLCJ0eXBlIiwicmVzdCIsInRoZW1lIiwiYnV0dG9uIiwidGltZSIsImFuaW1hdGlvbnMiLCJpY29uVG9TaG93IiwiY29sb3IiLCJtb3Rpb25Db25maWdUb1VzZSIsInN0eWxlIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsInRyYW5zZm9ybU9yaWdpbiIsImFuaW1hdGUiLCJyb3RhdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzbG93IiwibG9vcCIsIkluZmluaXR5IiwiZWFzZSIsIm1hcmdpblJpZ2h0Iiwibm90TG9hZGluZyIsInZlcnlGYXN0IiwiZGVsYXkiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFJQTs7QUFJQTs7QUFRQTs7Ozs7Ozs7Ozs7O0FBc0NPLElBQU1BLE1BQTRDLEdBQUdDLEtBQUssQ0FBQ0MsVUFBTixDQUFpRCxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUV6SEMsUUFGeUgsR0FTdkhGLEtBVHVILENBRXpIRSxRQUZ5SDtBQUFBLE1BR3pIQyxTQUh5SCxHQVN2SEgsS0FUdUgsQ0FHekhHLFNBSHlIO0FBQUEsTUFJekhDLE9BSnlILEdBU3ZISixLQVR1SCxDQUl6SEksT0FKeUg7QUFBQSxNQUt6SEMsV0FMeUgsR0FTdkhMLEtBVHVILENBS3pISyxXQUx5SDtBQUFBLE1BTXpIQyxZQU55SCxHQVN2SE4sS0FUdUgsQ0FNekhNLFlBTnlIO0FBQUEsTUFPekhDLElBUHlILEdBU3ZIUCxLQVR1SCxDQU96SE8sSUFQeUg7QUFBQSxNQVF0SEMsSUFSc0gsNEJBU3ZIUixLQVR1SDs7QUFXM0gsTUFBTVMsS0FBSyxHQUFHLHlCQUFkO0FBWDJILE1BY3pIQyxNQWR5SCxHQWtCdkhELEtBbEJ1SCxDQWN6SEMsTUFkeUg7QUFBQSxNQWdCdkhDLElBaEJ1SCxHQWtCdkhGLEtBbEJ1SCxDQWV6SEcsVUFmeUgsQ0FnQnZIRCxJQWhCdUg7QUFvQjNILE1BQU1FLFVBQVUsR0FBR1IsV0FBVyxJQUFJLG9CQUFDLDJCQUFEO0FBQWdCLElBQUEsSUFBSSxFQUFFSyxNQUFNLENBQUNILElBQUksSUFBSSxTQUFULENBQU4sQ0FBMEJPO0FBQWhELElBQWxDO0FBRUEsTUFBTUMsaUJBQThCLEdBQUdULFlBQVksSUFBSztBQUN0RFUsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRVAsTUFBTSxDQUFDUSxRQUFqQjtBQUEyQkMsTUFBQUEsS0FBSyxFQUFFVCxNQUFNLENBQUNRLFFBQXpDO0FBQW1ERSxNQUFBQSxlQUFlLEVBQUU7QUFBcEUsS0FEK0M7QUFFdERDLElBQUFBLE9BQU8sRUFBRTtBQUFDQyxNQUFBQSxNQUFNLEVBQUU7QUFBVCxLQUY2QztBQUd0REMsSUFBQUEsVUFBVSxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRWIsSUFBSSxDQUFDYyxJQUFqQjtBQUF1QkMsTUFBQUEsSUFBSSxFQUFFQyxRQUE3QjtBQUF1Q0MsTUFBQUEsSUFBSSxFQUFFO0FBQTdDO0FBSDBDLEdBQXhEO0FBTUEsU0FDRSxvQkFBQywwQkFBRDtBQUNFLElBQUEsR0FBRyxFQUFFM0IsR0FEUDtBQUVFLElBQUEsVUFBVSxFQUFFTSxJQUZkO0FBR0UsSUFBQSxTQUFTLFlBQUtKLFNBQUwsZ0JBSFg7QUFJRSxJQUFBLE9BQU8sRUFBRUMsT0FKWDtBQUtFLElBQUEsS0FBSyxFQUFFSztBQUxULEtBTU1ELElBTk4sR0FRRSxvQkFBQyxvQkFBRCxDQUFRLEdBQVI7QUFDRSxJQUFBLFFBQVEsRUFBRTtBQUNSSixNQUFBQSxPQUFPLEVBQUU7QUFDUGUsUUFBQUEsS0FBSyxFQUFFVCxNQUFNLENBQUNRLFFBRFA7QUFFUFcsUUFBQUEsV0FBVyxFQUFFLENBRk47QUFHUE4sUUFBQUEsVUFBVSxFQUFFO0FBQUVoQixVQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUhMLE9BREQ7QUFNUnVCLE1BQUFBLFVBQVUsRUFBRTtBQUFFWCxRQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZVSxRQUFBQSxXQUFXLEVBQUU7QUFBekI7QUFOSixLQURaO0FBU0UsSUFBQSxPQUFPLEVBQUV6QixPQUFPLEdBQUcsU0FBSCxHQUFlLFlBVGpDO0FBVUUsSUFBQSxnQkFBZ0IsRUFBRTtBQUFFRyxNQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQmlCLE1BQUFBLFFBQVEsRUFBRWIsSUFBSSxDQUFDb0IsUUFBaEM7QUFBMENDLE1BQUFBLEtBQUssRUFBRXJCLElBQUksQ0FBQ29CO0FBQXREO0FBVnBCLEtBWUczQixPQUFPLElBQ04sb0JBQUMsb0JBQUQsQ0FBUSxHQUFSLEVBQ01XLGlCQUROLEVBR0dGLFVBSEgsQ0FiSixDQVJGLEVBNEJFLGtDQUFPWCxRQUFQLENBNUJGLENBREY7QUFnQ0QsQ0E1RDJELENBQXJEOztBQThEUEwsTUFBTSxDQUFDb0MsWUFBUCxHQUFzQjtBQUNwQjFCLEVBQUFBLElBQUksRUFBRSxTQURjO0FBRXBCTCxFQUFBQSxRQUFRLEVBQUUsRUFGVTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFLEVBSFM7QUFJcEIrQixFQUFBQSxRQUFRLEVBQUUsS0FKVTtBQUtwQjlCLEVBQUFBLE9BQU8sRUFBRSxLQUxXO0FBTXBCK0IsRUFBQUEsT0FBTyxFQUFFQztBQU5XLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBTdHlsZWRCdXR0b25cbn0gZnJvbSBcIi4vU3R5bGVkQnV0dG9uXCI7XG5cbmltcG9ydCB7XG4gIG1vdGlvbiwgTW90aW9uUHJvcHNcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW1wb3J0IHtcbiAgU3ZnQ2lyY2xlTm90Y2hcbn0gZnJvbSAnLi4vaWNvbnMvQ2lyY2xlTm90Y2gnO1xuXG5pbXBvcnQge1xuICBNb3VzZUV2ZW50SGFuZGxlclxufSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgdXNlVGhlbWVcbn0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRoZW1lXCI7XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZ2hvc3QnIHwgJ2xpbmsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcbiAgLyoqIFR5cGUgb2YgdGhlIGJ1dHRvbiAqL1xuICB0eXBlPzogQnV0dG9uVHlwZTtcblxuICAvKiogQ29udGVudCB0byBzaG93IGluIHRoZSBidXR0b24gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG5cbiAgLyoqIGNsYXNzbmFtZSBmb3IgdGhlIGJ1dHRvbiAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqIERpc2FibGVkIHN0YXRlIG9mIHRoZSBidXR0b24gKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKiBIVE1MIFR5cGUgb2YgdGhlIGJ1dHRvbiAqL1xuICBodG1sVHlwZT86IHN0cmluZztcblxuICAvKiogTG9hZGluZyBzdGF0ZSBvZiB0aGUgYnV0dG9uICovXG4gIGxvYWRpbmc/OiBib29sZWFuO1xuXG4gIC8qKiBMb2FkaW5nIGljb24gb2YgdGhlIGJ1dHRvbiAqL1xuICBsb2FkaW5nSWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcblxuICAvKiogTW90aW9uIGNvbmZpZ3VyYXRpb24gZm9yIGxvYWRpbmcgaWNvbiAqL1xuICBtb3Rpb25Db25maWc/OiBNb3Rpb25Qcm9wcztcblxuICAvKiogRnVuY3Rpb24gdG8gaGFuZGxlIGNsaWNrIGV2ZW50ICovXG4gIG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG5cbiAgLyoqIFJlZiB0byBiZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbiAqL1xuICByZWY/OiBSZWFjdC5SZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxCdXR0b25Qcm9wcz4gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBCdXR0b25Qcm9wcz4oKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICBsb2FkaW5nLFxuICAgIGxvYWRpbmdJY29uLFxuICAgIG1vdGlvbkNvbmZpZyxcbiAgICB0eXBlLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCB7XG4gICAgYnV0dG9uLFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgIHRpbWVcbiAgICB9XG4gIH0gPSB0aGVtZTtcblxuICBjb25zdCBpY29uVG9TaG93ID0gbG9hZGluZ0ljb24gfHwgPFN2Z0NpcmNsZU5vdGNoIGZpbGw9e2J1dHRvblt0eXBlIHx8ICdwcmltYXJ5J10uY29sb3J9IC8+O1xuXG4gIGNvbnN0IG1vdGlvbkNvbmZpZ1RvVXNlOiBNb3Rpb25Qcm9wcyA9IG1vdGlvbkNvbmZpZyB8fCAge1xuICAgIHN0eWxlOiB7IGhlaWdodDogYnV0dG9uLmZvbnRTaXplLCB3aWR0aDogYnV0dG9uLmZvbnRTaXplLCB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJyB9LFxuICAgIGFuaW1hdGU6IHtyb3RhdGU6IDM2MH0sXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogdGltZS5zbG93LCBsb29wOiBJbmZpbml0eSwgZWFzZTogJ2xpbmVhcid9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQnV0dG9uXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGJ1dHRvblR5cGU9e3R5cGV9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcnRrLWJ1dHRvbmB9XG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICB3aWR0aDogYnV0dG9uLmZvbnRTaXplLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7IHR5cGU6ICd0d2Vlbid9XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgbm90TG9hZGluZzogeyB3aWR0aDogMCwgbWFyZ2luUmlnaHQ6IDB9XG4gICAgICAgIH19XG4gICAgICAgIGFuaW1hdGU9e2xvYWRpbmcgPyAnbG9hZGluZycgOiAnbm90TG9hZGluZyd9XG4gICAgICAgIGxheW91dFRyYW5zaXRpb249e3sgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IHRpbWUudmVyeUZhc3QsIGRlbGF5OiB0aW1lLnZlcnlGYXN0IH19XG4gICAgICA+XG4gICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIHsuLi5tb3Rpb25Db25maWdUb1VzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aWNvblRvU2hvd31cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG4gICAgPC9TdHlsZWRCdXR0b24+XG4gICk7XG59KTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3ByaW1hcnknLFxuICBjaGlsZHJlbjogJycsXG4gIGNsYXNzTmFtZTogJycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIG9uQ2xpY2s6IHVuZGVmaW5lZFxufTtcbiJdfQ==