

import React from "react";

const Cardo = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <Cardo title={card.title} content={card.content} imgUrl={card.imgUrl}/>
    ))}
  </div>
);

class Cardoo extends React.Component {
  render() {
    const cardsData = [
      {
        
      },
      {
        id: 2,
        title: "Maison à louer tunis",
        content: "3/4 chambres garage 2 voitures ",
        content: " 6 Pièces · 110 m² · manar 33000",
        content: "525 000 dt 4 773 dt/m²",
        imgUrl: "https://unsplash.it/200/201"
      },
      {
        id: 3,
        title: "CARD 3",
        content: "Peter Parker",
        imgUrl: "https://unsplash.it/200/201"
      },
      {
        id: 4,
        title: "CARD 4",
        content: "Tony Stark",
        imgUrl: "https://unsplash.it/201/201"
      },
      {
        id: 5,
        title: "CARD 5",
        content: "Reed Richards",
        imgUrl: "https://unsplash.it/202/200"
      },
      {
        id: 6,
        title: "CARD 6",
        content: "Wade Wilson",
        imgUrl: "https://unsplash.it/200/199"
      },
      {
        id: 7,
        title: "CARD 7",
        content: "Peter Quill",
        imgUrl: "https://unsplash.it/199/199"
      },
      {
        id: 8,
        title: "CARD 8",
        content: "Steven Rogers",
        imgUrl: "https://unsplash.it/199/200"
      },
      {
        id: 9,
        title: "CARD 9",
        content: "Bruce Banner",
        imgUrl: "https://unsplash.it/200/198"
      },
      {
        id: 10,
        title: "CARD 10",
        content: "Vincent Strange",
        imgUrl: "https://unsplash.it/198/199"
      }
    ];

    return (
      <div className="container">
        <h1 style={{ "text-align": "center" }}>React Card Slider</h1>

        <CardContainer cards={cardsData} />
      </div>
    );
  }
}

export default Cardoo;