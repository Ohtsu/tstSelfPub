webpackJsonp([0,5],{740:function(t,e,n){"use strict";var a=n(0),o=n(743),i=n(744),c=n(747);n.d(e,"PagesModule",function(){return d});var r=this&&this.__decorate||function(t,e,n,a){var o,i=arguments.length,c=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,a);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(){}return t}();d=r([n.i(a.v)({imports:[c.a],declarations:[o.a,i.a]}),s("design:paramtypes",[])],d)},743:function(t,e,n){"use strict";var a=n(0);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var o,i=arguments.length,c=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,a);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t}();c=o([n.i(a.a)({template:n(750)}),i("design:paramtypes",[])],c)},744:function(t,e,n){"use strict";var a=n(0);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var o,i=arguments.length,c=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,a);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t}();c=o([n.i(a.a)({template:n(751)}),i("design:paramtypes",[])],c)},747:function(t,e,n){"use strict";var a=n(0),o=n(160),i=n(743),c=n(744);n.d(e,"a",function(){return l});var r=this&&this.__decorate||function(t,e,n,a){var o,i=arguments.length,c=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,a);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=[{path:"",data:{title:"Example Pages"},children:[{path:"404",component:i.a,data:{title:"Page 404"}},{path:"login",component:c.a,data:{title:"Login Page"}}]}],l=function(){function t(){}return t}();l=r([n.i(a.v)({imports:[o.a.forChild(d)],exports:[o.a]}),s("design:paramtypes",[])],l)},750:function(t,e){t.exports='\n<!--<h4 class="pt-1">Oops! You\'re lost.</h4>-->\n<div class="container d-table">\n    <div class="d-100vh-va-middle">\n        <div class="row">\n            <div class="col-md-6 offset-md-3">\n                <div class="clearfix">\n                    <h1 class="float-xs-left display-3 mr-2">404</h1>\n                    <h4 class="pt-1">Oops! You\'re lost.</h4>\n                    <p class="text-muted">The page you are looking for was not found.</p>\n                </div>\n                <div class="input-prepend input-group">\n                    <span class="input-group-addon">\n                    </span>\n                    <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?">\n                    <span class="input-group-btn">\n                        <button class="btn btn-info" type="button">Search</button>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'},751:function(t,e){t.exports='<div class="container d-table">\n    <div class="d-100vh-va-middle">\n        <div class="row">\n            <div class="col-md-8 offset-md-2">\n                <div class="card-group">\n                    <div class="card p-2">\n                        <div class="card-block">\n                            <h1>Login</h1>\n                            <p class="text-muted">Sign In to your account</p>\n                            <div class="input-group mb-1">\n                                <span class="input-group-addon"><i class="icon-user"></i>\n                                </span>\n                                <input type="text" class="form-control" placeholder="Username">\n                            </div>\n                            <div class="input-group mb-2">\n                                <span class="input-group-addon"><i class="icon-lock"></i>\n                                </span>\n                                <input type="password" class="form-control" placeholder="Password">\n                            </div>\n                            <div class="row">\n                                <div class="col-xs-6">\n                                    <button type="button" class="btn btn-primary px-2">Login</button>\n                                </div>\n                                <div class="col-xs-6 text-xs-right">\n                                    <button type="button" class="btn btn-link px-0">Forgot password?</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card card-inverse card-primary py-3 hidden-md-down" style="width:44%">\n                        <div class="card-block text-xs-center">\n                            <div>\n                                <h2>Sign up</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                                <button type="button" class="btn btn-primary active mt-1">Register Now!</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'}});
//# sourceMappingURL=0.e240a4d8b3cc777c13f7.bundle.map