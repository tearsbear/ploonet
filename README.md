This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

This project includes the following main components in the `app/components/` directory:

1. **About.tsx**: Component for the About section of the website.
2. **Contact.tsx**: Component for the Contact section or page.
3. **Header.tsx**: The header component, typically containing the navigation menu.
4. **Hero.tsx**: A hero component, often used for the main banner or introductory section.
5. **Process.tsx**: Component describing the process or workflow.
6. **Works.tsx**: Component showcasing the works or portfolio items.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

These components are likely used in the `app/page.tsx` or other pages to build the website's structure.

The project uses Next.js 13+ with the App Router, as evidenced by the `app` directory structure. It also utilizes TypeScript (`.tsx` and `.ts` files) and includes configuration for Tailwind CSS (`tailwind.config.ts`) and PostCSS (`postcss.config.js`).

To create new pages, add new files or folders in the `app` directory. Next.js uses file-based routing, so the file structure in the `app` directory determines the routing of your application.
