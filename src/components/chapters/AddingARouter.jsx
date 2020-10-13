import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import CodeBlock from '../../UI/CodeBlock';

const AddingARouter = () => {
  return (
    <PageContent>
      <p>
        Create React App не имеет конкретного решение для маршрутизации, но{' '}
        <ChapterLink href='https://reactrouter.com/web/guides/quick-start'>React Router</ChapterLink> самый популярный.
      </p>

      <p>Чтобы добавить его, запустите:</p>

      <CodeBlock>
        <span>npm install --save react-router-dom</span>
      </CodeBlock>

      <p>
        В качестве альтернативы вы можете использовать <code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add react-router-dom</span>
      </CodeBlock>

      <p>
        Чтобы начать использовать React Router, удалите весь код в <code>src/App.js</code> и замените его любым из
        примеров на своем веб-сайте.{' '}
        <ChapterLink href='https://reactrouter.com/web/example/basic'>Базовый пример</ChapterLink> это хорошее место для
        начала.
      </p>

      <p>
        Обратите внимание, что{' '}
        <ChapterLink href='/deployment/#serving-apps-with-client-side-routing' isLink>
          вам может потребоваться настроить рабочий сервер для поддержки маршрутизации на стороне клиента
        </ChapterLink>{' '}
        перед развертыванием приложения.
      </p>
    </PageContent>
  );
};

export default AddingARouter;
