import { IconType } from 'react-icons';
import './Card.css'

interface cardProps {
  title: string;
  Icon: IconType;
}

const Card = ({ title, Icon }: cardProps) => (
  <section className="card-container">
    <div className="content font card-icon">
      <Icon
        style={{
          color: "rgb(255, 255, 255)",
          width: "55px",
          height: "55px",
        }}
        data-testid='icon'
      />
    </div>
    <div className="font content-text">
      {title}
    </div>
  </section>
);


export default Card;