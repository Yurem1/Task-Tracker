import { Mongo } from "@/app/auth/api/mongo";
import { HTTPConstants } from "@/utilities/constants";
import { IDashboardTasks } from "@/utilities/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const res: IDashboardTasks = await req.json();

  const client = new Mongo({
    username: res.profile.username,
    password: res.profile.password
  });

  const newTasks = await client.addTask(res.newTask);

  return new NextResponse(JSON.stringify(newTasks), {
    headers: {
      'Content-Type': 'application/json'
    },
    ...HTTPConstants.ADDED_TASK_SUCCESSFULLY
  });
}