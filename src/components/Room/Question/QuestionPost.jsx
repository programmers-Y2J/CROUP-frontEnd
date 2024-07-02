import { ScrollArea } from '@ui/scroll-area';
import { Button } from '@ui/button';
import { Input } from '@ui/input';

function QuestionPost() {
  return (
    <div className="flex flex-col w-1/2">
      <header className="flex items-center justify-between p-4 border-b h-14">
        <div className="flex items-center">
          <Input type="text" placeholder="제목을 입력해 주세요." className="flex-1 mr-4 w-[350px]" />
        </div>
        <p className="text-[0.75rem] text-muted-foreground">William Smith</p>
      </header>
      <div className="p-4 flex-1 overflow-auto">
        <ScrollArea className="h-[400px]">
          <p className="mt-4 text-sm">
            Hi, lets have a meeting tomorrow to discuss the project. Ive been reviewing the project details and have
            some ideas Id like to share. Its crucial that we align on our next steps to ensure the projects success.
          </p>
          <p className="mt-4 text-sm">
            Please come prepared with any questions or insights you may have. Looking forward to our meeting!
          </p>
          <p className="mt-4 text-sm">Best regards, William</p>
        </ScrollArea>
      </div>
      <footer className="flex items-center justify-end p-4 border-t h-14">
        <Input type="text" placeholder="대표 카테고리를 입력해 주세요." className="w-[200px]" />
        <Button size="sm" className="ml-4">
          Send
        </Button>
      </footer>
    </div>
  );
}

export default QuestionPost;
