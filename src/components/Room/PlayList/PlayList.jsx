import { ScrollArea } from '@ui/scroll-area';
import { usePlayListStore } from '../../../stores/Room/useAuthStore';
import PlayListItem from './PlayListItem';

function PlayList() {
  const playList = usePlayListStore((state) => state.playList);

  return (
    <div className="w-[298px] h-[495px] bg-background rounded-lg border overflow-hidden shadow-lg">
      <ScrollArea className="h-full">
        <div className="p-3">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-2xl font-bold">My Playlist</div>
          </div>
          <div className="space-y-2">
            {playList.map((listItem) => (
              <PlayListItem
                key={listItem.videoId}
                title={listItem.musicTitle}
                imgSrc={listItem.musicThumbnail}
                channel={listItem.musicChannelTitle}
                videoId={listItem.videoId}
              />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default PlayList;
