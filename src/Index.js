import React, { useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import {
  Layout,
  Input,
  Select,
  SelectItem,
  Button,
  Spinner,
} from "@ui-kitten/components";
import { HeaderComp } from "./components/HeaderComp";
import { BookContext } from "./context/BookContext";

const conditions = ["GOOD", "MEDIUM", "BAD"];
const locations = ["A", "B", "C", "D", "F", "G"];
const category = [
  "Historia",
  "Física",
  "Economía",
  "Novela",
  "Historieta",
  "Agricultura",
];

export default function Index({ history }) {
  const { state, dispatch } = useContext(BookContext);
  useEffect(() => {}, []);

  return (
    <Layout style={styles.container}>
      <HeaderComp />

      <Layout style={styles.form}>
        <Input
          style={styles.inputs}
          label="Título"
          value={state.title}
          placeholder="Ingrese el título del libro"
          onChangeText={(text) =>
            dispatch({
              type: "ADD_TITLE",
              value: text,
            })
          }
        />
        <Input
          style={styles.inputs}
          label="Autor"
          value={state.author}
          placeholder="Ingrese nombre del autor"
          onChangeText={(text) =>
            dispatch({
              type: "ADD_AUTHOR",
              value: text,
            })
          }
        />
        <Select
          style={styles.inputs}
          label="Categoría"
          value={state.category}
          onSelect={(index) => {
            dispatch({
              type: "ADD_CATEGORY",
              value: category[index.row],
            });
          }}
        >
          {category.map((title) => (
            <SelectItem key={title} title={title} />
          ))}
        </Select>
        <Select
          style={styles.inputs}
          label="Condición"
          value={state.condition}
          onSelect={(index) =>
            dispatch({
              type: "ADD_CONDITION",
              value: conditions[index.row],
            })
          }
        >
          {conditions.map((title) => (
            <SelectItem key={title} title={title} />
          ))}
        </Select>
        <Select
          style={styles.inputs}
          label="Ubicación"
          value={state.location}
          onSelect={(index) =>
            dispatch({
              type: "ADD_LOCATION",
              value: locations[index.row],
            })
          }
        >
          {locations.map((title) => (
            <SelectItem key={title} title={title} />
          ))}
        </Select>
        <Layout style={styles.containerBtns}>
          <Button
            style={styles.btnCancel}
            onPress={() => {
              dispatch({ type: "CLEAN_STATE", value: "" });
            }}
            appearance="outline"
          >
            C A N C E L A R
          </Button>
          <Button
            style={styles.btnNext}
            onPress={() => {
              history.push("/SelectItem");
            }}
          >
            S I G U I E N T E
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  form: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputs: {
    paddingBottom: 15,
  },
  btnNext: {
    width: "45%",
  },
  btnCancel: {
    width: "45%",
  },
  containerBtns: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "space-between",
  },
});
