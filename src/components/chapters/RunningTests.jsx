import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const RunningTests = () => {
  return (
    <PageContent>
      <blockquote>Примечание: эта функция доступна с react-scripts@0.3.0 и выше..</blockquote>

      <p>
        <ChapterLink href='https://github.com/facebook/create-react-app/blob/master/CHANGELOG-0.x.md#migrating-from-023-to-030'>
          Прочтите руководство по миграции, чтобы узнать, как использовать тесты в более старых проектах!
        </ChapterLink>
      </p>

      <p>
        Create React App использует <ChapterLink href='https://jestjs.io/'>Jest</ChapterLink> для тестов. Подготовить
        для этой интеграции мы сделали{' '}
        <ChapterLink href='https://jestjs.io/blog/2016/09/01/jest-15.html'>серьезно переработали</ChapterLink> Jest, так
        что если вы много лет назад слышали о Jest плохие отзывы, попробуйте еще раз.
      </p>

      <p>
        Jest Node-based среда. Это означает, что тесты всегда выполняются в среде Node, а не в реальном браузере. Это
        позволяет нам обеспечить высокую скорость итераций и предотвратить нестабильность.
      </p>

      <p>
        В то время как Jest предоставляет глобальные объекты браузера, такие как <code>window</code>, благодаря{' '}
        <ChapterLink href='https://github.com/jsdom/jsdom'>jsdom</ChapterLink>, они всего лишь копии похожие на реальное
        поведение браузера. Jest предназначен для модульных тестов вашей логики и компонентов, а не для манипуляций с
        DOM.
      </p>

      <p>
        Мы рекомендуем вам использовать отдельный инструмент для end-to-end тестов браузера, если они вам нужны. Они
        выходят за рамки Create React App.
      </p>

      <ChapterTitle anchorId='filename-conventions'>Соглашения об именах файлов</ChapterTitle>

      <p>Jest будет искать тестовые файлы с любым из следующих популярных соглашений об именах:</p>

      <ul>
        <li>
          {' '}
          Файлы с <code>.js</code> суффиксом в <code>__tests__</code> папках.
        </li>
        <li>
          {' '}
          Файлы с <code>.test.js</code> суффиксом.
        </li>
        <li>
          {' '}
          Файлы с <code>.spec.js</code> суффиксом.
        </li>
      </ul>

      <p>
        <code>.test.js</code> / <code>.spec.js</code> файлы (или <code>the __tests__ folders</code>) может находиться на
        любой глубине в папке верхнего уровня <code>src</code>.
      </p>

      <p>
        Рекомендуем хранить тестовые файлы(или <code>__tests__ folders</code>) рядом с кодом, который они тестируют,
        чтобы относительный импорт казался короче. Например, <code>если App.test.js</code> или <code>App.js</code>{' '}
        находятся в той же папке, для теста нужно только <code>import App from './App'</code> вместо длинного
        относительного пути. Совместное размещение также помогает быстрее находить тесты в более крупных проектах.
      </p>

      <ChapterTitle anchorId='command-line-interface'>Интерфейс командной строки(CLI)</ChapterTitle>

      <p>
        Когда вы <code>run npm test</code>, Jest будет запущен в <code>watch mode*</code>.Каждый раз, когда вы
        сохраняете файл, он будет повторно запускать тесты, например, как <code>npm start</code> перекомпилирует код.
      </p>

      <p>
        The watcher включает интерактивный интерфейс командной строки с возможностью запускать все тесты или
        сосредоточиться на шаблоне поиска. Он разработан таким образом, чтобы вы могли держать его открытым и
        наслаждаться быстрым обновлением. Вы можете узнать команды из “Watch Usage” которые watcher печатает после
        каждого запуска(run):
      </p>

      <p>
        <img src='https://jestjs.io/img/blog/15-watch.gif' alt='Jest watch mode' />
      </p>

      <blockquote>
        *Хотя мы рекомендуем проводить тесты в watch mode в течение development, вы можете отключить это поведение,
        используя в <code>--watchAll=false</code> флаг. В большинстве сред CI это делается за вас (см.{' '}
        <ChapterLink href='/running-tests/#on-ci-servers' isLink>
          на серверах CI
        </ChapterLink>
        ).
      </blockquote>

      <ChapterTitle anchorId='version-control-integration'>Интеграция контроля версий</ChapterTitle>

      <p>
        По умолчанию при запуске <code>npm test</code>, Jest будет запускать только тесты, относящиеся к файлам,
        измененным с момента последнего commit(a). Это оптимизация, призванная ускорить выполнение ваших тестов.
        независимо от того, сколько тестов у вас есть. Однако предполагается, что вы не часто делаете commit(ы) кода,
        который не проходит тесты.
      </p>

      <p>
        Jest всегда будет явно упоминать, что он запускал только тесты, связанные с файлами, измененными с момента
        последнего commit(a). Вы также можете нажать <code>a</code> в watch mode чтобы заставить Jest запускать все
        тесты.
      </p>

      <p>
        Jest всегда будет запускать все тесты на сервере в{' '}
        <ChapterLink href='/running-tests/#continuous-integration' isLink>
          непрерывной интеграции
        </ChapterLink>{' '}
        или если проект не находится в репозитории Git или Mercurial.
      </p>

      <ChapterTitle anchorId='writing-tests'>Написание тестов</ChapterTitle>

      <p>
        Для создания тестов добавьте <code>it()</code> (или <code>test()</code>) блоки с названием теста и его кодом.При
        желании вы можете обернуть их <code>describe()</code> блоки для логической группировки, но это не требуется и не
        рекомендуется.
      </p>

      <p>
        Jest обеспечивает встроенную <code>expect()</code> глобальную функция для создания утверждений. Базовый тест
        может выглядеть так:
      </p>

      <CodeBlock>
        <span>import sum from './sum';</span>
        <span>
          <br />
        </span>
        <span>{`it('sums numbers', () => {`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`expect(sum(1, 2)).toEqual(3);`}</span>
        <span>&nbsp;&nbsp;&nbsp;{`expect(sum(2, 2)).toEqual(4);`}</span>
        <span>{`});`}</span>
      </CodeBlock>

      <p>
        Все <code>expect()</code> matchers поддерживаемые Jest{' '}
        <ChapterLink href='https://jestjs.io/docs/en/expect.html#content'>подробно описаны здесь</ChapterLink>.
      </p>

      <p>
        Вы также можете использовать {''}
        <ChapterLink href='https://jestjs.io/docs/en/expect.html#tohavebeencalled'>
          <code>jest.fn()</code> а также <code>expect(fn).toBeCalled()</code>
        </ChapterLink>{' '}
        для создания «шпионских» или имитирующих функций.
      </p>

      <ChapterTitle anchorId='testing-components'>Компоненты тестирования</ChapterTitle>

      <p>
        Существует широкий спектр методов тестирования компонентов.Они варьируются от “smoke test” проверка того, что
        компонент отображается без throwing, до shallow рендеринг а также тестирование и жизненный цикл компонентов
        тестирования и изменения состояния.
      </p>

      <p>
        Разные проекты выбирают разные варианты тестирования в зависимости от того, как часто меняются компоненты и
        насколько много логики. они содержат. Если вы еще не определились со стратегией тестирования, рекомендуем вам
        начнем с создания основных smoke тестов для ваших компонентов:
      </p>

      <CodeBlock>
        <span>import React from 'react';</span>
        <span>import ReactDOM from 'react-dom';</span>
        <span>import App from './App';</span>
        <span>
          <br />
        </span>
        <span>{`it('renders without crashing', () => {`}</span>
        <span>&nbsp;&nbsp;&nbsp;const div = document.createElement('div');</span>
        <span>&nbsp;&nbsp;&nbsp;{`ReactDOM.render(<App />, div);`}</span>
        <span>{`});`}</span>
      </CodeBlock>

      <p>
        Этот тест создает компонент и проверяет, не сработал ли он во время рендеринга. Подобные тесты предоставляют
        большую ценность при минимальных усилиях, поэтому они отлично подходят в качестве отправной точки, и это тест,
        который вы найдете в <code>src/App.test.js</code>.
      </p>
    </PageContent>
  );
};

export default RunningTests;
