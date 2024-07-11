import OtpLogin from "@/components/OtpLogin";

function LoginPage() {
  return (
    <div>
      <h1 className="font-bold justify-center text-center mb-5 mt-5">
        How to Add One-Time Password Phone Authentication
      </h1>

      <OtpLogin />
    </div>
  );
}

export default LoginPage;