function LoginController(loginService){var self=this;self.email="",self.password=""}function LoginService($http,utils){var contacts=$http.get("").then(function(resp){return resp.data.contacts}),factory={};return factory.all=function(){return contacts},factory.get=function(id){return contacts.then(function(){return utils.findById(contacts,id)})},factory}function FooterController(){}function NavigationController(){}function UtilsService(){return{findById:function(a,id){for(var i=0;i<a.length;i++)if(a[i].id==id)return a[i];return null}}}var app=angular.module("main",["ngMaterial","ngMessages"]);angular.module("main").component("login",{templateUrl:"src/app/components/login/login.template.html",controller:LoginController}),LoginController.$inject=["login.service"],angular.module("main").factory("login.service",LoginService),LoginService.$inject=["$http","utils.service"],angular.module("main").component("bottomNav",{templateUrl:"src/app/components/common/footer.template.html",controller:FooterController}),FooterController.$inject=[],angular.module("main").component("topNav",{templateUrl:"src/app/components/common/header.template.html"}),NavigationController.$inject=[],angular.module("main").factory("utils.service",UtilsService),UtilsService.$inject=[];
//# sourceMappingURL=bundle.js.map
