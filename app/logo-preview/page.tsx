export default function LogoPreview() {
  return (
    <main
      style={{
        background: "#fff",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/omogiwaanimated.svg" alt="OmoGiwa.com logo animation" width={700} />
    </main>
  );
}
