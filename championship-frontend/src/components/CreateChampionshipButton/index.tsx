export default function CreateChampionshipButton() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button
      className="btn btn-primary btn-xl w-full"
      type="button"
      onClick={handleClick}
    >
      Create Championship
    </button>
  );
}
