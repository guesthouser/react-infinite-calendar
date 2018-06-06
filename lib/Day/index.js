'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'root': 'Cal__Day__root',
  'enabled': 'Cal__Day__enabled',
  'highlighted': 'Cal__Day__highlighted',
  'today': 'Cal__Day__today',
  'disabled': 'Cal__Day__disabled',
  'selected': 'Cal__Day__selected',
  'month': 'Cal__Day__month',
  'year': 'Cal__Day__year',
  'selection': 'Cal__Day__selection',
  'day': 'Cal__Day__day',
  'range': 'Cal__Day__range',
  'start': 'Cal__Day__start',
  'end': 'Cal__Day__end',
  'betweenRange': 'Cal__Day__betweenRange'
};

var Day = function (_PureComponent) {
  _inherits(Day, _PureComponent);

  function Day() {
    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleClick = function () {
      var _this$props = _this.props,
          date = _this$props.date,
          isDisabled = _this$props.isDisabled,
          onClick = _this$props.onClick;


      if (!isDisabled && typeof onClick === 'function') {
        onClick((0, _parse2.default)(date));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Day.prototype.renderSelection = function renderSelection(selectionColor) {
    var _props = this.props,
        day = _props.day,
        date = _props.date,
        isToday = _props.isToday,
        todayLabel = _props.locale.todayLabel,
        monthShort = _props.monthShort,
        textColor = _props.theme.textColor,
        selectionStyle = _props.selectionStyle;


    return _react2.default.createElement(
      'div',
      {
        className: styles.selection,
        'data-date': date,
        style: _extends({
          backgroundColor: this.selectionColor,
          color: textColor.active
        }, selectionStyle)
      },
      _react2.default.createElement(
        'span',
        { className: styles.month },
        isToday ? todayLabel.short || todayLabel.long : monthShort
      ),
      _react2.default.createElement(
        'span',
        { className: styles.day },
        day
      )
    );
  };

  Day.prototype.render = function render() {
    var _classNames;

    var _props3 = this.props,
        className = _props3.className,
        currentYear = _props3.currentYear,
        date = _props3.date,
        day = _props3.day,
        handlers = _props3.handlers,
        isDisabled = _props3.isDisabled,
        isHighlighted = _props3.isHighlighted,
        isToday = _props3.isToday,
        isSelected = _props3.isSelected,
        monthShort = _props3.monthShort,
        _props3$theme = _props3.theme,
        selectionColor = _props3$theme.selectionColor,
        todayColor = _props3$theme.todayColor,
        year = _props3.year;

    var color = void 0;

    if (isSelected) {
      color = this.selectionColor = typeof selectionColor === 'function' ? selectionColor(date) : selectionColor;
    } else if (isToday) {
      color = todayColor;
    }

    var day_price = 0;
    var is_available = false;
    var _props2 = this.props;

    if (_props2.hasOwnProperty("locale") && _props2.locale.hasOwnProperty("pricing") && _props2.locale.pricing.hasOwnProperty(date)) {

      var data = _props2.locale.pricing[date];
      if (data.is_available == 1) {
        is_available = true;
        day_price = _props2.locale.currency + data.price;
      }
    } else {
      if (_props2.hasOwnProperty("locale") && _props2.locale.hasOwnProperty("defaultPricing")) {
        if (_props2.locale.defaultPricing.hasOwnProperty("price")) {
          day_price = _props2.locale.defaultPricing.price;
        }
        if (_props2.locale.defaultPricing.hasOwnProperty("is_available")) {
          is_available = _props2.locale.defaultPricing.is_available;
        }
      }
    }

    return _react2.default.createElement(
      'li',
      _extends({
        style: color ? { color: color } : null,
        className: (0, _classnames2.default)(styles.root, (_classNames = {}, _classNames[styles.today] = isToday, _classNames[styles.highlighted] = isHighlighted, _classNames[styles.selected] = isSelected, _classNames[styles.disabled] = isDisabled, _classNames[styles.enabled] = !isDisabled, _classNames), className) + (!is_available ? " not_available_1" : ""),
        onClick: this.handleClick,
        'data-date': date,
        'data-pricing': day_price
      }, handlers),
      day === 1 && _react2.default.createElement(
        'span',
        { className: styles.month },
        monthShort
      ),
      isToday ? _react2.default.createElement(
        'span',
        null,
        day
      ) : day,
      day === 1 && currentYear !== year && _react2.default.createElement(
        'span',
        { className: styles.year },
        year
      ),
      isSelected && this.renderSelection()
    );
  };

  return Day;
}(_react.PureComponent);

exports.default = Day;
module.exports = exports['default'];