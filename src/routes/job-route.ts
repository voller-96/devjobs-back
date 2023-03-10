import { Router } from "express";
import {
  getJobs,
  postJobs,
  deleteJob,
  getJobById,
} from "../controllers/job-controller";

const jobRouter = Router();

jobRouter
  .get("/jobs/:jobId", getJobById)
  .get("/jobs/", getJobs)
  .post("/jobs", postJobs)
  .delete(`/jobs/:jobId`, deleteJob);

export { jobRouter };
