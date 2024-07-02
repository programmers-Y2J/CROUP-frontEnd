import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const MessageContainer = styled.li`
  /* width: 170px; */
  background: ${({ theme, $isMine }) => ($isMine ? theme.color[200] : theme.color[50])};
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: ${({ $isMine }) => ($isMine ? 'auto' : 0)};
  margin-right: ${({ $isMine }) => ($isMine ? 0 : 'auto')};

  > h5 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

function Message({ user, userId, message }) {
  const currentUser = localStorage.getItem('userId');
  const isMine = currentUser === userId;
  return (
    <MessageContainer $isMine={isMine}>
      <h5>{user}</h5>
      <p>{message}</p>
    </MessageContainer>
  );
}

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default Message;

//  <div className="flex items-start gap-4">
//               <Avatar className="w-8 h-8 rounded-full">
//                 <AvatarImage src="/placeholder-user.jpg" />
//                 <AvatarFallback>AC</AvatarFallback>
//               </Avatar>
//               <div className="grid gap-1 text-sm">
//                 <div className="flex items-center gap-2">
//                   <div className="font-medium">Alex</div>
//                   <div className="text-muted-foreground text-xs">2:40 PM</div>
//                 </div>
//                 <div className="bg-muted rounded-lg p-3">
//                   <p>Hey there! Hows it going?</p>
//                 </div>
//               </div>
//             </div>

/* <div className="flex items-start gap-4 justify-end">
  <div className="grid gap-1 text-sm">
    <div className="flex items-center gap-2 justify-end">
      <div className="font-medium">You</div>
      <div className="text-muted-foreground text-xs">2:41 PM</div>
    </div>
    <div className="bg-primary rounded-lg p-3 text-primary-foreground">
      <p>Im doing great, thanks for asking!</p>
    </div>
  </div>
  <Avatar className="w-10 h-10 rounded-full">
    <AvatarImage src="/placeholder-user.jpg" />
    <AvatarFallback>YO</AvatarFallback>
  </Avatar>
</div> */
