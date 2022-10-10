import { jobsI } from "../Home/Home";

export function saveJobsToLocalStorage(jobs: Array<jobsI>): void {
  const jsonString = JSON.stringify(jobs);
  localStorage.setItem('JOBS', jsonString)
}

export function getJobsFromLocalStorage() : Array<jobsI> {
const jsonString = localStorage.getItem('JOBS');
return JSON.parse(jsonString || '{}');
}

export function clearLocalStorage(): void {
  localStorage.clear()
}

export function clearJobs() {
  localStorage.removeItem('JOBS');
}