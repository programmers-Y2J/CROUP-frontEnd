import { ScrollArea } from '@ui/scroll-area';
import { Input } from '@ui/input';
import useQuestionsQuery from '@/hooks/useQuestionsQuery';
import QuestionListItem from './QuestionListItem';

function QuestionList({ clickTabFn, setActiveTab }) {
  const { data, isSuccess, isError, error } = useQuestionsQuery();
  if (isError) console.log(error);
  if (isSuccess) {
    return (
      <div className="p-4 flex-1 overflow-auto">
        <Input type="search" placeholder="Search" className="mb-4" />
        <ScrollArea className="h-[500px]">
          <div className="space-y-4">
            {data.data.qnaList.map((item) => (
              <QuestionListItem
                key={item.questionId}
                questionId={item.questionId}
                title={item.title}
                nickName={item.nickName}
                content={item.content}
                clickTabFn={clickTabFn}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  }
}

export default QuestionList;
