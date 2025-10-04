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
import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "@/lib/auth";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(1),
  email: z.string(),
  phoneNmber: z.string().min(1),
  password: z.string(),
});

export default function SignUpformBody() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const signUpMutation = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success(data.message || "User created successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create user");
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    signUpMutation.mutate(values);
  };

  return (
    <Card className="w-full ">
      <CardContent className="rounded-lg">
        <p className="text-2xl font-bold pt-7 pb-2  text-center">Sign Up</p>
        <p className="text-center text-sm text-gray-500 font-medium">
          Join House Lagbe and Find Your Perfect Home Today
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-10  mx-auto"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write your full name"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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
              name="phoneNmber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write your phone number"
                      type=""
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
              Sign Up{" "}
              {signUpMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
