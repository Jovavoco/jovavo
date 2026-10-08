import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CalendarX,
  CircleAlert,
  Clock3,
} from "lucide-react";

type ConfirmationStatus =
  | "success"
  | "expired"
  | "invalid"
  | "cancelled"
  | "error";

type PageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

export default async function ConsultationConfirmedPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const status = (
    params.status || "error"
  ) as ConfirmationStatus;

  const content = getContent(status);

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-5 py-16 text-[#1b1713] sm:px-8 md:py-24">
      <div className="mx-auto flex min-h-[70vh] max-w-[760px] items-center justify-center">
        <div className="w-full rounded-[32px] border border-[#1b1713]/10 bg-[#fffdf9] px-6 py-12 text-center shadow-[0_24px_80px_rgba(27,23,19,0.045)] sm:px-10 sm:py-16 md:px-14">
          {/* ICON */}

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1b1713] text-white">
            {content.icon}
          </div>

          {/* EYEBROW */}

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1b1713]/40">
            {content.eyebrow}
          </p>

          {/* TITLE */}

          <h1 className="mx-auto mt-3 max-w-[600px] font-serif text-[3rem] font-light leading-[0.98] tracking-[-0.04em] sm:text-[4rem] md:text-[4.5rem]">
            {content.title}

            {content.italicTitle ? (
              <>
                {" "}
                <span className="italic text-[#1b1713]/45">
                  {content.italicTitle}
                </span>
              </>
            ) : null}
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-6 max-w-[520px] text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
            {content.description}
          </p>

          {/* SUCCESS INFO */}

          {status === "success" ? (
            <div className="mx-auto mt-8 max-w-[500px] rounded-2xl border border-[#1b1713]/10 bg-[#f8f5ef] px-5 py-5 text-left">
              <div className="flex gap-4">
                <CalendarCheck
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#1b1713]/45"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1b1713]/35">
                    Booking Status
                  </p>

                  <p className="mt-1 text-[13px] font-medium">
                    Confirmed
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-4 border-t border-[#1b1713]/10 pt-5">
                <Clock3
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#1b1713]/45"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1b1713]/35">
                    What&apos;s Next
                  </p>

                  <p className="mt-1 text-[13px] leading-6 text-[#1b1713]/55">
                    Your consultation has been reserved. We&apos;ll
                    send any additional meeting information to the
                    email address you used when booking.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* BUTTONS */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {content.showRebook ? (
              <Link
                href="/consultation"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b1713] px-7 py-3.5 text-[13px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
              >
                Book Another Time

                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <Link
                href="/"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b1713] px-7 py-3.5 text-[13px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
              >
                Back to Jovavo

                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}

            {status !== "success" ? (
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#1b1713]/10 px-7 py-3.5 text-[13px] font-medium transition hover:bg-[#f8f5ef] sm:w-auto"
              >
                Contact Jovavo
              </Link>
            ) : null}
          </div>

          {/* FOOTER */}

          <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1b1713]/25">
            JOVAVO
          </p>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   CONTENT
========================================================= */

function getContent(
  status: ConfirmationStatus
) {
  switch (status) {
    case "success":
      return {
        icon: (
          <CalendarCheck
            size={23}
            strokeWidth={1.5}
          />
        ),

        eyebrow: "Consultation Confirmed",

        title: "You're officially",

        italicTitle: "booked.",

        description:
          "Your email has been verified and your consultation with Jovavo is confirmed.",

        showRebook: false,
      };

    case "expired":
      return {
        icon: (
          <Clock3
            size={23}
            strokeWidth={1.5}
          />
        ),

        eyebrow: "Link Expired",

        title: "Your hold has",

        italicTitle: "expired.",

        description:
          "The confirmation window has ended, so this consultation time has been released. You can choose another available time below.",

        showRebook: true,
      };

    case "cancelled":
      return {
        icon: (
          <CalendarX
            size={23}
            strokeWidth={1.5}
          />
        ),

        eyebrow: "Booking Cancelled",

        title: "This booking was",

        italicTitle: "cancelled.",

        description:
          "This consultation is no longer active. If you'd still like to speak with Jovavo, you can select another available time.",

        showRebook: true,
      };

    case "invalid":
      return {
        icon: (
          <CircleAlert
            size={23}
            strokeWidth={1.5}
          />
        ),

        eyebrow: "Invalid Link",

        title: "We couldn't verify",

        italicTitle: "this link.",

        description:
          "This confirmation link is invalid or is no longer associated with an active consultation request.",

        showRebook: true,
      };

    default:
      return {
        icon: (
          <CircleAlert
            size={23}
            strokeWidth={1.5}
          />
        ),

        eyebrow: "Something Went Wrong",

        title: "We couldn't confirm",

        italicTitle: "your booking.",

        description:
          "Something prevented us from confirming your consultation. Please try again or contact Jovavo if the problem continues.",

        showRebook: true,
      };
  }
}