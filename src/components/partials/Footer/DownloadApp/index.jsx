import Image from "next/image";

const DownloadApp = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <div className="mb-4">
        <strong className="inline-block text-xl">Download App</strong>
      </div>
      <div className="space-y-2">
        <span>Save $3 with App New User Only</span>
        <div className="flex w-full max-w-60 gap-[4%]">
          <div className="size-full w-[38%]">
            <Image
              className="size-full object-contain object-center"
              src="/images/partials/qr-code.png"
              alt="QR code"
              height={250}
              width={250}
            />
          </div>
          <div className="grid w-[56%] grid-rows-2 gap-[4%]">
            <div className="size-full">
              <Image
                className="size-full object-contain object-center"
                src="/images/partials/play-store-logo.png"
                alt="play store logo"
                height={150}
                width={250}
              />
            </div>
            <div className="size-full">
              <Image
                className="size-full object-contain object-center"
                src="/images/partials/play-store-logo.png"
                alt="play store logo"
                height={150}
                width={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
