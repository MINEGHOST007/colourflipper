/*var colorcode1 = document.getElementById('inp');
let colors=[];
const clickk = document.getElementById("click11");
const colorrr= document.querySelector(".colorcode");
let i=0;
document.querySelector('form.add').addEventListener('submit',function(x){
    console.log(colorcode1.value);
    colors[i]=colorcode1.value;
    if(colors[i]!=0)
    i++;


});


//const clickk = document.getElementById("click11");
//const colorrr= document.querySelector(".colorcode");



const randomcolour=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
clickk.addEventListener('click',function(){
    let rc="#";
   
    for(let j=0;j<6;j++){
    rc=rc+randomcolour[getRandomNumber()];
    }
    document.body.style.backgroundColor = rc;
    colorrr.textContent=rc;
    console.log(document.body);

});

function getRandomNumber(){
    return Math.ceil(Math.random()*14);
    
}
var currentTab=0;
showTab(currentTab);

function showTab(n){
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      const click1 = document.getElementById("nextBtn");
      click1.addEventListener('click',function nextPrev(n){
        var x= document.getElementsByClassName("tab");
        x[currentTab].style.display="none";
        currentTab = currentTab+1;
        if(currentTab>=x.length)
        {
            document.getElementById("regForm").submit();
        }
        showTab(currentTab);
    });
}
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  currentTab += 1;
  
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  
  showTab(currentTab);
}

document.getElementById("nextBtn").addEventListener('click', function() { nextPrev(1); });
document.getElementById("prevBtn").addEventListener('click', function() { nextPrev(-1); });
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  currentTab += n;
  
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  
  showTab(currentTab);
}

document.getElementById("nextBtn").addEventListener('click', function() { nextPrev(1); });
document.getElementById("prevBtn").addEventListener('click', function() { nextPrev(-1); });*/

/*document.querySelector('form.submit').addEventListener('submit',function(x){
    console.log(colorcode1.value);
    colors[i]=colorcode1.value;
    if(colors[i]!=0)
    i++;


});*/
function handleSubmit() {
const divisionsInput = document.getElementById("divisions");
const effectsInput = document.getElementById("effects");
document.getElementsByClassName('tab-content')[0].style.display='none';
document.getElementsByClassName('aftersubmit')[0].style.display='block';
const clickk = document.getElementById("click11");
const colorrr= document.querySelector(".colorcode");
var rc=["#","#","#","#"];

const randomcolour=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
clickk.addEventListener('click',function(){
     rc=["#","#","#","#"];
   
    for(let j=0;j<6;j++){
    rc[0]=rc[0]+randomcolour[getRandomNumber()];
    rc[1]=rc[1]+randomcolour[getRandomNumber()];
    rc[2]=rc[2]+randomcolour[getRandomNumber()];
    rc[3]=rc[3]+randomcolour[getRandomNumber()];
    }
    switch(divisionsInput.value){
        case '4':document.getElementById('4').style.backgroundColor = rc[3];
        case '3':document.getElementById('3').style.backgroundColor = rc[2];
        case '2':document.getElementById('2').style.backgroundColor = rc[1];
        case '1':document.getElementById('1').style.backgroundColor = rc[0];break;
        default :
        document.getElementById('4').style.backgroundColor = rc[3];
        document.getElementById('3').style.backgroundColor = rc[2];
        document.getElementById('2').style.backgroundColor = rc[1];
        document.getElementById('1').style.backgroundColor = rc[0];
    }
    switch(divisionsInput.value){
        case '1':document.getElementById('2').style.display='none';rc[1]="none";
        case '2':document.getElementById('3').style.display='none';rc[2]="none";
        case '3':document.getElementById('4').style.display='none';rc[3]="none";
        case '4':break;
        }
document.getElementById('4').style.flexBasis = `${80/divisionsInput.value}vw`;
document.getElementById('3').style.flexBasis = `${80/divisionsInput.value}vw`;
document.getElementById('2').style.flexBasis = `${80/divisionsInput.value}vw`;
document.getElementById('1').style.flexBasis = `${80/divisionsInput.value}vw`;

/*document.getElementById('4').addEventListener("mouseover",t4.textContent= rc[3]);
document.getElementById('3').addEventListener("mouseover",t3.textContent= rc[2]);
document.getElementById('2').addEventListener("mouseover",t2.textContent= rc[1]);
document.getElementById('1').addEventListener("mouseover",t1.textContent= rc[0]);*/
document.getElementById('4').addEventListener("mouseenter", function() {
    t4.textContent = rc[3];
  });
  
  document.getElementById('3').addEventListener("mouseenter", function() {
    t3.textContent = rc[2];
  });
  
  document.getElementById('2').addEventListener("mouseenter", function() {
    t2.textContent = rc[1];
  });
  
  document.getElementById('1').addEventListener("mouseenter", function() {
    t1.textContent = rc[0];
  });
  document.getElementById('4').addEventListener("mouseleave", function() {
    t4.textContent = "";
  });
  
  document.getElementById('3').addEventListener("mouseleave", function() {
    t3.textContent = "";
  });
  
  document.getElementById('2').addEventListener("mouseleave", function() {
    t2.textContent = "";
  });
  
  document.getElementById('1').addEventListener("mouseleave", function() {
    t1.textContent = "";
  });



    colorrr.textContent="  1. "+rc[0]+" \n  2. "+rc[1] +"  3. "+ rc[2] +"  4. "+ rc[3];
});


function getRandomNumber(){
    return Math.ceil(Math.random()*14);
    
}
/*if (effectsInput.value == 1) {
  console.log("fade");
  document.documentElement.style.setProperty('--rc0', rc[0]);
  document.documentElement.style.setProperty('--rc1', rc[1]);
  document.documentElement.style.setProperty('--rc2', rc[2]);
  document.documentElement.style.setProperty('--rc3', rc[3]);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'fade.css';
  document.head.appendChild(link);
}*/


}

