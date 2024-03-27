import { useQuery } from "@tanstack/react-query";

import useAxiosOpen from "./useAxiosOpen";

const useMenu = () => {
  const axiosOpen = useAxiosOpen();
  const {
    data: menu = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosOpen.get("/food_items");
      return res.data;
    },
  });
  const { result: AllMenu = [] } = menu;
  return [AllMenu, refetch, isLoading];
};

export default useMenu;
