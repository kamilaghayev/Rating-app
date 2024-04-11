import { Button, H, P, Tag } from '@/components/UI';
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <H tag='h1'>My Header</H>
      <P size='lg'>body text 1355535463</P>
      <Button appearance='ghost' arrow='down'>My Button</Button>
      <Tag color='primary' href='/'>Tag textarea</Tag>
    </>
  );
}
