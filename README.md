Reproduce Next.js bug [#100834: Preview mode throws an exception with Node.js 26](https://github.com/vercel/next.js/issues/100834).

### Steps to Reproduce

1. Install Node.js 26.
2. Clone this reproduction repository.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000/api/preview. The API route calls `res.setPreviewData({})` and redirects to `/`.
6. Run `npm run build` and `npm start`, then repeat step 5.