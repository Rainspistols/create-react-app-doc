import React from 'react';
import ChapterParagraph from '../../UI/ChapterParagraph';
import ChapterH2 from '../../UI/ChapterH2';
import ChapterLink from '../../UI/ChapterLink';
import Code from '../../UI/Code';
import Blockquote from '../../UI/Blockquote';

const GettingStarted = () => {
  return (
    <article>
      <ChapterParagraph>
        Create React App это официально поддерживаемый способ создания
        одностраничного React приложения. Он предлагает современную настройку
        сборки без конфигурации.
      </ChapterParagraph>
      <ChapterH2 anchorId='quick-start'> Быстрый старт</ChapterH2>
      <Code>
        <span>npx create-react-app my-app</span>
        <span>cd my-app</span>
        <span>npm start</span>
      </Code>

      <Blockquote>
        Если вы ранее установили приложение <code>create-react-app</code>{' '}
        глобально c помощью <code>npm install -g create-react-app</code>, мы
        рекомендуем удалить пакет с помощью{' '}
        <code>npm uninstall -g create-react-app</code>, чтобы убедиться, что npx
        всегда использует последнюю версию версия.
      </Blockquote>
      <ChapterParagraph>
        <em>
          (
          <ChapterLink href='https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b'>
            npx
          </ChapterLink>{' '}
          используется с npm 5.2+ и выше, см.{' '}
          <ChapterLink href='https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f'>
            инструкции для более старых версий npm версии
          </ChapterLink>
          )
        </em>
      </ChapterParagraph>

      <ChapterParagraph>
        Затем откройте {''}
        <ChapterLink href='http://localhost:3000/'>
          http://localhost:3000/
        </ChapterLink>{' '}
        чтобы увидеть ваше приложение.
      </ChapterParagraph>

      <ChapterParagraph>
        Когда вы будете готовы к развертыванию build версии, создайте
        миниатюрный пакет с <code>npm run build.</code>
      </ChapterParagraph>

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

      <ChapterParagraph>
        Вам не нужно устанавливать или настраивать такие инструменты, как
        webpack или Babel. Они предварительно настроены и скрыты, поэтому вы
        можете сосредоточиться на коде.
      </ChapterParagraph>
      <ChapterParagraph>Создайте проект, и все готово.</ChapterParagraph>

      <ChapterH2 anchorId='creating-an-app'>Создание приложения</ChapterH2>
    </article>
  );
};

export default GettingStarted;
