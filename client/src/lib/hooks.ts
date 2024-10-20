import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { AppDispatch, AppStore, RootType } from "./store";

// to select a state from the global store
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;

// to be used to dispatch an action from a component to change the state
export const useAppDispatch = () => useDispatch<AppDispatch>();

// to access the global store
export const useAppStore = () => useStore<AppStore>();
