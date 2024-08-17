import Account from "./Account";
import Copyright from "./Copyright";
import DownloadApp from "./DownloadApp";
import QuickLink from "./QuickLink";
import Subscription from "./Subscription";
import Support from "./Support";

const Footer = () => {
  return (
    <>
      <footer className="dark border-t bg-dark text-dark-foreground">
        <div className="container py-12 md:py-16">
          <div className="grid justify-between gap-y-8 md:grid-cols-12">
            <div className="px-4 md:col-span-4 xl:col-span-3">
              <Subscription />
            </div>
            <div className="px-4 md:col-span-4 md:border-l xl:col-span-2">
              <Support />
            </div>
            <div className="px-4 md:col-span-4 md:border-l xl:col-span-2">
              <Account />
            </div>
            <div className="px-4 md:order-5 md:col-span-4 md:border-l xl:order-4 xl:col-span-2">
              <QuickLink />
            </div>
            <div className="px-4 md:order-4 md:col-span-4 xl:order-5 xl:col-span-3 xl:border-l">
              <DownloadApp />
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
