var ques = {
    0: {
        "q": "1. HTML stands for -",
        "op": ["HighText Machine Language","HyperText and links Markup Language","HyperText Markup Language","None of these"]
    },
    1: {
        "q": "2. The correct sequence of HTML tags for starting a webpage is -",
        "op": ["Head, Title, HTML, body","HTML, Body, Title, Head","HTML, Title, Head, Body","HTML, Head, Title, Body"]
    },
    2: {
        "q": "3. How to create an unordered list (a list with the list items in bullets) in HTML?",
        "op": ["<ul>","<ol>","<li>","<i>"]
    },
    3: {
        "q": "4. How to insert an image in HTML?",
        "op": ["<img href = '' ''>","<img url = '' ''>","<img link = '' ''>","<img src = '' ''>"]
    },
    4: {
        "q": "5. <input> is -",
        "op": ["a format tag",
            "an empty tag",
            "All of the above",
            "None of the above"]
    },
    5: {
        "q": "6. How to create a checkbox in HTML?",
        "op": ["<input type = ''checkbox''>",
        "<input type = ''button>",
        "<checkbox>",
        "<input type = ''check''>"]
    },
    6:  {
        "q": "7. Which of the following tag is used to define options in a drop-down selection list?",
        "op": ["<select>",
        "<list>",
        "<dropdown>",
        "<option>"]
    },
    7:  {
        "q": "8. Which of the following tag is used to add rows in the table?",
        "op": ["<td> and </td>",
        "<th> and </th>",
        "<tr> and </tr>",
        "None of the above"]
    },
    8:  {
        "q": "9.The <hr> tag in HTML is used for -",
        "op": ["new line",
        "vertical ruler",
        "new paragraph",
        "horizontal ruler"]
    },
    9:  {
        "q": "10. Which of the following attribute is used to provide a unique name to an element?",
        "op": ["class","id","type","None of the above"]
    },
    10:  {
        "q": "11. Which of the following HTML tag is used to display the text with scrolling effect?",
        "op": ["<marquee>","<scroll>","<div>","None of the above"]
    },
    11:  {
        "q": "12. Which of the following is the container for <tr>, <th>, and <td> ?",
        "op": ["<data>","<table>","<group>","All of the above"]
    },
    12:  {
        "q": "13. Which of the following HTML attribute is used to define inline styles?",
        "op": ["style","type","class","None of the above"]
    },
    13:  {
        "q": "14. The tags in HTML are -",
        "op": ["case-sensitive","in upper case","not case sensitive","in lowercase"]
    },
    14:  {
        "q": "15. In HTML5, which of the following tag is used to initialize the document type?",
        "op": ["<Doctype HTML>","<\Doctype html>","<Doctype>","<!DOCTYPE html>"]
    },
    15:  {
        "q": "16. Which is the correct way to comment out something in HTML?",
        "op": ["Using ## and #","Using <!-- and -->","Using </-- and -/->","Using <!-- and -!>"]
    }
}

const correct_answer=[3,4,1,4,2,1,4,3,4,2,1,2,1,3,4,4];

const user_choice =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const page1 = document.getElementsByClassName("inner-box");
const page2 = document.getElementsByClassName("inner");
const page3 = document.getElementsByClassName("result");
const Name = document.getElementsByClassName("name");
var User = document.querySelector(".username");
const choice=document.getElementsByClassName("choice");

const q=document.querySelector(".Ques");
const op1=document.querySelector(".opt-btn1");
const op2=document.querySelector(".opt-btn2");
const op3=document.querySelector(".opt-btn3");
const op4=document.querySelector(".opt-btn4");
const final=document.getElementById("final");
const Score=document.getElementById("score")

q.innerText=ques[0].q;
op1.value=ques[0].op[0];
op2.value=ques[0].op[1];
op3.value=ques[0].op[2];
op4.value=ques[0].op[3];


var counter=0;

function next(){
    //alert("working..");
    for(let i=0;i<4;i++)
    {
        choice[i].style.backgroundColor="aqua";
    }
    
    counter++;
    document.getElementById("bk_btn").style.display="";
    if(counter>15)
    {
        document.getElementById("nxt_btn").style.display="none";
    }
    else
    {
    q.innerText=ques[counter].q;
    op1.value=ques[counter].op[0];
    op2.value=ques[counter].op[1];
    op3.value=ques[counter].op[2];
    op4.value=ques[counter].op[3];
    }
    if(counter>15)
        document.getElementById("final").style.display="block";
    else
    document.getElementById("final").style.display="none";

}

function back(){
    //alert("working..");
    for(let i=0;i<4;i++)
    {
        choice[i].style.backgroundColor="aqua";
    }

    counter--;
    document.getElementById("nxt_btn").style.display="";
    if(counter<0)
    {
        document.getElementById("bk_btn").style.display="none";
    }
    else
    {
    q.innerText=ques[counter].q;
    op1.value=ques[counter].op[0];
    op2.value=ques[counter].op[1];
    op3.value=ques[counter].op[2];
    op4.value=ques[counter].op[3];
    }
    if(counter>15)
        document.getElementById("final").style.display="block";
    else
    document.getElementById("final").style.display="none";
}

function Dashboard(){
    page1[0].style.display="none";
    page2[0].style.display="flex";
    User.innerText=Name[0].value;
}

function answer(n){
    user_choice[counter]=n;
    for(let i=0;i<4;i++)
    {
        if(i===n-1)
        choice[i].style.backgroundColor="tomato";
        else
        choice[i].style.backgroundColor="aqua";
    }
    
   console.log(choice);
}

function final_scr(){
    var score=0;
    for(let i=0;i<16;i++)
    {
        if(correct_answer[i]==user_choice[i])
        score+=5;
    }
     Score.innerText=score;
     document.querySelector(".player").innerText=Name[0].value;
     //alert(Name[0].value);
     page2[0].style.display="none";
     page3[0].style.display="flex";
}
function Q(m){
    const n=m-1;
    q.innerText=ques[n].q;
    op1.value=ques[n].op[0];
    op2.value=ques[n].op[1];
    op3.value=ques[n].op[2];
    op4.value=ques[n].op[3];
    counter=n;
}
// function Start_page(){
//     page1[0].style.display="flex";
//     page3[0].style.display="none";
//     counter=0;
//     User.innerText="";
//     user_choice =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// }
