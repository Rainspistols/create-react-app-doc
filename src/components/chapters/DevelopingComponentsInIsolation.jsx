import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const DevelopingComponentsInIsolation = () => {
  return (
    <PageContent>
      <p>
        Обычно в приложении есть много компонентов пользовательского интерфейса, и каждый из них имеет много разных
        состояний. Например, компонент базовой кнопки может иметь следующие состояния:
      </p>

      <ul>
        <li>В обычном состоянии с текстовой меткой.</li>
        <li>В отключенном режиме.</li>
        <li>В состоянии загрузки.</li>
      </ul>

      <p>Обычно эти состояния трудно увидеть, не запустив похожего приложения.</p>

      <p>
        По умолчанию приложение Create React не включает никаких инструментов для этого, но вы можете добавить{' '}
        <ChapterLink href='https://storybook.js.org/'> Storybook for React </ChapterLink>(
        <ChapterLink href='https://github.com/storybookjs/storybook'>исходный код</ChapterLink>) или{' '}
        <ChapterLink href='https://react-styleguidist.js.org/'>React Styleguidist</ChapterLink>(
        <ChapterLink href='https://github.com/styleguidist/react-styleguidist'>исходный код</ChapterLink>) в свой
        проект. Это сторонние инструменты, которые позволяют разрабатывать компоненты и видеть все их состояния отдельно
        от вашего приложения.
      </p>

      <div>
        <img src='https://i.imgur.com/7CIAWpB.gif' alt='Storybook for React Demo' />
      </div>

      <p>
        Вы также можете сделать Deploy свой Storybook или руководство по стилю как статическое приложение. Таким
        образом, каждый в вашей команде может просматривать и проверять различные состояния компонентов
        пользовательского интерфейса без запуска внутреннего сервера или создания учетной записи в вашем приложении.
      </p>

      <ChapterTitle anchorId='getting-started-with-storybook'>Как начать с Storybook</ChapterTitle>

      <p>
        Storybook - это среда разработки для компонентов React UI. Он позволяет вам просматривать библиотеку
        компонентов, просматривать различные состояния каждого компонента, а также в интерактивном режиме разрабатывать
        и тестировать компоненты.
      </p>

      <p>Выполните следующую команду в каталоге вашего приложения:</p>

      <CodeBlock>
        <span>npx -p @storybook/cli sb init</span>
      </CodeBlock>

      <p>После этого следуйте инструкциям на экране.</p>
      <p>Узнайте больше о React Storybook:</p>

      <ul>
        <li>
          <ChapterLink href='https://www.learnstorybook.com/'>Изучите Storybook (tutorial)</ChapterLink>
        </li>
        <li>
          <ChapterLink href='https://storybook.js.org/docs/react/get-started/introduction'>Документация</ChapterLink>
        </li>
        <li>
          <ChapterLink href='https://github.com/storybookjs/storybook'>Репозиторий GitHub</ChapterLink>
        </li>
        <li>
          <ChapterLink href='https://github.com/storybookjs/storybook/tree/master/addons/storyshots'>
            Snapshot testing UI
          </ChapterLink>{' '}
          с помощью Storybook + addon/storyshot
        </li>
      </ul>

      <ChapterTitle anchorId='getting-started-with-styleguidist'>Как начать с Styleguidist</ChapterTitle>

      <p>
        Styleguidist сочетает в себе руководство по стилю, где все ваши компоненты представлены на одной странице с их
        документацией по реквизитам и примерами использования, со средой для изолированной разработки компонентов,
        аналогичной Storybook. В Styleguidist вы пишете примеры в Markdown, где каждый фрагмент кода отображается в виде
        живой редактируемой площадки.
      </p>

      <p>Сначала установите Styleguidist:</p>

      <CodeBlock>
        <span>npm install --save react-styleguidist</span>
      </CodeBlock>

      <p>
        Alternatively you may use <code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add react-styleguidist</span>
      </CodeBlock>

      <p>
        Then, add these scripts to your <code>package.json</code>:
      </p>

      <CodeBlock>
        <span>"scripts": &#123;</span>
        <span>+&nbsp;&nbsp;&nbsp;"styleguide": "styleguidist server",</span>
        <span>+&nbsp;&nbsp;&nbsp;"styleguide:build": "styleguidist build",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"start": "react-scripts start",</span>
      </CodeBlock>

      <p>Затем выполните следующую команду в каталоге вашего приложения:</p>

      <CodeBlock>
        <span>npm run styleguide</span>
      </CodeBlock>

      <p>После этого следуйте инструкциям на экране.</p>

      <p>Узнайте больше о React Styleguidist:</p>

      <ul>
        <li>
          <ChapterLink href='https://github.com/styleguidist/react-styleguidist'>GitHub репозиторий</ChapterLink>
        </li>
        <li>
          <ChapterLink href='https://github.com/styleguidist/react-styleguidist'>Документация</ChapterLink>
        </li>
      </ul>
    </PageContent>
  );
};

export default DevelopingComponentsInIsolation;
