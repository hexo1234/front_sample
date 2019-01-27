// id값 활용

window.addEventListener("load",function(){


var txtX =document.getElementById("txt-x");
var txtY =document.getElementById("txt-y");
var btnAdd =document.getElementById("btn-add");
var txtSum =document.getElementById("txt-sum");


// 입력값 초기화
txtX.onfocus = function(){
  this.value = "";
}
txtY.onfocus = function(){
  this.value = "";
}


// // 덧셈 결과
btnAdd.onclick = function(){
  var x = parseInt(txtX.value);
  var y = parseInt(txtY.value);
  
  txtSum.value = x+y;
};

});



// 배열 사용


window.addEventListener("load",function(){

var section2 = document.getElementById("section2");
var inputs = section2.getElementsByTagName("input");

var txtX = inputs[0];
var txtY = inputs[1];
var btnAdd = inputs[2];
var txtSum = inputs[3];

btnAdd.onclick=function(){
  var x = parseInt(txtX.value);
  var y = parseInt(txtY.value);
  
  txtSum.value = x+y;

};

});


// 엘리먼트 선택 방법 개선
window.addEventListener("load",function(){

  var section3 = document.getElementById("section3");
    
  var txtX = section3.getElementsByClassName("txt-x")[0];
  var txtY = section3.getElementsByClassName("txt-y")[0];
  var btnAdd = section3.getElementsByClassName("btn-add")[0];
  var txtSum = section3.getElementsByClassName("txt-sum")[0];
  
  btnAdd.onclick=function(){
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);
    
    txtSum.value = x+y;
  
  };
  
  
  });
 

  // 쿼리 셀렉터 활용
  window.addEventListener("load",function(){

    var section4 = document.querySelector("#section4");
      
    var txtX = section4.querySelector(".txt-x");
    var txtY = section4.querySelector(".txt-y");
    var btnAdd = section4.querySelector(".btn-add");
    var txtSum = section4.querySelector(".txt-sum");
    
    btnAdd.onclick=function(){
      var x = parseInt(txtX.value);
      var y = parseInt(txtY.value);
      
      txtSum.value = x+y;
    
    };
    
    
    });
    

//childNodes를 이용한 노드 선택
    window.onload = function(){


    var section5 = document.querySelector("#section5");
    var box = section5.querySelector(".box");

    // var input1 = box.childNodes[0]; 빈 공백도 #text 라는 노드로 인식한 개체로 들어감,주석도 마찬가지
    // var input2 = box.childNodes[1];

    var input1 = box.children[0]; 
    var input2 = box.children[1];

    // 그러므로 태그만 선택시 아래와 같이 사용



    input1.value="hello";
    input2.value="ok";

    };