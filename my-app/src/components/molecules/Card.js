import React from "react";
import CardItem from "../atoms/CardItem";



function Card(props) {
  return (
    <ul>
      {props.todos.map((todo,index) => {
        return <CardItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}
export default Card
