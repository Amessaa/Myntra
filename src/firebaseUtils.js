
import { getDownloadURL, ref } from "./firebase";
import { storage } from "./firebase"; // Ensure you import your Firebase storage instance correctly

async function getHttpsUrl(gsUrl) {
  const storageRef = ref(storage, gsUrl.replace("gs://", ""));
  try {
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  } catch (error) {
    console.error("Error getting download URL:", error);
    return null;
  }
}

export { getHttpsUrl };
