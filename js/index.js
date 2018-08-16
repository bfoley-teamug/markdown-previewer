var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Previewer = function (_React$Component) {_inherits(Previewer, _React$Component);function Previewer() {_classCallCheck(this, Previewer);return _possibleConstructorReturn(this, (Previewer.__proto__ || Object.getPrototypeOf(Previewer)).apply(this, arguments));}_createClass(Previewer, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'previewer' },
          React.createElement('h3', null, 'Preview Here'),
          React.createElement('div', { dangerouslySetInnerHTML: this.props.markup })));


    } }]);return Previewer;}(React.Component);var


Editor = function (_React$Component2) {_inherits(Editor, _React$Component2);function Editor() {_classCallCheck(this, Editor);return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));}_createClass(Editor, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'editor' },
          React.createElement('h3', null, 'Edit Here'),
          React.createElement('textarea', {
            onChange: this.props.onChange,
            value: this.props.value })));




    } }]);return Editor;}(React.Component);var


ShowMarkdownContainer = function (_React$Component3) {_inherits(ShowMarkdownContainer, _React$Component3);
  function ShowMarkdownContainer(props) {_classCallCheck(this, ShowMarkdownContainer);var _this3 = _possibleConstructorReturn(this, (ShowMarkdownContainer.__proto__ || Object.getPrototypeOf(ShowMarkdownContainer)).call(this,
    props));
    _this3.state = {
      text: "# Hello\n## Goodbye\n**I say High**, you say *Low*.\n You say  Why?  And I say ~~I don't know~~\n 1. Hayla\n  * hayla-heyloa\n\n\n [Hello, Goodbye](https://en.wikipedia.org/wiki/Hello,_Goodbye), by The Beatles. " };


    _this3.handleEdits = _this3.handleEdits.bind(_this3);return _this3;

  }_createClass(ShowMarkdownContainer, [{ key: 'createMarkup', value: function createMarkup()

    {
      var options = {
        sanitize: true };

      return {
        __html: marked(this.state.text, options) };

    } }, { key: 'handleEdits', value: function handleEdits(

    e) {
      this.setState({
        text: e.target.value });

    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('h1', { className: 'hOne' }, 'Markdown Previewer'),
          React.createElement('h2', { className: 'hTwo' }, 'A FreeCodeCamp Project'),
          React.createElement(Editor, { onChange: this.handleEdits, value: this.state.text }),
          React.createElement(Previewer, { markup: this.createMarkup() })));


    } }]);return ShowMarkdownContainer;}(React.Component);var


App = function (_React$Component4) {_inherits(App, _React$Component4);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: 'render', value: function render()
    {
      return (
        React.createElement(ShowMarkdownContainer, null));

    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));