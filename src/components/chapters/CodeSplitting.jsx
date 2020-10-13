import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const CodeSplitting = () => {
  return (
    <PageContent>
      <p>
        Вместо того, чтобы загружать все приложение до того, как пользователи смогут их использовать, разделение кода
        позволяет разбить код на небольшие фрагменты, которые затем можно загрузить по необходимости.
      </p>

      <p>
        Эта настройка проекта поддерживает разделение кода c помощью{' '}
        <ChapterLink href='https://2ality.com/2017/01/import-operator.html#loading-code-on-demand'>
          динамичных <code>import()</code>
        </ChapterLink>
        . Это <ChapterLink href='https://github.com/tc39/proposal-dynamic-import'>предложение</ChapterLink> находится на
        стадии 4. <code>import()</code> функционально-подобная форма принимает имя модуля в качестве аргумента и
        возвращает <code>Promise</code> который всегда преобразуется в объект пространства имен модуля.
      </p>

      <p>Вот пример:</p>

      <ChapterTitle anchorId='moduleA.js'>
        <code>moduleA.js</code>
      </ChapterTitle>

      <CodeBlock>
        <span>const moduleA = 'Hello';</span>
        <span>
          <br />
        </span>
        <span>{`export { moduleA };`}</span>
      </CodeBlock>

      <ChapterTitle anchorId='App.js'>
        <code>App.js</code>
      </ChapterTitle>

      <CodeBlock>
        <span>{`import React, { Component } from 'react';`}</span>
        <span>
          <br />
        </span>
        <span>{`class App extends Component {`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`handleClick = () => {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;import('./moduleA')</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`.then(({ moduleA }) => {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Use moduleA</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`})`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`.catch(err => {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Handle failure</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`});`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`};`}</span>
        <span>
          <br />
        </span>
        <span>&nbsp;&nbsp;&nbsp;{`render() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return (`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<button onClick={this.handleClick}>Load</button>`}
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`);`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>{`}`}</span>
        <span>
          <br />
        </span>
        <span>export default App;</span>
      </CodeBlock>

      <p>
        Это сделает <code>moduleA.js</code> и все его уникальные зависимости в виде отдельного блока, который
        загружается только после того как пользователь нажимает кнопку 'Load'. Для получения дополнительной информации о
        chunks которые созданы, см. раздел{' '}
        <ChapterLink href='/production-build/' isLink>
          производственная сборка
        </ChapterLink>
        .
      </p>

      <p>
        Вы также можете использовать его с <code>async</code> / <code>async</code> синтаксисом, если вы предпочитаете
        его.
      </p>

      <ChapterTitle anchorId='With-React-Router'>With React Router</ChapterTitle>

      <p>
        Если вы используете React Router, ознакомьтесь с{' '}
        <ChapterLink href='https://reactjs.org/docs/code-splitting.html#route-based-code-splitting'>
          этим руководством
        </ChapterLink>
        .
      </p>

      <p>
        Также проверьте <ChapterLink href='https://reactjs.org/docs/code-splitting.html'>Разделение кода</ChapterLink>{' '}
        раздел в документации React.
      </p>
    </PageContent>
  );
};

export default CodeSplitting;
