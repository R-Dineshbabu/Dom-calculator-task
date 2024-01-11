const div_cont_tag=document.createElement("div");
div_cont_tag.setAttribute("class","container");

// calculator

const div_cal=document.createElement("div");
div_cal.setAttribute("class","calculator");


// form
const form_tag=document.createElement("form");


// inside form one div tag

const form_div=document.createElement("div");
form_div.setAttribute("class","display");

const input_tag=document.createElement("input");
input_tag.setAttribute("type","text");
input_tag.setAttribute("name","display");
input_tag.setAttribute("id","display");
form_div.append(input_tag);
document.body.append(form_div);

// button AC DE



const div_ac_tag=document.createElement("div");

const ac_input_tag=document.createElement("input");
ac_input_tag.setAttribute("type","button");
ac_input_tag.setAttribute("value","AC");
ac_input_tag.addEventListener("click",()=>document.getElementById("display").value='');
ac_input_tag.setAttribute("class","ACDE");
div_ac_tag.appendChild(ac_input_tag);

const de_input_tag=document.createElement("input");
de_input_tag.setAttribute("type","button");
de_input_tag.setAttribute("value","DE");
de_input_tag.addEventListener("click",()=>document.getElementById("display").value=document.getElementById("display").value.toString().slice(0,-1));
de_input_tag.setAttribute("class","ACDE");
div_ac_tag.appendChild(de_input_tag);


const dot_input_tag=document.createElement("input");
dot_input_tag.setAttribute("type","button");
dot_input_tag.setAttribute("value",".");
dot_input_tag.addEventListener("click",()=>document.getElementById("display").value+='.');
dot_input_tag.setAttribute("class","ACDE");
div_ac_tag.appendChild(dot_input_tag);

const slash_input_tag=document.createElement("input");
slash_input_tag.setAttribute("type","button");
slash_input_tag.setAttribute("value","/");
slash_input_tag.addEventListener("click",()=>document.getElementById("display").value+='/');
slash_input_tag.setAttribute("class","ACDE");
div_ac_tag.appendChild(slash_input_tag);

document.body.append(div_ac_tag);






const num_div_tag=document.createElement("div");

const num_input_tag=document.createElement("input");
num_input_tag.setAttribute("type","button");
num_input_tag.setAttribute("value","7");
num_input_tag.addEventListener("click",foo);
function foo()
{
    document.getElementById("display").value+='7';
};
num_div_tag.appendChild(num_input_tag);


const num1_input_tag=document.createElement("input");
num1_input_tag.setAttribute("type","button");
num1_input_tag.setAttribute("value","8");
num1_input_tag.addEventListener("click",foo2);
function foo2()
{
    document.getElementById("display").value+='8'
}
num_div_tag.appendChild(num1_input_tag);

const num2_input_tag=document.createElement("input");
num2_input_tag.setAttribute("type","button");
num2_input_tag.setAttribute("value","9");
num2_input_tag.addEventListener("click",foo3);
function foo3()
{
    document.getElementById("display").value+='9';
}
num_div_tag.appendChild(num2_input_tag);



const num3_input_tag=document.createElement("input");
num3_input_tag.setAttribute("type","button");
num3_input_tag.setAttribute("value","*");
num3_input_tag.addEventListener("click",()=>document.getElementById("display").value+='*')
num3_input_tag.setAttribute("class","ACDE");
num_div_tag.appendChild(num3_input_tag);

document.body.append(num_div_tag);






const num1_div_tag=document.createElement("div"); 

const num4_input_tag=document.createElement("input");
num4_input_tag.setAttribute("type","button");
num4_input_tag.setAttribute("value","4");
num4_input_tag.addEventListener("click",()=>document.getElementById("display").value+='4');
num1_div_tag.appendChild(num4_input_tag);


const num5_input_tag=document.createElement("input");
num5_input_tag.setAttribute("type","button");
num5_input_tag.setAttribute("value","5");
num5_input_tag.addEventListener("click",()=>document.getElementById("display").value+='5');
num1_div_tag.appendChild(num5_input_tag);


const num6_input_tag=document.createElement("input");
num6_input_tag.setAttribute("type","button");
num6_input_tag.setAttribute("value","6");
num6_input_tag.addEventListener("click",()=>document.getElementById("display").value+='6');
num1_div_tag.appendChild(num6_input_tag);


const num7_input_tag=document.createElement("input");
num7_input_tag.setAttribute("type","button");
num7_input_tag.setAttribute("value","-");
num7_input_tag.addEventListener("click",()=>document.getElementById("display").value+='-');
num7_input_tag.setAttribute("class","ACDE");
num1_div_tag.appendChild(num7_input_tag);

document.body.append(num1_div_tag);



const num2_div_tag=document.createElement("div"); 

const num8_input_tag=document.createElement("input");
num8_input_tag.setAttribute("type","button");
num8_input_tag.setAttribute("value","1");
num8_input_tag.addEventListener("click",()=>document.getElementById("display").value+='1');
num2_div_tag.appendChild(num8_input_tag);


const num9_input_tag=document.createElement("input");
num9_input_tag.setAttribute("type","button");
num9_input_tag.setAttribute("value","2");
num9_input_tag.addEventListener("click",()=>document.getElementById("display").value+='2');
num2_div_tag.appendChild(num9_input_tag);


const num10_input_tag=document.createElement("input");
num10_input_tag.setAttribute("type","button");
num10_input_tag.setAttribute("value","3");
num10_input_tag.addEventListener("click",()=>document.getElementById("display").value+='3');
num2_div_tag.appendChild(num10_input_tag);


const num11_input_tag=document.createElement("input");
num11_input_tag.setAttribute("type","button");
num11_input_tag.setAttribute("value","+");
num11_input_tag.addEventListener("click",()=>document.getElementById("display").value+='+');
num11_input_tag.setAttribute("class","ACDE");
num2_div_tag.appendChild(num11_input_tag);

document.body.append(num2_div_tag);




const num12_div_tag=document.createElement("div"); 

const num13_input_tag=document.createElement("input");
num13_input_tag.setAttribute("type","button");
num13_input_tag.setAttribute("value","00");
num13_input_tag.addEventListener("click",()=>document.getElementById("display").value+='00')
num12_div_tag.appendChild(num13_input_tag);


const num14_input_tag=document.createElement("input");
num14_input_tag.setAttribute("type","button");
num14_input_tag.setAttribute("value","0");
num14_input_tag.addEventListener("click",()=>document.getElementById("display").value+='0');
num12_div_tag.appendChild(num14_input_tag);


const num15_input_tag=document.createElement("input");
num15_input_tag.setAttribute("type","button");
num15_input_tag.setAttribute("value","=");
num15_input_tag.addEventListener("click",()=>document.getElementById("display").value=eval(document.getElementById("display").value));
num15_input_tag.setAttribute("id","eq");
num15_input_tag.setAttribute("class","operator ACDE");
num12_div_tag.appendChild(num15_input_tag);



form_tag.append(form_div,div_ac_tag,num_div_tag,num1_div_tag,num2_div_tag,num12_div_tag);
div_cal.append(form_tag);
div_cont_tag.append(div_cal);
document.body.append(div_cont_tag);
