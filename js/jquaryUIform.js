$( function() {
    var dialog, form,
 
      fname = $( "#fname" ),
      oname = $( "#oname" ),
      email = $( "#email" ),
      qualify = $( "#qualify" ),
      tips = $( ".validateTips" );
 
  
 //not using it yet don't remove
    function addUser() {
      console.log('email is  ', fname.val())
      dialog.dialog( "close" );

    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 500,
      width: 500,
      modal: true,
      buttons: {
      "Apply": addUser,
      Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
     

    });
 
    $( "#create-user" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });
  } );
 


  new Vue({
    el:'#vueapp',
    data:{
      name:'Aggrey is the name'
    }
  })