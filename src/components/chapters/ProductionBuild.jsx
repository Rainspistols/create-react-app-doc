import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';

const ProductionBuild = () => {
  return (
    <PageContent>
      <p>
        <code>npm run build</code> создает <code>build</code> папку с production build вашего приложения. Внутри
        <code>build/static</code>в папке будут ваши файлы JavaScript и CSS. Каждое имя файла внутри{' '}
        <code>build/static</code> будет содержать уникальный хеш содержимого файла. Этот хеш в имени файла позволяет
        использовать
        <ChapterLink href='/production-build/#static-file-caching' isLink>
          долгосрочные методы кэширования
        </ChapterLink>
        .
      </p>

      <p>
        При запуске production build недавно созданного приложения Create React App существует ряд <code>.js</code>{' '}
        файлы (называемые chunks) которые создаются и помещаются в <code>build/static/js</code> каталог:
      </p>

      <p>
        <code>main.[hash].chunk.js</code>
      </p>

      <ul>
        <li>
          Это код вашего приложения. <code>App.js</code>, etc.
        </li>
      </ul>

      <p>
        <code>[number].[hash].chunk.js</code>
      </p>

      <ul>
        <li>
          Эти файлы могут быть либо кодом пакетов npm-modules, либо {''}
          <ChapterLink href='/code-splitting/' isLink>
            фрагментами кода
          </ChapterLink>
          . Одно из потенциальных преимуществ разделения кода npm-modules и приложения - это включение возможности {''}
          <ChapterLink href='/production-build/#static-file-caching' isLink>
            долгосрочного методы кэширования
          </ChapterLink>{' '}
          для повышения производительности загрузки приложений. Поскольку код node-modules имеет тенденцию меняться
          реже, чем фактический код приложения, браузер сможет кэшировать их отдельно и не будет повторно загружать их
          каждый раз при изменении кода приложения.
        </li>
      </ul>

      <p>
        <code>runtime-main.[hash].js</code>
      </p>

      <ul>
        <li>
          Это небольшой фрагмент логики{' '}
          <ChapterLink href='https://webpack.js.org/configuration/optimization/#optimization-runtimechunk'>
            webpack
          </ChapterLink>
          , который используется для загрузки и запуска вашего приложения. Содержание по умолчанию он будет встроен в
          ваш файл <code>build/index.html</code> для сохранения дополнительного сетевого запроса. Вы можете отказаться
          от этого, указав <code>INLINE_RUNTIME_CHUNK=false</code> как описано в нашей{' '}
          <ChapterLink href='/advanced-configuration/' isLink>
            расширенной конфигурации
          </ChapterLink>
          , которая загрузит этот фрагмент вместо того, чтобы вставлять его в ваш <code>index.html</code>.
        </li>
      </ul>

      <p>
        Если вы используете {''}
        <ChapterLink href='/code-splitting/' isLink>
          разделение кода
        </ChapterLink>{' '}
        чтобы разделить ваше приложение, это создаст дополнительные фрагменты в папку<code>build/static</code>.
      </p>

      <ChapterTitle anchorId='static-file-caching'>Кэширование статических файлов</ChapterTitle>

      <p>
        Каждый файл внутри <code>build/static</code> папка будет иметь уникальный хеш, добавленный к имени файла который
        создается на основе содержимого файла, что позволяет использовать {''}
        <ChapterLink href='https://web.dev/http-cache/#invalidating_and_updating_cached_responses'>
          технику агрессивное кеширование
        </ChapterLink>{' '}
        чтобы браузер не загружал повторно ваши ресурсы, если содержимое файла не изменилось. Если содержимое файла
        изменения в последующей сборке, созданный хэш имени файла будет другим.
      </p>

      <p>
        Чтобы обеспечить максимальную производительность для ваших пользователей, рекомендуется указать заголовок{' '}
        <code>Cache-Control</code>
        для
        <code>index.html</code>,такой же как в <code>build/static</code>. Этот заголовок позволяет вам контролировать
        время, в течение которого браузер и сети CDN будут кэшировать ваши статические ресурсы. Если вы не знакомы с
        тем, что делает <code>Cache-Control</code>, см. {''}
        <ChapterLink href='https://jakearchibald.com/2016/caching-best-practices/'>эта статью</ChapterLink> для
        отличного введения.
      </p>

      <p>
        Используя <code>Cache-Control: max-age=31536000</code> для <code>build/static assets</code>, а также{' '}
        <code>Cache-Control: no-cache</code> это безопасная и эффективная отправная точка, которая гарантирует что
        браузер вашего пользователя всегда будет проверять наличие обновленных <code>index.html</code> файла, и будет
        кэшировать все
        <code>build/static</code> файлы сроком на один год. Обратите внимание, что вы можете использовать истечение
        одного года безопасно <code>build/static</code> ,потому что хэш содержимого файла встроен в имя файла.
      </p>

      <ChapterTitle anchorId='Profiling'>Профилирование</ChapterTitle>

      <p>
        ReactDOM автоматически поддерживает профилирование в режиме разработки для v16.5 +, но поскольку профилирование
        добавляет небольшие дополнительные файлы то этот режим по умолчанию выключен. Вы можете активировать его,
        используя <code>--profile</code> флаг. Используйте <code>npm run build -- --profile</code> или{' '}
        <code>yarn build --profile</code> чтобы включить профилирование в production build. Смотрите{' '}
        <ChapterLink href='https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler'>
          React docs
        </ChapterLink>{' '}
        для получения подробной информации о профилировании с помощью React DevTools.
      </p>
    </PageContent>
  );
};

export default ProductionBuild;
