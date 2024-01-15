import React from "react";
import Book from "./Book";

export default function Booklist(props) {
  const list = [
    {
      img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70&crop=false",
      name: "Name",
      Brand: "Brand",
      id: 1,
    },
    {
      img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70&crop=false",
      name: "Name",
      Brand: "Brand",
      id: 2,
    },
    {
      img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70&crop=false",
      name: "Name",
      Brand: "Brand",
      id: 3,
    },
  ];

  return (
    <div className="container1">
      {list.map((book, index) => {
        return (
          <Book
            img={book.img}
            name={book.name}
            Brand={book.Brand}
            mode={props.mode}
            key={book.id}
            number={index}
          />
        );
      })}
    </div>
  );
}
