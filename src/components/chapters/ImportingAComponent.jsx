import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const ImportingAComponent = () => {
  return (
    <PageContent>
      <p>Эта установка проекта поддерживает модули ES6 благодаря webpack.</p>

      <p>
        Несмотря на то что вы можете использовать <code>require()</code> а также <code>module.exports</code>,мы
        рекомендуем вам использовать{' '}
        <ChapterLink href='https://exploringjs.com/es6/ch_modules.html'>
          <code>import</code> а также <code>export</code>
        </ChapterLink>
        .
      </p>

      <p>Например:</p>

      <ChapterTitle anchorId='Button.js'>
        <code>Button.js</code>
      </ChapterTitle>

      <CodeBlock>
        <span>{`import React, { Component } from 'react';`}</span>
        <span>
          <br />
        </span>
        <span>{`class Button extends Component {`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`render() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// ...</span>
        <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>{`}`}</span>
        <span>
          <br />
        </span>
        <span>export default Button; // Don’t forget to use export default!</span>
      </CodeBlock>

      <ChapterTitle anchorId='DangerButton.js'>
        <code>DangerButton.js</code>
      </ChapterTitle>

      <CodeBlock>
        <span>{`import React, { Component } from 'react';`}</span>
        <span>import Button from './Button'; // Import a component from another file</span>
        <span>
          <br />
        </span>
        <span>{`class DangerButton extends Component {`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`render() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return <Button color="red" />;`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`}`}</span>
        <span>{`}`}</span>
        <span>
          <br />
        </span>
        <span>export default DangerButton;</span>
      </CodeBlock>

      <p>
        Помните о{' '}
        <ChapterLink href='https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281'>
          разница между default и named exports
        </ChapterLink>
        . Это частый источник ошибок.
      </p>

      <p>
        Мы предлагаем вам придерживаться использования импорта и экспорта по умолчанию, когда модуль экспортирует только
        одну вещь. (например, компонент). Это то, что вы получаете, когда используете <code>export default Button</code>{' '}
        а также <code>import Button from './Button'</code>.
      </p>

      <p>
        Именованный экспорт полезен для служебных модулей, которые экспортируют несколько функций. Модуль может иметь не
        более одного экспорта по умолчанию и столько именованных экспортов, сколько вам нужно.
      </p>

      <p>Узнайте больше о модулях ES6:</p>

      <ul>
        <li>
          <ChapterLink href='https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281'>
            Когда использовать фигурные скобки?
          </ChapterLink>
        </li>
        <li>
          <ChapterLink href='https://exploringjs.com/es6/ch_modules.html'>Изучение ES6: модули</ChapterLink>
        </li>
        <li>
          <ChapterLink href='https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules'>
            Понимание ES6: модули
          </ChapterLink>
        </li>
      </ul>

      <ChapterTitle anchorId='absolute-imports'>Absolute Imports</ChapterTitle>

      <p>
        Вы можете настроить свое приложение для поддержки импорта модулей с использованием абсолютных путей. Это можно
        сделать, настроив <code>jsconfig.json</code> или <code>tsconfig.json</code> файл в корне вашего проекта. Если вы
        используете TypeScript в своем проекте, у вас уже будет <code>tsconfig.json</code> файл.
      </p>

      <p>
        Ниже приведен пример <code>jsconfig.json</code> файла для проекта JavaScript. Вы можете создать файл, если он
        еще не существует:
      </p>

      <CodeBlock>
        <span>{`{`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`"compilerOptions": {`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"baseUrl": "src"</span>
        <span>&nbsp;&nbsp;&nbsp;{`},`}</span>
        <span>&nbsp;&nbsp;&nbsp;"include": ["src"]</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>
        Если вы используете TypeScript, вы можете настроить <code>baseUrl</code> параметр внутри{' '}
        <code>compilerOptions</code> вашего проекта <code>tsconfig.json</code>.
      </p>

      <p>
        Теперь, когда вы настроили свой проект для поддержки абсолютного импорта, если вы хотите импортировать модуль,
        расположенный в<code>src/components/Button.js</code>, вы можете импортировать модуль так:
      </p>

      <p>
        Для получения дополнительной информации об этих файлах конфигурации см.{' '}
        <ChapterLink href='https://code.visualstudio.com/docs/languages/jsconfig'>
          <code>jsconfig.json</code> reference
        </ChapterLink>{' '}
        и{' '}
        <ChapterLink href='https://www.typescriptlang.org/docs/handbook/tsconfig-json.html'>
          <code>tsconfig.json</code> reference
        </ChapterLink>{' '}
        документации.
      </p>
    </PageContent>
  );
};

export default ImportingAComponent;
