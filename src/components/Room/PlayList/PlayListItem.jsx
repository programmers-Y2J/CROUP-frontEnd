import { useCurrentMusicStore } from '../../../stores/Room/useAuthStore';

function PlayListItem({ title, imgSrc, channel, videoId }) {
  const setCurrentMusic = useCurrentMusicStore((state) => state.setCurrentMusic);
  const setIsPlaying = useCurrentMusicStore((state) => state.setIsPlaying);
  const currentMusic = useCurrentMusicStore((state) => state.currentMusic);

  const isMatch = videoId === currentMusic.videoId;

  const handleClickItem = () => {
    setCurrentMusic({
      title,
      videoId,
    });
    setIsPlaying(true);
  };
  return (
    <button
      type="button"
      onClick={handleClickItem}
      key={videoId}
      className={`flex gap-2 rounded-md p-2 transition-colors cursor-pointer text-left ${isMatch ? 'bg-primary' : 'hover:bg-[#DEF2FF]'}`}>
      <img
        src={imgSrc}
        alt={`Album Cover ${title}`}
        className="rounded-md h-[56px] w-[100px] object-cover flex-shrink-0"
      />
      <div>
        <div className={`font-semibold text-sm line-clamp-2 ${isMatch && 'text-white'}`}>{title}</div>
        <div className={`text-xs text-muted-foreground font-medium line-clamp-1 ${isMatch && 'text-white'}`}>
          {channel}
        </div>
      </div>
    </button>
  );
}

export default PlayListItem;
