var maindiv=document.createElement("div");
maindiv.style.backgroundColor="rgb(238,240,236)";
maindiv.style.height="100%"
var rowdiv=document.createElement("div");
rowdiv.style.display="flex"
rowdiv.style.flexDirection="row"

var coldiv1=document.createElement("div");
coldiv1.style.display="flex"
coldiv1.style.flexDirection="column"
coldiv1.style.width="35%"
coldiv1.style.marginLeft="3%"
coldiv1.innerHTML="<h1>Form<br>Submission</h1>"
var form=document.createElement("form");
form.setAttribute('onsubmit','clockHandler(event)')
var lable=creatlable("lable","for","name1","First Name :");
var br=document.createElement('br');
var input=creatinput("input","type","text","id","name1","First name");
var br1=document.createElement('br');
var lable1=creatlable("lable","for","name2","Last Name :");
var br2=document.createElement('br');
var input2=creatinput("input","type","text","id","name2","Last name");
var br3=document.createElement('br');
var address1=creatlable("lable","for","address","Address :");
var br4=document.createElement('br');
var address2=creatinput("input","type","text","id","address","Address");

var br5=document.createElement('br');
var pin=creatlable("lable","for","pin","PIN :");
var br6=document.createElement('br');
var pininput=creatinput("input","type","number","id","pin","PIN");
var br7=document.createElement('br');
var gender=creatlable("lable","for","gender","Gender :");
var br8=document.createElement('br');
var maleradio= creatradio("input","type","radio","id","male","value","male","name","gender");
var male=creatlable("lable","for","male","Male")
var femaleradio= creatradio("input","type","radio","id","female","value","female","name","gender");
var female=creatlable("lable","for","female","female")
var foodchoice =document.createElement('p');
foodchoice.innerHTML="Choice of food :<i> (must choose 2 out of <br> 5 options)</i>"
var checkbox1=creatcheckbox('input','type','checkbox',"id","checkbox1",'name','checkbox','value','Dhosa');
var Dhosa = creatlable('lable','for','checkbox1','Dhosa');
var br9=document.createElement('br');
var checkbox2=creatcheckbox('input','type','checkbox',"id","checkbox2",'name','checkbox','value','Beriyani');
var Beriyani = creatlable('lable','for','checkbox2','Beriyani');
var br10=document.createElement('br');
var checkbox3=creatcheckbox('input','type','checkbox',"id","checkbox3",'name','checkbox','value','Sambar satham');
var Sambar = creatlable('lable','for','checkbox3','Sambar satham');
var br11=document.createElement('br');
var checkbox4=creatcheckbox('input','type','checkbox',"id","checkbox4",'name','checkbox','value','Pulisatham');
var Pulisatham = creatlable('lable','for','checkbox4','Pulisatham');
var br12=document.createElement('br');
var checkbox5=creatcheckbox('input','type','checkbox',"id","checkbox5",'name','checkbox','value','Venpogal');
var Venpongal = creatlable('lable','for','checkbox5','Venpogal');
var br13=document.createElement('br');
var state=creatlable('lable','for','state','State');
var br14=document.createElement('br');
var input3=creatinput('input','type','text','id','state','State');
var br15=document.createElement('br');
var country=creatlable('lable','for','country','Country');
var br16=document.createElement('br');
var input4=creatinput('input','type','text','id','country','country');
var br17=document.createElement('br')
var submit = document.createElement('button')
submit.innerHTML="<b>Submit</b>"
submit.style.background="#00CEF9"
submit.style.height='35px'
submit.style.width="30%"
submit.style.color="#fff"
submit.style.borderRadius = "10px"
submit.style.border="0px"

submit.setAttribute('type','submit')
submit.setAttribute('id','btnclick')









form.append(lable,br,input,br1,lable1,br2,input2,br3,address1,br4,address2,br5,pin,br6,pininput);
form.append(br7,gender,br8,maleradio,male,femaleradio,female,foodchoice,checkbox1,Dhosa)
form.append(br9,checkbox2,Beriyani,br10,checkbox3,Sambar,br11,checkbox4,Pulisatham,br12,checkbox5,Venpongal)
form.append(br13,state,br14,input3,br15,country,br16,input4,br17,submit)


