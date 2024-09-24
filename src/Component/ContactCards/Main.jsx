import React from "react";
import "./cards.css";
import Card from "./Card";
import CardGrid from "./CardGrid";
export default function Main(){
return(
    <CardGrid>
        {Array(8).fill().map((_,i)=>(
            <Card key={i}>
              <h2>Card</h2>
            </Card>
        ))}
    </CardGrid>
)
};