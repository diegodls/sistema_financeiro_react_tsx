import { useState, useEffect } from "react";
import * as C from "./styles";

import { TableArea } from "../../components/TableArea";
import { InfoArea } from "../../components/InfoArea";
import { InputArea } from "../../components/InputArea";

import { Item } from "../../types/Item";

import { categories } from "../../data/categories";

import {
  FilterListByMonth,
  getCurrentMonth,
  recoverFromStorage,
  saveInStorage,
} from "../../helpers/dateFilter";

const Home = () => {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFIlteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let recoveredFromStorage = recoverFromStorage();
    setList(recoveredFromStorage);
  }, []);

  useEffect(() => {
    setFIlteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount: number = 0;
    let expenseCount: number = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  useEffect(() => {
    saveInStorage(list);
  }, [list]);

  const handleMonthChange = (newMonth: string): void => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item): void => {
    console.log("NOVO-ITEM");
    console.log(item);

    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  const handleCleanList = (): void => {
    setList([]);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} onClean={handleCleanList} />
      </C.Body>
    </C.Container>
  );
};

export default Home;
