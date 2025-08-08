import { saveSubmission } from '@/lib/ubmissionStore';
import { v4 as uuidv4 } from 'uuid'; // install with: npm i uuid

...

const handleRun = async () => {
  setIsRunning(true);
  setOutput('Running...');

  try {
    const result = await runCode(code, languageId);
    let finalOutput = '';

    if (result.stderr) {
      finalOutput = atob(result.stderr);
    } else if (result.compile_output) {
      finalOutput = atob(result.compile_output);
    } else {
      finalOutput = atob(result.stdout);
    }

    setOutput(finalOutput);

    saveSubmission({
      id: uuidv4(),
      code,
      languageId,
      languageName: getLangName(languageId),
      output: finalOutput,
      timestamp: new Date().toLocaleString(),
    });
  } catch (err) {
    console.error(err);
    setOutput('Error running code.');
  }

  setIsRunning(false);
};

function getLangName(id: number) {
  switch (id) {
    case 54: return 'C++';
    case 71: return 'Python';
    case 62: return 'Java';
    case 63: return 'JavaScript';
    default: return 'Unknown';
  }
}
