import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CommonInput from '../../components/CommonInput';
import CommonButton from '../../components/CommonButton';

import { LoginSchema } from './schema/login.schema';
import type { LoginFormType } from './schema/login.schema';
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../api/auth.api';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✔ Correct

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      console.log('Login Success:', res);
      const user = res.data;
      const token = res.token;
      login(user, token);
      toast.success('Login Successful 🎉', { toastId: 'LOGIN_SUCCESS' });
      navigate("/");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Login Failed ❌', {
        toastId: 'LOGIN_ERROR',
      });
    },
  });

  const onSubmit = (data: LoginFormType) => {
    if (!loginMutation.isPending) {
      loginMutation.mutate(data);
    }
  };

  return (
    <div className="flex flex-wrap w-full min-h-screen">
      {/* Left Section - Image */}
      <div className="flex flex-1 min-h-[300px] justify-center items-center hidden xs:flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
          alt="Hero"
          className="w-2/5 max-w-[500px] object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 justify-center items-center p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
        >
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Login to Your Account
          </h2>

          {/* Email */}
          <CommonInput
            label="Email"
            placeholder="you@example.com"
            required
            type="email"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm -mt-4 mb-3">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <CommonInput
            label="Password"
            placeholder="••••••••"
            required
            type="password"
            {...register('password')}
            disabled={loginMutation.isPending}
          />
          {errors.password && (
            <p className="text-red-500 text-sm -mt-4 mb-3">
              {errors.password.message}
            </p>
          )}

          {/* Forgot Password */}
          <div
            onClick={() => navigate('/forgot-password')}
            className="text-right mb-5 cursor-pointer"
          >
            <span className="text-green-600 hover:text-green-800 text-sm">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <CommonButton
            title={loginMutation.isPending ? 'Please wait...' : 'Login'}
            type="submit"
            disabled={loginMutation.isPending}
          />

          {/* Sign Up Link */}
          <p
            onClick={() => navigate('/register')}
            className="text-center text-sm text-gray-600 mt-6 cursor-pointer"
          >
            Don’t have an account?{' '}
            <span className="text-green-600 font-semibold">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
