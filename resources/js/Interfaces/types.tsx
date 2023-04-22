interface Companies {
    id: string
    name: string
    address: string
    info: string
    description: string
    logo: string | null
    created_at: string
    updated_at: string
}

interface Jobs {
    id: string
    title: string
    description: string
    info: string
    salary: number
    level: string
    created_at: string
    updated_at: string
}

interface Job {
    created_at: string
    description: string
    id: string
    info: string
    level: string
    salary: number
    title: string
    updated_at: string
    job: Record<string, any>
}

interface Candidates {
    id: string
    job_id: string
    name: string
    email: string
    address: string
    gender: "male" | "female"
    cv: string
    linkedin: string | null
    about: string
    created_at: string
    updated_at: string
    jobs?: Job[]
    applications?: Applications[]
}

interface Applications {
    id: string
    candidate_id: string
    job_id: string
    track_id: string
    status: "pending" | "approved" | "rejected"
    created_at: string
    updated_at: string
}

type Gender = "male" | "female"

export { Job, Gender, Jobs, Companies, Candidates, Applications }
