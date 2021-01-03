function isTouching(object1,object2){

    var xcenter , ycenter;
    xcenter = object2.width/2 + object1.width/2;
    ycenter = object2.height/2 + object1.height/2;
  
    if(object1.x - object2.x < xcenter && object2.x - object1.x < xcenter && 
      object1.y - object2.y < ycenter && object2.y - object1.y < ycenter){
      return true
      
    }else {
      return false
    }
  }