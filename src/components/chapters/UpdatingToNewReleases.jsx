import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';

const UpdatingToNewReleases = () => {
  return (
    <PageContent>
      <p>Create React App делится на два пакета:</p>
      <ul>
        <li>
          <code>create-react-app</code> это глобальная утилита командной строки,
          которую вы используете для создания новых проектов.
        </li>

        <li>
          <code>react-scripts</code> это зависимоси(modules) разработки в
          созданные проекты (в том числе этот).
        </li>
      </ul>

      <p>
        Когда вы запускаете<code>npx create-react-app my-app</code> он
        автоматически устанавливает последнюю версию приложения Create React.
      </p>

      <blockquote>
        Если вы ранее установили <code>create-response-app</code> глобально с
        помощью <code>npm install -g create-response-app</code>, перейдите по
        ссылке {''}
        <ChapterLink href='/getting-started/' isLink>
          с чего начать?
        </ChapterLink>{' '}
        чтобы узнать о текущих этапах установки.
      </blockquote>

      <p>
        Create React App создает проект с последней версией
        <code>react-scripts</code>, чтобы вы получили все новые функции и
        улучшения в вновь созданные приложения автоматически.
      </p>

      <p>
        Чтобы обновить существующий проект до новой версии{' '}
        <code>response-scripts</code>,{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md'>
          откройте журнал изменений
        </ChapterLink>{' '}
        ,найдите текущую версию (проверьте <code>package.json</code> в этой
        папку, если вы не уверены) и примените инструкции по миграции для более
        новых версии.
      </p>

      <p>
        В большинстве случаев достаточно изменить версию{' '}
        <code>react-scripts</code> в <code> package.json</code> и запустить
        команду <code>npm install</code> (или <code>yarn install</code>) в этой
        папке, но желательно ознакомиться с{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md'>
          журналом изменений{' '}
        </ChapterLink>{' '}
        на предмет потенциальных критических изменений.
      </p>

      <p>
        Мы обязуемся минимизировать критические изменения, чтобы вы могли
        безболезненно обновлять <code> react-scripts</code>.
      </p>
    </PageContent>
  );
};

export default UpdatingToNewReleases;
