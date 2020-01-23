$( function() {
    var dialog, form,
 
      fname = $( "#fname" ),
      oname = $( "#oname" ),
      gurdian = $( "#gurdian" ),
      email = $( "#email" ),
      qualify = $( "#qualify" ),
      p_phone = $( "#p_phone" ),
      gurdian_name = $('#gurdian_name')
      gurdian_phone = $('#gurdian_phone')
      tips = $( ".validateTips" );
 
  
 //not using it yet don't remove
    function addUser() {
      console.log('email is  ', gurdian.val())
      dialog.dialog( "close" );

    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 700,
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