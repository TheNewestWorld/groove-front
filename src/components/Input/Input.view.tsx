import React from "react";
import { GreyDeleteCircle } from "../../assets/icon";
import styles from "./Input.module.scss";

export interface Props {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confirmMessage?: string;
  errorMessage?: string;
  onReset?: () => void;
  type?: string;
}

const Input = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  confirmMessage,
  errorMessage,
  onReset,
  type,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.input}>
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
        {onReset && value && <GreyDeleteCircle className={styles.icon} />}
      </div>
      <div className={styles.confirm}>{confirmMessage}</div>
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default Input;
