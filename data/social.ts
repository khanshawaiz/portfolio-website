export type SocialLink = {
  label: string;
  href: string;
  username: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/khanshawaiz",
    username: "khanshawaiz",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shawaiz-khan-113851292",
    username: "shawaiz-khan-113851292",
  },
  {
    label: "Email",
    href: "mailto:ashawaizkhan365@gmail.com",
    username: "ashawaizkhan365@gmail.com",
  },
];

export const resume = {
  path: "/shawaiz_cv.pdf",
  filename: "shawaiz_cv.pdf",
} as const;
