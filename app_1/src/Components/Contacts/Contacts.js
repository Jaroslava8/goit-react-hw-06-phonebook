import ContactDetails from "../Contacts/ContactDetails";
import styles from "../Contacts/Contacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Action";

export default function Contacts() {
  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (id) => {
    dispatch(actions.deleteContact(id));
  };

  return (
    <div className={styles.box}>
      <ul>
        <li className={styles.list}>
          {filteredContacts().map((contact) => (
            <ContactDetails
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}
