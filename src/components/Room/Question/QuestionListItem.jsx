import { Card, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { useNavigate } from 'react-router-dom';
import { useQuestionStore } from '@/stores/Room/useAuthStore';

function QuestionListItem({ questionId, title, nickName, content, setActiveTab }) {
  const navigate = useNavigate();
  const setCurrentQuestion = useQuestionStore((state) => state.setCurrentQuestion);

  const handleClickItem = () => {
    setActiveTab('post');
    setCurrentQuestion(questionId);
    navigate(`question/${questionId}`);
  };

  return (
    <button onClick={handleClickItem} type="button" className="text-left">
      <Card
        className="w-[570px]"
        onMouseEnter={(e) => e.currentTarget.classList.add('bg-muted')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('bg-muted')}>
        <CardContent>
          <div className="flex items-center justify-between">
            <h2 className="font-bold">{title}</h2>
            <p className="text-[0.75rem] text-muted-foreground">{nickName}</p>
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
