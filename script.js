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
function addTextChangeListener(elementId, initialText, changedText) {
    const element = document.getElementById(elementId);

    element.addEventListener('mousedown', function() {
        element.textContent = changedText;
    });

    element.addEventListener('mouseup', function() {
        element.textContent = initialText;
    });
}
addTextChangeListener('work', 'Work Experience', 'What Would Be Here?');
addTextChangeListener('education', 'Education', 'What Did You Learn?');
addTextChangeListener('skills', 'Skills', 'What Can You Do?');
