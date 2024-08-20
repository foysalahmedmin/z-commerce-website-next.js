import SignInSection from "@/components/(authentication)/SignInSection";
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
        <div className="w-full rounded-md border-primary bg-card px-6 py-12 backdrop-blur-xl md:px-12 md:py-16 xl:w-[64rem]">
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
