
/**
var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent, $1 ) {
  alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    event.target === $1;
    event.firstChild.parentNode.style.display = "background-color: rgba(0,0,0,0.2), color:red outline: 9999px solid rgba(0,0,0,0.5)";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );

**/