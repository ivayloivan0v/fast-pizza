import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { drecreaseItemQuantity, increaseItemQuanitity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const onClickDecreaseQuantity = () =>
    dispatch(drecreaseItemQuantity(pizzaId));
  const onClickIncreaseQuantity = () =>
    dispatch(increaseItemQuanitity(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={onClickDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={onClickIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}
