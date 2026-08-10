import { ImageResponse } from "next/og";

export const runtime = "edge";

const SITE_URL = "https://www.saulopavanello.com.br";

export async function GET() {
  const portraitUrl = `${SITE_URL}/contact-saulo.png`;
  const logoUrl = `${SITE_URL}/Logo/logohorizontal.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f5f1eb",
          color: "#171717",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "52%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
            background: "#29241f",
          }}
        >
          <img
            src={portraitUrl}
            alt=""
            width="624"
            height="630"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "52% center",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, #f5f1eb 0%, #f5f1eb 43%, rgba(245,241,235,.96) 49%, rgba(245,241,235,.35) 62%, rgba(245,241,235,0) 73%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "-145px",
            bottom: "-220px",
            width: "450px",
            height: "450px",
            display: "flex",
            border: "1px solid rgba(185,130,50,.14)",
            borderRadius: "50%",
            boxShadow:
              "0 0 0 45px rgba(185,130,50,.035), 0 0 0 92px rgba(185,130,50,.02)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "61%",
            height: "100%",
            padding: "38px 0 36px 65px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "95px",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              marginBottom: "16px",
            }}
          >
            <img
              src={logoUrl}
              alt="Saulo Pavanello"
              width="280"
              height="280"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "contain",
                transform: "translateX(-12px)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              color: "#a56f26",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: "17px",
            }}
          >
            SAULO PAVANELLO · SOFTWARE ENGINEER
          </div>

          <div
            style={{
              width: "640px",
              display: "flex",
              fontFamily: "serif",
              fontSize: "55px",
              fontWeight: 500,
              letterSpacing: "-2.4px",
              lineHeight: 0.98,
              marginBottom: "20px",
            }}
          >
            Eu construo software para negócios que querem crescer.
          </div>

          <div
            style={{
              width: "86px",
              height: "2px",
              display: "flex",
              background: "#b98232",
              marginBottom: "18px",
            }}
          />

          <div
            style={{
              width: "565px",
              display: "flex",
              color: "#4f4b46",
              fontSize: "18px",
              lineHeight: 1.42,
              marginBottom: "auto",
            }}
          >
            SaaS, sistemas web, aplicativos, APIs e experiências digitais com foco em resultado real.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "19px",
              fontWeight: 700,
              color: "#24211e",
            }}
          >
            saulopavanello.com.br
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    }
  );
}
