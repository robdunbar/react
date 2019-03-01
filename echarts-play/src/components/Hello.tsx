import * as React from 'react';

export interface IProps {
  name: string;
  level?: number;
}

function Hello({ name, level = 1 }: IProps) {
  if (level <= 0) {
    throw new Error('You could be a little more enthusiastic! ;)');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(level)}
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}