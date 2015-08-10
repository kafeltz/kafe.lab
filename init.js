$(function()
{
	$("#btn-double-click").preventDoubleClick();
	$("[data-prevent-double-click]").preventDoubleClick();

	$("#cep").cepBehavior({debug: true});

	$("[data-select-on-click]").selectOnClickBehavior();

	$("[data-date-mask]").dateMask();
	$("[data-time-mask]").timeMask();

	$("[data-money-behavior]").moneyBehavior();
	$("#money").mask("#.##0,00", {reverse: true});
	$("#money2").mask('000.000.000.000.000,00', {reverse: true});

});