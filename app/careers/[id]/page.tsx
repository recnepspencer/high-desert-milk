import Listing from "@/app/Components/Job";

interface Job {
    "id": string;
    "title": string;
    "description": string;
    "wage": string;
}

export async function generateStaticParams() {
    const jobs = await fetch('http://localhost:3000/api/careers').then((res) => res.json())
   
    return jobs.map((job: Job) => ({
      slug: job.id,
    }))
  }

  export default async function Page({ params }: { params: { id: string } }) {

    const jobs = await fetch('http://localhost:3000/api/careers').then((res) => res.json())
    const job: Job = jobs.find((job: Job) => job.id.toString() === params.id.toString());

    return (
        <div className="pt-[148px]">My Post: {params.id}
            {job ? <Listing key={job.id} job={job}/> : <p>Job not found</p>}
        </div>
    );
}