import React, { useContext, useEffect } from "react";
import { myContaxt } from "../App";

import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const { alldata, category, prayers, setPrayers } = useContext(myContaxt);
  const nav = useNavigate();

  // ************TO FILTER THE SUB CATEGORY ARRAY**********

  const prayersFilterHandle = (...category_id) => {
    console.log("category_id", category_id);

    console.log("category data inside filter handle", category);

    const flattened_category_ids = category_id.flat();

    const filterd_data = category.filter((item) =>
      flattened_category_ids.includes(item.id)
    );
    console.log("filterd_data", filterd_data);
    setPrayers(filterd_data);
  };

  useEffect(() => {
    console.log("PRAYERS", prayers);
  }, [prayers]);

  return (
    <div className="main_container">
      <div className="main_data">
        <h1>Duas</h1>
        {alldata.map((e) => (
          <div key={e.id}>
            <button onClick={() => prayersFilterHandle(e.sub_cats)}>
              {e.title}
            </button>
          </div>
        ))}
      </div>

      <div
        className="sub_data"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {prayers.map((item) => {
          return (
            <>
              <h3 onClick={() => nav(`./Duas/${item.duas}`)} key={item.id}>
                {item.title}
              </h3>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
