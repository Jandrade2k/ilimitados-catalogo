import React from "react";

import Select from 'react-select'

// TODO: Adicionar mudança de rotas nessa função.
function logChange(val) {
  console.log(`Selected: ${val}`);
}

export function Search() {

    const options = [
        {
            label: "Brasileirão Série A",
            value: "brasileirao sa",
        },
        {
            label: "Bundesliga",
            value: "bundesliga",

        },
        {

            label: "Premier League",
            value: "premiar league",
        },
        {
          label: "Liga 1",
          value: "liga 1",
        },
        {
          label: "La Liga",
          value: "la liga"
        },
        {
          label: "Seria A Italia",
          value: "seria a italia",
        }
    ];


    return (
        <Select placeholder="Pesquisar..." className="search" name="search" value="one" options={options} onChange={logChange} />
    );
}
