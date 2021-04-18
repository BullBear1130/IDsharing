class driverformat {
  constructor(name,ranking,success_rate) {
    this.name=name
    this.ranking=ranking
    this.success_rate=success_rate
  }
  get success_rate(){
    return this.success_rate;
  }
  set success_rate(value){
    value < 0 ? 0 : value;
    vlaue > 100 ? 100 : value;
    this.success_rate = value
  }
}
/*getter,setter는 항상 함께 쓰여야 한다.
=는 그냥 primitive type 값을 복사하지만
getter로 reference를 따와서 setter로 값을 바꾸면
복사한 변수의 값을 바꾸는 것이 아닌
reference로 들어가 원초적인 값을 바꿀 수 있음
*/
const validate = function() {
  //mailformat regular expression
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const globaldriver = new driverformat (document.getElementById('email').value, 1, 0);
  if(globaldriver.name.match(mailformat)){
  return true;
  }
    else {
      alert("You have entered an invalid email address!");
      return false;
    }
}
