import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Travel at Japan</li>
          <li>Become to Fullstack dev</li>
          <li>Go to silicon valley</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
