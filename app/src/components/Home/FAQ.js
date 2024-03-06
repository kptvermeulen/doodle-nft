import React, { useState } from "react";
import "styles/Home/FAQ.css";
import SmoothCollapse from "react-smooth-collapse";

import stripes from "assets/img/stripes.svg";
import plus from "assets/img/plus.svg";

export default function FAQ() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const faqs = [
    {
      question: "How can I buy a Doodle Jumper NFT?",
      answer:
        "You will be able to mint a Doodle Jumper NFT if you have a spot on the JumpList. The only other way to obtain a Doodle Jumper NFT is by buying one on Opensea.",
      expanded: expanded1,
      setExpanded: setExpanded1,
    },
    {
      question: "How do I get on the JumpList?",
      answer:
        "Take a look at the #jumplist channel inside the discord for the details!",
      expanded: expanded2,
      setExpanded: setExpanded2,
    },
    {
      question: "How can I make money playing the game?",
      answer:
        "You can make money playing Doodle Jumper each month by securing a spot on the leaderboard. There will be a monthly cash pot which will be distributed between the top 5 players. The distribution will take place as showcased above",
      expanded: expanded3,
      setExpanded: setExpanded3,
    },
    {
      question: "What About Bots?",
      answer:
        "Games and tournaments must be played directly by humans. The use of bots, ML, AI, pets, extra terrestrials, or other means will get your doodle jumper banned permanently from playing and future staking. If you believe you have been banned by mistake please join our discord to appeal.",
      expanded: expanded4,
      setExpanded: setExpanded4,
    },
  ];
  return (
    <div id="FAQ">
      <div className="maxWidthContainer">
        <div className="column11">
          <h2>
            Got Questions?
            <br />
            We Have Answers
          </h2>
          <img src={stripes} alt="stripes" className="stripes" />
        </div>
        <div className="FAQGrid">
          {faqs.map((faq, index) => {
            return (
              <div>
                <div
                  className="FAQContainer disableSelect"
                  id={"FAQContainer" + index}
                  onClick={() => {
                    if (faq.expanded) {
                      faq.setExpanded(false);
                      document.getElementById("plus" + index).style.transform =
                        "rotate(0deg)";
                      document
                        .getElementById("FAQContainer" + index)
                        .classList.remove("expandedContainer");
                    } else {
                      faq.setExpanded(true);
                      document.getElementById("plus" + index).style.transform =
                        "rotate(135deg)";
                      document
                        .getElementById("FAQContainer" + index)
                        .classList.add("expandedContainer");
                    }
                  }}
                >
                  <div className="flex">
                    <h4>{faq.question}</h4>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="plus"
                      id={"plus" + index}
                    >
                      <path
                        d="M16 6.66669V25.3334"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66666 16H25.3333"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <SmoothCollapse expanded={faq.expanded}>
                    <p className="faqAnswer">{faq.answer}</p>
                  </SmoothCollapse>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
