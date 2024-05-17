import Card from "@/components/card"
import { RepoType } from '../type'
export default async function ProjectList() {


  const url = 'https://api.github.com/users/ginguan/repos';
  const headers = {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28'
  }; 

  const response = await fetch(url, { headers })
  const repos = await response.json()

  // choose first 10 repos that updated recently
  repos.sort((a: RepoType, b: RepoType) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).filter((repo: RepoType) => repo.name !== 'ginguan')
  console.log('repos',repos)
  repos.splice(10)
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo: RepoType) => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <div >
              <div className="font-semibold">{repo.name.toUpperCase()}</div>
              {/* <div>🌟{repo.stargazers_count}</div> */}
              {repo.description && <div>{repo.description}</div>}
              <div style={{ color: 'navy' }}> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.html_url}
                </a></div>

            </div>
          </Card>
        </li>
      ))}
    </ul>
  )
}