import { Avatar, AvatarImage, AvatarFallback } from '@ui/avatar';

const myId = 'aaa';

function Message({ user, userId, message }) {
  const isMine = userId === myId;

  return (
    <div className={`flex items-start gap-4 ${isMine ? 'justify-end' : ''}`}>
      {!isMine && (
        <Avatar className="w-8 h-8 rounded-full">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>{user.slice(0, 2)}</AvatarFallback>
        </Avatar>
      )}
      <div className="grid gap-1 text-sm">
        <div className={`flex items-center gap-2 ${isMine ? 'justify-end' : ''}`}>
          <div className="font-medium">{user}</div>
        </div>
        <div className={`${isMine ? 'bg-primary text-primary-foreground' : 'bg-muted'} rounded-lg p-3`}>
          <p>{message}</p>
        </div>
      </div>
      {isMine && (
        <Avatar className="w-8 h-8 rounded-full">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>me</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

export default Message;
