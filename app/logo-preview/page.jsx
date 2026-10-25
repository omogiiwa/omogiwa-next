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
      <img src="/omogiwalogo.svg" alt="OmoGiwa." width={700} />
    </main>
  );
}
