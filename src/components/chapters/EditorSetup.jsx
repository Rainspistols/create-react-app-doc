import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const EditorSetup = () => {
  return (
    <PageContent>
      <p>
        Create React App поставляется с набором инструментов, которые улучшают
        редактирование - если они настроены правильно. Вот несколько советов,
        которые помогут увеличить вашу продуктивность:
      </p>

      <ChapterTitle anchorId='syntax-highlighting'>
        Подсветка синтаксиса
      </ChapterTitle>

      <p>
        Чтобы настроить подсветку синтаксиса в вашем любимом текстовом
        редакторе, перейдите в {''}
        <ChapterLink href='https://babeljs.io/docs/en/editors/'>
          соответствующую страницу документации Babel
        </ChapterLink>{' '}
        и следуйте инструкциям. Охвачены некоторые из самых популярных
        редакторов.
      </p>

      <ChapterTitle href='displaying-lint-output-in-the-editor'>
        Отображение вывода Lint в редакторе
      </ChapterTitle>

      <blockquote>
        Примечание: эта функция доступна в <code> response-scripts@0.2.0 </code>{' '}
        {''}и выше.
      </blockquote>

      <blockquote>
        Это работает "из коробки" для вновь созданных проектов с {''}
        <code> react-scripts@2.0.3 </code> и выше.
      </blockquote>

      <blockquote>Он также работает только с npm 3 и выше.</blockquote>

      <p>
        Некоторые редакторы, включая Sublime Text, Atom и Visual Studio Code,
        предоставляют плагины для ESLint.
      </p>

      <p>
        Для линтинга они не требуются. Вы должны увидеть вывод линтера прямо в
        вашем терминале, а также в консоли браузера. Если вы предпочитаете,
        чтобы результаты линта отображались прямо в вашем редакторе, убедитесь,
        что вы установили плагин/расширение ESLint.
      </p>

      <p>
        Обратите внимание, что даже если вы настроите конфигурацию ESLint,{' '}
        <strong>эти изменения повлияют только на интеграцию редактора</strong>.
        Они не повлияют на вывод lint в терминале и в браузере. Это связано с
        тем, что приложение Create React намеренно предоставляет минимальный
        набор правил для поиска распространенных ошибок.
      </p>

      <p>
        Если вы хотите применить стиль кодирования для своего проекта,
        рассмотрите возможность использования{' '}
        <ChapterLink href='https://github.com/jlongster/prettier'>
          Prettier
        </ChapterLink>{' '}
        вместо правил стиля ESLint.
      </p>

      <ChapterTitle anchorId='extending-the-ESLint-config' as='h3'>
        Экспериментально: расширение конфигурации ESLint
      </ChapterTitle>

      <p>
        Мы понимаем, что в некоторых случаях требуется дополнительная настройка.
        Теперь можно расширить базовую конфигурацию ESLint, установив {''}
        <code>EXTEND_ESLINT</code> значение переменной на <code>true</code>.
        Посмотрите{' '}
        <ChapterLink href='/advanced-configuration/' isLink>
          расширенную настройку
        </ChapterLink>{' '}
        для получения дополнительной информации о доступных переменных среды.
      </p>

      <p>
        Обратите внимание, что любые правила, установленные на{' '}
        <code>"error"</code> остановят сборку проекта.
      </p>

      <p>Следует помнить несколько вещей:</p>

      <ol>
        <li>
          Мы настоятельно рекомендуем расширить базовую конфигурацию, так как ее
          удаление может вызвать трудноисправимые проблемы.
        </li>
        <li>
          При работе с TypeScript вам необходимо предоставить{' '}
          <code>overrides</code> объект для правил, которые должны нацеливаться{' '}
          <i>только</i> на файлы TypeScript.
        </li>
      </ol>

      <p>В приведенном ниже примере:</p>

      <ul>
        <li>базовая конфигурация была расширена общей конфигурацией ESLint,</li>
        <li>
          установлено новое правило, которое применяется ко всем файлам
          JavaScript и TypeScript, и
        </li>
        <li>
          было установлено новое правило, которое нацелено только на файлы
          TypeScript.
        </li>
      </ul>

      <CodeBlock>
        <span>&#123;</span>
        <span>&nbsp;&nbsp;&nbsp;"eslintConfig":&nbsp;&#123;</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"extends":&nbsp; ["react-app",
          "shared-config"],
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rules": &#123;</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"additional-rule":
          "warn"
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"overrides":&nbsp;[</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"files":
          ["**/*.ts?(x)"],
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rules":
          &#123;
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"additional-typescript-only-rule":
          "warn"
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>
        <span>&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>&#125;</span>
      </CodeBlock>

      <ChapterTitle anchorId='debugging-in-the-editor'>
        Отладка в редакторе
      </ChapterTitle>

      <p>
      Эта функция в настоящее время поддерживается только в{' '}
        <ChapterLink href='https://code.visualstudio.com/'>
          Visual Studio Code
        </ChapterLink>{' '}
        и{' '}
        <ChapterLink href='https://www.jetbrains.com/webstorm/'>
          WebStorm
        </ChapterLink>
        .
      </p>

      <p>
      Visual Studio Code и WebStorm сразу же поддерживают отладку с помощью приложения Create React. Это позволяет вам, как разработчику, писать и отлаживать свой код React, не выходя из редактора, и, что наиболее важно, позволяет вести непрерывный рабочий процесс разработки, при котором переключение контекста минимально, так как вам не нужно переключаться между инструментами.
      </p>

      <ChapterTitle anchorId='visual-studio-code' as='h3'>Visual Studio Code</ChapterTitle>
    </PageContent>
  );
};

export default EditorSetup;
