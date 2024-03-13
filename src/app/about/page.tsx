"use client";
import axios from "axios";
import { useState } from "react";

export default function About() {
  const [getresponse, setGetresponse] = useState("No data");
  const [getresponseitem, setGetresponseitem] = useState(0);

  const [getresponsename, setGetresponsename] = useState("No name");
  const [getresponseid, setGetresponseid] = useState(0);


  const Call_api = async () => {
    try {
      const response = await axios.get(`http://119.59.99.194:4567/`);
      setGetresponse(response.data.name);
    } catch (error) {
      console.log("Call_api error", error);
    }
  };

  const Item_id = 202;
  const Call_api_item_id = async () => {
    try {
      const response = await axios.get(`http://119.59.99.194:4567/items/items/`);
      setGetresponseitem(response.data.item_id);
    } catch (error) {
      console.log("Call_api error", error);
    }
  };

  const Item_id_put = 202;
  const Call_api_item_id_put = async () => {
    try {
      const response = await axios.put(`http://119.59.99.194:4567/items/${Item_id_put}`, {
        name: "benz",
        price: 0,
        value: 0,
      });
      setGetresponsename(response.data.Body_name_only);
      setGetresponseid(response.data.Body_item_id_only);
    } catch (error) {
      console.log("Call_api error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-srceen flex-col">
      <button onClick={Call_api} className="bg-red-400">
        Get response item
      </button>
      <p>This is my reponse: {getresponse}</p>

      <button onClick={Call_api_item_id} className="bg-red-400">
        Get response item
      </button>
      <p>This is my reponse: {getresponseitem}</p>

      <button onClick={Call_api_item_id_put} className="bg-red-400">
        Get response item
      </button>
      <p>This is my reponse: {getresponseid}</p>
      <p>This is my reponse: {getresponsename}</p>
    </div>
  );
}
