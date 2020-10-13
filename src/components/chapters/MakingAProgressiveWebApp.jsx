import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const MakingAProgressiveWebApp = () => {
  return (
    <PageContent>
      <p>
        Production build имеет все инструменты, необходимые для создания первоклассного{' '}
        <ChapterLink href='https://web.dev/progressive-web-apps/'>Progressive Web App</ChapterLink>,{' '}
        <strong>но поведение в автономном режиме/в первую очередь кешируется только при включении</strong>. По умолчанию
        в процессе сборки будет создан файл сервис-воркера, но он не будет зарегистрирован, поэтому он не будет
        управлять вашим production веб-приложением.
      </p>

      <p>
        Чтобы отказаться от поведения в автономном режиме, разработчики должны обратить внимание на следующее в своих{' '}
        <code>src/index.js</code> файлах:
      </p>

      <CodeBlock>
        <span>{`// If you want your app to work offline and load faster, you can change`}</span>
        <span>{`// unregister() to register() below. Note this comes with some pitfalls.`}</span>
        <span>{`// Learn more about service workers: https://bit.ly/CRA-PWA`}</span>
        <span>serviceWorker.unregister();</span>
      </CodeBlock>

      <p>
        Как говорится в комментарии, переключение <code>serviceWorker.unregister()</code> на{' '}
        <code>serviceWorker.register()</code> позволит вам использовать сервис-воркер.
      </p>

      <ChapterTitle anchorId='why-opt-in?'>Зачем нужна опциональное включение?</ChapterTitle>

      <p>
        Прогрессивные веб-приложения, ориентированные на автономный режим, быстрее и надежнее традиционных веб-страниц,
        а также обеспечивают лучший мобильный опыт:
      </p>

      <CodeBlock>
        <span>
          Все статические ресурсы сайта кэшируются, поэтому ваша страница загружается быстро при последующих посещениях,
          независимо от сети. Возможность подключения (например, 2G или 3G). Обновления загружаются в фоновом режиме.
        </span>
        <span>
          Ваше приложение будет работать независимо от состояния сети, даже если оно отключено. Это означает, что ваши
          пользователи смогут использовать ваше приложение на высоте 10 000 футов и в метро.
        </span>
        <span>
          На мобильных устройствах ваше приложение можно добавить прямо на главный экран пользователя, на значок
          приложения и все остальное. Это устраняет необходимость магазина приложений.
        </span>
      </CodeBlock>

      <p>
        Однако они могут сделать{' '}
        <ChapterLink href='https://github.com/facebook/create-react-app/issues/2398'>усложнить deploy</ChapterLink> так,
        начиная с Create React App 2, сервис-воркеры по умолчанию отключены.
      </p>

      <p>
        <code>Workbox-webpack-plugin</code> интегрирован в производственную конфигурацию, и он позаботится о создании
        файл сервис-воркера, который будет автоматически предварительно кэшировать все ваши локальные ресурсы и
        поддерживать их в актуальном состоянии по мере того, как вы deploy обновления. Serviceworker будет использовать{' '}
        {''}
        <ChapterLink href='https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network'>
          cache-first strategy
        </ChapterLink>{' '}
        для обработки всех запросов на локальные файлы, включая{' '}
        <ChapterLink href='https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests'>
          запросы навигации
        </ChapterLink>{' '}
        для вашего HTML, гарантируя, что ваше веб-приложение постоянно работает быстро, даже в медленной или ненадежной
        сети.
      </p>

      <ChapterTitle anchorId='offline-first-considerations'>Offline-First причины</ChapterTitle>

      <p>Если вы все же решите согласиться на регистрацию Service worker, примите во внимание следующее:</p>

      <ol>
        <li>
          <span>
            После завершения первоначального кэширования{' '}
            <ChapterLink href='https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle'>
              жизненный цикл service worker
            </ChapterLink>{' '}
            контролирует, когда обновленное содержимое будет показано пользователям. Чтобы защититься от{' '}
            <ChapterLink href='https://github.com/facebook/create-react-app/issues/3613#issuecomment-353467430'>
              состояния гонки с lazy-loaded контентом
            </ChapterLink>
            , поведение по умолчанию - консервативное сохранение обновленного service worker(а) в состоянии "
            <ChapterLink href='https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting'>
              ожидания
            </ChapterLink>
            ". Это означает, что пользователи будут видеть старый контент, пока не закроют их активные вкладки
            (перезагрузки не хватает). Смотрите{' '}
            <ChapterLink href='https://jeffy.info/2018/10/10/sw-in-c-r-a.html'>эту статьи</ChapterLink> что бы узнать
            больше об этом поведении.
          </span>
        </li>
        <br />
        <li>
          <span>
            Пользователи не всегда знакомы с offline-first web приложениями. Может быть полезно{' '}
            <ChapterLink href='https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption'>
              дать пользователю знать
            </ChapterLink>
            , когда service worker завершил кеширование (отображается сообщение «Это веб-приложение работает в
            автономном режиме!»)а также сообщить им, когда service worker получит последние обновления, которые будут
            доступны при следующей загрузке страницы (отображается "Новое содержимое доступно после того, как
            существующие вкладки закрыты. "сообщением). Отображение этих сообщений в настоящее время оставлено в
            качестве решения для разработчика, но как отправной точкой, вы можете использовать логику, включенную в{' '}
            <code>src/serviceWorker.js</code>, который демонстрирует, какие события жизненного цикла service worker(a)
            следует отслеживать каждый сценарий, и который по умолчанию записывает только соответствующие сообщения в
            консоль JavaScript.
          </span>
        </li>
        <br />
        <li>
          <span>
            Service workers{' '}
            <ChapterLink href='https://developers.google.com/web/fundamentals/primers/service-workers#you_need_https'>
              требуется HTTPS
            </ChapterLink>
            ,хотя для облегчения тестирования локально это правило{' '}
            <ChapterLink href='https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385'>
              не относится к localhost
            </ChapterLink>
            . Если ваш production веб-сервер не поддерживает HTTPS, регистрация service-worker не удастся, но остальная
            часть вашего веб-приложения останется функциональной.
          </span>
        </li>
        <br />
        <li>
          <span>
            Service worker включен только в{' '}
            <ChapterLink href='/deployment/' isLink>
              production environment
            </ChapterLink>
            , например при использовании <code>npm run build</code>. Рекомендуется не включать service worker,
            работающего в автономном режиме, в среде разработки, так как это может привести к проблемам, когда
            используются ранее кэшированные ресурсы, не содержащие последних изменений, внесенных вами локально.
          </span>
        </li>
        <br />
        <li>
          <span>
            Если вам нужно проверить свой offline-first service worker локально, build приложение (using{' '}
            <code>npm run build</code>) и запустите стандартный http-сервер со своей build папки. После запуска build
            script, <code>create-react-app</code>
            даст инструкции по одному способу проверки вашего production build locally а также{' '}
            <ChapterLink href='/deployment/' isLink>
              deployment инструкции
            </ChapterLink>
            есть инструкции по использованию других методов. Обязательно всегда используйте окно в режиме инкогнито,
            чтобы избежать сложности с кешем вашего браузера.
          </span>
        </li>
        <li>
          <span>
            По умолчанию сгенерированный service worker файл не будет перехватывать или кэшировать любой трафик из
            разных источников, например HTTP {''}
            <ChapterLink href='/integrating-with-an-api-backend/' isLink>
              Запросы API
            </ChapterLink>
            , изображения или вставленные файлы, загруженные из другого домена.
          </span>
        </li>
      </ol>

      <ChapterTitle anchorId='progressive-web-app-metadata'>Progressive Web App Metadata</ChapterTitle>

      <p>
        Конфигурация по умолчанию включает манифест веб-приложения, расположенный по адресу{' '}
        <code>public/manifest.json</code>, которые вы можете настроить, для вашего веб-приложения.
      </p>

      <p>
        Когда пользователь добавляет веб-приложение на свой главный экран с помощью Chrome или Firefox на Android,
        метаданные в <code> manifest.json </code> определяют, какие значки, имена и цвет сайта использовать при
        отображении веб-приложения.{' '}
        <ChapterLink href='https://web.dev/add-manifest/'>Web App Manifest руководство</ChapterLink> предоставляет
        больше информации о том, что означает каждое поле, и как ваши настройки повлияют на UX.
      </p>

      <p>
        Прогрессивные веб-приложения, которые были добавлены на главный экран, будут загружаться быстрее и работать в
        автономном режиме, когда есть активный service worker. При этом метаданные из манифеста веб-приложения
        по-прежнему будут использоваться независимо от того, согласны ли вы на регистрацию service worker(a).
      </p>
    </PageContent>
  );
};

export default MakingAProgressiveWebApp;
