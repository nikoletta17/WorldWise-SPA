import CountryItem from "./CountryItem.jsx";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";

import { useCities } from "../hooks/useCities.jsx";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first country by clicking on the city on the map!" />
    );

  const countries = cities.reduce((acc, curr) => {
    const currentCountries = acc.map((el) => el.country);
    if (!currentCountries.includes(curr.country)) {
      return [...acc, { country: curr.country, emoji: curr.emoji }];
    } else {
      return acc;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem city={country} />
      ))}
    </ul>
  );
}

export default CountryList;
