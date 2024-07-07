const { create } = require('zustand');

export const useUserData = create((set) => ({
  userData: { userId: 'bbb', userName: 'sebell', email: 'example@example.com' },
  setUserData: () => set(() => ({ userData: {} })),
}));
