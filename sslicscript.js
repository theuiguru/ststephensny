//St. Stephen's Long Island JavaScript
function show_div(div_id) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('orgs').style.display = 'none';
  document.getElementById('admin').style.display = 'none';
  document.getElementById('choir').style.display = 'none';
  document.getElementById('mms').style.display = 'none';
  document.getElementById('mgocsm').style.display = 'none';
  document.getElementById('sls').style.display = 'none';
  document.getElementById('ss').style.display = 'none';
  document.getElementById('yas').style.display = 'none';
  document.getElementById('media').style.display = 'none';
  document.getElementById('links').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById(div_id).style.display = 'block';
}
window.status = "St. Stephen's Orthodox Church of India, Long Island, NY";

$(function() { $(".slideshow > img:gt(0)").hide();
  setInterval(function() { $('.slideshow > img:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.slideshow'); }, 3000); });

function noclick(e) {
  var message="Unauthorized reproduction is prohibited. All content is legally owned by the St. Stephen's Orthodox Church of India, Long Island, NY, Inc.";
  if (document.all) {
    if (event.button==2||event.button==3) {
      alert(message);
      return false;
    }
  } else if (document.layers||document.getElementById) {
    if (e.which == 3) {
      alert(message);
      return false;
    }
  }
} if (document.layers) { document.captureEvents(Event.MOUSEDOWN); }
document.onmousedown=noclick;