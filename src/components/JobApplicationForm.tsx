import { useState } from 'react'

interface JobApplication {
  position: string
  yearsOfTypeScript: number
  githubProfile: string
  email: string
  portfolioUrl?: string
}

export function JobApplicationForm() {
  const [application, setApplication] = useState<JobApplication>({
    position: '',
    yearsOfTypeScript: 0,
    githubProfile: '',
    email: '',
    portfolioUrl: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitApplication(application)
  }

  const submitApplication = (data: JobApplication) => {
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        console.log('Application submitted:', data)
        resolve({ success: true })
      }, 1000)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="position" className="block text-sm font-medium">
          Position
        </label>
        <input
          type="text"
          id="position"
          value={application.position}
          onChange={(e) => setApplication({ ...application, position: e.target.value })}
          className="mt-1 block w-full rounded-md border p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="yearsOfTypeScript" className="block text-sm font-medium">
          Years of TypeScript Experience
        </label>
        <input
          type="number"
          id="yearsOfTypeScript"
          value={application.yearsOfTypeScript}
          onChange={(e) => setApplication({ ...application, yearsOfTypeScript: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border p-2"
          required
          min="0"
        />
      </div>
      <div>
        <label htmlFor="githubProfile" className="block text-sm font-medium">
          GitHub Profile URL
        </label>
        <input
          type="url"
          id="githubProfile"
          value={application.githubProfile}
          onChange={(e) => setApplication({ ...application, githubProfile: e.target.value })}
          className="mt-1 block w-full rounded-md border p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={application.email}
          onChange={(e) => setApplication({ ...application, email: e.target.value })}
          className="mt-1 block w-full rounded-md border p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="portfolioUrl" className="block text-sm font-medium">
          Portfolio URL (Optional)
        </label>
        <input
          type="url"
          id="portfolioUrl"
          value={application.portfolioUrl}
          onChange={(e) => setApplication({ ...application, portfolioUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Apply Now
      </button>
    </form>
  )
}
