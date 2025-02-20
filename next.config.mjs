import commit from "child_process";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const commitHash = commit
  .execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return commitHash;
  },
};

export default withNextIntl(nextConfig);
