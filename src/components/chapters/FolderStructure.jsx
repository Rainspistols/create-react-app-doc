import React from 'react';
import PageContent from '../../layouts/PageContent';
import CodeBlock from '../../UI/CodeBlock';

const FolderStructure = () => {
  return (
    <PageContent>
      <p>После создания ваш проект должен выглядеть так:</p>

      <CodeBlock>
        <span>my-app/</span>
        <span>&nbsp;&nbsp;&nbsp;README.md</span>
        <span>&nbsp;&nbsp;&nbsp;node_modules/</span>
        <span>&nbsp;&nbsp;&nbsp;package.json</span>
        <span>&nbsp;&nbsp;&nbsp;public/</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.html</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favicon.ico</span>
        <span>&nbsp;&nbsp;&nbsp;src/</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.css</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.js</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.test.js</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.css</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logo.svg</span>
      </CodeBlock>

      <p>
        Для сборки проекта эти файлы должны существовать с точными именами
        файлов:
      </p>

      <ul>
        <li>
          <code>public/index.html</code> это шаблон страницы;
        </li>
        <li>
          <code>src/index.js</code> это точка входа в JavaScript.
        </li>
      </ul>

      <p>Вы можете удалить или переименовать другие файлы.</p>

      <p>
        Вы можете создавать подпапки внутри <code>src</code>. Для более быстрой
        обновления проекта веб-пакетом обрабатываются только файлы внутри src.{' '}
        <b>Вам нужно поместить любые файлы JS и CSS в</b>{' '}<code>src</code>,
        иначе webpack их не увидит.
      </p>

      <p>
        Только файлы внутри <code>public</code> могут быть использованны в{' '}
        <code>public/index.html</code>. Прочтите инструкции ниже по
        использованию ресурсов из JavaScript и HTML.
      </p>

      <p>
        Однако вы можете создать больше каталогов верхнего уровня. Они не будут
        включены в производственную сборку, поэтому вы можете использовать их
        для таких вещей, как документация.
      </p>

      <p>
        Если у вас установлен Git и ваш проект не является частью более крупного
        репозитория, то будет инициализирован новый репозиторий, в результате
        чего будет создан дополнительный каталог верхнего уровня{' '}
        <code>.git</code>.
      </p>
    </PageContent>
  );
};

export default FolderStructure;
