import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  const { id, name, number } = data;

  return (
    <div className={css.container}>
      <div className={css.info}>
        <FaUser />
        <p>{name}</p>
      </div>
      <div className={css.info}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
