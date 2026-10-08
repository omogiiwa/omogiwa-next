import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      companyName,
      clientType,
      location,
      website,
      discoverySource,
      previousClient,
      services,
      answers,
      uploadedFiles,
    } = body;

    if (!fullName?.trim()) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one service." },
        { status: 400 }
      );
    }

    const { error } = await supabase
  .from("hire_inquiries")
  .insert([
    {
      full_name: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      company_name: companyName?.trim() || null,
      client_type: clientType || null,
      location: location?.trim() || null,
      website: website?.trim() || null,
      discovery_source: discoverySource || null,
      previous_client:
        previousClient === true ||
        previousClient === "yes" ||
        previousClient === "Yes",
      services,
      answers: answers || {},
      uploaded_files: uploadedFiles || [],
    },
  ]);

    if (error) {
      console.error("Hire form error:", error);

      return NextResponse.json(
        { error: "Unable to submit your inquiry right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data.id,
    });
  } catch (error) {
    console.error("Hire API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}