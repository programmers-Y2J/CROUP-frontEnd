// import React from 'react';
// import styled from 'styled-components';
// import LeftBar from '../components/Member/LeftBar';
// import RegisterForm from '../components/Register/RegisterForm';

// const RegisterContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
// `;
// function Register() {
//   const text = '<div>환영합니다</div><br />거의 다 왔어요<br /><br /> 즐거운 집중까지 마지막 스텝';
//   return (
//     <RegisterContainer>
//       <LeftBar text={text} />
//       <RegisterForm />
//     </RegisterContainer>
//   );
// }

// export default Register;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/r3ZNZ3fBSXE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@ui/typography/TypographyH1';

function Register() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
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
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="비밀번호" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" placeholder="비밀번호 확인" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input id="nickname" placeholder="닉네임" required />
            </div>
            <p className="text-muted-foreground">
              이미 계정이 있으신가요? <Button variant="link">로그인</Button>
            </p>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
