import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/Pok13579/miniproject-iot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Project Basic IOT BIN
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Pok13579/web_design_year2_miniproject"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Project Basic Webdesign
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Pok13579/musicApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Project Mobile App Music Aplication
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Pok13579/car-selling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Project Advance Webdesign 
            </a>
          </li>
          
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
