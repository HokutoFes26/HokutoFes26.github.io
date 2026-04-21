import React from 'react';
import styles from './TabNav.module.css';

interface TabItem<T extends string> {
  label: string;
  value: T;
}

interface TabNavProps<T extends string> {
  items: TabItem<T>[];
  currentTab: T;
  onTabChange: (value: T) => void;
}

const TabNav = <T extends string>({ items, currentTab, onTabChange }: TabNavProps<T>) => {
  return (
    <div className={styles["tab-nav"]}>
      {items.map((item) => (
        <button
          key={item.value}
          className={`${styles["tab-btn"]} ${currentTab === item.value ? styles.active : ""}`}
          onClick={() => onTabChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
