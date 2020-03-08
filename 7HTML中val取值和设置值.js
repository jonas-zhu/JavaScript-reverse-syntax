
// 逆向过程中，常看到有代码用val取值和设置值


// 设置对象的值，change：hello nightteam
/*
<html>
<head>
<script type=" text/ javascript" src="/jquery/ jquery. js"></script>
<script type="text/ javascript">
$( document). ready( function( ){
$( "button").click( function( ){
$(" :text").val( "Hello NightTeam" );
});
});
</scr ipt>
</head>
<body>
<p>Name: <input type="text" name="user" value="Hello World" /></p>
<button>改变文本域的值</ button>
</ body>
</html>
*/

// 返回对象的值，output：Bill
/*
<html>
<head>
<script type=" text/ javascript" src="/ jquery/ jquery. js"></script>
<script type="text/ javascript">
$( document ). ready( function( ){
$( "button" ).click( function( ){
alert($( "input:text" ).val( ));
});
});
</ scr ipt>
</head>
<body>
Firstname: <input type="text "
name=" fname" value="Bill" /><br />
Lastname: < input type="text" name=" lname" value="Gates" /><br /><br />
<button>获得第一个文本域的值</ but ton>
</ body>
</html>
*/
