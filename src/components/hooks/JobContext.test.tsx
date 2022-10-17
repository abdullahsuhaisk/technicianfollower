import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useContext } from "react";
import { clearJobs } from "../core/LocalStorageService";
import { jobsI } from "../Home/Home";
import {
  Context as JobContext,
  Provider as JobProvider,
} from "../hooks/JobContext";

describe("JobContext api test", () => {
  const mockOldJobs: Array<jobsI> = [
    {
      floor: "3",
      name: "Yangın Musluğu",
      isWorkingProperly: true,
      date: new Date(),
    },
    {
      floor: "2",
      name: "Yangın Musluğu",
      isWorkingProperly: true,
      date: new Date(),
    },
  ];

  test("Create a new Job test", async () => {
    const TestComponent = () => {
      const { state, createNewJob } = useContext(JobContext);
      return (
        <>
          <p>{state && state.name}</p>
          <button
            onClick={() =>
              createNewJob({
                floor: "3",
                name: "Door Bell",
                isWorkingProperly: true,
                date: new Date().toLocaleString("tr-TR"),
              })
            }
          >
            Create a new job
          </button>
        </>
      );
    };
    render(
      <JobProvider>
        <TestComponent />
      </JobProvider>
    );
    const createJobButton = screen.getByRole("button");
    fireEvent.click(createJobButton);
    const testTitle = screen.getByText("Door Bell");
    await waitFor(() => {
      expect(testTitle).toBeInTheDocument();
    });
    // expect(testTitle).toBeInTheDocument()
  });

  test("Approve a new Job test", async () => {
    const TestComponent = () => {
      const { state, createNewJob, approveNewJob } = useContext(JobContext);
      return (
        <>
          <p>
            {state &&
              state.jobs[0] &&
              state.jobs[0].isWorkingProperly.toString()}
          </p>
          <button
            onClick={() => {
              createNewJob({
                floor: "3",
                name: "Door Bell",
                isWorkingProperly: true,
                date: new Date().toLocaleString("tr-TR"),
              });
              approveNewJob(true);
            }}
          >
            Create a new job
          </button>
        </>
      );
    };
    render(
      <JobProvider>
        <TestComponent />
      </JobProvider>
    );
    const createJobButton = screen.getByRole("button");
    fireEvent.click(createJobButton);
    const testTitle = screen.getByText("true");
    await waitFor(() => {
      expect(testTitle).toBeInTheDocument();
    });
    // expect(testTitle).toBeInTheDocument()
  });

  test("Set oldjobs from local storage", async () => {
    const TestComponent = () => {
      const { state, getOldJobs } = useContext(JobContext);
      return (
        <>
          <p>{state && state.jobs && state.jobs.length.toString()}</p>
          <button
            onClick={() => {
              getOldJobs(mockOldJobs);
            }}
          >
            Call Old Jobs
          </button>
        </>
      );
    };
    render(
      <JobProvider>
        <TestComponent />
      </JobProvider>
    );
    const callOldJobButton = screen.getByRole("button");
    fireEvent.click(callOldJobButton);
    const testTitle = screen.getByText("2");
    await waitFor(() => {
      expect(testTitle).toBeInTheDocument();
    });
    // expect(testTitle).toBeInTheDocument()
  });

  test("Approve a new Job test", async () => {
    const TestComponent = () => {
      const { state, createNewJob, approveNewJob } = useContext(JobContext);
      return (
        <>
          <p>
            {state &&
              state.jobs[0] &&
              state.jobs[0].isWorkingProperly.toString()}
          </p>
          <button
            onClick={() => {
              createNewJob({
                floor: "3",
                name: "Door Bell",
                isWorkingProperly: true,
                date: new Date().toLocaleString("tr-TR"),
              });
              approveNewJob(true);
            }}
          >
            Create a new job
          </button>
        </>
      );
    };
    render(
      <JobProvider>
        <TestComponent />
      </JobProvider>
    );
    const createJobButton = screen.getByRole("button");
    fireEvent.click(createJobButton);
    const testTitle = screen.getByText("true");
    await waitFor(() => {
      expect(testTitle).toBeInTheDocument();
    });
    // expect(testTitle).toBeInTheDocument()
  });

  test("Clear and reset", async () => {
    const TestComponent = () => {
      const { state, createNewJob, resetCreateJob, clearJob, getOldJobs } =
        useContext(JobContext);
      const JobsArray = state && state.jobs.length;
      expect(JobsArray).toBe(0);
      return (
        <>
          <p>{state && state.isWorkingProperly.toString()}</p>
          <button
            onClick={() => {
              createNewJob({
                floor: "3",
                name: "Door Bell",
                isWorkingProperly: true,
                date: new Date().toLocaleString("tr-TR"),
              });
              getOldJobs(mockOldJobs);
              clearJob();
            }}
          >
            Create and reset jobs
          </button>
        </>
      );
    };
    render(
      <JobProvider>
        <TestComponent />
      </JobProvider>
    );
    const createJobButton = screen.getByRole("button");
    fireEvent.click(createJobButton);
    const testTitle = screen.getByText("false");
    await waitFor(() => {
      expect(testTitle).toBeInTheDocument();
    });
  });
});
