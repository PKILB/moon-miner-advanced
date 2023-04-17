import React, { useState } from "react";
import background from "../assets/img/background.jpg"

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      height: "100vh"
      }}>
      {/* <img src={background} alt="background" /> */}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-6 m-auto text-center">
            <h3>LEAGUE MINER</h3>
          </div>
        </div>
      </div>
    </div>
  )
}