import { useParams, useNavigate } from "react-router-dom";

import styles from "./City.module.css";
import { useEffect } from "react";
import { useCities } from "../hooks/useCities";

import Button from "./Button";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCity, currentCity } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (!currentCity) return null;

  /* const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng"); */

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        {/*  <p>{formatDate(date || null)}</p> */}
        <p>{date ? formatDate(date) : "No date available"}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        btnType="back"
      >
        &larr; Back
      </Button>
      <div></div>
    </div>
  );
}

export default City;
