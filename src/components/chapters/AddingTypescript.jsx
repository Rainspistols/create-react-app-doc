import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const AddingTypescript = () => {
  return (
    <PageContent>
      <blockquote>
        Примечание: эта функция доступна в <code>react-scripts@2.1.0</code> и выше.
      </blockquote>

      <p>
        <ChapterLink href='https://www.typescriptlang.org/'>TypeScript</ChapterLink> представляет собой типизированный
        надмножество JavaScript, которое компилируется в простой JavaScript.
      </p>

      <ChapterTitle anchorId='installation'>Установка</ChapterTitle>

      <p>
        {' '}
        Чтобы начать новый проект Create React App с
        <ChapterLink href='https://www.typescriptlang.org/'>TypeScript</ChapterLink>, вы можете запустить:
      </p>

      <CodeBlock>
        <span>npx create-react-app my-app --template typescript</span>
        <span>
          <br />
        </span>
        <span># or</span>
        <span>
          <br />
        </span>
        <span>yarn create react-app my-app --template typescript</span>
      </CodeBlock>

      <blockquote>
        <p>
          Если вы ранее установили <code>create-react-app</code> глобально через{' '}
          <code>npm install -g create-react-app</code>, мы рекомендуем вам удалить пакет, используя{' '}
          <code>npm uninstall -g create-react-app</code> чтобы гарантировать, что <code>npx</code> всегда использует
          самую последнюю версия.
        </p>

        <p>
          Глобальные установки <code>create-react-app</code> больше не поддерживаются.
        </p>
      </blockquote>

      <p>
        Добавьте <ChapterLink href='https://www.typescriptlang.org/'>TypeScript</ChapterLink> к Create React App
        project, установите это:
      </p>

      <CodeBlock>
        <span>npm install --save typescript @types/node @types/react @types/react-dom @types/jest</span>
        <span>
          <br />
        </span>
        <span># or</span>
        <span>
          <br />
        </span>
        <span>yarn add typescript @types/node @types/react @types/react-dom @types/jest</span>
      </CodeBlock>

      <p>
        Затем переименуйте любой файл в файл TypeScript. (e.g. <code>src/index.js</code> to codesrc/index.tsx) и{' '}
        <strong>перезапустите свой сервер разработки!</strong>
      </p>

      <p>
        Типовые ошибки будут отображаться в той же консоли, что и при сборке. Вам нужно будет исправить ошибки этого
        типа, прежде чем вы продолжите разработку или build свой проект. Для расширенной настройки{' '}
        <ChapterLink href='/advanced-configuration/' isLink>
          смотрите здесь
        </ChapterLink>
        .
      </p>

      <ChapterTitle anchorId='getting-started-with-typeScript-and-react'>
        Начало работы с TypeScript и React
      </ChapterTitle>

      <p>
        Вы не обязаны создавать{' '}
        <ChapterLink href='https://www.typescriptlang.org/docs/handbook/tsconfig-json.html'>
          <code>tsconfig.json</code> файл
        </ChapterLink>
        , один будет сделан для вас. Вам разрешено редактировать сгенерированную конфигурацию TypeScript.
      </p>

      <ul>
        <li>
          <ChapterLink href='https://www.typescriptlang.org/'>Справочник TypeScript </ChapterLink>
        </li>
        <li>
          <ChapterLink href='https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react'>
            Пример на React TypeScript{' '}
          </ChapterLink>
          <li>
            <ChapterLink href='https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react'>
              React + TypeScript Cheatsheets
            </ChapterLink>{' '}
            хороший обзор того, как использовать React с TypeScript
          </li>
        </li>
      </ul>

      <ChapterTitle anchorId='troubleshooting'>Исправление проблем</ChapterTitle>

      <p>
        Если ваш проект не создан с включенным TypeScript, npx может использовать кешированную версию{' '}
        <code>create-react-app</code>. Удалите ранее установленные версии с помощью npm uninstall{' '}
        <code>-g create-react-app</code> (смотрите{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/issues/6119#issuecomment-451614035'>
          #6119
        </ChapterLink>
        ).
      </p>

      <p>
      Если вы в настоящее время используете <ChapterLink href='https://github.com/wmonk/create-react-app-typescript/'>create-react-app-typescript</ChapterLink>, см. <ChapterLink href='https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/'>эту статью</ChapterLink>, чтобы узнать, как перейти на приложение Create React.
      </p>

      <p>Постоянные перечисления и пространства имен не поддерживаются, вы можете узнать об ограничениях <ChapterLink href='https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats'>использование Babel с TypeScript</ChapterLink>.</p>
    </PageContent>
  );
};

export default AddingTypescript;
