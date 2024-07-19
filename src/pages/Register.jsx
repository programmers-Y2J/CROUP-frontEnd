import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@ui/typography/TypographyH1';
import useApiRequest from '@/hooks/useApiRequest';
import { Alert2 } from '@/components/Modal/Alert2';
import useModal from '@/hooks/useModal';

function Register() {
  const navigate = useNavigate();
  const { apiRequest } = useApiRequest();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCk, setPasswordCk] = useState('');
  const [nickName, setNickName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [navi, setNavi] = useState('');
  const { isOpen, open, close } = useModal();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCkChange = (e) => {
    setPasswordCk(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleLogin = () => {
    navigate('/login');
  };
  const mutation = useMutation(
    (data) =>
      apiRequest({
        method: 'post',
        url: '/auth/join',
        data,
      }),
    {
      onSuccess: (data) => {
        console.log(data);
        setAlertMessage('회원가입에 성공했습니다.');
        setAlertTitle('Success!');
        setNavi('/login');
        open();
      },
      onError: (error) => {
        setAlertMessage('회원가입에 실패했습니다.');
        setAlertTitle('Wait!');
        open();
        console.error(error);
      },
    },
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordCk) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    try {
      await mutation.mutateAsync({
        email,
        password,
        nickName,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {isOpen && <Alert2 title={alertTitle} message={alertMessage} onClose={close} navi={navi} />}
      <div className=" flex justify-center items-center">
        <div className="h-[550px] w-[600px] relative rounded-3xl bg-primary">
          <div className="absolute left-20 top-20 flex gap-4 flex-col">
            <TypographyH1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
              환영합니다
            </TypographyH1>
            <TypographyH1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
              거의 다 왔어요
            </TypographyH1>
            <TypographyH1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
              즐거운 집중까지 마지막 스탭 !
            </TypographyH1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">회원가입</h1>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                value={passwordCk}
                onChange={handlePasswordCkChange}
                placeholder="비밀번호 확인"
                type="password"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input id="nickname" placeholder="닉네임" value={nickName} onChange={handleNicknameChange} required />
            </div>
            <p className="text-muted-foreground">
              이미 계정이 있으신가요?{' '}
              <Button variant="link" onClick={handleLogin}>
                로그인
              </Button>
            </p>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
