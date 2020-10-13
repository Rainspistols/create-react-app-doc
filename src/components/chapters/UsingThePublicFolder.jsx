import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterTitle from '../../UI/ChapterTitle';
import ChapterLink from '../../UI/ChapterLink';
import CodeBlock from '../../UI/CodeBlock';

const UsingThePublicFolder = () => {
  return (
    <PageContent>
      <blockquote>
        Примечание: эта функция доступна с <code>react-scripts@0.5.0</code> и выше.
      </blockquote>

      <ChapterTitle anchorId='Changing the HTML'>Изменение HTML</ChapterTitle>

      <p>
        Папка <code>public</code>содержит HTML-файл, чтобы вы могли его настроить, например, чтобы{' '}
        <ChapterLink href='/title-and-meta-tags/' isLink>
          задать заголовок страницы
        </ChapterLink>
        . <code>{`<script>`}</code> Тег с скомпилированным кодом будет добавлен к нему автоматически в процессе сборки.
      </p>

      <ChapterTitle anchorId='Adding-Assets-Outside-of-the-Module-System'>
        Добавление внешних файлов вне модульной системы
      </ChapterTitle>

      <p>
        Вы также можете добавить другие внешние файлы в <code>public</code> папка.
      </p>

      <p>
        Обратите внимание, что мы обычно рекомендуем вам <code>import</code> внешние файлы в JavaScript. Например, см.
        разделы{' '}
        <ChapterLink href='/adding-a-stylesheet/' isLink>
          добавление таблиц стилей
        </ChapterLink>{' '}
        и{' '}
        <ChapterLink href='/adding-images-fonts-and-files/' isLink>
          добавление изображений, шрифтов и файлов
        </ChapterLink>
        . Этот механизм дает ряд преимуществ:
      </p>

      <ul>
        <li>Скрипты и таблицы стилей минифицируются и объединяются во избежание дополнительных сетевых запросов.</li>
        <li>Отсутствующие файлы вызывают ошибки компиляции вместо ошибок 404 для ваших пользователей.</li>
        <li>
          Конечные имена файлов включают в себя хеши поэтому вам не нужно беспокоиться о том, что браузеры кешируют их
          старые версии.
        </li>
      </ul>

      <p>
        Однако есть <strong>аварийный люк</strong>, который вы можете использовать для добавления внешнего файла вне
        модульной системы.
      </p>

      <p>
        Если вы поместите файл в <code>public</code> папку, он не будет обработан webpack. Вместо этого он будет
        скопирован в папку сборки нетронутой. Чтобы ссылаться на внешний файл в <code>public</code> папке, вам нужно
        использовать переменную среды с именем <code>PUBLIC_URL</code>.
      </p>

      <p>
        Внутри <code>index.html</code>, вы можете использовать это так:
      </p>

      <CodeBlock>
        <span>{`<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />`}</span>
      </CodeBlock>

      <p>
        Только файлы внутри <code>public</code> папки будет доступна с использованием <code>%PUBLIC_URL%</code>{' '}
        префикса. Если вам нужно использовать файл из <code>src</code> или <code>node_modules</code>, вам нужно будет
        скопировать его туда, чтобы явно указать свое намерение сделать этот файл частью сборки.
      </p>

      <p>
        Когда вы запускаете <code>npm run build</code>, Create React App заменит <code>%PUBLIC_URL%</code> с правильным
        абсолютным путем, чтобы ваш проект работал, даже если вы используете маршрутизацию на стороне клиента или
        размещаете его по некорневому URL-адресу.
      </p>

      <p>
        В коде JavaScript вы можете использовать <code>process.env.PUBLIC_URL</code> для аналогичных целей:
      </p>

      <CodeBlock>
        <span>{`render() {`}</span>
        <span>&nbsp;&nbsp;&nbsp;// Note: this is an escape hatch and should be used sparingly!</span>
        <span>&nbsp;&nbsp;&nbsp;// Normally we recommend using `import` for getting asset URLs</span>
        <span>&nbsp;&nbsp;&nbsp;// as described in “Adding Images and Fonts” above this section.</span>
        <span>&nbsp;&nbsp;&nbsp;{`return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;`}</span>
        <span>{`}`}</span>
      </CodeBlock>

      <p>Помните о недостатках этого подхода:</p>

      <ul>
        <li>
          Ни один из файлов в папке <code>public</code> не подвергается постобработке или уменьшению.
        </li>
        <li>
          Отсутствующие файлы не будут вызываться во время компиляции и вызовут ошибку 404 для ваших пользователей.
        </li>
        <li>
          Имена файлов результатов не будут включать хэши контента, поэтому вам нужно будет каждый раз добавлять
          аргументы запроса(query arguments) или переименовывать их при каждом их изменении.
        </li>
      </ul>

      <ChapterTitle anchorId='When-to-Use-the-public-Folder'>
        Когда использовать <code>public</code> папку
      </ChapterTitle>

      <p>
        Обычно мы рекомендуем импортировать{' '}
        <ChapterLink href='/adding-a-stylesheet/' isLink>
          таблицы стилей
        </ChapterLink>
        ,{' '}
        <ChapterLink href='/adding-images-fonts-and-files/' isLink>
          изображения и шрифты
        </ChapterLink>{' '}
        из JavaScript.<code>public</code> папка полезна как обходной путь для ряда менее распространенных случаев:
      </p>

      <ul>
        <li>
          Вам нужен файл с определенным именем в конечной сборке, например <code>manifest.webmanifest</code>.
        </li>
        <li>У вас есть тысячи изображений, и вам нужно динамически ссылаться на их пути.</li>
        <li>
          Вы хотите использовать небольшой скрипты, например <code>pace.js</code> вне основного кода.
        </li>
        <li>
          {`Некоторые библиотеки могут быть несовместимы с webpack и у вас нет другого выбора, кроме как включить их как`}{' '}
          <code>{`<script>`}</code> тег.
        </li>
      </ul>

      <p>Обратите внимание, что если вы добавите <code>{`<script>`}</code> который объявляет глобальные переменные, ты должен прочитать тему <ChapterLink href='/using-global-variables/' isLink>Использование глобальных переменных</ChapterLink> в следующем разделе, где объясняется, как ссылаться на них.</p>
    </PageContent>
  );
};

export default UsingThePublicFolder;
