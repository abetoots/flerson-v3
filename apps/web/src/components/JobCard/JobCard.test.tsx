/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from "@testing-library/react";

import JobCard from "./JobCard";

describe("JobCard", () => {
  it('finds an "apply" anchor link and the correct details are visible to the user', () => {
    const employerName = "Company Name";
    const jobTitle = "Job Position";
    const location = "Worldwide";
    const employerUrl = "https://example.com"; //NOTE: This url's domain should be added to next.config.js image domains

    render(
      <JobCard
        href="https://example.com"
        category="Design"
        employerName={employerName}
        employerWebsite={employerUrl}
        highlightColor={"#000000"}
        imageUrl={"https://example.com"}
        jobTitle={jobTitle}
        onApply={() => {}}
        onTagClick={() => {}}
        location={location}
        tags={[]}
      />
    );

    const name = screen.getByText(employerName);
    expect(name).toBeVisible();
    const position = screen.getByText(jobTitle);
    expect(position).toBeVisible();
    const hiringFrom = screen.getByText(location);
    expect(hiringFrom).toBeVisible();
    const applyButton = screen.getByRole("button", { name: "Apply" });
    expect(applyButton).toBeVisible();
  });

  it("finds the company initials when no image is provided", () => {
    const employerName = "Company Name";

    render(
      <JobCard
        href="https://example.com"
        category="Design"
        employerName={employerName}
        employerWebsite="https://example.com"
        highlightColor={"#000000"}
        imageUrl={null}
        jobTitle="Job Title"
        onApply={() => {}}
        onTagClick={() => {}}
        location="Worldwide"
        tags={[]}
      />
    );

    const initials = screen.getByText("CN");
    expect(initials).toBeVisible();
  });
});
