import styles from "./Button.module.css";

function Button({ children, btnType, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[btnType]}`}>
      {children}
    </button>
  );
}

export default Button;
