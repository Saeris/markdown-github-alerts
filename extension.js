import MarkdownItGitHubAlerts from "markdown-it-github-alerts";

export const activate = () => ({
  extendMarkdownIt: (md) =>
    md.use(MarkdownItGitHubAlerts, {
      markers: "*",
    }),
});
