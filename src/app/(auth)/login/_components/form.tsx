"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function LoginformBody() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        email: values?.email,
        password: values?.password,
        redirect: false,
      });
      console.log(res?.error)

      if (res?.error) {
        throw new Error(res.error);
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full ">
      <CardContent className="rounded-lg">
        <p className="text-2xl font-bold pt-7 pb-2  text-center">Login</p>
        <p className="text-center text-sm text-gray-500 font-medium">
          Join House Lagbe and Find Your Perfect Home Today
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="write your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Write your password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <span className="flex items-center">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-4 text-gray-900">OR</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>

            <div className="flex  justify-center gap-6">
              <div
                className="group flex cursor-pointer items-center gap-3 border rounded-lg border-gray-300 px-4 py-2
                hover:bg-gradient-to-br hover:from-black hover:to-blue-950/10 hover:text-white
                transition-all duration-300 ease-in-out delay-150"
              >
                <FcGoogle
                  size={25}
                  className="transition-colors duration-300 ease-in-out group-hover:text-white"
                />
                <span className="text-sm font-medium transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign Up with Google
                </span>
              </div>

              <div
                className="group flex cursor-pointer items-center gap-3 border rounded-lg border-gray-300 px-4 py-2
                hover:bg-gradient-to-br hover:from-black hover:to-blue-950/10 hover:text-white
                transition-all duration-300 ease-in-out delay-150"
              >
                <FaFacebookF
                  size={25}
                  className="transition-colors duration-300 ease-in-out group-hover:text-white"
                />{" "}
                <span className="text-sm font-medium transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign Up with Facebook
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-br from-black to-blue-950 hover:bg-gradient-to-br hover:from-black hover:to-blue-950/80"
            >
              Submit{" "}
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            </Button>
          </form>
        </Form>
        <p className="text-center mb-3 text-sm text-gray-500 font-medium">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-950">
            Sign Up
          </Link>
        </p>
        <p className="text-center text-sm text-gray-500 font-medium">
          forgot password?{" "}
          <Link href="/reset-email" className="text-blue-950">
            Reset Password
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
