import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function CreateRoom() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">방만들기</Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[800px] grid grid-cols-[1fr_290px] gap-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="방 제목을 입력해 주세요." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" className="resize-none" placeholder="방 설명을 입력해 주세요." rows={3} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" placeholder="카테고리A, 카테고리B, 카테고리C..." />
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <div className="grid gap-2">
              <Label htmlFor="youtube">YouTube Url</Label>
              <Input id="youtube" placeholder="유튜브 재생목록 url을 입력해 주세요." />
            </div>
            <div className="flex items-end gap-2">
              <Button variant="outline">확인</Button>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button>생성</Button>
          </div>
        </div>
        <div className="bg-muted rounded-lg w-[290px] h-[300px] flex items-center justify-center m-auto" />
      </DialogContent>
    </Dialog>
  );
}

export default CreateRoom;
