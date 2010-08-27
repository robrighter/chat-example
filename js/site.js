var relay = new RelayClient("24757EAC-49D7-4200-B691-8FA7265D8EC7");
var colorList = ['#FFDC48', '#F67F7F', '#FD6BA6', '#67D384', '#B0C9E8'];

var setNameColor = function(color){
     currentcolor = color;
     $('#name').css("background-color", color);   
 };
 
 var grabRandomColor = function(){
     return colorList[Math.floor(Math.random()*colorList.length)];
 };

 var changeColor = function(){
     setNameColor(grabRandomColor());
 };

var formatMessageHtml = function(messagejson){
   if(messagejson.hasOwnProperty('color') && messagejson.hasOwnProperty('name') && messagejson.hasOwnProperty('comment')){
       var t = _.template("<div class='messageitem' style='display : none;'>\
<span class='name' style='color: <%= color %>;'>                            \
<%= name %>:</span>                                                         \
<span class='comment'><%= comment %></span></div>"); 
       return t(messagejson);    
   }
   else {
       return "";
   }
   
};

var insertMessage = function(messagejson){
  relay.insert("8A45C981-F019-46BF-9242-D404D2967894", messagejson);
  $('#comment').val('');
};

var incomingMessage = function(messagejson){
    var toadd = $(formatMessageHtml(messagejson));
    $('#chatfeed').append(toadd);
    toadd.slideDown(200);
    $('#chatfeed').animate({ scrollTop: $('#chatfeed').attr("scrollHeight") }, 200);
};

var packageJsonMessage = function(){
    return {   color : currentcolor
             , name : $('#name').val() + " (" + BrowserDetect.browser + " " + BrowserDetect.version + " / " + BrowserDetect.OS + ")"
             , comment : $('#comment').val() 
           };
};

var currentcolor = grabRandomColor();

 
