import { Item } from "../types/Item";

//VARIABLES
const LOCAL_STORAGE_KEY = "sistema_financeiro";

//FUNCTIONS
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const FilterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");
  //   let dateSplit = date.split("-");
  //   let year = dateSplit[0];
  //   let month = dateSplit[1];

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");

  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[parseInt(month) - 1]} de ${year}`;
};

export const saveInStorage = (list: Item[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
};

export const recoverFromStorage = (): Item[] => {
  const localStorageItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (localStorageItems) {
    let parsedItems: Item[] = JSON.parse(localStorageItems);
    for (let i in parsedItems) {
      parsedItems[i].date = new Date();
    }
    return parsedItems;
  } else {
    return [];
  }
};
