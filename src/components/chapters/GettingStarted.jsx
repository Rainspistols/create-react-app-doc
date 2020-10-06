import React from 'react';
import ChapterH2 from '../../UI/ChapterH2';
import PageContent from '../../layouts/PageContent';
import CodeBlock from '../../UI/CodeBlock';

const GettingStarted = () => {
  return (
    <PageContent>
      <p>
        Create React App это официально поддерживаемый способ создания
        одностраничного React приложения. Он предлагает современную настройку
        сборки без конфигурации.
      </p>
      <ChapterH2 anchorId='quick-start'> Быстрый старт</ChapterH2>

      <CodeBlock>
        <span>npx create-react-app my-app</span>
        <span>cd my-app</span>
        <span>npm start</span>
      </CodeBlock>

      <blockquote>
        Если вы ранее установили приложение <code>create-react-app</code>{' '}
        глобально c помощью <code>npm install -g create-react-app</code>, мы
        рекомендуем удалить пакет с помощью{' '}
        <code>npm uninstall -g create-react-app</code>, чтобы убедиться, что npx
        всегда использует последнюю версию версия.
      </blockquote>
      <p>
        <em>
          (
          <a href='https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b'>
            npx
          </a>{' '}
          используется с npm 5.2+ и выше, см.{' '}
          <a href='https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f'>
            инструкции для более старых версий npm версии
          </a>
          )
        </em>
      </p>

      <p>
        Затем откройте {''}
        <a href='http://localhost:3000/'>http://localhost:3000/</a> чтобы
        увидеть ваше приложение.
      </p>

      <p>
        Когда вы будете готовы к развертыванию build версии, создайте
        миниатюрный пакет с <code>npm run build.</code>
      </p>

      <p>
        <img
          src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg'
          alt='npm start'
          width='600'
          style={{ margin: '0 auto' }}
        />
      </p>

      <ChapterH2 as='h3' anchorId='get-started-immediately'>
        Начните немедленно
      </ChapterH2>

      <p>
        Вам не нужно устанавливать или настраивать такие инструменты, как
        webpack или Babel. Они предварительно настроены и скрыты, поэтому вы
        можете сосредоточиться на коде.
      </p>
      <p>Создайте проект, и все готово.</p>

      <ChapterH2 anchorId='creating-an-app'>Создание приложения</ChapterH2>
    </PageContent>
  );
};

export default GettingStarted;
