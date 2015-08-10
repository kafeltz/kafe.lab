<!DOCTYPE html>
<html>
<head>
	<title></title>

	<script type="text/javascript" src="/bower_components/jquery/dist/jquery.js"></script>
	<script type="text/javascript" src="jquery.mask.js"></script>
	<script type="text/javascript" src="cep-behavior.js"></script>
	<script type="text/javascript" src="prevent-double-click.js"></script>
	<script type="text/javascript" src="select-on-click.js"></script>
	<script type="text/javascript" src="date-mask.js"></script>
	<script type="text/javascript" src="time-mask.js"></script>
	<script type="text/javascript" src="money.js"></script>
	<script type="text/javascript" src="init.js"></script>
</head>

<body>

<h2>Double click prevent</h2>
<input type="button" id="btn-double-click" value="Click me twice!">
<input type="button" data-prevent-double-click value="Prevent by data-attribute">

<h2>Cep</h2>
<input type="text" id="cep" placeholder="99988-77">

<h2>Select text</h2>
<input id="select_text_input" type="text" value="Some value" data-select-on-click>
<br>
<textarea id="select_text_textarea" cols="30" rows="10" data-select-on-click>
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

<h2>Date</h2>
<input type="text" id="date" placeholder="dd/mm/yyyy" data-date-mask>
<h2>Time</h2>
<input type="text" id="time" placeholder="00:00" data-time-mask>

<h2>Money</h2>
<input type="text" id="" value="0,00" data-select-on-focus placeholder="0,00" data-money-behavior>


</body>
</html>