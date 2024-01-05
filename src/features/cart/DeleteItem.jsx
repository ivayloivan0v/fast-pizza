import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  const handleOnClick = () => dispatch(deleteItem(pizzaId));
  return (
    <Button type="small" onClick={handleOnClick}>
      Delete
    </Button>
  );
}
