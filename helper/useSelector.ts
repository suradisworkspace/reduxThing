import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import {RootState} from '../redux';

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export default useSelector;
