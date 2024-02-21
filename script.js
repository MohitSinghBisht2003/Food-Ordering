// const fadeOut=()=>{
//   const loader=document.querySelector(".preloader");
//   loader.classList.remove("preloader");
// }
// window.addEventListener("load",fadeOut);


let val1=document.getElementById("q1").innerText;
let val2=document.getElementById("q2").innerText;
let val3=document.getElementById("q3").innerText;
let val4=document.getElementById("q4").innerText;
let val5=document.getElementById("q5").innerText;
let val6=document.getElementById("q6").innerText;
let val7=document.getElementById("q7").innerText;
let val8=document.getElementById("q8").innerText;
let val9=document.getElementById("q9").innerText;
let val10=document.getElementById("q10").innerText;
let val11=document.getElementById("q11").innerText;
let val12=document.getElementById("q12").innerText;
let val13=document.getElementById("q13").innerText;
let val14=document.getElementById("q14").innerText;

     let plus1=document.querySelector("#plus1");
  let minus1=document.querySelector("#minus1");  
  minus1.onclick=()=>{
  if(val1>0){
          val1--;
         document.getElementById("q1").innerHTML=val1;
            if(val1==0 && val2==0 && val3==0 && val4==0 && 
            val5==0 && val6==0 && val7==0 && val8==0
            && val9==0 && val10==0 && val11==0 && val12==0
            && val13==0 && val14==0){
            document.querySelector("#addtocart").style.opacity="0";
            }
      }
    }
      plus1.onclick=()=>{
        val1++;
        document.getElementById("q1").innerHTML=val1;
        document.querySelector("#addtocart").style.opacity="1";
}
    
// <!--for food2->
    let plus2=document.querySelector("#plus2");
  let minus2=document.querySelector("#minus2");  
  minus2.onclick=()=>{
  if(val2>0){
          val2--;
         document.getElementById("q2").innerHTML=val2;
            if(val1==0 && val2==0 && val3==0 && val4==0 && 
            val5==0 && val6==0 && val7==0 && val8==0
            && val9==0 && val10==0 && val11==0 && val12==0
            && val13==0 && val14==0){
            document.querySelector("#addtocart").style.opacity="0";
            }
      }
    }
      plus2.onclick=()=>{
        ++val2;
        document.getElementById("q2").innerHTML=val2;
        document.querySelector("#addtocart").style.opacity="1";
}

//<---- for food3----->

let plus3=document.querySelector("#plus3");
  let minus3=document.querySelector("#minus3");  
  minus3.onclick=()=>{
  if(val3>0){
          val3--;
         document.getElementById("q3").innerHTML=val3;
            if(val1==0 && val2==0 && val3==0 && val4==0 && 
            val5==0 && val6==0 && val7==0 && val8==0
            && val9==0 && val10==0 && val11==0 && val12==0
            && val13==0 && val14==0){
            document.querySelector("#addtocart").style.opacity="0";
            }
      }
    }
      plus3.onclick=()=>{
        ++val3;
        document.getElementById("q3").innerHTML=val3;
        document.querySelector("#addtocart").style.opacity="1";
}
//<---for food4---->

    let plus4=document.querySelector("#plus4");
  let minus4=document.querySelector("#minus4");  
  minus4.onclick=()=>{
  if(val4>0){
          val4--;
         document.getElementById("q4").innerHTML=val4;
            if(val1==0 && val2==0 && val3==0 && val4==0 && 
            val5==0 && val6==0 && val7==0 && val8==0
            && val9==0 && val10==0 && val11==0 && val12==0
            && val13==0 && val14==0){
            document.querySelector("#addtocart").style.opacity="0";
            }
      }
    }
      plus4.onclick=()=>{
        ++val4;
        document.getElementById("q4").innerHTML=val4;
        document.querySelector("#addtocart").style.opacity="1";
}

