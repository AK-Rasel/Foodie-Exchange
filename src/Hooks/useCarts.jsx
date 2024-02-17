import { useQuery } from "@tanstack/react-query";
import useAxiosProtect from "./useAxiosProtect";
import useAuthContext from "./useAuthContext";

const useCarts = () => {
  const axiosProtected = useAxiosProtect();
  const { user } = useAuthContext();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosProtected.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCarts;
