import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Graphic from '../assets/Graphic.png';
import { Button } from '../components/StyledButton';
import byeGraphic from '../assets/byeGraphic.jpg'

export default function Contact() {
  const form = useRef();
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ltf84c",
        "template_8bldw8f",
        form.current,
        "DvNi9KElrv01muMEx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };
  return (
    <div className="section-contact" id="contact">
      <div className="contact-container">
        <div className="left-container">
          <text className="header">Love to hear from you, <br/>Get in Touch </text>
          <img src={byeGraphic} className="bye" alt="hello icon" />
          <text>Name</text>
          <input className="input-normal" type="text" id="fname" name="Name" placeholder="Your name"></input>
          <text>Email</text>
          <input className="input-normal" type="text" id="fname" name="Name" placeholder="Your Email"></input>
          <text>Phone Number</text>
          <input className="input-normal" type="text" id="fname" name="Name" placeholder="Your Phone Number"></input>
          <text>How can I help?</text>
          <input className="input-special" type="text" id="fname" name="Name" placeholder="Tell me a little about your project"></input>
          <Button />
          
        </div>

        <div className="right-container">
              <img src={Graphic}  alt="hello icon" />
        </div>
      </div>
    </div>
  );
}
