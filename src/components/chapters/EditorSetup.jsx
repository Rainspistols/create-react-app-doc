import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const EditorSetup = () => {
  return (
    <PageContent>
      <p>
        Create React App поставляется с набором инструментов, которые улучшают редактирование - если они настроены
        правильно. Вот несколько советов, которые помогут увеличить вашу продуктивность:
      </p>

      <ChapterTitle anchorId='syntax-highlighting'>Подсветка синтаксиса</ChapterTitle>

      <p>
        Чтобы настроить подсветку синтаксиса в вашем любимом текстовом редакторе, перейдите в {''}
        <ChapterLink href='https://babeljs.io/docs/en/editors/'>
          соответствующую страницу документации Babel
        </ChapterLink>{' '}
        и следуйте инструкциям. Охвачены некоторые из самых популярных редакторов.
      </p>

      <ChapterTitle href='displaying-lint-output-in-the-editor'>Отображение вывода Lint в редакторе</ChapterTitle>

      <blockquote>
        Примечание: эта функция доступна в <code> response-scripts@0.2.0 </code> {''}и выше.
      </blockquote>

      <blockquote>
        Это работает "из коробки" для вновь созданных проектов с {''}
        <code> react-scripts@2.0.3 </code> и выше.
      </blockquote>

      <blockquote>Он также работает только с npm 3 и выше.</blockquote>

      <p>Некоторые редакторы, включая Sublime Text, Atom и Visual Studio Code, предоставляют плагины для ESLint.</p>

      <p>
        Для линтинга они не требуются. Вы должны увидеть вывод линтера прямо в вашем терминале, а также в консоли
        браузера. Если вы предпочитаете, чтобы результаты линта отображались прямо в вашем редакторе, убедитесь, что вы
        установили плагин/расширение ESLint.
      </p>

      <p>
        Обратите внимание, что даже если вы настроите конфигурацию ESLint,{' '}
        <strong>эти изменения повлияют только на интеграцию редактора</strong>. Они не повлияют на вывод lint в
        терминале и в браузере. Это связано с тем, что приложение Create React намеренно предоставляет минимальный набор
        правил для поиска распространенных ошибок.
      </p>

      <p>
        Если вы хотите применить стиль кодирования для своего проекта, рассмотрите возможность использования{' '}
        <ChapterLink href='https://github.com/jlongster/prettier'>Prettier</ChapterLink> вместо правил стиля ESLint.
      </p>

      <ChapterTitle anchorId='extending-the-ESLint-config' as='h3'>
        Экспериментально: расширение конфигурации ESLint
      </ChapterTitle>

      <p>
        Мы понимаем, что в некоторых случаях требуется дополнительная настройка. Теперь можно расширить базовую
        конфигурацию ESLint, установив {''}
        <code>EXTEND_ESLINT</code> значение переменной на <code>true</code>. Посмотрите{' '}
        <ChapterLink href='/advanced-configuration/' isLink>
          расширенную настройку
        </ChapterLink>{' '}
        для получения дополнительной информации о доступных переменных среды.
      </p>

      <p>
        Обратите внимание, что любые правила, установленные на <code>"error"</code> остановят сборку проекта.
      </p>

      <p>Следует помнить несколько вещей:</p>

      <ol>
        <li>
          Мы настоятельно рекомендуем расширить базовую конфигурацию, так как ее удаление может вызвать трудноисправимые
          проблемы.
        </li>
        <li>
          При работе с TypeScript вам необходимо предоставить <code>overrides</code> объект для правил, которые должны
          нацеливаться <i>только</i> на файлы TypeScript.
        </li>
      </ol>

      <p>В приведенном ниже примере:</p>

      <ul>
        <li>базовая конфигурация была расширена общей конфигурацией ESLint,</li>
        <li>установлено новое правило, которое применяется ко всем файлам JavaScript и TypeScript, и</li>
        <li>было установлено новое правило, которое нацелено только на файлы TypeScript.</li>
      </ul>

      <CodeBlock>
        <span>&#123;</span>
        <span>&nbsp;&nbsp;&nbsp;"eslintConfig":&nbsp;&#123;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"extends":&nbsp; ["react-app", "shared-config"],</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rules": &#123;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"additional-rule": "warn"</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"overrides":&nbsp;[</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"files": ["**/*.ts?(x)"],</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rules": &#123;</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"additional-typescript-only-rule":
          "warn"
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>
        <span>&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>&#125;</span>
      </CodeBlock>

      <ChapterTitle anchorId='debugging-in-the-editor'>Отладка в редакторе</ChapterTitle>

      <p>
        Эта функция в настоящее время поддерживается только в{' '}
        <ChapterLink href='https://code.visualstudio.com/'>Visual Studio Code</ChapterLink> и{' '}
        <ChapterLink href='https://www.jetbrains.com/webstorm/'>WebStorm</ChapterLink>.
      </p>

      <p>
        Visual Studio Code и WebStorm сразу же поддерживают отладку с помощью приложения Create React. Это позволяет
        вам, как разработчику, писать и отлаживать свой код React, не выходя из редактора, и, что наиболее важно,
        позволяет вести непрерывный рабочий процесс разработки, при котором переключение контекста минимально, так как
        вам не нужно переключаться между инструментами.
      </p>

      <ChapterTitle anchorId='visual-studio-code' as='h3'>
        Visual Studio Code
      </ChapterTitle>

      <p>
        Вам понадобится последняя версия <ChapterLink href='https://code.visualstudio.com/'>VS code</ChapterLink> а
        также установленное VS Code{' '}
        <ChapterLink href='https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome'>
          расширение Chrome Debugger
        </ChapterLink>
        .
      </p>

      <p>
        Затем добавьте указанный ниже блок в файл <code>launch.json</code> и поместите его в папку <code>.vscode</code>{' '}
        в корневом каталоге приложения.
      </p>

      <CodeBlock>
        <span>&#123;</span>
        <span>&nbsp;&nbsp;"version": "0.2.0",</span>
        <span>&nbsp;&nbsp;"configurations": [</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Chrome",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "chrome",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"request": "launch",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "http://localhost:3000",</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"webRoot": "$\{workspaceFolder}/src",`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sourceMapPathOverrides": &#123;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"webpack:///src/*": "$\{'webRoot'}/*"`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>

        <span>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>&nbsp;&nbsp;]</span>

        <span>&#125;</span>
      </CodeBlock>

      <blockquote>
        Примечание. URL-адрес может быть другим, если вы внесли изменения с помощью{' '}
        <ChapterLink href='/advanced-configuration/ ' isLink>
          переменных среды HOST или PORT
        </ChapterLink>{' '}
        .
      </blockquote>

      <p>
        Запустите приложение, использовав <code>npm start</code>, и начните отладку в VS Code, нажав <code>F5</code> или
        щелкнув зеленый значок отладки. Теперь вы можете писать код, устанавливать точки для тестов(breakpoints),
        вносить изменения в код и отлаживать недавно измененный код - и все это из редактора.
      </p>

      <p>
        Возникли проблемы с отладкой в VS code? См. их руководство по{' '}
        <ChapterLink href='https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting'>
          устранению неполадок
        </ChapterLink>
        .
      </p>

      <ChapterTitle as='h3' anchorId='WebStorm'>
        WebStorm
      </ChapterTitle>

      <p>
        Вам понадобится {''}
        <ChapterLink href='https://www.jetbrains.com/webstorm/'>WebStorm</ChapterLink> а также расширение{' '}
        <ChapterLink href='https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji'>
          JetBrains IDE Support
        </ChapterLink>{' '}
        Chrome.
      </p>

      <p>
        В меню WebStorm <code>Run</code> выберите <code>Edit Configurations...</code>. Затем нажмите <code>+</code> и
        выберите <code>JavaScript Debug</code>. Вставьте <code>http://localhost:3000</code> в поле URL и сохраните
        конфигурацию.
      </p>

      <blockquote>
        Примечание. URL-адрес может быть другим, если вы внесли изменения с помощью{' '}
        <ChapterLink href='/advanced-configuration/ ' isLink>
          переменных среды HOST или PORT
        </ChapterLink>{' '}
        .
      </blockquote>

      <p>
        Запустите приложение, запустив <code>npm start</code>, затем нажмите <code>^D</code> в macOS или <code>F9</code>{' '}
        в Windows и Linux или щелкните зеленый значок отладки, чтобы начать отладку в WebStorm.
      </p>

      <p>
        Таким же образом вы можете отлаживать свое приложение в IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro и
        RubyMine.
      </p>

      <ChapterTitle anchorId='formatting-code-automatically'>Автоматическое форматирование кода</ChapterTitle>

      <p>
        Prettier - это автоматический форматтер кода с поддержкой JavaScript, CSS и JSON. С Prettier вы можете
        форматировать код, который вы пишете автоматически, чтобы обеспечить стиль кода в вашем проекте. Посетите{' '}
        <ChapterLink href='https://github.com/prettier/prettier'>страницу Prettier GitHub</ChapterLink> для получения
        дополнительной информации.
      </p>

      <p>
        Чтобы отформатировать наш код всякий раз, когда мы делаем коммит в git, нам нужно установить следующие
        зависимости:
      </p>

      <CodeBlock>
        <span>npm install --save husky lint-staged prettier</span>
      </CodeBlock>

      <p>
        В качестве альтернативы вы можете использовать <code>yarn</code>:
      </p>

      <CodeBlock>
        <span>yarn add husky lint-staged prettier</span>
      </CodeBlock>

      <ul>
        <li>
          <code>husky</code> позволяет использовать githooks, как если бы они были скриптами npm.
        </li>
        <li>
          <code>lint-staged</code> позволяет запускать скрипты для промежуточных файлов в git.{' '}
          <ChapterLink href='https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8'>
            {' '}
            См. статью в блоге о lint-staged,
          </ChapterLink>{' '}
          чтобы узнать об этом больше.
        </li>
        <li>
          <code>prettier</code> это средство форматирования JavaScript, которое мы будем запускать перед commits.
        </li>
      </ul>

      <p>
        Теперь мы можем убедиться, что каждый файл отформатирован правильно, добавив несколько строк в{' '}
        <code>package.json</code> в корне проекта.
      </p>

      <p>
        Добавьте следующее поле в <code>package.json</code> раздел:
      </p>

      <CodeBlock>
        <span>+&nbsp;&nbsp;"husky": &#123;</span>
        <span>+&nbsp;&nbsp;&nbsp;&nbsp;"hooks": &#123;</span>
        <span>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"pre-commit": "lint-staged"</span>
        <span>+&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
        <span>+ &nbsp;&nbsp;&#125;</span>
      </CodeBlock>

      <p>
        Затем мы добавляем в <code>package.json</code> поле lint-staged, пример ниже:
      </p>

      <CodeBlock>
        <span> "dependencies": &#123;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;// ...</span>
        <span>&nbsp;&nbsp;&#125;,</span>
        <span>+&nbsp;"lint-staged": &#123;</span>
        <span>+&nbsp;&nbsp;&nbsp;"src/**/*.&#123;js,jsx,ts,tsx,json,css,scss,md&#125;": [</span>
        <span>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"prettier --write"</span>
        <span>+&nbsp;&nbsp;&nbsp;]</span>
        <span>+&nbsp;&#125;,</span>
        <span>&nbsp;&nbsp;"scripts": &#123;</span>
      </CodeBlock>

      <p>
        Теперь, когда вы делаете коммит, Prettier автоматически форматирует измененные файлы. Вы также можете запустить{' '}
        <code>./node_modules/.bin/prettier --write "src / ** / *. &#123;(Js, jsx, ts, tsx, json, css, scss, md)&#125;"</code>,
        чтобы впервые отформатировать весь проект .
      </p>

      <p>
        Затем вы можете интегрировать Prettier в свой любимый редактор. Прочтите раздел{' '}
        <ChapterLink href='https://prettier.io/docs/en/editors.html'> Интеграция редактора</ChapterLink> на странице
        Prettier GitHub.
      </p>
    </PageContent>
  );
};

export default EditorSetup;
