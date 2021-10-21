import * as C from "./styles";

import { formatDate } from "../../helpers/dateFilter";

import { Item } from "../../types/Item";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value
          color={categories[item.category].expense ? "#9e2b2b" : "#3d7849"}
        >
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};
