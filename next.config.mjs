// starts a command line process to get the git hash
import commit from "child_process";
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

export default nextConfig;
