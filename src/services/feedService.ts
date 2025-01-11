import axios from "axios";

export const sendImpression = async (itemId: string) => {
  try {
    await axios.get(`https://backend.tedooo.com/?itemId=${itemId}`);
  } catch (error) {
    console.error(`Error sending impression for item ${itemId}:`, error);
  }
};
