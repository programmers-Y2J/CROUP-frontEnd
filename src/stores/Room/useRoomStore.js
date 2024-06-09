import { create } from 'zustand';

export const usePlayListStore = create((set) => ({
  playList: [],
  setPlayList: (listArr) => set(() => ({ playList: listArr })),
}));

export const useRoomDataStore = create((set) => ({
  roomData: { roomId: '', host: '', playListId: '', title: '', description: '' },
  setRoomData: (roomDataObj) => set(() => ({ roomData: roomDataObj })),
  roomMemberCount: 0,
  setRoomMemberCount: (updatedMemberCount) => set(() => ({ roomMemberCount: updatedMemberCount })),
}));

export const useCurrentMusicStore = create((set) => ({
  currentMusic: { title: '', videoId: '' },
  setCurrentMusic: (currentMusicObj) => set(() => ({ currentMusic: currentMusicObj })),
  isPlaying: false,
  setIsPlaying: (currentPlaying) => set(() => ({ isPlaying: currentPlaying })),
}));
