import { useContext } from 'react';
import { MarkDownContext } from '../../context/markdown-context';
import { IMarkDownContext } from '../../models/markdown-context.model';
import './mark-down-visualizer.scss';

function MarkDownVisualizer() {
  const { markDown } = useContext(MarkDownContext) as IMarkDownContext;

  return <div className="mark-down-container">{markDown.textContent}</div>;
}

export default MarkDownVisualizer;
