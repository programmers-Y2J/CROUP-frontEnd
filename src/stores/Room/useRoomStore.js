import { create } from 'zustand';

export const useRoomContentStore = create((set) => ({
  currentContent: 'chat',
  setContent: (content) => set(() => ({ currentContent: content })),
}));

export const usePlayListStore = create((set) => ({
  playList: [],
  setPlayList: (listArr) => set(() => ({ playList: listArr })),
}));

export const useRoomDataStore = create((set) => ({
  roomData: { roomId: '', host: '', playListId: '', title: '', description: '' },
  setRoomData: (roomDataObj) => set(() => ({ roomData: roomDataObj })),
}));

export const useCurrentMusicStore = create((set) => ({
  currentMusic: { title: '', videoId: '' },
  setCurrentMusic: (currentMusicObj) => set(() => ({ currentMusic: currentMusicObj })),
}));
