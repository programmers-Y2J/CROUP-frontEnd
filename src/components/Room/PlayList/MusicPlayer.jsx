'use client';

import { useCurrentMusicStore, usePlayListStore } from '@/stores/Room/useRoomStore';
import { Button } from '@ui/button';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from 'lucide-react';

function MusicPlayer() {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = useCurrentMusicStore();
  const playList = usePlayListStore((state) => state.playList);

  const handleClickPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClickSkip = (type) => {
    const currentIndex = playList.findIndex((item) => item.videoId === currentMusic.videoId);
    let updatedIndex = 0;
    if (type === 'next') updatedIndex = currentIndex + 1;
    if (type === 'prev') updatedIndex = currentIndex - 1;
    if (!playList[updatedIndex]) return;
    setCurrentMusic({
      title: playList[updatedIndex].musicTitle,
      videoId: playList[updatedIndex].videoId,
    });
    setIsPlaying(true);
  };

  return (
    <div className="shadow-sm border rounded-lg w-[298px]">
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold line-clamp-1">{currentMusic.title}</h3>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => handleClickSkip('prev')} variant="ghost" size="icon">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <Button onClick={handleClickPlay} variant="ghost" size="icon">
            {isPlaying ? <PauseIcon className="h-6 w-6" fill="fill" /> : <PlayIcon className="h-6 w-6" fill="fill" />}
          </Button>
          <Button onClick={() => handleClickSkip('next')} variant="ghost" size="icon">
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
