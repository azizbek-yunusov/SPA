import error from "../style/page-not.png"
export default function Error() {
  return(
    <div className="center">
      <img className="max-w-xs" src={error} alt={error} />
    </div>
  );
}