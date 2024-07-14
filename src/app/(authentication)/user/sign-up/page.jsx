import SignUpSection from "@/components/(authentication)/(user)/SignUpSection";
import { titleGenerator } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: titleGenerator(["Sign Up"]),
  description: "Investment management made simple",
};

const SignUpPage = async ({ params }) => {
  const session = cookies().get("gate_access");
  if (session?.value) {
    redirect(`/${params?.locale}`);
  }
  return (
    <main>
      <section className="container flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full rounded-2xl border-primary bg-card/85 px-6 py-12 backdrop-blur md:w-[640px] md:px-12 md:py-16">
          <h3 className="font-philosopher mb-12 text-center text-5xl">
            Sign Up
          </h3>
          <SignUpSection params={params} />
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
