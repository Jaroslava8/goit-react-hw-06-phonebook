import propTypes from "prop-types";
import styles from "../Contacts/Contacts.module.css";

export default function ContactDetails({ contact, deleteContact }) {
  const { id, name, number } = contact;
  return (
    <div>
      <p className={styles.name}>
        {name}:<span className={styles.tel}>{number}</span>
      </p>
      <button
        className={styles.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}

ContactDetails.propTypes = {
  contact: propTypes.object.isRequired,
  deleteContact: propTypes.func.isRequired,
};
