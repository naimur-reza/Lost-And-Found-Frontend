const uploadImage = async (file: any) => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=f55c73443021ed1be6ed658d21091e38`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
};

export default uploadImage;
