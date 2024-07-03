import create from 'zustand';

const useAuthStore = create((set) => ({
  token: null,
  isLoggedIn: false,
  setToken: (token) => {
    set({ token, isLoggedIn: !!token });
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  },
  checkToken: () => {
    const token = localStorage.getItem('token');
    set({ token, isLoggedIn: !!token });
  },
}));

export default useAuthStore;
