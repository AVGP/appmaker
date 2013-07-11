function update() {
  var btn = document.getElementById('installButton');
  if(install.state == 'uninstalled')
    btn.style.display = 'block'
  else if(install.state == 'installed' || install.state == 'unsupported')
    btn.style.display = 'none'
}

function init() {
  var btn = document.getElementById('installButton');
  btn.addEventListener('click', function() {
    åinstall()
  })

  install.on('change', update)

  install.on('error', function(e, err) {
    // Feel free to customize this
    alert('There was an error during installation.')
  });

  install.on('showiOSInstall', function() {
    // Feel free to customize this
    alert('To install, press the forward arrow in Safari ' +
      'and touch "Add to Home Screen"')
  })
}

if(!document.getElementById('installButton'))
  document.addEventListener('DOMContentLoaded', init)
else
  init()

