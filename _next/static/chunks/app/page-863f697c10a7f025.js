(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5579:function(e,t,r){Promise.resolve().then(r.bind(r,7112)),Promise.resolve().then(r.t.bind(r,5204,23))},7112:function(e,t,r){"use strict";r.d(t,{ErrorBoundary:function(){return i}});var n=r(2265);let s=(0,n.createContext)(null),o={didCatch:!1,error:null};class i extends n.Component{static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){let{error:e}=this.state;if(null!==e){for(var t,r,n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];null===(t=(r=this.props).onReset)||void 0===t||t.call(r,{args:s,reason:"imperative-api"}),this.setState(o)}}componentDidCatch(e,t){var r,n;null===(r=(n=this.props).onError)||void 0===r||r.call(n,e,t)}componentDidUpdate(e,t){let{didCatch:r}=this.state,{resetKeys:n}=this.props;if(r&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((e,r)=>!Object.is(e,t[r]))}(e.resetKeys,n)){var s,i;null===(s=(i=this.props).onReset)||void 0===s||s.call(i,{next:n,prev:e.resetKeys,reason:"keys"}),this.setState(o)}}render(){let{children:e,fallbackRender:t,FallbackComponent:r,fallback:o}=this.props,{didCatch:i,error:l}=this.state,a=e;if(i){let e={error:l,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof t)a=t(e);else if(r)a=(0,n.createElement)(r,e);else if(null===o||(0,n.isValidElement)(o))a=o;else throw l}return(0,n.createElement)(s.Provider,{value:{didCatch:i,error:l,resetErrorBoundary:this.resetErrorBoundary}},a)}constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=o}}},5204:function(){}},function(e){e.O(0,[846,971,23,744],function(){return e(e.s=5579)}),_N_E=e.O()}]);