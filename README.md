Chat-Example
============

A simple example using relay.io to create a multi-user chat system.

The code that makes this work is simple:

To create the relay javascript object include the relay client script in your html:
	<script src='http://relay.io/client/24F56247-28A0-49E7-B92C-7999A94AE525.js' type='text/javascript'></script>

Next, create the relay object within your javascript file, passing in your insert key:
	var relay = new RelayClient("175520A5-AEFA-4FC9-B2AD-DBA4069984A5");


To use the relay object to insert a message:
	var insertMessage = function(messagejson){
  	relay.insert("506BFFD6-AAC0-4616-9EB3-6A43CBD8C042", messagejson);
  	$('#comment').val('');
	};


To use the relay object to render incoming messages:
	relay.getUpdates(function(item){
		//Put your code here to insert your item into the DOM
		incomingMessage(item);
	});
