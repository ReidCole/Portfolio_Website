import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/ToggleSwitch.module.css";

type Props = {
  checked: boolean;
  onChecked: (value: boolean) => void;
};

const ToggleSwitch: React.FC<Props> = ({ checked, onChecked }) => {
  const theme = useTheme();

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={(e) => onChecked(e.target.checked)} />
      <span className={`${theme(styles.slider, styles.dark)} ${styles.round}`}></span>
    </label>
  );
};

export default ToggleSwitch;
