import React from 'react';
import Link from 'next/link';

interface Job {
    "id": number;
    "title": string;
    "description": string;
    "estimatedPay": string;
  }

  interface JobProps {
    job: Job;
  }

  export const JobData: Job[] = [
    {
        "id": 1,
        "title": "Dairy Production Supervisor",
        "description": "Oversee day-to-day dairy production operations, ensure efficiency and safety. Requires a bachelor's degree in Business or related field and 3+ years of experience in a dairy production environment.",
        "estimatedPay": "$60,000 - $70,000 annually"
    },
    {
        "id": 2,
        "title": "Quality Assurance Manager",
        "description": "Manage and implement quality standards for dairy production. Requires a bachelor's degree in Food Science or related field and 5+ years of experience in a food manufacturing environment.",
        "estimatedPay": "$75,000 - $85,000 annually"
    },
    {
        "id": 3,
        "title": "Dairy Processing Operator",
        "description": "Responsible for the operation of dairy processing equipment. Requires a high school diploma and 2+ years of experience in a dairy processing role.",
        "estimatedPay": "$40,000 - $45,000 annually"
    },
    {
        "id": 4,
        "title": "Maintenance Technician",
        "description": "Perform regular maintenance on dairy production equipment. Requires a vocational certificate in maintenance or related field and 3+ years of experience in maintenance role.",
        "estimatedPay": "$50,000 - $55,000 annually"
    },
    {
        "id": 5,
        "title": "Dairy Herd Manager",
        "description": "Manage the dairy herd health and productivity. Requires a degree in Animal Science or related field and 5+ years of experience in dairy herd management.",
        "estimatedPay": "$65,000 - $75,000 annually"
    },
    {
        "id": 6,
        "title": "Logistics Coordinator",
        "description": "Coordinate dairy product transportation and delivery. Requires a bachelor's degree in Logistics or related field and 2+ years of experience in a logistics role.",
        "estimatedPay": "$55,000 - $60,000 annually"
    },
    {
        "id": 7,
        "title": "Lab Technician",
        "description": "Conduct quality control tests on dairy products. Requires a bachelor's degree in Chemistry or related field and 1+ years of experience in a lab environment.",
        "estimatedPay": "$45,000 - $50,000 annually"
    },
    {
        "id": 8,
        "title": "Human Resources Specialist",
        "description": "Responsible for HR tasks including hiring, training, and benefits administration. Requires a bachelor's degree in Human Resources or related field and 3+ years of experience in an HR role.",
        "estimatedPay": "$55,000 - $65,000 annually"
    },
    {
        "id": 9,
        "title": "Milk Receiver",
        "description": "Responsible for receiving, inspecting and unloading milk shipments. Requires a high school diploma and 1+ years of experience in a similar role.",
        "estimatedPay": "$35,000 - $40,000 annually"
    },
    {
        "id": 10,
        "title": "Sanitation Technician",
        "description": "Ensure clean and sanitary conditions in the dairy processing facility. Requires a high school diploma and 1+ years of experience in a sanitation role.",
        "estimatedPay": "$30,000 - $35,000 annually"
    }
]

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
                                <p>
                                    {job.description}
                                </p>
                                <p>
                                    {job.estimatedPay}
                                </p>
                            </div>
                            <div className="self-center">
                                <Link href={`/jobs/${job.id}`}>
                                    <a className="bg-home-blue text-white p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white">
                                        Details/Apply
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Listing;