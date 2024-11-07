import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};

export default function NavigationLink(props: Props) {
  return (
    <Link
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  );
}