var coldiv2=document.createElement("div");
coldiv2.style.display="flex"
coldiv2.style.flexDirection="column"
coldiv2.style.width="65%"
coldiv2.innerHTML="<h1><b>Temporary Database</b></h1>"
var br18=document.createElement("br");
var table1=document.createElement("table");


var tr1=document.createElement("tr");
tr1.style.color="#fff"
tr1.style.height="10%"
tr1.style.backgroundColor="rgb(52,58,64)"
var td1=document.createElement("td");
td1.innerHTML="First Name"
var td2=document.createElement("td");
td2.innerHTML="Last name"
var td3=document.createElement("td");
td3.innerHTML="Address"
var td4=document.createElement("td");
td4.innerHTML="PIN"
var td5=document.createElement("td");
td5.innerHTML="Gender"
var td6=document.createElement("td");
td6.innerHTML="Food"
var td7=document.createElement("td");
td7.innerHTML="State"
var td8=document.createElement("td");
td8.innerHTML="Contry";

var tr2=document.createElement("tr")
tr2.style.backgroundColor="!importent #fff"

var td01=document.createElement("td")
var td02=document.createElement("td")
var td03=document.createElement("td")
var td04=document.createElement("td")
var td05=document.createElement("td")
var td06=document.createElement("td")
var td07=document.createElement("td")
var td08=document.createElement("td")





tr2.append(td01,td02,td03,td04,td05,td06,td07,td08)

tr1.append(td1,td2,td3,td4,td5,td6,td7,td8)
table1.append(tr1,tr2)
coldiv2.append(table1)
coldiv1.append(form);
rowdiv.appendChild(coldiv1)
rowdiv.appendChild(coldiv2)
maindiv.appendChild(rowdiv);
document.body.append(maindiv)





function creatlable(element,type,value,content){
    var lable=document.createElement(element);
    lable.setAttribute(type,value)
    lable.innerText=content;
    lable.style.color="#251F1F"
    lable.style.margin4="4px"
    return lable;
}

function creatinput(element1,type1,value1,type2,value2,place){
    var input=document.createElement(element1);
    input.setAttribute(type1,value1);
    input.setAttribute(type2,value2);
    input.style.margin="5px"
    input.style.height="25px"
    input.style.width="60%"
    input.style.borderRadius = "8px"
    input.style.borderColor="gray"
    input.setAttribute("placeholder",place)
    return input;
}
function creatradio(element,type,value,type1,value1,type3,value3,type4,value4){
    let radio=document.createElement(element);
    
    radio.setAttribute(type,value);
    radio.setAttribute(type1,value1);
    radio.setAttribute(type3,value3);
    radio.setAttribute(type4,value4);
    
    radio.style.color="#251F1F"
    return radio;
}
function creatcheckbox(element,type,value,type1,value1,type2,value2,type3,value3){
    let checkbox=document.createElement(element);
    checkbox.setAttribute(type,value);
    checkbox.setAttribute(type1,value1);
    checkbox.setAttribute(type2,value2);
    checkbox.setAttribute(type3,value3);
    checkbox.style.margin="8px"
    return checkbox;
}

function clockHandler(event){
  event.preventDefault();
 
    var a = document.getElementById("name1");
    td01.innerHTML= a.value
  var b= document.getElementById("name2")
  td02.innerHTML= b.value
  var c= document.getElementById("address")
  td03.innerHTML= c.value
  var d= document.getElementById("pin")
  td04.innerHTML= d.value
 var e= document.querySelector(`input[name="gender"]:checked`)
 td05.innerHTML= e.value
 var f= document.querySelectorAll('input[name="checkbox"]:checked');
 var data= [];
  f.forEach((x) => {
    data.push(x.value)
  
    td06.innerHTML= data
  });
  alert((data))
 
 var g= document.getElementById("state")
 td07.innerHTML= g.value
  var h= document.getElementById("country")
  td08.innerHTML= h.value
  
}



















