export default function DeleteModal({
  setShowModal,
}: {
  setShowModal: (value: boolean) => void;
}) {
  return (
    <div className="modal modal-open">
      <form method="dialog" className="modal-box">
        {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button> */}
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <button onClick={() => setShowModal(false)} className="btn">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
