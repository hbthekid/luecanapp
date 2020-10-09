import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Button,
  Layout,
  Text,
  Icon,
  Card,
  Spinner,
} from "@ui-kitten/components";
import { HeaderComp } from "./components/HeaderComp";
import { BookContext } from "./context/BookContext";
import { SectionGrid } from "react-native-super-grid";
import { useUploadBook } from "./hooks/useUploadImage";

export default function SelectImage({ history }) {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(BookContext);
  const submitHandler = async () => {
    setLoading(true);
    const response = await useUploadBook(state);
    const { data, error } = await response.json();
    dispatch({
      type: "CLEAN_STATE",
      value: "",
    });
    setLoading(false);
    history.push("/");
  };
  const StarIcon = (props) => <Icon {...props} name="camera" />;
  return (
    <Layout style={styles.container}>
      <HeaderComp />
      {loading ? (
        <Layout style={styles.spinnerContainer}>
          <Spinner size="giant" />
        </Layout>
      ) : (
        <React.Fragment>
          <Layout style={styles.gallery}>
            <SectionGrid
              sections={[
                {
                  title: "Numbers",
                  data: state.images,
                },
              ]}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={{
                    width: 160,
                    height: 130,
                  }}
                />
              )}
            />
          </Layout>
          <Button
            style={styles.btnIcon}
            appearance="ghost"
            status="danger"
            size="giant"
            accessoryLeft={StarIcon}
            onPress={() => {
              history.push("/camera");
            }}
          />
        </React.Fragment>
      )}
      <Layout style={styles.containerBtns}>
        <Button
          style={styles.btnRegistrar}
          onPress={() => {
            history.push("/");
          }}
          appearance="outline"
        >
          V O L V E R
        </Button>
        <Button style={styles.btnRegistrar} onPress={submitHandler}>
          E N V I A R
        </Button>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    position: "relative",
  },
  gallery: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btnRegistrar: {
    width: "45%",
  },
  btnIcon: {
    position: "absolute",
    marginLeft: "80%",
    top: 300,
  },
  containerBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  spinnerContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
