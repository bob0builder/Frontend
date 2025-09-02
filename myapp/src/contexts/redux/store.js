import { configureStore} from '@reduxjs/toollkit';
import counterReducer from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});