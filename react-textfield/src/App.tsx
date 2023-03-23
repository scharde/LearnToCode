import React from "react";
import "./App.css";
import { ITextFieldProps, TextField } from "./TextField";

function App() {
  const formSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="app">
        <form onSubmit={formSubmit}>
          <TextField style={{}} styles={{ input: {} }} />
          <TextField
            label="Text"
            required
            onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
              console.log(e.currentTarget.value);
            }}
            errorMessage="Some error"
          />
          <TextField multiline rows={3} errorMessage="Error message" />
          <TextField
            label="Some Label"
            styles={{
              root: { width: 400 },
              label: {
                textAlign: "center",
              },
              input: {
                backgroundColor: "blueviolet",
                color: "white",
              },
            }}
          />

          <TextField
            label="Label"
            styles={{
              root: {
                display: "flex",
                flexDirection: "row",
              },
            }}
          />

          <TextField
            value={"Some Value"}
            inputRenderer={(data: ITextFieldProps) => {
              return (
                <div>
                  <input type="text" value={`Custom Value : ${data.value}`} />
                </div>
              );
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
