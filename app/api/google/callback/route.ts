import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    /* =====================================================
       ENVIRONMENT VARIABLES
    ===================================================== */

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        {
          success: false,
          error: "Google OAuth environment variables are missing.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       GOOGLE RESPONSE
    ===================================================== */

    const code = request.nextUrl.searchParams.get("code");
    const googleError = request.nextUrl.searchParams.get("error");

    if (googleError) {
      console.error("Google authorization denied:", googleError);

      return new NextResponse(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Google Calendar Authorization</title>
          </head>

          <body
            style="
              margin:0;
              padding:40px;
              background:#f8f5ef;
              color:#1b1713;
              font-family:Arial,sans-serif;
            "
          >
            <div
              style="
                max-width:600px;
                margin:80px auto;
                background:#fffdf9;
                border:1px solid rgba(27,23,19,.1);
                border-radius:28px;
                padding:50px;
                text-align:center;
              "
            >
              <p
                style="
                  font-size:11px;
                  letter-spacing:.18em;
                  text-transform:uppercase;
                  opacity:.45;
                "
              >
                Jovavo
              </p>

              <h1
                style="
                  margin:18px 0;
                  font-family:Georgia,serif;
                  font-weight:400;
                  font-size:42px;
                "
              >
                Authorization cancelled.
              </h1>

              <p
                style="
                  line-height:1.7;
                  opacity:.6;
                "
              >
                Google Calendar access was not granted.
              </p>
            </div>
          </body>
        </html>
        `,
        {
          status: 400,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
          },
        }
      );
    }

    if (!code) {
      return NextResponse.json(
        {
          success: false,
          error: "Google did not return an authorization code.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       CALLBACK URL

       This must exactly match the redirect URI registered
       in Google Cloud.
    ===================================================== */

    const origin = request.nextUrl.origin;

    const redirectUri = `${origin}/api/google/callback`;

    /* =====================================================
       OAUTH CLIENT
    ===================================================== */

    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectUri
    );

    /* =====================================================
       EXCHANGE AUTHORIZATION CODE FOR TOKENS
    ===================================================== */

    const { tokens } = await oauth2Client.getToken(code);

    /* =====================================================
       IMPORTANT

       The refresh token is what Jovavo will eventually use
       to create calendar events without asking you to sign
       into Google every time.

       We temporarily show whether Google returned one,
       but NEVER display the actual token in the browser.
    ===================================================== */

    const hasRefreshToken = Boolean(tokens.refresh_token);

    if (!hasRefreshToken) {
      console.error(
        "Google authorization completed but no refresh token was returned."
      );

      return new NextResponse(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Google Calendar Authorization</title>
          </head>

          <body
            style="
              margin:0;
              padding:40px;
              background:#f8f5ef;
              color:#1b1713;
              font-family:Arial,sans-serif;
            "
          >
            <div
              style="
                max-width:620px;
                margin:80px auto;
                background:#fffdf9;
                border:1px solid rgba(27,23,19,.1);
                border-radius:28px;
                padding:50px;
                text-align:center;
              "
            >
              <p
                style="
                  font-size:11px;
                  letter-spacing:.18em;
                  text-transform:uppercase;
                  opacity:.45;
                "
              >
                Jovavo
              </p>

              <h1
                style="
                  margin:18px 0;
                  font-family:Georgia,serif;
                  font-weight:400;
                  font-size:42px;
                "
              >
                Almost connected.
              </h1>

              <p
                style="
                  line-height:1.7;
                  opacity:.6;
                "
              >
                Google authorized the account, but did not return
                the offline refresh token needed for automatic
                calendar bookings.
              </p>

              <p
                style="
                  margin-top:24px;
                  font-size:13px;
                  line-height:1.7;
                  opacity:.5;
                "
              >
                Return to ChatGPT and we'll finish the setup.
              </p>
            </div>
          </body>
        </html>
        `,
        {
          status: 400,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
          },
        }
      );
    }

    /* =====================================================
       TEMPORARY DEVELOPMENT STEP

       We need to save the refresh token in .env.local.

       For security, we are NOT putting it in the browser URL
       or HTML.

       During local development only, print it to the terminal.
    ===================================================== */

    if (process.env.NODE_ENV !== "production") {
      console.log("\n==========================================");
      console.log("GOOGLE CALENDAR AUTHORIZATION SUCCESS");
      console.log("==========================================");
      console.log("");
      console.log("Add this to .env.local:");
      console.log("");
      console.log(
        `GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`
      );
      console.log("");
      console.log("==========================================\n");
    }

    /* =====================================================
       SUCCESS PAGE
    ===================================================== */

    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Google Calendar Connected</title>
        </head>

        <body
          style="
            margin:0;
            padding:40px;
            background:#f8f5ef;
            color:#1b1713;
            font-family:Arial,sans-serif;
          "
        >
          <div
            style="
              max-width:620px;
              margin:80px auto;
              background:#fffdf9;
              border:1px solid rgba(27,23,19,.1);
              border-radius:28px;
              padding:50px;
              text-align:center;
            "
          >
            <div
              style="
                width:52px;
                height:52px;
                margin:0 auto;
                border-radius:50%;
                background:#1b1713;
                color:white;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:24px;
              "
            >
              ✓
            </div>

            <p
              style="
                margin-top:26px;
                font-size:11px;
                letter-spacing:.18em;
                text-transform:uppercase;
                opacity:.45;
              "
            >
              Jovavo
            </p>

            <h1
              style="
                margin:16px 0;
                font-family:Georgia,serif;
                font-weight:400;
                font-size:44px;
                line-height:1.05;
              "
            >
              Google Calendar connected.
            </h1>

            <p
              style="
                max-width:470px;
                margin:20px auto 0;
                line-height:1.7;
                opacity:.6;
              "
            >
              Jovavo has successfully received authorization
              to create consultation events in your Google
              Calendar.
            </p>

            <p
              style="
                margin-top:28px;
                font-size:13px;
                line-height:1.7;
                opacity:.5;
              "
            >
              You can close this window and return to your
              development setup.
            </p>
          </div>
        </body>
      </html>
      `,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }
    );
  } catch (error) {
    console.error("Google OAuth callback error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to complete Google Calendar authorization.",
      },
      { status: 500 }
    );
  }
}