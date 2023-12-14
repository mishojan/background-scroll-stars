import Stars from "@/components/stars";

export default function Home() {
  return (
    <div>
      <div style={{ position: "fixed", top: 0 }}>
        <Stars />
      </div>
      <div style={{ margin: "9999px 0", height: 100, background: "red" }}></div>
    </div>
  );
}
