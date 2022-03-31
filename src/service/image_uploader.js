class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mv9crka5');
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dacrqvzln/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );

    return await response.json();
  }
}
export default ImageUploader;
