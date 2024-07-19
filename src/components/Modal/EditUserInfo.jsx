import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { Alert2 } from '@/components/Modal/Alert2';
import useModal from '@/hooks/useModal';
import useApiRequest from '@/hooks/useApiRequest';
import useAuthStore from '@/stores/Auth/useUserStore';

function EditUserInfo({ handleToggle }) {
  const [stateValue, setStateValue] = useState('비밀번호 변경');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const { isOpen, open, close } = useModal();
  const { setToken } = useAuthStore();
  const [navi, setNavi] = useState('');

  const handleValueChange = (value) => {
    setStateValue(value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  const { apiRequest } = useApiRequest();

  const mutation = useMutation(
    (data) =>
      apiRequest({
        method: 'put',
        url: stateValue === '비밀번호 변경' ? '/auth/password' : '/auth/name',
        data,
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }),
    {
      onSuccess: (data) => {
        setToken(data.token);
        setAlertMessage(
          stateValue === '비밀번호 변경' ? '비밀번호 변경에 성공했습니다.' : '닉네임 변경에 성공했습니다',
        );
        setAlertTitle('Success!');
        setNavi('/login');
        open();
      },
      onError: (error) => {
        setAlertMessage(
          stateValue === '비밀번호 변경' ? '비밀번호 변경에 실패했습니다..' : '닉네임 변경에 실패했습니다.',
        );
        setAlertTitle('Wait!');
        open();

        console.error(error);
      },
    },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await mutation.mutateAsync(
        stateValue === '비밀번호 변경'
          ? {
              email,
              newPassword: password,
            }
          : {
              newName: nickname,
            },
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {isOpen && <Alert2 title={alertTitle} message={alertMessage} onClose={close} navi={navi} />}
      <div className="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 flex justify-between items-start ">
        <div className="grid gap-4 mr-5">
          <button
            type="button"
            onClick={() => handleValueChange('비밀번호 변경')}
            className={`p-2 rounded cursor-pointer ${stateValue === '비밀번호 변경' ? 'bg-blue-100 font-black' : 'bg-transparent'}`}>
            비밀번호 변경
          </button>
          <button
            type="button"
            onClick={() => handleValueChange('닉네임 변경')}
            className={`p-2 rounded  ${stateValue === '닉네임 변경' ? 'bg-blue-100 font-black' : 'bg-transparent'}`}>
            닉네임 변경
          </button>
        </div>
        <div className="grid gap-4 border-l-2 border-dotted border-lightgray pl-10">
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="close"
            onClick={handleToggle}>
            <MdClose size={24} />
          </button>
          {stateValue === '비밀번호 변경' && (
            <>
              <div className="grid gap-2 w-80">
                <Label htmlFor="title">Email</Label>
                <Input
                  id="title"
                  placeholder="Email을 입력해 주세요."
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Password</Label>
                <Input
                  id="title"
                  placeholder="변경하실 Password를 입력해 주세요."
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </>
          )}
          {stateValue === '닉네임 변경' && (
            <div className="grid gap-2 w-80">
              <Label htmlFor="title">Nickname</Label>
              <Input
                id="title"
                placeholder="Nickname 입력해 주세요."
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
              />
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button onClick={handleSubmit}>변경</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUserInfo;
