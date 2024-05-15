import { create } from 'zustand';

const useRoomStore = create((set) => ({
  currentContent: 'chat',
  setContent: (content) => set(() => ({ currentContent: content })),
}));

export default useRoomStore;
