export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center gap-8">
        <img src="/usi.jpg" alt="" className="w-[256px] rounded-full border" />
        <div className="flex flex-col items-center gap-4">
          <div className="font-black text-7xl">Hi, I'm Taiki Ishikawa.</div>
          <div>A Software Engineer currently living in Japan.</div>
        </div>
      </div>
    </div>
  );
}
