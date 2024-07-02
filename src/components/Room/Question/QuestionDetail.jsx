import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';
import { ScrollArea } from '@ui/scroll-area';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { usePostStore } from '@/stores/Room/useRoomStore';

function QuestionDetail() {
  const currentPost = usePostStore((state) => state.currentPost);

  return (
    <div className="flex flex-col w-1/2">
      <header className="flex items-center justify-between p-4 border-b h-14">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>WS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[0.75rem] text-muted-foreground">{currentPost.userName}</p>
            <h2 className="font-bold">{currentPost.title}</h2>
          </div>
        </div>
        <p className="text-[0.75rem] text-muted-foreground">{currentPost.date}</p>
      </header>
      <div className="p-4 flex-1 overflow-auto">
        <ScrollArea className="h-[400px]">
          <p className="mt-4 text-sm">{currentPost.content}</p>
        </ScrollArea>
        <div className="border-t pt-4">
          <div className="space-y-4">
            {currentPost.comments.map((item) => {
              return (
                <div key={item.userName + item.date} className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{item.userName}</h3>
                      <p className="text-[0.75rem] text-muted-foreground">{item.date}</p>
                    </div>
                    <p className="text-sm">{item.comment}</p>
                  </div>
                </div>
              );
            })}

            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Bob Johnson</h3>
                  <p className="text-[0.75rem] text-muted-foreground">Oct 22, 2023</p>
                </div>
                <p className="text-sm">
                  Im excited to hear about your ideas. This project is crucial for our team, so Ill make sure to come
                  prepared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center p-4 border-t h-14">
        <Input type="text" placeholder="댓글을 입력해 주세요." className="flex-1 mr-4" />
        <Button size="sm" className="ml-4">
          Send
        </Button>
      </footer>
    </div>
  );
}

export default QuestionDetail;
