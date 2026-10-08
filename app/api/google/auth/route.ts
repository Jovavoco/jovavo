import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
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
       CALLBACK URL

       localhost:
       http://localhost:3000/api/google/callback

       production:
       https://jovavo.com/api/google/callback
    ===================================================== */

    const origin = request.nextUrl.origin;

    const redirectUri = `${origin}/api/google/callback`;

    /* =====================================================
       GOOGLE OAUTH CLIENT
    ===================================================== */

    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectUri
    );

    /* =====================================================
       AUTHORIZATION URL

       access_type: offline
       → allows Google to issue a refresh token

       prompt: consent
       → forces the consent screen so we can obtain the
         refresh token during initial setup
    ===================================================== */

    const authorizationUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",

      scope: [
        "https://www.googleapis.com/auth/calendar.events",
      ],
    });

    /* =====================================================
       SEND YOU TO GOOGLE
    ===================================================== */

    return NextResponse.redirect(authorizationUrl);
  } catch (error) {
    console.error("Google OAuth authorization error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to start Google authorization.",
      },
      { status: 500 }
    );
  }
}