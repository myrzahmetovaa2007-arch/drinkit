import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return new Response("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    return new Response("User created", { status: 201 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
