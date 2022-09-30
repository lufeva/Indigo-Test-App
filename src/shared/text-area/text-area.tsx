import { useContext } from 'react';
import { MarkDownContext } from '../../context/markdown-context';
import { IMarkDownContext } from '../../models/markdown-context.model';
import './text-area.scss';

function TextArea() {
  const { updateMarkDownContext } = useContext(MarkDownContext) as IMarkDownContext;

  const onInputTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    updateMarkDownContext(newValue);
  };

  return (
    <div className="text-area-container">
      <textarea className="text-area-element" onChange={onInputTextArea} rows={5} />
    </div>
  );
}

export default TextArea;
