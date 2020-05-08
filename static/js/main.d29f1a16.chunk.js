(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(6),r=n.n(s),o=(n(12),n(1)),c=n(2),m=n(3),l=n(4);n(13);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=new Date;return i.setHours(e,t,n,0),i}var d=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;Object(o.a)(this,n),i=t.call(this,e);var a=e.timers[0],s=a.hours,r=a.minutes,c=a.seconds;return i.state={date:u(s,r,c),index:0,timerState:"reseted",changed:!1},i}return Object(c.a)(n,[{key:"addSeconds",value:function(e){this.setState((function(t){var n=t.date,i=(t.timerState,new Date(n));return i.setSeconds(i.getSeconds()+e),{date:i,timerState:"running",changed:!1}}))}},{key:"addMinute",value:function(e){this.addSeconds(60*e)}},{key:"startTimer",value:function(){var e=this;this.timerID=setInterval((function(){return e.addSeconds(-1)}),1e3)}},{key:"pauseTimer",value:function(){clearInterval(this.timerID),this.setState({timerState:"paused"})}},{key:"startPause",value:function(){var e=this,t=this.state.timerState;"reseted"===t||"paused"===t?this.timerID=setInterval((function(){return e.addSeconds(-1)}),1e3):"running"===t&&(clearInterval(this.timerID),this.setState({timerState:"paused"}))}},{key:"resetTimer",value:function(){var e=this.state.index,t=this.props.timers[e],n=t.hours,i=t.minutes,a=t.seconds;clearInterval(this.timerID),this.setState({date:u(n,i,a),timerState:"reseted"})}},{key:"getTimeString",value:function(){var e=this.state.date.toTimeString();return(e=e.split(" ")[0]).slice(3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"componentDidMount",value:function(){console.log(this.state.timerState)}},{key:"nextTimer",value:function(e){var t=this.props.timers[e],n=t.hours,i=t.minutes,a=t.seconds;this.setState({date:u(n,i,a),index:e,changed:!0})}},{key:"fowardTimer",value:function(){var e=this.state.index;e===this.props.timers.length-1?this.nextTimer(0):this.nextTimer(e+1)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,i=n.date,a=n.index;if(0===i.getSeconds()&&0===i.getMinutes()&&this.fowardTimer(),JSON.stringify(this.props.timers)!==JSON.stringify(e.timers)){var s=this.props.timers[a],r=s.hours,o=s.minutes,c=s.seconds;this.setState({date:u(r,o,c)})}}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"timer-box"},a.a.createElement("p",{id:"time-left"},this.getTimeString()),a.a.createElement("p",{id:"timer-label","data-timer-state":this.state.timerState},"Session: ",this.state.timerState),a.a.createElement("p",null,this.props.timers[this.state.index].name," time!"),a.a.createElement("div",{id:"actions"},a.a.createElement("button",{id:"start_stop",title:"Play or Stop timer",onClick:this.startPause.bind(this)},"paused"===e.state.timerState||"reseted"===e.state.timerState?a.a.createElement("i",{className:"fa fa-play"}):"running"===e.state.timerState?a.a.createElement("i",{className:"fa fa-pause"}):void 0),a.a.createElement("button",{id:"reset",onClick:this.resetTimer.bind(this)},"Reset timer"),a.a.createElement("button",{title:"Foward timer",onClick:this.fowardTimer.bind(this)},a.a.createElement("i",{className:"fa fa-forward"})),this.state.changed&&a.a.createElement("audio",{autoPlay:!0,src:"http://soundbible.com/mp3/Door Bell-SoundBible.com-1986366504.mp3"})))}}]),n}(a.a.Component);d.defaultProps={timers:[{hours:0,minutes:25,seconds:0}],onPause:function(){},onReset:function(){},onStart:function(){},onStop:function(){}};var h=d,f=(n(14),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={timers:[{hours:0,minutes:25,seconds:0,name:"Work"},{hours:0,minutes:5,seconds:0,name:"Break"}]},i}return Object(c.a)(n,[{key:"incDecTimer",value:function(e,t){this.setState((function(n){var i=n.timers,a=JSON.parse(JSON.stringify(i));return a[e].minutes=a[e].minutes+t,a[e].minutes>=0?{timers:a}:void 0}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,{timers:this.state.timers}),a.a.createElement("p",{id:"session-label"},"Work length:",a.a.createElement("span",{id:"session-length"}," ",this.state.timers[0].minutes,1===this.state.timers[0].minutes?" minute":" minutes")),a.a.createElement("div",{className:"control"},a.a.createElement("button",{id:"session-increment",title:"Session increment",onClick:this.incDecTimer.bind(this,0,1)},a.a.createElement("i",{className:"fa fa-plus"})),a.a.createElement("button",{id:"session-decrement",title:"Session decrement",onClick:this.incDecTimer.bind(this,0,-1)},a.a.createElement("i",{className:"fa fa-minus"}))),a.a.createElement("p",{id:"break-label"},"Break length:",a.a.createElement("span",{id:"break-length"}," ",this.state.timers[1].minutes,1===this.state.timers[1].minutes?" minute":" minutes")),a.a.createElement("div",{className:"control"},a.a.createElement("button",{id:"break-increment",title:"Break increment",onClick:this.incDecTimer.bind(this,1,1)},a.a.createElement("i",{className:"fa fa-plus"})),a.a.createElement("button",{id:"break-decrement",title:"Break decrement",onClick:this.incDecTimer.bind(this,1,-1)},a.a.createElement("i",{className:"fa fa-minus"}))))}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d29f1a16.chunk.js.map