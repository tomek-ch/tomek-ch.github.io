import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

const searchQuery = atom("");

export const useSearchQuery = () => {
  const $searchQuery = useStore(searchQuery);
  return [$searchQuery, searchQuery.set] as const;
};
