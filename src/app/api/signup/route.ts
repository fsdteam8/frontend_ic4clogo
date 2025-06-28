import { type NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// MongoDB Schema
const DataSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create model (handle case where model already exists)
const Data = mongoose.models.Data || mongoose.model("Data", DataSchema);

// MongoDB connection
async function connectToDatabase() {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectToDatabase();

    // Parse request body
    const { fullName, email } = await request.json();

    // Validation
    if (!fullName || !email) {
      return NextResponse.json(
        {
          status: false,
          message: "Please fill all the fields",
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailExist = await Data.findOne({ email });
    if (emailExist) {
      return NextResponse.json(
        {
          status: false,
          message: "Email already exists",
        },
        { status: 400 }
      );
    }

    // Create new data entry
    const data = await Data.create({
      fullName,
      email,
    });

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ic4c@mail.com",
      subject: "New Sign for the Petition",
      html: `
        <div style="max-width: 600px; margin: auto; font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #008080; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">📝 New Sign for the Petition</h1>
          </div>
          <div style="padding: 30px; color: #333;">
            <p style="font-size: 16px;"><strong>Person's Full Name:</strong> ${fullName}</p>
            <p style="font-size: 16px;"><strong>Person's Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #e6f2f2; padding: 20px; text-align: center; color: #004d4d; font-weight: bold;">
            THANK YOU FOR YOUR SUPPORT!
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        status: true,
        message: "Data added successfully",
        data,
      },
      { status: 200 }
    );
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        status: false,
        message: error.message || "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
