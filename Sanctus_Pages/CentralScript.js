//In: Desired URL
//Purpose: Change the Central Iframe to be a new page
//Out: None
function NewCentre(url)
{
	var iframe = document.getElementById("central_frame");
	iframe.src = url;
}