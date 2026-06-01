"use client"
import { GalleryVerticalEnd, GitBranchPlus } from "lucide-react"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [emailValue, setEmailValue] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'request' | 'verify'>('request')
  const [loading, setLoading] = useState(false)
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({

      provider: "google",
      callbackURL: "/dashboard"
    });
    toast.success("Logged in successfully with Google")
    console.log(data);

  }
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard"
    });
    toast.success("Logged in successfully with GitHub")
    console.log(data);

  }
  const onRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await authClient.emailOtp.sendVerificationOtp({ email: emailValue, type: 'sign-in' })
      toast.success('OTP sent to your email')
      setStep('verify')
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Failed to send OTP')
    } finally {
      setLoading(false)
    }
  }

  const onVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data, error } = await authClient.signIn.emailOtp({ email: emailValue, otp })
      if (error) {
        toast.error(error.message || 'Invalid code')
        return
      }
      toast.success('Signed in')
      router.push('/dashboard')
    } catch (err: any) {
      console.error(err)
      toast.error('Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  const onResend = async () => {
    setLoading(true)
    try {
      await authClient.emailOtp.sendVerificationOtp({ email: emailValue, type: 'sign-in' })
      toast.success('OTP resent')
    } catch (err: any) {
      console.error(err)
      toast.error('Failed to resend')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={step === 'request' ? onRequestOtp : onVerifyOtp}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
            <FieldDescription>
              Don&apos;t have an account? <a href="#">Sign up</a>
            </FieldDescription>
          </div>
          {step === 'request' ? (
            <>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </Field>
              <Field>
                <Button type="submit" disabled={loading || !emailValue}>
                  {loading ? 'Sending...' : 'Send code'}
                </Button>
              </Field>
            </>
          ) : (
            <>
              <Field>
                <FieldLabel htmlFor="otp">Enter code</FieldLabel>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Field>
              <Field>
                <Button type="submit" disabled={loading || !otp}>
                  {loading ? 'Verifying...' : 'Verify & Sign in'}
                </Button>
              </Field>
              <Field>
                <Button type="button" variant="ghost" onClick={onResend} disabled={loading}>
                  Resend code
                </Button>
              </Field>
            </>
          )}
          <FieldSeparator>Or</FieldSeparator>
          <Field className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" type="button" onClick={handleGithubLogin}>
              <GitBranchPlus />
              Continue with GitHub
            </Button>
            <Button variant="outline" type="button" onClick={handleGoogleLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Continue with Google
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
