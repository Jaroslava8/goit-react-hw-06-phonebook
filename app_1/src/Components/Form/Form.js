import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../Redux/Action";
import { useSelector } from "react-redux";
import styles from "../Form/Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.items);

  const handleContactInput = ({ currentTarget }) => {
    const { value, name } = currentTarget;

    switch (name) {
      case "name":
        setName(value);
        return;
      case "number":
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`${name} is already in contacts.`);

    dispatch(actions.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.name}>
          Name
          <input
            className={styles.inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleContactInput}
          />
        </label>
        <div>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleContactInput}
          />
        </div>
        <button className={styles.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
