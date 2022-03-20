import React from "react";
import Characters from "./Characters/Characters";
import json from "./State/Persons.json";

export default function Persons() {
  return (
    <div className="container-fluid">
      <div>
        <Characters persons={json} />
      </div>
    </div>
  );
}