//<--------for food5---->
let plus5=document.querySelector("#plus5");
let minus5=document.querySelector("#minus5");  
minus5.onclick=()=>{
if(val5>0){
        val5--;
       document.getElementById("q5").innerHTML=val5;
          if(val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val9==0 && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus5.onclick=()=>{
      ++val5;
      document.getElementById("q5").innerHTML=val5;
      document.querySelector("#addtocart").style.opacity="1";
}

//<----for food6--->

let plus6=document.querySelector("#plus6");
let minus6=document.querySelector("#minus6");  
minus6.onclick=()=>{
if(val6>0){
        val6--;
       document.getElementById("q6").innerHTML=val6;
          if(val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val9==0 && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus6.onclick=()=>{
      ++val6;
      document.getElementById("q6").innerHTML=val6;
      document.querySelector("#addtocart").style.opacity="1";
}


//for food7--->
let plus7=document.querySelector("#plus7");
let minus7=document.querySelector("#minus7");  
minus7.onclick=()=>{
if(val7>0){
        val7--;
       document.getElementById("q7").innerHTML=val7;
          if(val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val9==0 && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus7.onclick=()=>{
      ++val7;
      document.getElementById("q7").innerHTML=val7;
      document.querySelector("#addtocart").style.opacity="1";
}
//<---for food8---->
let plus8=document.querySelector("#plus8");
let minus8=document.querySelector("#minus8");  
minus8.onclick=()=>{
if(val8>0){
        val8--;
       document.getElementById("q8").innerHTML=val8;
          if(val8==0 && val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 
          && val9==0 && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus8.onclick=()=>{
      ++val8;
      document.getElementById("q8").innerHTML=val8;
      document.querySelector("#addtocart").style.opacity="1";
}

//<---for food9---->
let plus9=document.querySelector("#plus9");
let minus9=document.querySelector("#minus9");  
minus9.onclick=()=>{
if(val9>0){
        val9--;
       document.getElementById("q9").innerHTML=val9;
          if(val9==0 && val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus9.onclick=()=>{
      ++val9;
      document.getElementById("q9").innerHTML=val9;
      document.querySelector("#addtocart").style.opacity="1";
}

//<----for loop10--->
let plus10=document.querySelector("#plus10");
let minus10=document.querySelector("#minus10");  
minus10.onclick=()=>{
if(val10>0){
        val10--;
       document.getElementById("q10").innerHTML=val10;
          if(val9==0 && val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus10.onclick=()=>{
      ++val10;
      document.getElementById("q10").innerHTML=val10;
      document.querySelector("#addtocart").style.opacity="1";
}

//<---for loop11---->
let plus11=document.querySelector("#plus11");
let minus11=document.querySelector("#minus11");  
minus11.onclick=()=>{
if(val11>0){
        val11--;
       document.getElementById("q11").innerHTML=val11;
          if(val9==0 && val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus11.onclick=()=>{
      ++val11;
      document.getElementById("q11").innerHTML=val11;
      document.querySelector("#addtocart").style.opacity="1";
}

//<---for loop12---->
let plus12=document.querySelector("#plus12");
let minus12=document.querySelector("#minus12");  
minus12.onclick=()=>{
if(val12>0){
        val12--;
       document.getElementById("q12").innerHTML=val12;
          if(val9==0 && val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus12.onclick=()=>{
      ++val12;
      document.getElementById("q12").innerHTML=val12;
      document.querySelector("#addtocart").style.opacity="1";
}

//<---for loop13---->
let plus13=document.querySelector("#plus13");
let minus13=document.querySelector("#minus13");  
minus13.onclick=()=>{
if(val13>0){
        val13--;
       document.getElementById("q13").innerHTML=val13;
          if(val9==0 && val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus13.onclick=()=>{
      ++val13;
      document.getElementById("q13").innerHTML=val13;
      document.querySelector("#addtocart").style.opacity="1";
}

//<---for loop14---->
let plus14=document.querySelector("#plus14");
let minus14=document.querySelector("#minus14");  
minus14.onclick=()=>{
if(val14>0){
        val14--;
       document.getElementById("q14").innerHTML=val14;
          if(val9==0 && val1==0 && val2==0 && val3==0 && val4==0 && 
          val5==0 && val6==0 && val7==0 && val8==0
          && val10==0 && val11==0 && val12==0
          && val13==0 && val14==0){
          document.querySelector("#addtocart").style.opacity="0";
          }
    }
  }
    plus14.onclick=()=>{
      ++val14;
      document.getElementById("q14").innerHTML=val14;
      document.querySelector("#addtocart").style.opacity="1";
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('feedback-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Here you can add code to send the feedback message to your backend for processing
      // For now, let's just display a success message
      document.getElementById('success-message').style.display = 'block';

      // Reset the form fields (optional)
      document.getElementById('feedback-form').reset();
  });
});