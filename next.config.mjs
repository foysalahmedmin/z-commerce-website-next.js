import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
 
const withNextIntl = createNextIntlPlugin()

/** @type {import("next").NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.dirname(new URL(import.meta.url).pathname), 'styles'],
    },
};

export default withNextIntl(nextConfig);
