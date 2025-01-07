import { setMotionToggle as setMotionToggleSlice } from "@/redux/slices/motionSlice";
import { useDispatch, useSelector } from "react-redux";

const useMotionState = () => {
  const dispatch = useDispatch();

  const isMotion = useSelector((state) => state.motion);
  const setMotionToggle = (parameter) =>
    dispatch(setMotionToggleSlice(parameter));

  return { isMotion, setMotionToggle };
};

export default useMotionState;
