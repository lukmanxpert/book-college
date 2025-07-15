import { Public } from "@/components/CheckAuth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <Card className="max-w-sm min-w-xs lg:min-w-sm">
      <CardHeader>
        <CardTitle className="text-xl w-full">Login</CardTitle>
        <CardDescription>
          Enter your email bellow to login in your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <div className="mt-4">
          <p className="text-center">
            Or Login With
          </p>
          <SocialLogin />
        </div>
      </CardContent>
      <Public />
    </Card>
  );
}