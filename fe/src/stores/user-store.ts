import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const USER_LOGIN_STEP = [ 'Login-Screen', 'Create-New-Access-Code-By-Phone', 'Create-New-Access-Code-By-Email', 'Validate-Code-By-Phone', 'Validate-Code-By-Email' ] as const

type UserLoginStep = (typeof USER_LOGIN_STEP)[number];

type UserState = {
  phone: number;
  email: string;
  loginStep: UserLoginStep;
};

type UserActions = {
  setPhoneNumber: (phone: number) => void;
  setEmail: (email: string) => void;
  setLoginStep: (string: UserLoginStep) => void;
};

const initialState: UserState = {
  phone: 0,
  email: '',
  loginStep: 'Login-Screen',
}

const useUserStore = create(immer<UserState & UserActions>((set, get) => ({
  ...initialState,
  getPhoneNumber: () => {
    return get().phone;
  },
  setPhoneNumber: (phone: number) => set((state) => {
    state.phone = phone;
  }),
  setEmail: (email) => set((state) => {
    state.email = email;
  }),
  setLoginStep: (loginStep: UserLoginStep) => set((state) => {
    state.loginStep = loginStep;
  }),
})));

export {
  USER_LOGIN_STEP,
  useUserStore,
  type UserLoginStep,
};
