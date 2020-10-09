import React, { useState, useEffect, useContext, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Icon } from "@ui-kitten/components";
import { Camera } from "expo-camera";
import { BookContext } from "./context/BookContext";

export default function CameraComp({ history }) {
  const zoomIconRef = useRef();
  const { state, dispatch } = useContext(BookContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const handlePicture = async () => {
    if (this.camera) {
      let { uri, base64 } = await this.camera.takePictureAsync({
        base64: true,
      });
      dispatch({
        type: "ADD_IMAGES",
        value: uri,
      });
    }
    history.push("/SelectItem");
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const renderZoomIcon = (props) => (
    <Icon
      name="camera"
      animationConfig={{ cycles: Infinity }}
      {...props}
      ref={zoomIconRef}
    />
  );

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        onCameraReady={() => setCameraReady(true)}
        ref={(ref) => {
          this.camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            accessoryLeft={renderZoomIcon}
            style={styles.fab}
            onPress={handlePicture}
          ></Button>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 40,
  },
});
