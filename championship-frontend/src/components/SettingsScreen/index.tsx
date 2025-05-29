export default function SettingsScreen() {
  return (
    <section className="flex h-full flex-col justify-between">
      <h2>Settings</h2>
      <button
        className="btn btn-primary btn-xl w-full"
        type="button"
        onClick={() => console.log("next")}
      >
        Next
      </button>
    </section>
  );
}
