import React from "react";
import "./style.css";
import { AiOutlinePlus } from "react-icons/ai";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { BsFillCircleFill } from "react-icons/bs";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {GoKebabVertical} from "react-icons/go";

const Main = () => {
  return (
    <div>
      <h1>Good Morning,Alistair</h1>
      <div className="container-main">
        <div className="first">
          <p>
            Add Task                 
          </p>
          <AiOutlinePlus className="ai"/>
        </div>
        <p>On Going</p>
        <div className="box1">
        <BsFillCircleFill className="circle" />
          <p>
            Task1
          </p>
          <IoRemoveCircleOutline className="del"/><GoKebabVertical className="menu"/>
        </div>
        <div className="box2">
        <BsFillCircleFill className="circle" />
          <p>
            Task1
          </p>
          <IoRemoveCircleOutline className="del" /><GoKebabVertical className="menu"/>
        </div>
        <div className="box3">
        <BsFillCircleFill className="circle"/>
          <p>
            Task1
          </p>
          <button className="cancel">Cancel</button>
        <button className="save">Save</button>
        </div>
        <p>Completed</p>
        <div className="last">
        <BsFillCheckCircleFill className="ceklis"/><p>Task 1 Task 1 Task 1</p>
       
        </div>
      </div>
    </div>
  );
};

export default Main;
