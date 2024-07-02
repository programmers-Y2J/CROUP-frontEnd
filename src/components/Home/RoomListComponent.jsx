import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { Command, CommandItem, CommandList } from '@ui/command';
import { SearchIcon, ChevronsUpDownIcon } from 'lucide-react';
import useApiRequest from '../../hooks/useApiRequest';
import RoomComponent from './RoomComponent';
import CreateRoom from '../Modal/CreateRoom';

const fetchRooms = async (apiRequest) => {
  const response = await apiRequest({
    method: 'GET',
    url: '/rooms',
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  });
  return response.rooms;
};

const RoomData = [
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title',
    description: 'Explore the wonders of the natural world with our stunning photography.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title B',
    description: 'Witness the beauty of the world through the lens of our talented photographers.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title C',
    description: 'Immerse yourself in the beauty of the great outdoors with our stunning nature photography.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title',
    description: 'Explore the wonders of the natural world with our stunning photography.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title B',
    description: 'Witness the beauty of the world through the lens of our talented photographers.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title C',
    description: 'Immerse yourself in the beauty of the great outdoors with our stunning nature photography.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title C',
    description: 'Immerse yourself in the beauty of the great outdoors with our stunning nature photography.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title C',
    description: 'Immerse yourself in the beauty of the great outdoors with our stunning nature photography.',
    userName: 'sebell',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/xPAWXsZ_9ZM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYGgbHMjZ2_G4sDSZsKCYmhW3ADw',
    tag: 'tag',
    title: 'Room Title C',
    description: 'Immerse yourself in the beauty of the great outdoors with our stunning nature photography.',
    userName: 'sebell',
  },
];

function RoomList() {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('최신순');
  const { apiRequest } = useApiRequest();
  const navigate = useNavigate();
  const { data, error } = useQuery('rooms', () => fetchRooms(apiRequest));
  const rooms = Array.isArray(data) ? data : [];

  if (error) {
    navigate('/login');
  }

  const handleClickSelect = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="flex relative justify-end px-6 items-center mb-4">
        <div className=" flex items-center gap-2">
          <Popover open={open}>
            <PopoverTrigger asChild>
              <Button
                onClick={handleClickSelect}
                variant="outline"
                role="combobox"
                className="w-[150px] justify-between absolute left-6">
                {selectValue}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[150px] p-0">
              <Command>
                <CommandList>
                  <CommandItem
                    onSelect={(currentValue) => {
                      setSelectValue(currentValue);
                      setOpen(false);
                    }}>
                    인기순
                  </CommandItem>
                  <CommandItem
                    onSelect={(currentValue) => {
                      setSelectValue(currentValue);
                      setOpen(false);
                    }}>
                    최신순
                  </CommandItem>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <CreateRoom />
        </div>
      </div>
      <div className="w-full max-w-[1300px] mx-auto overflow-x-auto py-6 px-4 md:px-6">
        <div className="grid grid-cols-3 gap-5 min-w-max">
          {rooms.map((item) => (
            <RoomComponent
              key={item.roomId}
              title={item.roomTitle}
              tag={item.tag || 'tag'}
              description={item.roomDescription}
              thumbnail={item.roomThumbnail}
              userName={item.userName || 'sebell'}
              roomId={item.roomId}
            />
          ))}
          {RoomData.map((item) => (
            <RoomComponent
              key={item.userName + item.title}
              title={item.title}
              tag={item.tag}
              description={item.description}
              thumbnail={item.thumbnail}
              userName={item.userName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomList;
