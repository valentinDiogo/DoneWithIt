import client from "./client";
import { storage } from "./config";

const endpoint = "/listing";

const getListings = () => client.get(endpoint);

const addListing = async (listing, onUploadProgress) => {
  const images = [];
  if (listing.images) {
    await Promise.all(
      listing.images.map(async (image, index) => {
        const fetchImage = await fetch(image);
        const blob = await fetchImage.blob();
        const storageRef = storage.ref();
        const imageRef = storageRef.child(listing.title + index);
        await imageRef.put(blob);
        const url = await imageRef.getDownloadURL();
        images.push({ url });
      })
    );
  }

  return client.post(
    endpoint,
    {
      title: listing.title,
      description: listing.description,
      price: parseInt(listing.price),
      categoryId: listing.category.value,
      images,
      location: listing.location,
      userId: 1,
    },
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    }
  );
};

export default {
  getListings,
  addListing,
};
