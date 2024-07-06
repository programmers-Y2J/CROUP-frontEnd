import create from 'zustand';

const useAuthStore = create((set) => ({
  token: null,
  userId: null,
  nickname: null,
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
  setUserId: (userId) => {
    set({ userId });
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
  },

  setNickname: (nickname) => {
    set({ nickname });
    if (nickname) {
      localStorage.setItem('nickname', nickname);
    } else {
      localStorage.removeItem('nickname');
    }
  },
}));

export default useAuthStore;
