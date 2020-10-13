import React from 'react';
import PageContent from '../../layouts/PageContent';
import ChapterLink from '../../UI/ChapterLink';
import ChapterTitle from '../../UI/ChapterTitle';
import CodeBlock from '../../UI/CodeBlock';

const UsingHttpsInDevelopment = () => {
  return (
    <PageContent>
      <blockquote>Примечание: эта функция доступна с response-scripts@0.4.0 и выше.</blockquote>

      <p>
        Вам может потребоваться, чтобы сервер разработки обслуживал страницы по HTTPS. Одним из конкретных случаев,
        когда это может быть полезно, является использование функции{' '}
        <ChapterLink hreft='/proxying-api-requests-in-development/' isLink>
          «прокси» для прокси-запросов
        </ChapterLink>{' '}
        к серверу API, когда этот сервер API сам обслуживает HTTPS.
      </p>

      <p>
        Для этого установите для переменной среды <code>HTTPS</code> значение <code>true</code>, затем запустите сервер
        разработки, как обычно, с помощью <code>npm start</code>:
      </p>

      <ChapterTitle anchorId='windows-(cmd.exe)'>Windows (cmd.exe)</ChapterTitle>

      <CodeBlock>
        <span>set HTTPS=true&&npm start</span>
      </CodeBlock>

      <p>(Примечание: отсутствие пробелов намеренно.)</p>

      <ChapterTitle anchorId='windows-(Powershell)'>
        <span>Windows (Powershell)</span>
      </ChapterTitle>

      <CodeBlock>
        <span>($env:HTTPS = "true") -and (npm start)</span>
      </CodeBlock>

      <ChapterTitle anchorId='Linux,-macOS-(Bash)'>Linux, macOS (Bash)</ChapterTitle>

      <CodeBlock>
        <span>HTTPS=true npm start</span>
      </CodeBlock>

      <p>
        Обратите внимание, что сервер будет использовать авто-получаемый сертификат, поэтому ваш веб-браузер почти
        наверняка отобразит предупреждение при доступе к странице.
      </p>

      <ChapterTitle anchorId='custom-SSL-сertificate'>
        <span>Custom SSL certificate</span>
      </ChapterTitle>

      <p>
        Чтобы установить собственный сертификат, установите в переменных среды <code>SSL_CRT_FILE</code> и{' '}
        <code>SSL_KEY_FILE</code> путь к файлам сертификата и ключей, как вы это делали для <code>HTTPS</code> выше.
        Обратите внимание, что вам также необходимо установить <code>HTTPS=true</code>.
      </p>

      <ChapterTitle anchorId='Linux,-macOS-(Bash)-for-custom-SSL' as='h3'>
        Linux, macOS (Bash) for custom SSL
      </ChapterTitle>

      <CodeBlock>
        <span>HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start</span>
      </CodeBlock>

      <p>
        Чтобы избежать необходимости каждый раз устанавливать переменную окружения, вы можете включить ее в{' '}
        <code>npm start</code> следующим образом:
      </p>

      <CodeBlock>
        <span>&#123;</span>
        <span>&nbsp;&nbsp;"start": "HTTPS=true react-scripts start"</span>
        <span>&#125;</span>
      </CodeBlock>

      <p>
        Или вы можете создать файл <code>.env</code> с установленным <code>HTTPS=true</code>. Узнайте больше о{' '}
        <ChapterLink href='/adding-custom-environment-variables/' isLink>
          переменных среды в CRA
        </ChapterLink>
        .
      </p>
    </PageContent>
  );
};

export default UsingHttpsInDevelopment;
