import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const token = request.headers.get("x-sanity-token");
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret || token !== secret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const paths: string[] = body?.paths ?? ["/", "/about", "/collections", "/lookbook", "/contact"];
  paths.forEach((path) => revalidatePath(path));

  return NextResponse.json({ revalidated: true, paths, now: Date.now() });
}
