import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const AddingCustomEnvironmentVariables = () => {
  return (
    <PageContent>
      <blockquote>
        Примечание: эта функция доступна для <code>react-scripts@0.2.3</code> и более поздних версий.
      </blockquote>
      <p>
        Ваш проект может использовать переменные, объявленные в вашей среде, как если бы они были объявлены локально в
        ваших JS файлах. По умолчанию у вас будет <code>NODE_ENV</code> определенный для вас, и любые другие переменные
        среды, начинающиеся с <code>REACT_APP_</code>.
      </p>
      <blockquote>
        <p>ВНИМАНИЕ: не храните никаких секретов (например, закрытых ключей API) в вашем приложении React!</p>

        <p>
          Переменные среды встроены в сборку, что означает, что любой может увидеть их, проверив файлы вашего
          приложения.
        </p>
      </blockquote>
      <p>
        <strong>Переменные среды включаются во время build time</strong>. Поскольку приложение Create React создает
        статический пакет HTML/CSS/JS, он не может прочитать переменные среды во время run time. Чтобы прочитать их в
        run time, вам нужно будет загрузить HTML в память на сервере и заменить placeholders в run time, как{' '}
        <ChapterLink href='/title-and-meta-tags/#injecting-data-from-the-server-into-the-page' isLink>
          описано здесь
        </ChapterLink>
        . В качестве альтернативы вы можете перестроить приложение на сервере в любое время, когда вы его меняете.
      </p>
      <blockquote>
        Примечание. Вы должны создавать собственные переменные среды, начиная с <code>REACT_APP_</code>. Любые другие
        переменные, кроме <code>NODE_ENV</code> будут проигнорированы, чтобы избежать{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527'>
          случайного раскрытия секретного ключа на машине, который может иметь то же имя
        </ChapterLink>
        . Изменение любых переменных среды потребует перезапуска сервера разработки, если он запущен.
      </blockquote>
      <p>
        Эти переменные среды будут определены для вас в <code>process.env</code>. Например, если переменная среды
        называется <code>REACT_APP_NOT_SECRET_CODE</code> будет отображаться в вашем JS как{' '}
        <code>process.env.REACT_APP_NOT_SECRET_CODE</code>.
      </p>
      <p>
        Также есть встроенная переменная среды, называемая <code>NODE_ENV</code>. Вы можете прочитать её из{' '}
        <code>process.env.NODE_ENV</code>. Когда вы запускаете <code>npm start</code>, это всегда идентично{' '}
        <code>'development'</code>, когда вы запускаете <code>npm test</code> это всегда равно <code>'test'</code>, и
        когда вы запускаете <code>npm run build</code> чтобы создать production bundle, это всегда равно{' '}
        <code>'production'</code>.{' '}
        <strong>
          Вы не можете изменить <code>NODE_ENV</code> вручную
        </strong>
        . Это предохраняет разработчиков от случайного создание медленного production build.
      </p>
      <p>
        Эти переменные среды могут быть полезны для условного отображения информации в зависимости от того, где
        развернут проект или использования конфиденциальных данных, находящихся вне контроля версий.
      </p>
      <p>
        Во-первых, вам нужно определить переменные среды. Например, предположим, вы хотите использовать переменную
        окружения внутри <code>{`<form>`}</code>:
      </p>
      <CodeBlock>
        <span>{`render() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`return (`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>`}
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<form>`}</span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />`}
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</form>`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`);`}</span>
        <span>{`}`}</span>
      </CodeBlock>
      <p>
        Вовремя build, <code>process.env.REACT_APP_NOT_SECRET_CODE</code> будет заменено текущим значением{' '}
        <code>REACT_APP_NOT_SECRET_CODE</code> переменной окружения.Помните, что <code>NODE_ENV</code> переменная будет
        установлена ​​для вас автоматически.
      </p>
      <p>
        Когда вы загружаете приложение в браузер и просматриваете <code>{`<input>`}</code>, вы увидите, что его значение
        установлено на abcdef, и полужирным шрифтом будет показана среда, предоставленная при использовании{' '}
        <code>npm start</code>:
      </p>
      <CodeBlock>
        <span>{`<div>`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`<small>You are running this application in <b>development</b> mode.</small>`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`<form>`}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<input type="hidden" value="abcdef" />`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`</form>`}</span>
        <span>{`</div>`}</span>
      </CodeBlock>
      <p>
        Форма выше ищет переменную с именем<code>REACT_APP_NOT_SECRET_CODE</code> из окружающей среды. Чтобы
        использовать это значение, нам нужно, чтобы оно было определено в среде. Это можно сделать двумя способами: в
        вашей оболочке или в файле <code>.env</code>. Оба эти способа описаны в следующих нескольких разделах.
      </p>
      <p>
        Иметь доступ к <code>NODE_ENV</code> также полезно для выполнения действий условно:
      </p>
      <CodeBlock>
        <span>{`if (process.env.NODE_ENV !== 'production') {`}</span>
        <span>&nbsp;&nbsp;&nbsp;analytics.disable();</span>
        <span>{`}`}</span>
      </CodeBlock>
      <p>
        Когда вы компилируете приложение с <code>npm run build</code>, шаг минификации удалит это условие, и
        результирующий пакет будет меньше.
      </p>
      <ChapterTitle anchorId='referencing-environment-variables-in-the-HTML'>
        Ссылка на переменные среды в HTML
      </ChapterTitle>
      <blockquote>
        Примечание: эта функция доступна с <code>react-scripts@0.9.0</code> и выше.
      </blockquote>
      <p>
        Вы также можете получить доступ к переменным среды, начинающихся с <code>REACT_APP_</code> в{' '}
        <code>public/index.html</code>. Например:
      </p>
      <CodeBlock>
        <span>{`<title>%REACT_APP_WEBSITE_NAME%</title>`}</span>
      </CodeBlock>
      <p>Обратите внимание, что применяются предостережения из приведенного выше раздела:</p>
      <ul>
        <li>
          Помимо нескольких встроенных переменных (<code>NODE_ENV</code> and <code>PUBLIC_URL</code>), имена переменных
          должны начинаться с <code>REACT_APP_</code> чтобы работать.
        </li>
        <li>
          Переменные среды вводятся в build time. Если вам нужно ввести их в runtime,{' '}
          <ChapterLink href='/title-and-meta-tags/#generating-dynamic-meta-tags-on-the-server' isLink>
            вместо этого следуйте этому подходу
          </ChapterLink>
          .
        </li>
      </ul>
      <ChapterTitle anchorId='adding-temporary-environment-variables-in-your-shell'>
        Добавление временных переменных среды в вашу оболочку
      </ChapterTitle>
      <p>
        Определение переменных среды может варьироваться в зависимости от ОС. Также важно знать, что это временный
        способ на время сеанса оболочки.
      </p>
      <ChapterTitle anchorId='windows-(cmd.exe)' as='h3'>
        Windows (cmd.exe)
      </ChapterTitle>
      <CodeBlock>
        <span>set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start</span>
      </CodeBlock>
      <p>(Примечание: кавычки вокруг присвоения переменной необходимы, чтобы избежать конечного пробела.)</p>
      <ChapterTitle anchorId='windows-(powershell)' as='h3'>
        Windows (Powershell)
      </ChapterTitle>
      <CodeBlock>
        <span>($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)</span>
      </CodeBlock>
      <ChapterTitle anchorId='linux,-macOS-(Bash)' as='h3'>
        Linux, macOS (Bash)
      </ChapterTitle>
      <CodeBlock>
        <span>REACT_APP_NOT_SECRET_CODE=abcdef npm start</span>
      </CodeBlock>
      <ChapterTitle anchorId='adding-development-environment-variables-in-.env'>
        Добавление переменных среды разработки в .env
      </ChapterTitle>
      <blockquote>
        Примечание: эта функция доступна в <code>react-scripts@0.5.0</code> и выше.
      </blockquote>
      <p>
        Чтобы определить постоянные переменные среды, создайте файл с именем <code>.env</code> в корне вашего проекта:
      </p>
      <CodeBlock>
        <span>REACT_APP_NOT_SECRET_CODE=abcdef</span>
      </CodeBlock>
      <blockquote>
        {' '}
        Примечание. Вы должны создавать собственные переменные среды, начиная с <code>REACT_APP_</code>. Любые другие
        переменные, кроме <code>NODE_ENV</code> будут проигнорированы, чтобы{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527'>
          избежать случайного доступа к закрытому ключу на машине с таким же именем
        </ChapterLink>
        . Изменение любых переменных среды потребует перезапуска сервера разработки, если он запущен.
      </blockquote>
      <blockquote>
        Примечание: вам необходимо перезапустить сервер разработки после изменения <code>.env</code> файлов.
      </blockquote>
      <p>
        <code>.env</code> файлы должны быть проверены в системе контроля версий (за исключением code.env*.local).
      </p>

      <ChapterTitle anchorId='what-other-.env-files-can-be-used?' as='h3'>
        Какие еще <code>.env</code> файлы можно использовать?
      </ChapterTitle>

      <blockquote>
        Примечание: эта функция доступна для <code>react-scripts@1.0.0</code> и выше.
      </blockquote>

      <ul>
        <li>
          <code>.env</code>: По умолчанию.
        </li>
        <li>
          <code>.env.local</code>: Локальные переопределения. Этот файл загружается для всех сред, кроме test.
        </li>
        <li>
          <code>.env.development</code>, <code>.env.test</code>, <code>.env.production</code>: Настройки для конкретной
          среды.
        </li>
        <li>
          <code>.env.development.local</code>, <code>.env.test.local</code>, <code>.env.production.local</code>: Местный
          переопределение настроек, зависящих от среды.
        </li>
      </ul>

      <p>Файлы слева имеют больший приоритет, чем файлы справа:</p>

      <ul>
        <li>
          {' '}
          <code>npm start</code>: <code>.env.development.local</code>, <code>.env.development</code>,{' '}
          <code>.env.local</code>, <code>.env</code>
        </li>
        <li>
          {' '}
          <code>npm run build</code>: <code>.env.production.local</code>, <code>.env.production</code>,{' '}
          <code>.env.local</code>, <code>.env</code>
        </li>
        <li>
          {' '}
          <code>npm test</code>: <code>.env.test.local</code>, <code>.env.test</code>, (заметьте <code>.env.local</code>{' '}
          отсутствует)
        </li>
      </ul>

      <p>Эти переменные будут действовать как значения по умолчанию, если машина не установила их явно.</p>

      <p>
        Пожалуйста, обратитесь к{' '}
        <ChapterLink href='https://github.com/motdotla/dotenv'>документации dotenv</ChapterLink> для получения более
        подробной информации.
      </p>

      <blockquote>
        Примечание. Если вы определяете переменные среды для разработки, скорее всего, они также потребуются для вашего
        CI и / или хостинговой платформы. Например, см. документацию для{' '}
        <ChapterLink href='https://docs.travis-ci.com/user/environment-variables/'>Travis CI</ChapterLink> или{' '}
        <ChapterLink href='https://devcenter.heroku.com/articles/config-vars'>Heroku</ChapterLink>.
      </blockquote>

      <ChapterTitle href='expanding-environment-variables-in-.env' as='h3'>
        Расширение переменных среды в <code>.env</code>
      </ChapterTitle>

      <blockquote>
        Примечание: эта функция доступна в <code>react-scripts@1.1.0</code> и выше.
      </blockquote>

      <p>
        Расширьте переменные, уже имеющиеся на вашем компьютере, для использования в вашем <code>.env</code> файле (с
        помощью <ChapterLink href='https://github.com/motdotla/dotenv-expand'>dotenv-expand</ChapterLink>).
      </p>

      <p>
        Например, чтобы получить переменную окружения <code>npm_package_version</code>:
      </p>

      <CodeBlock>
        <span>REACT_APP_VERSION=$npm_package_version</span>
        <span># also works:</span>
        <span>
          # REACT_APP_VERSION=${`{`}npm_package_version{`}`}
        </span>
      </CodeBlock>

      <p>
        Или добавьте локальные переменные в <code>.env</code> файл:
      </p>

      <CodeBlock>
        <span>DOMAIN=www.example.com</span>
        <span>REACT_APP_FOO=$DOMAIN/foo</span>
        <span>REACT_APP_BAR=$DOMAIN/bar</span>
      </CodeBlock>
    </PageContent>
  );
};

export default AddingCustomEnvironmentVariables;
