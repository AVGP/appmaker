var EmailSender = function () {
  
  var message = new Space('to \nsubject \nmessage \n')
  TextPrompt.open('Send an email', message.toString(), function (val) {
    
    var space = new Space(val)
    
    $.post('/nudgepad.email', space.keys, function (result) {
      Flasher.success(result)
    })
  })
}
