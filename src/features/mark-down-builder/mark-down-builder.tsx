import './mark-down-builder.scss';
import TextArea from '../../shared/text-area/text-area';
import MarkDownContextProvider from '../../context/markdown-context';
import MarkDownVisualizer from '../../shared/markdown-visualizer/mark-down-visualizer';

function MarkDownBuilder() {
  return (
    <div>
      <MarkDownContextProvider>
        <h2>Insert Text</h2>
        <TextArea />
        <h2>Result</h2>
        <MarkDownVisualizer />
      </MarkDownContextProvider>
    </div>
  );
}

export default MarkDownBuilder;
