import * as C from "./styles";

import { TableItem } from "../TableItem";

import { Item } from "../../types/Item";

type Props = {
  list: Item[];
  onClean: () => void;
};

export const TableArea = ({ list, onClean }: Props) => {
  return (
    <>
      <C.Container>
        {list.length <= 0 ? (
          <h1>Sem Registros</h1>
        ) : (
          <C.Table>
            <thead>
              <tr>
                <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <TableItem key={index} item={item} />
              ))}
            </tbody>
          </C.Table>
        )}
      </C.Container>
      <C.Button onClick={onClean}>LIMPAR REGISTROS</C.Button>
    </>
  );
};
