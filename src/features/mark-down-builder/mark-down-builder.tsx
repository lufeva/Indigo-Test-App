import './mark-down-builder.scss';
import TextArea from '../../shared/text-area/text-area';
import MarkDownContextProvider from '../../context/markdown-context';
import MarkDownVisualizer from '../../shared/markdown-visualizer/mark-down-visualizer';

function MarkDownBuilder() {
  return (
    <div className="mark-done-wrapper">
      <MarkDownContextProvider>
        <div className="mark-done-content">
          <h2>Insert Text</h2>
          <TextArea />
        </div>
        <div className="mark-done-content">
          <h2>Result</h2>
          <MarkDownVisualizer />
        </div>
      </MarkDownContextProvider>
    </div>
  );
}

export default MarkDownBuilder;
