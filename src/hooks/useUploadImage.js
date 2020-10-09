import React, { useContext, useState } from "react";

export const useUploadBook = async ({
  author,
  title,
  condition,
  location,
  category,
  images,
}) => {
  const urlApi = "http://192.168.0.2:3000/api/book";
  let formData = new FormData();

  let image = images.map((u) => {
    let uriParts = u.split(".");
    let fileType = uriParts[uriParts.length - 1];
    formData.append("photos", {
      uri: u,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });
  });

  let options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };
  
  return fetch(
    `${urlApi}?title=${title}&author=${author}&location=${location}&category=${category}&condition=${condition}`,
    options
  );
};
