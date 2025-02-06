import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    output: "export",
    success: true,
    message: 'hle!',
    data: {
      message: 'Message and email sent successfully!',
    }
  }, { status: 200 });
};