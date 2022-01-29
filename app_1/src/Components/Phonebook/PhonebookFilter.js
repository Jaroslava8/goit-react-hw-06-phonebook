import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeFitler } from "../../Redux/Action";
import styles from "../Phonebook/PhonebookFilter.module.css";

export default function PhonebookFilter() {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={value}
          onChange={({ target }) => dispatch(changeFitler(target.value))}
        />
      </label>
    </>
  );
}
