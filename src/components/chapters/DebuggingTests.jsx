import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const DebuggingTests = () => {
  return (
    <PageContent>
      <p>
        Есть разные способы настроить отладчик для ваших тестов Jest. Мы рассматриваем отладку в Chrome и{' '}
        <ChapterLink href='https://code.visualstudio.com/'>Visual Studio Code</ChapterLink>.
      </p>

      <blockquote>Примечание: для отладочных тестов требуется Node 8 или выше.</blockquote>

      <ChapterTitle anchorId='debugging-tests-in-chrome'>Отладочные тесты в Chrome</ChapterTitle>

      <p>
        Добавьте следующее в <code>scripts</code> раздел в вашем проекте <code>package.json</code>
      </p>

      <CodeBlock>
        <span>{`"scripts": {`}</span>
        <span>&nbsp;&nbsp;&nbsp;"test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>
        Разместите <code>debugger</code>; операторы в любом тесте и запускайте:
      </p>

      <CodeBlock>
        <span>$ npm run test:debug</span>
      </CodeBlock>

      <p>
        Это запустит ваши тесты Jest, но сделайте паузу перед выполнением, чтобы отладчик мог подключиться к процессу.
      </p>

      <p>Откройте следующее в Chrome</p>

      <CodeBlock>
        <span>about:inspect</span>
      </CodeBlock>
    </PageContent>
  );
};

export default DebuggingTests;
