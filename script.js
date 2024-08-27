document.querySelectorAll('.info').forEach(function(trigger) {
  trigger.addEventListener('mouseover', function(event) {
    var infoContent = this.getAttribute('data-info');
    document.getElementById('info-content').textContent = infoContent;

    var infoBox = document.querySelector('.info-content');
    infoBox.style.display = 'block';
  });

  trigger.addEventListener('mousemove', function(event) {
    var infoBox = document.querySelector('.info-content');
    infoBox.style.left = event.clientX + 20 + 'px';
    infoBox.style.top = event.clientY + 20 + 'px';
  });

  trigger.addEventListener('mouseout', function(event) {
    var infoBox = document.querySelector('.info-content');
    infoBox.style.display = 'none';
  });
document.querySelectorAll('.info').forEach(function(trigger) {
  trigger.addEventListener('mouseover', function(event) {
    var infoContent = this.getAttribute('data-info');
    var infoContentArray = infoContent.split('\n'); // Split the content into an array by newline
    var infoContentHTML = '';

    infoContentArray.forEach(function(line) {
      infoContentHTML += '<p>' + line + '</p>'; // Wrap each line in a <p> tag
    });

    document.getElementById('info-content').innerHTML = infoContentHTML;

    var infoBox = document.querySelector('.info-content');
    infoBox.style.left = event.clientX + 20 + 'px';
    infoBox.style.top = event.clientY + 20 + 'px';
    infoBox.style.display = 'block';
  });

  trigger.addEventListener('mouseout', function(event) {
    var infoBox = document.querySelector('.info-content');
    infoBox.style.display = 'none';
  });
});
