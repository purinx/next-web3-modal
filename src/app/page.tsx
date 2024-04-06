import { Web3ModalButton } from 'libs/ui/Web3ModalButton';

export default function Home() {
  // TODO: disconnect button
  return (
    <main>
      <div className="p-10 flex gap-1">
        <Web3ModalButton />
      </div>
    </main>
  );
}
