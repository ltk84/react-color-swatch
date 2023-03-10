import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["prefixCls", "className", "color", "colors", "style", "rectProps", "onChange", "addonAfter", "addonBefore", "rectRender"];
import React from 'react';
import { hexToHsva } from '@uiw/color-convert';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Swatch = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-swatch',
      className,
      color,
      colors = [],
      style,
      rectProps = {},
      onChange,
      addonAfter,
      addonBefore,
      rectRender
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  var rectStyle = _extends({
    background: 'rgb(144, 19, 254)',
    height: 15,
    width: 15,
    marginRight: 5,
    marginBottom: 5,
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',
    borderRadius: 2
  }, rectProps.style);
  var handleClick = hex => {
    onChange && onChange(hexToHsva(hex));
  };
  return /*#__PURE__*/_jsxs("div", _extends({
    ref: ref
  }, other, {
    className: [prefixCls, className || ''].filter(Boolean).join(' '),
    style: _extends({
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative'
    }, style),
    children: [addonBefore && /*#__PURE__*/React.isValidElement(addonBefore) && addonBefore, colors && Array.isArray(colors) && colors.map((item, idx) => {
      var title = '';
      var background = '';
      var disabled = false;
      if (typeof item === 'string') {
        title = item;
        background = item;
      }
      if (typeof item === 'object' && item.color) {
        var _item$disabled;
        title = item.title || item.color;
        background = item.color;
        disabled = (_item$disabled = item.disabled) != null ? _item$disabled : false;
      }
      var checked = color && color.toLocaleLowerCase() === background.toLocaleLowerCase();
      if (rectRender) {
        return rectRender({
          key: idx,
          title,
          color: background,
          checked: !!checked,
          disabled: !!disabled,
          style: _extends({}, rectStyle, {
            background
          }),
          onClick: () => disabled ? {} : handleClick(background)
        });
      }
      var child = rectProps.children && /*#__PURE__*/React.isValidElement(rectProps.children) ? /*#__PURE__*/React.cloneElement(rectProps.children, {
        color: background,
        checked,
        disabled
      }) : null;
      return /*#__PURE__*/_jsx("div", _extends({
        tabIndex: 0,
        title: title,
        onClick: () => disabled ? {} : handleClick(background)
      }, rectProps, {
        children: child,
        style: _extends({}, rectStyle, {
          background
        })
      }), idx);
    }), addonAfter && /*#__PURE__*/React.isValidElement(addonAfter) && addonAfter]
  }));
});
Swatch.displayName = 'Swatch';
export default Swatch;
//# sourceMappingURL=index.js.map