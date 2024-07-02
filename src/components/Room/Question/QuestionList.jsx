import { ScrollArea } from '@ui/scroll-area';
import { Input } from '@ui/input';
import QuestionListItem from './QuestionListItem';

const QuestionData = [
  {
    title: 'Meeting Tomorrow',
    user: 'William Smith',
    content:
      'Hi, lets have a meeting tomorrow to discuss the project. Ive been reviewing the project details and have some ideas Id like to share. Its crucial that we align on our...',
    tags: 'work',
    comments: [
      {
        userName: 'sebell',
        date: '2024년 6월 28일',
        comment: '반갑습니다.',
      },
    ],
  },
  {
    title: 'Meeting Tomorrow',
    user: 'William Smith',
    content:
      'Hi, lets have a meeting tomorrow to discuss the project. Ive been reviewing the project details and have some ideas Id like to share. Its crucial that we align on our...',
    tags: 'work',
    comments: [
      {
        userName: 'sebell',
        date: '2024년 6월 28일',
        comment: '반갑습니다.',
      },
    ],
  },
  {
    title: 'Meeting Tomorrow',
    user: 'William Smith',
    content:
      'Hi, lets have a meeting tomorrow to discuss the project. Ive been reviewing the project details and have some ideas Id like to share. Its crucial that we align on our...',
    tags: 'work',
    comments: [
      {
        userName: 'sebell',
        date: '2024년 6월 28일',
        comment: '반갑습니다.',
      },
    ],
  },
  {
    title: 'Hello Tomorrow',
    user: 'William Smith',
    content:
      'Hi, lets have a meeting tomorrow to discuss the project. Ive been reviewing the project details and have some ideas Id like to share. Its crucial that we align on our...',
    tags: 'work',
    comments: [
      {
        userName: 'sebell',
        date: '2024년 6월 28일',
        comment: '반갑습니다.',
      },
    ],
  },
];

function QuestionList({ clickTabFn, setActiveTab }) {
  return (
    <div className="p-4 flex-1 overflow-auto">
      <Input type="search" placeholder="Search" className="mb-4" />
      <ScrollArea className="h-[500px]">
        <div className="space-y-4">
          {QuestionData.map((item) => (
            <QuestionListItem
              key={item.title}
              title={item.title}
              userName={item.user}
              content={item.content}
              comments={item.comments}
              clickTabFn={clickTabFn}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default QuestionList;
