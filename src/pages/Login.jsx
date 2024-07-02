// import React from 'react';
// import styled from 'styled-components';
// import LeftBar from '../components/Member/LeftBar';
// import LoginForm from '../components/Login/LoginForm';

// const LoginContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
// `;
// function Login() {
//   const text = '<div>즐거운 <br /> 집중을 위한 <br /> 준비가 되셨나요?</div>';
//   return (
//     <LoginContainer>
//       <LeftBar text={text} />
//       <LoginForm />
//     </LoginContainer>
//   );
// }

// export default Login;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kAshk4ywjLi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { TypographyH1 } from '@ui/typography/TypographyH1';

function Login() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className=" flex justify-center items-center">
        <div className="h-[550px] w-[600px] relative rounded-3xl bg-primary">
          <div className="absolute left-20 top-20 flex gap-4 flex-col">
            <TypographyH1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
              즐거운
            </TypographyH1>
            <TypographyH1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
              집중을 위한
            </TypographyH1>
            <TypographyH1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
              준비가 되셨나요 ?
            </TypographyH1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="mx-auto w-full max-w-[400px] space-y-6">
          <div className="space-y-2 text-left">
            <h1 className="text-3xl font-bold">Croup</h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link">비밀번호를 잊으셨나요 ?</Button>
              </div>
              <Input id="password" placeholder="비밀번호" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            계정이 없으신가요 ? <Button variant="link">회원가입</Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
