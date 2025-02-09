import { IconCloud } from "../../components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "swift",
  "c++",
  "django",
  "fastapi",
  "java",
  "react",
  "html5",
  "css3",
  "express",
  "amazonaws",
  "postgresql",
  "SQLite",
  "Redis",
  "mongodb",
  "postman",
  "selenium",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg mt-[-2rem]">
      <IconCloud images={images} />
    </div>
  );
}
