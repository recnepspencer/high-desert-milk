import prisma from "../../lib/prisma";

async function fetchJobs() {
    const jobs = await prisma.job.findMany();

    await prisma.$disconnect();

    return jobs;
}

import { NextResponse } from "next/server"

export async function GET(){
    const jobData = await fetchJobs();
    return NextResponse.json(jobData)
}