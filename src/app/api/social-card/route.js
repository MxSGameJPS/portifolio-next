export const runtime = "edge";

export async function GET(request) {
  const imageUrl = new URL("/og-saulo.png", request.url);
  const imageResponse = await fetch(imageUrl, { cache: "force-cache" });

  if (!imageResponse.ok) {
    return new Response("Social card unavailable", { status: 404 });
  }

  const image = await imageResponse.arrayBuffer();

  return new Response(image, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Length": String(image.byteLength),
      "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable",
    },
  });
}
