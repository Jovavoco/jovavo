"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Trash2, X } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

type DeleteProspectButtonProps = {
  prospectId: string;
  businessName: string;
};

export default function DeleteProspectButton({
  prospectId,
  businessName,
}: DeleteProspectButtonProps) {
  const router = useRouter();

  const [supabase] = useState(() => createClient());

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [deleting, setDeleting] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleDelete() {
    setDeleting(true);
    setError("");

    const { error: deleteError } =
      await supabase
        .from("prospects")
        .delete()
        .eq("id", prospectId);

    if (deleteError) {
      setError(deleteError.message);
      setDeleting(false);
      return;
    }

    router.push("/admin/prospects");
    router.refresh();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError("");
          setShowConfirm(true);
        }}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-red-200 bg-[#fffdf9] px-6 text-sm font-medium text-red-700 transition hover:bg-red-50"
      >
        <Trash2 size={15} />
        Delete Prospect
      </button>

      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-5 backdrop-blur-[2px]">
          <div className="w-full max-w-md rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-700">
                <Trash2 size={17} />
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(false)
                }
                disabled={deleting}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#817970] transition hover:bg-[#f1ece3] hover:text-[#1b1713]"
                aria-label="Close"
              >
                <X size={17} />
              </button>
            </div>

            <h2 className="mt-5 font-serif text-2xl text-[#1b1713]">
              Delete Prospect?
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#706960]">
              Are you sure you want to delete{" "}
              <span className="font-medium text-[#1b1713]">
                {businessName}
              </span>
              ? This action cannot be undone.
            </p>

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() =>
                  setShowConfirm(false)
                }
                disabled={deleting}
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#d8d0c5] px-5 text-sm font-medium text-[#1b1713] transition hover:bg-[#f1ece3]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-red-700 px-5 text-sm font-medium text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting ? (
                  <>
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={15} />
                    Yes, Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}