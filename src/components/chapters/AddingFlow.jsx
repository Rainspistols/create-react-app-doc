import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';

const AddingFlow = () => {
  return (
    <PageContent>
      <p>
        Flow - это средство проверки статических типов, которое помогает писать код с меньшим количеством ошибок.
        Посмотрите это{' '}
        <ChapterLink href='https://medium.com/free-code-camp/why-use-static-types-in-javascript-part-1-8382da1e0adb'>
          введение в использование статических типов в JavaScript, если вы новичок в этой концепции
        </ChapterLink>
        .
      </p>

      <p>
        Последние версии <ChapterLink href='https://flow.org/'>Flow</ChapterLink> работают с проектами Create React App
        из коробки.
      </p>

      <p>Чтобы добавить Flow в проект Create React App, выполните следующие действия:</p>

      <ol>
        <li>
          {' '}
          Запустите <code>npm install --save flow-bin</code> (или <code>yarn add flow-bin</code>).
        </li>
        <li>
          {' '}
          Добавьте <code>"flow": "flow"</code> к <code>scripts</code> вашему разделу <code>package.json</code>.
        </li>
        <li>
          {' '}
          Запустите <code>npm run flow init</code> (или <code>yarn flow init</code>) создайте <code>.flowconfig</code>{' '}
          file в корневом каталоге.
        </li>
        <li>
          {' '}
          Добавьте <code>{`// @flow`}</code> к любым файлам, которые вы хотите проверять (например, к{' '}
          <code>src/App.js</code>
          {`)`}.
        </li>
      </ol>

      <p>
        Теперь вы можете запустить <code>npm run flow</code> (или <code>yarn flow</code>) чтобы проверить файлы на
        наличие ошибок типа.Вы при желании можете использовать расширение для вашей IDE, например{' '}
        <ChapterLink href='https://github.com/flowtype/flow-for-vscode'>Flow Language Support</ChapterLink> for Visual
        Studio Code, или использовать стандарт протокола языкового сервера (e.g.{' '}
        <ChapterLink href='https://github.com/prabirshrestha/vim-lsp/wiki/Servers-Flow'>vim LSP</ChapterLink>) чтобы
        получать подсказки при вводе.
      </p>

      <p>
        Если вы хотите использовать {''}
        <ChapterLink href='/importing-a-component#absolute-imports' isLink>
          абсолютный импорт
        </ChapterLink>{' '}
        с Flow, обязательно добавьте следующую строку в свой <code>.flowconfig</code> чтобы Flow знал об этом:
      </p>
    </PageContent>
  );
};

export default AddingFlow;
