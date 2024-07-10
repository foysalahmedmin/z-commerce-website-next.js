import SignInSection from "@/components/(authentication)/(user)/SignInSection";
import { titleGenerator } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: titleGenerator(["Sign In"]),
  description: "Investment management made simple",
};

const SignInPage = async ({ params }) => {
  const session = cookies().get("gate_access");
  if (session?.value) {
    redirect(`/${params?.locale}`);
  }
  return (
    <main>
      <section className="container flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full rounded-2xl border-primary bg-card/85 px-6 py-16 backdrop-blur-xl md:w-[640px] md:px-12">
          <h3 className="font-philosopher mb-12 text-center text-5xl">
            Sign In
          </h3>
          <SignInSection params={params} />
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
