import React from 'react';
import {Image} from 'react-native';
const urlImageDefault =
  "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
export const ImageBook = ({uri}) => {
    return(
        <Image style={{margin:3, width:'50%' }} source={{ uri: uri }} />
    )
}