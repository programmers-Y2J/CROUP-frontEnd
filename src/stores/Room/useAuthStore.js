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

export const usePostStore = create((set) => ({
  currentPost: {
    title: '',
    userName: '',
    content:
      'Hi, lets have a meeting tomorrow to discuss the project. Ive been reviewing the project details and have some ideas Id like to share. Its crucial that we align on our next steps to ensure the projects success.',
    date: '',
    comments: [],
  },
  setCurrentPost: (currentPostObj) =>
    set(() => ({
      currentPost: currentPostObj,
    })),
}));
