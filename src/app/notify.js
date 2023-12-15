export default function Notify({ notifyStatus }) {
  return (
    <div
      className={`fixed top-0 w-full p-3 bg-red-400 text-white text-center ${
        notifyStatus.status ? null : "hidden"
      }`}
    >
      {notifyStatus.message}
    </div>
  );
}
