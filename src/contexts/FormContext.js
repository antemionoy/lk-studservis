import { createContext } from 'react';

export default createContext({
  values: [],
  erorrs: {},
  setValues: () => {},
  setErrors: () => {},
});
