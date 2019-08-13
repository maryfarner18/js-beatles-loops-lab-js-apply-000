// add solution here

//concetenates the musician and the instrument and stores
//in new array
function theBeatlesPlay(musicians, instruments) {
  var phrases = []
  var size = musicians.length()
  
  for(var i=0; i<size; i++) {
    phrases[i] = musicians[i] + " plays " + instruments[i]
    
  }
  
  return phrases

}


