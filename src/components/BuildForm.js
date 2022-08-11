import Experience from './CVSections/Experience';
import Profile from './CVSections/Profile';
import Education from './CVSections/Education';
import Skills from './CVSections/Skills';

function BuildForm() {
  return (
    <div className="buildForm">
      <Profile />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default BuildForm;
