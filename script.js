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

  trigger.addEventListener('mouseout', function(event) {
    var infoBox = document.querySelector('.info-content');
    infoBox.style.display = 'none';
  });

    document.getElementById('info-content').innerHTML = infoContentHTML;

    var infoBox = document.querySelector('.info-content');
    infoBox.style.left = event.clientX + 20 + 'px';
    infoBox.style.top = event.clientY + 20 + 'px';
    infoBox.style.display = 'block';
  });
});
