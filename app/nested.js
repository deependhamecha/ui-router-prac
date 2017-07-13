var myApp = angular.module('nestedApp', ['ui.router']);

myApp.config(function($stateProvider) {

  // $stateProvider
  //   // .state('main', {
  //   //   template: ` <div ui-view="posts" class="grid"></div>
  //   //               <div ui-view="chats" class="grid"></div>
  //   //               <div ui-view="settings" class="grid"></div>`
  //   // })

  //   .state('main', {
  //     url: '',
  //     views: {
  //       'posts@main' : {
  //         template : 'My Posts'
  //       },
  //       'chats@main' : {
  //         template : 'My Chats'
  //       },
  //       'settings@main' : {
  //         template : 'My Settings'
  //       }
  //     }
  //   });

  $stateProvider
    .state('index', {
      // abstract: true,
      url: '/index',
      views: {
        '' : {
          tempateUrl: '../dude/default.html'
        },
        'posts@index': {
          templateUrl: '../dude/posts.html'
        },
        'chats@index': {
          templateUrl: '../dude/chats.html'
        },
        'settings@index': {
          templateUrl: '../dude/settings.html'
        }
      }
    });
    // .state('contacts.detail', {
    //   views: {
    //       ////////////////////////////////////    
    //       // Relative Targeting             //    
    //       // Targets parent state ui-view's //    
    //       ////////////////////////////////////    
      
    //       // Relatively targets the 'detail' view in this state's parent state, 'contacts'.   
    //       // <div ui-view='detail'/> within contacts.html   
    //       "detail" : { 
    //         template: 'Detail'
    //       },
      
    //       // Relatively targets the unnamed view in this state's parent state, 'contacts'.    
    //       // <div ui-view/> within contacts.html    
    //       // "" : { 
    //       //   template: 'None'
    //       // }
      
    //       ///////////////////////////////////////////////////////   
    //       // Absolute Targeting using '@'                      //   
    //       // Targets any view within this state or an ancestor //   
    //       ///////////////////////////////////////////////////////   
      
    //       // Absolutely targets the 'info' view in this state, 'contacts.detail'.   
    //       // <div ui-view='info'/> within contacts.detail.html    
    //       // "info@contacts.detail" : { 
    //       //   template: 'Info@Contacts.Detail'
    //       // }    
      
    //       // // Absolutely targets the 'detail' view in the 'contacts' state.    
    //       // // <div ui-view='detail'/> within contacts.html   
    //       // "detail@contacts" : { 
    //       //   template: 'Detail@Contacts'
    //       // }   
      
    //       // // Absolutely targets the unnamed view in parent 'contacts' state.    
    //       // // <div ui-view/> within contacts.html    
    //       // "@contacts" : {
    //       //   template: 'None of contacts'
    //       // }   
      
    //       // // absolutely targets the 'status' view in root unnamed state.    
    //       // // <div ui-view='status'/> within index.html    
    //       // "status@" : {
    //       //   template: 'Status'
    //       // }
      
    //       // // absolutely targets the unnamed view in root unnamed state.   
    //       // // <div ui-view/> within index.html   
    //       // "@" : { 
    //       //   template: 'DEFAULT'
    //       // }
    //     }
    //   });
});

