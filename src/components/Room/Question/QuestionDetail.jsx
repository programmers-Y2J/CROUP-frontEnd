import useQuetionDetailQuery from '@/hooks/useQuestionDetailQuery';
import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';
import { ScrollArea } from '@ui/scroll-area';
import { Button } from '@ui/button';
import { Input } from '@ui/input';

function QuestionDetail() {
  const { data, error, isError, isSuccess } = useQuetionDetailQuery();

  if (isError) console.log(error);
  if (isSuccess) {
    return (
      <div className="flex flex-col w-1/2">
        <header className="flex items-center justify-between p-4 border-b h-14">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>{data.data.nickName.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[0.75rem] text-muted-foreground">{data.data.nickName}</p>
              <h2 className="font-bold">{data.data.title}</h2>
            </div>
          </div>
          <p className="text-[0.75rem] text-muted-foreground">{data.data.createdAt}</p>
        </header>
        <div className="p-4 flex-1 overflow-auto">
          <ScrollArea className="h-[400px]">
            <p className="mt-4 text-sm">{data.data.content}</p>
          </ScrollArea>
          <div className="border-t pt-4">
            <div className="space-y-4">
              {data.data.comments.map((item) => {
                return (
                  <div key={item.nickName + item.createdAt} className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>{item.nickName.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">{item.nickName}</h3>
                        <p className="text-[0.75rem] text-muted-foreground">{item.createdAt}</p>
                      </div>
                      <p className="text-sm">{item.content}</p>
                    </div>
                  </div>
                );
              })}
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
}

export default QuestionDetail;
