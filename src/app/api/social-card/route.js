import { ImageResponse } from "next/og";
import heroData1 from "../../../components/Hero/heroData1";
import heroData2 from "../../../components/Hero/heroData2";
import heroData3 from "../../../components/Hero/heroData3";
import heroData4 from "../../../components/Hero/heroData4";
import heroData5 from "../../../components/Hero/heroData5";
import heroData6 from "../../../components/Hero/heroData6";
import heroData7 from "../../../components/Hero/heroData7";
import heroData8 from "../../../components/Hero/heroData8";

export const runtime = "edge";

const heroImage = `data:image/webp;base64,${heroData1}${heroData2}${heroData3}${heroData4}${heroData5}${heroData6}${heroData7}${heroData8}`;

export async function GET(request) {
  const logoUrl = new URL("/Logo/logohorizontal.png", request.url).toString();

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
        <img
          src={heroImage}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "65% center",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, #f5f1eb 0%, #f5f1eb 43%, rgba(245,241,235,.94) 50%, rgba(245,241,235,.48) 61%, rgba(245,241,235,0) 76%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "-125px",
            bottom: "-185px",
            width: "420px",
            height: "420px",
            display: "flex",
            border: "1px solid rgba(185,130,50,.12)",
            borderRadius: "50%",
            boxShadow:
              "0 0 0 42px rgba(185,130,50,.035), 0 0 0 88px rgba(185,130,50,.02)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "60%",
            padding: "42px 0 40px 66px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "270px",
              height: "112px",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              marginBottom: "22px",
            }}
          >
            <img
              src={logoUrl}
              alt="Saulo Pavanello"
              style={{
                width: "300px",
                height: "300px",
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
              letterSpacing: "3.2px",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            SAULO PAVANELLO · SOFTWARE ENGINEER
          </div>

          <div
            style={{
              width: "650px",
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: "57px",
              fontWeight: 500,
              letterSpacing: "-2.6px",
              lineHeight: 0.98,
              marginBottom: "22px",
            }}
          >
            Eu construo software para negócios que querem crescer.
          </div>

          <div
            style={{
              width: "88px",
              height: "2px",
              display: "flex",
              background: "#b98232",
              marginBottom: "20px",
            }}
          />

          <div
            style={{
              width: "570px",
              display: "flex",
              color: "#4f4b46",
              fontSize: "19px",
              lineHeight: 1.45,
              marginBottom: "auto",
            }}
          >
            SaaS, sistemas web, aplicativos, APIs e experiências digitais com foco em resultado real.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11px",
              fontSize: "19px",
              fontWeight: 650,
              color: "#24211e",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                border: "2px solid #b98232",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b98232",
                fontSize: "17px",
              }}
            >
              ↗
            </div>
            saulopavanello.com.br
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable",
      },
    }
  );
}
