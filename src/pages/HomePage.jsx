import React, { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <h3>This is gonna be a fun one</h3>
          </div>
        </div>
      </div>
    </div>
  )
}