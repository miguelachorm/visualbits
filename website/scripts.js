// JavaScript Document

var imageCount = 1;
var total = 4;
	
function slide(x) {
		var Image = document.getElementById("imag");
		imageCount = imageCount + x;
		if (imageCount > total){imageCount = 1;}
		if (imageCount < 1){imageCount = total;}
		Image.src="images/img"+imageCount+".jpg";
}
window.setInterval(function sliderA(x) {
		var Image = document.getElementById("imag");
		imageCount = imageCount + 1;
		if (imageCount > total){imageCount = 1;}
		Image.src="images/img"+imageCount+".jpg";
}		,5000);

// Now Coding the Accordion
var ContentHeight = 200;
var TimeToSlide = 250.0;

var openAccordion = '';

function runAccordion(index)
{
  var nID = "Accordion" + index + "Content";
  if(openAccordion == nID)
    nID = '';

  setTimeout("animate(" + new Date().getTime() + "," + TimeToSlide + ",'" + openAccordion + "','" + nID + "')", 33);

  openAccordion = nID;
}

function animate(lastTick, timeLeft, closingId, openingId)
{  
  var curTick = new Date().getTime();
  var elapsedTicks = curTick - lastTick;

  var opening = (openingId == '') ? null : document.getElementById(openingId);
  var closing = (closingId == '') ? null : document.getElementById(closingId);

  if(timeLeft <= elapsedTicks)
  {
    if(opening != null)
      opening.style.height = ContentHeight + 'px';

    if(closing != null)
    {
      closing.style.display = 'none';
      closing.style.height = '0px';
    }
    return;
  }

  timeLeft -= elapsedTicks;
  var newClosedHeight = Math.round((timeLeft/TimeToSlide) * ContentHeight);

  if(opening != null)
  {
    if(opening.style.display != 'block')
      opening.style.display = 'block';
    opening.style.height = (ContentHeight - newClosedHeight) + 'px';
  }

  if(closing != null)
    closing.style.height = newClosedHeight + 'px';

  setTimeout("animate(" + curTick + "," + timeLeft + ",'" 
      + closingId + "','" + openingId + "')", 33);
}