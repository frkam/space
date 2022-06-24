import styles from "./datepickerInput.module.scss";
import { forwardRef } from "react";

const Input = ({ onChange, placeholder, value, id, onClick }, ref) => (
  <input
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    id={id}
    onClick={onClick}
    className={styles.input}
  />
);

export default forwardRef(Input);
