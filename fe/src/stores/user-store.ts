import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const USER_LOGIN_STEP = [ 'Create-New-Access-Code-By-Phone', 'Create-New-Access-Code-By-Email', 'Validate-Code-By-Phone', 'Validate-Code-By-Mail' ] as const

type UserLoginStep = (typeof USER_LOGIN_STEP)[number];

type UserState = {
  phone: number;
  loginStep: UserLoginStep;
};

type UserActions = {
  getPhoneNumber: () => number;
  setPhoneNumber: (phone: number) => void;
  getLoginStep: () => UserLoginStep;
  setLoginStep: (string: UserLoginStep) => void;
};

const initialState: UserState = {
  phone: 0,
  loginStep: 'Create-New-Access-Code-By-Phone',
}

const useUserStore = create(immer<UserState & UserActions>((set, get) => ({
  ...initialState,
  getPhoneNumber: () => {
    return get().phone;
  },
  setPhoneNumber: (phone: number) => set((state) => {
    state.phone = phone;
  }),
  getLoginStep() {
    return get().loginStep;
  },
  setLoginStep: (loginStep: UserLoginStep) => set((state) => {
    state.loginStep = loginStep;
  }),
})));

export {
  useUserStore,
  type UserLoginStep,
};
