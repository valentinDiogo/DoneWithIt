import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://us-central1-donewithitapi.cloudfunctions.net/",
});

export default apiClient;
