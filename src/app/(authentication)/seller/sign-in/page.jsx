import SignInSection from "@/components/(authentication)/(user)/SignInSection";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import { titleGenerator } from "@/lib/utils";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata = {
  title: titleGenerator(["Sign In"]),
  description: "Investment management made simple",
};

const SignInPage = async () => {
  const session = cookies().get("z-commerce");
  if (session?.value) {
    redirect("/seller/profile");
  }
  return (
    <>
      <section className="grid min-h-screen place-items-center py-8 xl:py-12">
        <div className="relative grid h-full w-full grid-cols-1 grid-rows-1 place-items-center px-container-space py-6 xl:py-8">
          <div className="z-10 flex w-full overflow-hidden rounded-md border border-foreground/50 bg-card/50 shadow-xl md:w-[40rem]">
            <div className="w-full px-6 py-6 backdrop-blur md:px-8 md:py-8">
              <SectionTitle variant="center">
                <Title>Seller Sign In</Title>
              </SectionTitle>
              <SignInSection />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 right-0 top-0 hidden grid-cols-1 grid-rows-1 rounded-e-md bg-background/50 pr-8 pt-8 shadow-inner md:grid">
            <Image
              className="mt-auto h-full w-full object-contain object-right-bottom"
              src="/images/authentication/sign-in.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;
