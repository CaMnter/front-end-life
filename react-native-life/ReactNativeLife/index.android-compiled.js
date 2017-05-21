Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();





var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







MagicImage=function(_Component){_inherits(MagicImage,_Component);function MagicImage(){_classCallCheck(this,MagicImage);return _possibleConstructorReturn(this,(MagicImage.__proto__||Object.getPrototypeOf(MagicImage)).apply(this,arguments));}_createClass(MagicImage,[{key:'render',value:function render()
{
var picture={
uri:'https://avatars2.githubusercontent.com/u/10336931?v=3&s=460'};

return(
_react2.default.createElement(_reactNative.Image,{source:picture,style:{width:177,height:177}}));

}}]);return MagicImage;}(_react.Component);var


InstructionsText=function(_Component2){_inherits(InstructionsText,_Component2);function InstructionsText(){_classCallCheck(this,InstructionsText);return _possibleConstructorReturn(this,(InstructionsText.__proto__||Object.getPrototypeOf(InstructionsText)).apply(this,arguments));}_createClass(InstructionsText,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.Text,{style:styles.instructions},this.props.name));

}}]);return InstructionsText;}(_react.Component);var


ReactNativeLife=function(_Component3){_inherits(ReactNativeLife,_Component3);function ReactNativeLife(){_classCallCheck(this,ReactNativeLife);return _possibleConstructorReturn(this,(ReactNativeLife.__proto__||Object.getPrototypeOf(ReactNativeLife)).apply(this,arguments));}_createClass(ReactNativeLife,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,{style:styles.welcome},'Save you from anything!'),


_react2.default.createElement(InstructionsText,{name:'To get started, edit index.android.js'}),
_react2.default.createElement(_reactNative.Text,{style:styles.instructions},'Double tap R on your keyboard to reload,',
'\n','Shake or press menu Button for dev menu'),


_react2.default.createElement(MagicImage,null)));


}}]);return ReactNativeLife;}(_react.Component);exports.default=ReactNativeLife;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

welcome:{
fontSize:22,
textAlign:'center',
margin:10,
color:'#2D9FD8'},

instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5}});



_reactNative.AppRegistry.registerComponent('ReactNativeLife',function(){return ReactNativeLife;});

//# sourceMappingURL=index.android-compiled.js.map