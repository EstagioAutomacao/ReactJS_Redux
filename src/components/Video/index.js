import React from "react";
import { connect } from "react-redux";
const Video = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <span>
        <strong>Módulo:</strong> {activeModule.title}
      </span>
      <br />
      <span>
        <strong>Aula:</strong> {activeLesson.title}
      </span>
    </div>
  );
};

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
