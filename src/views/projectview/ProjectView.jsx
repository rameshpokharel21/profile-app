import { useQuery } from "@tanstack/react-query"
import { getRepos } from "../../services/api";
import styles from "./ProjectView.module.css";
import Spinner from "../../components/spinner/Spinner"

const ProjectView = () => {
    
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["repos"],
        queryFn: getRepos,
        
    });
   
    if(isLoading) return <Spinner />
    if(isError) return <p>Error: {error.message}</p>
  return (
    <>
        
        <h2>My public Repos</h2>
        <div className={styles.myComponent}>
            {data.map(repo => (
                <div key = {repo.id} className={styles.repoBox}>
                    
                    <strong>{repo.name}</strong>: {repo.description || "No Description"}
                    <br />
                    <a href={repo.html_url} target="_blank" rel="onopener noreferrer">View Repo</a>
            
                </div>
            ))}
        </div>
    </>
  )
}

export default ProjectView