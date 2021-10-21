import { useState } from "react";
import * as C from "./styles";

import { categories } from "../../data/categories";

import { Item } from "../../types/Item";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [categorySelected, setCategorySelected] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const cleanFields = () => {
    setCategorySelected("");
    setDateSelected("");
    setTitle("");
    setValue(0);
  };

  const handleAddEvent = () => {
    console.log(dateSelected.length);

    let errors: string[] = [];

    if (dateSelected.length <= 0) {
      errors.push("Data Inválida");
    }

    if (categorySelected.length <= 0) {
      errors.push("Categoria Inválida");
    }

    if (title.length <= 0) {
      errors.push("Título Inválido");
    }

    if (value < 0) {
      errors.push("Valor Inválido");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateSelected),
        category: categorySelected,
        title,
        value,
      });
      cleanFields();
    }
    console.log(errors);
  };

  return (
    <C.Conteiner>
      <C.FieldBox>
        <C.Title>Data</C.Title>
        <C.Input
          type='date'
          value={dateSelected}
          onChange={(e) => setDateSelected(e.target.value)}
        />
      </C.FieldBox>
      <C.FieldBox>
        <C.Title>Categoria</C.Title>
        <C.CategorySelect
          value={categorySelected}
          onChange={(e) => setCategorySelected(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key: string, index: number) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.CategorySelect>
      </C.FieldBox>
      <C.FieldBox>
        <C.Title>Título</C.Title>
        <C.Input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </C.FieldBox>
      <C.FieldBox>
        <C.Title>Valor</C.Title>
        <C.Input
          type='number'
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </C.FieldBox>
      <C.FieldBox position={"end"}>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.FieldBox>
    </C.Conteiner>
  );
};
