import React from 'react';
import ChapterTitle from '../../UI/ChapterTitle';
import PageContent from '../../layouts/PageContent';
import CodeBlock from '../../UI/CodeBlock';
import ChapterLink from '../../UI/ChapterLink';

const GettingStarted = () => {
  return (
    <PageContent>
      <p>
        Create React App это официально поддерживаемый способ создания
        одностраничного React приложения. Он предлагает современную настройку
        сборки без конфигурации.
      </p>
      <ChapterTitle anchorId='quick-start'>Быстрый старт</ChapterTitle>

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
          <ChapterLink href='https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b'>
            npx
          </ChapterLink>{' '}
          используется с npm 5.2+ и выше, см.{' '}
          <ChapterLink href='https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f'>
            инструкции для более старых версий npm версии
          </ChapterLink>
          )
        </em>
      </p>

      <p>
        Затем откройте {''}
        <ChapterLink href='http://localhost:3000/'>
          http://localhost:3000/
        </ChapterLink>{' '}
        чтобы увидеть ваше приложение.
      </p>

      <p>
        Когда вы будете готовы к развертыванию build версии, создайте
        миниатюрный пакет с <code>npm run build.</code>
      </p>

      <p>
        <img
          className='img-center'
          src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg'
          alt='npm start'
          width='600'
        />
      </p>

      <ChapterTitle as='h3' anchorId='get-started-immediately'>
        Начните немедленно
      </ChapterTitle>

      <p>
        Вам не нужно устанавливать или настраивать такие инструменты, как
        webpack или Babel. Они предварительно настроены и скрыты, поэтому вы
        можете сосредоточиться на коде.
      </p>
      <p>Создайте проект, и все готово.</p>

      <ChapterTitle anchorId='creating-an-app'>
        Создание приложения
      </ChapterTitle>

      <p>
        <strong>
          Вам понадобится Node версии >= 8.10 на вашем локальном компьютере
        </strong>{' '}
        (но это не обязательно на сервере). Вы можете использовать{' '}
        <ChapterLink href='https://github.com/nvm-sh/nvm#installation'>
          nvm
        </ChapterLink>{' '}
        (macOS / Linux) или{' '}
        <ChapterLink href='https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows'>
          nvm-windows
        </ChapterLink>{' '}
        для переключения Node версий в разных проектах.
      </p>

      <p>
        Чтобы создать новое приложение, вы можете выбрать один из следующих
        способов:
      </p>

      <ChapterTitle as='h3' anchorId='npx'>
        npx
      </ChapterTitle>

      <CodeBlock>
        <span>npx create-react-app my-app</span>
      </CodeBlock>

      <p>
        (
        <ChapterLink href='https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b'>
          npx
        </ChapterLink>{' '}
        поставляется с npm 5.2+ и выше, см.{' '}
        <ChapterLink href='https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f'>
          инструкции для более старых версий npm
        </ChapterLink>
        )
      </p>

      <ChapterTitle as='h3' anchorId='npm'>
        npm
      </ChapterTitle>

      <CodeBlock>
        <span>npm init react-app my-app</span>
      </CodeBlock>

      <p>
        <code>npm init {`<initializer>`}</code> is available in npm 6+
      </p>

      <ChapterTitle as='h3' anchorId='yarn'>
        Yarn
      </ChapterTitle>

      <CodeBlock>
        <span>yarn create react-app my-app</span>
      </CodeBlock>

      <p>
        <code>yarn create</code> доступно c версии Yarn 0.25+
      </p>

      <ChapterTitle as='h3' anchorId='selecting-a-template'>
        Выбор шаблона
      </ChapterTitle>

      <p>
        Теперь вы можете при желании запустить новое приложение из шаблона,
        добавив
        <code>--template [template-name]</code> к команде создания.
      </p>

      <p>
        Если вы не выберете шаблон, мы создадим ваш проект с помощью нашего
        базового шаблона.
      </p>

      <p>
        Шаблоны всегда называются в формате {''}
        <code> cra-template- [имя-шаблона] </code>, но вам нужно только указать{' '}
        <code> [имя-шаблона] </code> для команды создания.
      </p>

      <CodeBlock>
        <span>npx create-react-app my-app --template [template-name]</span>
      </CodeBlock>

      <blockquote>
        Вы можете найти список доступных шаблонов, выполнив поиск по запросу{' '}
        {''}
        <ChapterLink href='https://www.npmjs.com/search?q=cra-template-*'>
          "cra-template-*"
        </ChapterLink>{' '}
        по npm.
      </blockquote>

      <p>
        В нашей{' '}
        <ChapterLink isLink href='custom-templates/'>
          документации по пользовательским шаблонам
        </ChapterLink>{' '}
        описано, как вы можете создать свой собственный шаблон.
      </p>

      <ChapterTitle as='h3' anchorId='creating-a-typescript-app'>
        Создание TypeScript приложения
      </ChapterTitle>

      <p>
        Вы можете запустить новое создать TypeScript, используя шаблоны. Чтобы
        использовать наш шаблон TypeScript, добавьте{' '}
        <code>--template typescript</code> к команда создания.
      </p>

      <CodeBlock>
        <span>npx create-react-app my-app --template typescript</span>
      </CodeBlock>

      <p>
        Если у вас уже есть проект и вы хотите добавить к нему TypeScript, см.
        нашу{' '}
        <ChapterLink href='https://create-react-app.dev/docs/adding-typescript/'>
          документацию по добавлению TypeScript.
        </ChapterLink>
      </p>

      <ChapterTitle anchorId='selecting-a-package-manager'>
        Выбор менеджера пакетов
      </ChapterTitle>

      <p>
        Когда вы создаете новое приложение, интерфейс командной строки будет
        использовать <ChapterLink href='https://yarnpkg.com/'>Yarn</ChapterLink>{' '}
        для установки зависимостей (если они доступны). Если у вас установлен
        Yarn, но вы предпочитаете использовать npm, вы можете добавить{' '}
        <code>--use-npm</code>к команде создания. Например:
      </p>

      <CodeBlock>
        <span>npx create-react-app my-app --use-npm</span>
      </CodeBlock>

      <ChapterTitle anchorId='output'>Итоговый результат</ChapterTitle>
      <p>
        Выполнение любой из этих команд создаст каталог с именем my-app. внутри
        текущей папки. Внутри этого каталога он сгенерирует начальную структуру
        проекта и установит транзитивные зависимости:
      </p>

      <CodeBlock>
        <span>my-app</span>
        <span>── README.md</span>
        <span>── node_modules</span>
        <span>── package.json</span>
        <span>── .gitignore</span>
        <span>── public</span>
        <span>. │ ── favicon.ico</span>
        <span>. │ ── index.html</span>
        <span>. │ ── logo192.png</span>
        <span>. │ ── logo512.png</span>
        <span>. │ ── manifest.json</span>
        <span>. │ ── robots.txt</span>
        <span>── src</span>
        <span>. │ ── App.css</span>
        <span>. │ ── App.js</span>
        <span>. │ ── App.test.js</span>
        <span>. │ ── index.css</span>
        <span>. │ ── index.js</span>
        <span>. │ ── logo.svg</span>
        <span>. │ ── serviceWorker.js</span>
      </CodeBlock>

      <p>
        Никакой конфигурации или сложной структуры папок, только файлы, которые
        нужны для создания своего приложения. После завершения установки вы
        можете открыть папку своего проекта:
      </p>
      <CodeBlock>
        <span>cd my-app</span>
      </CodeBlock>

      <ChapterTitle anchorId='scripts'>Скрипты</ChapterTitle>
      <p>
        Внутри только что созданного проекта вы можете выполнить несколько
        встроенных команд:
      </p>

      <ChapterTitle as='h3' anchorId='npm-start-or-yarn-start'>
        <code>npm start</code> или <code>yarn start</code>
      </ChapterTitle>

      <p>
        Запускает приложение в режиме разработки. Откройте{' '}
        <ChapterLink href='http://localhost:3000/'>
          http://localhost:3000
        </ChapterLink>
        , чтобы просмотреть приложение в браузере.
      </p>

      <p>
        Страница автоматически перезагрузится, если вы внесете изменения в код.
        В консоли вы увидите ошибки сборки и предупреждения.
      </p>

      <p>
        <img
          src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg'
          alt='Build errors'
          className='img-center'
          width='600'
        />
      </p>

      <ChapterTitle anchorId='npm-test-or-yarn-test' as='h3'>
        <code>npm test</code> или <code>yarn test</code>
      </ChapterTitle>

      <p>
        Запускает средство наблюдения за тестами в интерактивном режиме. По
        умолчанию запускает тесты, связанные с файлами, измененными с момента
        последнего commit.
      </p>

      <p>
        <ChapterLink href='/running-tests/' isLink>
          Узнать больше о тестировании
        </ChapterLink>
        .
      </p>

      <ChapterTitle as='h3' anchorId='npm-run-build-or-yarn-build'>
        <code>npm run build</code> или <code>yarn build</code>
      </ChapterTitle>

      <p>
        Соберите(build) приложение для производства в папку <code> build </code>
        . Это правильно соеденит React в production режиме и оптимизирует сборку
        для лучшего производительность.
      </p>
      <p>Build минифицирован, а имена файлов включают хеши.</p>
      <p>Ваше приложение готово к развертыванию(deploy).</p>
    </PageContent>
  );
};

export default GettingStarted;
