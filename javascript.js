$("#homelink").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#home").offset().top
	}, 1700)
})

$("#aboutlink").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#about").offset().top
	}, 1300)
})

$("#activitieslink").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#activities").offset().top
	}, 1300)
})

$("#pressmedialink").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#pressmedia").offset().top
	}, 1700)
})

$("#contactlink").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#contact").offset().top
	}, 1700)
})

$(".quote > .btn").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("#activities").offset().top
	}, 1300)
})