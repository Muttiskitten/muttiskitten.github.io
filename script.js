document.querySelectorAll('.info').forEach(function(trigger) {
  trigger.addEventListener('mouseover', function(event) {
    var infoContent = this.getAttribute('data-info');
    document.getElementById('info-content').textContent = infoContent;

    var infoBox = document.querySelector('.info-content');
    infoBox.style.display = 'inline-block';
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
});
const header = document.getElementById('work');

        header.addEventListener('mousedown', function() {
            header.textContent = 'What Would Be Here?'; 
        });

        header.addEventListener('mouseup', function() {
            header.textContent = 'Work Experience';
        });
