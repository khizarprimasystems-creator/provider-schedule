import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("provider-data");
  if (req.method === "GET") {
    const data = await store.get("data", { type: "json" });
    return Response.json(data || null, { headers: { "Cache-Control": "no-store" } });
  }
  if (req.method === "POST") {
    let body;
    try { body = await req.json(); } catch { return new Response("Bad request", { status: 400 }); }
    const pw = process.env.EDIT_PASSWORD;
    if (!pw || body.password !== pw) return new Response("Unauthorized", { status: 401 });
    if (body.check) return Response.json({ ok: true });
    await store.setJSON("data", body.data);
    return Response.json({ ok: true });
  }
  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/providers" };
