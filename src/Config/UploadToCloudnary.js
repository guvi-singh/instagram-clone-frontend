export const uploadToCloudnarys = async (image) => {
  if (image) {
    const data = new FormData();
    data.append("upload_preset", "instagram");
    data.append("cloud_name", "diup5xigo");
    data.append("file", image); // Append the image file to FormData

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diup5xigo/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const filedata = await res.json();
    console.log("filedata ", filedata);
    return filedata.url.toString();
  }
};
