import Results from "@/Components/Results/Results";
import { STUDENTS_RESULTS } from "@/data/studentsResults";
import { notFound } from "next/navigation";

export default async function GradePage({ params }) {
  const { grade } = await params;

  const gradeNumber = Number(grade);

  if (isNaN(gradeNumber) || gradeNumber < 1 || gradeNumber > 3) notFound();

  // connect with backend
  const results = STUDENTS_RESULTS[grade];

  if (results?.length === 0)
    return <p>No results found for grade {gradeNumber}.</p>;

  const updatedResults = results
    .map((res) => {
      const { math, science, arabic, english } = res;
      const overall = math + science + arabic + english;
      const percent = Math.round((overall / 200) * 100 * 100) / 100;

      return { ...res, overall, percent };
    })
    .sort((a, b) => b.overall - a.overall);

  return <Results grade={gradeNumber} results={updatedResults} />;
}
