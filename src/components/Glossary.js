import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Glossary = () => {
  const [workout, setWorkout] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://wger.de/api/v2/exercise/")
      .then((info) => {
        console.log(info);
        let english = info.data.results.filter((workout) => {
          return workout.language === 2;
        });
        setWorkout(english);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  return (
    <div>
      <h1>Exercise Descriptions</h1>
      {workout.map((info) => {
        return (
          <div>
            <h3>{info.name}</h3>
            {info.description.replace("<p>", "").replace("</p>", "")}
          </div>
        );
      })}
    </div>
  );
};

export default Glossary;