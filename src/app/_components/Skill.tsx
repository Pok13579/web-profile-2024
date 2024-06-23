import {
  faDocker,
  faJava,
  faJs,
  faPhp,
  faPython,
  faReact,
  faRust,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";
import { faC } from "@fortawesome/free-solid-svg-icons/faC";
import { faA } from "@fortawesome/free-solid-svg-icons/faA";

type Props = {};

  const Skill = (props: Props) => {
    return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faC} className="h-10" />
          <p>C Language</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faA} className="h-10" />
          <p>Arduino And IOT</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDocker} className="h-10" />
          <p>Docker</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faLinux} className="h-10" />
          <p>Linux(a little bit)</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
