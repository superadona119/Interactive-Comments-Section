"use client";

export default function Modal({
  modalStatus,
  setModalStatus,
  handleDeleteRecord,
  setDeleteRecord,
}) {
  return (
    <div
      className={`relative z-10 ${modalStatus ? null : `hidden`}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">
            <div className="bg-white px-3 pt-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Delete comment
                  </h3>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this comment? This will
                      remove the comment and cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-4 mb-2 w-full">
              <button
                type="button"
                onClick={() => {
                  setModalStatus(false);
                  setDeleteRecord({});
                }}
                className="w-full rounded-md bg-[#68717e] hover:bg-[#363645] text-white mr-2 py-[10px] font-medium text-[13px]"
              >
                NO, CANCEL
              </button>
              <button
                type="button"
                onClick={() => {
                  setModalStatus(false);
                  handleDeleteRecord();
                }}
                className="w-full rounded-md bg-[#ee6368] hover:bg-[#d3060d] text-white py-[10px] font-medium text-[13px]"
              >
                YES, DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
