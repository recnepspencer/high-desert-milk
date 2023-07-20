'use client'
import React from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function fetchJobs() {
//     const jobs = await prisma.job.findMany();

//     await prisma.$disconnect();

//     return jobs;
// }

interface Job {
    "id": string;
    "title": string;
    "description": string;
    "wage": string;
}

interface JobProps {
    job: Job;
}

const Listing: React.FC<JobProps> = ({ job }) => {
    return (
        <div>
            <div className="p-4 flex flex-col items-center" key={job.id}>
                <div className="bg-slate-200 w-full p-4 rounded">
                    <div className="flex justify-between">
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl">
                                {job.title}
                            </h1>
                            <p className='max-w-[80%] pt-2'>
                                <span className='pr-1 font-bold font-sans leading-none'>Description:</span> {job.description}
                            </p>
                            <p className='pt-2'>
                                <span className='pr-1 font-bold font-sans leading-none'>Wage/ Salary</span> {job.wage}
                            </p>
                        </div>
                        <div className="self-center p-2 text-white bg-home-blue hover:bg-blue-900 rounded active:text-home-blue active:bg-white">
                            <Link href={`/careers/${job.id}`}>
                                Details/Apply
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing;