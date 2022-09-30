import { useContext } from 'react';
import { MarkDownContext } from '../../context/markdown-context';
import { IMarkDownContext } from '../../models/markdown-context.model';
import { MarkDownElement, TagType } from '../../models/markdown-element.model';
import './mark-down-visualizer.scss';

function MarkDownVisualizer() {
  const { markDown } = useContext(MarkDownContext) as IMarkDownContext;

  const transformText = (text: string): MarkDownElement[] => {
    const regex = /\r|\n/g;
    const paragraphs = text.split(regex);
    if (paragraphs.length > 0) {
      return paragraphs.map((lineText) => {
        const regexList = [
          {
            regexp: /(^#\s)([a-z0-9]+)/g,
            type: TagType.h1,
            replace: /#/
          },
          {
            regexp: /(^##\s)([a-z0-9]+)/g,
            type: TagType.h2,
            replace: /##/
          },
          {
            regexp: /(^---)/g,
            type: TagType.hr,
            replace: /---/
          }
        ];

        for (const regexElement of regexList) {
          if (regexElement.regexp.test(lineText)) {
            return {
              type: regexElement.type,
              content: lineText.replace(regexElement.replace, '')
            };
          }
        }

        return {
          type: TagType.any,
          content: lineText
        };
      });
    }
    return [];
  };

  return (
    <div className="mark-down-container">
      {transformText(markDown.textContent).map((element, index) => {
        switch (element.type) {
          case TagType.h1:
            return <h1 key={index}>{element.content}</h1>;
          case TagType.h2:
            return <h2 key={index}>{element.content}</h2>;
          case TagType.hr:
            return <hr key={index} />;
          default:
            return <p key={index}>{element.content}</p>;
        }
      })}
    </div>
  );
}

export default MarkDownVisualizer;
