import { Card, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { usePostStore } from '@/stores/Room/useRoomStore';

function QuestionListItem({ title, userName, content, comments, clickTabFn, setActiveTab }) {
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);

  const handleClickItem = () => {
    setCurrentPost({
      title,
      userName,
      content,
      comments,
    });
    clickTabFn('post');
    setActiveTab('post');
  };

  return (
    <button onClick={handleClickItem} type="button" className="text-left">
      <Card
        onMouseEnter={(e) => e.currentTarget.classList.add('bg-muted')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('bg-muted')}>
        <CardContent>
          <div className="flex items-center justify-between">
            <h2 className="font-bold">{title}</h2>
            <p className="text-[0.75rem] text-muted-foreground">{userName}</p>
          </div>
          <p className="mt-2 text-[0.75rem] line-clamp-3">{content}</p>
          <div className="mt-2 space-x-2">
            <Badge variant="default">meeting</Badge>
            <Badge variant="default">work</Badge>
            <Badge variant="default">important</Badge>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

export default QuestionListItem;
