import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { CgCPlusPlus } from "react-icons/cg";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import React from 'react'
import cert  from './files/cert.JPG';
import Java  from './files/java.jpg';
import Blog from './files/Blog.JPG';
import leetcode from './files/leetcode.JPG'
import aman  from './files/aman.JPG';
import shorts from './files/shorts.jpg';
import Ask from './files/Ask.JPG'
import swirl from './files/swirl.JPG'



const Darray =[
  {
    key:0,
    sections:"About"
  },
  {
    key : 1,
    sections : "Projects"
  },
  
  {
    key : 2,
    sections: "Additional"
  },
  {
    key : 3,
    sections : "Skills"
  },
]


const project =[
  {
    key:1,
    head: "Ask",
    des:" where questions are raised solutions are provided to users build on mern Stack, JWT and google OAuth.",
    link : "https://askbackend-ek02.onrender.com/",
    pic:Ask
    
  },
  {
    key:2,
    head:"shorts v1",
    des:"website where shorts news are listed in a list and user can read the news used reactJs, redux toolkit.",
    link:"https://shorts-c2sh.onrender.com",
    pic : shorts
    
  },
  {
    key:3,
    head: "Aman Negi",
    des:"A portfolio website using react js .",
    link:"https://aman-negi.onrender.com",
    pic:aman
  },
  {
    key:4,
    head: "Swirl",
    des :" Swirl is chatting app using build using mern stack and socket.io still working on cool stuff",
    link:"https://swirl-1ms3.onrender.com",
    pic:swirl
  }
]

const certification=[
  {
    key:1,
    head: "JAVA(Basic)",
    des: "learned basic java loops, variable, classes, interface and Collections framework",
    link:"https://www.hackerrank.com/certificates/f99847985757",
    pic:Java
  },
  {
    key:2,
    head:" Internshala training for Data Science",
    des: "Learned basics of python, Data Exploration, Data-Preprocessing, Learned Supervised and Unsupervised Learning",
    link:"https://trainings.internshala.com/view_certificate/1hxhv38rer0/g6tkp0zadpc/",
    pic:cert
  } ,
  {
    key:3,
    head:"User Authentication with JWT tokens in Node JS",
    des:"Explained Express JS and Mongoose for Back-end and database connectivity. Created and explain JWT and tested the created the API with Postman, 1.8k view.",
    link:"https://dev.to/amann5153/user-authentication-with-jwt-tokens-in-node-js-1952"
    ,
  pic:Blog
  },
  {
    key:4,
    head:"LeetCode",
    des: " Solved More than 600+ questions on LeetCode. highest contest rating 1499. ",
    link:"https://leetcode.com/u/amann5153/", 
    pic:leetcode
  }
]

const skills =[
  {
    key:1,
    head:"Framework",
    icons:[
       React.createElement(FaReact),
       React.createElement(SiExpress),
      React.createElement(DiMongodb),
       React.createElement(FaNode)
    ]
  },
    {
      key:2,
      head:"Language",
      icons:[
          React.createElement(IoLogoJavascript),
          React.createElement(FaJava),
         React.createElement(CgCPlusPlus),
       React.createElement(AiOutlinePython),
          
      ]
    }
    ,
      {
        key:3,
        head:"Tools",
        icons:[
          
           React.createElement(BiLogoVisualStudio),
            React.createElement(SiPostman),
           React.createElement(SiRedux)
        ]
      }
]
export default Darray;
export {project, certification, skills}
