import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const clearInput = () => setInput("");
  const deleteLast = () => setInput(input.slice(0, -1));

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div
      style={{
        width: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="card p-4 shadow" style={{ width: "330px" }}>
        <h3 className="text-center mb-3">Calculator</h3>

        <input
          type="text"
          className="form-control text-end fs-4 mb-3"
          value={input}
          readOnly
        />

        <div className="row g-2">
          <div className="col-3">
            <button className="btn btn-danger w-100" onClick={clearInput}>C</button>
          </div>

          <div className="col-3">
            <button className="btn btn-warning w-100" onClick={deleteLast}>⌫</button>
          </div>

          <div className="col-3">
            <button className="btn btn-secondary w-100" onClick={() => handleClick("/")}>/</button>
          </div>

          <div className="col-3">
            <button className="btn btn-secondary w-100" onClick={() => handleClick("*")}>*</button>
          </div>

          {[7,8,9,"-",4,5,6,"+",1,2,3,"."].map((item,i)=>(
            <div className="col-3" key={i}>
              <button className="btn btn-light w-100" onClick={()=>handleClick(item.toString())}>
                {item}
              </button>
            </div>
          ))}

          <div className="col-6">
            <button className="btn btn-light w-100" onClick={()=>handleClick("0")}>0</button>
          </div>

          <div className="col-6">
            <button className="btn btn-success w-100" onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
