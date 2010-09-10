Chat-Example
============

A simple example using relay.io to create a multi-user chat system.

The code that makes this work is simple:

To create the relay javascript object include the relay client script in your html:
	<script src='http://api.relay.io/client/24757EAC-49D7-4200-B691-8FA7265D8EC7.js' type='text/javascript'></script>

Next, create the relay object within your javascript file, passing in your relay id:
	var relay = new RelayClient("24757EAC-49D7-4200-B691-8FA7265D8EC7");


To use the relay object to insert a message, call the insert function on the relay object, passing in the relay's insert key and the json object that you wish to insert into the relay:
	var insertMessage = function(messagejson){
  	relay.insert("8A45C981-F019-46BF-9242-D404D2967894", messagejson);
  	$('#comment').val('');
	};


To use the relay object to render incoming messages:
	relay.getUpdates(function(item){
		//Put your code here to insert your item into the DOM
		incomingMessage(item);
	});
