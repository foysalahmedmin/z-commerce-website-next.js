import Account from "./Account";
import Copyright from "./Copyright";
import DownloadApp from "./DownloadApp";
import QuickLink from "./QuickLink";
import Subscription from "./Subscription";
import Support from "./Support";

const Footer = () => {
  return (
    <>
      <footer className="dark border-t bg-dark py-12 text-dark-foreground md:py-16">
        <div className="container">
          <div className="grid gap-4 xl:grid-cols-5">
            <div>
              <Subscription />
            </div>
            <div>
              <Support />
            </div>
            <div>
              <Account />
            </div>
            <div>
              <QuickLink />
            </div>
            <div>
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
