import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Entertainer(ESFP-A)</p>
        <p className="pb-2">
        Entertainers are intuitive, energetic and energetic. Life is never boring around them.
        </p>
        <div className="flex gap-1 ">
          <Badge>AMBIVERTED</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>FEELING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
