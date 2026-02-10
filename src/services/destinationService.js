import { API_BASE_URL } from "../config/api";

export const fetchDestinations = async () => {
  const res = await fetch(`${API_BASE_URL}/destinations`);
  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }
  return res.json();
};
