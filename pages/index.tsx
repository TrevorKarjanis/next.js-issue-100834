import type { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async (context) => {
  return { props: { preview: context.preview ?? false } };
}) satisfies GetStaticProps<{ preview: boolean }>;

export default function Home({
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <p>Preview mode: {String(preview)}</p>;
}
